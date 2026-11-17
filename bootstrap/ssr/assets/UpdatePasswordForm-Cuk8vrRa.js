import { t as _sfc_main$1 } from "./ActionMessage-qNPV6ok6.js";
import { t as _sfc_main$2 } from "./InputError-DXJH4Bz-.js";
import { t as _sfc_main$3 } from "./InputLabel-BrItThsh.js";
import { t as _sfc_main$4 } from "./PrimaryButton-B1NJcOT8.js";
import { t as _sfc_main$5 } from "./PasswordInput-DsWjnK3r.js";
import { createTextVNode, unref, useSSRContext, withCtx } from "vue";
import { useForm } from "@inertiajs/vue3";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
//#region resources/js/Pages/Profile/Partials/UpdatePasswordForm.vue
var _sfc_main = {
	__name: "UpdatePasswordForm",
	__ssrInlineRender: true,
	setup(__props) {
		const form = useForm({
			current_password: "",
			password: "",
			password_confirmation: ""
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(_attrs)}><h3 class="text-lg font-medium text-gray-900 mb-4">Update Password</h3><p class="text-sm text-gray-600 mb-6">Ensure your account is using a long, random password to stay secure.</p><form class="space-y-4"><div>`);
			_push(ssrRenderComponent(_sfc_main$3, {
				for: "current_password",
				value: "Current Password"
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$5, {
				id: "current_password",
				modelValue: unref(form).current_password,
				"onUpdate:modelValue": ($event) => unref(form).current_password = $event,
				class: "mt-1 block w-full",
				autocomplete: "current-password"
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$2, {
				message: unref(form).errors.current_password,
				class: "mt-2"
			}, null, _parent));
			_push(`</div><div>`);
			_push(ssrRenderComponent(_sfc_main$3, {
				for: "password",
				value: "New Password"
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$5, {
				id: "password",
				modelValue: unref(form).password,
				"onUpdate:modelValue": ($event) => unref(form).password = $event,
				class: "mt-1 block w-full",
				autocomplete: "new-password"
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$2, {
				message: unref(form).errors.password,
				class: "mt-2"
			}, null, _parent));
			_push(`</div><div>`);
			_push(ssrRenderComponent(_sfc_main$3, {
				for: "password_confirmation",
				value: "Confirm Password"
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$5, {
				id: "password_confirmation",
				modelValue: unref(form).password_confirmation,
				"onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
				class: "mt-1 block w-full",
				autocomplete: "new-password"
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$2, {
				message: unref(form).errors.password_confirmation,
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdatePasswordForm.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
