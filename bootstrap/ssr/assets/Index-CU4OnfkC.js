import { t as _sfc_main$1 } from "./Modal-CLSC5svO.js";
import { t as AdminLayout_default } from "./AdminLayout-JKKJHCcy.js";
import { t as _sfc_main$2 } from "./Pagination-DiptkPBm.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelCheckbox, vModelText, withCtx, withDirectives, withKeys, withModifiers } from "vue";
import { Head, router, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { MagnifyingGlassIcon, PencilIcon, PlusIcon, TrashIcon } from "@heroicons/vue/24/outline";
//#region resources/js/Pages/Cashbox/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: {
		items: Object,
		filters: Object
	},
	setup(__props) {
		const search = ref(__props.filters?.search || "");
		const modalOpen = ref(false);
		const editingItem = ref(null);
		const form = useForm({
			nama: "",
			kode: "",
			deskripsi: "",
			saldo_awal: 0,
			is_active: true
		});
		const openEdit = (item) => {
			editingItem.value = item;
			form.nama = item.nama;
			form.kode = item.kode || "";
			form.deskripsi = item.deskripsi || "";
			form.saldo_awal = item.saldo_awal || 0;
			form.is_active = item.is_active;
			modalOpen.value = true;
		};
		const submit = () => {
			if (editingItem.value) form.put(route("cashboxes.update", editingItem.value.id), { onSuccess: () => {
				modalOpen.value = false;
				form.reset();
				editingItem.value = null;
			} });
			else form.post(route("cashboxes.store"), { onSuccess: () => {
				modalOpen.value = false;
				form.reset();
			} });
		};
		const deleteItem = (item) => {
			if (confirm(`Hapus ${item.nama}?`)) router.delete(route("cashboxes.destroy", item.id));
		};
		const resetForm = () => {
			form.reset();
			editingItem.value = null;
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(AdminLayout_default, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "Kas Box" }, null, _parent, _scopeId));
						_push(`<div class="mb-6 flex justify-between items-center"${_scopeId}><div${_scopeId}><h1 class="text-2xl font-bold text-gray-800"${_scopeId}>Kas Box</h1><p class="text-gray-500 text-sm"${_scopeId}>Manajemen kas box untuk pengelolaan keuangan</p></div><button class="bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg flex items-center gap-2 transition shadow-md"${_scopeId}>`);
						_push(ssrRenderComponent(unref(PlusIcon), { class: "w-5 h-5" }, null, _parent, _scopeId));
						_push(` Tambah </button></div><div class="bg-white rounded-xl shadow-sm p-4 mb-6"${_scopeId}><div class="flex gap-3"${_scopeId}><div class="flex-1 relative"${_scopeId}>`);
						_push(ssrRenderComponent(unref(MagnifyingGlassIcon), { class: "w-5 h-5 absolute left-3 top-2.5 text-gray-400" }, null, _parent, _scopeId));
						_push(`<input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari..." class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}></div></div></div><div class="bg-white rounded-xl shadow-sm overflow-hidden"${_scopeId}><table class="w-full text-sm"${_scopeId}><thead class="bg-gray-50 text-gray-600 text-xs uppercase"${_scopeId}><tr${_scopeId}><th class="px-6 py-3 text-left"${_scopeId}>Nama</th><th class="px-6 py-3 text-left"${_scopeId}>Kode</th><th class="px-6 py-3 text-right"${_scopeId}>Saldo Awal</th><th class="px-6 py-3 text-center"${_scopeId}>Status</th><th class="px-6 py-3 text-center"${_scopeId}>Aksi</th></tr></thead><tbody class="divide-y"${_scopeId}><!--[-->`);
						ssrRenderList(__props.items.data, (item) => {
							_push(`<tr class="hover:bg-gray-50"${_scopeId}><td class="px-6 py-4"${_scopeId}>${ssrInterpolate(item.nama)}</td><td class="px-6 py-4"${_scopeId}>${ssrInterpolate(item.kode || "-")}</td><td class="px-6 py-4 text-right"${_scopeId}>Rp ${ssrInterpolate((item.saldo_awal || 0).toLocaleString("id-ID"))}</td><td class="px-6 py-4 text-center"${_scopeId}><span class="${ssrRenderClass([item.is_active ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800", "px-2 py-1 rounded-full text-xs font-medium"])}"${_scopeId}>${ssrInterpolate(item.is_active ? "Aktif" : "Nonaktif")}</span></td><td class="px-6 py-4 text-center"${_scopeId}><button class="text-gray-400 hover:text-primary mx-1"${_scopeId}>`);
							_push(ssrRenderComponent(unref(PencilIcon), { class: "w-5 h-5 inline" }, null, _parent, _scopeId));
							_push(`</button><button class="text-gray-400 hover:text-red-600 mx-1"${_scopeId}>`);
							_push(ssrRenderComponent(unref(TrashIcon), { class: "w-5 h-5 inline" }, null, _parent, _scopeId));
							_push(`</button></td></tr>`);
						});
						_push(`<!--]-->`);
						if (!__props.items.data.length) _push(`<tr${_scopeId}><td colspan="5" class="px-6 py-12 text-center text-gray-500"${_scopeId}>Tidak ada data</td></tr>`);
						else _push(`<!---->`);
						_push(`</tbody></table><div class="px-6 py-4 border-t"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$2, { links: __props.items.links }, null, _parent, _scopeId));
						_push(`</div></div>`);
						_push(ssrRenderComponent(_sfc_main$1, {
							show: modalOpen.value,
							title: editingItem.value ? "Edit Kas Box" : "Tambah Kas Box",
							onClose: ($event) => {
								modalOpen.value = false;
								resetForm();
							}
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<form class="space-y-4"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Nama *</label><input${ssrRenderAttr("value", unref(form).nama)} type="text" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}>`);
									if (unref(form).errors.nama) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.nama)}</span>`);
									else _push(`<!---->`);
									_push(`</div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Kode</label><input${ssrRenderAttr("value", unref(form).kode)} type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Deskripsi</label><textarea rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}>${ssrInterpolate(unref(form).deskripsi)}</textarea></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Saldo Awal</label><input${ssrRenderAttr("value", unref(form).saldo_awal)} type="number" min="0" step="0.01" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}></div><div class="flex items-center gap-2"${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(unref(form).is_active) ? ssrLooseContain(unref(form).is_active, null) : unref(form).is_active) ? " checked" : ""} type="checkbox" id="is_active" class="rounded border-gray-300 text-primary focus:ring-primary"${_scopeId}><label for="is_active" class="text-sm text-gray-700"${_scopeId}>Aktif</label></div><div class="flex justify-end gap-3 pt-4 border-t"${_scopeId}><button type="button" class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"${_scopeId}>Batal</button><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="px-4 py-2 bg-primary text-white rounded-lg disabled:opacity-50"${_scopeId}>${ssrInterpolate(unref(form).processing ? "Menyimpan..." : "Simpan")}</button></div></form>`);
								} else return [createVNode("form", {
									onSubmit: withModifiers(submit, ["prevent"]),
									class: "space-y-4"
								}, [
									createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Nama *"),
										withDirectives(createVNode("input", {
											"onUpdate:modelValue": ($event) => unref(form).nama = $event,
											type: "text",
											required: "",
											class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
										}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).nama]]),
										unref(form).errors.nama ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(form).errors.nama), 1)) : createCommentVNode("", true)
									]),
									createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Kode"), withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).kode = $event,
										type: "text",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).kode]])]),
									createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Deskripsi"), withDirectives(createVNode("textarea", {
										"onUpdate:modelValue": ($event) => unref(form).deskripsi = $event,
										rows: "3",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).deskripsi]])]),
									createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Saldo Awal"), withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).saldo_awal = $event,
										type: "number",
										min: "0",
										step: "0.01",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, null, 8, ["onUpdate:modelValue"]), [[
										vModelText,
										unref(form).saldo_awal,
										void 0,
										{ number: true }
									]])]),
									createVNode("div", { class: "flex items-center gap-2" }, [withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).is_active = $event,
										type: "checkbox",
										id: "is_active",
										class: "rounded border-gray-300 text-primary focus:ring-primary"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelCheckbox, unref(form).is_active]]), createVNode("label", {
										for: "is_active",
										class: "text-sm text-gray-700"
									}, "Aktif")]),
									createVNode("div", { class: "flex justify-end gap-3 pt-4 border-t" }, [createVNode("button", {
										type: "button",
										onClick: ($event) => {
											modalOpen.value = false;
											resetForm();
										},
										class: "px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
									}, "Batal", 8, ["onClick"]), createVNode("button", {
										type: "submit",
										disabled: unref(form).processing,
										class: "px-4 py-2 bg-primary text-white rounded-lg disabled:opacity-50"
									}, toDisplayString(unref(form).processing ? "Menyimpan..." : "Simpan"), 9, ["disabled"])])
								], 32)];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [
						createVNode(unref(Head), { title: "Kas Box" }),
						createVNode("div", { class: "mb-6 flex justify-between items-center" }, [createVNode("div", null, [createVNode("h1", { class: "text-2xl font-bold text-gray-800" }, "Kas Box"), createVNode("p", { class: "text-gray-500 text-sm" }, "Manajemen kas box untuk pengelolaan keuangan")]), createVNode("button", {
							onClick: ($event) => modalOpen.value = true,
							class: "bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg flex items-center gap-2 transition shadow-md"
						}, [createVNode(unref(PlusIcon), { class: "w-5 h-5" }), createTextVNode(" Tambah ")], 8, ["onClick"])]),
						createVNode("div", { class: "bg-white rounded-xl shadow-sm p-4 mb-6" }, [createVNode("div", { class: "flex gap-3" }, [createVNode("div", { class: "flex-1 relative" }, [createVNode(unref(MagnifyingGlassIcon), { class: "w-5 h-5 absolute left-3 top-2.5 text-gray-400" }), withDirectives(createVNode("input", {
							"onUpdate:modelValue": ($event) => search.value = $event,
							onKeyup: withKeys(($event) => unref(router).get(_ctx.route("cashboxes.index"), { search: search.value }, { preserveState: true }), ["enter"]),
							type: "text",
							placeholder: "Cari...",
							class: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
						}, null, 40, ["onUpdate:modelValue", "onKeyup"]), [[vModelText, search.value]])])])]),
						createVNode("div", { class: "bg-white rounded-xl shadow-sm overflow-hidden" }, [createVNode("table", { class: "w-full text-sm" }, [createVNode("thead", { class: "bg-gray-50 text-gray-600 text-xs uppercase" }, [createVNode("tr", null, [
							createVNode("th", { class: "px-6 py-3 text-left" }, "Nama"),
							createVNode("th", { class: "px-6 py-3 text-left" }, "Kode"),
							createVNode("th", { class: "px-6 py-3 text-right" }, "Saldo Awal"),
							createVNode("th", { class: "px-6 py-3 text-center" }, "Status"),
							createVNode("th", { class: "px-6 py-3 text-center" }, "Aksi")
						])]), createVNode("tbody", { class: "divide-y" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.items.data, (item) => {
							return openBlock(), createBlock("tr", {
								key: item.id,
								class: "hover:bg-gray-50"
							}, [
								createVNode("td", { class: "px-6 py-4" }, toDisplayString(item.nama), 1),
								createVNode("td", { class: "px-6 py-4" }, toDisplayString(item.kode || "-"), 1),
								createVNode("td", { class: "px-6 py-4 text-right" }, "Rp " + toDisplayString((item.saldo_awal || 0).toLocaleString("id-ID")), 1),
								createVNode("td", { class: "px-6 py-4 text-center" }, [createVNode("span", { class: [item.is_active ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800", "px-2 py-1 rounded-full text-xs font-medium"] }, toDisplayString(item.is_active ? "Aktif" : "Nonaktif"), 3)]),
								createVNode("td", { class: "px-6 py-4 text-center" }, [createVNode("button", {
									onClick: ($event) => openEdit(item),
									class: "text-gray-400 hover:text-primary mx-1"
								}, [createVNode(unref(PencilIcon), { class: "w-5 h-5 inline" })], 8, ["onClick"]), createVNode("button", {
									onClick: ($event) => deleteItem(item),
									class: "text-gray-400 hover:text-red-600 mx-1"
								}, [createVNode(unref(TrashIcon), { class: "w-5 h-5 inline" })], 8, ["onClick"])])
							]);
						}), 128)), !__props.items.data.length ? (openBlock(), createBlock("tr", { key: 0 }, [createVNode("td", {
							colspan: "5",
							class: "px-6 py-12 text-center text-gray-500"
						}, "Tidak ada data")])) : createCommentVNode("", true)])]), createVNode("div", { class: "px-6 py-4 border-t" }, [createVNode(_sfc_main$2, { links: __props.items.links }, null, 8, ["links"])])]),
						createVNode(_sfc_main$1, {
							show: modalOpen.value,
							title: editingItem.value ? "Edit Kas Box" : "Tambah Kas Box",
							onClose: ($event) => {
								modalOpen.value = false;
								resetForm();
							}
						}, {
							default: withCtx(() => [createVNode("form", {
								onSubmit: withModifiers(submit, ["prevent"]),
								class: "space-y-4"
							}, [
								createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Nama *"),
									withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).nama = $event,
										type: "text",
										required: "",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).nama]]),
									unref(form).errors.nama ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(form).errors.nama), 1)) : createCommentVNode("", true)
								]),
								createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Kode"), withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => unref(form).kode = $event,
									type: "text",
									class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).kode]])]),
								createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Deskripsi"), withDirectives(createVNode("textarea", {
									"onUpdate:modelValue": ($event) => unref(form).deskripsi = $event,
									rows: "3",
									class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).deskripsi]])]),
								createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Saldo Awal"), withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => unref(form).saldo_awal = $event,
									type: "number",
									min: "0",
									step: "0.01",
									class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
								}, null, 8, ["onUpdate:modelValue"]), [[
									vModelText,
									unref(form).saldo_awal,
									void 0,
									{ number: true }
								]])]),
								createVNode("div", { class: "flex items-center gap-2" }, [withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => unref(form).is_active = $event,
									type: "checkbox",
									id: "is_active",
									class: "rounded border-gray-300 text-primary focus:ring-primary"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelCheckbox, unref(form).is_active]]), createVNode("label", {
									for: "is_active",
									class: "text-sm text-gray-700"
								}, "Aktif")]),
								createVNode("div", { class: "flex justify-end gap-3 pt-4 border-t" }, [createVNode("button", {
									type: "button",
									onClick: ($event) => {
										modalOpen.value = false;
										resetForm();
									},
									class: "px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
								}, "Batal", 8, ["onClick"]), createVNode("button", {
									type: "submit",
									disabled: unref(form).processing,
									class: "px-4 py-2 bg-primary text-white rounded-lg disabled:opacity-50"
								}, toDisplayString(unref(form).processing ? "Menyimpan..." : "Simpan"), 9, ["disabled"])])
							], 32)]),
							_: 1
						}, 8, [
							"show",
							"title",
							"onClose"
						])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Cashbox/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
