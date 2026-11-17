import { t as _sfc_main$1 } from "./Modal-CLSC5svO.js";
import { t as AdminLayout_default } from "./AdminLayout-JKKJHCcy.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, mergeProps, openBlock, ref, renderList, toDisplayString, useSSRContext, vModelText, vShow, withCtx, withDirectives, withModifiers } from "vue";
import { router } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
//#region resources/js/Pages/Settings/Roles.vue
var _sfc_main = {
	__name: "Roles",
	__ssrInlineRender: true,
	props: {
		roles: Array,
		permissions: Array
	},
	setup(__props) {
		const activeTab = ref("roles");
		const expandedRole = ref(null);
		const showRoleModal = ref(false);
		const showPermissionModal = ref(false);
		const editingRole = ref(null);
		const editingPermission = ref(null);
		const roleForm = ref({
			name: "",
			display_name: "",
			description: ""
		});
		const permissionForm = ref({
			name: "",
			display_name: "",
			description: ""
		});
		const hasPermission = (role, permission) => {
			return role.permissions?.some((p) => p.id === permission.id) || false;
		};
		const togglePermission = (role, permission, checked) => {
			if (checked) router.post(route("roles.permissions.add", role.id), { permission_id: permission.id });
			else router.delete(route("roles.permissions.remove", [role.id, permission.id]));
		};
		const toggleAccordion = (roleId) => {
			expandedRole.value = expandedRole.value === roleId ? null : roleId;
		};
		const editRole = (role) => {
			roleForm.value = {
				name: role.name,
				display_name: role.display_name || "",
				description: role.description || ""
			};
			editingRole.value = role;
			showRoleModal.value = true;
		};
		const cloneRole = (role) => {
			if (confirm(`Clone role "${role.name}"?`)) router.post(route("roles.clone", role.id));
		};
		const deleteRole = (id) => {
			if (confirm("Apakah Anda yakin ingin menghapus role ini?")) router.delete(route("roles.destroy", id));
		};
		const submitRole = () => {
			if (editingRole.value) router.put(route("roles.update", editingRole.value.id), roleForm.value, { onSuccess: () => {
				showRoleModal.value = false;
				resetRoleForm();
			} });
			else router.post(route("roles.store"), roleForm.value, { onSuccess: () => {
				showRoleModal.value = false;
				resetRoleForm();
			} });
		};
		const editPermission = (permission) => {
			permissionForm.value = {
				name: permission.name,
				display_name: permission.display_name || "",
				description: permission.description || ""
			};
			editingPermission.value = permission;
			showPermissionModal.value = true;
		};
		const deletePermission = (id) => {
			if (confirm("Apakah Anda yakin ingin menghapus permission ini?")) router.delete(route("permissions.destroy", id));
		};
		const submitPermission = () => {
			if (editingPermission.value) router.put(route("permissions.update", editingPermission.value.id), permissionForm.value, { onSuccess: () => {
				showPermissionModal.value = false;
				resetPermissionForm();
			} });
			else router.post(route("permissions.store"), permissionForm.value, { onSuccess: () => {
				showPermissionModal.value = false;
				resetPermissionForm();
			} });
		};
		const resetRoleForm = () => {
			roleForm.value = {
				name: "",
				display_name: "",
				description: ""
			};
			editingRole.value = null;
		};
		const resetPermissionForm = () => {
			permissionForm.value = {
				name: "",
				display_name: "",
				description: ""
			};
			editingPermission.value = null;
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(AdminLayout_default, mergeProps({ title: "Roles & Permissions" }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="space-y-6"${_scopeId}><div class="border-b pb-4"${_scopeId}><h1 class="text-2xl font-bold text-gray-900"${_scopeId}>Roles &amp; Permissions</h1><p class="text-gray-600 mt-1"${_scopeId}>Kelola role dan hak akses pengguna sistem</p></div><div class="border-b"${_scopeId}><nav class="-mb-px flex space-x-8"${_scopeId}><button class="${ssrRenderClass([activeTab.value === "roles" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300", "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"])}"${_scopeId}> Roles </button><button class="${ssrRenderClass([activeTab.value === "permissions" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300", "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"])}"${_scopeId}> Permissions </button></nav></div>`);
						if (activeTab.value === "roles") {
							_push(`<div class="space-y-6"${_scopeId}><div class="flex justify-between items-center"${_scopeId}><h2 class="text-lg font-bold"${_scopeId}>Daftar Roles</h2><button class="btn-primary"${_scopeId}><i class="fas fa-plus mr-2"${_scopeId}></i>Tambah Role </button></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"${_scopeId}><!--[-->`);
							ssrRenderList(__props.roles, (role) => {
								_push(`<div class="${ssrRenderClass([role.name === "Super Admin" ? "border-red-500" : "border-blue-500", "bg-white rounded-lg shadow p-6 border-l-4"])}"${_scopeId}><div class="flex justify-between items-start mb-4"${_scopeId}><div${_scopeId}><h3 class="font-bold text-lg"${_scopeId}>${ssrInterpolate(role.display_name || role.name)}</h3><p class="text-sm text-gray-500"${_scopeId}>${ssrInterpolate(role.users_count || 0)} pengguna</p></div>`);
								if (role.name === "Super Admin") _push(`<span class="px-2 py-1 text-xs bg-red-100 text-red-800 rounded-full"${_scopeId}>Default</span>`);
								else _push(`<!---->`);
								_push(`</div><div class="text-sm text-gray-600 mb-4"${_scopeId}><p${_scopeId}>${ssrInterpolate(role.description || "Tidak ada deskripsi")}</p></div><div class="flex justify-end space-x-2"${_scopeId}><button class="text-blue-600 hover:text-blue-900 text-sm"${_scopeId}><i class="fas fa-edit mr-1"${_scopeId}></i>Edit </button><button class="text-green-600 hover:text-green-900 text-sm"${_scopeId}><i class="fas fa-copy mr-1"${_scopeId}></i>Clone </button>`);
								if (role.name !== "Super Admin") _push(`<button class="text-red-600 hover:text-red-900 text-sm"${_scopeId}><i class="fas fa-trash mr-1"${_scopeId}></i>Hapus </button>`);
								else _push(`<!---->`);
								_push(`</div></div>`);
							});
							_push(`<!--]--></div><div class="bg-white rounded-lg shadow p-6"${_scopeId}><h3 class="text-lg font-bold mb-4"${_scopeId}>Matrix Permissions</h3><div class="space-y-2"${_scopeId}><!--[-->`);
							ssrRenderList(__props.roles, (role) => {
								_push(`<div class="border rounded-lg overflow-hidden"${_scopeId}><button class="w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 flex justify-between items-center text-left transition-colors"${_scopeId}><span class="font-medium"${_scopeId}>${ssrInterpolate(role.display_name || role.name)}</span><i class="${ssrRenderClass([expandedRole.value === role.id ? "fa-chevron-up" : "fa-chevron-down", "fas"])}"${_scopeId}></i></button><div class="p-4 bg-white border-t" style="${ssrRenderStyle(expandedRole.value === role.id ? null : { display: "none" })}"${_scopeId}><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"${_scopeId}><!--[-->`);
								ssrRenderList(__props.permissions, (permission) => {
									_push(`<div class="flex items-center space-x-2"${_scopeId}><input type="checkbox"${ssrRenderAttr("id", `perm-${role.id}-${permission.id}`)}${ssrIncludeBooleanAttr(hasPermission(role, permission)) ? " checked" : ""} class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}><label${ssrRenderAttr("for", `perm-${role.id}-${permission.id}`)} class="text-sm text-gray-700 cursor-pointer select-none"${_scopeId}>${ssrInterpolate(permission.display_name || permission.name)}</label></div>`);
								});
								_push(`<!--]--></div></div></div>`);
							});
							_push(`<!--]--></div></div></div>`);
						} else _push(`<!---->`);
						if (activeTab.value === "permissions") {
							_push(`<div class="space-y-6"${_scopeId}><div class="flex justify-between items-center"${_scopeId}><h2 class="text-lg font-bold"${_scopeId}>Daftar Permissions</h2><button class="btn-primary"${_scopeId}><i class="fas fa-plus mr-2"${_scopeId}></i>Tambah Permission </button></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"${_scopeId}><!--[-->`);
							ssrRenderList(__props.permissions, (permission) => {
								_push(`<div class="bg-white rounded-lg shadow p-4"${_scopeId}><div class="flex justify-between items-start"${_scopeId}><div${_scopeId}><h3 class="font-bold text-sm"${_scopeId}>${ssrInterpolate(permission.display_name || permission.name)}</h3><p class="text-xs text-gray-500 mt-1"${_scopeId}>${ssrInterpolate(permission.name)}</p>`);
								if (permission.description) _push(`<p class="text-xs text-gray-600 mt-2"${_scopeId}>${ssrInterpolate(permission.description)}</p>`);
								else _push(`<!---->`);
								_push(`</div><div class="flex space-x-2"${_scopeId}><button class="text-blue-600 hover:text-blue-900"${_scopeId}><i class="fas fa-edit"${_scopeId}></i></button><button class="text-red-600 hover:text-red-900"${_scopeId}><i class="fas fa-trash"${_scopeId}></i></button></div></div></div>`);
							});
							_push(`<!--]--></div></div>`);
						} else _push(`<!---->`);
						_push(ssrRenderComponent(_sfc_main$1, {
							show: showRoleModal.value,
							onClose: ($event) => showRoleModal.value = false,
							"max-width": "lg"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`<form class="p-6 space-y-4"${_scopeId}><h2 class="text-xl font-bold"${_scopeId}>${ssrInterpolate(editingRole.value ? "Edit" : "Tambah")} Role</h2><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Nama Role</label><input${ssrRenderAttr("value", roleForm.value.name)} type="text" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Display Name</label><input${ssrRenderAttr("value", roleForm.value.display_name)} type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Deskripsi</label><textarea rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}>${ssrInterpolate(roleForm.value.description)}</textarea></div><div class="flex justify-end gap-3 pt-4"${_scopeId}><button type="button" class="btn-secondary"${_scopeId}>Batal</button><button type="submit" class="btn-primary"${_scopeId}>${ssrInterpolate(editingRole.value ? "Update" : "Simpan")}</button></div></form>`);
								else return [createVNode("form", {
									onSubmit: withModifiers(submitRole, ["prevent"]),
									class: "p-6 space-y-4"
								}, [
									createVNode("h2", { class: "text-xl font-bold" }, toDisplayString(editingRole.value ? "Edit" : "Tambah") + " Role", 1),
									createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Nama Role"), withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => roleForm.value.name = $event,
										type: "text",
										required: "",
										class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, roleForm.value.name]])]),
									createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Display Name"), withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => roleForm.value.display_name = $event,
										type: "text",
										class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, roleForm.value.display_name]])]),
									createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Deskripsi"), withDirectives(createVNode("textarea", {
										"onUpdate:modelValue": ($event) => roleForm.value.description = $event,
										rows: "3",
										class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, roleForm.value.description]])]),
									createVNode("div", { class: "flex justify-end gap-3 pt-4" }, [createVNode("button", {
										type: "button",
										onClick: ($event) => showRoleModal.value = false,
										class: "btn-secondary"
									}, "Batal", 8, ["onClick"]), createVNode("button", {
										type: "submit",
										class: "btn-primary"
									}, toDisplayString(editingRole.value ? "Update" : "Simpan"), 1)])
								], 32)];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$1, {
							show: showPermissionModal.value,
							onClose: ($event) => showPermissionModal.value = false,
							"max-width": "lg"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`<form class="p-6 space-y-4"${_scopeId}><h2 class="text-xl font-bold"${_scopeId}>${ssrInterpolate(editingPermission.value ? "Edit" : "Tambah")} Permission</h2><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Nama Permission</label><input${ssrRenderAttr("value", permissionForm.value.name)} type="text" required placeholder="contoh: transactions.create" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Display Name</label><input${ssrRenderAttr("value", permissionForm.value.display_name)} type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Deskripsi</label><textarea rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}>${ssrInterpolate(permissionForm.value.description)}</textarea></div><div class="flex justify-end gap-3 pt-4"${_scopeId}><button type="button" class="btn-secondary"${_scopeId}>Batal</button><button type="submit" class="btn-primary"${_scopeId}>${ssrInterpolate(editingPermission.value ? "Update" : "Simpan")}</button></div></form>`);
								else return [createVNode("form", {
									onSubmit: withModifiers(submitPermission, ["prevent"]),
									class: "p-6 space-y-4"
								}, [
									createVNode("h2", { class: "text-xl font-bold" }, toDisplayString(editingPermission.value ? "Edit" : "Tambah") + " Permission", 1),
									createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Nama Permission"), withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => permissionForm.value.name = $event,
										type: "text",
										required: "",
										placeholder: "contoh: transactions.create",
										class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, permissionForm.value.name]])]),
									createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Display Name"), withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => permissionForm.value.display_name = $event,
										type: "text",
										class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, permissionForm.value.display_name]])]),
									createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Deskripsi"), withDirectives(createVNode("textarea", {
										"onUpdate:modelValue": ($event) => permissionForm.value.description = $event,
										rows: "3",
										class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, permissionForm.value.description]])]),
									createVNode("div", { class: "flex justify-end gap-3 pt-4" }, [createVNode("button", {
										type: "button",
										onClick: ($event) => showPermissionModal.value = false,
										class: "btn-secondary"
									}, "Batal", 8, ["onClick"]), createVNode("button", {
										type: "submit",
										class: "btn-primary"
									}, toDisplayString(editingPermission.value ? "Update" : "Simpan"), 1)])
								], 32)];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div>`);
					} else return [createVNode("div", { class: "space-y-6" }, [
						createVNode("div", { class: "border-b pb-4" }, [createVNode("h1", { class: "text-2xl font-bold text-gray-900" }, "Roles & Permissions"), createVNode("p", { class: "text-gray-600 mt-1" }, "Kelola role dan hak akses pengguna sistem")]),
						createVNode("div", { class: "border-b" }, [createVNode("nav", { class: "-mb-px flex space-x-8" }, [createVNode("button", {
							onClick: ($event) => activeTab.value = "roles",
							class: [activeTab.value === "roles" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300", "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"]
						}, " Roles ", 10, ["onClick"]), createVNode("button", {
							onClick: ($event) => activeTab.value = "permissions",
							class: [activeTab.value === "permissions" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300", "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"]
						}, " Permissions ", 10, ["onClick"])])]),
						activeTab.value === "roles" ? (openBlock(), createBlock("div", {
							key: 0,
							class: "space-y-6"
						}, [
							createVNode("div", { class: "flex justify-between items-center" }, [createVNode("h2", { class: "text-lg font-bold" }, "Daftar Roles"), createVNode("button", {
								onClick: ($event) => showRoleModal.value = true,
								class: "btn-primary"
							}, [createVNode("i", { class: "fas fa-plus mr-2" }), createTextVNode("Tambah Role ")], 8, ["onClick"])]),
							createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.roles, (role) => {
								return openBlock(), createBlock("div", {
									key: role.id,
									class: ["bg-white rounded-lg shadow p-6 border-l-4", role.name === "Super Admin" ? "border-red-500" : "border-blue-500"]
								}, [
									createVNode("div", { class: "flex justify-between items-start mb-4" }, [createVNode("div", null, [createVNode("h3", { class: "font-bold text-lg" }, toDisplayString(role.display_name || role.name), 1), createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(role.users_count || 0) + " pengguna", 1)]), role.name === "Super Admin" ? (openBlock(), createBlock("span", {
										key: 0,
										class: "px-2 py-1 text-xs bg-red-100 text-red-800 rounded-full"
									}, "Default")) : createCommentVNode("", true)]),
									createVNode("div", { class: "text-sm text-gray-600 mb-4" }, [createVNode("p", null, toDisplayString(role.description || "Tidak ada deskripsi"), 1)]),
									createVNode("div", { class: "flex justify-end space-x-2" }, [
										createVNode("button", {
											onClick: ($event) => editRole(role),
											class: "text-blue-600 hover:text-blue-900 text-sm"
										}, [createVNode("i", { class: "fas fa-edit mr-1" }), createTextVNode("Edit ")], 8, ["onClick"]),
										createVNode("button", {
											onClick: ($event) => cloneRole(role),
											class: "text-green-600 hover:text-green-900 text-sm"
										}, [createVNode("i", { class: "fas fa-copy mr-1" }), createTextVNode("Clone ")], 8, ["onClick"]),
										role.name !== "Super Admin" ? (openBlock(), createBlock("button", {
											key: 0,
											onClick: ($event) => deleteRole(role.id),
											class: "text-red-600 hover:text-red-900 text-sm"
										}, [createVNode("i", { class: "fas fa-trash mr-1" }), createTextVNode("Hapus ")], 8, ["onClick"])) : createCommentVNode("", true)
									])
								], 2);
							}), 128))]),
							createVNode("div", { class: "bg-white rounded-lg shadow p-6" }, [createVNode("h3", { class: "text-lg font-bold mb-4" }, "Matrix Permissions"), createVNode("div", { class: "space-y-2" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.roles, (role) => {
								return openBlock(), createBlock("div", {
									key: role.id,
									class: "border rounded-lg overflow-hidden"
								}, [createVNode("button", {
									onClick: ($event) => toggleAccordion(role.id),
									class: "w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 flex justify-between items-center text-left transition-colors"
								}, [createVNode("span", { class: "font-medium" }, toDisplayString(role.display_name || role.name), 1), createVNode("i", { class: ["fas", expandedRole.value === role.id ? "fa-chevron-up" : "fa-chevron-down"] }, null, 2)], 8, ["onClick"]), withDirectives(createVNode("div", { class: "p-4 bg-white border-t" }, [createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.permissions, (permission) => {
									return openBlock(), createBlock("div", {
										key: permission.id,
										class: "flex items-center space-x-2"
									}, [createVNode("input", {
										type: "checkbox",
										id: `perm-${role.id}-${permission.id}`,
										checked: hasPermission(role, permission),
										onChange: ($event) => togglePermission(role, permission, $event.target.checked),
										class: "rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
									}, null, 40, [
										"id",
										"checked",
										"onChange"
									]), createVNode("label", {
										for: `perm-${role.id}-${permission.id}`,
										class: "text-sm text-gray-700 cursor-pointer select-none"
									}, toDisplayString(permission.display_name || permission.name), 9, ["for"])]);
								}), 128))])], 512), [[vShow, expandedRole.value === role.id]])]);
							}), 128))])])
						])) : createCommentVNode("", true),
						activeTab.value === "permissions" ? (openBlock(), createBlock("div", {
							key: 1,
							class: "space-y-6"
						}, [createVNode("div", { class: "flex justify-between items-center" }, [createVNode("h2", { class: "text-lg font-bold" }, "Daftar Permissions"), createVNode("button", {
							onClick: ($event) => showPermissionModal.value = true,
							class: "btn-primary"
						}, [createVNode("i", { class: "fas fa-plus mr-2" }), createTextVNode("Tambah Permission ")], 8, ["onClick"])]), createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.permissions, (permission) => {
							return openBlock(), createBlock("div", {
								key: permission.id,
								class: "bg-white rounded-lg shadow p-4"
							}, [createVNode("div", { class: "flex justify-between items-start" }, [createVNode("div", null, [
								createVNode("h3", { class: "font-bold text-sm" }, toDisplayString(permission.display_name || permission.name), 1),
								createVNode("p", { class: "text-xs text-gray-500 mt-1" }, toDisplayString(permission.name), 1),
								permission.description ? (openBlock(), createBlock("p", {
									key: 0,
									class: "text-xs text-gray-600 mt-2"
								}, toDisplayString(permission.description), 1)) : createCommentVNode("", true)
							]), createVNode("div", { class: "flex space-x-2" }, [createVNode("button", {
								onClick: ($event) => editPermission(permission),
								class: "text-blue-600 hover:text-blue-900"
							}, [createVNode("i", { class: "fas fa-edit" })], 8, ["onClick"]), createVNode("button", {
								onClick: ($event) => deletePermission(permission.id),
								class: "text-red-600 hover:text-red-900"
							}, [createVNode("i", { class: "fas fa-trash" })], 8, ["onClick"])])])]);
						}), 128))])])) : createCommentVNode("", true),
						createVNode(_sfc_main$1, {
							show: showRoleModal.value,
							onClose: ($event) => showRoleModal.value = false,
							"max-width": "lg"
						}, {
							default: withCtx(() => [createVNode("form", {
								onSubmit: withModifiers(submitRole, ["prevent"]),
								class: "p-6 space-y-4"
							}, [
								createVNode("h2", { class: "text-xl font-bold" }, toDisplayString(editingRole.value ? "Edit" : "Tambah") + " Role", 1),
								createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Nama Role"), withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => roleForm.value.name = $event,
									type: "text",
									required: "",
									class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, roleForm.value.name]])]),
								createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Display Name"), withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => roleForm.value.display_name = $event,
									type: "text",
									class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, roleForm.value.display_name]])]),
								createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Deskripsi"), withDirectives(createVNode("textarea", {
									"onUpdate:modelValue": ($event) => roleForm.value.description = $event,
									rows: "3",
									class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, roleForm.value.description]])]),
								createVNode("div", { class: "flex justify-end gap-3 pt-4" }, [createVNode("button", {
									type: "button",
									onClick: ($event) => showRoleModal.value = false,
									class: "btn-secondary"
								}, "Batal", 8, ["onClick"]), createVNode("button", {
									type: "submit",
									class: "btn-primary"
								}, toDisplayString(editingRole.value ? "Update" : "Simpan"), 1)])
							], 32)]),
							_: 1
						}, 8, ["show", "onClose"]),
						createVNode(_sfc_main$1, {
							show: showPermissionModal.value,
							onClose: ($event) => showPermissionModal.value = false,
							"max-width": "lg"
						}, {
							default: withCtx(() => [createVNode("form", {
								onSubmit: withModifiers(submitPermission, ["prevent"]),
								class: "p-6 space-y-4"
							}, [
								createVNode("h2", { class: "text-xl font-bold" }, toDisplayString(editingPermission.value ? "Edit" : "Tambah") + " Permission", 1),
								createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Nama Permission"), withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => permissionForm.value.name = $event,
									type: "text",
									required: "",
									placeholder: "contoh: transactions.create",
									class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, permissionForm.value.name]])]),
								createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Display Name"), withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => permissionForm.value.display_name = $event,
									type: "text",
									class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, permissionForm.value.display_name]])]),
								createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Deskripsi"), withDirectives(createVNode("textarea", {
									"onUpdate:modelValue": ($event) => permissionForm.value.description = $event,
									rows: "3",
									class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, permissionForm.value.description]])]),
								createVNode("div", { class: "flex justify-end gap-3 pt-4" }, [createVNode("button", {
									type: "button",
									onClick: ($event) => showPermissionModal.value = false,
									class: "btn-secondary"
								}, "Batal", 8, ["onClick"]), createVNode("button", {
									type: "submit",
									class: "btn-primary"
								}, toDisplayString(editingPermission.value ? "Update" : "Simpan"), 1)])
							], 32)]),
							_: 1
						}, 8, ["show", "onClose"])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Settings/Roles.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
