import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Get Started","description":"","frontmatter":{},"headers":[],"relativePath":"get-started.md","filePath":"get-started.md"}');
const _sfc_main = { name: "get-started.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="get-started" tabindex="-1">Get Started <a class="header-anchor" href="#get-started" aria-label="Permalink to &quot;Get Started&quot;">​</a></h1><p>Here&#39;s how to get started with <a href="https://vitepress.com" target="_blank" rel="noreferrer">VitePress</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("get-started.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const getStarted = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  getStarted as default
};
