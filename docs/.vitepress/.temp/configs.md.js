import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Configs","description":"","frontmatter":{},"headers":[],"relativePath":"configs.md","filePath":"configs.md"}');
const _sfc_main = { name: "configs.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="configs" tabindex="-1">Configs <a class="header-anchor" href="#configs" aria-label="Permalink to &quot;Configs&quot;">​</a></h1><p>Welcome to the config page</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("configs.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const configs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  configs as default
};
