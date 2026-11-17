import { unref, useSSRContext } from "vue";
import { Link } from "@inertiajs/vue3";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import "@heroicons/vue/24/outline";
//#region resources/js/Components/Pagination.vue
var _sfc_main = {
	__name: "Pagination",
	__ssrInlineRender: true,
	props: { links: Array },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			if (__props.links.length > 3) {
				_push(`<div${ssrRenderAttrs(_attrs)}><div class="flex flex-wrap items-center justify-between gap-4"><div class="text-sm text-gray-600"><!--[-->`);
				ssrRenderList(__props.links, (link, index) => {
					_push(`<span>`);
					if (link.url === null) {
						_push(`<!--[-->`);
						if (link.label.includes("Previous")) _push(`<span class="px-3 py-1 text-gray-400">← Prev</span>`);
						else if (link.label.includes("Next")) _push(`<span class="px-3 py-1 text-gray-400">Next →</span>`);
						else _push(`<!---->`);
						_push(`<!--]-->`);
					} else _push(`<!---->`);
					_push(`</span>`);
				});
				_push(`<!--]--></div><div class="flex gap-1"><!--[-->`);
				ssrRenderList(__props.links, (link, index) => {
					_push(`<!--[-->`);
					if (link.url === null) _push(`<span class="${ssrRenderClass([
						"px-3 py-1 rounded-lg text-sm",
						link.label.includes("Previous") ? "mr-auto" : "",
						link.label.includes("Next") ? "ml-auto" : "",
						"text-gray-400 cursor-not-allowed"
					])}">${link.label ?? ""}</span>`);
					else _push(ssrRenderComponent(unref(Link), {
						href: link.url,
						class: ["px-3 py-1 rounded-lg text-sm transition", link.active ? "bg-primary text-white font-semibold" : "bg-white text-gray-700 hover:bg-gray-100 border"],
						"preserve-state": "",
						"preserve-scroll": ""
					}, null, _parent));
					_push(`<!--]-->`);
				});
				_push(`<!--]--></div></div></div>`);
			} else _push(`<!---->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Pagination.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as t };
