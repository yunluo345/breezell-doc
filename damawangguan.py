from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter
import re
import subprocess
import sys


@dataclass
class juzhen:
    heng: int
    zong: int
    kuan: int
    gao: int


def shifoumingan(wenben: str) -> bool:
    wenben = wenben.strip()

    if not wenben:
        return False

    moshi = [
        r"https?[:;/]{1,3}",
        r"\b\d{1,3}(?:\.\d{1,3}){3}(?::\d+)?\b",
        r"\b[a-z0-9.-]+\.[a-z]{2,}(?::\d+)?(?:/[^\s]*)?\b",
        r"/v\d+/[^\s]+",
        r"/api/[^\s]+",
        r"/compatible-mode/[^\s]+",
        r"/chat/completions\b",
        r"/responses\b",
    ]

    return any(re.search(m, wenben, flags=re.IGNORECASE) for m in moshi)


def hechengjuzhen(juzhenmen: list[juzhen], bianju: int, tuxiang: Image.Image) -> list[juzhen]:
    if not juzhenmen:
        return []

    paixu = sorted(juzhenmen, key=lambda xiang: (xiang.zong, xiang.heng))
    jieguo: list[juzhen] = []
    dangqian = paixu[0]

    for xiang in paixu[1:]:
        dangqianyou = dangqian.heng + dangqian.kuan
        dangqianxia = dangqian.zong + dangqian.gao
        xiangyou = xiang.heng + xiang.kuan
        xiangxia = xiang.zong + xiang.gao

        shifoutonghang = abs(xiang.zong - dangqian.zong) <= max(dangqian.gao, xiang.gao)
        shifouxiangyou = xiang.heng >= dangqian.heng
        shifoulianjie = shifouxiangyou and xiang.heng <= dangqianyou + bianju * 2

        if shifoutonghang and shifoulianjie:
            xiaoheng = min(dangqian.heng, xiang.heng)
            xiaozong = min(dangqian.zong, xiang.zong)
            dayou = max(dangqianyou, xiangyou)
            daxia = max(dangqianxia, xiangxia)
            dangqian = juzhen(xiaoheng, xiaozong, dayou - xiaoheng, daxia - xiaozong)
            continue

        jieguo.append(kuozhanzhixing(dangqian, bianju, tuxiang))
        dangqian = xiang

    jieguo.append(kuozhanzhixing(dangqian, bianju, tuxiang))
    return jieguo


def kuozhanzhixing(xiang: juzhen, bianju: int, tuxiang: Image.Image) -> juzhen:
    heng = max(0, xiang.heng - bianju)
    zong = max(0, xiang.zong - bianju)
    you = min(tuxiang.width, xiang.heng + xiang.kuan + bianju)
    xia = min(tuxiang.height, xiang.zong + xiang.gao + bianju)
    return juzhen(heng, zong, you - heng, xia - zong)


def paichutsv(shuru: Path) -> list[dict[str, str]]:
    return paichutsv_moshi(shuru, "6")


def paichutsv_moshi(shuru: Path, moshi: str) -> list[dict[str, str]]:
    mingling = [
        "tesseract",
        str(shuru),
        "stdout",
        "--psm",
        moshi,
        "tsv",
    ]

    try:
        jieguo = subprocess.run(
            mingling,
            check=True,
            capture_output=True,
            text=True,
        )
    except Exception:
        return []

    hangmen = jieguo.stdout.splitlines()

    if len(hangmen) < 2:
        return []

    biaotou = hangmen[0].split("\t")
    shuju: list[dict[str, str]] = []

    for hang in hangmen[1:]:
        zhiduan = hang.split("\t")

        if len(zhiduan) < len(biaotou):
            continue

        shuju.append(dict(zip(biaotou, zhiduan)))

    return shuju


def tsvhangbiaoji(hang: dict[str, str]) -> tuple[str, str, str, str]:
    return (
        hang.get("page_num", ""),
        hang.get("block_num", ""),
        hang.get("par_num", ""),
        hang.get("line_num", ""),
    )


