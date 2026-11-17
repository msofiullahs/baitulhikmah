import { t as _sfc_main$1 } from "./Modal-CLSC5svO.js";
import { t as AdminLayout_default } from "./AdminLayout-JKKJHCcy.js";
import { t as _sfc_main$2 } from "./Pagination-DiptkPBm.js";
import { t as _sfc_main$3 } from "./StatCard-C5EKtPRl.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelSelect, vModelText, withCtx, withDirectives, withKeys, withModifiers } from "vue";
import { Head, Link, router, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { CogIcon, MagnifyingGlassIcon, PencilIcon, PlusIcon, QrCodeIcon, TrashIcon } from "@heroicons/vue/24/outline";
//#region resources/js/Pages/Assets/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: {
		assets: Object,
		categories: Array,
		stats: Object,
		filters: Object
	},
	setup(__props) {
		const props = __props;
		const search = ref(props.filters?.search || "");
		const kondisiFilter = ref(props.filters?.kondisi || "");
		const modalOpen = ref(false);
		const editMode = ref(false);
		const currentAsset = ref(null);
		const form = useForm({
			category_id: "",
			nama: "",
			merk: "",
			model: "",
			jumlah: 1,
			tanggal_perolehan: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
			harga_perolehan: "",
			kondisi: "baik",
			lokasi: "",
			foto: null
		});
		const openEdit = (asset) => {
			editMode.value = true;
			currentAsset.value = asset;
			form.category_id = asset.category_id;
			form.nama = asset.nama;
			form.merk = asset.merk || "";
			form.model = asset.model || "";
			form.jumlah = asset.jumlah;
			form.tanggal_perolehan = asset.tanggal_perolehan;
			form.harga_perolehan = asset.harga_perolehan;
			form.kondisi = asset.kondisi;
			form.lokasi = asset.lokasi;
			modalOpen.value = true;
		};
		const submit = () => {
			if (editMode.value && currentAsset.value) form.put(route("assets.update", currentAsset.value.id), {
				onSuccess: () => {
					closeModal();
				},
				onError: () => {}
			});
			else form.post(route("assets.store"), {
				onSuccess: () => {
					closeModal();
				},
				onError: () => {}
			});
		};
		const closeModal = () => {
			modalOpen.value = false;
			editMode.value = false;
			currentAsset.value = null;
			form.reset();
		};
		const deleteItem = (item) => {
			if (confirm(`Hapus aset ${item.nama}?`)) router.delete(route("assets.destroy", item.id));
		};
		const filterAssets = () => {
			router.get(route("assets.index"), {
				search: search.value,
				kondisi: kondisiFilter.value
			}, { preserveState: true });
		};
		const formatCurrency = (value) => {
			return new Intl.NumberFormat("id-ID", {
				style: "currency",
				currency: "IDR"
			}).format(value);
		};
		const kondisiBadge = (kondisi) => {
			const badges = {
				baik: "bg-green-100 text-green-800",
				rusak_ringan: "bg-yellow-100 text-yellow-800",
				rusak_berat: "bg-red-100 text-red-800",
				dihapuskan: "bg-gray-100 text-gray-800"
			};
			return `<span class="px-2 py-1 rounded-full text-xs font-medium ${badges[kondisi] || badges.baik}">${{
				baik: "Baik",
				rusak_ringan: "Rusak Ringan",
				rusak_berat: "Rusak Berat",
				dihapuskan: "Dihapuskan"
			}[kondisi] || kondisi}</span>`;
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(AdminLayout_default, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "Inventaris & Aset" }, null, _parent, _scopeId));
						_push(`<div class="mb-6 flex justify-between items-center"${_scopeId}><div${_scopeId}><h1 class="text-2xl font-bold text-gray-800"${_scopeId}>Inventaris &amp; Aset</h1><p class="text-gray-500 text-sm"${_scopeId}>Kelola aset dan inventaris masjid dengan QR code</p></div><div class="flex gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Link), {
							href: _ctx.route("asset-categories.index"),
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
						_push(` Tambah Aset </button></div></div><div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$3, {
							title: "Total Aset",
							value: __props.stats?.total_items || 0,
							icon: "BuildingOfficeIcon",
							color: "blue"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$3, {
							title: "Nilai Buku",
							value: formatCurrency(__props.stats?.total_value || 0),
							icon: "BanknotesIcon",
							color: "green"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$3, {
							title: "Kondisi Baik",
							value: __props.stats?.baik || 0,
							icon: "CheckCircleIcon",
							color: "green"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$3, {
							title: "Perlu Perbaikan",
							value: __props.stats?.perlu_perbaikan || 0,
							icon: "ExclamationTriangleIcon",
							color: "red"
						}, null, _parent, _scopeId));
						_push(`</div><div class="bg-white rounded-xl shadow-sm p-4 mb-6"${_scopeId}><div class="flex gap-3 flex-wrap"${_scopeId}><div class="flex-1 min-w-[200px] relative"${_scopeId}>`);
						_push(ssrRenderComponent(unref(MagnifyingGlassIcon), { class: "w-5 h-5 absolute left-3 top-2.5 text-gray-400" }, null, _parent, _scopeId));
						_push(`<input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari kode atau nama aset..." class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}></div><select class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(kondisiFilter.value) ? ssrLooseContain(kondisiFilter.value, "") : ssrLooseEqual(kondisiFilter.value, "")) ? " selected" : ""}${_scopeId}>Semua Kondisi</option><option value="baik"${ssrIncludeBooleanAttr(Array.isArray(kondisiFilter.value) ? ssrLooseContain(kondisiFilter.value, "baik") : ssrLooseEqual(kondisiFilter.value, "baik")) ? " selected" : ""}${_scopeId}>Baik</option><option value="rusak_ringan"${ssrIncludeBooleanAttr(Array.isArray(kondisiFilter.value) ? ssrLooseContain(kondisiFilter.value, "rusak_ringan") : ssrLooseEqual(kondisiFilter.value, "rusak_ringan")) ? " selected" : ""}${_scopeId}>Rusak Ringan</option><option value="rusak_berat"${ssrIncludeBooleanAttr(Array.isArray(kondisiFilter.value) ? ssrLooseContain(kondisiFilter.value, "rusak_berat") : ssrLooseEqual(kondisiFilter.value, "rusak_berat")) ? " selected" : ""}${_scopeId}>Rusak Berat</option><option value="dihapuskan"${ssrIncludeBooleanAttr(Array.isArray(kondisiFilter.value) ? ssrLooseContain(kondisiFilter.value, "dihapuskan") : ssrLooseEqual(kondisiFilter.value, "dihapuskan")) ? " selected" : ""}${_scopeId}>Dihapuskan</option></select><button class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition"${_scopeId}>Filter</button></div></div><div class="bg-white rounded-xl shadow-sm overflow-hidden"${_scopeId}><table class="w-full text-sm"${_scopeId}><thead class="bg-gray-50 text-gray-600 text-xs uppercase"${_scopeId}><tr${_scopeId}><th class="px-6 py-3 text-left"${_scopeId}>Kode</th><th class="px-6 py-3 text-left"${_scopeId}>Nama Aset</th><th class="px-6 py-3 text-left"${_scopeId}>Kategori</th><th class="px-6 py-3 text-center"${_scopeId}>Jumlah</th><th class="px-6 py-3 text-right"${_scopeId}>Harga</th><th class="px-6 py-3 text-center"${_scopeId}>Kondisi</th><th class="px-6 py-3 text-left"${_scopeId}>Lokasi</th><th class="px-6 py-3 text-center"${_scopeId}>Aksi</th></tr></thead><tbody class="divide-y"${_scopeId}><!--[-->`);
						ssrRenderList(__props.assets.data, (asset) => {
							_push(`<tr class="hover:bg-gray-50"${_scopeId}><td class="px-6 py-4 font-mono text-xs"${_scopeId}>${ssrInterpolate(asset.kode_aset)}</td><td class="px-6 py-4"${_scopeId}><div class="font-medium"${_scopeId}>${ssrInterpolate(asset.nama)}</div><div class="text-xs text-gray-500"${_scopeId}>${ssrInterpolate(asset.merk)} ${ssrInterpolate(asset.model)}</div></td><td class="px-6 py-4"${_scopeId}>${ssrInterpolate(asset.category?.nama || "-")}</td><td class="px-6 py-4 text-center"${_scopeId}>${ssrInterpolate(asset.jumlah)}</td><td class="px-6 py-4 text-right font-medium"${_scopeId}>${ssrInterpolate(formatCurrency(asset.harga_perolehan))}</td><td class="px-6 py-4 text-center"${_scopeId}>${kondisiBadge(asset.kondisi) ?? ""}</td><td class="px-6 py-4"${_scopeId}>${ssrInterpolate(asset.lokasi)}</td><td class="px-6 py-4 text-center"${_scopeId}><button class="text-gray-400 hover:text-primary mx-1" title="Edit"${_scopeId}>`);
							_push(ssrRenderComponent(unref(PencilIcon), { class: "w-5 h-5 inline" }, null, _parent, _scopeId));
							_push(`</button><a${ssrRenderAttr("href", `/storage/${asset.qr_code}`)} target="_blank" class="text-gray-400 hover:text-primary mx-1" title="QR Code"${_scopeId}>`);
							_push(ssrRenderComponent(unref(QrCodeIcon), { class: "w-5 h-5 inline" }, null, _parent, _scopeId));
							_push(`</a><button class="text-gray-400 hover:text-red-600 mx-1" title="Hapus"${_scopeId}>`);
							_push(ssrRenderComponent(unref(TrashIcon), { class: "w-5 h-5 inline" }, null, _parent, _scopeId));
							_push(`</button></td></tr>`);
						});
						_push(`<!--]-->`);
						if (!__props.assets.data.length) _push(`<tr${_scopeId}><td colspan="8" class="px-6 py-12 text-center text-gray-500"${_scopeId}>Tidak ada data aset</td></tr>`);
						else _push(`<!---->`);
						_push(`</tbody></table><div class="px-6 py-4 border-t"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$2, { links: __props.assets.links }, null, _parent, _scopeId));
						_push(`</div></div>`);
						_push(ssrRenderComponent(_sfc_main$1, {
							show: modalOpen.value,
							title: editMode.value ? "Edit Aset" : "Tambah Aset Baru",
							onClose: closeModal
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<form class="space-y-4 max-h-[70vh] overflow-y-auto pr-2"${_scopeId}><div class="grid grid-cols-2 gap-4"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Kategori <span class="text-red-500"${_scopeId}>*</span></label><select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(form).category_id) ? ssrLooseContain(unref(form).category_id, "") : ssrLooseEqual(unref(form).category_id, "")) ? " selected" : ""}${_scopeId}>Pilih Kategori</option><!--[-->`);
									ssrRenderList(__props.categories, (cat) => {
										_push(`<option${ssrRenderAttr("value", cat.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).category_id) ? ssrLooseContain(unref(form).category_id, cat.id) : ssrLooseEqual(unref(form).category_id, cat.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(cat.nama)}</option>`);
									});
									_push(`<!--]--></select>`);
									if (unref(form).errors.category_id) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.category_id)}</span>`);
									else _push(`<!---->`);
									_push(`</div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Kondisi <span class="text-red-500"${_scopeId}>*</span></label><select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}><option value="baik"${ssrIncludeBooleanAttr(Array.isArray(unref(form).kondisi) ? ssrLooseContain(unref(form).kondisi, "baik") : ssrLooseEqual(unref(form).kondisi, "baik")) ? " selected" : ""}${_scopeId}>Baik</option><option value="rusak_ringan"${ssrIncludeBooleanAttr(Array.isArray(unref(form).kondisi) ? ssrLooseContain(unref(form).kondisi, "rusak_ringan") : ssrLooseEqual(unref(form).kondisi, "rusak_ringan")) ? " selected" : ""}${_scopeId}>Rusak Ringan</option><option value="rusak_berat"${ssrIncludeBooleanAttr(Array.isArray(unref(form).kondisi) ? ssrLooseContain(unref(form).kondisi, "rusak_berat") : ssrLooseEqual(unref(form).kondisi, "rusak_berat")) ? " selected" : ""}${_scopeId}>Rusak Berat</option><option value="dihapuskan"${ssrIncludeBooleanAttr(Array.isArray(unref(form).kondisi) ? ssrLooseContain(unref(form).kondisi, "dihapuskan") : ssrLooseEqual(unref(form).kondisi, "dihapuskan")) ? " selected" : ""}${_scopeId}>Dihapuskan</option></select>`);
									if (unref(form).errors.kondisi) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.kondisi)}</span>`);
									else _push(`<!---->`);
									_push(`</div></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Nama Aset <span class="text-red-500"${_scopeId}>*</span></label><input${ssrRenderAttr("value", unref(form).nama)} type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Contoh: Proyektor Epson"${_scopeId}>`);
									if (unref(form).errors.nama) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.nama)}</span>`);
									else _push(`<!---->`);
									_push(`</div><div class="grid grid-cols-2 gap-4"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Merk</label><input${ssrRenderAttr("value", unref(form).merk)} type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Contoh: Epson"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Model</label><input${ssrRenderAttr("value", unref(form).model)} type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Contoh: EB-X05"${_scopeId}></div></div><div class="grid grid-cols-2 gap-4"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Jumlah <span class="text-red-500"${_scopeId}>*</span></label><input${ssrRenderAttr("value", unref(form).jumlah)} type="number" min="1" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}>`);
									if (unref(form).errors.jumlah) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.jumlah)}</span>`);
									else _push(`<!---->`);
									_push(`</div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Tanggal Perolehan <span class="text-red-500"${_scopeId}>*</span></label><input${ssrRenderAttr("value", unref(form).tanggal_perolehan)} type="date" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}>`);
									if (unref(form).errors.tanggal_perolehan) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.tanggal_perolehan)}</span>`);
									else _push(`<!---->`);
									_push(`</div></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Harga Perolehan (Rp) <span class="text-red-500"${_scopeId}>*</span></label><input${ssrRenderAttr("value", unref(form).harga_perolehan)} type="number" min="0" step="0.01" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}>`);
									if (unref(form).errors.harga_perolehan) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.harga_perolehan)}</span>`);
									else _push(`<!---->`);
									_push(`</div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Lokasi <span class="text-red-500"${_scopeId}>*</span></label><input${ssrRenderAttr("value", unref(form).lokasi)} type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Contoh: Ruang Serbaguna Lt.2"${_scopeId}>`);
									if (unref(form).errors.lokasi) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.lokasi)}</span>`);
									else _push(`<!---->`);
									_push(`</div>`);
									if (!editMode.value) {
										_push(`<div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Foto Aset</label><input type="file" accept="image/*" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}>`);
										if (unref(form).errors.foto) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.foto)}</span>`);
										else _push(`<!---->`);
										_push(`</div>`);
									} else _push(`<!---->`);
									_push(`<div class="flex justify-end gap-3 pt-4 border-t"${_scopeId}><button type="button" class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"${_scopeId}>Batal</button><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="px-4 py-2 bg-primary text-white rounded-lg disabled:opacity-50"${_scopeId}>${ssrInterpolate(unref(form).processing ? "Menyimpan..." : "Simpan")}</button></div></form>`);
								} else return [createVNode("form", {
									onSubmit: withModifiers(submit, ["prevent"]),
									class: "space-y-4 max-h-[70vh] overflow-y-auto pr-2"
								}, [
									createVNode("div", { class: "grid grid-cols-2 gap-4" }, [createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Kategori "), createVNode("span", { class: "text-red-500" }, "*")]),
										withDirectives(createVNode("select", {
											"onUpdate:modelValue": ($event) => unref(form).category_id = $event,
											class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
										}, [createVNode("option", { value: "" }, "Pilih Kategori"), (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (cat) => {
											return openBlock(), createBlock("option", {
												key: cat.id,
												value: cat.id
											}, toDisplayString(cat.nama), 9, ["value"]);
										}), 128))], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).category_id]]),
										unref(form).errors.category_id ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(form).errors.category_id), 1)) : createCommentVNode("", true)
									]), createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Kondisi "), createVNode("span", { class: "text-red-500" }, "*")]),
										withDirectives(createVNode("select", {
											"onUpdate:modelValue": ($event) => unref(form).kondisi = $event,
											class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
										}, [
											createVNode("option", { value: "baik" }, "Baik"),
											createVNode("option", { value: "rusak_ringan" }, "Rusak Ringan"),
											createVNode("option", { value: "rusak_berat" }, "Rusak Berat"),
											createVNode("option", { value: "dihapuskan" }, "Dihapuskan")
										], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).kondisi]]),
										unref(form).errors.kondisi ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(form).errors.kondisi), 1)) : createCommentVNode("", true)
									])]),
									createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Nama Aset "), createVNode("span", { class: "text-red-500" }, "*")]),
										withDirectives(createVNode("input", {
											"onUpdate:modelValue": ($event) => unref(form).nama = $event,
											type: "text",
											class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
											placeholder: "Contoh: Proyektor Epson"
										}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).nama]]),
										unref(form).errors.nama ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(form).errors.nama), 1)) : createCommentVNode("", true)
									]),
									createVNode("div", { class: "grid grid-cols-2 gap-4" }, [createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Merk"), withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).merk = $event,
										type: "text",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
										placeholder: "Contoh: Epson"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).merk]])]), createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Model"), withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).model = $event,
										type: "text",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
										placeholder: "Contoh: EB-X05"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).model]])])]),
									createVNode("div", { class: "grid grid-cols-2 gap-4" }, [createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Jumlah "), createVNode("span", { class: "text-red-500" }, "*")]),
										withDirectives(createVNode("input", {
											"onUpdate:modelValue": ($event) => unref(form).jumlah = $event,
											type: "number",
											min: "1",
											class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
										}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).jumlah]]),
										unref(form).errors.jumlah ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(form).errors.jumlah), 1)) : createCommentVNode("", true)
									]), createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Tanggal Perolehan "), createVNode("span", { class: "text-red-500" }, "*")]),
										withDirectives(createVNode("input", {
											"onUpdate:modelValue": ($event) => unref(form).tanggal_perolehan = $event,
											type: "date",
											class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
										}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).tanggal_perolehan]]),
										unref(form).errors.tanggal_perolehan ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(form).errors.tanggal_perolehan), 1)) : createCommentVNode("", true)
									])]),
									createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Harga Perolehan (Rp) "), createVNode("span", { class: "text-red-500" }, "*")]),
										withDirectives(createVNode("input", {
											"onUpdate:modelValue": ($event) => unref(form).harga_perolehan = $event,
											type: "number",
											min: "0",
											step: "0.01",
											class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
										}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).harga_perolehan]]),
										unref(form).errors.harga_perolehan ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(form).errors.harga_perolehan), 1)) : createCommentVNode("", true)
									]),
									createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Lokasi "), createVNode("span", { class: "text-red-500" }, "*")]),
										withDirectives(createVNode("input", {
											"onUpdate:modelValue": ($event) => unref(form).lokasi = $event,
											type: "text",
											class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
											placeholder: "Contoh: Ruang Serbaguna Lt.2"
										}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).lokasi]]),
										unref(form).errors.lokasi ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(form).errors.lokasi), 1)) : createCommentVNode("", true)
									]),
									!editMode.value ? (openBlock(), createBlock("div", { key: 0 }, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Foto Aset"),
										createVNode("input", {
											type: "file",
											onInput: ($event) => unref(form).foto = $event.target.files[0],
											accept: "image/*",
											class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
										}, null, 40, ["onInput"]),
										unref(form).errors.foto ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(form).errors.foto), 1)) : createCommentVNode("", true)
									])) : createCommentVNode("", true),
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
						createVNode(unref(Head), { title: "Inventaris & Aset" }),
						createVNode("div", { class: "mb-6 flex justify-between items-center" }, [createVNode("div", null, [createVNode("h1", { class: "text-2xl font-bold text-gray-800" }, "Inventaris & Aset"), createVNode("p", { class: "text-gray-500 text-sm" }, "Kelola aset dan inventaris masjid dengan QR code")]), createVNode("div", { class: "flex gap-2" }, [createVNode(unref(Link), {
							href: _ctx.route("asset-categories.index"),
							class: "bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 transition shadow-md"
						}, {
							default: withCtx(() => [createVNode(unref(CogIcon), { class: "w-5 h-5" }), createTextVNode(" Kelola Kategori ")]),
							_: 1
						}, 8, ["href"]), createVNode("button", {
							onClick: ($event) => {
								modalOpen.value = true;
								editMode.value = false;
								unref(form).reset();
							},
							class: "bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg flex items-center gap-2 transition shadow-md"
						}, [createVNode(unref(PlusIcon), { class: "w-5 h-5" }), createTextVNode(" Tambah Aset ")], 8, ["onClick"])])]),
						createVNode("div", { class: "grid grid-cols-1 md:grid-cols-4 gap-4 mb-6" }, [
							createVNode(_sfc_main$3, {
								title: "Total Aset",
								value: __props.stats?.total_items || 0,
								icon: "BuildingOfficeIcon",
								color: "blue"
							}, null, 8, ["value"]),
							createVNode(_sfc_main$3, {
								title: "Nilai Buku",
								value: formatCurrency(__props.stats?.total_value || 0),
								icon: "BanknotesIcon",
								color: "green"
							}, null, 8, ["value"]),
							createVNode(_sfc_main$3, {
								title: "Kondisi Baik",
								value: __props.stats?.baik || 0,
								icon: "CheckCircleIcon",
								color: "green"
							}, null, 8, ["value"]),
							createVNode(_sfc_main$3, {
								title: "Perlu Perbaikan",
								value: __props.stats?.perlu_perbaikan || 0,
								icon: "ExclamationTriangleIcon",
								color: "red"
							}, null, 8, ["value"])
						]),
						createVNode("div", { class: "bg-white rounded-xl shadow-sm p-4 mb-6" }, [createVNode("div", { class: "flex gap-3 flex-wrap" }, [
							createVNode("div", { class: "flex-1 min-w-[200px] relative" }, [createVNode(unref(MagnifyingGlassIcon), { class: "w-5 h-5 absolute left-3 top-2.5 text-gray-400" }), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => search.value = $event,
								onKeyup: withKeys(filterAssets, ["enter"]),
								type: "text",
								placeholder: "Cari kode atau nama aset...",
								class: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
							}, null, 40, ["onUpdate:modelValue"]), [[vModelText, search.value]])]),
							withDirectives(createVNode("select", {
								"onUpdate:modelValue": ($event) => kondisiFilter.value = $event,
								onChange: filterAssets,
								class: "px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
							}, [
								createVNode("option", { value: "" }, "Semua Kondisi"),
								createVNode("option", { value: "baik" }, "Baik"),
								createVNode("option", { value: "rusak_ringan" }, "Rusak Ringan"),
								createVNode("option", { value: "rusak_berat" }, "Rusak Berat"),
								createVNode("option", { value: "dihapuskan" }, "Dihapuskan")
							], 40, ["onUpdate:modelValue"]), [[vModelSelect, kondisiFilter.value]]),
							createVNode("button", {
								onClick: filterAssets,
								class: "px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition"
							}, "Filter")
						])]),
						createVNode("div", { class: "bg-white rounded-xl shadow-sm overflow-hidden" }, [createVNode("table", { class: "w-full text-sm" }, [createVNode("thead", { class: "bg-gray-50 text-gray-600 text-xs uppercase" }, [createVNode("tr", null, [
							createVNode("th", { class: "px-6 py-3 text-left" }, "Kode"),
							createVNode("th", { class: "px-6 py-3 text-left" }, "Nama Aset"),
							createVNode("th", { class: "px-6 py-3 text-left" }, "Kategori"),
							createVNode("th", { class: "px-6 py-3 text-center" }, "Jumlah"),
							createVNode("th", { class: "px-6 py-3 text-right" }, "Harga"),
							createVNode("th", { class: "px-6 py-3 text-center" }, "Kondisi"),
							createVNode("th", { class: "px-6 py-3 text-left" }, "Lokasi"),
							createVNode("th", { class: "px-6 py-3 text-center" }, "Aksi")
						])]), createVNode("tbody", { class: "divide-y" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.assets.data, (asset) => {
							return openBlock(), createBlock("tr", {
								key: asset.id,
								class: "hover:bg-gray-50"
							}, [
								createVNode("td", { class: "px-6 py-4 font-mono text-xs" }, toDisplayString(asset.kode_aset), 1),
								createVNode("td", { class: "px-6 py-4" }, [createVNode("div", { class: "font-medium" }, toDisplayString(asset.nama), 1), createVNode("div", { class: "text-xs text-gray-500" }, toDisplayString(asset.merk) + " " + toDisplayString(asset.model), 1)]),
								createVNode("td", { class: "px-6 py-4" }, toDisplayString(asset.category?.nama || "-"), 1),
								createVNode("td", { class: "px-6 py-4 text-center" }, toDisplayString(asset.jumlah), 1),
								createVNode("td", { class: "px-6 py-4 text-right font-medium" }, toDisplayString(formatCurrency(asset.harga_perolehan)), 1),
								createVNode("td", {
									class: "px-6 py-4 text-center",
									innerHTML: kondisiBadge(asset.kondisi)
								}, null, 8, ["innerHTML"]),
								createVNode("td", { class: "px-6 py-4" }, toDisplayString(asset.lokasi), 1),
								createVNode("td", { class: "px-6 py-4 text-center" }, [
									createVNode("button", {
										onClick: ($event) => openEdit(asset),
										class: "text-gray-400 hover:text-primary mx-1",
										title: "Edit"
									}, [createVNode(unref(PencilIcon), { class: "w-5 h-5 inline" })], 8, ["onClick"]),
									createVNode("a", {
										href: `/storage/${asset.qr_code}`,
										target: "_blank",
										class: "text-gray-400 hover:text-primary mx-1",
										title: "QR Code"
									}, [createVNode(unref(QrCodeIcon), { class: "w-5 h-5 inline" })], 8, ["href"]),
									createVNode("button", {
										onClick: ($event) => deleteItem(asset),
										class: "text-gray-400 hover:text-red-600 mx-1",
										title: "Hapus"
									}, [createVNode(unref(TrashIcon), { class: "w-5 h-5 inline" })], 8, ["onClick"])
								])
							]);
						}), 128)), !__props.assets.data.length ? (openBlock(), createBlock("tr", { key: 0 }, [createVNode("td", {
							colspan: "8",
							class: "px-6 py-12 text-center text-gray-500"
						}, "Tidak ada data aset")])) : createCommentVNode("", true)])]), createVNode("div", { class: "px-6 py-4 border-t" }, [createVNode(_sfc_main$2, { links: __props.assets.links }, null, 8, ["links"])])]),
						createVNode(_sfc_main$1, {
							show: modalOpen.value,
							title: editMode.value ? "Edit Aset" : "Tambah Aset Baru",
							onClose: closeModal
						}, {
							default: withCtx(() => [createVNode("form", {
								onSubmit: withModifiers(submit, ["prevent"]),
								class: "space-y-4 max-h-[70vh] overflow-y-auto pr-2"
							}, [
								createVNode("div", { class: "grid grid-cols-2 gap-4" }, [createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Kategori "), createVNode("span", { class: "text-red-500" }, "*")]),
									withDirectives(createVNode("select", {
										"onUpdate:modelValue": ($event) => unref(form).category_id = $event,
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, [createVNode("option", { value: "" }, "Pilih Kategori"), (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (cat) => {
										return openBlock(), createBlock("option", {
											key: cat.id,
											value: cat.id
										}, toDisplayString(cat.nama), 9, ["value"]);
									}), 128))], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).category_id]]),
									unref(form).errors.category_id ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(form).errors.category_id), 1)) : createCommentVNode("", true)
								]), createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Kondisi "), createVNode("span", { class: "text-red-500" }, "*")]),
									withDirectives(createVNode("select", {
										"onUpdate:modelValue": ($event) => unref(form).kondisi = $event,
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, [
										createVNode("option", { value: "baik" }, "Baik"),
										createVNode("option", { value: "rusak_ringan" }, "Rusak Ringan"),
										createVNode("option", { value: "rusak_berat" }, "Rusak Berat"),
										createVNode("option", { value: "dihapuskan" }, "Dihapuskan")
									], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).kondisi]]),
									unref(form).errors.kondisi ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(form).errors.kondisi), 1)) : createCommentVNode("", true)
								])]),
								createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Nama Aset "), createVNode("span", { class: "text-red-500" }, "*")]),
									withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).nama = $event,
										type: "text",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
										placeholder: "Contoh: Proyektor Epson"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).nama]]),
									unref(form).errors.nama ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(form).errors.nama), 1)) : createCommentVNode("", true)
								]),
								createVNode("div", { class: "grid grid-cols-2 gap-4" }, [createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Merk"), withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => unref(form).merk = $event,
									type: "text",
									class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
									placeholder: "Contoh: Epson"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).merk]])]), createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Model"), withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => unref(form).model = $event,
									type: "text",
									class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
									placeholder: "Contoh: EB-X05"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).model]])])]),
								createVNode("div", { class: "grid grid-cols-2 gap-4" }, [createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Jumlah "), createVNode("span", { class: "text-red-500" }, "*")]),
									withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).jumlah = $event,
										type: "number",
										min: "1",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).jumlah]]),
									unref(form).errors.jumlah ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(form).errors.jumlah), 1)) : createCommentVNode("", true)
								]), createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Tanggal Perolehan "), createVNode("span", { class: "text-red-500" }, "*")]),
									withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).tanggal_perolehan = $event,
										type: "date",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).tanggal_perolehan]]),
									unref(form).errors.tanggal_perolehan ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(form).errors.tanggal_perolehan), 1)) : createCommentVNode("", true)
								])]),
								createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Harga Perolehan (Rp) "), createVNode("span", { class: "text-red-500" }, "*")]),
									withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).harga_perolehan = $event,
										type: "number",
										min: "0",
										step: "0.01",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).harga_perolehan]]),
									unref(form).errors.harga_perolehan ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(form).errors.harga_perolehan), 1)) : createCommentVNode("", true)
								]),
								createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Lokasi "), createVNode("span", { class: "text-red-500" }, "*")]),
									withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).lokasi = $event,
										type: "text",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
										placeholder: "Contoh: Ruang Serbaguna Lt.2"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).lokasi]]),
									unref(form).errors.lokasi ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(form).errors.lokasi), 1)) : createCommentVNode("", true)
								]),
								!editMode.value ? (openBlock(), createBlock("div", { key: 0 }, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Foto Aset"),
									createVNode("input", {
										type: "file",
										onInput: ($event) => unref(form).foto = $event.target.files[0],
										accept: "image/*",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, null, 40, ["onInput"]),
									unref(form).errors.foto ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(form).errors.foto), 1)) : createCommentVNode("", true)
								])) : createCommentVNode("", true),
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Assets/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
