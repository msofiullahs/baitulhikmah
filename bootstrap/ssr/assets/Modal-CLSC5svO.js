import { onUnmounted, unref, useSSRContext, watch } from "vue";
import { ssrInterpolate, ssrRenderClass, ssrRenderComponent, ssrRenderSlot, ssrRenderTeleport } from "vue/server-renderer";
import { XMarkIcon } from "@heroicons/vue/24/outline";
//#region resources/js/Components/Modal.vue
var _sfc_main = {
	__name: "Modal",
	__ssrInlineRender: true,
	props: {
		show: Boolean,
		title: String,
		maxWidth: {
			type: String,
			default: "2xl"
		}
	},
	emits: ["close"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		watch(() => props.show, (val) => {
			if (val) document.body.style.overflow = "hidden";
			else document.body.style.overflow = "";
		});
		onUnmounted(() => {
			document.body.style.overflow = "";
		});
		return (_ctx, _push, _parent, _attrs) => {
			ssrRenderTeleport(_push, (_push) => {
				if (__props.show) {
					_push(`<div class="fixed inset-0 z-50 overflow-y-auto"><div class="flex min-h-full items-center justify-center p-4"><div class="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"></div>`);
					if (__props.show) {
						_push(`<div class="${ssrRenderClass(["relative bg-white rounded-xl shadow-2xl w-full max-w-", __props.maxWidth])}"><div class="bg-primary px-6 py-4 rounded-t-xl flex justify-between items-center"><h3 class="text-white font-bold text-lg">${ssrInterpolate(__props.title)}</h3><button class="text-white hover:text-accent transition">`);
						_push(ssrRenderComponent(unref(XMarkIcon), { class: "w-6 h-6" }, null, _parent));
						_push(`</button></div><div class="p-6">`);
						ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
						_push(`</div>`);
						if (_ctx.$slots.footer) {
							_push(`<div class="bg-gray-50 px-6 py-4 rounded-b-xl border-t flex justify-end gap-3">`);
							ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push, _parent);
							_push(`</div>`);
						} else _push(`<!---->`);
						_push(`</div>`);
					} else _push(`<!---->`);
					_push(`</div></div>`);
				} else _push(`<!---->`);
			}, "body", false, _parent);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Modal.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as t };
