import "./Modal-CLSC5svO.js";
import { t as _sfc_main$1 } from "./InputError-DXJH4Bz-.js";
import { t as _sfc_main$2 } from "./InputLabel-BrItThsh.js";
import { t as _sfc_main$3 } from "./PrimaryButton-B1NJcOT8.js";
import { t as _sfc_main$4 } from "./SecondaryButton-BD33s9TB.js";
import { t as _sfc_main$5 } from "./TextInput-Deywsrn-.js";
import { t as AdminLayout_default } from "./AdminLayout-JKKJHCcy.js";
import { t as _sfc_main$6 } from "./PasswordInput-DsWjnK3r.js";
import { Fragment, createBlock, createTextVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelSelect, withCtx, withDirectives, withModifiers } from "vue";
import { Head, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import Swal from "sweetalert2";
//#region resources/js/Pages/Users/Create.vue
var _sfc_main = {
	__name: "Create",
	__ssrInlineRender: true,
	props: { roles: Array },
	setup(__props) {
		const showCreateModal = ref(false);
		const createForm = useForm({
			name: "",
			username: "",
			email: "",
			password: "",
			password_confirmation: "",
			role: ""
		});
		const submitCreate = () => {
			createForm.post(route("users.store"), {
				onSuccess: () => {
					showCreateModal.value = false;
					Swal.fire("Success", "User berhasil ditambahkan", "success");
				},
				onError: (errors) => {
					Swal.fire("Error", Object.values(errors)[0], "error");
				}
			});
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Tambah User Baru" }, null, _parent));
			_push(ssrRenderComponent(AdminLayout_default, null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="py-6"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="flex justify-between items-center mb-6"${_scopeId}><div${_scopeId}><h1 class="text-2xl font-bold text-gray-900"${_scopeId}>Tambah User Baru</h1><p class="text-sm text-gray-600 mt-1"${_scopeId}>Buat akun pengguna baru untuk sistem</p></div></div><div class="bg-white rounded-lg shadow p-6"${_scopeId}><form${_scopeId}><div class="space-y-4"${_scopeId}><div${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$2, {
							for: "name",
							value: "Nama Lengkap"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$5, {
							id: "name",
							type: "text",
							class: "mt-1 block w-full",
							modelValue: unref(createForm).name,
							"onUpdate:modelValue": ($event) => unref(createForm).name = $event,
							required: "",
							autofocus: ""
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$1, {
							message: unref(createForm).errors.name,
							class: "mt-2"
						}, null, _parent, _scopeId));
						_push(`</div><div${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$2, {
							for: "username",
							value: "Username"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$5, {
							id: "username",
							type: "text",
							class: "mt-1 block w-full",
							modelValue: unref(createForm).username,
							"onUpdate:modelValue": ($event) => unref(createForm).username = $event,
							required: ""
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$1, {
							message: unref(createForm).errors.username,
							class: "mt-2"
						}, null, _parent, _scopeId));
						_push(`</div><div${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$2, {
							for: "email",
							value: "Email (Opsional)"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$5, {
							id: "email",
							type: "email",
							class: "mt-1 block w-full",
							modelValue: unref(createForm).email,
							"onUpdate:modelValue": ($event) => unref(createForm).email = $event
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$1, {
							message: unref(createForm).errors.email,
							class: "mt-2"
						}, null, _parent, _scopeId));
						_push(`</div><div class="grid grid-cols-2 gap-4"${_scopeId}><div${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$2, {
							for: "password",
							value: "Password"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$6, {
							id: "password",
							modelValue: unref(createForm).password,
							"onUpdate:modelValue": ($event) => unref(createForm).password = $event,
							class: "mt-1 block w-full",
							required: ""
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$1, {
							message: unref(createForm).errors.password,
							class: "mt-2"
						}, null, _parent, _scopeId));
						_push(`</div><div${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$2, {
							for: "password_confirmation",
							value: "Konfirmasi Password"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$6, {
							id: "password_confirmation",
							modelValue: unref(createForm).password_confirmation,
							"onUpdate:modelValue": ($event) => unref(createForm).password_confirmation = $event,
							class: "mt-1 block w-full",
							required: ""
						}, null, _parent, _scopeId));
						_push(`</div></div><div${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$2, {
							for: "role",
							value: "Role"
						}, null, _parent, _scopeId));
						_push(`<select id="role" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" required${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(createForm).role) ? ssrLooseContain(unref(createForm).role, "") : ssrLooseEqual(unref(createForm).role, "")) ? " selected" : ""}${_scopeId}>Pilih Role</option><!--[-->`);
						ssrRenderList(__props.roles, (role) => {
							_push(`<option${ssrRenderAttr("value", role.name)}${ssrIncludeBooleanAttr(Array.isArray(unref(createForm).role) ? ssrLooseContain(unref(createForm).role, role.name) : ssrLooseEqual(unref(createForm).role, role.name)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(role.name)}</option>`);
						});
						_push(`<!--]--></select>`);
						_push(ssrRenderComponent(_sfc_main$1, {
							message: unref(createForm).errors.role,
							class: "mt-2"
						}, null, _parent, _scopeId));
						_push(`</div></div><div class="mt-6 flex justify-end space-x-3"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$4, { onClick: ($event) => _ctx.$router.visit(_ctx.route("users.index")) }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Batal`);
								else return [createTextVNode("Batal")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$3, { disabled: unref(createForm).processing }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Simpan`);
								else return [createTextVNode("Simpan")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></form></div></div></div>`);
					} else return [createVNode("div", { class: "py-6" }, [createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [createVNode("div", { class: "flex justify-between items-center mb-6" }, [createVNode("div", null, [createVNode("h1", { class: "text-2xl font-bold text-gray-900" }, "Tambah User Baru"), createVNode("p", { class: "text-sm text-gray-600 mt-1" }, "Buat akun pengguna baru untuk sistem")])]), createVNode("div", { class: "bg-white rounded-lg shadow p-6" }, [createVNode("form", { onSubmit: withModifiers(submitCreate, ["prevent"]) }, [createVNode("div", { class: "space-y-4" }, [
						createVNode("div", null, [
							createVNode(_sfc_main$2, {
								for: "name",
								value: "Nama Lengkap"
							}),
							createVNode(_sfc_main$5, {
								id: "name",
								type: "text",
								class: "mt-1 block w-full",
								modelValue: unref(createForm).name,
								"onUpdate:modelValue": ($event) => unref(createForm).name = $event,
								required: "",
								autofocus: ""
							}, null, 8, ["modelValue", "onUpdate:modelValue"]),
							createVNode(_sfc_main$1, {
								message: unref(createForm).errors.name,
								class: "mt-2"
							}, null, 8, ["message"])
						]),
						createVNode("div", null, [
							createVNode(_sfc_main$2, {
								for: "username",
								value: "Username"
							}),
							createVNode(_sfc_main$5, {
								id: "username",
								type: "text",
								class: "mt-1 block w-full",
								modelValue: unref(createForm).username,
								"onUpdate:modelValue": ($event) => unref(createForm).username = $event,
								required: ""
							}, null, 8, ["modelValue", "onUpdate:modelValue"]),
							createVNode(_sfc_main$1, {
								message: unref(createForm).errors.username,
								class: "mt-2"
							}, null, 8, ["message"])
						]),
						createVNode("div", null, [
							createVNode(_sfc_main$2, {
								for: "email",
								value: "Email (Opsional)"
							}),
							createVNode(_sfc_main$5, {
								id: "email",
								type: "email",
								class: "mt-1 block w-full",
								modelValue: unref(createForm).email,
								"onUpdate:modelValue": ($event) => unref(createForm).email = $event
							}, null, 8, ["modelValue", "onUpdate:modelValue"]),
							createVNode(_sfc_main$1, {
								message: unref(createForm).errors.email,
								class: "mt-2"
							}, null, 8, ["message"])
						]),
						createVNode("div", { class: "grid grid-cols-2 gap-4" }, [createVNode("div", null, [
							createVNode(_sfc_main$2, {
								for: "password",
								value: "Password"
							}),
							createVNode(_sfc_main$6, {
								id: "password",
								modelValue: unref(createForm).password,
								"onUpdate:modelValue": ($event) => unref(createForm).password = $event,
								class: "mt-1 block w-full",
								required: ""
							}, null, 8, ["modelValue", "onUpdate:modelValue"]),
							createVNode(_sfc_main$1, {
								message: unref(createForm).errors.password,
								class: "mt-2"
							}, null, 8, ["message"])
						]), createVNode("div", null, [createVNode(_sfc_main$2, {
							for: "password_confirmation",
							value: "Konfirmasi Password"
						}), createVNode(_sfc_main$6, {
							id: "password_confirmation",
							modelValue: unref(createForm).password_confirmation,
							"onUpdate:modelValue": ($event) => unref(createForm).password_confirmation = $event,
							class: "mt-1 block w-full",
							required: ""
						}, null, 8, ["modelValue", "onUpdate:modelValue"])])]),
						createVNode("div", null, [
							createVNode(_sfc_main$2, {
								for: "role",
								value: "Role"
							}),
							withDirectives(createVNode("select", {
								id: "role",
								"onUpdate:modelValue": ($event) => unref(createForm).role = $event,
								class: "mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500",
								required: ""
							}, [createVNode("option", { value: "" }, "Pilih Role"), (openBlock(true), createBlock(Fragment, null, renderList(__props.roles, (role) => {
								return openBlock(), createBlock("option", {
									key: role.id,
									value: role.name
								}, toDisplayString(role.name), 9, ["value"]);
							}), 128))], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(createForm).role]]),
							createVNode(_sfc_main$1, {
								message: unref(createForm).errors.role,
								class: "mt-2"
							}, null, 8, ["message"])
						])
					]), createVNode("div", { class: "mt-6 flex justify-end space-x-3" }, [createVNode(_sfc_main$4, { onClick: ($event) => _ctx.$router.visit(_ctx.route("users.index")) }, {
						default: withCtx(() => [createTextVNode("Batal")]),
						_: 1
					}, 8, ["onClick"]), createVNode(_sfc_main$3, { disabled: unref(createForm).processing }, {
						default: withCtx(() => [createTextVNode("Simpan")]),
						_: 1
					}, 8, ["disabled"])])], 32)])])])];
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Create.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
