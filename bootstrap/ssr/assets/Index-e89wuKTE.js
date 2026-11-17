import { t as _sfc_main$1 } from "./Modal-CLSC5svO.js";
import { t as AdminLayout_default } from "./AdminLayout-JKKJHCcy.js";
import { t as _sfc_main$2 } from "./Pagination-DiptkPBm.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelSelect, vModelText, vShow, withCtx, withDirectives, withKeys, withModifiers } from "vue";
import { Head, router, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { CalendarIcon, MagnifyingGlassIcon, PencilIcon, PlusIcon, TrashIcon, UserGroupIcon } from "@heroicons/vue/24/outline";
//#region resources/js/Pages/Jumah/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: {
		items: Object,
		schedules: Object,
		khatibs: Array,
		filters: Object
	},
	setup(__props) {
		const search = ref(__props.filters?.search || "");
		const modalOpen = ref(false);
		const scheduleModalOpen = ref(false);
		const editingItem = ref(null);
		const activeTab = ref("khatib");
		const form = useForm({
			nama: "",
			gelar: "",
			no_hp: "",
			spesialisasi: "",
			tipe: "internal"
		});
		const scheduleForm = useForm({
			tanggal_jumat: "",
			khatib_id: "",
			imam_id: "",
			muadzin_id: "",
			tema: ""
		});
		const openCreateModal = () => {
			form.reset();
			form.tipe = "internal";
			editingItem.value = null;
			modalOpen.value = true;
		};
		const openEdit = (item) => {
			editingItem.value = item;
			form.nama = item.nama;
			form.gelar = item.gelar;
			form.no_hp = item.no_hp;
			form.spesialisasi = item.spesialisasi;
			form.tipe = item.tipe;
			modalOpen.value = true;
		};
		const submitKhatib = () => {
			if (editingItem.value) form.put(route("jumah.khatib.update", editingItem.value.id), { onSuccess: () => {
				modalOpen.value = false;
				form.reset();
				editingItem.value = null;
			} });
			else form.post(route("jumah.khatib.store"), { onSuccess: () => {
				modalOpen.value = false;
				form.reset();
			} });
		};
		const submitSchedule = () => {
			scheduleForm.post(route("jumah.schedule.store"), { onSuccess: () => {
				scheduleModalOpen.value = false;
				scheduleForm.reset();
			} });
		};
		const deleteKhatib = (item) => {
			if (confirm(`Hapus ${item.nama}?`)) router.delete(route("jumah.khatib.destroy", item.id));
		};
		const deleteSchedule = (item) => {
			if (confirm(`Hapus jadwal tanggal ${item.tanggal_jumat}?`)) router.delete(route("jumah.schedule.destroy", item.id));
		};
		const doSearch = () => {
			router.get(route("jumah.index"), { search: search.value }, { preserveState: true });
		};
		const openScheduleModal = () => {
			scheduleForm.reset();
			scheduleModalOpen.value = true;
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(AdminLayout_default, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "Jadwal Jumat" }, null, _parent, _scopeId));
						_push(`<div class="mb-6"${_scopeId}><h1 class="text-2xl font-bold text-gray-800"${_scopeId}>Jadwal Jumat</h1><p class="text-gray-500 text-sm"${_scopeId}>Manajemen khatib dan jadwal shalat Jumat</p></div><div class="mb-6 border-b border-gray-200"${_scopeId}><nav class="-mb-px flex space-x-8"${_scopeId}><button class="${ssrRenderClass(["py-4 px-1 border-b-2 font-medium text-sm", activeTab.value === "khatib" ? "border-primary text-primary" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"])}"${_scopeId}>`);
						_push(ssrRenderComponent(unref(UserGroupIcon), { class: "w-5 h-5 inline mr-2" }, null, _parent, _scopeId));
						_push(` Daftar Khatib </button><button class="${ssrRenderClass(["py-4 px-1 border-b-2 font-medium text-sm", activeTab.value === "schedule" ? "border-primary text-primary" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"])}"${_scopeId}>`);
						_push(ssrRenderComponent(unref(CalendarIcon), { class: "w-5 h-5 inline mr-2" }, null, _parent, _scopeId));
						_push(` Jadwal Jumat </button></nav></div><div style="${ssrRenderStyle(activeTab.value === "khatib" ? null : { display: "none" })}"${_scopeId}><div class="mb-6 flex justify-between items-center"${_scopeId}><div${_scopeId}><h2 class="text-lg font-semibold text-gray-700"${_scopeId}>Data Khatib</h2><p class="text-gray-500 text-sm"${_scopeId}>Kelola data khatib internal dan tamu</p></div><button class="bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg flex items-center gap-2 transition shadow-md"${_scopeId}>`);
						_push(ssrRenderComponent(unref(PlusIcon), { class: "w-5 h-5" }, null, _parent, _scopeId));
						_push(` Tambah Khatib </button></div><div class="bg-white rounded-xl shadow-sm p-4 mb-6"${_scopeId}><div class="flex gap-3"${_scopeId}><div class="flex-1 relative"${_scopeId}>`);
						_push(ssrRenderComponent(unref(MagnifyingGlassIcon), { class: "w-5 h-5 absolute left-3 top-2.5 text-gray-400" }, null, _parent, _scopeId));
						_push(`<input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari khatib..." class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}></div><button class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-light"${_scopeId}>Cari</button></div></div><div class="bg-white rounded-xl shadow-sm overflow-hidden"${_scopeId}><table class="w-full text-sm"${_scopeId}><thead class="bg-gray-50 text-gray-600 text-xs uppercase"${_scopeId}><tr${_scopeId}><th class="px-6 py-3 text-left"${_scopeId}>Nama</th><th class="px-6 py-3 text-left"${_scopeId}>Gelar</th><th class="px-6 py-3 text-left"${_scopeId}>Tipe</th><th class="px-6 py-3 text-left"${_scopeId}>Spesialisasi</th><th class="px-6 py-3 text-center"${_scopeId}>Aksi</th></tr></thead><tbody class="divide-y"${_scopeId}><!--[-->`);
						ssrRenderList(__props.items.data, (item) => {
							_push(`<tr class="hover:bg-gray-50"${_scopeId}><td class="px-6 py-4"${_scopeId}>${ssrInterpolate(item.nama)}</td><td class="px-6 py-4"${_scopeId}>${ssrInterpolate(item.gelar || "-")}</td><td class="px-6 py-4"${_scopeId}><span class="${ssrRenderClass([item.tipe === "internal" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800", "px-2 py-1 text-xs rounded-full"])}"${_scopeId}>${ssrInterpolate(item.tipe)}</span></td><td class="px-6 py-4"${_scopeId}>${ssrInterpolate(item.spesialisasi || "-")}</td><td class="px-6 py-4 text-center"${_scopeId}><button class="text-gray-400 hover:text-primary mx-1"${_scopeId}>`);
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
						_push(`</div></div></div><div style="${ssrRenderStyle(activeTab.value === "schedule" ? null : { display: "none" })}"${_scopeId}><div class="mb-6 flex justify-between items-center"${_scopeId}><div${_scopeId}><h2 class="text-lg font-semibold text-gray-700"${_scopeId}>Jadwal Shalat Jumat</h2><p class="text-gray-500 text-sm"${_scopeId}>Atur jadwal khatib, imam, dan muadzin</p></div><button class="bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg flex items-center gap-2 transition shadow-md"${_scopeId}>`);
						_push(ssrRenderComponent(unref(PlusIcon), { class: "w-5 h-5" }, null, _parent, _scopeId));
						_push(` Tambah Jadwal </button></div><div class="bg-white rounded-xl shadow-sm overflow-hidden"${_scopeId}><table class="w-full text-sm"${_scopeId}><thead class="bg-gray-50 text-gray-600 text-xs uppercase"${_scopeId}><tr${_scopeId}><th class="px-6 py-3 text-left"${_scopeId}>Tanggal</th><th class="px-6 py-3 text-left"${_scopeId}>Khatib</th><th class="px-6 py-3 text-left"${_scopeId}>Imam</th><th class="px-6 py-3 text-left"${_scopeId}>Muadzin</th><th class="px-6 py-3 text-left"${_scopeId}>Tema</th><th class="px-6 py-3 text-center"${_scopeId}>Aksi</th></tr></thead><tbody class="divide-y"${_scopeId}><!--[-->`);
						ssrRenderList(__props.schedules.data, (item) => {
							_push(`<tr class="hover:bg-gray-50"${_scopeId}><td class="px-6 py-4"${_scopeId}>${ssrInterpolate(new Date(item.tanggal_jumat).toLocaleDateString("id-ID", {
								weekday: "long",
								year: "numeric",
								month: "long",
								day: "numeric"
							}))}</td><td class="px-6 py-4"${_scopeId}>${ssrInterpolate(item.khatib?.nama || "-")}</td><td class="px-6 py-4"${_scopeId}>${ssrInterpolate(item.imam?.nama || "-")}</td><td class="px-6 py-4"${_scopeId}>${ssrInterpolate(item.muadzin?.nama || "-")}</td><td class="px-6 py-4"${_scopeId}>${ssrInterpolate(item.tema || "-")}</td><td class="px-6 py-4 text-center"${_scopeId}><button class="text-gray-400 hover:text-red-600 mx-1"${_scopeId}>`);
							_push(ssrRenderComponent(unref(TrashIcon), { class: "w-5 h-5 inline" }, null, _parent, _scopeId));
							_push(`</button></td></tr>`);
						});
						_push(`<!--]-->`);
						if (!__props.schedules.data.length) _push(`<tr${_scopeId}><td colspan="6" class="px-6 py-12 text-center text-gray-500"${_scopeId}>Belum ada jadwal</td></tr>`);
						else _push(`<!---->`);
						_push(`</tbody></table><div class="px-6 py-4 border-t"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$2, { links: __props.schedules.links }, null, _parent, _scopeId));
						_push(`</div></div></div>`);
						_push(ssrRenderComponent(_sfc_main$1, {
							show: modalOpen.value,
							title: editingItem.value ? "Edit Khatib" : "Tambah Khatib",
							onClose: ($event) => modalOpen.value = false
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<form class="space-y-4"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Nama Lengkap</label><input${ssrRenderAttr("value", unref(form).nama)} type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" required${_scopeId}>`);
									if (unref(form).errors.nama) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.nama)}</span>`);
									else _push(`<!---->`);
									_push(`</div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Gelar (Opsional)</label><input${ssrRenderAttr("value", unref(form).gelar)} type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Contoh: Lc., M.Ag., dll"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>No. HP</label><input${ssrRenderAttr("value", unref(form).no_hp)} type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="08xxxxxxxxxx"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Spesialisasi</label><textarea rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Bidang keahlian..."${_scopeId}>${ssrInterpolate(unref(form).spesialisasi)}</textarea></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Tipe Khatib</label><select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}><option value="internal"${ssrIncludeBooleanAttr(Array.isArray(unref(form).tipe) ? ssrLooseContain(unref(form).tipe, "internal") : ssrLooseEqual(unref(form).tipe, "internal")) ? " selected" : ""}${_scopeId}>Internal Masjid</option><option value="tamu"${ssrIncludeBooleanAttr(Array.isArray(unref(form).tipe) ? ssrLooseContain(unref(form).tipe, "tamu") : ssrLooseEqual(unref(form).tipe, "tamu")) ? " selected" : ""}${_scopeId}>Khatib Tamu</option></select></div><div class="flex justify-end gap-3 pt-4 border-t"${_scopeId}><button type="button" class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"${_scopeId}>Batal</button><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="px-4 py-2 bg-primary text-white rounded-lg disabled:opacity-50"${_scopeId}>${ssrInterpolate(unref(form).processing ? "Menyimpan..." : "Simpan")}</button></div></form>`);
								} else return [createVNode("form", {
									onSubmit: withModifiers(submitKhatib, ["prevent"]),
									class: "space-y-4"
								}, [
									createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Nama Lengkap"),
										withDirectives(createVNode("input", {
											"onUpdate:modelValue": ($event) => unref(form).nama = $event,
											type: "text",
											class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
											required: ""
										}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).nama]]),
										unref(form).errors.nama ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(form).errors.nama), 1)) : createCommentVNode("", true)
									]),
									createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Gelar (Opsional)"), withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).gelar = $event,
										type: "text",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
										placeholder: "Contoh: Lc., M.Ag., dll"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).gelar]])]),
									createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "No. HP"), withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).no_hp = $event,
										type: "text",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
										placeholder: "08xxxxxxxxxx"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).no_hp]])]),
									createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Spesialisasi"), withDirectives(createVNode("textarea", {
										"onUpdate:modelValue": ($event) => unref(form).spesialisasi = $event,
										rows: "2",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
										placeholder: "Bidang keahlian..."
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).spesialisasi]])]),
									createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Tipe Khatib"), withDirectives(createVNode("select", {
										"onUpdate:modelValue": ($event) => unref(form).tipe = $event,
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, [createVNode("option", { value: "internal" }, "Internal Masjid"), createVNode("option", { value: "tamu" }, "Khatib Tamu")], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).tipe]])]),
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
						_push(ssrRenderComponent(_sfc_main$1, {
							show: scheduleModalOpen.value,
							title: "Tambah Jadwal Jumat",
							onClose: ($event) => scheduleModalOpen.value = false
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<form class="space-y-4"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Tanggal Jumat</label><input${ssrRenderAttr("value", unref(scheduleForm).tanggal_jumat)} type="date" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" required${_scopeId}>`);
									if (unref(scheduleForm).errors.tanggal_jumat) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(scheduleForm).errors.tanggal_jumat)}</span>`);
									else _push(`<!---->`);
									_push(`</div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Khatib</label><select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" required${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(scheduleForm).khatib_id) ? ssrLooseContain(unref(scheduleForm).khatib_id, "") : ssrLooseEqual(unref(scheduleForm).khatib_id, "")) ? " selected" : ""}${_scopeId}>Pilih Khatib</option><!--[-->`);
									ssrRenderList(__props.khatibs, (k) => {
										_push(`<option${ssrRenderAttr("value", k.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(scheduleForm).khatib_id) ? ssrLooseContain(unref(scheduleForm).khatib_id, k.id) : ssrLooseEqual(unref(scheduleForm).khatib_id, k.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(k.nama)}</option>`);
									});
									_push(`<!--]--></select>`);
									if (unref(scheduleForm).errors.khatib_id) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(scheduleForm).errors.khatib_id)}</span>`);
									else _push(`<!---->`);
									_push(`</div><div class="grid grid-cols-2 gap-4"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Imam (Opsional)</label><select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(scheduleForm).imam_id) ? ssrLooseContain(unref(scheduleForm).imam_id, "") : ssrLooseEqual(unref(scheduleForm).imam_id, "")) ? " selected" : ""}${_scopeId}>Pilih Imam</option><!--[-->`);
									ssrRenderList(__props.khatibs, (k) => {
										_push(`<option${ssrRenderAttr("value", k.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(scheduleForm).imam_id) ? ssrLooseContain(unref(scheduleForm).imam_id, k.id) : ssrLooseEqual(unref(scheduleForm).imam_id, k.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(k.nama)}</option>`);
									});
									_push(`<!--]--></select></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Muadzin (Opsional)</label><select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(scheduleForm).muadzin_id) ? ssrLooseContain(unref(scheduleForm).muadzin_id, "") : ssrLooseEqual(unref(scheduleForm).muadzin_id, "")) ? " selected" : ""}${_scopeId}>Pilih Muadzin</option><!--[-->`);
									ssrRenderList(__props.khatibs, (k) => {
										_push(`<option${ssrRenderAttr("value", k.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(scheduleForm).muadzin_id) ? ssrLooseContain(unref(scheduleForm).muadzin_id, k.id) : ssrLooseEqual(unref(scheduleForm).muadzin_id, k.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(k.nama)}</option>`);
									});
									_push(`<!--]--></select></div></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Tema Khutbah (Opsional)</label><input${ssrRenderAttr("value", unref(scheduleForm).tema)} type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Tema khutbah..."${_scopeId}></div><div class="flex justify-end gap-3 pt-4 border-t"${_scopeId}><button type="button" class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"${_scopeId}>Batal</button><button type="submit"${ssrIncludeBooleanAttr(unref(scheduleForm).processing) ? " disabled" : ""} class="px-4 py-2 bg-primary text-white rounded-lg disabled:opacity-50"${_scopeId}>${ssrInterpolate(unref(scheduleForm).processing ? "Menyimpan..." : "Simpan")}</button></div></form>`);
								} else return [createVNode("form", {
									onSubmit: withModifiers(submitSchedule, ["prevent"]),
									class: "space-y-4"
								}, [
									createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Tanggal Jumat"),
										withDirectives(createVNode("input", {
											"onUpdate:modelValue": ($event) => unref(scheduleForm).tanggal_jumat = $event,
											type: "date",
											class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
											required: ""
										}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(scheduleForm).tanggal_jumat]]),
										unref(scheduleForm).errors.tanggal_jumat ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(scheduleForm).errors.tanggal_jumat), 1)) : createCommentVNode("", true)
									]),
									createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Khatib"),
										withDirectives(createVNode("select", {
											"onUpdate:modelValue": ($event) => unref(scheduleForm).khatib_id = $event,
											class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
											required: ""
										}, [createVNode("option", { value: "" }, "Pilih Khatib"), (openBlock(true), createBlock(Fragment, null, renderList(__props.khatibs, (k) => {
											return openBlock(), createBlock("option", {
												key: k.id,
												value: k.id
											}, toDisplayString(k.nama), 9, ["value"]);
										}), 128))], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(scheduleForm).khatib_id]]),
										unref(scheduleForm).errors.khatib_id ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(scheduleForm).errors.khatib_id), 1)) : createCommentVNode("", true)
									]),
									createVNode("div", { class: "grid grid-cols-2 gap-4" }, [createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Imam (Opsional)"), withDirectives(createVNode("select", {
										"onUpdate:modelValue": ($event) => unref(scheduleForm).imam_id = $event,
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, [createVNode("option", { value: "" }, "Pilih Imam"), (openBlock(true), createBlock(Fragment, null, renderList(__props.khatibs, (k) => {
										return openBlock(), createBlock("option", {
											key: k.id,
											value: k.id
										}, toDisplayString(k.nama), 9, ["value"]);
									}), 128))], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(scheduleForm).imam_id]])]), createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Muadzin (Opsional)"), withDirectives(createVNode("select", {
										"onUpdate:modelValue": ($event) => unref(scheduleForm).muadzin_id = $event,
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, [createVNode("option", { value: "" }, "Pilih Muadzin"), (openBlock(true), createBlock(Fragment, null, renderList(__props.khatibs, (k) => {
										return openBlock(), createBlock("option", {
											key: k.id,
											value: k.id
										}, toDisplayString(k.nama), 9, ["value"]);
									}), 128))], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(scheduleForm).muadzin_id]])])]),
									createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Tema Khutbah (Opsional)"), withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(scheduleForm).tema = $event,
										type: "text",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
										placeholder: "Tema khutbah..."
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(scheduleForm).tema]])]),
									createVNode("div", { class: "flex justify-end gap-3 pt-4 border-t" }, [createVNode("button", {
										type: "button",
										onClick: ($event) => scheduleModalOpen.value = false,
										class: "px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
									}, "Batal", 8, ["onClick"]), createVNode("button", {
										type: "submit",
										disabled: unref(scheduleForm).processing,
										class: "px-4 py-2 bg-primary text-white rounded-lg disabled:opacity-50"
									}, toDisplayString(unref(scheduleForm).processing ? "Menyimpan..." : "Simpan"), 9, ["disabled"])])
								], 32)];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [
						createVNode(unref(Head), { title: "Jadwal Jumat" }),
						createVNode("div", { class: "mb-6" }, [createVNode("h1", { class: "text-2xl font-bold text-gray-800" }, "Jadwal Jumat"), createVNode("p", { class: "text-gray-500 text-sm" }, "Manajemen khatib dan jadwal shalat Jumat")]),
						createVNode("div", { class: "mb-6 border-b border-gray-200" }, [createVNode("nav", { class: "-mb-px flex space-x-8" }, [createVNode("button", {
							onClick: ($event) => activeTab.value = "khatib",
							class: ["py-4 px-1 border-b-2 font-medium text-sm", activeTab.value === "khatib" ? "border-primary text-primary" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"]
						}, [createVNode(unref(UserGroupIcon), { class: "w-5 h-5 inline mr-2" }), createTextVNode(" Daftar Khatib ")], 10, ["onClick"]), createVNode("button", {
							onClick: ($event) => activeTab.value = "schedule",
							class: ["py-4 px-1 border-b-2 font-medium text-sm", activeTab.value === "schedule" ? "border-primary text-primary" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"]
						}, [createVNode(unref(CalendarIcon), { class: "w-5 h-5 inline mr-2" }), createTextVNode(" Jadwal Jumat ")], 10, ["onClick"])])]),
						withDirectives(createVNode("div", null, [
							createVNode("div", { class: "mb-6 flex justify-between items-center" }, [createVNode("div", null, [createVNode("h2", { class: "text-lg font-semibold text-gray-700" }, "Data Khatib"), createVNode("p", { class: "text-gray-500 text-sm" }, "Kelola data khatib internal dan tamu")]), createVNode("button", {
								onClick: openCreateModal,
								class: "bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg flex items-center gap-2 transition shadow-md"
							}, [createVNode(unref(PlusIcon), { class: "w-5 h-5" }), createTextVNode(" Tambah Khatib ")])]),
							createVNode("div", { class: "bg-white rounded-xl shadow-sm p-4 mb-6" }, [createVNode("div", { class: "flex gap-3" }, [createVNode("div", { class: "flex-1 relative" }, [createVNode(unref(MagnifyingGlassIcon), { class: "w-5 h-5 absolute left-3 top-2.5 text-gray-400" }), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => search.value = $event,
								onKeyup: withKeys(doSearch, ["enter"]),
								type: "text",
								placeholder: "Cari khatib...",
								class: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
							}, null, 40, ["onUpdate:modelValue"]), [[vModelText, search.value]])]), createVNode("button", {
								onClick: doSearch,
								class: "bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-light"
							}, "Cari")])]),
							createVNode("div", { class: "bg-white rounded-xl shadow-sm overflow-hidden" }, [createVNode("table", { class: "w-full text-sm" }, [createVNode("thead", { class: "bg-gray-50 text-gray-600 text-xs uppercase" }, [createVNode("tr", null, [
								createVNode("th", { class: "px-6 py-3 text-left" }, "Nama"),
								createVNode("th", { class: "px-6 py-3 text-left" }, "Gelar"),
								createVNode("th", { class: "px-6 py-3 text-left" }, "Tipe"),
								createVNode("th", { class: "px-6 py-3 text-left" }, "Spesialisasi"),
								createVNode("th", { class: "px-6 py-3 text-center" }, "Aksi")
							])]), createVNode("tbody", { class: "divide-y" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.items.data, (item) => {
								return openBlock(), createBlock("tr", {
									key: item.id,
									class: "hover:bg-gray-50"
								}, [
									createVNode("td", { class: "px-6 py-4" }, toDisplayString(item.nama), 1),
									createVNode("td", { class: "px-6 py-4" }, toDisplayString(item.gelar || "-"), 1),
									createVNode("td", { class: "px-6 py-4" }, [createVNode("span", { class: [item.tipe === "internal" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800", "px-2 py-1 text-xs rounded-full"] }, toDisplayString(item.tipe), 3)]),
									createVNode("td", { class: "px-6 py-4" }, toDisplayString(item.spesialisasi || "-"), 1),
									createVNode("td", { class: "px-6 py-4 text-center" }, [createVNode("button", {
										onClick: ($event) => openEdit(item),
										class: "text-gray-400 hover:text-primary mx-1"
									}, [createVNode(unref(PencilIcon), { class: "w-5 h-5 inline" })], 8, ["onClick"]), createVNode("button", {
										onClick: ($event) => deleteKhatib(item),
										class: "text-gray-400 hover:text-red-600 mx-1"
									}, [createVNode(unref(TrashIcon), { class: "w-5 h-5 inline" })], 8, ["onClick"])])
								]);
							}), 128)), !__props.items.data.length ? (openBlock(), createBlock("tr", { key: 0 }, [createVNode("td", {
								colspan: "5",
								class: "px-6 py-12 text-center text-gray-500"
							}, "Tidak ada data")])) : createCommentVNode("", true)])]), createVNode("div", { class: "px-6 py-4 border-t" }, [createVNode(_sfc_main$2, { links: __props.items.links }, null, 8, ["links"])])])
						], 512), [[vShow, activeTab.value === "khatib"]]),
						withDirectives(createVNode("div", null, [createVNode("div", { class: "mb-6 flex justify-between items-center" }, [createVNode("div", null, [createVNode("h2", { class: "text-lg font-semibold text-gray-700" }, "Jadwal Shalat Jumat"), createVNode("p", { class: "text-gray-500 text-sm" }, "Atur jadwal khatib, imam, dan muadzin")]), createVNode("button", {
							onClick: openScheduleModal,
							class: "bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg flex items-center gap-2 transition shadow-md"
						}, [createVNode(unref(PlusIcon), { class: "w-5 h-5" }), createTextVNode(" Tambah Jadwal ")])]), createVNode("div", { class: "bg-white rounded-xl shadow-sm overflow-hidden" }, [createVNode("table", { class: "w-full text-sm" }, [createVNode("thead", { class: "bg-gray-50 text-gray-600 text-xs uppercase" }, [createVNode("tr", null, [
							createVNode("th", { class: "px-6 py-3 text-left" }, "Tanggal"),
							createVNode("th", { class: "px-6 py-3 text-left" }, "Khatib"),
							createVNode("th", { class: "px-6 py-3 text-left" }, "Imam"),
							createVNode("th", { class: "px-6 py-3 text-left" }, "Muadzin"),
							createVNode("th", { class: "px-6 py-3 text-left" }, "Tema"),
							createVNode("th", { class: "px-6 py-3 text-center" }, "Aksi")
						])]), createVNode("tbody", { class: "divide-y" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.schedules.data, (item) => {
							return openBlock(), createBlock("tr", {
								key: item.id,
								class: "hover:bg-gray-50"
							}, [
								createVNode("td", { class: "px-6 py-4" }, toDisplayString(new Date(item.tanggal_jumat).toLocaleDateString("id-ID", {
									weekday: "long",
									year: "numeric",
									month: "long",
									day: "numeric"
								})), 1),
								createVNode("td", { class: "px-6 py-4" }, toDisplayString(item.khatib?.nama || "-"), 1),
								createVNode("td", { class: "px-6 py-4" }, toDisplayString(item.imam?.nama || "-"), 1),
								createVNode("td", { class: "px-6 py-4" }, toDisplayString(item.muadzin?.nama || "-"), 1),
								createVNode("td", { class: "px-6 py-4" }, toDisplayString(item.tema || "-"), 1),
								createVNode("td", { class: "px-6 py-4 text-center" }, [createVNode("button", {
									onClick: ($event) => deleteSchedule(item),
									class: "text-gray-400 hover:text-red-600 mx-1"
								}, [createVNode(unref(TrashIcon), { class: "w-5 h-5 inline" })], 8, ["onClick"])])
							]);
						}), 128)), !__props.schedules.data.length ? (openBlock(), createBlock("tr", { key: 0 }, [createVNode("td", {
							colspan: "6",
							class: "px-6 py-12 text-center text-gray-500"
						}, "Belum ada jadwal")])) : createCommentVNode("", true)])]), createVNode("div", { class: "px-6 py-4 border-t" }, [createVNode(_sfc_main$2, { links: __props.schedules.links }, null, 8, ["links"])])])], 512), [[vShow, activeTab.value === "schedule"]]),
						createVNode(_sfc_main$1, {
							show: modalOpen.value,
							title: editingItem.value ? "Edit Khatib" : "Tambah Khatib",
							onClose: ($event) => modalOpen.value = false
						}, {
							default: withCtx(() => [createVNode("form", {
								onSubmit: withModifiers(submitKhatib, ["prevent"]),
								class: "space-y-4"
							}, [
								createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Nama Lengkap"),
									withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).nama = $event,
										type: "text",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
										required: ""
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).nama]]),
									unref(form).errors.nama ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(form).errors.nama), 1)) : createCommentVNode("", true)
								]),
								createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Gelar (Opsional)"), withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => unref(form).gelar = $event,
									type: "text",
									class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
									placeholder: "Contoh: Lc., M.Ag., dll"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).gelar]])]),
								createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "No. HP"), withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => unref(form).no_hp = $event,
									type: "text",
									class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
									placeholder: "08xxxxxxxxxx"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).no_hp]])]),
								createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Spesialisasi"), withDirectives(createVNode("textarea", {
									"onUpdate:modelValue": ($event) => unref(form).spesialisasi = $event,
									rows: "2",
									class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
									placeholder: "Bidang keahlian..."
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).spesialisasi]])]),
								createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Tipe Khatib"), withDirectives(createVNode("select", {
									"onUpdate:modelValue": ($event) => unref(form).tipe = $event,
									class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
								}, [createVNode("option", { value: "internal" }, "Internal Masjid"), createVNode("option", { value: "tamu" }, "Khatib Tamu")], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).tipe]])]),
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
						]),
						createVNode(_sfc_main$1, {
							show: scheduleModalOpen.value,
							title: "Tambah Jadwal Jumat",
							onClose: ($event) => scheduleModalOpen.value = false
						}, {
							default: withCtx(() => [createVNode("form", {
								onSubmit: withModifiers(submitSchedule, ["prevent"]),
								class: "space-y-4"
							}, [
								createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Tanggal Jumat"),
									withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(scheduleForm).tanggal_jumat = $event,
										type: "date",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
										required: ""
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(scheduleForm).tanggal_jumat]]),
									unref(scheduleForm).errors.tanggal_jumat ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(scheduleForm).errors.tanggal_jumat), 1)) : createCommentVNode("", true)
								]),
								createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Khatib"),
									withDirectives(createVNode("select", {
										"onUpdate:modelValue": ($event) => unref(scheduleForm).khatib_id = $event,
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
										required: ""
									}, [createVNode("option", { value: "" }, "Pilih Khatib"), (openBlock(true), createBlock(Fragment, null, renderList(__props.khatibs, (k) => {
										return openBlock(), createBlock("option", {
											key: k.id,
											value: k.id
										}, toDisplayString(k.nama), 9, ["value"]);
									}), 128))], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(scheduleForm).khatib_id]]),
									unref(scheduleForm).errors.khatib_id ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(scheduleForm).errors.khatib_id), 1)) : createCommentVNode("", true)
								]),
								createVNode("div", { class: "grid grid-cols-2 gap-4" }, [createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Imam (Opsional)"), withDirectives(createVNode("select", {
									"onUpdate:modelValue": ($event) => unref(scheduleForm).imam_id = $event,
									class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
								}, [createVNode("option", { value: "" }, "Pilih Imam"), (openBlock(true), createBlock(Fragment, null, renderList(__props.khatibs, (k) => {
									return openBlock(), createBlock("option", {
										key: k.id,
										value: k.id
									}, toDisplayString(k.nama), 9, ["value"]);
								}), 128))], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(scheduleForm).imam_id]])]), createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Muadzin (Opsional)"), withDirectives(createVNode("select", {
									"onUpdate:modelValue": ($event) => unref(scheduleForm).muadzin_id = $event,
									class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
								}, [createVNode("option", { value: "" }, "Pilih Muadzin"), (openBlock(true), createBlock(Fragment, null, renderList(__props.khatibs, (k) => {
									return openBlock(), createBlock("option", {
										key: k.id,
										value: k.id
									}, toDisplayString(k.nama), 9, ["value"]);
								}), 128))], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(scheduleForm).muadzin_id]])])]),
								createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Tema Khutbah (Opsional)"), withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => unref(scheduleForm).tema = $event,
									type: "text",
									class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
									placeholder: "Tema khutbah..."
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(scheduleForm).tema]])]),
								createVNode("div", { class: "flex justify-end gap-3 pt-4 border-t" }, [createVNode("button", {
									type: "button",
									onClick: ($event) => scheduleModalOpen.value = false,
									class: "px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
								}, "Batal", 8, ["onClick"]), createVNode("button", {
									type: "submit",
									disabled: unref(scheduleForm).processing,
									class: "px-4 py-2 bg-primary text-white rounded-lg disabled:opacity-50"
								}, toDisplayString(unref(scheduleForm).processing ? "Menyimpan..." : "Simpan"), 9, ["disabled"])])
							], 32)]),
							_: 1
						}, 8, ["show", "onClose"])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Jumah/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
