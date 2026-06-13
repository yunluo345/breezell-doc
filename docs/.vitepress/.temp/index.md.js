import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext, onMounted } from "vue";
const __pageData = JSON.parse('{"title":"","description":"AI-powered code editor IDE with agents, multi-model support, deep codebase understanding, and six powerful development modes.","frontmatter":{"layout":"home","head":[["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:title","content":"Breezell-Doc"}],["meta",{"property":"og:description","content":"Breezell is an AI-powered VS Code-compatible editor with Chat, Agent, Analyze, Plan, Entanglement, and Teams modes."}],["meta",{"property":"og:image","content":"https://breezell.com/og-image.png"}],["meta",{"property":"og:url","content":"https://breezell.com/"}],["meta",{"name":"title","content":"Breezell-Doc"}],["meta",{"name":"description","content":"AI-powered code editor IDE with agents, multi-model support, deep codebase understanding, and six powerful development modes."}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["link",{"rel":"icon","type":"image/png","href":"/logo-touming-caibian.png"}]]},"headers":[],"relativePath":"index.md","filePath":"index.md"}');
const __default__ = { name: "index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    onMounted(() => {
      const yuansu = document.querySelectorAll(".gundongyujiazai");
      if (!("IntersectionObserver" in window)) {
        yuansu.forEach((danxiang) => danxiang.classList.add("yichuxian"));
        return;
      }
      const guanchaqi = new IntersectionObserver(
        (xiangmu) => {
          xiangmu.forEach((danxiang) => {
            if (danxiang.isIntersecting) {
              danxiang.target.classList.add("yichuxian");
              guanchaqi.unobserve(danxiang.target);
            }
          });
        },
        { rootMargin: "0px 0px 120px 0px", threshold: 0.08 }
      );
      yuansu.forEach((danxiang) => guanchaqi.observe(danxiang));
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="shouye"><section class="yingxiong gundongyujiazai"><div class="yingxiongneirong gundongyujiazai"><p class="biaoqian">AI development workspace from Switzerland</p><h1>Breezell</h1><h2>Move complex projects from idea to delivery.</h2><p class="miaoshu">Breezell brings chat, agents, analysis, planning, causal reasoning, and team workflows into one code-focused workspace for understanding, editing, and shipping software faster.</p><div class="caozuoqu"><a class="anniu zhuanniu" href="/guide">Get Started</a><a class="anniu cianniu" href="https://breezell.com" target="_blank" rel="noopener noreferrer">Visit Website</a></div><div class="zhibiaoqu"><div><strong>6</strong><span>Dev modes</span></div><div><strong>AI</strong><span>Project context</span></div><div><strong>24/7</strong><span>Always ready</span></div></div></div><div class="yingxiongshijue gundongyujiazai"><div class="chanpinchuangkou"><div class="chuangkoulan"><span></span><span></span><span></span></div><div class="daimakuai"><b>Agent</b><p>Read context, edit files, run commands, and verify the result before delivery.</p></div><div class="daimakuai qianse"><b>Entanglement</b><p>Connect context, causality, and intent to reason through complex product decisions.</p></div><div class="jincheng"><span></span></div></div></div></section><section class="moshiqu"><div class="qubiaoti gundongyujiazai"><p class="xiaobiaoti">Six development modes</p><h2>Switch to the right AI workflow for every task.</h2></div><div class="kapianwangge"><div class="moshika gundongyujiazai"><div class="tubiao">C</div><h3>Chat</h3><p>Ask questions, explain code, debug ideas, and move quickly through conversation.</p></div><div class="moshika gundongyujiazai"><div class="tubiao">A</div><h3>Agent</h3><p>Let AI inspect the project, edit files, use tools, and complete coding tasks.</p></div><div class="moshika gundongyujiazai"><div class="tubiao">R</div><h3>Analyze</h3><p>Review and diagnose without changing files, ideal for audits and architecture checks.</p></div><div class="moshika gundongyujiazai"><div class="tubiao">P</div><h3>Plan</h3><p>Create a structured implementation path before touching complex code.</p></div><div class="moshika gundongyujiazai"><div class="tubiao">E</div><h3>Entanglement</h3><p>Use causal reasoning and context awareness for deeper product and code decisions.</p></div><div class="moshika gundongyujiazai"><div class="tubiao">T</div><h3>Teams</h3><p>Coordinate multiple AI teammates for large features and parallel workflows.</p></div></div></section></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
