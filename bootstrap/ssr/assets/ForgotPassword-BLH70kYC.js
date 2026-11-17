import { t as _sfc_main$1 } from "./InputError-DXJH4Bz-.js";
import { t as _sfc_main$2 } from "./InputLabel-BrItThsh.js";
import { t as _sfc_main$3 } from "./PrimaryButton-B1NJcOT8.js";
import { t as _sfc_main$4 } from "./TextInput-Deywsrn-.js";
import { t as AuthenticationCard_default } from "./AuthenticationCard-Ch6j-axF.js";
import { t as _sfc_main$5 } from "./AuthenticationCardLogo-3l89TTZG.js";
import { createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, toDisplayString, unref, useSSRContext, withCtx, withModifiers } from "vue";
import { Head, useForm } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
//#region resources/js/Pages/Auth/ForgotPassword.vue
var _sfc_main = {
	__name: "ForgotPassword",
	__ssrInlineRender: true,
	props: { status: String },
	setup(__props) {
		const form = useForm({ username: "" });
		const submit = () => {
			form.post(route("password.email"));
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Forgot Password" }, null, _parent));
			_push(ssrRenderComponent(AuthenticationCard_default, null, {
				logo: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(_sfc_main$5, null, null, _parent, _scopeId));
					else return [createVNode(_sfc_main$5)];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="mb-4 text-sm text-gray-600"${_scopeId}> Forgot your password? Enter your username and we will email you a password reset link if an email address is associated with your account. </div>`);
						if (__props.status) _push(`<div class="mb-4 font-medium text-sm text-green-600"${_scopeId}>${ssrInterpolate(__props.status)}</div>`);
						else _push(`<!---->`);
						_push(`<form${_scopeId}><div${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$2, {
							for: "username",
							value: "Username"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$4, {
							id: "username",
							modelValue: unref(form).username,
							"onUpdate:modelValue": ($event) => unref(form).username = $event,
							type: "text",
							class: "mt-1 block w-full",
							required: "",
							autofocus: "",
							autocomplete: "username"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$1, {
							class: "mt-2",
							message: unref(form).errors.username
						}, null, _parent, _scopeId));
						_push(`</div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$3, {
							class: { "opacity-25": unref(form).processing },
							disabled: unref(form).processing
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Email Password Reset Link `);
								else return [createTextVNode(" Email Password Reset Link ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></form>`);
					} else return [
						createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " Forgot your password? Enter your username and we will email you a password reset link if an email address is associated with your account. "),
						__props.status ? (openBlock(), createBlock("div", {
							key: 0,
							class: "mb-4 font-medium text-sm text-green-600"
						}, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
						createVNode("form", { onSubmit: withModifiers(submit, ["prevent"]) }, [createVNode("div", null, [
							createVNode(_sfc_main$2, {
								for: "username",
								value: "Username"
							}),
							createVNode(_sfc_main$4, {
								id: "username",
								modelValue: unref(form).username,
								"onUpdate:modelValue": ($event) => unref(form).username = $event,
								type: "text",
								class: "mt-1 block w-full",
								required: "",
								autofocus: "",
								autocomplete: "username"
							}, null, 8, ["modelValue", "onUpdate:modelValue"]),
							createVNode(_sfc_main$1, {
								class: "mt-2",
								message: unref(form).errors.username
							}, null, 8, ["message"])
						]), createVNode("div", { class: "flex items-center justify-end mt-4" }, [createVNode(_sfc_main$3, {
							class: { "opacity-25": unref(form).processing },
							disabled: unref(form).processing
						}, {
							default: withCtx(() => [createTextVNode(" Email Password Reset Link ")]),
							_: 1
						}, 8, ["class", "disabled"])])], 32)
					];
				}),
				_: 1
			}, _parent));
			_push(`<!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ForgotPassword.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
