import DefaultTheme from "vitepress/theme";
import { getScrollOffset } from "vitepress";
import "viewerjs/dist/viewer.css";
import type kanqitushili from "viewerjs";
import "./custom.css";

type shituguodu = {
  ready: Promise<void>;
};

type keqidongwenjian = Document & {
  startViewTransition?: (gengxin: () => void) => shituguodu;
};

type luyou = {
  onAfterRouteChanged?: (daoda: string) => Promise<void> | void;
};

type yingyongshangxiawen = {
  router?: luyou;
};

const mulugundongshichang = 900;
const mulubiaojizuixiaoshichang = 260;
const mulubiaojizuidashichang = 820;
const shoujimulugengxinjiange = 120;
let tupiankanqishili: kanqitushili | undefined;
let tupiankanqizhunbei: Promise<typeof import("viewerjs")> | undefined;
let tupiankanqirongqi: HTMLElement | undefined;

function qidongzhutiguodu() {
  if (typeof window === "undefined") {
    return;
  }

  const chuangkou = window as Window & {
    __breezell_zhutiguodu_yichushihua__?: boolean;
  };

  if (chuangkou.__breezell_zhutiguodu_yichushihua__) {
    return;
  }

  chuangkou.__breezell_zhutiguodu_yichushihua__ = true;

  let shifouqiehuanzhong = false;
  let shifouhulueyici = false;

  document.addEventListener(
    "click",
    (shijian) => {
      const mubiao = shijian.target;

      if (!(mubiao instanceof Element)) {
        return;
      }

      const anniu = mubiao.closest(".VPSwitchAppearance");
      const wenjian = document as keqidongwenjian;

      if (!(anniu instanceof HTMLButtonElement)) {
        return;
      }

      if (shifouhulueyici) {
        shifouhulueyici = false;
        return;
      }

      if (shifouqiehuanzhong) {
        return;
      }

      if (!wenjian.startViewTransition) {
        return;
      }

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      shijian.preventDefault();
      shijian.stopImmediatePropagation();

      const juzhen = anniu.getBoundingClientRect();
      const hengzuobiao = juzhen.left + juzhen.width / 2;
      const zongzuobiao = juzhen.top + juzhen.height / 2;
      const banjing = Math.hypot(
        Math.max(hengzuobiao, window.innerWidth - hengzuobiao),
        Math.max(zongzuobiao, window.innerHeight - zongzuobiao)
      );

      shifouqiehuanzhong = true;

      const guodu = wenjian.startViewTransition(() => {
        shifouhulueyici = true;
        anniu.click();
      });

      guodu.ready
        .then(() => {
          const kaishi = `circle(0px at ${hengzuobiao}px ${zongzuobiao}px)`;
          const jieshu = `circle(${banjing}px at ${hengzuobiao}px ${zongzuobiao}px)`;

          document.documentElement.animate(
            {
              clipPath: [kaishi, jieshu],
            },
            {
              duration: 1500,
              easing: "cubic-bezier(0.22, 1, 0.36, 1)",
              pseudoElement: "::view-transition-new(root)",
            }
          );
        })
        .finally(() => {
          shifouqiehuanzhong = false;
          shifouhulueyici = false;
        });
    },
    true
  );
}

function qidongsousuoxiaoguo() {
  if (typeof window === "undefined") {
    return;
  }

  const chuangkou = window as Window & {
    __breezell_sousuoxiaoguo_yichushihua__?: boolean;
  };

  if (chuangkou.__breezell_sousuoxiaoguo_yichushihua__) {
    return;
  }

  chuangkou.__breezell_sousuoxiaoguo_yichushihua__ = true;

  const gengxinzhuangtai = () => {
    const sousuokuang = document.querySelector(".VPLocalSearchBox");
    document.body.classList.toggle("sousuokaiqi", Boolean(sousuokuang));
  };

  new MutationObserver(gengxinzhuangtai).observe(document.body, {
    childList: true,
    subtree: true,
  });

  document.addEventListener("click", () => {
    window.requestAnimationFrame(gengxinzhuangtai);
  });

  document.addEventListener("keydown", () => {
    window.requestAnimationFrame(gengxinzhuangtai);
  });

  gengxinzhuangtai();
}

