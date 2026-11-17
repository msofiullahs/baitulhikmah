import { t as SectionBorder_default } from "./SectionBorder-B2Y3Gi9P.js";
import { t as AdminLayout_default } from "./AdminLayout-JKKJHCcy.js";
import _sfc_main$1 from "./UpdatePasswordForm-Cuk8vrRa.js";
import _sfc_main$2 from "./UpdateProfileInformationForm-BhIr_SsG.js";
import { createVNode, mergeProps, useSSRContext, withCtx } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
//#region resources/js/Pages/Profile/Show.vue
var _sfc_main = {
	__name: "Show",
	__ssrInlineRender: true,
	props: { sessions: Array },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(AdminLayout_default, mergeProps({ title: "Profile" }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8"${_scopeId}><div class="mb-6"${_scopeId}><h2 class="text-2xl font-semibold text-gray-800"${_scopeId}> Profile </h2></div><div class="bg-white shadow rounded-lg p-6 mb-6"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$2, { user: _ctx.$page.props.auth.user }, null, _parent, _scopeId));
						_push(`</div>`);
						_push(ssrRenderComponent(SectionBorder_default, null, null, _parent, _scopeId));
						_push(`<div class="bg-white shadow rounded-lg p-6 mt-6"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$1, { class: "mt-0" }, null, _parent, _scopeId));
						_push(`</div></div>`);
					} else return [createVNode("div", { class: "max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8" }, [
						createVNode("div", { class: "mb-6" }, [createVNode("h2", { class: "text-2xl font-semibold text-gray-800" }, " Profile ")]),
						createVNode("div", { class: "bg-white shadow rounded-lg p-6 mb-6" }, [createVNode(_sfc_main$2, { user: _ctx.$page.props.auth.user }, null, 8, ["user"])]),
						createVNode(SectionBorder_default),
						createVNode("div", { class: "bg-white shadow rounded-lg p-6 mt-6" }, [createVNode(_sfc_main$1, { class: "mt-0" })])
					])];
				}),
				_: 1
			}, _parent));
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Show.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
