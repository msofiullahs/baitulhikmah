import { t as _sfc_main$1 } from "./Modal-CLSC5svO.js";
import { t as AdminLayout_default } from "./AdminLayout-JKKJHCcy.js";
import { t as _sfc_main$2 } from "./Pagination-DiptkPBm.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelSelect, vModelText, withCtx, withDirectives, withKeys, withModifiers } from "vue";
import { Head, Link, router, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { MagnifyingGlassIcon, PencilIcon, PlusIcon, TrashIcon } from "@heroicons/vue/24/outline";
//#region resources/js/Pages/ZiswafCategory/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: {
		items: Object,
		filters: Object
	},
	setup(__props) {
		const props = __props;
		const search = ref(props.filters?.search || "");
		const kategoriFilter = ref(props.filters?.kategori || "");
		const modalOpen = ref(false);
		const editingItem = ref(null);
		const form = useForm({
			nama: "",
			kategori: "zakat",
			deskripsi: "",
			nisab: null,
			persentase: null
		});
		const openCreateModal = () => {
			form.reset();
			form.kategori = "zakat";
			editingItem.value = null;
			modalOpen.value = true;
		};
		const openEdit = (item) => {
			editingItem.value = item;
			form.nama = item.nama;
			form.kategori = item.kategori;
			form.deskripsi = item.deskripsi;
			form.nisab = item.nisab;
			form.persentase = item.persentase;
			modalOpen.value = true;
		};
		const submit = () => {
			if (editingItem.value) form.put(route("ziswaf-categories.update", editingItem.value.id), { onSuccess: () => {
				modalOpen.value = false;
				form.reset();
				editingItem.value = null;
			} });
			else form.post(route("ziswaf-categories.store"), { onSuccess: () => {
				modalOpen.value = false;
				form.reset();
			} });
		};
		const deleteItem = (item) => {
			if (confirm(`Hapus ${item.nama}?`)) router.delete(route("ziswaf-categories.destroy", item.id));
		};
		const doSearch = () => {
			router.get(route("ziswaf-categories.index"), {
				search: search.value,
				kategori: kategoriFilter.value
			}, { preserveState: true });
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(AdminLayout_default, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "Kategori ZISWAF" }, null, _parent, _scopeId));
						_push(`<div class="mb-6 flex justify-between items-center"${_scopeId}><div class="flex items-center gap-4"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Link), {
							href: _ctx.route("ziswaf.index"),
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
						_push(`<div${_scopeId}><h1 class="text-2xl font-bold text-gray-800"${_scopeId}>Kategori ZISWAF</h1><p class="text-gray-500 text-sm"${_scopeId}>Manajemen jenis zakat, infaq, sedekah, dan wakaf</p></div></div><button class="bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg flex items-center gap-2 transition shadow-md"${_scopeId}>`);
						_push(ssrRenderComponent(unref(PlusIcon), { class: "w-5 h-5" }, null, _parent, _scopeId));
						_push(` Tambah Kategori </button></div><div class="bg-white rounded-xl shadow-sm p-4 mb-6"${_scopeId}><div class="flex gap-3 flex-wrap"${_scopeId}><div class="flex-1 relative min-w-[200px]"${_scopeId}>`);
						_push(ssrRenderComponent(unref(MagnifyingGlassIcon), { class: "w-5 h-5 absolute left-3 top-2.5 text-gray-400" }, null, _parent, _scopeId));
						_push(`<input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari kategori..." class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}></div><select class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(kategoriFilter.value) ? ssrLooseContain(kategoriFilter.value, "") : ssrLooseEqual(kategoriFilter.value, "")) ? " selected" : ""}${_scopeId}>Semua Kategori</option><option value="zakat"${ssrIncludeBooleanAttr(Array.isArray(kategoriFilter.value) ? ssrLooseContain(kategoriFilter.value, "zakat") : ssrLooseEqual(kategoriFilter.value, "zakat")) ? " selected" : ""}${_scopeId}>Zakat</option><option value="infaq"${ssrIncludeBooleanAttr(Array.isArray(kategoriFilter.value) ? ssrLooseContain(kategoriFilter.value, "infaq") : ssrLooseEqual(kategoriFilter.value, "infaq")) ? " selected" : ""}${_scopeId}>Infaq</option><option value="sedekah"${ssrIncludeBooleanAttr(Array.isArray(kategoriFilter.value) ? ssrLooseContain(kategoriFilter.value, "sedekah") : ssrLooseEqual(kategoriFilter.value, "sedekah")) ? " selected" : ""}${_scopeId}>Sedekah</option><option value="wakaf"${ssrIncludeBooleanAttr(Array.isArray(kategoriFilter.value) ? ssrLooseContain(kategoriFilter.value, "wakaf") : ssrLooseEqual(kategoriFilter.value, "wakaf")) ? " selected" : ""}${_scopeId}>Wakaf</option></select><button class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-light"${_scopeId}>Cari</button></div></div><div class="bg-white rounded-xl shadow-sm overflow-hidden"${_scopeId}><table class="w-full text-sm"${_scopeId}><thead class="bg-gray-50 text-gray-600 text-xs uppercase"${_scopeId}><tr${_scopeId}><th class="px-6 py-3 text-left"${_scopeId}>Nama</th><th class="px-6 py-3 text-left"${_scopeId}>Kategori</th><th class="px-6 py-3 text-left"${_scopeId}>Nisab</th><th class="px-6 py-3 text-left"${_scopeId}>Persentase</th><th class="px-6 py-3 text-center"${_scopeId}>Aksi</th></tr></thead><tbody class="divide-y"${_scopeId}><!--[-->`);
						ssrRenderList(__props.items.data, (item) => {
							_push(`<tr class="hover:bg-gray-50"${_scopeId}><td class="px-6 py-4"${_scopeId}>${ssrInterpolate(item.nama)}</td><td class="px-6 py-4"${_scopeId}><span class="${ssrRenderClass([{
								"bg-green-100 text-green-800": item.kategori === "zakat",
								"bg-blue-100 text-blue-800": item.kategori === "infaq",
								"bg-yellow-100 text-yellow-800": item.kategori === "sedekah",
								"bg-purple-100 text-purple-800": item.kategori === "wakaf"
							}, "px-2 py-1 text-xs rounded-full"])}"${_scopeId}>${ssrInterpolate(item.kategori)}</span></td><td class="px-6 py-4"${_scopeId}>${ssrInterpolate(item.nisab ? "Rp " + Number(item.nisab).toLocaleString() : "-")}</td><td class="px-6 py-4"${_scopeId}>${ssrInterpolate(item.persentase ? item.persentase + "%" : "-")}</td><td class="px-6 py-4 text-center"${_scopeId}><button class="text-gray-400 hover:text-primary mx-1"${_scopeId}>`);
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
							title: editingItem.value ? "Edit Kategori ZISWAF" : "Tambah Kategori ZISWAF",
							onClose: ($event) => modalOpen.value = false
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<form class="space-y-4"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Nama Kategori</label><input${ssrRenderAttr("value", unref(form).nama)} type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Contoh: Zakat Maal, Zakat Fitrah, dll"${_scopeId}>`);
									if (unref(form).errors.nama) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.nama)}</span>`);
									else _push(`<!---->`);
									_push(`</div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Jenis Kategori</label><select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}><option value="zakat"${ssrIncludeBooleanAttr(Array.isArray(unref(form).kategori) ? ssrLooseContain(unref(form).kategori, "zakat") : ssrLooseEqual(unref(form).kategori, "zakat")) ? " selected" : ""}${_scopeId}>Zakat</option><option value="infaq"${ssrIncludeBooleanAttr(Array.isArray(unref(form).kategori) ? ssrLooseContain(unref(form).kategori, "infaq") : ssrLooseEqual(unref(form).kategori, "infaq")) ? " selected" : ""}${_scopeId}>Infaq</option><option value="sedekah"${ssrIncludeBooleanAttr(Array.isArray(unref(form).kategori) ? ssrLooseContain(unref(form).kategori, "sedekah") : ssrLooseEqual(unref(form).kategori, "sedekah")) ? " selected" : ""}${_scopeId}>Sedekah</option><option value="wakaf"${ssrIncludeBooleanAttr(Array.isArray(unref(form).kategori) ? ssrLooseContain(unref(form).kategori, "wakaf") : ssrLooseEqual(unref(form).kategori, "wakaf")) ? " selected" : ""}${_scopeId}>Wakaf</option></select>`);
									if (unref(form).errors.kategori) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.kategori)}</span>`);
									else _push(`<!---->`);
									_push(`</div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Deskripsi</label><textarea rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Deskripsi kategori..."${_scopeId}>${ssrInterpolate(unref(form).deskripsi)}</textarea>`);
									if (unref(form).errors.deskripsi) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.deskripsi)}</span>`);
									else _push(`<!---->`);
									_push(`</div><div class="grid grid-cols-2 gap-4"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Nisab (Opsional)</label><input${ssrRenderAttr("value", unref(form).nisab)} type="number" step="0.01" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="0"${_scopeId}>`);
									if (unref(form).errors.nisab) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.nisab)}</span>`);
									else _push(`<!---->`);
									_push(`</div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Persentase (%)</label><input${ssrRenderAttr("value", unref(form).persentase)} type="number" step="0.01" min="0" max="100" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="0"${_scopeId}>`);
									if (unref(form).errors.persentase) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.persentase)}</span>`);
									else _push(`<!---->`);
									_push(`</div></div><div class="flex justify-end gap-3 pt-4 border-t"${_scopeId}><button type="button" class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"${_scopeId}>Batal</button><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="px-4 py-2 bg-primary text-white rounded-lg disabled:opacity-50"${_scopeId}>${ssrInterpolate(unref(form).processing ? "Menyimpan..." : "Simpan")}</button></div></form>`);
								} else return [createVNode("form", {
									onSubmit: withModifiers(submit, ["prevent"]),
									class: "space-y-4"
								}, [
									createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Nama Kategori"),
										withDirectives(createVNode("input", {
											"onUpdate:modelValue": ($event) => unref(form).nama = $event,
											type: "text",
											class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
											placeholder: "Contoh: Zakat Maal, Zakat Fitrah, dll"
										}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).nama]]),
										unref(form).errors.nama ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(form).errors.nama), 1)) : createCommentVNode("", true)
									]),
									createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Jenis Kategori"),
										withDirectives(createVNode("select", {
											"onUpdate:modelValue": ($event) => unref(form).kategori = $event,
											class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
										}, [
											createVNode("option", { value: "zakat" }, "Zakat"),
											createVNode("option", { value: "infaq" }, "Infaq"),
											createVNode("option", { value: "sedekah" }, "Sedekah"),
											createVNode("option", { value: "wakaf" }, "Wakaf")
										], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).kategori]]),
										unref(form).errors.kategori ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(form).errors.kategori), 1)) : createCommentVNode("", true)
									]),
									createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Deskripsi"),
										withDirectives(createVNode("textarea", {
											"onUpdate:modelValue": ($event) => unref(form).deskripsi = $event,
											rows: "3",
											class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
											placeholder: "Deskripsi kategori..."
										}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).deskripsi]]),
										unref(form).errors.deskripsi ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(form).errors.deskripsi), 1)) : createCommentVNode("", true)
									]),
									createVNode("div", { class: "grid grid-cols-2 gap-4" }, [createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Nisab (Opsional)"),
										withDirectives(createVNode("input", {
											"onUpdate:modelValue": ($event) => unref(form).nisab = $event,
											type: "number",
											step: "0.01",
											class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
											placeholder: "0"
										}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).nisab]]),
										unref(form).errors.nisab ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(form).errors.nisab), 1)) : createCommentVNode("", true)
									]), createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Persentase (%)"),
										withDirectives(createVNode("input", {
											"onUpdate:modelValue": ($event) => unref(form).persentase = $event,
											type: "number",
											step: "0.01",
											min: "0",
											max: "100",
											class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
											placeholder: "0"
										}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).persentase]]),
										unref(form).errors.persentase ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(form).errors.persentase), 1)) : createCommentVNode("", true)
									])]),
									createVNode("div", { class: "flex justify-end gap-3 pt-4 border-t" }, [createVNode("button", {
										type: "button",
										onClick: ($event) => modalOpen.value = false,
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
						createVNode(unref(Head), { title: "Kategori ZISWAF" }),
						createVNode("div", { class: "mb-6 flex justify-between items-center" }, [createVNode("div", { class: "flex items-center gap-4" }, [createVNode(unref(Link), {
							href: _ctx.route("ziswaf.index"),
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
						}, 8, ["href"]), createVNode("div", null, [createVNode("h1", { class: "text-2xl font-bold text-gray-800" }, "Kategori ZISWAF"), createVNode("p", { class: "text-gray-500 text-sm" }, "Manajemen jenis zakat, infaq, sedekah, dan wakaf")])]), createVNode("button", {
							onClick: openCreateModal,
							class: "bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg flex items-center gap-2 transition shadow-md"
						}, [createVNode(unref(PlusIcon), { class: "w-5 h-5" }), createTextVNode(" Tambah Kategori ")])]),
						createVNode("div", { class: "bg-white rounded-xl shadow-sm p-4 mb-6" }, [createVNode("div", { class: "flex gap-3 flex-wrap" }, [
							createVNode("div", { class: "flex-1 relative min-w-[200px]" }, [createVNode(unref(MagnifyingGlassIcon), { class: "w-5 h-5 absolute left-3 top-2.5 text-gray-400" }), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => search.value = $event,
								onKeyup: withKeys(doSearch, ["enter"]),
								type: "text",
								placeholder: "Cari kategori...",
								class: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
							}, null, 40, ["onUpdate:modelValue"]), [[vModelText, search.value]])]),
							withDirectives(createVNode("select", {
								"onUpdate:modelValue": ($event) => kategoriFilter.value = $event,
								onChange: doSearch,
								class: "px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
							}, [
								createVNode("option", { value: "" }, "Semua Kategori"),
								createVNode("option", { value: "zakat" }, "Zakat"),
								createVNode("option", { value: "infaq" }, "Infaq"),
								createVNode("option", { value: "sedekah" }, "Sedekah"),
								createVNode("option", { value: "wakaf" }, "Wakaf")
							], 40, ["onUpdate:modelValue"]), [[vModelSelect, kategoriFilter.value]]),
							createVNode("button", {
								onClick: doSearch,
								class: "bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-light"
							}, "Cari")
						])]),
						createVNode("div", { class: "bg-white rounded-xl shadow-sm overflow-hidden" }, [createVNode("table", { class: "w-full text-sm" }, [createVNode("thead", { class: "bg-gray-50 text-gray-600 text-xs uppercase" }, [createVNode("tr", null, [
							createVNode("th", { class: "px-6 py-3 text-left" }, "Nama"),
							createVNode("th", { class: "px-6 py-3 text-left" }, "Kategori"),
							createVNode("th", { class: "px-6 py-3 text-left" }, "Nisab"),
							createVNode("th", { class: "px-6 py-3 text-left" }, "Persentase"),
							createVNode("th", { class: "px-6 py-3 text-center" }, "Aksi")
						])]), createVNode("tbody", { class: "divide-y" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.items.data, (item) => {
							return openBlock(), createBlock("tr", {
								key: item.id,
								class: "hover:bg-gray-50"
							}, [
								createVNode("td", { class: "px-6 py-4" }, toDisplayString(item.nama), 1),
								createVNode("td", { class: "px-6 py-4" }, [createVNode("span", { class: ["px-2 py-1 text-xs rounded-full", {
									"bg-green-100 text-green-800": item.kategori === "zakat",
									"bg-blue-100 text-blue-800": item.kategori === "infaq",
									"bg-yellow-100 text-yellow-800": item.kategori === "sedekah",
									"bg-purple-100 text-purple-800": item.kategori === "wakaf"
								}] }, toDisplayString(item.kategori), 3)]),
								createVNode("td", { class: "px-6 py-4" }, toDisplayString(item.nisab ? "Rp " + Number(item.nisab).toLocaleString() : "-"), 1),
								createVNode("td", { class: "px-6 py-4" }, toDisplayString(item.persentase ? item.persentase + "%" : "-"), 1),
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
							title: editingItem.value ? "Edit Kategori ZISWAF" : "Tambah Kategori ZISWAF",
							onClose: ($event) => modalOpen.value = false
						}, {
							default: withCtx(() => [createVNode("form", {
								onSubmit: withModifiers(submit, ["prevent"]),
								class: "space-y-4"
							}, [
								createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Nama Kategori"),
									withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).nama = $event,
										type: "text",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
										placeholder: "Contoh: Zakat Maal, Zakat Fitrah, dll"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).nama]]),
									unref(form).errors.nama ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(form).errors.nama), 1)) : createCommentVNode("", true)
								]),
								createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Jenis Kategori"),
									withDirectives(createVNode("select", {
										"onUpdate:modelValue": ($event) => unref(form).kategori = $event,
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, [
										createVNode("option", { value: "zakat" }, "Zakat"),
										createVNode("option", { value: "infaq" }, "Infaq"),
										createVNode("option", { value: "sedekah" }, "Sedekah"),
										createVNode("option", { value: "wakaf" }, "Wakaf")
									], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).kategori]]),
									unref(form).errors.kategori ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(form).errors.kategori), 1)) : createCommentVNode("", true)
								]),
								createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Deskripsi"),
									withDirectives(createVNode("textarea", {
										"onUpdate:modelValue": ($event) => unref(form).deskripsi = $event,
										rows: "3",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
										placeholder: "Deskripsi kategori..."
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).deskripsi]]),
									unref(form).errors.deskripsi ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(form).errors.deskripsi), 1)) : createCommentVNode("", true)
								]),
								createVNode("div", { class: "grid grid-cols-2 gap-4" }, [createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Nisab (Opsional)"),
									withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).nisab = $event,
										type: "number",
										step: "0.01",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
										placeholder: "0"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).nisab]]),
									unref(form).errors.nisab ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(form).errors.nisab), 1)) : createCommentVNode("", true)
								]), createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Persentase (%)"),
									withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).persentase = $event,
										type: "number",
										step: "0.01",
										min: "0",
										max: "100",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
										placeholder: "0"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).persentase]]),
									unref(form).errors.persentase ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(form).errors.persentase), 1)) : createCommentVNode("", true)
								])]),
								createVNode("div", { class: "flex justify-end gap-3 pt-4 border-t" }, [createVNode("button", {
									type: "button",
									onClick: ($event) => modalOpen.value = false,
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/ZiswafCategory/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