function qidongmulugundong() {
  if (typeof window === "undefined") {
    return;
  }

  const chuangkou = window as Window & {
    __breezell_mulugundong_yichushihua__?: boolean;
  };

  if (chuangkou.__breezell_mulugundong_yichushihua__) {
    return;
  }

  chuangkou.__breezell_mulugundong_yichushihua__ = true;

  let dingshiqi: number | undefined;

  const shezhimulubiaojidonghua = (lianjie: HTMLAnchorElement) => {
    const biaoji = document.querySelector(".VPDocAsideOutline .outline-marker");

    if (!(biaoji instanceof HTMLElement)) {
      return;
    }

    const dangqiandingbu = Number.parseFloat(
      biaoji.style.top || window.getComputedStyle(biaoji).top
    );
    const mubiaodingbu = lianjie.offsetTop + 39;
    const juli = Math.abs(mubiaodingbu - dangqiandingbu);
    const shichang = Math.min(
      mulubiaojizuidashichang,
      Math.max(mulubiaojizuixiaoshichang, juli * 2.5)
    );

    biaoji.style.setProperty("--mulubiaojishichang", `${shichang}ms`);
  };

  document.addEventListener(
    "click",
    (shijian) => {
      const mubiao = shijian.target;

      if (!(mubiao instanceof Element)) {
        return;
      }

      const lianjie = mubiao.closest(".outline-link");

      if (!(lianjie instanceof HTMLAnchorElement) || !lianjie.hash) {
        return;
      }

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      document.documentElement.classList.add("mulugundongzhong");
      shezhimulubiaojidonghua(lianjie);
      window.clearTimeout(dingshiqi);
      dingshiqi = window.setTimeout(() => {
        document.documentElement.classList.remove("mulugundongzhong");
      }, mulugundongshichang);
    },
    true
  );
}

function qidongshoujimuluzhuangtai() {
  if (typeof window === "undefined") {
    return;
  }

  const chuangkou = window as Window & {
    __breezell_shoujimuluzhuangtai_yichushihua__?: boolean;
  };

  if (chuangkou.__breezell_shoujimuluzhuangtai_yichushihua__) {
    return;
  }

  chuangkou.__breezell_shoujimuluzhuangtai_yichushihua__ = true;

  let zuihougengxin = 0;
  let donghuazhen = 0;

  const huoqubiaotiliebiao = () =>
    Array.from(
      document.querySelectorAll<HTMLElement>(".VPDoc :where(h1,h2,h3,h4,h5,h6)")
    ).filter((biaoti) => biaoti.id && biaoti.textContent?.trim());

  const huoqudangqianbiaoti = () => {
    const biaotiliebiao = huoqubiaotiliebiao();

    if (!biaotiliebiao.length) {
      return undefined;
    }

    const pianyi = getScrollOffset() + 4;
    const shifoudibu =
      Math.abs(window.scrollY + window.innerHeight - document.body.offsetHeight) < 1;

    if (shifoudibu) {
      return biaotiliebiao[biaotiliebiao.length - 1];
    }

    return biaotiliebiao.reduce<HTMLElement | undefined>((dangqian, biaoti) => {
      const dingbu = window.scrollY + biaoti.getBoundingClientRect().top;

      if (dingbu > window.scrollY + pianyi) {
        return dangqian;
      }

      return biaoti;
    }, undefined);
  };

  const gengxinanniu = (biaoti: HTMLElement | undefined) => {
    const anniu = document.querySelector(".VPLocalNavOutlineDropdown > button");

    if (!(anniu instanceof HTMLButtonElement)) {
      return;
    }

    const wenbenjiedian = Array.from(anniu.childNodes).find(
      (jiedian) => jiedian.nodeType === Node.TEXT_NODE
    );

    if (!wenbenjiedian) {
      return;
    }

    const morenwenben = anniu.dataset.morenwenben || wenbenjiedian.textContent?.trim() || "";
    anniu.dataset.morenwenben = morenwenben;
    wenbenjiedian.textContent = biaoti
      ? `${biaoti.textContent?.trim() || morenwenben} `
      : `${morenwenben} `;
    anniu.classList.toggle("youxianzai", Boolean(biaoti));
  };

  const gengxinlianjie = (biaoti: HTMLElement | undefined) => {
    const dangqianlianjie = biaoti ? `#${biaoti.id}` : "";

    document
      .querySelectorAll<HTMLAnchorElement>(".VPLocalNavOutlineDropdown .outline-link")
      .forEach((lianjie) => {
        const lianjiehashi = new URL(lianjie.href, window.location.href).hash;
        lianjie.classList.toggle(
          "shoujimuluxuanzhong",
          decodeURIComponent(lianjiehashi) === decodeURIComponent(dangqianlianjie)
        );
      });
  };

  const gengxin = () => {
    const dangqianbiaoti = huoqudangqianbiaoti();
    gengxinanniu(dangqianbiaoti);
    gengxinlianjie(dangqianbiaoti);
  };

  const anpaigengxin = () => {
    const xianzai = Date.now();

    if (xianzai - zuihougengxin < shoujimulugengxinjiange) {
      window.cancelAnimationFrame(donghuazhen);
    }

    donghuazhen = window.requestAnimationFrame(() => {
      zuihougengxin = Date.now();
      gengxin();
    });
  };

  window.addEventListener("scroll", anpaigengxin, { passive: true });
  window.addEventListener("resize", anpaigengxin);
  window.addEventListener("hashchange", anpaigengxin);

  document.addEventListener("click", (shijian) => {
    const mubiao = shijian.target;

    if (mubiao instanceof Element && mubiao.closest(".VPLocalNavOutlineDropdown")) {
      window.setTimeout(anpaigengxin, 0);
    }
  });

  new MutationObserver(anpaigengxin).observe(document.body, {
    childList: true,
    subtree: true,
  });

  anpaigengxin();
}

