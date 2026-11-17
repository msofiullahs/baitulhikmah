import { t as _sfc_main$1 } from "./Modal-CLSC5svO.js";
import { t as AdminLayout_default } from "./AdminLayout-JKKJHCcy.js";
import { t as _sfc_main$2 } from "./Pagination-DiptkPBm.js";
import { Fragment, computed, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelRadio, vModelSelect, vModelText, withCtx, withDirectives, withKeys, withModifiers } from "vue";
import { Head, Link, router, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { CogIcon, MagnifyingGlassIcon, PencilIcon, PlusIcon, TrashIcon } from "@heroicons/vue/24/outline";
//#region resources/js/Pages/Transactions/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: {
		transactions: Object,
		cashboxes: Array,
		categories: Array,
		stats: Object,
		filters: Object
	},
	setup(__props) {
		const props = __props;
		const formatRupiah = (num) => "Rp " + Number(num).toLocaleString("id-ID");
		const search = ref(props.filters.search || "");
		const modalOpen = ref(false);
		const editMode = ref(false);
		const editingItem = ref(null);
		const form = useForm({
			cashbox_id: "",
			category_id: "",
			jenis: "pemasukan",
			jumlah: "",
			tanggal: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
			keterangan: "",
			bukti: null,
			metode: "tunai",
			jamaah_id: null
		});
		const openCreate = () => {
			editMode.value = false;
			editingItem.value = null;
			form.reset();
			form.jenis = "pemasukan";
			form.tanggal = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
			modalOpen.value = true;
		};
		const openEdit = (trx) => {
			editMode.value = true;
			editingItem.value = trx;
			form.cashbox_id = trx.cashbox.id;
			form.category_id = trx.category.id;
			form.jenis = trx.jenis;
			form.jumlah = trx.jumlah;
			form.tanggal = trx.tanggal;
			form.keterangan = trx.keterangan;
			form.metode = trx.metode;
			modalOpen.value = true;
		};
		const submit = () => {
			if (editMode.value) form.put(route("transactions.update", editingItem.value.id), { onSuccess: () => {
				modalOpen.value = false;
				form.reset();
			} });
			else form.post(route("transactions.store"), { onSuccess: () => {
				modalOpen.value = false;
				form.reset();
			} });
		};
		const deleteItem = (trx) => {
			if (confirm(`Hapus transaksi ${trx.no_transaksi}?`)) router.delete(route("transactions.destroy", trx.id));
		};
		const applyFilter = () => {
			router.get(route("transactions.index"), { search: search.value }, {
				preserveState: true,
				preserveScroll: true
			});
		};
		const filteredCategories = computed(() => {
			return props.categories.filter((c) => c.tipe === form.jenis);
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(AdminLayout_default, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "Arus Kas" }, null, _parent, _scopeId));
						_push(`<div class="mb-6 flex justify-between items-center"${_scopeId}><div${_scopeId}><h1 class="text-2xl font-bold text-gray-800"${_scopeId}>Manajemen Arus Kas</h1><p class="text-gray-500 text-sm"${_scopeId}>Pencatatan pemasukan dan pengeluaran</p></div><div class="flex gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Link), {
							href: _ctx.route("transaction-categories.index"),
							class: "bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 transition shadow-md"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(unref(CogIcon), { class: "w-5 h-5" }, null, _parent, _scopeId));
									_push(` Kelola Kategori `);
								} else return [createVNode(unref(CogIcon), { class: "w-5 h-5" }), createTextVNode(" Kelola Kategori ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`<button class="bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg flex items-center gap-2 transition shadow-md"${_scopeId}>`);
						_push(ssrRenderComponent(unref(PlusIcon), { class: "w-5 h-5" }, null, _parent, _scopeId));
						_push(` Tambah Transaksi </button></div></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"${_scopeId}><div class="bg-white p-6 rounded-xl shadow-sm border-l-4 border-primary"${_scopeId}><p class="text-sm text-gray-500 font-medium"${_scopeId}>Total Saldo Kas</p><p class="text-2xl font-bold text-gray-800 mt-1"${_scopeId}>${ssrInterpolate(formatRupiah(__props.stats.total_saldo))}</p></div><div class="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500"${_scopeId}><p class="text-sm text-gray-500 font-medium"${_scopeId}>Pemasukan Bulan Ini</p><p class="text-2xl font-bold text-green-600 mt-1"${_scopeId}>+ ${ssrInterpolate(formatRupiah(__props.stats.pemasukan_bulan_ini))}</p></div><div class="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500"${_scopeId}><p class="text-sm text-gray-500 font-medium"${_scopeId}>Pengeluaran Bulan Ini</p><p class="text-2xl font-bold text-red-600 mt-1"${_scopeId}>- ${ssrInterpolate(formatRupiah(__props.stats.pengeluaran_bulan_ini))}</p></div></div><div class="bg-white rounded-xl shadow-sm p-4 mb-6"${_scopeId}><div class="flex flex-col md:flex-row gap-3"${_scopeId}><div class="flex-1 relative"${_scopeId}>`);
						_push(ssrRenderComponent(unref(MagnifyingGlassIcon), { class: "w-5 h-5 absolute left-3 top-2.5 text-gray-400" }, null, _parent, _scopeId));
						_push(`<input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari transaksi..." class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"${_scopeId}></div><button class="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-light transition"${_scopeId}>Cari</button><button class="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition"${_scopeId}>Reset</button></div></div><div class="bg-white rounded-xl shadow-sm overflow-hidden"${_scopeId}><div class="overflow-x-auto"${_scopeId}><table class="w-full text-left border-collapse"${_scopeId}><thead class="bg-gray-50 text-gray-600 text-sm uppercase tracking-wider"${_scopeId}><tr${_scopeId}><th class="px-6 py-4 font-semibold"${_scopeId}>No. Transaksi</th><th class="px-6 py-4 font-semibold"${_scopeId}>Tanggal</th><th class="px-6 py-4 font-semibold"${_scopeId}>Kategori</th><th class="px-6 py-4 font-semibold"${_scopeId}>Kas Box</th><th class="px-6 py-4 font-semibold"${_scopeId}>Keterangan</th><th class="px-6 py-4 font-semibold text-right"${_scopeId}>Jumlah</th><th class="px-6 py-4 font-semibold text-center"${_scopeId}>Status</th><th class="px-6 py-4 font-semibold text-center"${_scopeId}>Aksi</th></tr></thead><tbody class="divide-y divide-gray-100 text-sm"${_scopeId}><!--[-->`);
						ssrRenderList(__props.transactions.data, (trx) => {
							_push(`<tr class="hover:bg-gray-50 transition"${_scopeId}><td class="px-6 py-4 font-mono text-gray-600 text-xs"${_scopeId}>${ssrInterpolate(trx.no_transaksi)}</td><td class="px-6 py-4"${_scopeId}>${ssrInterpolate(trx.tanggal)}</td><td class="px-6 py-4"${_scopeId}><span class="${ssrRenderClass([trx.category?.tipe === "pemasukan" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700", "px-2 py-1 rounded-full text-xs font-semibold"])}"${_scopeId}>${ssrInterpolate(trx.category?.nama)}</span></td><td class="px-6 py-4 text-gray-700"${_scopeId}>${ssrInterpolate(trx.cashbox?.nama)}</td><td class="px-6 py-4 text-gray-700 max-w-xs truncate"${_scopeId}>${ssrInterpolate(trx.keterangan)}</td><td class="${ssrRenderClass([trx.jenis === "pemasukan" ? "text-green-600" : "text-red-600", "px-6 py-4 text-right font-semibold"])}"${_scopeId}>${ssrInterpolate(trx.jenis === "pemasukan" ? "+" : "-")} ${ssrInterpolate(formatRupiah(trx.jumlah))}</td><td class="px-6 py-4 text-center"${_scopeId}><span class="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs capitalize"${_scopeId}>${ssrInterpolate(trx.status)}</span></td><td class="px-6 py-4 text-center"${_scopeId}><div class="flex justify-center gap-2"${_scopeId}><button class="text-gray-400 hover:text-primary" title="Edit"${_scopeId}>`);
							_push(ssrRenderComponent(unref(PencilIcon), { class: "w-5 h-5" }, null, _parent, _scopeId));
							_push(`</button><button class="text-gray-400 hover:text-red-600" title="Hapus"${_scopeId}>`);
							_push(ssrRenderComponent(unref(TrashIcon), { class: "w-5 h-5" }, null, _parent, _scopeId));
							_push(`</button></div></td></tr>`);
						});
						_push(`<!--]-->`);
						if (__props.transactions.data.length === 0) _push(`<tr${_scopeId}><td colspan="8" class="px-6 py-12 text-center text-gray-500"${_scopeId}>Tidak ada data transaksi</td></tr>`);
						else _push(`<!---->`);
						_push(`</tbody></table></div><div class="px-6 py-4 border-t"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$2, { links: __props.transactions.links }, null, _parent, _scopeId));
						_push(`</div></div>`);
						_push(ssrRenderComponent(_sfc_main$1, {
							show: modalOpen.value,
							title: editMode.value ? "Edit Transaksi" : "Tambah Transaksi Baru",
							onClose: ($event) => modalOpen.value = false
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<form class="space-y-4"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Jenis Transaksi</label><div class="flex gap-4"${_scopeId}><label class="flex items-center gap-2 cursor-pointer"${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).jenis, "pemasukan")) ? " checked" : ""} type="radio" value="pemasukan" class="text-primary focus:ring-primary"${_scopeId}><span class="text-sm"${_scopeId}>Pemasukan</span></label><label class="flex items-center gap-2 cursor-pointer"${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).jenis, "pengeluaran")) ? " checked" : ""} type="radio" value="pengeluaran" class="text-primary focus:ring-primary"${_scopeId}><span class="text-sm"${_scopeId}>Pengeluaran</span></label></div>`);
									if (unref(form).errors.jenis) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.jenis)}</span>`);
									else _push(`<!---->`);
									_push(`</div><div class="grid grid-cols-2 gap-4"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Kas Box</label><select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(form).cashbox_id) ? ssrLooseContain(unref(form).cashbox_id, "") : ssrLooseEqual(unref(form).cashbox_id, "")) ? " selected" : ""}${_scopeId}>-- Pilih --</option><!--[-->`);
									ssrRenderList(__props.cashboxes, (box) => {
										_push(`<option${ssrRenderAttr("value", box.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).cashbox_id) ? ssrLooseContain(unref(form).cashbox_id, box.id) : ssrLooseEqual(unref(form).cashbox_id, box.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(box.nama)}</option>`);
									});
									_push(`<!--]--></select>`);
									if (unref(form).errors.cashbox_id) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.cashbox_id)}</span>`);
									else _push(`<!---->`);
									_push(`</div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Kategori</label><select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(form).category_id) ? ssrLooseContain(unref(form).category_id, "") : ssrLooseEqual(unref(form).category_id, "")) ? " selected" : ""}${_scopeId}>-- Pilih --</option><!--[-->`);
									ssrRenderList(filteredCategories.value, (cat) => {
										_push(`<option${ssrRenderAttr("value", cat.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).category_id) ? ssrLooseContain(unref(form).category_id, cat.id) : ssrLooseEqual(unref(form).category_id, cat.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(cat.nama)}</option>`);
									});
									_push(`<!--]--></select>`);
									if (unref(form).errors.category_id) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.category_id)}</span>`);
									else _push(`<!---->`);
									_push(`</div></div><div class="grid grid-cols-2 gap-4"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Tanggal</label><input${ssrRenderAttr("value", unref(form).tanggal)} type="date" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}>`);
									if (unref(form).errors.tanggal) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.tanggal)}</span>`);
									else _push(`<!---->`);
									_push(`</div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Jumlah (Rp)</label><input${ssrRenderAttr("value", unref(form).jumlah)} type="number" placeholder="0" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}>`);
									if (unref(form).errors.jumlah) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.jumlah)}</span>`);
									else _push(`<!---->`);
									_push(`</div></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Metode</label><select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}><option value="tunai"${ssrIncludeBooleanAttr(Array.isArray(unref(form).metode) ? ssrLooseContain(unref(form).metode, "tunai") : ssrLooseEqual(unref(form).metode, "tunai")) ? " selected" : ""}${_scopeId}>Tunai</option><option value="transfer"${ssrIncludeBooleanAttr(Array.isArray(unref(form).metode) ? ssrLooseContain(unref(form).metode, "transfer") : ssrLooseEqual(unref(form).metode, "transfer")) ? " selected" : ""}${_scopeId}>Transfer</option><option value="qris"${ssrIncludeBooleanAttr(Array.isArray(unref(form).metode) ? ssrLooseContain(unref(form).metode, "qris") : ssrLooseEqual(unref(form).metode, "qris")) ? " selected" : ""}${_scopeId}>QRIS</option><option value="lainnya"${ssrIncludeBooleanAttr(Array.isArray(unref(form).metode) ? ssrLooseContain(unref(form).metode, "lainnya") : ssrLooseEqual(unref(form).metode, "lainnya")) ? " selected" : ""}${_scopeId}>Lainnya</option></select></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Keterangan</label><textarea rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Detail transaksi..."${_scopeId}>${ssrInterpolate(unref(form).keterangan)}</textarea>`);
									if (unref(form).errors.keterangan) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.keterangan)}</span>`);
									else _push(`<!---->`);
									_push(`</div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Bukti (opsional)</label><input type="file" class="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary-light"${_scopeId}>`);
									if (unref(form).errors.bukti) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.bukti)}</span>`);
									else _push(`<!---->`);
									_push(`</div><div class="flex justify-end gap-3 pt-4 border-t"${_scopeId}><button type="button" class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"${_scopeId}>Batal</button><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="px-4 py-2 bg-primary hover:bg-primary-light text-white rounded-lg transition shadow-md disabled:opacity-50"${_scopeId}>${ssrInterpolate(unref(form).processing ? "Menyimpan..." : "Simpan")}</button></div></form>`);
								} else return [createVNode("form", {
									onSubmit: withModifiers(submit, ["prevent"]),
									class: "space-y-4"
								}, [
									createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Jenis Transaksi"),
										createVNode("div", { class: "flex gap-4" }, [createVNode("label", { class: "flex items-center gap-2 cursor-pointer" }, [withDirectives(createVNode("input", {
											"onUpdate:modelValue": ($event) => unref(form).jenis = $event,
											type: "radio",
											value: "pemasukan",
											class: "text-primary focus:ring-primary"
										}, null, 8, ["onUpdate:modelValue"]), [[vModelRadio, unref(form).jenis]]), createVNode("span", { class: "text-sm" }, "Pemasukan")]), createVNode("label", { class: "flex items-center gap-2 cursor-pointer" }, [withDirectives(createVNode("input", {
											"onUpdate:modelValue": ($event) => unref(form).jenis = $event,
											type: "radio",
											value: "pengeluaran",
											class: "text-primary focus:ring-primary"
										}, null, 8, ["onUpdate:modelValue"]), [[vModelRadio, unref(form).jenis]]), createVNode("span", { class: "text-sm" }, "Pengeluaran")])]),
										unref(form).errors.jenis ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(form).errors.jenis), 1)) : createCommentVNode("", true)
									]),
									createVNode("div", { class: "grid grid-cols-2 gap-4" }, [createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Kas Box"),
										withDirectives(createVNode("select", {
											"onUpdate:modelValue": ($event) => unref(form).cashbox_id = $event,
											class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
										}, [createVNode("option", { value: "" }, "-- Pilih --"), (openBlock(true), createBlock(Fragment, null, renderList(__props.cashboxes, (box) => {
											return openBlock(), createBlock("option", {
												key: box.id,
												value: box.id
											}, toDisplayString(box.nama), 9, ["value"]);
										}), 128))], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).cashbox_id]]),
										unref(form).errors.cashbox_id ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(form).errors.cashbox_id), 1)) : createCommentVNode("", true)
									]), createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Kategori"),
										withDirectives(createVNode("select", {
											"onUpdate:modelValue": ($event) => unref(form).category_id = $event,
											class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
										}, [createVNode("option", { value: "" }, "-- Pilih --"), (openBlock(true), createBlock(Fragment, null, renderList(filteredCategories.value, (cat) => {
											return openBlock(), createBlock("option", {
												key: cat.id,
												value: cat.id
											}, toDisplayString(cat.nama), 9, ["value"]);
										}), 128))], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).category_id]]),
										unref(form).errors.category_id ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(form).errors.category_id), 1)) : createCommentVNode("", true)
									])]),
									createVNode("div", { class: "grid grid-cols-2 gap-4" }, [createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Tanggal"),
										withDirectives(createVNode("input", {
											"onUpdate:modelValue": ($event) => unref(form).tanggal = $event,
											type: "date",
											class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
										}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).tanggal]]),
										unref(form).errors.tanggal ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(form).errors.tanggal), 1)) : createCommentVNode("", true)
									]), createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Jumlah (Rp)"),
										withDirectives(createVNode("input", {
											"onUpdate:modelValue": ($event) => unref(form).jumlah = $event,
											type: "number",
											placeholder: "0",
											class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
										}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).jumlah]]),
										unref(form).errors.jumlah ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(form).errors.jumlah), 1)) : createCommentVNode("", true)
									])]),
									createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Metode"), withDirectives(createVNode("select", {
										"onUpdate:modelValue": ($event) => unref(form).metode = $event,
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, [
										createVNode("option", { value: "tunai" }, "Tunai"),
										createVNode("option", { value: "transfer" }, "Transfer"),
										createVNode("option", { value: "qris" }, "QRIS"),
										createVNode("option", { value: "lainnya" }, "Lainnya")
									], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).metode]])]),
									createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Keterangan"),
										withDirectives(createVNode("textarea", {
											"onUpdate:modelValue": ($event) => unref(form).keterangan = $event,
											rows: "3",
											class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
											placeholder: "Detail transaksi..."
										}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).keterangan]]),
										unref(form).errors.keterangan ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(form).errors.keterangan), 1)) : createCommentVNode("", true)
									]),
									createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Bukti (opsional)"),
										createVNode("input", {
											type: "file",
											onInput: ($event) => unref(form).bukti = $event.target.files[0],
											class: "w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary-light"
										}, null, 40, ["onInput"]),
										unref(form).errors.bukti ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(form).errors.bukti), 1)) : createCommentVNode("", true)
									]),
									createVNode("div", { class: "flex justify-end gap-3 pt-4 border-t" }, [createVNode("button", {
										type: "button",
										onClick: ($event) => modalOpen.value = false,
										class: "px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
									}, "Batal", 8, ["onClick"]), createVNode("button", {
										type: "submit",
										disabled: unref(form).processing,
										class: "px-4 py-2 bg-primary hover:bg-primary-light text-white rounded-lg transition shadow-md disabled:opacity-50"
									}, toDisplayString(unref(form).processing ? "Menyimpan..." : "Simpan"), 9, ["disabled"])])
								], 32)];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [
						createVNode(unref(Head), { title: "Arus Kas" }),
						createVNode("div", { class: "mb-6 flex justify-between items-center" }, [createVNode("div", null, [createVNode("h1", { class: "text-2xl font-bold text-gray-800" }, "Manajemen Arus Kas"), createVNode("p", { class: "text-gray-500 text-sm" }, "Pencatatan pemasukan dan pengeluaran")]), createVNode("div", { class: "flex gap-2" }, [createVNode(unref(Link), {
							href: _ctx.route("transaction-categories.index"),
							class: "bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 transition shadow-md"
						}, {
							default: withCtx(() => [createVNode(unref(CogIcon), { class: "w-5 h-5" }), createTextVNode(" Kelola Kategori ")]),
							_: 1
						}, 8, ["href"]), createVNode("button", {
							onClick: openCreate,
							class: "bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg flex items-center gap-2 transition shadow-md"
						}, [createVNode(unref(PlusIcon), { class: "w-5 h-5" }), createTextVNode(" Tambah Transaksi ")])])]),
						createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-6" }, [
							createVNode("div", { class: "bg-white p-6 rounded-xl shadow-sm border-l-4 border-primary" }, [createVNode("p", { class: "text-sm text-gray-500 font-medium" }, "Total Saldo Kas"), createVNode("p", { class: "text-2xl font-bold text-gray-800 mt-1" }, toDisplayString(formatRupiah(__props.stats.total_saldo)), 1)]),
							createVNode("div", { class: "bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500" }, [createVNode("p", { class: "text-sm text-gray-500 font-medium" }, "Pemasukan Bulan Ini"), createVNode("p", { class: "text-2xl font-bold text-green-600 mt-1" }, "+ " + toDisplayString(formatRupiah(__props.stats.pemasukan_bulan_ini)), 1)]),
							createVNode("div", { class: "bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500" }, [createVNode("p", { class: "text-sm text-gray-500 font-medium" }, "Pengeluaran Bulan Ini"), createVNode("p", { class: "text-2xl font-bold text-red-600 mt-1" }, "- " + toDisplayString(formatRupiah(__props.stats.pengeluaran_bulan_ini)), 1)])
						]),
						createVNode("div", { class: "bg-white rounded-xl shadow-sm p-4 mb-6" }, [createVNode("div", { class: "flex flex-col md:flex-row gap-3" }, [
							createVNode("div", { class: "flex-1 relative" }, [createVNode(unref(MagnifyingGlassIcon), { class: "w-5 h-5 absolute left-3 top-2.5 text-gray-400" }), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => search.value = $event,
								onKeyup: withKeys(applyFilter, ["enter"]),
								type: "text",
								placeholder: "Cari transaksi...",
								class: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
							}, null, 40, ["onUpdate:modelValue"]), [[vModelText, search.value]])]),
							createVNode("button", {
								onClick: applyFilter,
								class: "bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-light transition"
							}, "Cari"),
							createVNode("button", {
								onClick: ($event) => {
									search.value = "";
									applyFilter();
								},
								class: "bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition"
							}, "Reset", 8, ["onClick"])
						])]),
						createVNode("div", { class: "bg-white rounded-xl shadow-sm overflow-hidden" }, [createVNode("div", { class: "overflow-x-auto" }, [createVNode("table", { class: "w-full text-left border-collapse" }, [createVNode("thead", { class: "bg-gray-50 text-gray-600 text-sm uppercase tracking-wider" }, [createVNode("tr", null, [
							createVNode("th", { class: "px-6 py-4 font-semibold" }, "No. Transaksi"),
							createVNode("th", { class: "px-6 py-4 font-semibold" }, "Tanggal"),
							createVNode("th", { class: "px-6 py-4 font-semibold" }, "Kategori"),
							createVNode("th", { class: "px-6 py-4 font-semibold" }, "Kas Box"),
							createVNode("th", { class: "px-6 py-4 font-semibold" }, "Keterangan"),
							createVNode("th", { class: "px-6 py-4 font-semibold text-right" }, "Jumlah"),
							createVNode("th", { class: "px-6 py-4 font-semibold text-center" }, "Status"),
							createVNode("th", { class: "px-6 py-4 font-semibold text-center" }, "Aksi")
						])]), createVNode("tbody", { class: "divide-y divide-gray-100 text-sm" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.transactions.data, (trx) => {
							return openBlock(), createBlock("tr", {
								key: trx.id,
								class: "hover:bg-gray-50 transition"
							}, [
								createVNode("td", { class: "px-6 py-4 font-mono text-gray-600 text-xs" }, toDisplayString(trx.no_transaksi), 1),
								createVNode("td", { class: "px-6 py-4" }, toDisplayString(trx.tanggal), 1),
								createVNode("td", { class: "px-6 py-4" }, [createVNode("span", { class: ["px-2 py-1 rounded-full text-xs font-semibold", trx.category?.tipe === "pemasukan" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"] }, toDisplayString(trx.category?.nama), 3)]),
								createVNode("td", { class: "px-6 py-4 text-gray-700" }, toDisplayString(trx.cashbox?.nama), 1),
								createVNode("td", { class: "px-6 py-4 text-gray-700 max-w-xs truncate" }, toDisplayString(trx.keterangan), 1),
								createVNode("td", { class: ["px-6 py-4 text-right font-semibold", trx.jenis === "pemasukan" ? "text-green-600" : "text-red-600"] }, toDisplayString(trx.jenis === "pemasukan" ? "+" : "-") + " " + toDisplayString(formatRupiah(trx.jumlah)), 3),
								createVNode("td", { class: "px-6 py-4 text-center" }, [createVNode("span", { class: "px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs capitalize" }, toDisplayString(trx.status), 1)]),
								createVNode("td", { class: "px-6 py-4 text-center" }, [createVNode("div", { class: "flex justify-center gap-2" }, [createVNode("button", {
									onClick: ($event) => openEdit(trx),
									class: "text-gray-400 hover:text-primary",
									title: "Edit"
								}, [createVNode(unref(PencilIcon), { class: "w-5 h-5" })], 8, ["onClick"]), createVNode("button", {
									onClick: ($event) => deleteItem(trx),
									class: "text-gray-400 hover:text-red-600",
									title: "Hapus"
								}, [createVNode(unref(TrashIcon), { class: "w-5 h-5" })], 8, ["onClick"])])])
							]);
						}), 128)), __props.transactions.data.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [createVNode("td", {
							colspan: "8",
							class: "px-6 py-12 text-center text-gray-500"
						}, "Tidak ada data transaksi")])) : createCommentVNode("", true)])])]), createVNode("div", { class: "px-6 py-4 border-t" }, [createVNode(_sfc_main$2, { links: __props.transactions.links }, null, 8, ["links"])])]),
						createVNode(_sfc_main$1, {
							show: modalOpen.value,
							title: editMode.value ? "Edit Transaksi" : "Tambah Transaksi Baru",
							onClose: ($event) => modalOpen.value = false
						}, {
							default: withCtx(() => [createVNode("form", {
								onSubmit: withModifiers(submit, ["prevent"]),
								class: "space-y-4"
							}, [
								createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Jenis Transaksi"),
									createVNode("div", { class: "flex gap-4" }, [createVNode("label", { class: "flex items-center gap-2 cursor-pointer" }, [withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).jenis = $event,
										type: "radio",
										value: "pemasukan",
										class: "text-primary focus:ring-primary"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelRadio, unref(form).jenis]]), createVNode("span", { class: "text-sm" }, "Pemasukan")]), createVNode("label", { class: "flex items-center gap-2 cursor-pointer" }, [withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).jenis = $event,
										type: "radio",
										value: "pengeluaran",
										class: "text-primary focus:ring-primary"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelRadio, unref(form).jenis]]), createVNode("span", { class: "text-sm" }, "Pengeluaran")])]),
									unref(form).errors.jenis ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(form).errors.jenis), 1)) : createCommentVNode("", true)
								]),
								createVNode("div", { class: "grid grid-cols-2 gap-4" }, [createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Kas Box"),
									withDirectives(createVNode("select", {
										"onUpdate:modelValue": ($event) => unref(form).cashbox_id = $event,
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, [createVNode("option", { value: "" }, "-- Pilih --"), (openBlock(true), createBlock(Fragment, null, renderList(__props.cashboxes, (box) => {
										return openBlock(), createBlock("option", {
											key: box.id,
											value: box.id
										}, toDisplayString(box.nama), 9, ["value"]);
									}), 128))], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).cashbox_id]]),
									unref(form).errors.cashbox_id ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(form).errors.cashbox_id), 1)) : createCommentVNode("", true)
								]), createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Kategori"),
									withDirectives(createVNode("select", {
										"onUpdate:modelValue": ($event) => unref(form).category_id = $event,
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, [createVNode("option", { value: "" }, "-- Pilih --"), (openBlock(true), createBlock(Fragment, null, renderList(filteredCategories.value, (cat) => {
										return openBlock(), createBlock("option", {
											key: cat.id,
											value: cat.id
										}, toDisplayString(cat.nama), 9, ["value"]);
									}), 128))], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).category_id]]),
									unref(form).errors.category_id ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(form).errors.category_id), 1)) : createCommentVNode("", true)
								])]),
								createVNode("div", { class: "grid grid-cols-2 gap-4" }, [createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Tanggal"),
									withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).tanggal = $event,
										type: "date",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).tanggal]]),
									unref(form).errors.tanggal ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(form).errors.tanggal), 1)) : createCommentVNode("", true)
								]), createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Jumlah (Rp)"),
									withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).jumlah = $event,
										type: "number",
										placeholder: "0",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).jumlah]]),
									unref(form).errors.jumlah ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(form).errors.jumlah), 1)) : createCommentVNode("", true)
								])]),
								createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Metode"), withDirectives(createVNode("select", {
									"onUpdate:modelValue": ($event) => unref(form).metode = $event,
									class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
								}, [
									createVNode("option", { value: "tunai" }, "Tunai"),
									createVNode("option", { value: "transfer" }, "Transfer"),
									createVNode("option", { value: "qris" }, "QRIS"),
									createVNode("option", { value: "lainnya" }, "Lainnya")
								], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).metode]])]),
								createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Keterangan"),
									withDirectives(createVNode("textarea", {
										"onUpdate:modelValue": ($event) => unref(form).keterangan = $event,
										rows: "3",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
										placeholder: "Detail transaksi..."
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).keterangan]]),
									unref(form).errors.keterangan ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(form).errors.keterangan), 1)) : createCommentVNode("", true)
								]),
								createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Bukti (opsional)"),
									createVNode("input", {
										type: "file",
										onInput: ($event) => unref(form).bukti = $event.target.files[0],
										class: "w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary-light"
									}, null, 40, ["onInput"]),
									unref(form).errors.bukti ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(form).errors.bukti), 1)) : createCommentVNode("", true)
								]),
								createVNode("div", { class: "flex justify-end gap-3 pt-4 border-t" }, [createVNode("button", {
									type: "button",
									onClick: ($event) => modalOpen.value = false,
									class: "px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
								}, "Batal", 8, ["onClick"]), createVNode("button", {
									type: "submit",
									disabled: unref(form).processing,
									class: "px-4 py-2 bg-primary hover:bg-primary-light text-white rounded-lg transition shadow-md disabled:opacity-50"
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Transactions/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
