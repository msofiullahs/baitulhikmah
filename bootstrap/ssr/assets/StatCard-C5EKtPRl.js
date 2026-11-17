import { createVNode, mergeProps, resolveDynamicComponent, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderAttrs, ssrRenderClass, ssrRenderVNode } from "vue/server-renderer";
//#region resources/js/Components/StatCard.vue
var _sfc_main = {
	__name: "StatCard",
	__ssrInlineRender: true,
	props: {
		title: String,
		value: [String, Number],
		icon: Object,
		color: {
			type: String,
			default: "primary"
		},
		trend: {
			type: String,
			default: null
		}
	},
	setup(__props) {
		const colorClasses = {
			primary: "bg-primary text-white",
			green: "bg-green-500 text-white",
			red: "bg-red-500 text-white",
			amber: "bg-amber-500 text-white",
			blue: "bg-blue-500 text-white"
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: ["bg-white rounded-xl shadow-sm p-6 border-l-4", `border-${__props.color}-500`] }, _attrs))}><div class="flex items-start justify-between"><div><p class="text-sm text-gray-500 font-medium">${ssrInterpolate(__props.title)}</p><p class="text-2xl font-bold text-gray-800 mt-1">${ssrInterpolate(__props.value)}</p>`);
			if (__props.trend) _push(`<p class="text-xs text-gray-500 mt-1">${ssrInterpolate(__props.trend)}</p>`);
			else _push(`<!---->`);
			_push(`</div>`);
			if (__props.icon) {
				_push(`<div class="${ssrRenderClass([colorClasses[__props.color], "w-12 h-12 rounded-lg flex items-center justify-center"])}">`);
				ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.icon), { class: "w-6 h-6" }, null), _parent);
				_push(`</div>`);
			} else _push(`<!---->`);
			_push(`</div></div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/StatCard.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as t };
