import { t as _sfc_main$1 } from "./Modal-CLSC5svO.js";
import "./DangerButton-nBvHdAzK.js";
import { t as _sfc_main$2 } from "./InputError-DXJH4Bz-.js";
import { t as _sfc_main$3 } from "./InputLabel-BrItThsh.js";
import { t as _sfc_main$4 } from "./PrimaryButton-B1NJcOT8.js";
import { t as _sfc_main$5 } from "./SecondaryButton-BD33s9TB.js";
import { t as _sfc_main$6 } from "./TextInput-Deywsrn-.js";
import { t as AdminLayout_default } from "./AdminLayout-JKKJHCcy.js";
import { t as _sfc_main$7 } from "./PasswordInput-DsWjnK3r.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelCheckbox, vModelSelect, withCtx, withDirectives, withModifiers } from "vue";
import { Head, router, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import Swal from "sweetalert2";
//#region resources/js/Pages/Users/Edit.vue
var _sfc_main = {
	__name: "Edit",
	__ssrInlineRender: true,
	props: {
		users: Object,
		roles: Array
	},
	setup(__props) {
		const showCreateModal = ref(false);
		const showEditModal = ref(false);
		const editingUser = ref(null);
		const createForm = useForm({
			name: "",
			username: "",
			email: "",
			password: "",
			password_confirmation: "",
			role: "",
			is_active: true
		});
		const editForm = useForm({
			name: "",
			username: "",
			email: "",
			password: "",
			password_confirmation: "",
			role: "",
			is_active: true
		});
		const openCreateModal = () => {
			createForm.reset();
			createForm.role = "";
			showCreateModal.value = true;
		};
		const openEditModal = (user) => {
			editingUser.value = user;
			editForm.name = user.name;
			editForm.username = user.username;
			editForm.email = user.email || "";
			editForm.password = "";
			editForm.password_confirmation = "";
			editForm.role = user.roles[0]?.name || "";
			editForm.is_active = user.is_active;
			showEditModal.value = true;
		};
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
		const submitEdit = () => {
			editForm.put(route("users.update", editingUser.value.id), {
				onSuccess: () => {
					showEditModal.value = false;
					editingUser.value = null;
					Swal.fire("Success", "User berhasil diperbarui", "success");
				},
				onError: (errors) => {
					Swal.fire("Error", Object.values(errors)[0], "error");
				}
			});
		};
		const deleteUser = (user) => {
			Swal.fire({
				title: "Apakah Anda yakin?",
				text: `User ${user.name} akan dihapus permanen!`,
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#d33",
				cancelButtonColor: "#3085d6",
				confirmButtonText: "Ya, hapus!",
				cancelButtonText: "Batal"
			}).then((result) => {
				if (result.isConfirmed) router.delete(route("users.destroy", user.id), {
					onSuccess: () => {
						Swal.fire("Terhapus!", "User berhasil dihapus.", "success");
					},
					onError: (errors) => {
						Swal.fire("Error", Object.values(errors)[0], "error");
					}
				});
			});
		};
		const resetPassword = (user) => {
			Swal.fire({
				title: "Reset Password",
				input: "text",
				inputLabel: "Masukkan password baru untuk " + user.name,
				inputPlaceholder: "Password baru",
				showCancelButton: true,
				confirmButtonText: "Reset",
				cancelButtonText: "Batal"
			}).then((result) => {
				if (result.isConfirmed && result.value) Swal.fire("Success", "Password berhasil direset", "success");
			});
		};
		const getRoleBadgeClass = (roleName) => {
			return {
				"Super Admin": "bg-purple-100 text-purple-800",
				"Ketua": "bg-blue-100 text-blue-800",
				"Wakil Ketua": "bg-indigo-100 text-indigo-800",
				"Sekretaris": "bg-green-100 text-green-800",
				"Bendahara": "bg-yellow-100 text-yellow-800"
			}[roleName] || "bg-gray-100 text-gray-800";
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Manajemen Pengguna" }, null, _parent));
			_push(ssrRenderComponent(AdminLayout_default, null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="py-6"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="flex justify-between items-center mb-6"${_scopeId}><div${_scopeId}><h1 class="text-2xl font-bold text-gray-900"${_scopeId}>Manajemen Pengguna</h1><p class="text-sm text-gray-600 mt-1"${_scopeId}>Kelola akun pengguna sistem</p></div>`);
						_push(ssrRenderComponent(_sfc_main$4, { onClick: openCreateModal }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`<i class="fas fa-plus mr-2"${_scopeId}></i>Tambah User `);
								else return [createVNode("i", { class: "fas fa-plus mr-2" }), createTextVNode("Tambah User ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div><div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"${_scopeId}><div class="bg-white rounded-lg shadow p-4"${_scopeId}><div class="flex items-center"${_scopeId}><div class="flex-shrink-0 bg-blue-100 rounded-md p-3"${_scopeId}><i class="fas fa-users text-blue-600"${_scopeId}></i></div><div class="ml-4"${_scopeId}><p class="text-sm text-gray-500"${_scopeId}>Total User</p><p class="text-2xl font-bold text-gray-900"${_scopeId}>${ssrInterpolate(__props.users.total)}</p></div></div></div><div class="bg-white rounded-lg shadow p-4"${_scopeId}><div class="flex items-center"${_scopeId}><div class="flex-shrink-0 bg-green-100 rounded-md p-3"${_scopeId}><i class="fas fa-check-circle text-green-600"${_scopeId}></i></div><div class="ml-4"${_scopeId}><p class="text-sm text-gray-500"${_scopeId}>Aktif</p><p class="text-2xl font-bold text-gray-900"${_scopeId}>${ssrInterpolate(__props.users.data.filter((u) => u.is_active).length)}</p></div></div></div><div class="bg-white rounded-lg shadow p-4"${_scopeId}><div class="flex items-center"${_scopeId}><div class="flex-shrink-0 bg-red-100 rounded-md p-3"${_scopeId}><i class="fas fa-times-circle text-red-600"${_scopeId}></i></div><div class="ml-4"${_scopeId}><p class="text-sm text-gray-500"${_scopeId}>Nonaktif</p><p class="text-2xl font-bold text-gray-900"${_scopeId}>${ssrInterpolate(__props.users.data.filter((u) => !u.is_active).length)}</p></div></div></div><div class="bg-white rounded-lg shadow p-4"${_scopeId}><div class="flex items-center"${_scopeId}><div class="flex-shrink-0 bg-purple-100 rounded-md p-3"${_scopeId}><i class="fas fa-user-shield text-purple-600"${_scopeId}></i></div><div class="ml-4"${_scopeId}><p class="text-sm text-gray-500"${_scopeId}>Super Admin</p><p class="text-2xl font-bold text-gray-900"${_scopeId}>${ssrInterpolate(__props.users.data.filter((u) => u.roles.some((r) => r.name === "Super Admin")).length)}</p></div></div></div></div><div class="bg-white rounded-lg shadow overflow-hidden"${_scopeId}><div class="overflow-x-auto"${_scopeId}><table class="min-w-full divide-y divide-gray-200"${_scopeId}><thead class="bg-gray-50"${_scopeId}><tr${_scopeId}><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> User </th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Role </th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Status </th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Last Login </th><th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Actions </th></tr></thead><tbody class="bg-white divide-y divide-gray-200"${_scopeId}><!--[-->`);
						ssrRenderList(__props.users.data, (user) => {
							_push(`<tr class="hover:bg-gray-50"${_scopeId}><td class="px-6 py-4 whitespace-nowrap"${_scopeId}><div class="flex items-center"${_scopeId}><div class="flex-shrink-0 h-10 w-10"${_scopeId}>`);
							if (user.photo) _push(`<img class="h-10 w-10 rounded-full object-cover"${ssrRenderAttr("src", `/storage/${user.photo}`)}${ssrRenderAttr("alt", user.name)}${_scopeId}>`);
							else _push(`<div class="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold"${_scopeId}>${ssrInterpolate(user.name.charAt(0).toUpperCase())}</div>`);
							_push(`</div><div class="ml-4"${_scopeId}><div class="text-sm font-medium text-gray-900"${_scopeId}>${ssrInterpolate(user.name)}</div><div class="text-sm text-gray-500"${_scopeId}>@${ssrInterpolate(user.username)}</div>`);
							if (user.email) _push(`<div class="text-xs text-gray-400"${_scopeId}>${ssrInterpolate(user.email)}</div>`);
							else _push(`<!---->`);
							_push(`</div></div></td><td class="px-6 py-4 whitespace-nowrap"${_scopeId}><!--[-->`);
							ssrRenderList(user.roles, (role) => {
								_push(`<span class="${ssrRenderClass(["px-2.5 py-0.5 rounded-full text-xs font-medium", getRoleBadgeClass(role.name)])}"${_scopeId}>${ssrInterpolate(role.name)}</span>`);
							});
							_push(`<!--]--></td><td class="px-6 py-4 whitespace-nowrap"${_scopeId}><span class="${ssrRenderClass(["px-2.5 py-0.5 rounded-full text-xs font-medium", user.is_active ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"])}"${_scopeId}>${ssrInterpolate(user.is_active ? "Aktif" : "Nonaktif")}</span></td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"${_scopeId}>${ssrInterpolate(user.last_login_at ? new Date(user.last_login_at).toLocaleString("id-ID") : "Belum pernah")}</td><td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"${_scopeId}><button class="text-blue-600 hover:text-blue-900 mr-3"${_scopeId}><i class="fas fa-edit"${_scopeId}></i> Edit </button><button class="text-yellow-600 hover:text-yellow-900 mr-3"${_scopeId}><i class="fas fa-key"${_scopeId}></i> Reset </button><button class="text-red-600 hover:text-red-900"${_scopeId}><i class="fas fa-trash"${_scopeId}></i> Hapus </button></td></tr>`);
						});
						_push(`<!--]--></tbody></table></div><div class="px-6 py-4 border-t border-gray-200"${_scopeId}><div class="flex justify-between items-center"${_scopeId}><div class="text-sm text-gray-700"${_scopeId}> Menampilkan ${ssrInterpolate(__props.users.from)} - ${ssrInterpolate(__props.users.to)} dari ${ssrInterpolate(__props.users.total)} data </div><div class="flex space-x-2"${_scopeId}><!--[-->`);
						ssrRenderList(__props.users.links, (url, key) => {
							_push(`<button${ssrIncludeBooleanAttr(!url.url) ? " disabled" : ""} class="${ssrRenderClass([
								"px-3 py-1 rounded text-sm",
								url.active ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300",
								!url.url && "opacity-50 cursor-not-allowed"
							])}"${_scopeId}>${url.label ?? ""}</button>`);
						});
						_push(`<!--]--></div></div></div></div></div></div>`);
						_push(ssrRenderComponent(_sfc_main$1, {
							show: showCreateModal.value,
							onClose: ($event) => showCreateModal.value = false,
							"max-width": "lg"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<form class="p-6"${_scopeId}><h2 class="text-lg font-medium text-gray-900 mb-4"${_scopeId}>Tambah User Baru</h2><div class="space-y-4"${_scopeId}><div${_scopeId}>`);
									_push(ssrRenderComponent(_sfc_main$3, {
										for: "name",
										value: "Nama Lengkap"
									}, null, _parent, _scopeId));
									_push(ssrRenderComponent(_sfc_main$6, {
										id: "name",
										type: "text",
										class: "mt-1 block w-full",
										modelValue: unref(createForm).name,
										"onUpdate:modelValue": ($event) => unref(createForm).name = $event,
										required: "",
										autofocus: ""
									}, null, _parent, _scopeId));
									_push(ssrRenderComponent(_sfc_main$2, {
										message: unref(createForm).errors.name,
										class: "mt-2"
									}, null, _parent, _scopeId));
									_push(`</div><div${_scopeId}>`);
									_push(ssrRenderComponent(_sfc_main$3, {
										for: "username",
										value: "Username"
									}, null, _parent, _scopeId));
									_push(ssrRenderComponent(_sfc_main$6, {
										id: "username",
										type: "text",
										class: "mt-1 block w-full",
										modelValue: unref(createForm).username,
										"onUpdate:modelValue": ($event) => unref(createForm).username = $event,
										required: ""
									}, null, _parent, _scopeId));
									_push(ssrRenderComponent(_sfc_main$2, {
										message: unref(createForm).errors.username,
										class: "mt-2"
									}, null, _parent, _scopeId));
									_push(`</div><div${_scopeId}>`);
									_push(ssrRenderComponent(_sfc_main$3, {
										for: "email",
										value: "Email (Opsional)"
									}, null, _parent, _scopeId));
									_push(ssrRenderComponent(_sfc_main$6, {
										id: "email",
										type: "email",
										class: "mt-1 block w-full",
										modelValue: unref(createForm).email,
										"onUpdate:modelValue": ($event) => unref(createForm).email = $event
									}, null, _parent, _scopeId));
									_push(ssrRenderComponent(_sfc_main$2, {
										message: unref(createForm).errors.email,
										class: "mt-2"
									}, null, _parent, _scopeId));
									_push(`</div><div class="grid grid-cols-2 gap-4"${_scopeId}><div${_scopeId}>`);
									_push(ssrRenderComponent(_sfc_main$3, {
										for: "password",
										value: "Password"
									}, null, _parent, _scopeId));
									_push(ssrRenderComponent(_sfc_main$7, {
										id: "password",
										class: "mt-1 block w-full",
										modelValue: unref(createForm).password,
										"onUpdate:modelValue": ($event) => unref(createForm).password = $event,
										required: ""
									}, null, _parent, _scopeId));
									_push(ssrRenderComponent(_sfc_main$2, {
										message: unref(createForm).errors.password,
										class: "mt-2"
									}, null, _parent, _scopeId));
									_push(`</div><div${_scopeId}>`);
									_push(ssrRenderComponent(_sfc_main$3, {
										for: "password_confirmation",
										value: "Konfirmasi Password"
									}, null, _parent, _scopeId));
									_push(ssrRenderComponent(_sfc_main$7, {
										id: "password_confirmation",
										class: "mt-1 block w-full",
										modelValue: unref(createForm).password_confirmation,
										"onUpdate:modelValue": ($event) => unref(createForm).password_confirmation = $event,
										required: ""
									}, null, _parent, _scopeId));
									_push(`</div></div><div${_scopeId}>`);
									_push(ssrRenderComponent(_sfc_main$3, {
										for: "role",
										value: "Role"
									}, null, _parent, _scopeId));
									_push(`<select id="role" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" required${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(createForm).role) ? ssrLooseContain(unref(createForm).role, "") : ssrLooseEqual(unref(createForm).role, "")) ? " selected" : ""}${_scopeId}>Pilih Role</option><!--[-->`);
									ssrRenderList(__props.roles, (role) => {
										_push(`<option${ssrRenderAttr("value", role.name)}${ssrIncludeBooleanAttr(Array.isArray(unref(createForm).role) ? ssrLooseContain(unref(createForm).role, role.name) : ssrLooseEqual(unref(createForm).role, role.name)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(role.name)}</option>`);
									});
									_push(`<!--]--></select>`);
									_push(ssrRenderComponent(_sfc_main$2, {
										message: unref(createForm).errors.role,
										class: "mt-2"
									}, null, _parent, _scopeId));
									_push(`</div></div><div class="mt-6 flex justify-end space-x-3"${_scopeId}>`);
									_push(ssrRenderComponent(_sfc_main$5, { onClick: ($event) => showCreateModal.value = false }, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(`Batal`);
											else return [createTextVNode("Batal")];
										}),
										_: 1
									}, _parent, _scopeId));
									_push(ssrRenderComponent(_sfc_main$4, { disabled: unref(createForm).processing }, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(`Simpan`);
											else return [createTextVNode("Simpan")];
										}),
										_: 1
									}, _parent, _scopeId));
									_push(`</div></form>`);
								} else return [createVNode("form", {
									onSubmit: withModifiers(submitCreate, ["prevent"]),
									class: "p-6"
								}, [
									createVNode("h2", { class: "text-lg font-medium text-gray-900 mb-4" }, "Tambah User Baru"),
									createVNode("div", { class: "space-y-4" }, [
										createVNode("div", null, [
											createVNode(_sfc_main$3, {
												for: "name",
												value: "Nama Lengkap"
											}),
											createVNode(_sfc_main$6, {
												id: "name",
												type: "text",
												class: "mt-1 block w-full",
												modelValue: unref(createForm).name,
												"onUpdate:modelValue": ($event) => unref(createForm).name = $event,
												required: "",
												autofocus: ""
											}, null, 8, ["modelValue", "onUpdate:modelValue"]),
											createVNode(_sfc_main$2, {
												message: unref(createForm).errors.name,
												class: "mt-2"
											}, null, 8, ["message"])
										]),
										createVNode("div", null, [
											createVNode(_sfc_main$3, {
												for: "username",
												value: "Username"
											}),
											createVNode(_sfc_main$6, {
												id: "username",
												type: "text",
												class: "mt-1 block w-full",
												modelValue: unref(createForm).username,
												"onUpdate:modelValue": ($event) => unref(createForm).username = $event,
												required: ""
											}, null, 8, ["modelValue", "onUpdate:modelValue"]),
											createVNode(_sfc_main$2, {
												message: unref(createForm).errors.username,
												class: "mt-2"
											}, null, 8, ["message"])
										]),
										createVNode("div", null, [
											createVNode(_sfc_main$3, {
												for: "email",
												value: "Email (Opsional)"
											}),
											createVNode(_sfc_main$6, {
												id: "email",
												type: "email",
												class: "mt-1 block w-full",
												modelValue: unref(createForm).email,
												"onUpdate:modelValue": ($event) => unref(createForm).email = $event
											}, null, 8, ["modelValue", "onUpdate:modelValue"]),
											createVNode(_sfc_main$2, {
												message: unref(createForm).errors.email,
												class: "mt-2"
											}, null, 8, ["message"])
										]),
										createVNode("div", { class: "grid grid-cols-2 gap-4" }, [createVNode("div", null, [
											createVNode(_sfc_main$3, {
												for: "password",
												value: "Password"
											}),
											createVNode(_sfc_main$7, {
												id: "password",
												class: "mt-1 block w-full",
												modelValue: unref(createForm).password,
												"onUpdate:modelValue": ($event) => unref(createForm).password = $event,
												required: ""
											}, null, 8, ["modelValue", "onUpdate:modelValue"]),
											createVNode(_sfc_main$2, {
												message: unref(createForm).errors.password,
												class: "mt-2"
											}, null, 8, ["message"])
										]), createVNode("div", null, [createVNode(_sfc_main$3, {
											for: "password_confirmation",
											value: "Konfirmasi Password"
										}), createVNode(_sfc_main$7, {
											id: "password_confirmation",
											class: "mt-1 block w-full",
											modelValue: unref(createForm).password_confirmation,
											"onUpdate:modelValue": ($event) => unref(createForm).password_confirmation = $event,
											required: ""
										}, null, 8, ["modelValue", "onUpdate:modelValue"])])]),
										createVNode("div", null, [
											createVNode(_sfc_main$3, {
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
											createVNode(_sfc_main$2, {
												message: unref(createForm).errors.role,
												class: "mt-2"
											}, null, 8, ["message"])
										])
									]),
									createVNode("div", { class: "mt-6 flex justify-end space-x-3" }, [createVNode(_sfc_main$5, { onClick: ($event) => showCreateModal.value = false }, {
										default: withCtx(() => [createTextVNode("Batal")]),
										_: 1
									}, 8, ["onClick"]), createVNode(_sfc_main$4, { disabled: unref(createForm).processing }, {
										default: withCtx(() => [createTextVNode("Simpan")]),
										_: 1
									}, 8, ["disabled"])])
								], 32)];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$1, {
							show: showEditModal.value,
							onClose: ($event) => showEditModal.value = false,
							"max-width": "lg"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<form class="p-6"${_scopeId}><h2 class="text-lg font-medium text-gray-900 mb-4"${_scopeId}>Edit User</h2><div class="space-y-4"${_scopeId}><div${_scopeId}>`);
									_push(ssrRenderComponent(_sfc_main$3, {
										for: "edit-name",
										value: "Nama Lengkap"
									}, null, _parent, _scopeId));
									_push(ssrRenderComponent(_sfc_main$6, {
										id: "edit-name",
										type: "text",
										class: "mt-1 block w-full",
										modelValue: unref(editForm).name,
										"onUpdate:modelValue": ($event) => unref(editForm).name = $event,
										required: ""
									}, null, _parent, _scopeId));
									_push(ssrRenderComponent(_sfc_main$2, {
										message: unref(editForm).errors.name,
										class: "mt-2"
									}, null, _parent, _scopeId));
									_push(`</div><div${_scopeId}>`);
									_push(ssrRenderComponent(_sfc_main$3, {
										for: "edit-username",
										value: "Username"
									}, null, _parent, _scopeId));
									_push(ssrRenderComponent(_sfc_main$6, {
										id: "edit-username",
										type: "text",
										class: "mt-1 block w-full",
										modelValue: unref(editForm).username,
										"onUpdate:modelValue": ($event) => unref(editForm).username = $event,
										required: ""
									}, null, _parent, _scopeId));
									_push(ssrRenderComponent(_sfc_main$2, {
										message: unref(editForm).errors.username,
										class: "mt-2"
									}, null, _parent, _scopeId));
									_push(`</div><div${_scopeId}>`);
									_push(ssrRenderComponent(_sfc_main$3, {
										for: "edit-email",
										value: "Email (Opsional)"
									}, null, _parent, _scopeId));
									_push(ssrRenderComponent(_sfc_main$6, {
										id: "edit-email",
										type: "email",
										class: "mt-1 block w-full",
										modelValue: unref(editForm).email,
										"onUpdate:modelValue": ($event) => unref(editForm).email = $event
									}, null, _parent, _scopeId));
									_push(ssrRenderComponent(_sfc_main$2, {
										message: unref(editForm).errors.email,
										class: "mt-2"
									}, null, _parent, _scopeId));
									_push(`</div><div class="grid grid-cols-2 gap-4"${_scopeId}><div${_scopeId}>`);
									_push(ssrRenderComponent(_sfc_main$3, {
										for: "edit-password",
										value: "Password Baru (Kosongkan jika tidak diubah)"
									}, null, _parent, _scopeId));
									_push(ssrRenderComponent(_sfc_main$6, {
										id: "edit-password",
										class: "mt-1 block w-full",
										modelValue: unref(editForm).password,
										"onUpdate:modelValue": ($event) => unref(editForm).password = $event
									}, null, _parent, _scopeId));
									_push(ssrRenderComponent(_sfc_main$2, {
										message: unref(editForm).errors.password,
										class: "mt-2"
									}, null, _parent, _scopeId));
									_push(`</div><div${_scopeId}>`);
									_push(ssrRenderComponent(_sfc_main$3, {
										for: "edit-password_confirmation",
										value: "Konfirmasi Password"
									}, null, _parent, _scopeId));
									_push(ssrRenderComponent(_sfc_main$6, {
										id: "edit-password_confirmation",
										class: "mt-1 block w-full",
										modelValue: unref(editForm).password_confirmation,
										"onUpdate:modelValue": ($event) => unref(editForm).password_confirmation = $event
									}, null, _parent, _scopeId));
									_push(`</div></div><div${_scopeId}>`);
									_push(ssrRenderComponent(_sfc_main$3, {
										for: "edit-role",
										value: "Role"
									}, null, _parent, _scopeId));
									_push(`<select id="edit-role" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" required${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(editForm).role) ? ssrLooseContain(unref(editForm).role, "") : ssrLooseEqual(unref(editForm).role, "")) ? " selected" : ""}${_scopeId}>Pilih Role</option><!--[-->`);
									ssrRenderList(__props.roles, (role) => {
										_push(`<option${ssrRenderAttr("value", role.name)}${ssrIncludeBooleanAttr(Array.isArray(unref(editForm).role) ? ssrLooseContain(unref(editForm).role, role.name) : ssrLooseEqual(unref(editForm).role, role.name)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(role.name)}</option>`);
									});
									_push(`<!--]--></select>`);
									_push(ssrRenderComponent(_sfc_main$2, {
										message: unref(editForm).errors.role,
										class: "mt-2"
									}, null, _parent, _scopeId));
									_push(`</div><div${_scopeId}><label class="flex items-center"${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(editForm).is_active) ? ssrLooseContain(unref(editForm).is_active, null) : unref(editForm).is_active) ? " checked" : ""} class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"${_scopeId}><span class="ml-2 text-sm text-gray-600"${_scopeId}>User Aktif</span></label></div></div><div class="mt-6 flex justify-end space-x-3"${_scopeId}>`);
									_push(ssrRenderComponent(_sfc_main$5, { onClick: ($event) => showEditModal.value = false }, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(`Batal`);
											else return [createTextVNode("Batal")];
										}),
										_: 1
									}, _parent, _scopeId));
									_push(ssrRenderComponent(_sfc_main$4, { disabled: unref(editForm).processing }, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(`Update`);
											else return [createTextVNode("Update")];
										}),
										_: 1
									}, _parent, _scopeId));
									_push(`</div></form>`);
								} else return [createVNode("form", {
									onSubmit: withModifiers(submitEdit, ["prevent"]),
									class: "p-6"
								}, [
									createVNode("h2", { class: "text-lg font-medium text-gray-900 mb-4" }, "Edit User"),
									createVNode("div", { class: "space-y-4" }, [
										createVNode("div", null, [
											createVNode(_sfc_main$3, {
												for: "edit-name",
												value: "Nama Lengkap"
											}),
											createVNode(_sfc_main$6, {
												id: "edit-name",
												type: "text",
												class: "mt-1 block w-full",
												modelValue: unref(editForm).name,
												"onUpdate:modelValue": ($event) => unref(editForm).name = $event,
												required: ""
											}, null, 8, ["modelValue", "onUpdate:modelValue"]),
											createVNode(_sfc_main$2, {
												message: unref(editForm).errors.name,
												class: "mt-2"
											}, null, 8, ["message"])
										]),
										createVNode("div", null, [
											createVNode(_sfc_main$3, {
												for: "edit-username",
												value: "Username"
											}),
											createVNode(_sfc_main$6, {
												id: "edit-username",
												type: "text",
												class: "mt-1 block w-full",
												modelValue: unref(editForm).username,
												"onUpdate:modelValue": ($event) => unref(editForm).username = $event,
												required: ""
											}, null, 8, ["modelValue", "onUpdate:modelValue"]),
											createVNode(_sfc_main$2, {
												message: unref(editForm).errors.username,
												class: "mt-2"
											}, null, 8, ["message"])
										]),
										createVNode("div", null, [
											createVNode(_sfc_main$3, {
												for: "edit-email",
												value: "Email (Opsional)"
											}),
											createVNode(_sfc_main$6, {
												id: "edit-email",
												type: "email",
												class: "mt-1 block w-full",
												modelValue: unref(editForm).email,
												"onUpdate:modelValue": ($event) => unref(editForm).email = $event
											}, null, 8, ["modelValue", "onUpdate:modelValue"]),
											createVNode(_sfc_main$2, {
												message: unref(editForm).errors.email,
												class: "mt-2"
											}, null, 8, ["message"])
										]),
										createVNode("div", { class: "grid grid-cols-2 gap-4" }, [createVNode("div", null, [
											createVNode(_sfc_main$3, {
												for: "edit-password",
												value: "Password Baru (Kosongkan jika tidak diubah)"
											}),
											createVNode(_sfc_main$6, {
												id: "edit-password",
												class: "mt-1 block w-full",
												modelValue: unref(editForm).password,
												"onUpdate:modelValue": ($event) => unref(editForm).password = $event
											}, null, 8, ["modelValue", "onUpdate:modelValue"]),
											createVNode(_sfc_main$2, {
												message: unref(editForm).errors.password,
												class: "mt-2"
											}, null, 8, ["message"])
										]), createVNode("div", null, [createVNode(_sfc_main$3, {
											for: "edit-password_confirmation",
											value: "Konfirmasi Password"
										}), createVNode(_sfc_main$6, {
											id: "edit-password_confirmation",
											class: "mt-1 block w-full",
											modelValue: unref(editForm).password_confirmation,
											"onUpdate:modelValue": ($event) => unref(editForm).password_confirmation = $event
										}, null, 8, ["modelValue", "onUpdate:modelValue"])])]),
										createVNode("div", null, [
											createVNode(_sfc_main$3, {
												for: "edit-role",
												value: "Role"
											}),
											withDirectives(createVNode("select", {
												id: "edit-role",
												"onUpdate:modelValue": ($event) => unref(editForm).role = $event,
												class: "mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500",
												required: ""
											}, [createVNode("option", { value: "" }, "Pilih Role"), (openBlock(true), createBlock(Fragment, null, renderList(__props.roles, (role) => {
												return openBlock(), createBlock("option", {
													key: role.id,
													value: role.name
												}, toDisplayString(role.name), 9, ["value"]);
											}), 128))], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(editForm).role]]),
											createVNode(_sfc_main$2, {
												message: unref(editForm).errors.role,
												class: "mt-2"
											}, null, 8, ["message"])
										]),
										createVNode("div", null, [createVNode("label", { class: "flex items-center" }, [withDirectives(createVNode("input", {
											type: "checkbox",
											"onUpdate:modelValue": ($event) => unref(editForm).is_active = $event,
											class: "rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
										}, null, 8, ["onUpdate:modelValue"]), [[vModelCheckbox, unref(editForm).is_active]]), createVNode("span", { class: "ml-2 text-sm text-gray-600" }, "User Aktif")])])
									]),
									createVNode("div", { class: "mt-6 flex justify-end space-x-3" }, [createVNode(_sfc_main$5, { onClick: ($event) => showEditModal.value = false }, {
										default: withCtx(() => [createTextVNode("Batal")]),
										_: 1
									}, 8, ["onClick"]), createVNode(_sfc_main$4, { disabled: unref(editForm).processing }, {
										default: withCtx(() => [createTextVNode("Update")]),
										_: 1
									}, 8, ["disabled"])])
								], 32)];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [
						createVNode("div", { class: "py-6" }, [createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
							createVNode("div", { class: "flex justify-between items-center mb-6" }, [createVNode("div", null, [createVNode("h1", { class: "text-2xl font-bold text-gray-900" }, "Manajemen Pengguna"), createVNode("p", { class: "text-sm text-gray-600 mt-1" }, "Kelola akun pengguna sistem")]), createVNode(_sfc_main$4, { onClick: openCreateModal }, {
								default: withCtx(() => [createVNode("i", { class: "fas fa-plus mr-2" }), createTextVNode("Tambah User ")]),
								_: 1
							})]),
							createVNode("div", { class: "grid grid-cols-1 md:grid-cols-4 gap-4 mb-6" }, [
								createVNode("div", { class: "bg-white rounded-lg shadow p-4" }, [createVNode("div", { class: "flex items-center" }, [createVNode("div", { class: "flex-shrink-0 bg-blue-100 rounded-md p-3" }, [createVNode("i", { class: "fas fa-users text-blue-600" })]), createVNode("div", { class: "ml-4" }, [createVNode("p", { class: "text-sm text-gray-500" }, "Total User"), createVNode("p", { class: "text-2xl font-bold text-gray-900" }, toDisplayString(__props.users.total), 1)])])]),
								createVNode("div", { class: "bg-white rounded-lg shadow p-4" }, [createVNode("div", { class: "flex items-center" }, [createVNode("div", { class: "flex-shrink-0 bg-green-100 rounded-md p-3" }, [createVNode("i", { class: "fas fa-check-circle text-green-600" })]), createVNode("div", { class: "ml-4" }, [createVNode("p", { class: "text-sm text-gray-500" }, "Aktif"), createVNode("p", { class: "text-2xl font-bold text-gray-900" }, toDisplayString(__props.users.data.filter((u) => u.is_active).length), 1)])])]),
								createVNode("div", { class: "bg-white rounded-lg shadow p-4" }, [createVNode("div", { class: "flex items-center" }, [createVNode("div", { class: "flex-shrink-0 bg-red-100 rounded-md p-3" }, [createVNode("i", { class: "fas fa-times-circle text-red-600" })]), createVNode("div", { class: "ml-4" }, [createVNode("p", { class: "text-sm text-gray-500" }, "Nonaktif"), createVNode("p", { class: "text-2xl font-bold text-gray-900" }, toDisplayString(__props.users.data.filter((u) => !u.is_active).length), 1)])])]),
								createVNode("div", { class: "bg-white rounded-lg shadow p-4" }, [createVNode("div", { class: "flex items-center" }, [createVNode("div", { class: "flex-shrink-0 bg-purple-100 rounded-md p-3" }, [createVNode("i", { class: "fas fa-user-shield text-purple-600" })]), createVNode("div", { class: "ml-4" }, [createVNode("p", { class: "text-sm text-gray-500" }, "Super Admin"), createVNode("p", { class: "text-2xl font-bold text-gray-900" }, toDisplayString(__props.users.data.filter((u) => u.roles.some((r) => r.name === "Super Admin")).length), 1)])])])
							]),
							createVNode("div", { class: "bg-white rounded-lg shadow overflow-hidden" }, [createVNode("div", { class: "overflow-x-auto" }, [createVNode("table", { class: "min-w-full divide-y divide-gray-200" }, [createVNode("thead", { class: "bg-gray-50" }, [createVNode("tr", null, [
								createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, " User "),
								createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, " Role "),
								createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, " Status "),
								createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, " Last Login "),
								createVNode("th", { class: "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" }, " Actions ")
							])]), createVNode("tbody", { class: "bg-white divide-y divide-gray-200" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.users.data, (user) => {
								return openBlock(), createBlock("tr", {
									key: user.id,
									class: "hover:bg-gray-50"
								}, [
									createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [createVNode("div", { class: "flex items-center" }, [createVNode("div", { class: "flex-shrink-0 h-10 w-10" }, [user.photo ? (openBlock(), createBlock("img", {
										key: 0,
										class: "h-10 w-10 rounded-full object-cover",
										src: `/storage/${user.photo}`,
										alt: user.name
									}, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
										key: 1,
										class: "h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold"
									}, toDisplayString(user.name.charAt(0).toUpperCase()), 1))]), createVNode("div", { class: "ml-4" }, [
										createVNode("div", { class: "text-sm font-medium text-gray-900" }, toDisplayString(user.name), 1),
										createVNode("div", { class: "text-sm text-gray-500" }, "@" + toDisplayString(user.username), 1),
										user.email ? (openBlock(), createBlock("div", {
											key: 0,
											class: "text-xs text-gray-400"
										}, toDisplayString(user.email), 1)) : createCommentVNode("", true)
									])])]),
									createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [(openBlock(true), createBlock(Fragment, null, renderList(user.roles, (role) => {
										return openBlock(), createBlock("span", {
											key: role.id,
											class: ["px-2.5 py-0.5 rounded-full text-xs font-medium", getRoleBadgeClass(role.name)]
										}, toDisplayString(role.name), 3);
									}), 128))]),
									createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [createVNode("span", { class: ["px-2.5 py-0.5 rounded-full text-xs font-medium", user.is_active ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"] }, toDisplayString(user.is_active ? "Aktif" : "Nonaktif"), 3)]),
									createVNode("td", { class: "px-6 py-4 whitespace-nowrap text-sm text-gray-500" }, toDisplayString(user.last_login_at ? new Date(user.last_login_at).toLocaleString("id-ID") : "Belum pernah"), 1),
									createVNode("td", { class: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium" }, [
										createVNode("button", {
											onClick: ($event) => openEditModal(user),
											class: "text-blue-600 hover:text-blue-900 mr-3"
										}, [createVNode("i", { class: "fas fa-edit" }), createTextVNode(" Edit ")], 8, ["onClick"]),
										createVNode("button", {
											onClick: ($event) => resetPassword(user),
											class: "text-yellow-600 hover:text-yellow-900 mr-3"
										}, [createVNode("i", { class: "fas fa-key" }), createTextVNode(" Reset ")], 8, ["onClick"]),
										createVNode("button", {
											onClick: ($event) => deleteUser(user),
											class: "text-red-600 hover:text-red-900"
										}, [createVNode("i", { class: "fas fa-trash" }), createTextVNode(" Hapus ")], 8, ["onClick"])
									])
								]);
							}), 128))])])]), createVNode("div", { class: "px-6 py-4 border-t border-gray-200" }, [createVNode("div", { class: "flex justify-between items-center" }, [createVNode("div", { class: "text-sm text-gray-700" }, " Menampilkan " + toDisplayString(__props.users.from) + " - " + toDisplayString(__props.users.to) + " dari " + toDisplayString(__props.users.total) + " data ", 1), createVNode("div", { class: "flex space-x-2" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.users.links, (url, key) => {
								return openBlock(), createBlock("button", {
									key,
									onClick: ($event) => unref(router).get(url.url),
									disabled: !url.url,
									class: [
										"px-3 py-1 rounded text-sm",
										url.active ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300",
										!url.url && "opacity-50 cursor-not-allowed"
									],
									innerHTML: url.label
								}, null, 10, [
									"onClick",
									"disabled",
									"innerHTML"
								]);
							}), 128))])])])])
						])]),
						createVNode(_sfc_main$1, {
							show: showCreateModal.value,
							onClose: ($event) => showCreateModal.value = false,
							"max-width": "lg"
						}, {
							default: withCtx(() => [createVNode("form", {
								onSubmit: withModifiers(submitCreate, ["prevent"]),
								class: "p-6"
							}, [
								createVNode("h2", { class: "text-lg font-medium text-gray-900 mb-4" }, "Tambah User Baru"),
								createVNode("div", { class: "space-y-4" }, [
									createVNode("div", null, [
										createVNode(_sfc_main$3, {
											for: "name",
											value: "Nama Lengkap"
										}),
										createVNode(_sfc_main$6, {
											id: "name",
											type: "text",
											class: "mt-1 block w-full",
											modelValue: unref(createForm).name,
											"onUpdate:modelValue": ($event) => unref(createForm).name = $event,
											required: "",
											autofocus: ""
										}, null, 8, ["modelValue", "onUpdate:modelValue"]),
										createVNode(_sfc_main$2, {
											message: unref(createForm).errors.name,
											class: "mt-2"
										}, null, 8, ["message"])
									]),
									createVNode("div", null, [
										createVNode(_sfc_main$3, {
											for: "username",
											value: "Username"
										}),
										createVNode(_sfc_main$6, {
											id: "username",
											type: "text",
											class: "mt-1 block w-full",
											modelValue: unref(createForm).username,
											"onUpdate:modelValue": ($event) => unref(createForm).username = $event,
											required: ""
										}, null, 8, ["modelValue", "onUpdate:modelValue"]),
										createVNode(_sfc_main$2, {
											message: unref(createForm).errors.username,
											class: "mt-2"
										}, null, 8, ["message"])
									]),
									createVNode("div", null, [
										createVNode(_sfc_main$3, {
											for: "email",
											value: "Email (Opsional)"
										}),
										createVNode(_sfc_main$6, {
											id: "email",
											type: "email",
											class: "mt-1 block w-full",
											modelValue: unref(createForm).email,
											"onUpdate:modelValue": ($event) => unref(createForm).email = $event
										}, null, 8, ["modelValue", "onUpdate:modelValue"]),
										createVNode(_sfc_main$2, {
											message: unref(createForm).errors.email,
											class: "mt-2"
										}, null, 8, ["message"])
									]),
									createVNode("div", { class: "grid grid-cols-2 gap-4" }, [createVNode("div", null, [
										createVNode(_sfc_main$3, {
											for: "password",
											value: "Password"
										}),
										createVNode(_sfc_main$7, {
											id: "password",
											class: "mt-1 block w-full",
											modelValue: unref(createForm).password,
											"onUpdate:modelValue": ($event) => unref(createForm).password = $event,
											required: ""
										}, null, 8, ["modelValue", "onUpdate:modelValue"]),
										createVNode(_sfc_main$2, {
											message: unref(createForm).errors.password,
											class: "mt-2"
										}, null, 8, ["message"])
									]), createVNode("div", null, [createVNode(_sfc_main$3, {
										for: "password_confirmation",
										value: "Konfirmasi Password"
									}), createVNode(_sfc_main$7, {
										id: "password_confirmation",
										class: "mt-1 block w-full",
										modelValue: unref(createForm).password_confirmation,
										"onUpdate:modelValue": ($event) => unref(createForm).password_confirmation = $event,
										required: ""
									}, null, 8, ["modelValue", "onUpdate:modelValue"])])]),
									createVNode("div", null, [
										createVNode(_sfc_main$3, {
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
										createVNode(_sfc_main$2, {
											message: unref(createForm).errors.role,
											class: "mt-2"
										}, null, 8, ["message"])
									])
								]),
								createVNode("div", { class: "mt-6 flex justify-end space-x-3" }, [createVNode(_sfc_main$5, { onClick: ($event) => showCreateModal.value = false }, {
									default: withCtx(() => [createTextVNode("Batal")]),
									_: 1
								}, 8, ["onClick"]), createVNode(_sfc_main$4, { disabled: unref(createForm).processing }, {
									default: withCtx(() => [createTextVNode("Simpan")]),
									_: 1
								}, 8, ["disabled"])])
							], 32)]),
							_: 1
						}, 8, ["show", "onClose"]),
						createVNode(_sfc_main$1, {
							show: showEditModal.value,
							onClose: ($event) => showEditModal.value = false,
							"max-width": "lg"
						}, {
							default: withCtx(() => [createVNode("form", {
								onSubmit: withModifiers(submitEdit, ["prevent"]),
								class: "p-6"
							}, [
								createVNode("h2", { class: "text-lg font-medium text-gray-900 mb-4" }, "Edit User"),
								createVNode("div", { class: "space-y-4" }, [
									createVNode("div", null, [
										createVNode(_sfc_main$3, {
											for: "edit-name",
											value: "Nama Lengkap"
										}),
										createVNode(_sfc_main$6, {
											id: "edit-name",
											type: "text",
											class: "mt-1 block w-full",
											modelValue: unref(editForm).name,
											"onUpdate:modelValue": ($event) => unref(editForm).name = $event,
											required: ""
										}, null, 8, ["modelValue", "onUpdate:modelValue"]),
										createVNode(_sfc_main$2, {
											message: unref(editForm).errors.name,
											class: "mt-2"
										}, null, 8, ["message"])
									]),
									createVNode("div", null, [
										createVNode(_sfc_main$3, {
											for: "edit-username",
											value: "Username"
										}),
										createVNode(_sfc_main$6, {
											id: "edit-username",
											type: "text",
											class: "mt-1 block w-full",
											modelValue: unref(editForm).username,
											"onUpdate:modelValue": ($event) => unref(editForm).username = $event,
											required: ""
										}, null, 8, ["modelValue", "onUpdate:modelValue"]),
										createVNode(_sfc_main$2, {
											message: unref(editForm).errors.username,
											class: "mt-2"
										}, null, 8, ["message"])
									]),
									createVNode("div", null, [
										createVNode(_sfc_main$3, {
											for: "edit-email",
											value: "Email (Opsional)"
										}),
										createVNode(_sfc_main$6, {
											id: "edit-email",
											type: "email",
											class: "mt-1 block w-full",
											modelValue: unref(editForm).email,
											"onUpdate:modelValue": ($event) => unref(editForm).email = $event
										}, null, 8, ["modelValue", "onUpdate:modelValue"]),
										createVNode(_sfc_main$2, {
											message: unref(editForm).errors.email,
											class: "mt-2"
										}, null, 8, ["message"])
									]),
									createVNode("div", { class: "grid grid-cols-2 gap-4" }, [createVNode("div", null, [
										createVNode(_sfc_main$3, {
											for: "edit-password",
											value: "Password Baru (Kosongkan jika tidak diubah)"
										}),
										createVNode(_sfc_main$6, {
											id: "edit-password",
											class: "mt-1 block w-full",
											modelValue: unref(editForm).password,
											"onUpdate:modelValue": ($event) => unref(editForm).password = $event
										}, null, 8, ["modelValue", "onUpdate:modelValue"]),
										createVNode(_sfc_main$2, {
											message: unref(editForm).errors.password,
											class: "mt-2"
										}, null, 8, ["message"])
									]), createVNode("div", null, [createVNode(_sfc_main$3, {
										for: "edit-password_confirmation",
										value: "Konfirmasi Password"
									}), createVNode(_sfc_main$6, {
										id: "edit-password_confirmation",
										class: "mt-1 block w-full",
										modelValue: unref(editForm).password_confirmation,
										"onUpdate:modelValue": ($event) => unref(editForm).password_confirmation = $event
									}, null, 8, ["modelValue", "onUpdate:modelValue"])])]),
									createVNode("div", null, [
										createVNode(_sfc_main$3, {
											for: "edit-role",
											value: "Role"
										}),
										withDirectives(createVNode("select", {
											id: "edit-role",
											"onUpdate:modelValue": ($event) => unref(editForm).role = $event,
											class: "mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500",
											required: ""
										}, [createVNode("option", { value: "" }, "Pilih Role"), (openBlock(true), createBlock(Fragment, null, renderList(__props.roles, (role) => {
											return openBlock(), createBlock("option", {
												key: role.id,
												value: role.name
											}, toDisplayString(role.name), 9, ["value"]);
										}), 128))], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(editForm).role]]),
										createVNode(_sfc_main$2, {
											message: unref(editForm).errors.role,
											class: "mt-2"
										}, null, 8, ["message"])
									]),
									createVNode("div", null, [createVNode("label", { class: "flex items-center" }, [withDirectives(createVNode("input", {
										type: "checkbox",
										"onUpdate:modelValue": ($event) => unref(editForm).is_active = $event,
										class: "rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelCheckbox, unref(editForm).is_active]]), createVNode("span", { class: "ml-2 text-sm text-gray-600" }, "User Aktif")])])
								]),
								createVNode("div", { class: "mt-6 flex justify-end space-x-3" }, [createVNode(_sfc_main$5, { onClick: ($event) => showEditModal.value = false }, {
									default: withCtx(() => [createTextVNode("Batal")]),
									_: 1
								}, 8, ["onClick"]), createVNode(_sfc_main$4, { disabled: unref(editForm).processing }, {
									default: withCtx(() => [createTextVNode("Update")]),
									_: 1
								}, 8, ["disabled"])])
							], 32)]),
							_: 1
						}, 8, ["show", "onClose"])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Edit.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
