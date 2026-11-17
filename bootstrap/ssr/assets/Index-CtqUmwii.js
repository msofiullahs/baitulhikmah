import { t as _sfc_main$1 } from "./Modal-CLSC5svO.js";
import { t as AdminLayout_default } from "./AdminLayout-JKKJHCcy.js";
import { t as _sfc_main$2 } from "./Pagination-DiptkPBm.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelSelect, vModelText, withCtx, withDirectives, withKeys, withModifiers } from "vue";
import { Head, Link, router, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { MagnifyingGlassIcon, PencilIcon, PlusIcon, TrashIcon } from "@heroicons/vue/24/outline";
//#region resources/js/Pages/TransactionCategory/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: {
		items: Object,
		filters: Object,
		cashboxes: Array
	},
	setup(__props) {
		const props = __props;
		const search = ref(props.filters?.search || "");
		const selectedTipe = ref(props.filters?.tipe || "");
		const modalOpen = ref(false);
		const editingItem = ref(null);
		const form = useForm({
			nama: "",
			tipe: "pemasukan",
			warna: "#3B82F6",
			ikon: "",
			cashbox_id: ""
		});
		const openEdit = (item) => {
			editingItem.value = item;
			form.nama = item.nama;
			form.tipe = item.tipe;
			form.warna = item.warna || "#3B82F6";
			form.ikon = item.ikon || "";
			form.cashbox_id = item.cashbox_id || "";
			modalOpen.value = true;
		};
		const submit = () => {
			if (editingItem.value) form.put(route("transaction-categories.update", editingItem.value.id), { onSuccess: () => {
				modalOpen.value = false;
				form.reset();
				editingItem.value = null;
			} });
			else form.post(route("transaction-categories.store"), { onSuccess: () => {
				modalOpen.value = false;
				form.reset();
			} });
		};
		const deleteItem = (item) => {
			if (confirm(`Hapus ${item.nama}?`)) router.delete(route("transaction-categories.destroy", item.id));
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(AdminLayout_default, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "Kategori Transaksi" }, null, _parent, _scopeId));
						_push(`<div class="mb-6 flex justify-between items-center"${_scopeId}><div class="flex items-center gap-4"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Link), {
							href: _ctx.route("transactions.index"),
							class: "text-gray-500 hover:text-primary transition flex items-center gap-1"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"${_scopeId}></path></svg> Kembali `);
								else return [(openBlock(), createBlock("svg", {
									xmlns: "http://www.w3.org/2000/svg",
									class: "w-5 h-5",
									fill: "none",
									viewBox: "0 0 24 24",
									stroke: "currentColor"
								}, [createVNode("path", {
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									"stroke-width": "2",
									d: "M10 19l-7-7m0 0l7-7m-7 7h18"
								})])), createTextVNode(" Kembali ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`<div${_scopeId}><h1 class="text-2xl font-bold text-gray-800"${_scopeId}>Kategori Transaksi</h1><p class="text-gray-500 text-sm"${_scopeId}>Kategorisasi pemasukan dan pengeluaran</p></div></div><button class="bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg flex items-center gap-2 transition shadow-md"${_scopeId}>`);
						_push(ssrRenderComponent(unref(PlusIcon), { class: "w-5 h-5" }, null, _parent, _scopeId));
						_push(` Tambah</button></div><div class="bg-white rounded-xl shadow-sm p-4 mb-6"${_scopeId}><div class="flex gap-3"${_scopeId}><div class="flex-1 relative"${_scopeId}>`);
						_push(ssrRenderComponent(unref(MagnifyingGlassIcon), { class: "w-5 h-5 absolute left-3 top-2.5 text-gray-400" }, null, _parent, _scopeId));
						_push(`<input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari..." class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}></div><select class="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(selectedTipe.value) ? ssrLooseContain(selectedTipe.value, "") : ssrLooseEqual(selectedTipe.value, "")) ? " selected" : ""}${_scopeId}>Semua Tipe</option><option value="pemasukan"${ssrIncludeBooleanAttr(Array.isArray(selectedTipe.value) ? ssrLooseContain(selectedTipe.value, "pemasukan") : ssrLooseEqual(selectedTipe.value, "pemasukan")) ? " selected" : ""}${_scopeId}>Pemasukan</option><option value="pengeluaran"${ssrIncludeBooleanAttr(Array.isArray(selectedTipe.value) ? ssrLooseContain(selectedTipe.value, "pengeluaran") : ssrLooseEqual(selectedTipe.value, "pengeluaran")) ? " selected" : ""}${_scopeId}>Pengeluaran</option></select></div></div><div class="bg-white rounded-xl shadow-sm overflow-hidden"${_scopeId}><table class="w-full text-sm"${_scopeId}><thead class="bg-gray-50 text-gray-600 text-xs uppercase"${_scopeId}><tr${_scopeId}><th class="px-6 py-3 text-left"${_scopeId}>Nama</th><th class="px-6 py-3 text-left"${_scopeId}>Tipe</th><th class="px-6 py-3 text-left"${_scopeId}>Kas Box</th><th class="px-6 py-3 text-center"${_scopeId}>Aksi</th></tr></thead><tbody class="divide-y"${_scopeId}><!--[-->`);
						ssrRenderList(__props.items.data, (item) => {
							_push(`<tr class="hover:bg-gray-50"${_scopeId}><td class="px-6 py-4"${_scopeId}><span class="inline-block w-3 h-3 rounded-full mr-2" style="${ssrRenderStyle({ backgroundColor: item.warna })}"${_scopeId}></span>${ssrInterpolate(item.nama)}</td><td class="px-6 py-4"${_scopeId}><span class="${ssrRenderClass([item.tipe === "pemasukan" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800", "px-2 py-1 rounded-full text-xs font-medium"])}"${_scopeId}>${ssrInterpolate(item.tipe)}</span></td><td class="px-6 py-4"${_scopeId}>${ssrInterpolate(item.cashbox?.nama || "-")}</td><td class="px-6 py-4 text-center"${_scopeId}><button class="text-gray-400 hover:text-primary mx-1"${_scopeId}>`);
							_push(ssrRenderComponent(unref(PencilIcon), { class: "w-5 h-5 inline" }, null, _parent, _scopeId));
							_push(`</button><button class="text-gray-400 hover:text-red-600 mx-1"${_scopeId}>`);
							_push(ssrRenderComponent(unref(TrashIcon), { class: "w-5 h-5 inline" }, null, _parent, _scopeId));
							_push(`</button></td></tr>`);
						});
						_push(`<!--]-->`);
						if (!__props.items.data.length) _push(`<tr${_scopeId}><td colspan="4" class="px-6 py-12 text-center text-gray-500"${_scopeId}>Tidak ada data</td></tr>`);
						else _push(`<!---->`);
						_push(`</tbody></table><div class="px-6 py-4 border-t"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$2, { links: __props.items.links }, null, _parent, _scopeId));
						_push(`</div></div>`);
						_push(ssrRenderComponent(_sfc_main$1, {
							show: modalOpen.value,
							title: editingItem.value ? "Edit Kategori" : "Tambah Kategori",
							onClose: ($event) => {
								modalOpen.value = false;
								unref(form).reset();
								editingItem.value.value = null;
							}
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<form class="space-y-4"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Nama *</label><input${ssrRenderAttr("value", unref(form).nama)} type="text" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Tipe *</label><select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}><option value="pemasukan"${ssrIncludeBooleanAttr(Array.isArray(unref(form).tipe) ? ssrLooseContain(unref(form).tipe, "pemasukan") : ssrLooseEqual(unref(form).tipe, "pemasukan")) ? " selected" : ""}${_scopeId}>Pemasukan</option><option value="pengeluaran"${ssrIncludeBooleanAttr(Array.isArray(unref(form).tipe) ? ssrLooseContain(unref(form).tipe, "pengeluaran") : ssrLooseEqual(unref(form).tipe, "pengeluaran")) ? " selected" : ""}${_scopeId}>Pengeluaran</option></select></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Warna</label><input${ssrRenderAttr("value", unref(form).warna)} type="color" class="w-full h-10 px-3 py-2 border border-gray-300 rounded-lg"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Kas Box</label><select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(form).cashbox_id) ? ssrLooseContain(unref(form).cashbox_id, "") : ssrLooseEqual(unref(form).cashbox_id, "")) ? " selected" : ""}${_scopeId}>Umum</option><!--[-->`);
									ssrRenderList(__props.cashboxes, (kb) => {
										_push(`<option${ssrRenderAttr("value", kb.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).cashbox_id) ? ssrLooseContain(unref(form).cashbox_id, kb.id) : ssrLooseEqual(unref(form).cashbox_id, kb.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(kb.nama)}</option>`);
									});
									_push(`<!--]--></select></div><div class="flex justify-end gap-3 pt-4 border-t"${_scopeId}><button type="button" class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"${_scopeId}>Batal</button><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="px-4 py-2 bg-primary text-white rounded-lg disabled:opacity-50"${_scopeId}>${ssrInterpolate(unref(form).processing ? "Menyimpan..." : "Simpan")}</button></div></form>`);
								} else return [createVNode("form", {
									onSubmit: withModifiers(submit, ["prevent"]),
									class: "space-y-4"
								}, [
									createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Nama *"), withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).nama = $event,
										type: "text",
										required: "",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).nama]])]),
									createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Tipe *"), withDirectives(createVNode("select", {
										"onUpdate:modelValue": ($event) => unref(form).tipe = $event,
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, [createVNode("option", { value: "pemasukan" }, "Pemasukan"), createVNode("option", { value: "pengeluaran" }, "Pengeluaran")], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).tipe]])]),
									createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Warna"), withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).warna = $event,
										type: "color",
										class: "w-full h-10 px-3 py-2 border border-gray-300 rounded-lg"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).warna]])]),
									createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Kas Box"), withDirectives(createVNode("select", {
										"onUpdate:modelValue": ($event) => unref(form).cashbox_id = $event,
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, [createVNode("option", { value: "" }, "Umum"), (openBlock(true), createBlock(Fragment, null, renderList(__props.cashboxes, (kb) => {
										return openBlock(), createBlock("option", {
											key: kb.id,
											value: kb.id
										}, toDisplayString(kb.nama), 9, ["value"]);
									}), 128))], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).cashbox_id]])]),
									createVNode("div", { class: "flex justify-end gap-3 pt-4 border-t" }, [createVNode("button", {
										type: "button",
										onClick: ($event) => {
											modalOpen.value = false;
											unref(form).reset();
											editingItem.value.value = null;
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
						createVNode(unref(Head), { title: "Kategori Transaksi" }),
						createVNode("div", { class: "mb-6 flex justify-between items-center" }, [createVNode("div", { class: "flex items-center gap-4" }, [createVNode(unref(Link), {
							href: _ctx.route("transactions.index"),
							class: "text-gray-500 hover:text-primary transition flex items-center gap-1"
						}, {
							default: withCtx(() => [(openBlock(), createBlock("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								class: "w-5 h-5",
								fill: "none",
								viewBox: "0 0 24 24",
								stroke: "currentColor"
							}, [createVNode("path", {
								"stroke-linecap": "round",
								"stroke-linejoin": "round",
								"stroke-width": "2",
								d: "M10 19l-7-7m0 0l7-7m-7 7h18"
							})])), createTextVNode(" Kembali ")]),
							_: 1
						}, 8, ["href"]), createVNode("div", null, [createVNode("h1", { class: "text-2xl font-bold text-gray-800" }, "Kategori Transaksi"), createVNode("p", { class: "text-gray-500 text-sm" }, "Kategorisasi pemasukan dan pengeluaran")])]), createVNode("button", {
							onClick: ($event) => modalOpen.value = true,
							class: "bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg flex items-center gap-2 transition shadow-md"
						}, [createVNode(unref(PlusIcon), { class: "w-5 h-5" }), createTextVNode(" Tambah")], 8, ["onClick"])]),
						createVNode("div", { class: "bg-white rounded-xl shadow-sm p-4 mb-6" }, [createVNode("div", { class: "flex gap-3" }, [createVNode("div", { class: "flex-1 relative" }, [createVNode(unref(MagnifyingGlassIcon), { class: "w-5 h-5 absolute left-3 top-2.5 text-gray-400" }), withDirectives(createVNode("input", {
							"onUpdate:modelValue": ($event) => search.value = $event,
							onKeyup: withKeys(($event) => unref(router).get(_ctx.route("transaction-categories.index"), {
								search: search.value,
								tipe: selectedTipe.value
							}, { preserveState: true }), ["enter"]),
							type: "text",
							placeholder: "Cari...",
							class: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
						}, null, 40, ["onUpdate:modelValue", "onKeyup"]), [[vModelText, search.value]])]), withDirectives(createVNode("select", {
							"onUpdate:modelValue": ($event) => selectedTipe.value = $event,
							onChange: ($event) => unref(router).get(_ctx.route("transaction-categories.index"), {
								search: search.value,
								tipe: selectedTipe.value
							}, { preserveState: true }),
							class: "px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
						}, [
							createVNode("option", { value: "" }, "Semua Tipe"),
							createVNode("option", { value: "pemasukan" }, "Pemasukan"),
							createVNode("option", { value: "pengeluaran" }, "Pengeluaran")
						], 40, ["onUpdate:modelValue", "onChange"]), [[vModelSelect, selectedTipe.value]])])]),
						createVNode("div", { class: "bg-white rounded-xl shadow-sm overflow-hidden" }, [createVNode("table", { class: "w-full text-sm" }, [createVNode("thead", { class: "bg-gray-50 text-gray-600 text-xs uppercase" }, [createVNode("tr", null, [
							createVNode("th", { class: "px-6 py-3 text-left" }, "Nama"),
							createVNode("th", { class: "px-6 py-3 text-left" }, "Tipe"),
							createVNode("th", { class: "px-6 py-3 text-left" }, "Kas Box"),
							createVNode("th", { class: "px-6 py-3 text-center" }, "Aksi")
						])]), createVNode("tbody", { class: "divide-y" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.items.data, (item) => {
							return openBlock(), createBlock("tr", {
								key: item.id,
								class: "hover:bg-gray-50"
							}, [
								createVNode("td", { class: "px-6 py-4" }, [createVNode("span", {
									class: "inline-block w-3 h-3 rounded-full mr-2",
									style: { backgroundColor: item.warna }
								}, null, 4), createTextVNode(toDisplayString(item.nama), 1)]),
								createVNode("td", { class: "px-6 py-4" }, [createVNode("span", { class: [item.tipe === "pemasukan" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800", "px-2 py-1 rounded-full text-xs font-medium"] }, toDisplayString(item.tipe), 3)]),
								createVNode("td", { class: "px-6 py-4" }, toDisplayString(item.cashbox?.nama || "-"), 1),
								createVNode("td", { class: "px-6 py-4 text-center" }, [createVNode("button", {
									onClick: ($event) => openEdit(item),
									class: "text-gray-400 hover:text-primary mx-1"
								}, [createVNode(unref(PencilIcon), { class: "w-5 h-5 inline" })], 8, ["onClick"]), createVNode("button", {
									onClick: ($event) => deleteItem(item),
									class: "text-gray-400 hover:text-red-600 mx-1"
								}, [createVNode(unref(TrashIcon), { class: "w-5 h-5 inline" })], 8, ["onClick"])])
							]);
						}), 128)), !__props.items.data.length ? (openBlock(), createBlock("tr", { key: 0 }, [createVNode("td", {
							colspan: "4",
							class: "px-6 py-12 text-center text-gray-500"
						}, "Tidak ada data")])) : createCommentVNode("", true)])]), createVNode("div", { class: "px-6 py-4 border-t" }, [createVNode(_sfc_main$2, { links: __props.items.links }, null, 8, ["links"])])]),
						createVNode(_sfc_main$1, {
							show: modalOpen.value,
							title: editingItem.value ? "Edit Kategori" : "Tambah Kategori",
							onClose: ($event) => {
								modalOpen.value = false;
								unref(form).reset();
								editingItem.value.value = null;
							}
						}, {
							default: withCtx(() => [createVNode("form", {
								onSubmit: withModifiers(submit, ["prevent"]),
								class: "space-y-4"
							}, [
								createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Nama *"), withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => unref(form).nama = $event,
									type: "text",
									required: "",
									class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).nama]])]),
								createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Tipe *"), withDirectives(createVNode("select", {
									"onUpdate:modelValue": ($event) => unref(form).tipe = $event,
									class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
								}, [createVNode("option", { value: "pemasukan" }, "Pemasukan"), createVNode("option", { value: "pengeluaran" }, "Pengeluaran")], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).tipe]])]),
								createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Warna"), withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => unref(form).warna = $event,
									type: "color",
									class: "w-full h-10 px-3 py-2 border border-gray-300 rounded-lg"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).warna]])]),
								createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Kas Box"), withDirectives(createVNode("select", {
									"onUpdate:modelValue": ($event) => unref(form).cashbox_id = $event,
									class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
								}, [createVNode("option", { value: "" }, "Umum"), (openBlock(true), createBlock(Fragment, null, renderList(__props.cashboxes, (kb) => {
									return openBlock(), createBlock("option", {
										key: kb.id,
										value: kb.id
									}, toDisplayString(kb.nama), 9, ["value"]);
								}), 128))], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).cashbox_id]])]),
								createVNode("div", { class: "flex justify-end gap-3 pt-4 border-t" }, [createVNode("button", {
									type: "button",
									onClick: ($event) => {
										modalOpen.value = false;
										unref(form).reset();
										editingItem.value.value = null;
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/TransactionCategory/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
