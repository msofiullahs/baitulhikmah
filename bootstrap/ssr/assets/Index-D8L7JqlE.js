import { t as _sfc_main$1 } from "./Modal-CLSC5svO.js";
import { t as AdminLayout_default } from "./AdminLayout-JKKJHCcy.js";
import { t as _sfc_main$2 } from "./Pagination-DiptkPBm.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelCheckbox, vModelSelect, vModelText, withCtx, withDirectives, withKeys, withModifiers } from "vue";
import { Head, router, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { MagnifyingGlassIcon, PencilIcon, PlusIcon, TrashIcon } from "@heroicons/vue/24/outline";
//#region resources/js/Pages/Users/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: {
		users: Object,
		filters: Object
	},
	setup(__props) {
		const props = __props;
		const search = ref(props.filters?.search || "");
		const roleFilter = ref(props.filters?.role || "");
		const modalOpen = ref(false);
		const editMode = ref(false);
		const currentUser = ref(null);
		const form = useForm({
			name: "",
			username: "",
			email: "",
			password: "",
			password_confirmation: "",
			role: "",
			phone: "",
			is_active: true
		});
		const openEdit = (user) => {
			editMode.value = true;
			currentUser.value = user;
			form.name = user.name;
			form.username = user.username;
			form.email = user.email || "";
			form.phone = user.phone || "";
			form.role = user.roles[0]?.name || "";
			form.is_active = user.is_active;
			modalOpen.value = true;
		};
		const submit = () => {
			if (editMode.value && currentUser.value) form.put(route("users.update", currentUser.value.id), { onSuccess: () => {
				closeModal();
			} });
			else form.post(route("users.store"), { onSuccess: () => {
				closeModal();
			} });
		};
		const closeModal = () => {
			modalOpen.value = false;
			editMode.value = false;
			currentUser.value = null;
			form.reset();
		};
		const deleteItem = (item) => {
			if (confirm(`Hapus user "${item.name}"?`)) router.delete(route("users.destroy", item.id));
		};
		const filterUsers = () => {
			router.get(route("users.index"), {
				search: search.value,
				role: roleFilter.value
			}, { preserveState: true });
		};
		const roleBadge = (roles) => {
			if (!roles || roles.length === 0) return "<span class=\"text-gray-400\">-</span>";
			return roles.map((r) => `<span class="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">${r.name}</span>`).join(" ");
		};
		const statusBadge = (isActive) => {
			return isActive ? "<span class=\"px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium\">Aktif</span>" : "<span class=\"px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium\">Nonaktif</span>";
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(AdminLayout_default, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "Manajemen Pengguna" }, null, _parent, _scopeId));
						_push(`<div class="mb-6 flex justify-between items-center"${_scopeId}><div${_scopeId}><h1 class="text-2xl font-bold text-gray-800"${_scopeId}>Manajemen Pengguna</h1><p class="text-gray-500 text-sm"${_scopeId}>Kelola user, role, dan permissions</p></div><button class="bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg flex items-center gap-2 transition shadow-md"${_scopeId}>`);
						_push(ssrRenderComponent(unref(PlusIcon), { class: "w-5 h-5" }, null, _parent, _scopeId));
						_push(` Tambah User </button></div><div class="bg-white rounded-xl shadow-sm p-4 mb-6"${_scopeId}><div class="flex gap-3 flex-wrap"${_scopeId}><div class="flex-1 min-w-[200px] relative"${_scopeId}>`);
						_push(ssrRenderComponent(unref(MagnifyingGlassIcon), { class: "w-5 h-5 absolute left-3 top-2.5 text-gray-400" }, null, _parent, _scopeId));
						_push(`<input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari nama atau username..." class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}></div><select class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(roleFilter.value) ? ssrLooseContain(roleFilter.value, "") : ssrLooseEqual(roleFilter.value, "")) ? " selected" : ""}${_scopeId}>Semua Role</option><option value="Super Admin"${ssrIncludeBooleanAttr(Array.isArray(roleFilter.value) ? ssrLooseContain(roleFilter.value, "Super Admin") : ssrLooseEqual(roleFilter.value, "Super Admin")) ? " selected" : ""}${_scopeId}>Super Admin</option><option value="Ketua Ta&#39;mir"${ssrIncludeBooleanAttr(Array.isArray(roleFilter.value) ? ssrLooseContain(roleFilter.value, "Ketua Ta'mir") : ssrLooseEqual(roleFilter.value, "Ketua Ta'mir")) ? " selected" : ""}${_scopeId}>Ketua Ta&#39;mir</option><option value="Wakil Ketua"${ssrIncludeBooleanAttr(Array.isArray(roleFilter.value) ? ssrLooseContain(roleFilter.value, "Wakil Ketua") : ssrLooseEqual(roleFilter.value, "Wakil Ketua")) ? " selected" : ""}${_scopeId}>Wakil Ketua</option><option value="Sekretaris"${ssrIncludeBooleanAttr(Array.isArray(roleFilter.value) ? ssrLooseContain(roleFilter.value, "Sekretaris") : ssrLooseEqual(roleFilter.value, "Sekretaris")) ? " selected" : ""}${_scopeId}>Sekretaris</option><option value="Bendahara"${ssrIncludeBooleanAttr(Array.isArray(roleFilter.value) ? ssrLooseContain(roleFilter.value, "Bendahara") : ssrLooseEqual(roleFilter.value, "Bendahara")) ? " selected" : ""}${_scopeId}>Bendahara</option><option value="Sie Pendidikan"${ssrIncludeBooleanAttr(Array.isArray(roleFilter.value) ? ssrLooseContain(roleFilter.value, "Sie Pendidikan") : ssrLooseEqual(roleFilter.value, "Sie Pendidikan")) ? " selected" : ""}${_scopeId}>Sie Pendidikan</option><option value="Sie Peribadatan"${ssrIncludeBooleanAttr(Array.isArray(roleFilter.value) ? ssrLooseContain(roleFilter.value, "Sie Peribadatan") : ssrLooseEqual(roleFilter.value, "Sie Peribadatan")) ? " selected" : ""}${_scopeId}>Sie Peribadatan</option><option value="Sie Sarpras"${ssrIncludeBooleanAttr(Array.isArray(roleFilter.value) ? ssrLooseContain(roleFilter.value, "Sie Sarpras") : ssrLooseEqual(roleFilter.value, "Sie Sarpras")) ? " selected" : ""}${_scopeId}>Sie Sarpras</option><option value="Sie Keamanan"${ssrIncludeBooleanAttr(Array.isArray(roleFilter.value) ? ssrLooseContain(roleFilter.value, "Sie Keamanan") : ssrLooseEqual(roleFilter.value, "Sie Keamanan")) ? " selected" : ""}${_scopeId}>Sie Keamanan</option><option value="Sie Kebersihan"${ssrIncludeBooleanAttr(Array.isArray(roleFilter.value) ? ssrLooseContain(roleFilter.value, "Sie Kebersihan") : ssrLooseEqual(roleFilter.value, "Sie Kebersihan")) ? " selected" : ""}${_scopeId}>Sie Kebersihan</option><option value="Sie Humas"${ssrIncludeBooleanAttr(Array.isArray(roleFilter.value) ? ssrLooseContain(roleFilter.value, "Sie Humas") : ssrLooseEqual(roleFilter.value, "Sie Humas")) ? " selected" : ""}${_scopeId}>Sie Humas</option><option value="Sie Kemudaan"${ssrIncludeBooleanAttr(Array.isArray(roleFilter.value) ? ssrLooseContain(roleFilter.value, "Sie Kemudaan") : ssrLooseEqual(roleFilter.value, "Sie Kemudaan")) ? " selected" : ""}${_scopeId}>Sie Kemudaan</option><option value="Sie Perempuan"${ssrIncludeBooleanAttr(Array.isArray(roleFilter.value) ? ssrLooseContain(roleFilter.value, "Sie Perempuan") : ssrLooseEqual(roleFilter.value, "Sie Perempuan")) ? " selected" : ""}${_scopeId}>Sie Perempuan</option></select><button class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition"${_scopeId}>Filter</button></div></div><div class="bg-white rounded-xl shadow-sm overflow-hidden"${_scopeId}><table class="w-full text-sm"${_scopeId}><thead class="bg-gray-50 text-gray-600 text-xs uppercase"${_scopeId}><tr${_scopeId}><th class="px-6 py-3 text-left"${_scopeId}>User</th><th class="px-6 py-3 text-left"${_scopeId}>Username</th><th class="px-6 py-3 text-left"${_scopeId}>Role</th><th class="px-6 py-3 text-center"${_scopeId}>Status</th><th class="px-6 py-3 text-center"${_scopeId}>Last Login</th><th class="px-6 py-3 text-center"${_scopeId}>Aksi</th></tr></thead><tbody class="divide-y"${_scopeId}><!--[-->`);
						ssrRenderList(__props.users.data, (user) => {
							_push(`<tr class="hover:bg-gray-50"${_scopeId}><td class="px-6 py-4"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><div class="w-10 h-10 rounded-full bg-primary-light text-white flex items-center justify-center font-bold"${_scopeId}>${ssrInterpolate(user.name.charAt(0).toUpperCase())}</div><div${_scopeId}><div class="font-medium"${_scopeId}>${ssrInterpolate(user.name)}</div><div class="text-xs text-gray-500"${_scopeId}>${ssrInterpolate(user.email || "-")}</div></div></div></td><td class="px-6 py-4 font-mono text-xs"${_scopeId}>${ssrInterpolate(user.username)}</td><td class="px-6 py-4"${_scopeId}>${roleBadge(user.roles) ?? ""}</td><td class="px-6 py-4 text-center"${_scopeId}>${statusBadge(user.is_active) ?? ""}</td><td class="px-6 py-4 text-center text-xs"${_scopeId}>`);
							if (user.last_login_at) _push(`<div${_scopeId}>${ssrInterpolate(new Date(user.last_login_at).toLocaleDateString("id-ID"))}</div>`);
							else _push(`<div class="text-gray-400"${_scopeId}>Belum pernah</div>`);
							_push(`</td><td class="px-6 py-4 text-center"${_scopeId}><button class="text-gray-400 hover:text-primary mx-1" title="Edit"${_scopeId}>`);
							_push(ssrRenderComponent(unref(PencilIcon), { class: "w-5 h-5 inline" }, null, _parent, _scopeId));
							_push(`</button><button class="text-gray-400 hover:text-red-600 mx-1" title="Hapus"${_scopeId}>`);
							_push(ssrRenderComponent(unref(TrashIcon), { class: "w-5 h-5 inline" }, null, _parent, _scopeId));
							_push(`</button></td></tr>`);
						});
						_push(`<!--]-->`);
						if (!__props.users.data.length) _push(`<tr${_scopeId}><td colspan="6" class="px-6 py-12 text-center text-gray-500"${_scopeId}>Tidak ada data user</td></tr>`);
						else _push(`<!---->`);
						_push(`</tbody></table><div class="px-6 py-4 border-t"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$2, { links: __props.users.links }, null, _parent, _scopeId));
						_push(`</div></div>`);
						_push(ssrRenderComponent(_sfc_main$1, {
							show: modalOpen.value,
							title: editMode.value ? "Edit User" : "Tambah User Baru",
							onClose: closeModal
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<form class="space-y-4 max-h-[70vh] overflow-y-auto pr-2"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Nama Lengkap <span class="text-red-500"${_scopeId}>*</span></label><input${ssrRenderAttr("value", unref(form).name)} type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Contoh: Ahmad Fulan"${_scopeId}>`);
									if (unref(form).errors.name) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.name)}</span>`);
									else _push(`<!---->`);
									_push(`</div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Username <span class="text-red-500"${_scopeId}>*</span></label><input${ssrRenderAttr("value", unref(form).username)} type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Untuk login"${_scopeId}>`);
									if (unref(form).errors.username) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.username)}</span>`);
									else _push(`<!---->`);
									_push(`</div><div class="grid grid-cols-2 gap-4"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Email (Opsional)</label><input${ssrRenderAttr("value", unref(form).email)} type="email" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}>`);
									if (unref(form).errors.email) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.email)}</span>`);
									else _push(`<!---->`);
									_push(`</div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>No. HP</label><input${ssrRenderAttr("value", unref(form).phone)} type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}></div></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Role <span class="text-red-500"${_scopeId}>*</span></label><select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(form).role) ? ssrLooseContain(unref(form).role, "") : ssrLooseEqual(unref(form).role, "")) ? " selected" : ""}${_scopeId}>Pilih Role</option><option value="Ketua Ta&#39;mir"${ssrIncludeBooleanAttr(Array.isArray(unref(form).role) ? ssrLooseContain(unref(form).role, "Ketua Ta'mir") : ssrLooseEqual(unref(form).role, "Ketua Ta'mir")) ? " selected" : ""}${_scopeId}>Ketua Ta&#39;mir</option><option value="Wakil Ketua"${ssrIncludeBooleanAttr(Array.isArray(unref(form).role) ? ssrLooseContain(unref(form).role, "Wakil Ketua") : ssrLooseEqual(unref(form).role, "Wakil Ketua")) ? " selected" : ""}${_scopeId}>Wakil Ketua</option><option value="Sekretaris"${ssrIncludeBooleanAttr(Array.isArray(unref(form).role) ? ssrLooseContain(unref(form).role, "Sekretaris") : ssrLooseEqual(unref(form).role, "Sekretaris")) ? " selected" : ""}${_scopeId}>Sekretaris</option><option value="Bendahara"${ssrIncludeBooleanAttr(Array.isArray(unref(form).role) ? ssrLooseContain(unref(form).role, "Bendahara") : ssrLooseEqual(unref(form).role, "Bendahara")) ? " selected" : ""}${_scopeId}>Bendahara</option><option value="Sie Pendidikan"${ssrIncludeBooleanAttr(Array.isArray(unref(form).role) ? ssrLooseContain(unref(form).role, "Sie Pendidikan") : ssrLooseEqual(unref(form).role, "Sie Pendidikan")) ? " selected" : ""}${_scopeId}>Sie Pendidikan</option><option value="Sie Peribadatan"${ssrIncludeBooleanAttr(Array.isArray(unref(form).role) ? ssrLooseContain(unref(form).role, "Sie Peribadatan") : ssrLooseEqual(unref(form).role, "Sie Peribadatan")) ? " selected" : ""}${_scopeId}>Sie Peribadatan</option><option value="Sie Sarpras"${ssrIncludeBooleanAttr(Array.isArray(unref(form).role) ? ssrLooseContain(unref(form).role, "Sie Sarpras") : ssrLooseEqual(unref(form).role, "Sie Sarpras")) ? " selected" : ""}${_scopeId}>Sie Sarpras</option><option value="Sie Keamanan"${ssrIncludeBooleanAttr(Array.isArray(unref(form).role) ? ssrLooseContain(unref(form).role, "Sie Keamanan") : ssrLooseEqual(unref(form).role, "Sie Keamanan")) ? " selected" : ""}${_scopeId}>Sie Keamanan</option><option value="Sie Kebersihan"${ssrIncludeBooleanAttr(Array.isArray(unref(form).role) ? ssrLooseContain(unref(form).role, "Sie Kebersihan") : ssrLooseEqual(unref(form).role, "Sie Kebersihan")) ? " selected" : ""}${_scopeId}>Sie Kebersihan</option><option value="Sie Humas"${ssrIncludeBooleanAttr(Array.isArray(unref(form).role) ? ssrLooseContain(unref(form).role, "Sie Humas") : ssrLooseEqual(unref(form).role, "Sie Humas")) ? " selected" : ""}${_scopeId}>Sie Humas</option><option value="Sie Kemudaan"${ssrIncludeBooleanAttr(Array.isArray(unref(form).role) ? ssrLooseContain(unref(form).role, "Sie Kemudaan") : ssrLooseEqual(unref(form).role, "Sie Kemudaan")) ? " selected" : ""}${_scopeId}>Sie Kemudaan</option><option value="Sie Perempuan"${ssrIncludeBooleanAttr(Array.isArray(unref(form).role) ? ssrLooseContain(unref(form).role, "Sie Perempuan") : ssrLooseEqual(unref(form).role, "Sie Perempuan")) ? " selected" : ""}${_scopeId}>Sie Perempuan</option></select>`);
									if (unref(form).errors.role) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.role)}</span>`);
									else _push(`<!---->`);
									_push(`</div>`);
									if (!editMode.value) {
										_push(`<div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Password <span class="text-red-500"${_scopeId}>*</span></label><input${ssrRenderAttr("value", unref(form).password)} type="password" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}>`);
										if (unref(form).errors.password) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.password)}</span>`);
										else _push(`<!---->`);
										_push(`</div>`);
									} else _push(`<!---->`);
									if (!editMode.value) _push(`<div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Konfirmasi Password <span class="text-red-500"${_scopeId}>*</span></label><input${ssrRenderAttr("value", unref(form).password_confirmation)} type="password" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}></div>`);
									else _push(`<!---->`);
									if (editMode.value) _push(`<div class="border-t pt-4"${_scopeId}><label class="flex items-center gap-2"${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(unref(form).is_active) ? ssrLooseContain(unref(form).is_active, null) : unref(form).is_active) ? " checked" : ""} type="checkbox" class="rounded border-gray-300 text-primary focus:ring-primary"${_scopeId}><span class="text-sm text-gray-700"${_scopeId}>User Aktif</span></label></div>`);
									else _push(`<!---->`);
									_push(`<div class="flex justify-end gap-3 pt-4 border-t"${_scopeId}><button type="button" class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"${_scopeId}>Batal</button><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="px-4 py-2 bg-primary text-white rounded-lg disabled:opacity-50"${_scopeId}>${ssrInterpolate(unref(form).processing ? "Menyimpan..." : "Simpan")}</button></div></form>`);
								} else return [createVNode("form", {
									onSubmit: withModifiers(submit, ["prevent"]),
									class: "space-y-4 max-h-[70vh] overflow-y-auto pr-2"
								}, [
									createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Nama Lengkap "), createVNode("span", { class: "text-red-500" }, "*")]),
										withDirectives(createVNode("input", {
											"onUpdate:modelValue": ($event) => unref(form).name = $event,
											type: "text",
											class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
											placeholder: "Contoh: Ahmad Fulan"
										}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).name]]),
										unref(form).errors.name ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(form).errors.name), 1)) : createCommentVNode("", true)
									]),
									createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Username "), createVNode("span", { class: "text-red-500" }, "*")]),
										withDirectives(createVNode("input", {
											"onUpdate:modelValue": ($event) => unref(form).username = $event,
											type: "text",
											class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
											placeholder: "Untuk login"
										}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).username]]),
										unref(form).errors.username ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(form).errors.username), 1)) : createCommentVNode("", true)
									]),
									createVNode("div", { class: "grid grid-cols-2 gap-4" }, [createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Email (Opsional)"),
										withDirectives(createVNode("input", {
											"onUpdate:modelValue": ($event) => unref(form).email = $event,
											type: "email",
											class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
										}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).email]]),
										unref(form).errors.email ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(form).errors.email), 1)) : createCommentVNode("", true)
									]), createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "No. HP"), withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).phone = $event,
										type: "text",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).phone]])])]),
									createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Role "), createVNode("span", { class: "text-red-500" }, "*")]),
										withDirectives(createVNode("select", {
											"onUpdate:modelValue": ($event) => unref(form).role = $event,
											class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
										}, [
											createVNode("option", { value: "" }, "Pilih Role"),
											createVNode("option", { value: "Ketua Ta'mir" }, "Ketua Ta'mir"),
											createVNode("option", { value: "Wakil Ketua" }, "Wakil Ketua"),
											createVNode("option", { value: "Sekretaris" }, "Sekretaris"),
											createVNode("option", { value: "Bendahara" }, "Bendahara"),
											createVNode("option", { value: "Sie Pendidikan" }, "Sie Pendidikan"),
											createVNode("option", { value: "Sie Peribadatan" }, "Sie Peribadatan"),
											createVNode("option", { value: "Sie Sarpras" }, "Sie Sarpras"),
											createVNode("option", { value: "Sie Keamanan" }, "Sie Keamanan"),
											createVNode("option", { value: "Sie Kebersihan" }, "Sie Kebersihan"),
											createVNode("option", { value: "Sie Humas" }, "Sie Humas"),
											createVNode("option", { value: "Sie Kemudaan" }, "Sie Kemudaan"),
											createVNode("option", { value: "Sie Perempuan" }, "Sie Perempuan")
										], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).role]]),
										unref(form).errors.role ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(form).errors.role), 1)) : createCommentVNode("", true)
									]),
									!editMode.value ? (openBlock(), createBlock("div", { key: 0 }, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Password "), createVNode("span", { class: "text-red-500" }, "*")]),
										withDirectives(createVNode("input", {
											"onUpdate:modelValue": ($event) => unref(form).password = $event,
											type: "password",
											class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
										}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).password]]),
										unref(form).errors.password ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(form).errors.password), 1)) : createCommentVNode("", true)
									])) : createCommentVNode("", true),
									!editMode.value ? (openBlock(), createBlock("div", { key: 1 }, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Konfirmasi Password "), createVNode("span", { class: "text-red-500" }, "*")]), withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
										type: "password",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).password_confirmation]])])) : createCommentVNode("", true),
									editMode.value ? (openBlock(), createBlock("div", {
										key: 2,
										class: "border-t pt-4"
									}, [createVNode("label", { class: "flex items-center gap-2" }, [withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).is_active = $event,
										type: "checkbox",
										class: "rounded border-gray-300 text-primary focus:ring-primary"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelCheckbox, unref(form).is_active]]), createVNode("span", { class: "text-sm text-gray-700" }, "User Aktif")])])) : createCommentVNode("", true),
									createVNode("div", { class: "flex justify-end gap-3 pt-4 border-t" }, [createVNode("button", {
										type: "button",
										onClick: closeModal,
										class: "px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
									}, "Batal"), createVNode("button", {
										type: "submit",
										disabled: unref(form).processing,
										class: "px-4 py-2 bg-primary text-white rounded-lg disabled:opacity-50"
									}, toDisplayString(unref(form).processing ? "Menyimpan..." : "Simpan"), 9, ["disabled"])])
								], 32)];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [
						createVNode(unref(Head), { title: "Manajemen Pengguna" }),
						createVNode("div", { class: "mb-6 flex justify-between items-center" }, [createVNode("div", null, [createVNode("h1", { class: "text-2xl font-bold text-gray-800" }, "Manajemen Pengguna"), createVNode("p", { class: "text-gray-500 text-sm" }, "Kelola user, role, dan permissions")]), createVNode("button", {
							onClick: ($event) => {
								modalOpen.value = true;
								editMode.value = false;
								unref(form).reset();
							},
							class: "bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg flex items-center gap-2 transition shadow-md"
						}, [createVNode(unref(PlusIcon), { class: "w-5 h-5" }), createTextVNode(" Tambah User ")], 8, ["onClick"])]),
						createVNode("div", { class: "bg-white rounded-xl shadow-sm p-4 mb-6" }, [createVNode("div", { class: "flex gap-3 flex-wrap" }, [
							createVNode("div", { class: "flex-1 min-w-[200px] relative" }, [createVNode(unref(MagnifyingGlassIcon), { class: "w-5 h-5 absolute left-3 top-2.5 text-gray-400" }), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => search.value = $event,
								onKeyup: withKeys(filterUsers, ["enter"]),
								type: "text",
								placeholder: "Cari nama atau username...",
								class: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
							}, null, 40, ["onUpdate:modelValue"]), [[vModelText, search.value]])]),
							withDirectives(createVNode("select", {
								"onUpdate:modelValue": ($event) => roleFilter.value = $event,
								onChange: filterUsers,
								class: "px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
							}, [
								createVNode("option", { value: "" }, "Semua Role"),
								createVNode("option", { value: "Super Admin" }, "Super Admin"),
								createVNode("option", { value: "Ketua Ta'mir" }, "Ketua Ta'mir"),
								createVNode("option", { value: "Wakil Ketua" }, "Wakil Ketua"),
								createVNode("option", { value: "Sekretaris" }, "Sekretaris"),
								createVNode("option", { value: "Bendahara" }, "Bendahara"),
								createVNode("option", { value: "Sie Pendidikan" }, "Sie Pendidikan"),
								createVNode("option", { value: "Sie Peribadatan" }, "Sie Peribadatan"),
								createVNode("option", { value: "Sie Sarpras" }, "Sie Sarpras"),
								createVNode("option", { value: "Sie Keamanan" }, "Sie Keamanan"),
								createVNode("option", { value: "Sie Kebersihan" }, "Sie Kebersihan"),
								createVNode("option", { value: "Sie Humas" }, "Sie Humas"),
								createVNode("option", { value: "Sie Kemudaan" }, "Sie Kemudaan"),
								createVNode("option", { value: "Sie Perempuan" }, "Sie Perempuan")
							], 40, ["onUpdate:modelValue"]), [[vModelSelect, roleFilter.value]]),
							createVNode("button", {
								onClick: filterUsers,
								class: "px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition"
							}, "Filter")
						])]),
						createVNode("div", { class: "bg-white rounded-xl shadow-sm overflow-hidden" }, [createVNode("table", { class: "w-full text-sm" }, [createVNode("thead", { class: "bg-gray-50 text-gray-600 text-xs uppercase" }, [createVNode("tr", null, [
							createVNode("th", { class: "px-6 py-3 text-left" }, "User"),
							createVNode("th", { class: "px-6 py-3 text-left" }, "Username"),
							createVNode("th", { class: "px-6 py-3 text-left" }, "Role"),
							createVNode("th", { class: "px-6 py-3 text-center" }, "Status"),
							createVNode("th", { class: "px-6 py-3 text-center" }, "Last Login"),
							createVNode("th", { class: "px-6 py-3 text-center" }, "Aksi")
						])]), createVNode("tbody", { class: "divide-y" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.users.data, (user) => {
							return openBlock(), createBlock("tr", {
								key: user.id,
								class: "hover:bg-gray-50"
							}, [
								createVNode("td", { class: "px-6 py-4" }, [createVNode("div", { class: "flex items-center gap-3" }, [createVNode("div", { class: "w-10 h-10 rounded-full bg-primary-light text-white flex items-center justify-center font-bold" }, toDisplayString(user.name.charAt(0).toUpperCase()), 1), createVNode("div", null, [createVNode("div", { class: "font-medium" }, toDisplayString(user.name), 1), createVNode("div", { class: "text-xs text-gray-500" }, toDisplayString(user.email || "-"), 1)])])]),
								createVNode("td", { class: "px-6 py-4 font-mono text-xs" }, toDisplayString(user.username), 1),
								createVNode("td", {
									class: "px-6 py-4",
									innerHTML: roleBadge(user.roles)
								}, null, 8, ["innerHTML"]),
								createVNode("td", {
									class: "px-6 py-4 text-center",
									innerHTML: statusBadge(user.is_active)
								}, null, 8, ["innerHTML"]),
								createVNode("td", { class: "px-6 py-4 text-center text-xs" }, [user.last_login_at ? (openBlock(), createBlock("div", { key: 0 }, toDisplayString(new Date(user.last_login_at).toLocaleDateString("id-ID")), 1)) : (openBlock(), createBlock("div", {
									key: 1,
									class: "text-gray-400"
								}, "Belum pernah"))]),
								createVNode("td", { class: "px-6 py-4 text-center" }, [createVNode("button", {
									onClick: ($event) => openEdit(user),
									class: "text-gray-400 hover:text-primary mx-1",
									title: "Edit"
								}, [createVNode(unref(PencilIcon), { class: "w-5 h-5 inline" })], 8, ["onClick"]), createVNode("button", {
									onClick: ($event) => deleteItem(user),
									class: "text-gray-400 hover:text-red-600 mx-1",
									title: "Hapus"
								}, [createVNode(unref(TrashIcon), { class: "w-5 h-5 inline" })], 8, ["onClick"])])
							]);
						}), 128)), !__props.users.data.length ? (openBlock(), createBlock("tr", { key: 0 }, [createVNode("td", {
							colspan: "6",
							class: "px-6 py-12 text-center text-gray-500"
						}, "Tidak ada data user")])) : createCommentVNode("", true)])]), createVNode("div", { class: "px-6 py-4 border-t" }, [createVNode(_sfc_main$2, { links: __props.users.links }, null, 8, ["links"])])]),
						createVNode(_sfc_main$1, {
							show: modalOpen.value,
							title: editMode.value ? "Edit User" : "Tambah User Baru",
							onClose: closeModal
						}, {
							default: withCtx(() => [createVNode("form", {
								onSubmit: withModifiers(submit, ["prevent"]),
								class: "space-y-4 max-h-[70vh] overflow-y-auto pr-2"
							}, [
								createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Nama Lengkap "), createVNode("span", { class: "text-red-500" }, "*")]),
									withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).name = $event,
										type: "text",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
										placeholder: "Contoh: Ahmad Fulan"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).name]]),
									unref(form).errors.name ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(form).errors.name), 1)) : createCommentVNode("", true)
								]),
								createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Username "), createVNode("span", { class: "text-red-500" }, "*")]),
									withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).username = $event,
										type: "text",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
										placeholder: "Untuk login"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).username]]),
									unref(form).errors.username ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(form).errors.username), 1)) : createCommentVNode("", true)
								]),
								createVNode("div", { class: "grid grid-cols-2 gap-4" }, [createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Email (Opsional)"),
									withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).email = $event,
										type: "email",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).email]]),
									unref(form).errors.email ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(form).errors.email), 1)) : createCommentVNode("", true)
								]), createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "No. HP"), withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => unref(form).phone = $event,
									type: "text",
									class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).phone]])])]),
								createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Role "), createVNode("span", { class: "text-red-500" }, "*")]),
									withDirectives(createVNode("select", {
										"onUpdate:modelValue": ($event) => unref(form).role = $event,
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, [
										createVNode("option", { value: "" }, "Pilih Role"),
										createVNode("option", { value: "Ketua Ta'mir" }, "Ketua Ta'mir"),
										createVNode("option", { value: "Wakil Ketua" }, "Wakil Ketua"),
										createVNode("option", { value: "Sekretaris" }, "Sekretaris"),
										createVNode("option", { value: "Bendahara" }, "Bendahara"),
										createVNode("option", { value: "Sie Pendidikan" }, "Sie Pendidikan"),
										createVNode("option", { value: "Sie Peribadatan" }, "Sie Peribadatan"),
										createVNode("option", { value: "Sie Sarpras" }, "Sie Sarpras"),
										createVNode("option", { value: "Sie Keamanan" }, "Sie Keamanan"),
										createVNode("option", { value: "Sie Kebersihan" }, "Sie Kebersihan"),
										createVNode("option", { value: "Sie Humas" }, "Sie Humas"),
										createVNode("option", { value: "Sie Kemudaan" }, "Sie Kemudaan"),
										createVNode("option", { value: "Sie Perempuan" }, "Sie Perempuan")
									], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).role]]),
									unref(form).errors.role ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(form).errors.role), 1)) : createCommentVNode("", true)
								]),
								!editMode.value ? (openBlock(), createBlock("div", { key: 0 }, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Password "), createVNode("span", { class: "text-red-500" }, "*")]),
									withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).password = $event,
										type: "password",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).password]]),
									unref(form).errors.password ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(form).errors.password), 1)) : createCommentVNode("", true)
								])) : createCommentVNode("", true),
								!editMode.value ? (openBlock(), createBlock("div", { key: 1 }, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Konfirmasi Password "), createVNode("span", { class: "text-red-500" }, "*")]), withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
									type: "password",
									class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).password_confirmation]])])) : createCommentVNode("", true),
								editMode.value ? (openBlock(), createBlock("div", {
									key: 2,
									class: "border-t pt-4"
								}, [createVNode("label", { class: "flex items-center gap-2" }, [withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => unref(form).is_active = $event,
									type: "checkbox",
									class: "rounded border-gray-300 text-primary focus:ring-primary"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelCheckbox, unref(form).is_active]]), createVNode("span", { class: "text-sm text-gray-700" }, "User Aktif")])])) : createCommentVNode("", true),
								createVNode("div", { class: "flex justify-end gap-3 pt-4 border-t" }, [createVNode("button", {
									type: "button",
									onClick: closeModal,
									class: "px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
								}, "Batal"), createVNode("button", {
									type: "submit",
									disabled: unref(form).processing,
									class: "px-4 py-2 bg-primary text-white rounded-lg disabled:opacity-50"
								}, toDisplayString(unref(form).processing ? "Menyimpan..." : "Simpan"), 9, ["disabled"])])
							], 32)]),
							_: 1
						}, 8, ["show", "title"])
					];
				}),
				_: 1
			}, _parent));
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
