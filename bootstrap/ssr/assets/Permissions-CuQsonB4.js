import { t as _sfc_main$1 } from "./Modal-CLSC5svO.js";
import { t as _sfc_main$2 } from "./InputError-DXJH4Bz-.js";
import { t as _sfc_main$3 } from "./PrimaryButton-B1NJcOT8.js";
import { t as AdminLayout_default } from "./AdminLayout-JKKJHCcy.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelText, withCtx, withDirectives, withModifiers } from "vue";
import { Head, router, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
//#region resources/js/Pages/Settings/Permissions.vue
var _sfc_main = {
	__name: "Permissions",
	__ssrInlineRender: true,
	props: { permissions: Array },
	setup(__props) {
		const showPermissionModal = ref(false);
		const editingPermission = ref(null);
		const form = useForm({
			name: "",
			display_name: "",
			description: ""
		});
		const createPermission = () => {
			editingPermission.value = null;
			form.name = "";
			form.display_name = "";
			form.description = "";
			showPermissionModal.value = true;
		};
		const editPermission = (permission) => {
			editingPermission.value = permission;
			form.name = permission.name;
			form.display_name = permission.display_name || "";
			form.description = permission.description || "";
			showPermissionModal.value = true;
		};
		const deletePermission = (permission) => {
			if (confirm(`Apakah Anda yakin ingin menghapus permission "${permission.name}"?`)) router.delete(route("permissions.destroy", permission.id));
		};
		const submit = () => {
			if (editingPermission.value) router.put(route("permissions.update", editingPermission.value.id), form, { onSuccess: () => {
				showPermissionModal.value = false;
				resetForm();
			} });
			else router.post(route("permissions.store"), form, { onSuccess: () => {
				showPermissionModal.value = false;
				resetForm();
			} });
		};
		const resetForm = () => {
			form.name = "";
			form.display_name = "";
			form.description = "";
			editingPermission.value = null;
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Manajemen Permissions" }, null, _parent));
			_push(ssrRenderComponent(AdminLayout_default, null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="py-6"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="flex justify-between items-center mb-6"${_scopeId}><div${_scopeId}><h1 class="text-2xl font-bold text-gray-900"${_scopeId}>Manajemen Permissions</h1><p class="text-sm text-gray-600 mt-1"${_scopeId}>Kelola daftar permissions sistem</p></div>`);
						_push(ssrRenderComponent(_sfc_main$3, { onClick: createPermission }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`<i class="fas fa-plus mr-2"${_scopeId}></i>Tambah Permission `);
								else return [createVNode("i", { class: "fas fa-plus mr-2" }), createTextVNode("Tambah Permission ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div><div class="bg-white rounded-lg shadow overflow-hidden"${_scopeId}><div class="p-6"${_scopeId}><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"${_scopeId}><!--[-->`);
						ssrRenderList(__props.permissions, (permission) => {
							_push(`<div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"${_scopeId}><div class="flex justify-between items-start mb-2"${_scopeId}><div${_scopeId}><h3 class="font-semibold text-gray-800"${_scopeId}>${ssrInterpolate(permission.display_name || permission.name)}</h3><p class="text-xs text-gray-500"${_scopeId}>${ssrInterpolate(permission.name)}</p></div><div class="flex space-x-2"${_scopeId}><button class="text-blue-600 hover:text-blue-900"${_scopeId}><i class="fas fa-edit"${_scopeId}></i></button><button class="text-red-600 hover:text-red-900"${_scopeId}><i class="fas fa-trash"${_scopeId}></i></button></div></div>`);
							if (permission.description) _push(`<p class="text-sm text-gray-600 mt-2"${_scopeId}>${ssrInterpolate(permission.description)}</p>`);
							else _push(`<!---->`);
							_push(`</div>`);
						});
						_push(`<!--]--></div></div></div></div></div>`);
						_push(ssrRenderComponent(_sfc_main$1, {
							show: showPermissionModal.value,
							onClose: ($event) => showPermissionModal.value = false,
							"max-width": "lg"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<form class="p-6 space-y-4"${_scopeId}><h2 class="text-xl font-bold"${_scopeId}>${ssrInterpolate(editingPermission.value ? "Edit" : "Tambah")} Permission</h2><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Nama Permission</label><input${ssrRenderAttr("value", unref(form).name)} type="text" required placeholder="contoh: transactions.create" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}>`);
									_push(ssrRenderComponent(_sfc_main$2, {
										message: unref(form).errors.name,
										class: "mt-2"
									}, null, _parent, _scopeId));
									_push(`</div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Display Name</label><input${ssrRenderAttr("value", unref(form).display_name)} type="text" placeholder="contoh: Buat Transaksi" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}>`);
									_push(ssrRenderComponent(_sfc_main$2, {
										message: unref(form).errors.display_name,
										class: "mt-2"
									}, null, _parent, _scopeId));
									_push(`</div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Deskripsi</label><textarea rows="3" placeholder="Deskripsi permission..." class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}>${ssrInterpolate(unref(form).description)}</textarea>`);
									_push(ssrRenderComponent(_sfc_main$2, {
										message: unref(form).errors.description,
										class: "mt-2"
									}, null, _parent, _scopeId));
									_push(`</div><div class="flex justify-end gap-3 pt-4"${_scopeId}><button type="button" class="btn-secondary"${_scopeId}>Batal</button><button type="submit" class="btn-primary"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}${_scopeId}>${ssrInterpolate(editingPermission.value ? "Update" : "Simpan")}</button></div></form>`);
								} else return [createVNode("form", {
									onSubmit: withModifiers(submit, ["prevent"]),
									class: "p-6 space-y-4"
								}, [
									createVNode("h2", { class: "text-xl font-bold" }, toDisplayString(editingPermission.value ? "Edit" : "Tambah") + " Permission", 1),
									createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Nama Permission"),
										withDirectives(createVNode("input", {
											"onUpdate:modelValue": ($event) => unref(form).name = $event,
											type: "text",
											required: "",
											placeholder: "contoh: transactions.create",
											class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
										}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).name]]),
										createVNode(_sfc_main$2, {
											message: unref(form).errors.name,
											class: "mt-2"
										}, null, 8, ["message"])
									]),
									createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Display Name"),
										withDirectives(createVNode("input", {
											"onUpdate:modelValue": ($event) => unref(form).display_name = $event,
											type: "text",
											placeholder: "contoh: Buat Transaksi",
											class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
										}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).display_name]]),
										createVNode(_sfc_main$2, {
											message: unref(form).errors.display_name,
											class: "mt-2"
										}, null, 8, ["message"])
									]),
									createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Deskripsi"),
										withDirectives(createVNode("textarea", {
											"onUpdate:modelValue": ($event) => unref(form).description = $event,
											rows: "3",
											placeholder: "Deskripsi permission...",
											class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
										}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).description]]),
										createVNode(_sfc_main$2, {
											message: unref(form).errors.description,
											class: "mt-2"
										}, null, 8, ["message"])
									]),
									createVNode("div", { class: "flex justify-end gap-3 pt-4" }, [createVNode("button", {
										type: "button",
										onClick: ($event) => showPermissionModal.value = false,
										class: "btn-secondary"
									}, "Batal", 8, ["onClick"]), createVNode("button", {
										type: "submit",
										class: "btn-primary",
										disabled: unref(form).processing
									}, toDisplayString(editingPermission.value ? "Update" : "Simpan"), 9, ["disabled"])])
								], 32)];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [createVNode("div", { class: "py-6" }, [createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [createVNode("div", { class: "flex justify-between items-center mb-6" }, [createVNode("div", null, [createVNode("h1", { class: "text-2xl font-bold text-gray-900" }, "Manajemen Permissions"), createVNode("p", { class: "text-sm text-gray-600 mt-1" }, "Kelola daftar permissions sistem")]), createVNode(_sfc_main$3, { onClick: createPermission }, {
						default: withCtx(() => [createVNode("i", { class: "fas fa-plus mr-2" }), createTextVNode("Tambah Permission ")]),
						_: 1
					})]), createVNode("div", { class: "bg-white rounded-lg shadow overflow-hidden" }, [createVNode("div", { class: "p-6" }, [createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.permissions, (permission) => {
						return openBlock(), createBlock("div", {
							key: permission.id,
							class: "border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
						}, [createVNode("div", { class: "flex justify-between items-start mb-2" }, [createVNode("div", null, [createVNode("h3", { class: "font-semibold text-gray-800" }, toDisplayString(permission.display_name || permission.name), 1), createVNode("p", { class: "text-xs text-gray-500" }, toDisplayString(permission.name), 1)]), createVNode("div", { class: "flex space-x-2" }, [createVNode("button", {
							onClick: ($event) => editPermission(permission),
							class: "text-blue-600 hover:text-blue-900"
						}, [createVNode("i", { class: "fas fa-edit" })], 8, ["onClick"]), createVNode("button", {
							onClick: ($event) => deletePermission(permission),
							class: "text-red-600 hover:text-red-900"
						}, [createVNode("i", { class: "fas fa-trash" })], 8, ["onClick"])])]), permission.description ? (openBlock(), createBlock("p", {
							key: 0,
							class: "text-sm text-gray-600 mt-2"
						}, toDisplayString(permission.description), 1)) : createCommentVNode("", true)]);
					}), 128))])])])])]), createVNode(_sfc_main$1, {
						show: showPermissionModal.value,
						onClose: ($event) => showPermissionModal.value = false,
						"max-width": "lg"
					}, {
						default: withCtx(() => [createVNode("form", {
							onSubmit: withModifiers(submit, ["prevent"]),
							class: "p-6 space-y-4"
						}, [
							createVNode("h2", { class: "text-xl font-bold" }, toDisplayString(editingPermission.value ? "Edit" : "Tambah") + " Permission", 1),
							createVNode("div", null, [
								createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Nama Permission"),
								withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => unref(form).name = $event,
									type: "text",
									required: "",
									placeholder: "contoh: transactions.create",
									class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).name]]),
								createVNode(_sfc_main$2, {
									message: unref(form).errors.name,
									class: "mt-2"
								}, null, 8, ["message"])
							]),
							createVNode("div", null, [
								createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Display Name"),
								withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => unref(form).display_name = $event,
									type: "text",
									placeholder: "contoh: Buat Transaksi",
									class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).display_name]]),
								createVNode(_sfc_main$2, {
									message: unref(form).errors.display_name,
									class: "mt-2"
								}, null, 8, ["message"])
							]),
							createVNode("div", null, [
								createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Deskripsi"),
								withDirectives(createVNode("textarea", {
									"onUpdate:modelValue": ($event) => unref(form).description = $event,
									rows: "3",
									placeholder: "Deskripsi permission...",
									class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).description]]),
								createVNode(_sfc_main$2, {
									message: unref(form).errors.description,
									class: "mt-2"
								}, null, 8, ["message"])
							]),
							createVNode("div", { class: "flex justify-end gap-3 pt-4" }, [createVNode("button", {
								type: "button",
								onClick: ($event) => showPermissionModal.value = false,
								class: "btn-secondary"
							}, "Batal", 8, ["onClick"]), createVNode("button", {
								type: "submit",
								class: "btn-primary",
								disabled: unref(form).processing
							}, toDisplayString(editingPermission.value ? "Update" : "Simpan"), 9, ["disabled"])])
						], 32)]),
						_: 1
					}, 8, ["show", "onClose"])];
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Settings/Permissions.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
