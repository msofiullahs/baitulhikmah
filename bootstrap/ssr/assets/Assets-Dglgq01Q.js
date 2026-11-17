import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BOaGB7Aw.js";
import { t as _sfc_main$1 } from "./PrimaryButton-B1NJcOT8.js";
import { t as _sfc_main$2 } from "./SecondaryButton-BD33s9TB.js";
import { t as AdminLayout_default } from "./AdminLayout-JKKJHCcy.js";
import { t as _sfc_main$3 } from "./Pagination-DiptkPBm.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelSelect, withCtx, withDirectives } from "vue";
import { Head, router } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { BuildingLibraryIcon, PrinterIcon } from "@heroicons/vue/24/outline";
//#region resources/js/Pages/Reports/Assets.vue
var _sfc_main = {
	__name: "Assets",
	__ssrInlineRender: true,
	props: {
		assets: Object,
		summary: Object,
		filters: Object
	},
	setup(__props) {
		const props = __props;
		const condition = ref(props.filters?.condition || "all");
		const category = ref(props.filters?.category || "all");
		const filterReports = () => {
			router.get(route("reports.assets"), {
				condition: condition.value,
				category: category.value
			}, { preserveState: true });
		};
		const printReport = () => {
			window.print();
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(AdminLayout_default, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "Laporan Aset" }, null, _parent, _scopeId));
						_push(`<div class="mb-6 flex justify-between items-center" data-v-d3fc77e8${_scopeId}><div data-v-d3fc77e8${_scopeId}><h1 class="text-2xl font-bold text-gray-800" data-v-d3fc77e8${_scopeId}>Laporan Aset &amp; Inventaris</h1><p class="text-gray-500 text-sm" data-v-d3fc77e8${_scopeId}>Nilai buku dan kondisi aset masjid</p></div><div class="flex gap-2" data-v-d3fc77e8${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$2, { onClick: printReport }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(unref(PrinterIcon), { class: "w-5 h-5 mr-2 inline" }, null, _parent, _scopeId));
									_push(` Cetak `);
								} else return [createVNode(unref(PrinterIcon), { class: "w-5 h-5 mr-2 inline" }), createTextVNode(" Cetak ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></div><div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6" data-v-d3fc77e8${_scopeId}><div class="bg-white rounded-xl shadow-sm p-4 border-l-4 border-gray-500" data-v-d3fc77e8${_scopeId}><div class="text-sm text-gray-500 mb-1" data-v-d3fc77e8${_scopeId}>Total Aset</div><div class="text-2xl font-bold text-gray-800" data-v-d3fc77e8${_scopeId}>${ssrInterpolate(__props.summary?.total_aset || 0)}</div></div><div class="bg-white rounded-xl shadow-sm p-4 border-l-4 border-green-500" data-v-d3fc77e8${_scopeId}><div class="text-sm text-gray-500 mb-1" data-v-d3fc77e8${_scopeId}>Nilai Buku Total</div><div class="text-lg font-bold text-green-600" data-v-d3fc77e8${_scopeId}>Rp ${ssrInterpolate((__props.summary?.nilai_buku || 0).toLocaleString("id-ID"))}</div></div><div class="bg-white rounded-xl shadow-sm p-4 border-l-4 border-blue-500" data-v-d3fc77e8${_scopeId}><div class="text-sm text-gray-500 mb-1" data-v-d3fc77e8${_scopeId}>Kondisi Baik</div><div class="text-2xl font-bold text-blue-600" data-v-d3fc77e8${_scopeId}>${ssrInterpolate(__props.summary?.by_condition?.find((c) => c.kondisi === "baik")?.count || 0)}</div></div><div class="bg-white rounded-xl shadow-sm p-4 border-l-4 border-red-500" data-v-d3fc77e8${_scopeId}><div class="text-sm text-gray-500 mb-1" data-v-d3fc77e8${_scopeId}>Perlu Perbaikan</div><div class="text-2xl font-bold text-red-600" data-v-d3fc77e8${_scopeId}>${ssrInterpolate((__props.summary?.by_condition?.find((c) => c.kondisi === "rusak_ringan")?.count || 0) + (__props.summary?.by_condition?.find((c) => c.kondisi === "rusak_berat")?.count || 0))}</div></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6" data-v-d3fc77e8${_scopeId}><div class="bg-white rounded-xl shadow-sm p-6" data-v-d3fc77e8${_scopeId}><h3 class="font-semibold text-gray-800 mb-4" data-v-d3fc77e8${_scopeId}>Aset Berdasarkan Kondisi</h3><div class="space-y-3" data-v-d3fc77e8${_scopeId}><!--[-->`);
						ssrRenderList(__props.summary?.by_condition, (item) => {
							_push(`<div class="flex items-center justify-between" data-v-d3fc77e8${_scopeId}><span class="text-gray-600 capitalize" data-v-d3fc77e8${_scopeId}>${ssrInterpolate(item.kondisi.replace("_", " "))}</span><div class="flex items-center gap-3" data-v-d3fc77e8${_scopeId}><div class="w-40 bg-gray-200 rounded-full h-2" data-v-d3fc77e8${_scopeId}><div class="${ssrRenderClass([{
								"bg-green-500": item.kondisi === "baik",
								"bg-yellow-500": item.kondisi === "rusak_ringan",
								"bg-red-500": item.kondisi === "rusak_berat"
							}, "h-2 rounded-full"])}" style="${ssrRenderStyle({ width: `${item.count / __props.summary.total_aset * 100}%` })}" data-v-d3fc77e8${_scopeId}></div></div><span class="font-semibold text-gray-800 w-12 text-right" data-v-d3fc77e8${_scopeId}>${ssrInterpolate(item.count)}</span></div></div>`);
						});
						_push(`<!--]--></div></div><div class="bg-white rounded-xl shadow-sm p-6" data-v-d3fc77e8${_scopeId}><h3 class="font-semibold text-gray-800 mb-4" data-v-d3fc77e8${_scopeId}>Aset Berdasarkan Kategori</h3><div class="space-y-3" data-v-d3fc77e8${_scopeId}><!--[-->`);
						ssrRenderList(__props.summary?.by_category, (item) => {
							_push(`<div class="flex items-center justify-between" data-v-d3fc77e8${_scopeId}><span class="text-gray-600 capitalize" data-v-d3fc77e8${_scopeId}>${ssrInterpolate(item.kategori)}</span><div class="flex items-center gap-3" data-v-d3fc77e8${_scopeId}><div class="w-40 bg-gray-200 rounded-full h-2" data-v-d3fc77e8${_scopeId}><div class="bg-blue-500 h-2 rounded-full" style="${ssrRenderStyle({ width: `${item.count / __props.summary.total_aset * 100}%` })}" data-v-d3fc77e8${_scopeId}></div></div><span class="font-semibold text-gray-800 w-12 text-right" data-v-d3fc77e8${_scopeId}>${ssrInterpolate(item.count)}</span></div></div>`);
						});
						_push(`<!--]--></div></div></div><div class="bg-white rounded-xl shadow-sm p-4 mb-6" data-v-d3fc77e8${_scopeId}><div class="grid grid-cols-1 md:grid-cols-2 gap-3" data-v-d3fc77e8${_scopeId}><div data-v-d3fc77e8${_scopeId}><label class="block text-xs font-medium text-gray-500 mb-1" data-v-d3fc77e8${_scopeId}>Kondisi</label><select class="w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary" data-v-d3fc77e8${_scopeId}><option value="all" data-v-d3fc77e8${ssrIncludeBooleanAttr(Array.isArray(condition.value) ? ssrLooseContain(condition.value, "all") : ssrLooseEqual(condition.value, "all")) ? " selected" : ""}${_scopeId}>Semua</option><option value="baik" data-v-d3fc77e8${ssrIncludeBooleanAttr(Array.isArray(condition.value) ? ssrLooseContain(condition.value, "baik") : ssrLooseEqual(condition.value, "baik")) ? " selected" : ""}${_scopeId}>Baik</option><option value="rusak_ringan" data-v-d3fc77e8${ssrIncludeBooleanAttr(Array.isArray(condition.value) ? ssrLooseContain(condition.value, "rusak_ringan") : ssrLooseEqual(condition.value, "rusak_ringan")) ? " selected" : ""}${_scopeId}>Rusak Ringan</option><option value="rusak_berat" data-v-d3fc77e8${ssrIncludeBooleanAttr(Array.isArray(condition.value) ? ssrLooseContain(condition.value, "rusak_berat") : ssrLooseEqual(condition.value, "rusak_berat")) ? " selected" : ""}${_scopeId}>Rusak Berat</option></select></div><div data-v-d3fc77e8${_scopeId}><label class="block text-xs font-medium text-gray-500 mb-1" data-v-d3fc77e8${_scopeId}>Kategori</label><select class="w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary" data-v-d3fc77e8${_scopeId}><option value="all" data-v-d3fc77e8${ssrIncludeBooleanAttr(Array.isArray(category.value) ? ssrLooseContain(category.value, "all") : ssrLooseEqual(category.value, "all")) ? " selected" : ""}${_scopeId}>Semua</option><option value="elektronik" data-v-d3fc77e8${ssrIncludeBooleanAttr(Array.isArray(category.value) ? ssrLooseContain(category.value, "elektronik") : ssrLooseEqual(category.value, "elektronik")) ? " selected" : ""}${_scopeId}>Elektronik</option><option value="furniture" data-v-d3fc77e8${ssrIncludeBooleanAttr(Array.isArray(category.value) ? ssrLooseContain(category.value, "furniture") : ssrLooseEqual(category.value, "furniture")) ? " selected" : ""}${_scopeId}>Furniture</option><option value="bangunan" data-v-d3fc77e8${ssrIncludeBooleanAttr(Array.isArray(category.value) ? ssrLooseContain(category.value, "bangunan") : ssrLooseEqual(category.value, "bangunan")) ? " selected" : ""}${_scopeId}>Bangunan</option><option value="kendaraan" data-v-d3fc77e8${ssrIncludeBooleanAttr(Array.isArray(category.value) ? ssrLooseContain(category.value, "kendaraan") : ssrLooseEqual(category.value, "kendaraan")) ? " selected" : ""}${_scopeId}>Kendaraan</option><option value="lainnya" data-v-d3fc77e8${ssrIncludeBooleanAttr(Array.isArray(category.value) ? ssrLooseContain(category.value, "lainnya") : ssrLooseEqual(category.value, "lainnya")) ? " selected" : ""}${_scopeId}>Lainnya</option></select></div></div><div class="mt-3 flex justify-end" data-v-d3fc77e8${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$1, { onClick: filterReports }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Filter`);
								else return [createTextVNode("Filter")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></div><div class="bg-white rounded-xl shadow-sm overflow-hidden" data-v-d3fc77e8${_scopeId}><table class="w-full text-sm" data-v-d3fc77e8${_scopeId}><thead class="bg-gray-50 text-gray-600 text-xs uppercase" data-v-d3fc77e8${_scopeId}><tr data-v-d3fc77e8${_scopeId}><th class="px-4 py-3 text-left" data-v-d3fc77e8${_scopeId}>Kode</th><th class="px-4 py-3 text-left" data-v-d3fc77e8${_scopeId}>Nama Aset</th><th class="px-4 py-3 text-left" data-v-d3fc77e8${_scopeId}>Kategori</th><th class="px-4 py-3 text-left" data-v-d3fc77e8${_scopeId}>Lokasi</th><th class="px-4 py-3 text-center" data-v-d3fc77e8${_scopeId}>Kondisi</th><th class="px-4 py-3 text-right" data-v-d3fc77e8${_scopeId}>Nilai Buku</th></tr></thead><tbody class="divide-y" data-v-d3fc77e8${_scopeId}><!--[-->`);
						ssrRenderList(__props.assets.data, (asset) => {
							_push(`<tr class="hover:bg-gray-50" data-v-d3fc77e8${_scopeId}><td class="px-4 py-3 font-mono text-xs" data-v-d3fc77e8${_scopeId}>${ssrInterpolate(asset.kode_aset)}</td><td class="px-4 py-3 font-medium" data-v-d3fc77e8${_scopeId}>${ssrInterpolate(asset.nama)}</td><td class="px-4 py-3" data-v-d3fc77e8${_scopeId}><span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded capitalize" data-v-d3fc77e8${_scopeId}>${ssrInterpolate(asset.kategori)}</span></td><td class="px-4 py-3" data-v-d3fc77e8${_scopeId}>${ssrInterpolate(asset.lokasi || "-")}</td><td class="px-4 py-3 text-center" data-v-d3fc77e8${_scopeId}><span class="${ssrRenderClass([{
								"bg-green-100 text-green-800": asset.kondisi === "baik",
								"bg-yellow-100 text-yellow-800": asset.kondisi === "rusak_ringan",
								"bg-red-100 text-red-800": asset.kondisi === "rusak_berat"
							}, "px-2 py-1 text-xs rounded capitalize"])}" data-v-d3fc77e8${_scopeId}>${ssrInterpolate(asset.kondisi.replace("_", " "))}</span></td><td class="px-4 py-3 text-right font-semibold" data-v-d3fc77e8${_scopeId}>Rp ${ssrInterpolate((asset.nilai_sisa || 0).toLocaleString("id-ID"))}</td></tr>`);
						});
						_push(`<!--]-->`);
						if (!__props.assets.data || __props.assets.data.length === 0) {
							_push(`<tr data-v-d3fc77e8${_scopeId}><td colspan="6" class="px-4 py-12 text-center text-gray-500" data-v-d3fc77e8${_scopeId}>`);
							_push(ssrRenderComponent(unref(BuildingLibraryIcon), { class: "w-12 h-12 mx-auto mb-3 text-gray-300" }, null, _parent, _scopeId));
							_push(`<p data-v-d3fc77e8${_scopeId}>Tidak ada data aset</p></td></tr>`);
						} else _push(`<!---->`);
						_push(`</tbody></table><div class="px-4 py-3 border-t" data-v-d3fc77e8${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$3, { links: __props.assets.links }, null, _parent, _scopeId));
						_push(`</div></div>`);
					} else return [
						createVNode(unref(Head), { title: "Laporan Aset" }),
						createVNode("div", { class: "mb-6 flex justify-between items-center" }, [createVNode("div", null, [createVNode("h1", { class: "text-2xl font-bold text-gray-800" }, "Laporan Aset & Inventaris"), createVNode("p", { class: "text-gray-500 text-sm" }, "Nilai buku dan kondisi aset masjid")]), createVNode("div", { class: "flex gap-2" }, [createVNode(_sfc_main$2, { onClick: printReport }, {
							default: withCtx(() => [createVNode(unref(PrinterIcon), { class: "w-5 h-5 mr-2 inline" }), createTextVNode(" Cetak ")]),
							_: 1
						})])]),
						createVNode("div", { class: "grid grid-cols-1 md:grid-cols-4 gap-4 mb-6" }, [
							createVNode("div", { class: "bg-white rounded-xl shadow-sm p-4 border-l-4 border-gray-500" }, [createVNode("div", { class: "text-sm text-gray-500 mb-1" }, "Total Aset"), createVNode("div", { class: "text-2xl font-bold text-gray-800" }, toDisplayString(__props.summary?.total_aset || 0), 1)]),
							createVNode("div", { class: "bg-white rounded-xl shadow-sm p-4 border-l-4 border-green-500" }, [createVNode("div", { class: "text-sm text-gray-500 mb-1" }, "Nilai Buku Total"), createVNode("div", { class: "text-lg font-bold text-green-600" }, "Rp " + toDisplayString((__props.summary?.nilai_buku || 0).toLocaleString("id-ID")), 1)]),
							createVNode("div", { class: "bg-white rounded-xl shadow-sm p-4 border-l-4 border-blue-500" }, [createVNode("div", { class: "text-sm text-gray-500 mb-1" }, "Kondisi Baik"), createVNode("div", { class: "text-2xl font-bold text-blue-600" }, toDisplayString(__props.summary?.by_condition?.find((c) => c.kondisi === "baik")?.count || 0), 1)]),
							createVNode("div", { class: "bg-white rounded-xl shadow-sm p-4 border-l-4 border-red-500" }, [createVNode("div", { class: "text-sm text-gray-500 mb-1" }, "Perlu Perbaikan"), createVNode("div", { class: "text-2xl font-bold text-red-600" }, toDisplayString((__props.summary?.by_condition?.find((c) => c.kondisi === "rusak_ringan")?.count || 0) + (__props.summary?.by_condition?.find((c) => c.kondisi === "rusak_berat")?.count || 0)), 1)])
						]),
						createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6" }, [createVNode("div", { class: "bg-white rounded-xl shadow-sm p-6" }, [createVNode("h3", { class: "font-semibold text-gray-800 mb-4" }, "Aset Berdasarkan Kondisi"), createVNode("div", { class: "space-y-3" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.summary?.by_condition, (item) => {
							return openBlock(), createBlock("div", {
								key: item.kondisi,
								class: "flex items-center justify-between"
							}, [createVNode("span", { class: "text-gray-600 capitalize" }, toDisplayString(item.kondisi.replace("_", " ")), 1), createVNode("div", { class: "flex items-center gap-3" }, [createVNode("div", { class: "w-40 bg-gray-200 rounded-full h-2" }, [createVNode("div", {
								class: [{
									"bg-green-500": item.kondisi === "baik",
									"bg-yellow-500": item.kondisi === "rusak_ringan",
									"bg-red-500": item.kondisi === "rusak_berat"
								}, "h-2 rounded-full"],
								style: { width: `${item.count / __props.summary.total_aset * 100}%` }
							}, null, 6)]), createVNode("span", { class: "font-semibold text-gray-800 w-12 text-right" }, toDisplayString(item.count), 1)])]);
						}), 128))])]), createVNode("div", { class: "bg-white rounded-xl shadow-sm p-6" }, [createVNode("h3", { class: "font-semibold text-gray-800 mb-4" }, "Aset Berdasarkan Kategori"), createVNode("div", { class: "space-y-3" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.summary?.by_category, (item) => {
							return openBlock(), createBlock("div", {
								key: item.kategori,
								class: "flex items-center justify-between"
							}, [createVNode("span", { class: "text-gray-600 capitalize" }, toDisplayString(item.kategori), 1), createVNode("div", { class: "flex items-center gap-3" }, [createVNode("div", { class: "w-40 bg-gray-200 rounded-full h-2" }, [createVNode("div", {
								class: "bg-blue-500 h-2 rounded-full",
								style: { width: `${item.count / __props.summary.total_aset * 100}%` }
							}, null, 4)]), createVNode("span", { class: "font-semibold text-gray-800 w-12 text-right" }, toDisplayString(item.count), 1)])]);
						}), 128))])])]),
						createVNode("div", { class: "bg-white rounded-xl shadow-sm p-4 mb-6" }, [createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-3" }, [createVNode("div", null, [createVNode("label", { class: "block text-xs font-medium text-gray-500 mb-1" }, "Kondisi"), withDirectives(createVNode("select", {
							"onUpdate:modelValue": ($event) => condition.value = $event,
							class: "w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
						}, [
							createVNode("option", { value: "all" }, "Semua"),
							createVNode("option", { value: "baik" }, "Baik"),
							createVNode("option", { value: "rusak_ringan" }, "Rusak Ringan"),
							createVNode("option", { value: "rusak_berat" }, "Rusak Berat")
						], 8, ["onUpdate:modelValue"]), [[vModelSelect, condition.value]])]), createVNode("div", null, [createVNode("label", { class: "block text-xs font-medium text-gray-500 mb-1" }, "Kategori"), withDirectives(createVNode("select", {
							"onUpdate:modelValue": ($event) => category.value = $event,
							class: "w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
						}, [
							createVNode("option", { value: "all" }, "Semua"),
							createVNode("option", { value: "elektronik" }, "Elektronik"),
							createVNode("option", { value: "furniture" }, "Furniture"),
							createVNode("option", { value: "bangunan" }, "Bangunan"),
							createVNode("option", { value: "kendaraan" }, "Kendaraan"),
							createVNode("option", { value: "lainnya" }, "Lainnya")
						], 8, ["onUpdate:modelValue"]), [[vModelSelect, category.value]])])]), createVNode("div", { class: "mt-3 flex justify-end" }, [createVNode(_sfc_main$1, { onClick: filterReports }, {
							default: withCtx(() => [createTextVNode("Filter")]),
							_: 1
						})])]),
						createVNode("div", { class: "bg-white rounded-xl shadow-sm overflow-hidden" }, [createVNode("table", { class: "w-full text-sm" }, [createVNode("thead", { class: "bg-gray-50 text-gray-600 text-xs uppercase" }, [createVNode("tr", null, [
							createVNode("th", { class: "px-4 py-3 text-left" }, "Kode"),
							createVNode("th", { class: "px-4 py-3 text-left" }, "Nama Aset"),
							createVNode("th", { class: "px-4 py-3 text-left" }, "Kategori"),
							createVNode("th", { class: "px-4 py-3 text-left" }, "Lokasi"),
							createVNode("th", { class: "px-4 py-3 text-center" }, "Kondisi"),
							createVNode("th", { class: "px-4 py-3 text-right" }, "Nilai Buku")
						])]), createVNode("tbody", { class: "divide-y" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.assets.data, (asset) => {
							return openBlock(), createBlock("tr", {
								key: asset.id,
								class: "hover:bg-gray-50"
							}, [
								createVNode("td", { class: "px-4 py-3 font-mono text-xs" }, toDisplayString(asset.kode_aset), 1),
								createVNode("td", { class: "px-4 py-3 font-medium" }, toDisplayString(asset.nama), 1),
								createVNode("td", { class: "px-4 py-3" }, [createVNode("span", { class: "px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded capitalize" }, toDisplayString(asset.kategori), 1)]),
								createVNode("td", { class: "px-4 py-3" }, toDisplayString(asset.lokasi || "-"), 1),
								createVNode("td", { class: "px-4 py-3 text-center" }, [createVNode("span", { class: [{
									"bg-green-100 text-green-800": asset.kondisi === "baik",
									"bg-yellow-100 text-yellow-800": asset.kondisi === "rusak_ringan",
									"bg-red-100 text-red-800": asset.kondisi === "rusak_berat"
								}, "px-2 py-1 text-xs rounded capitalize"] }, toDisplayString(asset.kondisi.replace("_", " ")), 3)]),
								createVNode("td", { class: "px-4 py-3 text-right font-semibold" }, "Rp " + toDisplayString((asset.nilai_sisa || 0).toLocaleString("id-ID")), 1)
							]);
						}), 128)), !__props.assets.data || __props.assets.data.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [createVNode("td", {
							colspan: "6",
							class: "px-4 py-12 text-center text-gray-500"
						}, [createVNode(unref(BuildingLibraryIcon), { class: "w-12 h-12 mx-auto mb-3 text-gray-300" }), createVNode("p", null, "Tidak ada data aset")])])) : createCommentVNode("", true)])]), createVNode("div", { class: "px-4 py-3 border-t" }, [createVNode(_sfc_main$3, { links: __props.assets.links }, null, 8, ["links"])])])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Reports/Assets.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Assets_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-d3fc77e8"]]);
//#endregion
export { Assets_default as default };
