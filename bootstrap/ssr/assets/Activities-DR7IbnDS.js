import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BOaGB7Aw.js";
import { t as _sfc_main$1 } from "./PrimaryButton-B1NJcOT8.js";
import { t as _sfc_main$2 } from "./SecondaryButton-BD33s9TB.js";
import { t as AdminLayout_default } from "./AdminLayout-JKKJHCcy.js";
import { t as _sfc_main$3 } from "./Pagination-DiptkPBm.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelSelect, vModelText, withCtx, withDirectives } from "vue";
import { Head, router } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { CalendarDaysIcon, PrinterIcon } from "@heroicons/vue/24/outline";
//#region resources/js/Pages/Reports/Activities.vue
var _sfc_main = {
	__name: "Activities",
	__ssrInlineRender: true,
	props: {
		activities: Object,
		summary: Object,
		filters: Object
	},
	setup(__props) {
		const props = __props;
		const startDate = ref(props.filters?.startDate || "");
		const endDate = ref(props.filters?.endDate || "");
		const category = ref(props.filters?.category || "all");
		const status = ref(props.filters?.status || "all");
		const filterReports = () => {
			router.get(route("reports.activities"), {
				start_date: startDate.value,
				end_date: endDate.value,
				category: category.value,
				status: status.value
			}, { preserveState: true });
		};
		const printReport = () => {
			window.print();
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(AdminLayout_default, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "Laporan Kegiatan" }, null, _parent, _scopeId));
						_push(`<div class="mb-6 flex justify-between items-center" data-v-e5f05caa${_scopeId}><div data-v-e5f05caa${_scopeId}><h1 class="text-2xl font-bold text-gray-800" data-v-e5f05caa${_scopeId}>Laporan Kegiatan</h1><p class="text-gray-500 text-sm" data-v-e5f05caa${_scopeId}>Analisis aktivitas dan event masjid</p></div><div class="flex gap-2" data-v-e5f05caa${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$2, { onClick: printReport }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(unref(PrinterIcon), { class: "w-5 h-5 mr-2 inline" }, null, _parent, _scopeId));
									_push(` Cetak `);
								} else return [createVNode(unref(PrinterIcon), { class: "w-5 h-5 mr-2 inline" }), createTextVNode(" Cetak ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></div><div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6" data-v-e5f05caa${_scopeId}><div class="bg-white rounded-xl shadow-sm p-4 border-l-4 border-purple-500" data-v-e5f05caa${_scopeId}><div class="text-sm text-gray-500 mb-1" data-v-e5f05caa${_scopeId}>Total Kegiatan</div><div class="text-2xl font-bold text-gray-800" data-v-e5f05caa${_scopeId}>${ssrInterpolate(__props.summary?.total || 0)}</div></div><div class="bg-white rounded-xl shadow-sm p-4 border-l-4 border-green-500" data-v-e5f05caa${_scopeId}><div class="text-sm text-gray-500 mb-1" data-v-e5f05caa${_scopeId}>Total Anggaran</div><div class="text-lg font-bold text-green-600" data-v-e5f05caa${_scopeId}>Rp ${ssrInterpolate((__props.summary?.total_anggaran || 0).toLocaleString("id-ID"))}</div></div><div class="bg-white rounded-xl shadow-sm p-4 border-l-4 border-blue-500" data-v-e5f05caa${_scopeId}><div class="text-sm text-gray-500 mb-1" data-v-e5f05caa${_scopeId}>Rata-rata Anggaran</div><div class="text-lg font-bold text-blue-600" data-v-e5f05caa${_scopeId}>Rp ${ssrInterpolate(__props.summary?.total && __props.summary.total > 0 ? Math.round(__props.summary.total_anggaran / __props.summary.total).toLocaleString("id-ID") : 0)}</div></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6" data-v-e5f05caa${_scopeId}><div class="bg-white rounded-xl shadow-sm p-6" data-v-e5f05caa${_scopeId}><h3 class="font-semibold text-gray-800 mb-4" data-v-e5f05caa${_scopeId}>Kegiatan Berdasarkan Kategori</h3><div class="space-y-3" data-v-e5f05caa${_scopeId}><!--[-->`);
						ssrRenderList(__props.summary?.by_category, (item) => {
							_push(`<div class="flex items-center justify-between" data-v-e5f05caa${_scopeId}><span class="text-gray-600 capitalize" data-v-e5f05caa${_scopeId}>${ssrInterpolate(item.kategori)}</span><div class="flex items-center gap-3" data-v-e5f05caa${_scopeId}><div class="w-48 bg-gray-200 rounded-full h-2" data-v-e5f05caa${_scopeId}><div class="bg-purple-500 h-2 rounded-full" style="${ssrRenderStyle({ width: `${item.count / __props.summary.total * 100}%` })}" data-v-e5f05caa${_scopeId}></div></div><span class="font-semibold text-gray-800 w-12 text-right" data-v-e5f05caa${_scopeId}>${ssrInterpolate(item.count)}</span></div></div>`);
						});
						_push(`<!--]--></div></div><div class="bg-white rounded-xl shadow-sm p-6" data-v-e5f05caa${_scopeId}><h3 class="font-semibold text-gray-800 mb-4" data-v-e5f05caa${_scopeId}>Kegiatan Berdasarkan Status</h3><div class="space-y-3" data-v-e5f05caa${_scopeId}><!--[-->`);
						ssrRenderList(__props.summary?.by_status, (item) => {
							_push(`<div class="flex items-center justify-between" data-v-e5f05caa${_scopeId}><span class="text-gray-600 capitalize" data-v-e5f05caa${_scopeId}>${ssrInterpolate(item.status)}</span><div class="flex items-center gap-3" data-v-e5f05caa${_scopeId}><div class="w-48 bg-gray-200 rounded-full h-2" data-v-e5f05caa${_scopeId}><div class="bg-blue-500 h-2 rounded-full" style="${ssrRenderStyle({ width: `${item.count / __props.summary.total * 100}%` })}" data-v-e5f05caa${_scopeId}></div></div><span class="font-semibold text-gray-800 w-12 text-right" data-v-e5f05caa${_scopeId}>${ssrInterpolate(item.count)}</span></div></div>`);
						});
						_push(`<!--]--></div></div></div><div class="bg-white rounded-xl shadow-sm p-4 mb-6" data-v-e5f05caa${_scopeId}><div class="grid grid-cols-1 md:grid-cols-4 gap-3" data-v-e5f05caa${_scopeId}><div data-v-e5f05caa${_scopeId}><label class="block text-xs font-medium text-gray-500 mb-1" data-v-e5f05caa${_scopeId}>Tanggal Mulai</label><input${ssrRenderAttr("value", startDate.value)} type="date" class="w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary" data-v-e5f05caa${_scopeId}></div><div data-v-e5f05caa${_scopeId}><label class="block text-xs font-medium text-gray-500 mb-1" data-v-e5f05caa${_scopeId}>Tanggal Akhir</label><input${ssrRenderAttr("value", endDate.value)} type="date" class="w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary" data-v-e5f05caa${_scopeId}></div><div data-v-e5f05caa${_scopeId}><label class="block text-xs font-medium text-gray-500 mb-1" data-v-e5f05caa${_scopeId}>Kategori</label><select class="w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary" data-v-e5f05caa${_scopeId}><option value="all" data-v-e5f05caa${ssrIncludeBooleanAttr(Array.isArray(category.value) ? ssrLooseContain(category.value, "all") : ssrLooseEqual(category.value, "all")) ? " selected" : ""}${_scopeId}>Semua</option><option value="pengajian" data-v-e5f05caa${ssrIncludeBooleanAttr(Array.isArray(category.value) ? ssrLooseContain(category.value, "pengajian") : ssrLooseEqual(category.value, "pengajian")) ? " selected" : ""}${_scopeId}>Pengajian</option><option value="rapat" data-v-e5f05caa${ssrIncludeBooleanAttr(Array.isArray(category.value) ? ssrLooseContain(category.value, "rapat") : ssrLooseEqual(category.value, "rapat")) ? " selected" : ""}${_scopeId}>Rapat</option><option value="phbi" data-v-e5f05caa${ssrIncludeBooleanAttr(Array.isArray(category.value) ? ssrLooseContain(category.value, "phbi") : ssrLooseEqual(category.value, "phbi")) ? " selected" : ""}${_scopeId}>PHBI</option><option value="kajian_akbar" data-v-e5f05caa${ssrIncludeBooleanAttr(Array.isArray(category.value) ? ssrLooseContain(category.value, "kajian_akbar") : ssrLooseEqual(category.value, "kajian_akbar")) ? " selected" : ""}${_scopeId}>Kajian Akbar</option><option value="sosial" data-v-e5f05caa${ssrIncludeBooleanAttr(Array.isArray(category.value) ? ssrLooseContain(category.value, "sosial") : ssrLooseEqual(category.value, "sosial")) ? " selected" : ""}${_scopeId}>Sosial</option><option value="olahraga" data-v-e5f05caa${ssrIncludeBooleanAttr(Array.isArray(category.value) ? ssrLooseContain(category.value, "olahraga") : ssrLooseEqual(category.value, "olahraga")) ? " selected" : ""}${_scopeId}>Olahraga</option><option value="lainnya" data-v-e5f05caa${ssrIncludeBooleanAttr(Array.isArray(category.value) ? ssrLooseContain(category.value, "lainnya") : ssrLooseEqual(category.value, "lainnya")) ? " selected" : ""}${_scopeId}>Lainnya</option></select></div><div data-v-e5f05caa${_scopeId}><label class="block text-xs font-medium text-gray-500 mb-1" data-v-e5f05caa${_scopeId}>Status</label><select class="w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary" data-v-e5f05caa${_scopeId}><option value="all" data-v-e5f05caa${ssrIncludeBooleanAttr(Array.isArray(status.value) ? ssrLooseContain(status.value, "all") : ssrLooseEqual(status.value, "all")) ? " selected" : ""}${_scopeId}>Semua</option><option value="draft" data-v-e5f05caa${ssrIncludeBooleanAttr(Array.isArray(status.value) ? ssrLooseContain(status.value, "draft") : ssrLooseEqual(status.value, "draft")) ? " selected" : ""}${_scopeId}>Draft</option><option value="dijadwalkan" data-v-e5f05caa${ssrIncludeBooleanAttr(Array.isArray(status.value) ? ssrLooseContain(status.value, "dijadwalkan") : ssrLooseEqual(status.value, "dijadwalkan")) ? " selected" : ""}${_scopeId}>Dijadwalkan</option><option value="berlangsung" data-v-e5f05caa${ssrIncludeBooleanAttr(Array.isArray(status.value) ? ssrLooseContain(status.value, "berlangsung") : ssrLooseEqual(status.value, "berlangsung")) ? " selected" : ""}${_scopeId}>Berlangsung</option><option value="selesai" data-v-e5f05caa${ssrIncludeBooleanAttr(Array.isArray(status.value) ? ssrLooseContain(status.value, "selesai") : ssrLooseEqual(status.value, "selesai")) ? " selected" : ""}${_scopeId}>Selesai</option><option value="dibatalkan" data-v-e5f05caa${ssrIncludeBooleanAttr(Array.isArray(status.value) ? ssrLooseContain(status.value, "dibatalkan") : ssrLooseEqual(status.value, "dibatalkan")) ? " selected" : ""}${_scopeId}>Dibatalkan</option></select></div></div><div class="mt-3 flex justify-end" data-v-e5f05caa${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$1, { onClick: filterReports }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Filter`);
								else return [createTextVNode("Filter")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></div><div class="bg-white rounded-xl shadow-sm overflow-hidden" data-v-e5f05caa${_scopeId}><table class="w-full text-sm" data-v-e5f05caa${_scopeId}><thead class="bg-gray-50 text-gray-600 text-xs uppercase" data-v-e5f05caa${_scopeId}><tr data-v-e5f05caa${_scopeId}><th class="px-4 py-3 text-left" data-v-e5f05caa${_scopeId}>Nama Kegiatan</th><th class="px-4 py-3 text-left" data-v-e5f05caa${_scopeId}>Kategori</th><th class="px-4 py-3 text-left" data-v-e5f05caa${_scopeId}>Tanggal</th><th class="px-4 py-3 text-left" data-v-e5f05caa${_scopeId}>Penanggung Jawab</th><th class="px-4 py-3 text-right" data-v-e5f05caa${_scopeId}>Anggaran</th><th class="px-4 py-3 text-center" data-v-e5f05caa${_scopeId}>Status</th></tr></thead><tbody class="divide-y" data-v-e5f05caa${_scopeId}><!--[-->`);
						ssrRenderList(__props.activities.data, (activity) => {
							_push(`<tr class="hover:bg-gray-50" data-v-e5f05caa${_scopeId}><td class="px-4 py-3 font-medium" data-v-e5f05caa${_scopeId}>${ssrInterpolate(activity.nama)}</td><td class="px-4 py-3" data-v-e5f05caa${_scopeId}><span class="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded capitalize" data-v-e5f05caa${_scopeId}>${ssrInterpolate(activity.kategori)}</span></td><td class="px-4 py-3" data-v-e5f05caa${_scopeId}><div class="text-sm" data-v-e5f05caa${_scopeId}>${ssrInterpolate(new Date(activity.tanggal_mulai).toLocaleDateString("id-ID"))}</div>`);
							if (activity.tanggal_selesai) _push(`<div class="text-xs text-gray-500" data-v-e5f05caa${_scopeId}>s/d ${ssrInterpolate(new Date(activity.tanggal_selesai).toLocaleDateString("id-ID"))}</div>`);
							else _push(`<!---->`);
							_push(`</td><td class="px-4 py-3" data-v-e5f05caa${_scopeId}>${ssrInterpolate(activity.penanggung_jawab || "-")}</td><td class="px-4 py-3 text-right font-semibold" data-v-e5f05caa${_scopeId}>Rp ${ssrInterpolate((activity.anggaran || 0).toLocaleString("id-ID"))}</td><td class="px-4 py-3 text-center" data-v-e5f05caa${_scopeId}><span class="${ssrRenderClass([{
								"bg-gray-100 text-gray-800": activity.status === "draft",
								"bg-blue-100 text-blue-800": activity.status === "dijadwalkan",
								"bg-green-100 text-green-800": activity.status === "berlangsung",
								"bg-purple-100 text-purple-800": activity.status === "selesai",
								"bg-red-100 text-red-800": activity.status === "dibatalkan"
							}, "px-2 py-1 text-xs rounded capitalize"])}" data-v-e5f05caa${_scopeId}>${ssrInterpolate(activity.status)}</span></td></tr>`);
						});
						_push(`<!--]-->`);
						if (!__props.activities.data || __props.activities.data.length === 0) {
							_push(`<tr data-v-e5f05caa${_scopeId}><td colspan="6" class="px-4 py-12 text-center text-gray-500" data-v-e5f05caa${_scopeId}>`);
							_push(ssrRenderComponent(unref(CalendarDaysIcon), { class: "w-12 h-12 mx-auto mb-3 text-gray-300" }, null, _parent, _scopeId));
							_push(`<p data-v-e5f05caa${_scopeId}>Tidak ada data kegiatan</p></td></tr>`);
						} else _push(`<!---->`);
						_push(`</tbody></table><div class="px-4 py-3 border-t" data-v-e5f05caa${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$3, { links: __props.activities.links }, null, _parent, _scopeId));
						_push(`</div></div>`);
					} else return [
						createVNode(unref(Head), { title: "Laporan Kegiatan" }),
						createVNode("div", { class: "mb-6 flex justify-between items-center" }, [createVNode("div", null, [createVNode("h1", { class: "text-2xl font-bold text-gray-800" }, "Laporan Kegiatan"), createVNode("p", { class: "text-gray-500 text-sm" }, "Analisis aktivitas dan event masjid")]), createVNode("div", { class: "flex gap-2" }, [createVNode(_sfc_main$2, { onClick: printReport }, {
							default: withCtx(() => [createVNode(unref(PrinterIcon), { class: "w-5 h-5 mr-2 inline" }), createTextVNode(" Cetak ")]),
							_: 1
						})])]),
						createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-6" }, [
							createVNode("div", { class: "bg-white rounded-xl shadow-sm p-4 border-l-4 border-purple-500" }, [createVNode("div", { class: "text-sm text-gray-500 mb-1" }, "Total Kegiatan"), createVNode("div", { class: "text-2xl font-bold text-gray-800" }, toDisplayString(__props.summary?.total || 0), 1)]),
							createVNode("div", { class: "bg-white rounded-xl shadow-sm p-4 border-l-4 border-green-500" }, [createVNode("div", { class: "text-sm text-gray-500 mb-1" }, "Total Anggaran"), createVNode("div", { class: "text-lg font-bold text-green-600" }, "Rp " + toDisplayString((__props.summary?.total_anggaran || 0).toLocaleString("id-ID")), 1)]),
							createVNode("div", { class: "bg-white rounded-xl shadow-sm p-4 border-l-4 border-blue-500" }, [createVNode("div", { class: "text-sm text-gray-500 mb-1" }, "Rata-rata Anggaran"), createVNode("div", { class: "text-lg font-bold text-blue-600" }, "Rp " + toDisplayString(__props.summary?.total && __props.summary.total > 0 ? Math.round(__props.summary.total_anggaran / __props.summary.total).toLocaleString("id-ID") : 0), 1)])
						]),
						createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6" }, [createVNode("div", { class: "bg-white rounded-xl shadow-sm p-6" }, [createVNode("h3", { class: "font-semibold text-gray-800 mb-4" }, "Kegiatan Berdasarkan Kategori"), createVNode("div", { class: "space-y-3" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.summary?.by_category, (item) => {
							return openBlock(), createBlock("div", {
								key: item.kategori,
								class: "flex items-center justify-between"
							}, [createVNode("span", { class: "text-gray-600 capitalize" }, toDisplayString(item.kategori), 1), createVNode("div", { class: "flex items-center gap-3" }, [createVNode("div", { class: "w-48 bg-gray-200 rounded-full h-2" }, [createVNode("div", {
								class: "bg-purple-500 h-2 rounded-full",
								style: { width: `${item.count / __props.summary.total * 100}%` }
							}, null, 4)]), createVNode("span", { class: "font-semibold text-gray-800 w-12 text-right" }, toDisplayString(item.count), 1)])]);
						}), 128))])]), createVNode("div", { class: "bg-white rounded-xl shadow-sm p-6" }, [createVNode("h3", { class: "font-semibold text-gray-800 mb-4" }, "Kegiatan Berdasarkan Status"), createVNode("div", { class: "space-y-3" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.summary?.by_status, (item) => {
							return openBlock(), createBlock("div", {
								key: item.status,
								class: "flex items-center justify-between"
							}, [createVNode("span", { class: "text-gray-600 capitalize" }, toDisplayString(item.status), 1), createVNode("div", { class: "flex items-center gap-3" }, [createVNode("div", { class: "w-48 bg-gray-200 rounded-full h-2" }, [createVNode("div", {
								class: "bg-blue-500 h-2 rounded-full",
								style: { width: `${item.count / __props.summary.total * 100}%` }
							}, null, 4)]), createVNode("span", { class: "font-semibold text-gray-800 w-12 text-right" }, toDisplayString(item.count), 1)])]);
						}), 128))])])]),
						createVNode("div", { class: "bg-white rounded-xl shadow-sm p-4 mb-6" }, [createVNode("div", { class: "grid grid-cols-1 md:grid-cols-4 gap-3" }, [
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-medium text-gray-500 mb-1" }, "Tanggal Mulai"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => startDate.value = $event,
								type: "date",
								class: "w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, startDate.value]])]),
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-medium text-gray-500 mb-1" }, "Tanggal Akhir"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => endDate.value = $event,
								type: "date",
								class: "w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, endDate.value]])]),
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-medium text-gray-500 mb-1" }, "Kategori"), withDirectives(createVNode("select", {
								"onUpdate:modelValue": ($event) => category.value = $event,
								class: "w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
							}, [
								createVNode("option", { value: "all" }, "Semua"),
								createVNode("option", { value: "pengajian" }, "Pengajian"),
								createVNode("option", { value: "rapat" }, "Rapat"),
								createVNode("option", { value: "phbi" }, "PHBI"),
								createVNode("option", { value: "kajian_akbar" }, "Kajian Akbar"),
								createVNode("option", { value: "sosial" }, "Sosial"),
								createVNode("option", { value: "olahraga" }, "Olahraga"),
								createVNode("option", { value: "lainnya" }, "Lainnya")
							], 8, ["onUpdate:modelValue"]), [[vModelSelect, category.value]])]),
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-medium text-gray-500 mb-1" }, "Status"), withDirectives(createVNode("select", {
								"onUpdate:modelValue": ($event) => status.value = $event,
								class: "w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
							}, [
								createVNode("option", { value: "all" }, "Semua"),
								createVNode("option", { value: "draft" }, "Draft"),
								createVNode("option", { value: "dijadwalkan" }, "Dijadwalkan"),
								createVNode("option", { value: "berlangsung" }, "Berlangsung"),
								createVNode("option", { value: "selesai" }, "Selesai"),
								createVNode("option", { value: "dibatalkan" }, "Dibatalkan")
							], 8, ["onUpdate:modelValue"]), [[vModelSelect, status.value]])])
						]), createVNode("div", { class: "mt-3 flex justify-end" }, [createVNode(_sfc_main$1, { onClick: filterReports }, {
							default: withCtx(() => [createTextVNode("Filter")]),
							_: 1
						})])]),
						createVNode("div", { class: "bg-white rounded-xl shadow-sm overflow-hidden" }, [createVNode("table", { class: "w-full text-sm" }, [createVNode("thead", { class: "bg-gray-50 text-gray-600 text-xs uppercase" }, [createVNode("tr", null, [
							createVNode("th", { class: "px-4 py-3 text-left" }, "Nama Kegiatan"),
							createVNode("th", { class: "px-4 py-3 text-left" }, "Kategori"),
							createVNode("th", { class: "px-4 py-3 text-left" }, "Tanggal"),
							createVNode("th", { class: "px-4 py-3 text-left" }, "Penanggung Jawab"),
							createVNode("th", { class: "px-4 py-3 text-right" }, "Anggaran"),
							createVNode("th", { class: "px-4 py-3 text-center" }, "Status")
						])]), createVNode("tbody", { class: "divide-y" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.activities.data, (activity) => {
							return openBlock(), createBlock("tr", {
								key: activity.id,
								class: "hover:bg-gray-50"
							}, [
								createVNode("td", { class: "px-4 py-3 font-medium" }, toDisplayString(activity.nama), 1),
								createVNode("td", { class: "px-4 py-3" }, [createVNode("span", { class: "px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded capitalize" }, toDisplayString(activity.kategori), 1)]),
								createVNode("td", { class: "px-4 py-3" }, [createVNode("div", { class: "text-sm" }, toDisplayString(new Date(activity.tanggal_mulai).toLocaleDateString("id-ID")), 1), activity.tanggal_selesai ? (openBlock(), createBlock("div", {
									key: 0,
									class: "text-xs text-gray-500"
								}, "s/d " + toDisplayString(new Date(activity.tanggal_selesai).toLocaleDateString("id-ID")), 1)) : createCommentVNode("", true)]),
								createVNode("td", { class: "px-4 py-3" }, toDisplayString(activity.penanggung_jawab || "-"), 1),
								createVNode("td", { class: "px-4 py-3 text-right font-semibold" }, "Rp " + toDisplayString((activity.anggaran || 0).toLocaleString("id-ID")), 1),
								createVNode("td", { class: "px-4 py-3 text-center" }, [createVNode("span", { class: [{
									"bg-gray-100 text-gray-800": activity.status === "draft",
									"bg-blue-100 text-blue-800": activity.status === "dijadwalkan",
									"bg-green-100 text-green-800": activity.status === "berlangsung",
									"bg-purple-100 text-purple-800": activity.status === "selesai",
									"bg-red-100 text-red-800": activity.status === "dibatalkan"
								}, "px-2 py-1 text-xs rounded capitalize"] }, toDisplayString(activity.status), 3)])
							]);
						}), 128)), !__props.activities.data || __props.activities.data.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [createVNode("td", {
							colspan: "6",
							class: "px-4 py-12 text-center text-gray-500"
						}, [createVNode(unref(CalendarDaysIcon), { class: "w-12 h-12 mx-auto mb-3 text-gray-300" }), createVNode("p", null, "Tidak ada data kegiatan")])])) : createCommentVNode("", true)])]), createVNode("div", { class: "px-4 py-3 border-t" }, [createVNode(_sfc_main$3, { links: __props.activities.links }, null, 8, ["links"])])])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Reports/Activities.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Activities_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-e5f05caa"]]);
//#endregion
export { Activities_default as default };
