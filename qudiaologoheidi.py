from pathlib import Path
from PIL import Image
import sys


def qudiaoheidi(shuru: Path, shuchu: Path, yuzhi: int = 24) -> bool:
    try:
        tu = Image.open(shuru).convert("RGBA")
    except Exception:
        return False

    xiangsu = tu.load()

    for zongxiang in range(tu.height):
        for hengxiang in range(tu.width):
            hong, lv, lan, toumingdu = xiangsu[hengxiang, zongxiang]

            if toumingdu == 0:
                continue

            if hong <= yuzhi and lv <= yuzhi and lan <= yuzhi:
                xiangsu[hengxiang, zongxiang] = (hong, lv, lan, 0)
    shuchu.parent.mkdir(parents=True, exist_ok=True)
    tu.save(shuchu)
    return True


def zhu() -> int:
    morenshuru = Path("/home/yunmengluo/下载/logo.png")
    morenshuchu = Path("/data/breezell_doc/docs/public/logo-touming.png")

    shuru = Path(sys.argv[1]) if len(sys.argv) > 1 else morenshuru
    shuchu = Path(sys.argv[2]) if len(sys.argv) > 2 else morenshuchu
    yuzhi = int(sys.argv[3]) if len(sys.argv) > 3 else 24

    if not qudiaoheidi(shuru, shuchu, yuzhi):
        return 1

    print(f"已生成透明图标: {shuchu}")
    return 0


if __name__ == "__main__":
    raise SystemExit(zhu())
