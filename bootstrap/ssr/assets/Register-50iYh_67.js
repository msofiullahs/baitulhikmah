import { t as _sfc_main$1 } from "./InputError-DXJH4Bz-.js";
import { t as _sfc_main$2 } from "./InputLabel-BrItThsh.js";
import { t as _sfc_main$3 } from "./PrimaryButton-B1NJcOT8.js";
import { t as _sfc_main$4 } from "./TextInput-Deywsrn-.js";
import { t as AuthenticationCard_default } from "./AuthenticationCard-Ch6j-axF.js";
import { t as _sfc_main$5 } from "./AuthenticationCardLogo-3l89TTZG.js";
import { t as _sfc_main$6 } from "./PasswordInput-DsWjnK3r.js";
import { createTextVNode, createVNode, unref, useSSRContext, withCtx, withModifiers } from "vue";
import { Head, Link, useForm } from "@inertiajs/vue3";
import { ssrRenderComponent } from "vue/server-renderer";
//#region resources/js/Pages/Auth/Register.vue
var _sfc_main = {
	__name: "Register",
	__ssrInlineRender: true,
	setup(__props) {
		const form = useForm({
			name: "",
			username: "",
			email: "",
			password: "",
			password_confirmation: "",
			terms: false
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Register" }, null, _parent));
			_push(ssrRenderComponent(AuthenticationCard_default, null, {
				logo: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(_sfc_main$5, null, null, _parent, _scopeId));
					else return [createVNode(_sfc_main$5)];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<form${_scopeId}><div${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$2, {
							for: "name",
							value: "Name"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$4, {
							id: "name",
							modelValue: unref(form).name,
							"onUpdate:modelValue": ($event) => unref(form).name = $event,
							type: "text",
							class: "mt-1 block w-full",
							required: "",
							autofocus: "",
							autocomplete: "name"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$1, {
							class: "mt-2",
							message: unref(form).errors.name
						}, null, _parent, _scopeId));
						_push(`</div><div class="mt-4"${_scopeId}>`);
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
							autocomplete: "username"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$1, {
							class: "mt-2",
							message: unref(form).errors.username
						}, null, _parent, _scopeId));
						_push(`</div><div class="mt-4"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$2, {
							for: "email",
							value: "Email (Opsional, untuk reset password)"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$4, {
							id: "email",
							modelValue: unref(form).email,
							"onUpdate:modelValue": ($event) => unref(form).email = $event,
							type: "email",
							class: "mt-1 block w-full",
							autocomplete: "username"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$1, {
							class: "mt-2",
							message: unref(form).errors.email
						}, null, _parent, _scopeId));
						_push(`<p class="text-xs text-gray-500 mt-1"${_scopeId}>Email hanya digunakan untuk fitur reset password</p></div><div class="mt-4"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$2, {
							for: "password",
							value: "Password"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$6, {
							id: "password",
							modelValue: unref(form).password,
							"onUpdate:modelValue": ($event) => unref(form).password = $event,
							class: "mt-1 block w-full",
							required: "",
							autocomplete: "new-password"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$1, {
							class: "mt-2",
							message: unref(form).errors.password
						}, null, _parent, _scopeId));
						_push(`</div><div class="mt-4"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$2, {
							for: "password_confirmation",
							value: "Confirm Password"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$6, {
							id: "password_confirmation",
							modelValue: unref(form).password_confirmation,
							"onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
							class: "mt-1 block w-full",
							required: "",
							autocomplete: "new-password"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$1, {
							class: "mt-2",
							message: unref(form).errors.password_confirmation
						}, null, _parent, _scopeId));
						_push(`</div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Link), {
							href: _ctx.route("login"),
							class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Already registered? `);
								else return [createTextVNode(" Already registered? ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$3, {
							class: ["ms-4", { "opacity-25": unref(form).processing }],
							disabled: unref(form).processing
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Register `);
								else return [createTextVNode(" Register ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></form>`);
					} else return [createVNode("form", { onSubmit: withModifiers(($event) => unref(form).post(_ctx.route("register")), ["prevent"]) }, [
						createVNode("div", null, [
							createVNode(_sfc_main$2, {
								for: "name",
								value: "Name"
							}),
							createVNode(_sfc_main$4, {
								id: "name",
								modelValue: unref(form).name,
								"onUpdate:modelValue": ($event) => unref(form).name = $event,
								type: "text",
								class: "mt-1 block w-full",
								required: "",
								autofocus: "",
								autocomplete: "name"
							}, null, 8, ["modelValue", "onUpdate:modelValue"]),
							createVNode(_sfc_main$1, {
								class: "mt-2",
								message: unref(form).errors.name
							}, null, 8, ["message"])
						]),
						createVNode("div", { class: "mt-4" }, [
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
								autocomplete: "username"
							}, null, 8, ["modelValue", "onUpdate:modelValue"]),
							createVNode(_sfc_main$1, {
								class: "mt-2",
								message: unref(form).errors.username
							}, null, 8, ["message"])
						]),
						createVNode("div", { class: "mt-4" }, [
							createVNode(_sfc_main$2, {
								for: "email",
								value: "Email (Opsional, untuk reset password)"
							}),
							createVNode(_sfc_main$4, {
								id: "email",
								modelValue: unref(form).email,
								"onUpdate:modelValue": ($event) => unref(form).email = $event,
								type: "email",
								class: "mt-1 block w-full",
								autocomplete: "username"
							}, null, 8, ["modelValue", "onUpdate:modelValue"]),
							createVNode(_sfc_main$1, {
								class: "mt-2",
								message: unref(form).errors.email
							}, null, 8, ["message"]),
							createVNode("p", { class: "text-xs text-gray-500 mt-1" }, "Email hanya digunakan untuk fitur reset password")
						]),
						createVNode("div", { class: "mt-4" }, [
							createVNode(_sfc_main$2, {
								for: "password",
								value: "Password"
							}),
							createVNode(_sfc_main$6, {
								id: "password",
								modelValue: unref(form).password,
								"onUpdate:modelValue": ($event) => unref(form).password = $event,
								class: "mt-1 block w-full",
								required: "",
								autocomplete: "new-password"
							}, null, 8, ["modelValue", "onUpdate:modelValue"]),
							createVNode(_sfc_main$1, {
								class: "mt-2",
								message: unref(form).errors.password
							}, null, 8, ["message"])
						]),
						createVNode("div", { class: "mt-4" }, [
							createVNode(_sfc_main$2, {
								for: "password_confirmation",
								value: "Confirm Password"
							}),
							createVNode(_sfc_main$6, {
								id: "password_confirmation",
								modelValue: unref(form).password_confirmation,
								"onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
								class: "mt-1 block w-full",
								required: "",
								autocomplete: "new-password"
							}, null, 8, ["modelValue", "onUpdate:modelValue"]),
							createVNode(_sfc_main$1, {
								class: "mt-2",
								message: unref(form).errors.password_confirmation
							}, null, 8, ["message"])
						]),
						createVNode("div", { class: "flex items-center justify-end mt-4" }, [createVNode(unref(Link), {
							href: _ctx.route("login"),
							class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						}, {
							default: withCtx(() => [createTextVNode(" Already registered? ")]),
							_: 1
						}, 8, ["href"]), createVNode(_sfc_main$3, {
							class: ["ms-4", { "opacity-25": unref(form).processing }],
							disabled: unref(form).processing
						}, {
							default: withCtx(() => [createTextVNode(" Register ")]),
							_: 1
						}, 8, ["class", "disabled"])])
					], 40, ["onSubmit"])];
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Register.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