def xunzhaojuzhen(shuru: Path, tuxiang: Image.Image) -> list[juzhen]:
    daima: list[juzhen] = []
    yijia: set[tuple[int, int, int, int]] = set()

    for moshi in ("6", "11"):
        tsv = paichutsv_moshi(shuru, moshi)
        hangjuzhen: dict[tuple[str, str, str, str], list[juzhen]] = {}

        for hang in tsv:
            wenben = hang.get("text", "").strip()

            if not wenben or not shifoumingan(wenben):
                continue

            try:
                xiang = juzhen(
                    int(hang["left"]),
                    int(hang["top"]),
                    int(hang["width"]),
                    int(hang["height"]),
                )
            except Exception:
                continue

            hangjuzhen.setdefault(tsvhangbiaoji(hang), []).append(xiang)

        for juzhenmen in hangjuzhen.values():
            heng = min(xiang.heng for xiang in juzhenmen)
            zong = min(xiang.zong for xiang in juzhenmen)
            you = max(xiang.heng + xiang.kuan for xiang in juzhenmen)
            xia = max(xiang.zong + xiang.gao for xiang in juzhenmen)
            hecheng = kuozhanzhixing(juzhen(heng, zong, you - heng, xia - zong), 10, tuxiang)
            biaoji = (hecheng.heng, hecheng.zong, hecheng.kuan, hecheng.gao)

            if biaoji not in yijia:
                yijia.add(biaoji)
                daima.append(hecheng)

    return hechengjuzhen(daima, 6, tuxiang)


def damaquyu(tuxiang: Image.Image, quyu: juzhen) -> None:
    kuai = tuxiang.crop((quyu.heng, quyu.zong, quyu.heng + quyu.kuan, quyu.zong + quyu.gao))
    kuai = kuai.resize(
        (
            max(1, quyu.kuan // 12),
            max(1, quyu.gao // 12),
        ),
        Image.Resampling.BILINEAR,
    )
    kuai = kuai.resize((quyu.kuan, quyu.gao), Image.Resampling.NEAREST)
    kuai = kuai.filter(ImageFilter.GaussianBlur(radius=1.2))
    tuxiang.paste(kuai, (quyu.heng, quyu.zong))
    huabi = ImageDraw.Draw(tuxiang)
    huabi.rounded_rectangle(
        (quyu.heng, quyu.zong, quyu.heng + quyu.kuan, quyu.zong + quyu.gao),
        radius=8,
        outline=(20, 20, 20, 220),
        width=1,
    )


def chulitupian(shuru: Path, shuchu: Path) -> bool:
    try:
        tuxiang = Image.open(shuru).convert("RGBA")
    except Exception:
        return False

    juzhenmen = xunzhaojuzhen(shuru, tuxiang)

    if not juzhenmen:
        shuchu.parent.mkdir(parents=True, exist_ok=True)
        tuxiang.save(shuchu)
        return True

    for quyu in juzhenmen:
        damaquyu(tuxiang, quyu)

    shuchu.parent.mkdir(parents=True, exist_ok=True)
    tuxiang.save(shuchu)
    return True


def xunzhaotupianmen(mulu: Path) -> list[Path]:
    houzhui = {".png", ".jpg", ".jpeg", ".webp"}
    return sorted(
        [
            lujing
            for lujing in mulu.iterdir()
            if lujing.is_file() and lujing.suffix.lower() in houzhui
        ]
    )


def zhu() -> int:
    morenmulu = Path("/data/breezell_doc/图片")
    morenshuchu = Path("/data/breezell_doc/图片-已打码")

    shurumulu = Path(sys.argv[1]) if len(sys.argv) > 1 else morenmulu
    shuchumulu = Path(sys.argv[2]) if len(sys.argv) > 2 else morenshuchu

    if not shurumulu.exists() or not shurumulu.is_dir():
        return 1

    chenggong = True

    for shuru in xunzhaotupianmen(shurumulu):
        shuchu = shuchumulu / shuru.name
        if not chulitupian(shuru, shuchu):
            chenggong = False

    return 0 if chenggong else 1


if __name__ == "__main__":
    raise SystemExit(zhu())
