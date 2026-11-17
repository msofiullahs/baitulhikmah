import { t as _sfc_main$1 } from "./Modal-CLSC5svO.js";
import { t as AdminLayout_default } from "./AdminLayout-JKKJHCcy.js";
import { t as _sfc_main$2 } from "./Pagination-DiptkPBm.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelCheckbox, vModelSelect, vModelText, withCtx, withDirectives, withKeys, withModifiers } from "vue";
import { Head, Link, router, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { CogIcon, MagnifyingGlassIcon, PlusIcon, TrashIcon } from "@heroicons/vue/24/outline";
//#region resources/js/Pages/Ziswaf/Donations/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: {
		donations: Object,
		categories: Array,
		cashboxes: Array
	},
	setup(__props) {
		const search = ref("");
		const kategoriFilter = ref("");
		const modalOpen = ref(false);
		const editMode = ref(false);
		const currentDonation = ref(null);
		const form = useForm({
			jenis_ziswaf_id: "",
			nama_donatur: "",
			no_hp_donatur: "",
			jumlah: "",
			tanggal: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
			metode: "tunai",
			cashbox_id: "",
			is_anonymous: false,
			catatan: ""
		});
		const submit = () => {
			if (editMode.value && currentDonation.value) form.put(route("ziswaf.donations.update", currentDonation.value.id), { onSuccess: () => {
				closeModal();
			} });
			else form.post(route("ziswaf.donations.store"), { onSuccess: () => {
				closeModal();
			} });
		};
		const closeModal = () => {
			modalOpen.value = false;
			editMode.value = false;
			currentDonation.value = null;
			form.reset();
		};
		const deleteItem = (item) => {
			if (confirm(`Hapus donasi dari ${item.nama_donatur || "Anonim"}?`)) router.delete(route("ziswaf.donations.destroy", item.id));
		};
		const filterDonations = () => {
			router.get(route("ziswaf.donations.index"), {
				search: search.value,
				jenis_ziswaf_id: kategoriFilter.value
			}, { preserveState: true });
		};
		const formatCurrency = (value) => {
			return new Intl.NumberFormat("id-ID", {
				style: "currency",
				currency: "IDR"
			}).format(value);
		};
		const metodeBadge = (metode) => {
			const badges = {
				tunai: "bg-green-100 text-green-800",
				transfer: "bg-blue-100 text-blue-800",
				qris: "bg-purple-100 text-purple-800"
			};
			return `<span class="px-2 py-1 rounded-full text-xs font-medium ${badges[metode] || badges.tunai}">${{
				tunai: "Tunai",
				transfer: "Transfer",
				qris: "QRIS"
			}[metode] || metode}</span>`;
		};
		const ziswafLabel = (category) => {
			return category?.nama || {
				zakat_fitrah: "Zakat Fitrah",
				zakat_maal: "Zakat Maal",
				infaq: "Infaq",
				sedekah: "Sedekah",
				wakaf: "Wakaf"
			}[category?.kode] || "-";
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(AdminLayout_default, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "ZISWAF - Donasi" }, null, _parent, _scopeId));
						_push(`<div class="mb-6 flex justify-between items-center"${_scopeId}><div class="flex items-center gap-4"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Link), {
							href: _ctx.route("dashboard"),
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
						_push(`<div${_scopeId}><h1 class="text-2xl font-bold text-gray-800"${_scopeId}>Donasi ZISWAF</h1><p class="text-gray-500 text-sm"${_scopeId}>Kelola zakat, infaq, sedekah, dan wakaf</p></div></div><div class="flex gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Link), {
							href: _ctx.route("ziswaf-categories.index"),
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
						_push(` Catat Donasi </button></div></div><div class="bg-white rounded-xl shadow-sm p-4 mb-6"${_scopeId}><div class="flex gap-3 flex-wrap"${_scopeId}><div class="flex-1 min-w-[200px] relative"${_scopeId}>`);
						_push(ssrRenderComponent(unref(MagnifyingGlassIcon), { class: "w-5 h-5 absolute left-3 top-2.5 text-gray-400" }, null, _parent, _scopeId));
						_push(`<input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari nama donatur..." class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}></div><select class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(kategoriFilter.value) ? ssrLooseContain(kategoriFilter.value, "") : ssrLooseEqual(kategoriFilter.value, "")) ? " selected" : ""}${_scopeId}>Semua Jenis</option><!--[-->`);
						ssrRenderList(__props.categories, (cat) => {
							_push(`<option${ssrRenderAttr("value", cat.id)}${ssrIncludeBooleanAttr(Array.isArray(kategoriFilter.value) ? ssrLooseContain(kategoriFilter.value, cat.id) : ssrLooseEqual(kategoriFilter.value, cat.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(ziswafLabel(cat))}</option>`);
						});
						_push(`<!--]--></select><button class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition"${_scopeId}>Filter</button></div></div><div class="bg-white rounded-xl shadow-sm overflow-hidden"${_scopeId}><table class="w-full text-sm"${_scopeId}><thead class="bg-gray-50 text-gray-600 text-xs uppercase"${_scopeId}><tr${_scopeId}><th class="px-6 py-3 text-left"${_scopeId}>No. Donasi</th><th class="px-6 py-3 text-left"${_scopeId}>Donatur</th><th class="px-6 py-3 text-left"${_scopeId}>Jenis</th><th class="px-6 py-3 text-right"${_scopeId}>Jumlah</th><th class="px-6 py-3 text-center"${_scopeId}>Metode</th><th class="px-6 py-3 text-center"${_scopeId}>Kas Box</th><th class="px-6 py-3 text-center"${_scopeId}>Tanggal</th><th class="px-6 py-3 text-center"${_scopeId}>Aksi</th></tr></thead><tbody class="divide-y"${_scopeId}><!--[-->`);
						ssrRenderList(__props.donations.data, (item) => {
							_push(`<tr class="hover:bg-gray-50"${_scopeId}><td class="px-6 py-4 font-mono text-xs"${_scopeId}>${ssrInterpolate(item.no_donasi)}</td><td class="px-6 py-4"${_scopeId}><div class="font-medium"${_scopeId}>${ssrInterpolate(item.is_anonymous ? "Anonim" : item.nama_donatur || "-")}</div><div class="text-xs text-gray-500"${_scopeId}>${ssrInterpolate(item.no_hp_donatur || "-")}</div></td><td class="px-6 py-4"${_scopeId}>${ssrInterpolate(ziswafLabel(item.category))}</td><td class="px-6 py-4 text-right font-medium"${_scopeId}>${ssrInterpolate(formatCurrency(item.jumlah))}</td><td class="px-6 py-4 text-center"${_scopeId}>${metodeBadge(item.metode) ?? ""}</td><td class="px-6 py-4 text-center text-xs"${_scopeId}>${ssrInterpolate(item.cashbox?.nama || "-")}</td><td class="px-6 py-4 text-center text-xs"${_scopeId}>${ssrInterpolate(new Date(item.tanggal).toLocaleDateString("id-ID"))}</td><td class="px-6 py-4 text-center"${_scopeId}><button class="text-gray-400 hover:text-red-600 mx-1" title="Hapus"${_scopeId}>`);
							_push(ssrRenderComponent(unref(TrashIcon), { class: "w-5 h-5 inline" }, null, _parent, _scopeId));
							_push(`</button></td></tr>`);
						});
						_push(`<!--]-->`);
						if (!__props.donations.data.length) _push(`<tr${_scopeId}><td colspan="8" class="px-6 py-12 text-center text-gray-500"${_scopeId}>Tidak ada data donasi</td></tr>`);
						else _push(`<!---->`);
						_push(`</tbody></table><div class="px-6 py-4 border-t"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$2, { links: __props.donations.links }, null, _parent, _scopeId));
						_push(`</div></div>`);
						_push(ssrRenderComponent(_sfc_main$1, {
							show: modalOpen.value,
							title: "Catat Donasi Baru",
							onClose: closeModal
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<form class="space-y-4 max-h-[70vh] overflow-y-auto pr-2"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Jenis ZISWAF <span class="text-red-500"${_scopeId}>*</span></label><select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(form).jenis_ziswaf_id) ? ssrLooseContain(unref(form).jenis_ziswaf_id, "") : ssrLooseEqual(unref(form).jenis_ziswaf_id, "")) ? " selected" : ""}${_scopeId}>Pilih Jenis</option><!--[-->`);
									ssrRenderList(__props.categories, (cat) => {
										_push(`<option${ssrRenderAttr("value", cat.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).jenis_ziswaf_id) ? ssrLooseContain(unref(form).jenis_ziswaf_id, cat.id) : ssrLooseEqual(unref(form).jenis_ziswaf_id, cat.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(ziswafLabel(cat))}</option>`);
									});
									_push(`<!--]--></select>`);
									if (unref(form).errors.jenis_ziswaf_id) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.jenis_ziswaf_id)}</span>`);
									else _push(`<!---->`);
									_push(`</div><div class="grid grid-cols-2 gap-4"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Nama Donatur</label><input${ssrRenderAttr("value", unref(form).nama_donatur)} type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Kosongkan jika anonim"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>No. HP</label><input${ssrRenderAttr("value", unref(form).no_hp_donatur)} type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}></div></div><label class="flex items-center gap-2"${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(unref(form).is_anonymous) ? ssrLooseContain(unref(form).is_anonymous, null) : unref(form).is_anonymous) ? " checked" : ""} type="checkbox" class="rounded border-gray-300 text-primary focus:ring-primary"${_scopeId}><span class="text-sm text-gray-700"${_scopeId}>Donasi Anonim (nama tidak ditampilkan)</span></label><div class="grid grid-cols-2 gap-4"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Jumlah (Rp) <span class="text-red-500"${_scopeId}>*</span></label><input${ssrRenderAttr("value", unref(form).jumlah)} type="number" min="0" step="0.01" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}>`);
									if (unref(form).errors.jumlah) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.jumlah)}</span>`);
									else _push(`<!---->`);
									_push(`</div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Tanggal <span class="text-red-500"${_scopeId}>*</span></label><input${ssrRenderAttr("value", unref(form).tanggal)} type="date" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}>`);
									if (unref(form).errors.tanggal) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.tanggal)}</span>`);
									else _push(`<!---->`);
									_push(`</div></div><div class="grid grid-cols-2 gap-4"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Metode Pembayaran <span class="text-red-500"${_scopeId}>*</span></label><select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}><option value="tunai"${ssrIncludeBooleanAttr(Array.isArray(unref(form).metode) ? ssrLooseContain(unref(form).metode, "tunai") : ssrLooseEqual(unref(form).metode, "tunai")) ? " selected" : ""}${_scopeId}>Tunai</option><option value="transfer"${ssrIncludeBooleanAttr(Array.isArray(unref(form).metode) ? ssrLooseContain(unref(form).metode, "transfer") : ssrLooseEqual(unref(form).metode, "transfer")) ? " selected" : ""}${_scopeId}>Transfer Bank</option><option value="qris"${ssrIncludeBooleanAttr(Array.isArray(unref(form).metode) ? ssrLooseContain(unref(form).metode, "qris") : ssrLooseEqual(unref(form).metode, "qris")) ? " selected" : ""}${_scopeId}>QRIS</option></select>`);
									if (unref(form).errors.metode) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.metode)}</span>`);
									else _push(`<!---->`);
									_push(`</div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Kas Box Tujuan <span class="text-red-500"${_scopeId}>*</span></label><select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(form).cashbox_id) ? ssrLooseContain(unref(form).cashbox_id, "") : ssrLooseEqual(unref(form).cashbox_id, "")) ? " selected" : ""}${_scopeId}>Pilih Kas Box</option><!--[-->`);
									ssrRenderList(__props.cashboxes, (box) => {
										_push(`<option${ssrRenderAttr("value", box.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).cashbox_id) ? ssrLooseContain(unref(form).cashbox_id, box.id) : ssrLooseEqual(unref(form).cashbox_id, box.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(box.nama)}</option>`);
									});
									_push(`<!--]--></select>`);
									if (unref(form).errors.cashbox_id) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.cashbox_id)}</span>`);
									else _push(`<!---->`);
									_push(`</div></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Catatan</label><textarea rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}>${ssrInterpolate(unref(form).catatan)}</textarea></div><div class="flex justify-end gap-3 pt-4 border-t"${_scopeId}><button type="button" class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"${_scopeId}>Batal</button><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="px-4 py-2 bg-primary text-white rounded-lg disabled:opacity-50"${_scopeId}>${ssrInterpolate(unref(form).processing ? "Menyimpan..." : "Simpan")}</button></div></form>`);
								} else return [createVNode("form", {
									onSubmit: withModifiers(submit, ["prevent"]),
									class: "space-y-4 max-h-[70vh] overflow-y-auto pr-2"
								}, [
									createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Jenis ZISWAF "), createVNode("span", { class: "text-red-500" }, "*")]),
										withDirectives(createVNode("select", {
											"onUpdate:modelValue": ($event) => unref(form).jenis_ziswaf_id = $event,
											class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
										}, [createVNode("option", { value: "" }, "Pilih Jenis"), (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (cat) => {
											return openBlock(), createBlock("option", {
												key: cat.id,
												value: cat.id
											}, toDisplayString(ziswafLabel(cat)), 9, ["value"]);
										}), 128))], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).jenis_ziswaf_id]]),
										unref(form).errors.jenis_ziswaf_id ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(form).errors.jenis_ziswaf_id), 1)) : createCommentVNode("", true)
									]),
									createVNode("div", { class: "grid grid-cols-2 gap-4" }, [createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Nama Donatur"), withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).nama_donatur = $event,
										type: "text",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
										placeholder: "Kosongkan jika anonim"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).nama_donatur]])]), createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "No. HP"), withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).no_hp_donatur = $event,
										type: "text",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).no_hp_donatur]])])]),
									createVNode("label", { class: "flex items-center gap-2" }, [withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).is_anonymous = $event,
										type: "checkbox",
										class: "rounded border-gray-300 text-primary focus:ring-primary"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelCheckbox, unref(form).is_anonymous]]), createVNode("span", { class: "text-sm text-gray-700" }, "Donasi Anonim (nama tidak ditampilkan)")]),
									createVNode("div", { class: "grid grid-cols-2 gap-4" }, [createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Jumlah (Rp) "), createVNode("span", { class: "text-red-500" }, "*")]),
										withDirectives(createVNode("input", {
											"onUpdate:modelValue": ($event) => unref(form).jumlah = $event,
											type: "number",
											min: "0",
											step: "0.01",
											class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
										}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).jumlah]]),
										unref(form).errors.jumlah ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(form).errors.jumlah), 1)) : createCommentVNode("", true)
									]), createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Tanggal "), createVNode("span", { class: "text-red-500" }, "*")]),
										withDirectives(createVNode("input", {
											"onUpdate:modelValue": ($event) => unref(form).tanggal = $event,
											type: "date",
											class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
										}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).tanggal]]),
										unref(form).errors.tanggal ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(form).errors.tanggal), 1)) : createCommentVNode("", true)
									])]),
									createVNode("div", { class: "grid grid-cols-2 gap-4" }, [createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Metode Pembayaran "), createVNode("span", { class: "text-red-500" }, "*")]),
										withDirectives(createVNode("select", {
											"onUpdate:modelValue": ($event) => unref(form).metode = $event,
											class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
										}, [
											createVNode("option", { value: "tunai" }, "Tunai"),
											createVNode("option", { value: "transfer" }, "Transfer Bank"),
											createVNode("option", { value: "qris" }, "QRIS")
										], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).metode]]),
										unref(form).errors.metode ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(form).errors.metode), 1)) : createCommentVNode("", true)
									]), createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Kas Box Tujuan "), createVNode("span", { class: "text-red-500" }, "*")]),
										withDirectives(createVNode("select", {
											"onUpdate:modelValue": ($event) => unref(form).cashbox_id = $event,
											class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
										}, [createVNode("option", { value: "" }, "Pilih Kas Box"), (openBlock(true), createBlock(Fragment, null, renderList(__props.cashboxes, (box) => {
											return openBlock(), createBlock("option", {
												key: box.id,
												value: box.id
											}, toDisplayString(box.nama), 9, ["value"]);
										}), 128))], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).cashbox_id]]),
										unref(form).errors.cashbox_id ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(form).errors.cashbox_id), 1)) : createCommentVNode("", true)
									])]),
									createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Catatan"), withDirectives(createVNode("textarea", {
										"onUpdate:modelValue": ($event) => unref(form).catatan = $event,
										rows: "2",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).catatan]])]),
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
						createVNode(unref(Head), { title: "ZISWAF - Donasi" }),
						createVNode("div", { class: "mb-6 flex justify-between items-center" }, [createVNode("div", { class: "flex items-center gap-4" }, [createVNode(unref(Link), {
							href: _ctx.route("dashboard"),
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
						}, 8, ["href"]), createVNode("div", null, [createVNode("h1", { class: "text-2xl font-bold text-gray-800" }, "Donasi ZISWAF"), createVNode("p", { class: "text-gray-500 text-sm" }, "Kelola zakat, infaq, sedekah, dan wakaf")])]), createVNode("div", { class: "flex gap-2" }, [createVNode(unref(Link), {
							href: _ctx.route("ziswaf-categories.index"),
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
						}, [createVNode(unref(PlusIcon), { class: "w-5 h-5" }), createTextVNode(" Catat Donasi ")], 8, ["onClick"])])]),
						createVNode("div", { class: "bg-white rounded-xl shadow-sm p-4 mb-6" }, [createVNode("div", { class: "flex gap-3 flex-wrap" }, [
							createVNode("div", { class: "flex-1 min-w-[200px] relative" }, [createVNode(unref(MagnifyingGlassIcon), { class: "w-5 h-5 absolute left-3 top-2.5 text-gray-400" }), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => search.value = $event,
								onKeyup: withKeys(filterDonations, ["enter"]),
								type: "text",
								placeholder: "Cari nama donatur...",
								class: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
							}, null, 40, ["onUpdate:modelValue"]), [[vModelText, search.value]])]),
							withDirectives(createVNode("select", {
								"onUpdate:modelValue": ($event) => kategoriFilter.value = $event,
								onChange: filterDonations,
								class: "px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
							}, [createVNode("option", { value: "" }, "Semua Jenis"), (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (cat) => {
								return openBlock(), createBlock("option", {
									key: cat.id,
									value: cat.id
								}, toDisplayString(ziswafLabel(cat)), 9, ["value"]);
							}), 128))], 40, ["onUpdate:modelValue"]), [[vModelSelect, kategoriFilter.value]]),
							createVNode("button", {
								onClick: filterDonations,
								class: "px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition"
							}, "Filter")
						])]),
						createVNode("div", { class: "bg-white rounded-xl shadow-sm overflow-hidden" }, [createVNode("table", { class: "w-full text-sm" }, [createVNode("thead", { class: "bg-gray-50 text-gray-600 text-xs uppercase" }, [createVNode("tr", null, [
							createVNode("th", { class: "px-6 py-3 text-left" }, "No. Donasi"),
							createVNode("th", { class: "px-6 py-3 text-left" }, "Donatur"),
							createVNode("th", { class: "px-6 py-3 text-left" }, "Jenis"),
							createVNode("th", { class: "px-6 py-3 text-right" }, "Jumlah"),
							createVNode("th", { class: "px-6 py-3 text-center" }, "Metode"),
							createVNode("th", { class: "px-6 py-3 text-center" }, "Kas Box"),
							createVNode("th", { class: "px-6 py-3 text-center" }, "Tanggal"),
							createVNode("th", { class: "px-6 py-3 text-center" }, "Aksi")
						])]), createVNode("tbody", { class: "divide-y" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.donations.data, (item) => {
							return openBlock(), createBlock("tr", {
								key: item.id,
								class: "hover:bg-gray-50"
							}, [
								createVNode("td", { class: "px-6 py-4 font-mono text-xs" }, toDisplayString(item.no_donasi), 1),
								createVNode("td", { class: "px-6 py-4" }, [createVNode("div", { class: "font-medium" }, toDisplayString(item.is_anonymous ? "Anonim" : item.nama_donatur || "-"), 1), createVNode("div", { class: "text-xs text-gray-500" }, toDisplayString(item.no_hp_donatur || "-"), 1)]),
								createVNode("td", { class: "px-6 py-4" }, toDisplayString(ziswafLabel(item.category)), 1),
								createVNode("td", { class: "px-6 py-4 text-right font-medium" }, toDisplayString(formatCurrency(item.jumlah)), 1),
								createVNode("td", {
									class: "px-6 py-4 text-center",
									innerHTML: metodeBadge(item.metode)
								}, null, 8, ["innerHTML"]),
								createVNode("td", { class: "px-6 py-4 text-center text-xs" }, toDisplayString(item.cashbox?.nama || "-"), 1),
								createVNode("td", { class: "px-6 py-4 text-center text-xs" }, toDisplayString(new Date(item.tanggal).toLocaleDateString("id-ID")), 1),
								createVNode("td", { class: "px-6 py-4 text-center" }, [createVNode("button", {
									onClick: ($event) => deleteItem(item),
									class: "text-gray-400 hover:text-red-600 mx-1",
									title: "Hapus"
								}, [createVNode(unref(TrashIcon), { class: "w-5 h-5 inline" })], 8, ["onClick"])])
							]);
						}), 128)), !__props.donations.data.length ? (openBlock(), createBlock("tr", { key: 0 }, [createVNode("td", {
							colspan: "8",
							class: "px-6 py-12 text-center text-gray-500"
						}, "Tidak ada data donasi")])) : createCommentVNode("", true)])]), createVNode("div", { class: "px-6 py-4 border-t" }, [createVNode(_sfc_main$2, { links: __props.donations.links }, null, 8, ["links"])])]),
						createVNode(_sfc_main$1, {
							show: modalOpen.value,
							title: "Catat Donasi Baru",
							onClose: closeModal
						}, {
							default: withCtx(() => [createVNode("form", {
								onSubmit: withModifiers(submit, ["prevent"]),
								class: "space-y-4 max-h-[70vh] overflow-y-auto pr-2"
							}, [
								createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Jenis ZISWAF "), createVNode("span", { class: "text-red-500" }, "*")]),
									withDirectives(createVNode("select", {
										"onUpdate:modelValue": ($event) => unref(form).jenis_ziswaf_id = $event,
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, [createVNode("option", { value: "" }, "Pilih Jenis"), (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (cat) => {
										return openBlock(), createBlock("option", {
											key: cat.id,
											value: cat.id
										}, toDisplayString(ziswafLabel(cat)), 9, ["value"]);
									}), 128))], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).jenis_ziswaf_id]]),
									unref(form).errors.jenis_ziswaf_id ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(form).errors.jenis_ziswaf_id), 1)) : createCommentVNode("", true)
								]),
								createVNode("div", { class: "grid grid-cols-2 gap-4" }, [createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Nama Donatur"), withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => unref(form).nama_donatur = $event,
									type: "text",
									class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
									placeholder: "Kosongkan jika anonim"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).nama_donatur]])]), createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "No. HP"), withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => unref(form).no_hp_donatur = $event,
									type: "text",
									class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).no_hp_donatur]])])]),
								createVNode("label", { class: "flex items-center gap-2" }, [withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => unref(form).is_anonymous = $event,
									type: "checkbox",
									class: "rounded border-gray-300 text-primary focus:ring-primary"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelCheckbox, unref(form).is_anonymous]]), createVNode("span", { class: "text-sm text-gray-700" }, "Donasi Anonim (nama tidak ditampilkan)")]),
								createVNode("div", { class: "grid grid-cols-2 gap-4" }, [createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Jumlah (Rp) "), createVNode("span", { class: "text-red-500" }, "*")]),
									withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).jumlah = $event,
										type: "number",
										min: "0",
										step: "0.01",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).jumlah]]),
									unref(form).errors.jumlah ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(form).errors.jumlah), 1)) : createCommentVNode("", true)
								]), createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Tanggal "), createVNode("span", { class: "text-red-500" }, "*")]),
									withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).tanggal = $event,
										type: "date",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).tanggal]]),
									unref(form).errors.tanggal ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(form).errors.tanggal), 1)) : createCommentVNode("", true)
								])]),
								createVNode("div", { class: "grid grid-cols-2 gap-4" }, [createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Metode Pembayaran "), createVNode("span", { class: "text-red-500" }, "*")]),
									withDirectives(createVNode("select", {
										"onUpdate:modelValue": ($event) => unref(form).metode = $event,
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, [
										createVNode("option", { value: "tunai" }, "Tunai"),
										createVNode("option", { value: "transfer" }, "Transfer Bank"),
										createVNode("option", { value: "qris" }, "QRIS")
									], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).metode]]),
									unref(form).errors.metode ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(form).errors.metode), 1)) : createCommentVNode("", true)
								]), createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Kas Box Tujuan "), createVNode("span", { class: "text-red-500" }, "*")]),
									withDirectives(createVNode("select", {
										"onUpdate:modelValue": ($event) => unref(form).cashbox_id = $event,
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, [createVNode("option", { value: "" }, "Pilih Kas Box"), (openBlock(true), createBlock(Fragment, null, renderList(__props.cashboxes, (box) => {
										return openBlock(), createBlock("option", {
											key: box.id,
											value: box.id
										}, toDisplayString(box.nama), 9, ["value"]);
									}), 128))], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).cashbox_id]]),
									unref(form).errors.cashbox_id ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(form).errors.cashbox_id), 1)) : createCommentVNode("", true)
								])]),
								createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Catatan"), withDirectives(createVNode("textarea", {
									"onUpdate:modelValue": ($event) => unref(form).catatan = $event,
									rows: "2",
									class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).catatan]])]),
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
						}, 8, ["show"])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Ziswaf/Donations/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
