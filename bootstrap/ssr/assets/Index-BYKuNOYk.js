import { t as _sfc_main$1 } from "./Modal-CLSC5svO.js";
import { t as AdminLayout_default } from "./AdminLayout-JKKJHCcy.js";
import { t as _sfc_main$2 } from "./Pagination-DiptkPBm.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelCheckbox, vModelSelect, vModelText, withCtx, withDirectives, withKeys, withModifiers } from "vue";
import { Head, router, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { MagnifyingGlassIcon, PencilIcon, PlusIcon, TrashIcon } from "@heroicons/vue/24/outline";
//#region resources/js/Pages/Activities/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: {
		activities: Object,
		filters: Object
	},
	setup(__props) {
		const props = __props;
		const search = ref(props.filters?.search || "");
		const modalOpen = ref(false);
		const editMode = ref(false);
		const editingItem = ref(null);
		const form = useForm({
			nama: "",
			deskripsi: "",
			kategori: "pengajian",
			tanggal_mulai: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
			tanggal_selesai: "",
			lokasi: "",
			penanggung_jawab: "",
			anggaran: "",
			poster: null,
			status: "dijadwalkan",
			is_public: true
		});
		const categories = [
			{
				value: "pengajian",
				label: "Pengajian"
			},
			{
				value: "rapat",
				label: "Rapat"
			},
			{
				value: "phbi",
				label: "PHBI"
			},
			{
				value: "kajian_akbar",
				label: "Kajian Akbar"
			},
			{
				value: "sosial",
				label: "Sosial"
			},
			{
				value: "olahraga",
				label: "Olahraga"
			},
			{
				value: "lainnya",
				label: "Lainnya"
			}
		];
		const statusOptions = [
			{
				value: "draft",
				label: "Draft"
			},
			{
				value: "dijadwalkan",
				label: "Dijadwalkan"
			},
			{
				value: "berlangsung",
				label: "Berlangsung"
			},
			{
				value: "selesai",
				label: "Selesai"
			},
			{
				value: "dibatalkan",
				label: "Dibatalkan"
			}
		];
		const openCreate = () => {
			editMode.value = false;
			editingItem.value = null;
			form.reset();
			form.tanggal_mulai = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
			form.kategori = "pengajian";
			form.status = "dijadwalkan";
			modalOpen.value = true;
		};
		const openEdit = (act) => {
			editMode.value = true;
			editingItem.value = act;
			form.nama = act.nama;
			form.deskripsi = act.deskripsi;
			form.kategori = act.kategori;
			form.tanggal_mulai = act.tanggal_mulai;
			form.tanggal_selesai = act.tanggal_selesai;
			form.lokasi = act.lokasi;
			form.penanggung_jawab = act.penanggung_jawab;
			form.anggaran = act.anggaran;
			form.status = act.status;
			form.is_public = act.is_public;
			modalOpen.value = true;
		};
		const submit = () => {
			if (editMode.value) form.put(route("activities.update", editingItem.value.id), { onSuccess: () => {
				modalOpen.value = false;
				form.reset();
			} });
			else form.post(route("activities.store"), { onSuccess: () => {
				modalOpen.value = false;
				form.reset();
			} });
		};
		const deleteItem = (act) => {
			if (confirm(`Hapus kegiatan "${act.nama}"?`)) router.delete(route("activities.destroy", act.id));
		};
		const applyFilter = () => {
			router.get(route("activities.index"), {
				search: search.value,
				status: props.filters?.status
			}, {
				preserveState: true,
				preserveScroll: true
			});
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(AdminLayout_default, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "Kegiatan" }, null, _parent, _scopeId));
						_push(`<div class="mb-6 flex justify-between items-center"${_scopeId}><div${_scopeId}><h1 class="text-2xl font-bold text-gray-800"${_scopeId}>Manajemen Kegiatan</h1><p class="text-gray-500 text-sm"${_scopeId}>Kelola kegiatan dan acara masjid</p></div><button class="bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg flex items-center gap-2 transition shadow-md"${_scopeId}>`);
						_push(ssrRenderComponent(unref(PlusIcon), { class: "w-5 h-5" }, null, _parent, _scopeId));
						_push(` Tambah Kegiatan </button></div><div class="bg-white rounded-xl shadow-sm p-4 mb-6"${_scopeId}><div class="flex flex-col md:flex-row gap-3"${_scopeId}><div class="flex-1 relative"${_scopeId}>`);
						_push(ssrRenderComponent(unref(MagnifyingGlassIcon), { class: "w-5 h-5 absolute left-3 top-2.5 text-gray-400" }, null, _parent, _scopeId));
						_push(`<input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari kegiatan..." class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"${_scopeId}></div><select class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(_ctx.$parent.status) ? ssrLooseContain(_ctx.$parent.status, "") : ssrLooseEqual(_ctx.$parent.status, "")) ? " selected" : ""}${_scopeId}>Semua Status</option><!--[-->`);
						ssrRenderList(statusOptions, (opt) => {
							_push(`<option${ssrRenderAttr("value", opt.value)}${ssrIncludeBooleanAttr(Array.isArray(_ctx.$parent.status) ? ssrLooseContain(_ctx.$parent.status, opt.value) : ssrLooseEqual(_ctx.$parent.status, opt.value)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(opt.label)}</option>`);
						});
						_push(`<!--]--></select><button class="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-light transition"${_scopeId}>Cari</button><button class="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition"${_scopeId}>Reset</button></div></div><div class="bg-white rounded-xl shadow-sm overflow-hidden"${_scopeId}><div class="overflow-x-auto"${_scopeId}><table class="w-full text-left border-collapse text-sm"${_scopeId}><thead class="bg-gray-50 text-gray-600 text-xs uppercase tracking-wider"${_scopeId}><tr${_scopeId}><th class="px-6 py-4 font-semibold"${_scopeId}>Nama Kegiatan</th><th class="px-6 py-4 font-semibold"${_scopeId}>Kategori</th><th class="px-6 py-4 font-semibold"${_scopeId}>Tanggal</th><th class="px-6 py-4 font-semibold"${_scopeId}>Lokasi</th><th class="px-6 py-4 font-semibold"${_scopeId}>Penanggung Jawab</th><th class="px-6 py-4 font-semibold text-center"${_scopeId}>Status</th><th class="px-6 py-4 font-semibold text-center"${_scopeId}>Aksi</th></tr></thead><tbody class="divide-y divide-gray-100"${_scopeId}><!--[-->`);
						ssrRenderList(__props.activities.data, (act) => {
							_push(`<tr class="hover:bg-gray-50 transition"${_scopeId}><td class="px-6 py-4"${_scopeId}><div class="font-semibold text-gray-800"${_scopeId}>${ssrInterpolate(act.nama)}</div>`);
							if (act.deskripsi) _push(`<div class="text-xs text-gray-500 truncate max-w-xs"${_scopeId}>${ssrInterpolate(act.deskripsi)}</div>`);
							else _push(`<!---->`);
							_push(`</td><td class="px-6 py-4"${_scopeId}><span class="px-2 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 capitalize"${_scopeId}>${ssrInterpolate(act.kategori.replace("_", " "))}</span></td><td class="px-6 py-4 text-gray-700"${_scopeId}><div class="text-sm"${_scopeId}>${ssrInterpolate(act.tanggal_mulai)}</div>`);
							if (act.tanggal_selesai) _push(`<div class="text-xs text-gray-500"${_scopeId}>s/d ${ssrInterpolate(act.tanggal_selesai)}</div>`);
							else _push(`<!---->`);
							_push(`</td><td class="px-6 py-4 text-gray-700"${_scopeId}>${ssrInterpolate(act.lokasi)}</td><td class="px-6 py-4 text-gray-700"${_scopeId}>${ssrInterpolate(act.penanggung_jawab || "-")}</td><td class="px-6 py-4 text-center"${_scopeId}><span class="${ssrRenderClass([{
								"bg-gray-100 text-gray-700": act.status === "draft",
								"bg-blue-100 text-blue-700": act.status === "dijadwalkan",
								"bg-green-100 text-green-700": act.status === "berlangsung",
								"bg-purple-100 text-purple-700": act.status === "selesai",
								"bg-red-100 text-red-700": act.status === "dibatalkan"
							}, "px-2 py-1 rounded-full text-xs font-semibold capitalize"])}"${_scopeId}>${ssrInterpolate(act.status)}</span></td><td class="px-6 py-4 text-center"${_scopeId}><div class="flex justify-center gap-2"${_scopeId}><button class="text-gray-400 hover:text-primary" title="Edit"${_scopeId}>`);
							_push(ssrRenderComponent(unref(PencilIcon), { class: "w-5 h-5" }, null, _parent, _scopeId));
							_push(`</button><button class="text-gray-400 hover:text-red-600" title="Hapus"${_scopeId}>`);
							_push(ssrRenderComponent(unref(TrashIcon), { class: "w-5 h-5" }, null, _parent, _scopeId));
							_push(`</button></div></td></tr>`);
						});
						_push(`<!--]-->`);
						if (__props.activities.data.length === 0) _push(`<tr${_scopeId}><td colspan="7" class="px-6 py-12 text-center text-gray-500"${_scopeId}>Tidak ada data kegiatan</td></tr>`);
						else _push(`<!---->`);
						_push(`</tbody></table></div><div class="px-6 py-4 border-t"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$2, { links: __props.activities.links }, null, _parent, _scopeId));
						_push(`</div></div>`);
						_push(ssrRenderComponent(_sfc_main$1, {
							show: modalOpen.value,
							title: editMode.value ? "Edit Kegiatan" : "Tambah Kegiatan Baru",
							onClose: ($event) => modalOpen.value = false
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<form class="space-y-4"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Nama Kegiatan</label><input${ssrRenderAttr("value", unref(form).nama)} type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Contoh: Pengajian Rutin Mingguan"${_scopeId}>`);
									if (unref(form).errors.nama) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.nama)}</span>`);
									else _push(`<!---->`);
									_push(`</div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Deskripsi</label><textarea rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Deskripsi kegiatan..."${_scopeId}>${ssrInterpolate(unref(form).deskripsi)}</textarea></div><div class="grid grid-cols-2 gap-4"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Kategori</label><select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}><!--[-->`);
									ssrRenderList(categories, (cat) => {
										_push(`<option${ssrRenderAttr("value", cat.value)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).kategori) ? ssrLooseContain(unref(form).kategori, cat.value) : ssrLooseEqual(unref(form).kategori, cat.value)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(cat.label)}</option>`);
									});
									_push(`<!--]--></select></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Status</label><select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}><!--[-->`);
									ssrRenderList(statusOptions, (opt) => {
										_push(`<option${ssrRenderAttr("value", opt.value)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, opt.value) : ssrLooseEqual(unref(form).status, opt.value)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(opt.label)}</option>`);
									});
									_push(`<!--]--></select></div></div><div class="grid grid-cols-2 gap-4"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Tanggal Mulai</label><input${ssrRenderAttr("value", unref(form).tanggal_mulai)} type="date" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}>`);
									if (unref(form).errors.tanggal_mulai) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.tanggal_mulai)}</span>`);
									else _push(`<!---->`);
									_push(`</div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Tanggal Selesai (opsional)</label><input${ssrRenderAttr("value", unref(form).tanggal_selesai)} type="date" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}></div></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Lokasi</label><input${ssrRenderAttr("value", unref(form).lokasi)} type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Contoh: Masjid Baitul Hikmah"${_scopeId}>`);
									if (unref(form).errors.lokasi) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.lokasi)}</span>`);
									else _push(`<!---->`);
									_push(`</div><div class="grid grid-cols-2 gap-4"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Penanggung Jawab</label><input${ssrRenderAttr("value", unref(form).penanggung_jawab)} type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Anggaran (Rp)</label><input${ssrRenderAttr("value", unref(form).anggaran)} type="number" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="0"${_scopeId}></div></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Poster (opsional)</label><input type="file" class="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary-light"${_scopeId}>`);
									if (unref(form).errors.poster) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.poster)}</span>`);
									else _push(`<!---->`);
									_push(`</div><div class="flex items-center gap-2"${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(unref(form).is_public) ? ssrLooseContain(unref(form).is_public, null) : unref(form).is_public) ? " checked" : ""} type="checkbox" id="is_public" class="text-primary focus:ring-primary"${_scopeId}><label for="is_public" class="text-sm text-gray-700"${_scopeId}>Tampilkan di website publik</label></div><div class="flex justify-end gap-3 pt-4 border-t"${_scopeId}><button type="button" class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"${_scopeId}>Batal</button><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="px-4 py-2 bg-primary hover:bg-primary-light text-white rounded-lg transition shadow-md disabled:opacity-50"${_scopeId}>${ssrInterpolate(unref(form).processing ? "Menyimpan..." : "Simpan")}</button></div></form>`);
								} else return [createVNode("form", {
									onSubmit: withModifiers(submit, ["prevent"]),
									class: "space-y-4"
								}, [
									createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Nama Kegiatan"),
										withDirectives(createVNode("input", {
											"onUpdate:modelValue": ($event) => unref(form).nama = $event,
											type: "text",
											class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
											placeholder: "Contoh: Pengajian Rutin Mingguan"
										}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).nama]]),
										unref(form).errors.nama ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(form).errors.nama), 1)) : createCommentVNode("", true)
									]),
									createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Deskripsi"), withDirectives(createVNode("textarea", {
										"onUpdate:modelValue": ($event) => unref(form).deskripsi = $event,
										rows: "3",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
										placeholder: "Deskripsi kegiatan..."
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).deskripsi]])]),
									createVNode("div", { class: "grid grid-cols-2 gap-4" }, [createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Kategori"), withDirectives(createVNode("select", {
										"onUpdate:modelValue": ($event) => unref(form).kategori = $event,
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, [(openBlock(), createBlock(Fragment, null, renderList(categories, (cat) => {
										return createVNode("option", {
											key: cat.value,
											value: cat.value
										}, toDisplayString(cat.label), 9, ["value"]);
									}), 64))], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).kategori]])]), createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Status"), withDirectives(createVNode("select", {
										"onUpdate:modelValue": ($event) => unref(form).status = $event,
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, [(openBlock(), createBlock(Fragment, null, renderList(statusOptions, (opt) => {
										return createVNode("option", {
											key: opt.value,
											value: opt.value
										}, toDisplayString(opt.label), 9, ["value"]);
									}), 64))], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).status]])])]),
									createVNode("div", { class: "grid grid-cols-2 gap-4" }, [createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Tanggal Mulai"),
										withDirectives(createVNode("input", {
											"onUpdate:modelValue": ($event) => unref(form).tanggal_mulai = $event,
											type: "date",
											class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
										}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).tanggal_mulai]]),
										unref(form).errors.tanggal_mulai ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(form).errors.tanggal_mulai), 1)) : createCommentVNode("", true)
									]), createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Tanggal Selesai (opsional)"), withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).tanggal_selesai = $event,
										type: "date",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).tanggal_selesai]])])]),
									createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Lokasi"),
										withDirectives(createVNode("input", {
											"onUpdate:modelValue": ($event) => unref(form).lokasi = $event,
											type: "text",
											class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
											placeholder: "Contoh: Masjid Baitul Hikmah"
										}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).lokasi]]),
										unref(form).errors.lokasi ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(form).errors.lokasi), 1)) : createCommentVNode("", true)
									]),
									createVNode("div", { class: "grid grid-cols-2 gap-4" }, [createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Penanggung Jawab"), withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).penanggung_jawab = $event,
										type: "text",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).penanggung_jawab]])]), createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Anggaran (Rp)"), withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).anggaran = $event,
										type: "number",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
										placeholder: "0"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).anggaran]])])]),
									createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Poster (opsional)"),
										createVNode("input", {
											type: "file",
											onInput: ($event) => unref(form).poster = $event.target.files[0],
											class: "w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary-light"
										}, null, 40, ["onInput"]),
										unref(form).errors.poster ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(form).errors.poster), 1)) : createCommentVNode("", true)
									]),
									createVNode("div", { class: "flex items-center gap-2" }, [withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).is_public = $event,
										type: "checkbox",
										id: "is_public",
										class: "text-primary focus:ring-primary"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelCheckbox, unref(form).is_public]]), createVNode("label", {
										for: "is_public",
										class: "text-sm text-gray-700"
									}, "Tampilkan di website publik")]),
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
						createVNode(unref(Head), { title: "Kegiatan" }),
						createVNode("div", { class: "mb-6 flex justify-between items-center" }, [createVNode("div", null, [createVNode("h1", { class: "text-2xl font-bold text-gray-800" }, "Manajemen Kegiatan"), createVNode("p", { class: "text-gray-500 text-sm" }, "Kelola kegiatan dan acara masjid")]), createVNode("button", {
							onClick: openCreate,
							class: "bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg flex items-center gap-2 transition shadow-md"
						}, [createVNode(unref(PlusIcon), { class: "w-5 h-5" }), createTextVNode(" Tambah Kegiatan ")])]),
						createVNode("div", { class: "bg-white rounded-xl shadow-sm p-4 mb-6" }, [createVNode("div", { class: "flex flex-col md:flex-row gap-3" }, [
							createVNode("div", { class: "flex-1 relative" }, [createVNode(unref(MagnifyingGlassIcon), { class: "w-5 h-5 absolute left-3 top-2.5 text-gray-400" }), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => search.value = $event,
								onKeyup: withKeys(applyFilter, ["enter"]),
								type: "text",
								placeholder: "Cari kegiatan...",
								class: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
							}, null, 40, ["onUpdate:modelValue"]), [[vModelText, search.value]])]),
							withDirectives(createVNode("select", {
								"onUpdate:modelValue": ($event) => _ctx.$parent.status = $event,
								onChange: applyFilter,
								class: "px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
							}, [createVNode("option", { value: "" }, "Semua Status"), (openBlock(), createBlock(Fragment, null, renderList(statusOptions, (opt) => {
								return createVNode("option", {
									key: opt.value,
									value: opt.value
								}, toDisplayString(opt.label), 9, ["value"]);
							}), 64))], 40, ["onUpdate:modelValue"]), [[vModelSelect, _ctx.$parent.status]]),
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
						createVNode("div", { class: "bg-white rounded-xl shadow-sm overflow-hidden" }, [createVNode("div", { class: "overflow-x-auto" }, [createVNode("table", { class: "w-full text-left border-collapse text-sm" }, [createVNode("thead", { class: "bg-gray-50 text-gray-600 text-xs uppercase tracking-wider" }, [createVNode("tr", null, [
							createVNode("th", { class: "px-6 py-4 font-semibold" }, "Nama Kegiatan"),
							createVNode("th", { class: "px-6 py-4 font-semibold" }, "Kategori"),
							createVNode("th", { class: "px-6 py-4 font-semibold" }, "Tanggal"),
							createVNode("th", { class: "px-6 py-4 font-semibold" }, "Lokasi"),
							createVNode("th", { class: "px-6 py-4 font-semibold" }, "Penanggung Jawab"),
							createVNode("th", { class: "px-6 py-4 font-semibold text-center" }, "Status"),
							createVNode("th", { class: "px-6 py-4 font-semibold text-center" }, "Aksi")
						])]), createVNode("tbody", { class: "divide-y divide-gray-100" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.activities.data, (act) => {
							return openBlock(), createBlock("tr", {
								key: act.id,
								class: "hover:bg-gray-50 transition"
							}, [
								createVNode("td", { class: "px-6 py-4" }, [createVNode("div", { class: "font-semibold text-gray-800" }, toDisplayString(act.nama), 1), act.deskripsi ? (openBlock(), createBlock("div", {
									key: 0,
									class: "text-xs text-gray-500 truncate max-w-xs"
								}, toDisplayString(act.deskripsi), 1)) : createCommentVNode("", true)]),
								createVNode("td", { class: "px-6 py-4" }, [createVNode("span", { class: "px-2 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 capitalize" }, toDisplayString(act.kategori.replace("_", " ")), 1)]),
								createVNode("td", { class: "px-6 py-4 text-gray-700" }, [createVNode("div", { class: "text-sm" }, toDisplayString(act.tanggal_mulai), 1), act.tanggal_selesai ? (openBlock(), createBlock("div", {
									key: 0,
									class: "text-xs text-gray-500"
								}, "s/d " + toDisplayString(act.tanggal_selesai), 1)) : createCommentVNode("", true)]),
								createVNode("td", { class: "px-6 py-4 text-gray-700" }, toDisplayString(act.lokasi), 1),
								createVNode("td", { class: "px-6 py-4 text-gray-700" }, toDisplayString(act.penanggung_jawab || "-"), 1),
								createVNode("td", { class: "px-6 py-4 text-center" }, [createVNode("span", { class: ["px-2 py-1 rounded-full text-xs font-semibold capitalize", {
									"bg-gray-100 text-gray-700": act.status === "draft",
									"bg-blue-100 text-blue-700": act.status === "dijadwalkan",
									"bg-green-100 text-green-700": act.status === "berlangsung",
									"bg-purple-100 text-purple-700": act.status === "selesai",
									"bg-red-100 text-red-700": act.status === "dibatalkan"
								}] }, toDisplayString(act.status), 3)]),
								createVNode("td", { class: "px-6 py-4 text-center" }, [createVNode("div", { class: "flex justify-center gap-2" }, [createVNode("button", {
									onClick: ($event) => openEdit(act),
									class: "text-gray-400 hover:text-primary",
									title: "Edit"
								}, [createVNode(unref(PencilIcon), { class: "w-5 h-5" })], 8, ["onClick"]), createVNode("button", {
									onClick: ($event) => deleteItem(act),
									class: "text-gray-400 hover:text-red-600",
									title: "Hapus"
								}, [createVNode(unref(TrashIcon), { class: "w-5 h-5" })], 8, ["onClick"])])])
							]);
						}), 128)), __props.activities.data.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [createVNode("td", {
							colspan: "7",
							class: "px-6 py-12 text-center text-gray-500"
						}, "Tidak ada data kegiatan")])) : createCommentVNode("", true)])])]), createVNode("div", { class: "px-6 py-4 border-t" }, [createVNode(_sfc_main$2, { links: __props.activities.links }, null, 8, ["links"])])]),
						createVNode(_sfc_main$1, {
							show: modalOpen.value,
							title: editMode.value ? "Edit Kegiatan" : "Tambah Kegiatan Baru",
							onClose: ($event) => modalOpen.value = false
						}, {
							default: withCtx(() => [createVNode("form", {
								onSubmit: withModifiers(submit, ["prevent"]),
								class: "space-y-4"
							}, [
								createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Nama Kegiatan"),
									withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).nama = $event,
										type: "text",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
										placeholder: "Contoh: Pengajian Rutin Mingguan"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).nama]]),
									unref(form).errors.nama ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(form).errors.nama), 1)) : createCommentVNode("", true)
								]),
								createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Deskripsi"), withDirectives(createVNode("textarea", {
									"onUpdate:modelValue": ($event) => unref(form).deskripsi = $event,
									rows: "3",
									class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
									placeholder: "Deskripsi kegiatan..."
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).deskripsi]])]),
								createVNode("div", { class: "grid grid-cols-2 gap-4" }, [createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Kategori"), withDirectives(createVNode("select", {
									"onUpdate:modelValue": ($event) => unref(form).kategori = $event,
									class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
								}, [(openBlock(), createBlock(Fragment, null, renderList(categories, (cat) => {
									return createVNode("option", {
										key: cat.value,
										value: cat.value
									}, toDisplayString(cat.label), 9, ["value"]);
								}), 64))], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).kategori]])]), createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Status"), withDirectives(createVNode("select", {
									"onUpdate:modelValue": ($event) => unref(form).status = $event,
									class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
								}, [(openBlock(), createBlock(Fragment, null, renderList(statusOptions, (opt) => {
									return createVNode("option", {
										key: opt.value,
										value: opt.value
									}, toDisplayString(opt.label), 9, ["value"]);
								}), 64))], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).status]])])]),
								createVNode("div", { class: "grid grid-cols-2 gap-4" }, [createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Tanggal Mulai"),
									withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).tanggal_mulai = $event,
										type: "date",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).tanggal_mulai]]),
									unref(form).errors.tanggal_mulai ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(form).errors.tanggal_mulai), 1)) : createCommentVNode("", true)
								]), createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Tanggal Selesai (opsional)"), withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => unref(form).tanggal_selesai = $event,
									type: "date",
									class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).tanggal_selesai]])])]),
								createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Lokasi"),
									withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).lokasi = $event,
										type: "text",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
										placeholder: "Contoh: Masjid Baitul Hikmah"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).lokasi]]),
									unref(form).errors.lokasi ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(form).errors.lokasi), 1)) : createCommentVNode("", true)
								]),
								createVNode("div", { class: "grid grid-cols-2 gap-4" }, [createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Penanggung Jawab"), withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => unref(form).penanggung_jawab = $event,
									type: "text",
									class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).penanggung_jawab]])]), createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Anggaran (Rp)"), withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => unref(form).anggaran = $event,
									type: "number",
									class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
									placeholder: "0"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).anggaran]])])]),
								createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Poster (opsional)"),
									createVNode("input", {
										type: "file",
										onInput: ($event) => unref(form).poster = $event.target.files[0],
										class: "w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary-light"
									}, null, 40, ["onInput"]),
									unref(form).errors.poster ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(form).errors.poster), 1)) : createCommentVNode("", true)
								]),
								createVNode("div", { class: "flex items-center gap-2" }, [withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => unref(form).is_public = $event,
									type: "checkbox",
									id: "is_public",
									class: "text-primary focus:ring-primary"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelCheckbox, unref(form).is_public]]), createVNode("label", {
									for: "is_public",
									class: "text-sm text-gray-700"
								}, "Tampilkan di website publik")]),
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Activities/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
