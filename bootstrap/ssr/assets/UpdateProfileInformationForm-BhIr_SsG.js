import { t as _sfc_main$1 } from "./ActionMessage-qNPV6ok6.js";
import { t as _sfc_main$2 } from "./InputError-DXJH4Bz-.js";
import { t as _sfc_main$3 } from "./InputLabel-BrItThsh.js";
import { t as _sfc_main$4 } from "./PrimaryButton-B1NJcOT8.js";
import "./SecondaryButton-BD33s9TB.js";
import { t as _sfc_main$5 } from "./TextInput-Deywsrn-.js";
import { createTextVNode, unref, useSSRContext, withCtx } from "vue";
import { useForm } from "@inertiajs/vue3";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
//#region resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.vue
var _sfc_main = {
	__name: "UpdateProfileInformationForm",
	__ssrInlineRender: true,
	props: { user: Object },
	setup(__props) {
		const props = __props;
		const form = useForm({
			name: props.user.name,
			username: props.user.username,
			email: props.user.email
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(_attrs)}><h3 class="text-lg font-medium text-gray-900 mb-4">Profile Information</h3><p class="text-sm text-gray-600 mb-6">Update your account&#39;s profile information.</p><form class="space-y-4"><div>`);
			_push(ssrRenderComponent(_sfc_main$3, {
				for: "name",
				value: "Name"
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$5, {
				id: "name",
				modelValue: unref(form).name,
				"onUpdate:modelValue": ($event) => unref(form).name = $event,
				type: "text",
				class: "mt-1 block w-full",
				required: "",
				autocomplete: "name"
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$2, {
				message: unref(form).errors.name,
				class: "mt-2"
			}, null, _parent));
			_push(`</div><div>`);
			_push(ssrRenderComponent(_sfc_main$3, {
				for: "username",
				value: "Username"
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$5, {
				id: "username",
				modelValue: unref(form).username,
				"onUpdate:modelValue": ($event) => unref(form).username = $event,
				type: "text",
				class: "mt-1 block w-full",
				required: "",
				autocomplete: "username"
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$2, {
				message: unref(form).errors.username,
				class: "mt-2"
			}, null, _parent));
			_push(`</div><div>`);
			_push(ssrRenderComponent(_sfc_main$3, {
				for: "email",
				value: "Email"
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$5, {
				id: "email",
				modelValue: unref(form).email,
				"onUpdate:modelValue": ($event) => unref(form).email = $event,
				type: "email",
				class: "mt-1 block w-full",
				autocomplete: "email"
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$2, {
				message: unref(form).errors.email,
				class: "mt-2"
			}, null, _parent));
			_push(`</div><div class="flex items-center gap-3 pt-4">`);
			_push(ssrRenderComponent(_sfc_main$1, {
				on: unref(form).recentlySuccessful,
				class: "me-3"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Saved. `);
					else return [createTextVNode(" Saved. ")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_sfc_main$4, {
				class: { "opacity-25": unref(form).processing },
				disabled: unref(form).processing
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Save `);
					else return [createTextVNode(" Save ")];
				}),
				_: 1
			}, _parent));
			_push(`</div></form></div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