function qidongtupiankanqi() {
  if (typeof window === "undefined") {
    return;
  }

  const chuangkou = window as Window & {
    __breezell_tupiankanqi_yichushihua__?: boolean;
  };

  if (chuangkou.__breezell_tupiankanqi_yichushihua__) {
    return;
  }

  chuangkou.__breezell_tupiankanqi_yichushihua__ = true;

  let donghuazhen = 0;
  let jiantingshili: MutationObserver | undefined;

  const zhunbeikanqilei = async () => {
    if (!tupiankanqizhunbei) {
      tupiankanqizhunbei = import("viewerjs");
    }

    return tupiankanqizhunbei;
  };

  const keyongtupian = (tupian: HTMLImageElement) =>
    Boolean(tupian.closest(".vp-doc")) &&
    !tupian.closest("a") &&
    !tupian.closest(".viewer-canvas, .viewer-navbar") &&
    Boolean(tupian.currentSrc || tupian.src);

  const chuangjiankanqi = async (rongqi: HTMLElement) => {
    const { default: kanqilei } = await zhunbeikanqilei();

    tupiankanqishili?.destroy();
    tupiankanqirongqi = rongqi;
    tupiankanqishili = new kanqilei(rongqi, {
      backdrop: true,
      button: true,
      className: "breezell-tupiankanqi",
      focus: true,
      initialCoverage: window.innerWidth < 768 ? 0.96 : 0.9,
      keyboard: true,
      loading: true,
      loop: true,
      maxZoomRatio: 6,
      minZoomRatio: 0.2,
      movable: true,
      navbar: 0,
      title: [
        2,
        (tupian: HTMLImageElement) => tupian.alt || "Image preview",
      ],
      toolbar: {
        zoomIn: 1,
        zoomOut: 1,
        oneToOne: 2,
        reset: 1,
        prev: 4,
        next: 4,
        rotateLeft: 4,
        rotateRight: 4,
        flipHorizontal: 4,
        flipVertical: 4,
      },
      tooltip: true,
      transition: true,
      zoomOnTouch: true,
      zoomOnWheel: true,
      zoomRatio: window.innerWidth < 768 ? 0.18 : 0.12,
      zoomable: true,
      toggleOnDblclick: true,
      filter(tupian: HTMLImageElement) {
        return keyongtupian(tupian);
      },
    });
  };

  const gengxin = async () => {
    const rongqi = document.querySelector<HTMLElement>(".VPContent");

    if (!rongqi) {
      tupiankanqishili?.destroy();
      tupiankanqishili = undefined;
      tupiankanqirongqi = undefined;
      return;
    }

    const tupianliebiao = Array.from(rongqi.querySelectorAll<HTMLImageElement>("img")).filter(
      keyongtupian
    );

    if (!tupianliebiao.length) {
      tupiankanqishili?.destroy();
      tupiankanqishili = undefined;
      tupiankanqirongqi = rongqi;
      return;
    }

    if (!tupiankanqishili || tupiankanqirongqi !== rongqi) {
      await chuangjiankanqi(rongqi);
      return;
    }

    tupiankanqishili.update();
  };

  const anpaigengxin = () => {
    window.cancelAnimationFrame(donghuazhen);
    donghuazhen = window.requestAnimationFrame(() => {
      void gengxin();
    });
  };

  let changshicishu = 0;
  const jiantingneirong = () => {
    const rongqi = document.querySelector(".VPContent");

    if (!rongqi && changshicishu < 30) {
      changshicishu += 1;
      window.setTimeout(jiantingneirong, 50);
      return;
    }

    jiantingshili?.disconnect();
    jiantingshili = new MutationObserver(anpaigengxin);
    jiantingshili.observe(rongqi || document.body, {
      childList: true,
      subtree: true,
    });

    anpaigengxin();
  };

  jiantingneirong();
}

export default {
  ...DefaultTheme,
  enhanceApp(shangxiawen: unknown) {
    DefaultTheme.enhanceApp?.(shangxiawen as never);
    qidongzhutiguodu();
    qidongsousuoxiaoguo();
    qidongmulugundong();
    qidongshoujimuluzhuangtai();
    qidongtupiankanqi();
  },
};
