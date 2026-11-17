import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BOaGB7Aw.js";
import { t as _sfc_main$1 } from "./PrimaryButton-B1NJcOT8.js";
import { t as _sfc_main$2 } from "./SecondaryButton-BD33s9TB.js";
import { t as AdminLayout_default } from "./AdminLayout-JKKJHCcy.js";
import { t as _sfc_main$3 } from "./Pagination-DiptkPBm.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelSelect, vModelText, withCtx, withDirectives } from "vue";
import { Head, router } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { GiftIcon, PrinterIcon } from "@heroicons/vue/24/outline";
//#region resources/js/Pages/Reports/Ziswaf.vue
var _sfc_main = {
	__name: "Ziswaf",
	__ssrInlineRender: true,
	props: {
		donations: Object,
		summary: Object,
		filters: Object
	},
	setup(__props) {
		const props = __props;
		const startDate = ref(props.filters?.startDate || "");
		const endDate = ref(props.filters?.endDate || "");
		const type = ref(props.filters?.type || "all");
		const filterReports = () => {
			router.get(route("reports.ziswaf"), {
				start_date: startDate.value,
				end_date: endDate.value,
				type: type.value
			}, { preserveState: true });
		};
		const printReport = () => {
			window.print();
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(AdminLayout_default, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "Laporan ZISWAF" }, null, _parent, _scopeId));
						_push(`<div class="mb-6 flex justify-between items-center" data-v-2150ee16${_scopeId}><div data-v-2150ee16${_scopeId}><h1 class="text-2xl font-bold text-gray-800" data-v-2150ee16${_scopeId}>Laporan ZISWAF</h1><p class="text-gray-500 text-sm" data-v-2150ee16${_scopeId}>Zakat, Infaq, Sedekah, dan Wakaf</p></div><div class="flex gap-2" data-v-2150ee16${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$2, { onClick: printReport }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(unref(PrinterIcon), { class: "w-5 h-5 mr-2 inline" }, null, _parent, _scopeId));
									_push(` Cetak `);
								} else return [createVNode(unref(PrinterIcon), { class: "w-5 h-5 mr-2 inline" }), createTextVNode(" Cetak ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6" data-v-2150ee16${_scopeId}><div class="bg-white rounded-xl shadow-sm p-4 border-l-4 border-yellow-500" data-v-2150ee16${_scopeId}><div class="text-sm text-gray-500 mb-1" data-v-2150ee16${_scopeId}>Total Donasi</div><div class="text-lg font-bold text-gray-800" data-v-2150ee16${_scopeId}>Rp ${ssrInterpolate((__props.summary?.total || 0).toLocaleString("id-ID"))}</div></div><!--[-->`);
						ssrRenderList(__props.summary?.by_type, (item) => {
							_push(`<div class="${ssrRenderClass([{
								"border-green-500": item.jenis === "zakat_fitrah",
								"border-blue-500": item.jenis === "zakat_maal",
								"border-purple-500": item.jenis === "infaq",
								"border-pink-500": item.jenis === "sedekah",
								"border-indigo-500": item.jenis === "wakaf"
							}, "bg-white rounded-xl shadow-sm p-4 border-l-4"])}" data-v-2150ee16${_scopeId}><div class="text-sm text-gray-500 mb-1 capitalize" data-v-2150ee16${_scopeId}>${ssrInterpolate(item.jenis.replace("_", " "))}</div><div class="text-lg font-bold text-gray-800" data-v-2150ee16${_scopeId}>Rp ${ssrInterpolate((item.total || 0).toLocaleString("id-ID"))}</div><div class="text-xs text-gray-400" data-v-2150ee16${_scopeId}>${ssrInterpolate(item.count)} transaksi</div></div>`);
						});
						_push(`<!--]--></div><div class="bg-white rounded-xl shadow-sm p-6 mb-6" data-v-2150ee16${_scopeId}><h3 class="font-semibold text-gray-800 mb-4" data-v-2150ee16${_scopeId}>Tren Donasi Bulanan</h3><div class="space-y-3" data-v-2150ee16${_scopeId}><!--[-->`);
						ssrRenderList(__props.summary?.by_month, (item) => {
							_push(`<div class="flex items-center justify-between" data-v-2150ee16${_scopeId}><span class="text-gray-600" data-v-2150ee16${_scopeId}>${ssrInterpolate((/* @__PURE__ */ new Date(item.month + "-01")).toLocaleDateString("id-ID", {
								year: "numeric",
								month: "long"
							}))}</span><div class="flex items-center gap-3" data-v-2150ee16${_scopeId}><div class="w-64 bg-gray-200 rounded-full h-3" data-v-2150ee16${_scopeId}><div class="bg-yellow-500 h-3 rounded-full" style="${ssrRenderStyle({ width: `${item.total / Math.max(...__props.summary.by_month.map((m) => m.total)) * 100}%` })}" data-v-2150ee16${_scopeId}></div></div><span class="font-semibold text-gray-800 w-32 text-right" data-v-2150ee16${_scopeId}>Rp ${ssrInterpolate((item.total || 0).toLocaleString("id-ID"))}</span></div></div>`);
						});
						_push(`<!--]--></div></div><div class="bg-white rounded-xl shadow-sm p-4 mb-6" data-v-2150ee16${_scopeId}><div class="grid grid-cols-1 md:grid-cols-3 gap-3" data-v-2150ee16${_scopeId}><div data-v-2150ee16${_scopeId}><label class="block text-xs font-medium text-gray-500 mb-1" data-v-2150ee16${_scopeId}>Tanggal Mulai</label><input${ssrRenderAttr("value", startDate.value)} type="date" class="w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary" data-v-2150ee16${_scopeId}></div><div data-v-2150ee16${_scopeId}><label class="block text-xs font-medium text-gray-500 mb-1" data-v-2150ee16${_scopeId}>Tanggal Akhir</label><input${ssrRenderAttr("value", endDate.value)} type="date" class="w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary" data-v-2150ee16${_scopeId}></div><div data-v-2150ee16${_scopeId}><label class="block text-xs font-medium text-gray-500 mb-1" data-v-2150ee16${_scopeId}>Jenis ZISWAF</label><select class="w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary" data-v-2150ee16${_scopeId}><option value="all" data-v-2150ee16${ssrIncludeBooleanAttr(Array.isArray(type.value) ? ssrLooseContain(type.value, "all") : ssrLooseEqual(type.value, "all")) ? " selected" : ""}${_scopeId}>Semua</option><option value="zakat_fitrah" data-v-2150ee16${ssrIncludeBooleanAttr(Array.isArray(type.value) ? ssrLooseContain(type.value, "zakat_fitrah") : ssrLooseEqual(type.value, "zakat_fitrah")) ? " selected" : ""}${_scopeId}>Zakat Fitrah</option><option value="zakat_maal" data-v-2150ee16${ssrIncludeBooleanAttr(Array.isArray(type.value) ? ssrLooseContain(type.value, "zakat_maal") : ssrLooseEqual(type.value, "zakat_maal")) ? " selected" : ""}${_scopeId}>Zakat Maal</option><option value="infaq" data-v-2150ee16${ssrIncludeBooleanAttr(Array.isArray(type.value) ? ssrLooseContain(type.value, "infaq") : ssrLooseEqual(type.value, "infaq")) ? " selected" : ""}${_scopeId}>Infaq</option><option value="sedekah" data-v-2150ee16${ssrIncludeBooleanAttr(Array.isArray(type.value) ? ssrLooseContain(type.value, "sedekah") : ssrLooseEqual(type.value, "sedekah")) ? " selected" : ""}${_scopeId}>Sedekah</option><option value="wakaf" data-v-2150ee16${ssrIncludeBooleanAttr(Array.isArray(type.value) ? ssrLooseContain(type.value, "wakaf") : ssrLooseEqual(type.value, "wakaf")) ? " selected" : ""}${_scopeId}>Wakaf</option></select></div></div><div class="mt-3 flex justify-end" data-v-2150ee16${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$1, { onClick: filterReports }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Filter`);
								else return [createTextVNode("Filter")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></div><div class="bg-white rounded-xl shadow-sm overflow-hidden" data-v-2150ee16${_scopeId}><table class="w-full text-sm" data-v-2150ee16${_scopeId}><thead class="bg-gray-50 text-gray-600 text-xs uppercase" data-v-2150ee16${_scopeId}><tr data-v-2150ee16${_scopeId}><th class="px-4 py-3 text-left" data-v-2150ee16${_scopeId}>Tanggal</th><th class="px-4 py-3 text-left" data-v-2150ee16${_scopeId}>Jenis</th><th class="px-4 py-3 text-left" data-v-2150ee16${_scopeId}>Donatur</th><th class="px-4 py-3 text-left" data-v-2150ee16${_scopeId}>Metode</th><th class="px-4 py-3 text-right" data-v-2150ee16${_scopeId}>Jumlah</th><th class="px-4 py-3 text-center" data-v-2150ee16${_scopeId}>Keterangan</th></tr></thead><tbody class="divide-y" data-v-2150ee16${_scopeId}><!--[-->`);
						ssrRenderList(__props.donations.data, (donation) => {
							_push(`<tr class="hover:bg-gray-50" data-v-2150ee16${_scopeId}><td class="px-4 py-3" data-v-2150ee16${_scopeId}>${ssrInterpolate(new Date(donation.tanggal).toLocaleDateString("id-ID"))}</td><td class="px-4 py-3" data-v-2150ee16${_scopeId}><span class="${ssrRenderClass([{
								"bg-green-100 text-green-800": donation.jenis === "zakat_fitrah",
								"bg-blue-100 text-blue-800": donation.jenis === "zakat_maal",
								"bg-purple-100 text-purple-800": donation.jenis === "infaq",
								"bg-pink-100 text-pink-800": donation.jenis === "sedekah",
								"bg-indigo-100 text-indigo-800": donation.jenis === "wakaf"
							}, "px-2 py-1 text-xs rounded capitalize"])}" data-v-2150ee16${_scopeId}>${ssrInterpolate(donation.jenis.replace("_", " "))}</span></td><td class="px-4 py-3" data-v-2150ee16${_scopeId}>`);
							if (donation.is_anonymous) _push(`<div class="text-gray-400 italic" data-v-2150ee16${_scopeId}>Anonim</div>`);
							else _push(`<div data-v-2150ee16${_scopeId}><div class="font-medium" data-v-2150ee16${_scopeId}>${ssrInterpolate(donation.nama_donatur || "-")}</div><div class="text-xs text-gray-500" data-v-2150ee16${_scopeId}>${ssrInterpolate(donation.no_hp_donatur || "-")}</div></div>`);
							_push(`</td><td class="px-4 py-3 capitalize" data-v-2150ee16${_scopeId}>${ssrInterpolate(donation.metode || "tunai")}</td><td class="px-4 py-3 text-right font-semibold text-green-600" data-v-2150ee16${_scopeId}>+ Rp ${ssrInterpolate((donation.jumlah || 0).toLocaleString("id-ID"))}</td><td class="px-4 py-3 text-center text-sm" data-v-2150ee16${_scopeId}>${ssrInterpolate(donation.catatan || "-")}</td></tr>`);
						});
						_push(`<!--]-->`);
						if (!__props.donations.data || __props.donations.data.length === 0) {
							_push(`<tr data-v-2150ee16${_scopeId}><td colspan="6" class="px-4 py-12 text-center text-gray-500" data-v-2150ee16${_scopeId}>`);
							_push(ssrRenderComponent(unref(GiftIcon), { class: "w-12 h-12 mx-auto mb-3 text-gray-300" }, null, _parent, _scopeId));
							_push(`<p data-v-2150ee16${_scopeId}>Tidak ada data donasi</p></td></tr>`);
						} else _push(`<!---->`);
						_push(`</tbody></table><div class="px-4 py-3 border-t" data-v-2150ee16${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$3, { links: __props.donations.links }, null, _parent, _scopeId));
						_push(`</div></div>`);
					} else return [
						createVNode(unref(Head), { title: "Laporan ZISWAF" }),
						createVNode("div", { class: "mb-6 flex justify-between items-center" }, [createVNode("div", null, [createVNode("h1", { class: "text-2xl font-bold text-gray-800" }, "Laporan ZISWAF"), createVNode("p", { class: "text-gray-500 text-sm" }, "Zakat, Infaq, Sedekah, dan Wakaf")]), createVNode("div", { class: "flex gap-2" }, [createVNode(_sfc_main$2, { onClick: printReport }, {
							default: withCtx(() => [createVNode(unref(PrinterIcon), { class: "w-5 h-5 mr-2 inline" }), createTextVNode(" Cetak ")]),
							_: 1
						})])]),
						createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6" }, [createVNode("div", { class: "bg-white rounded-xl shadow-sm p-4 border-l-4 border-yellow-500" }, [createVNode("div", { class: "text-sm text-gray-500 mb-1" }, "Total Donasi"), createVNode("div", { class: "text-lg font-bold text-gray-800" }, "Rp " + toDisplayString((__props.summary?.total || 0).toLocaleString("id-ID")), 1)]), (openBlock(true), createBlock(Fragment, null, renderList(__props.summary?.by_type, (item) => {
							return openBlock(), createBlock("div", {
								key: item.jenis,
								class: ["bg-white rounded-xl shadow-sm p-4 border-l-4", {
									"border-green-500": item.jenis === "zakat_fitrah",
									"border-blue-500": item.jenis === "zakat_maal",
									"border-purple-500": item.jenis === "infaq",
									"border-pink-500": item.jenis === "sedekah",
									"border-indigo-500": item.jenis === "wakaf"
								}]
							}, [
								createVNode("div", { class: "text-sm text-gray-500 mb-1 capitalize" }, toDisplayString(item.jenis.replace("_", " ")), 1),
								createVNode("div", { class: "text-lg font-bold text-gray-800" }, "Rp " + toDisplayString((item.total || 0).toLocaleString("id-ID")), 1),
								createVNode("div", { class: "text-xs text-gray-400" }, toDisplayString(item.count) + " transaksi", 1)
							], 2);
						}), 128))]),
						createVNode("div", { class: "bg-white rounded-xl shadow-sm p-6 mb-6" }, [createVNode("h3", { class: "font-semibold text-gray-800 mb-4" }, "Tren Donasi Bulanan"), createVNode("div", { class: "space-y-3" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.summary?.by_month, (item) => {
							return openBlock(), createBlock("div", {
								key: item.month,
								class: "flex items-center justify-between"
							}, [createVNode("span", { class: "text-gray-600" }, toDisplayString((/* @__PURE__ */ new Date(item.month + "-01")).toLocaleDateString("id-ID", {
								year: "numeric",
								month: "long"
							})), 1), createVNode("div", { class: "flex items-center gap-3" }, [createVNode("div", { class: "w-64 bg-gray-200 rounded-full h-3" }, [createVNode("div", {
								class: "bg-yellow-500 h-3 rounded-full",
								style: { width: `${item.total / Math.max(...__props.summary.by_month.map((m) => m.total)) * 100}%` }
							}, null, 4)]), createVNode("span", { class: "font-semibold text-gray-800 w-32 text-right" }, "Rp " + toDisplayString((item.total || 0).toLocaleString("id-ID")), 1)])]);
						}), 128))])]),
						createVNode("div", { class: "bg-white rounded-xl shadow-sm p-4 mb-6" }, [createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-3" }, [
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
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-medium text-gray-500 mb-1" }, "Jenis ZISWAF"), withDirectives(createVNode("select", {
								"onUpdate:modelValue": ($event) => type.value = $event,
								class: "w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
							}, [
								createVNode("option", { value: "all" }, "Semua"),
								createVNode("option", { value: "zakat_fitrah" }, "Zakat Fitrah"),
								createVNode("option", { value: "zakat_maal" }, "Zakat Maal"),
								createVNode("option", { value: "infaq" }, "Infaq"),
								createVNode("option", { value: "sedekah" }, "Sedekah"),
								createVNode("option", { value: "wakaf" }, "Wakaf")
							], 8, ["onUpdate:modelValue"]), [[vModelSelect, type.value]])])
						]), createVNode("div", { class: "mt-3 flex justify-end" }, [createVNode(_sfc_main$1, { onClick: filterReports }, {
							default: withCtx(() => [createTextVNode("Filter")]),
							_: 1
						})])]),
						createVNode("div", { class: "bg-white rounded-xl shadow-sm overflow-hidden" }, [createVNode("table", { class: "w-full text-sm" }, [createVNode("thead", { class: "bg-gray-50 text-gray-600 text-xs uppercase" }, [createVNode("tr", null, [
							createVNode("th", { class: "px-4 py-3 text-left" }, "Tanggal"),
							createVNode("th", { class: "px-4 py-3 text-left" }, "Jenis"),
							createVNode("th", { class: "px-4 py-3 text-left" }, "Donatur"),
							createVNode("th", { class: "px-4 py-3 text-left" }, "Metode"),
							createVNode("th", { class: "px-4 py-3 text-right" }, "Jumlah"),
							createVNode("th", { class: "px-4 py-3 text-center" }, "Keterangan")
						])]), createVNode("tbody", { class: "divide-y" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.donations.data, (donation) => {
							return openBlock(), createBlock("tr", {
								key: donation.id,
								class: "hover:bg-gray-50"
							}, [
								createVNode("td", { class: "px-4 py-3" }, toDisplayString(new Date(donation.tanggal).toLocaleDateString("id-ID")), 1),
								createVNode("td", { class: "px-4 py-3" }, [createVNode("span", { class: [{
									"bg-green-100 text-green-800": donation.jenis === "zakat_fitrah",
									"bg-blue-100 text-blue-800": donation.jenis === "zakat_maal",
									"bg-purple-100 text-purple-800": donation.jenis === "infaq",
									"bg-pink-100 text-pink-800": donation.jenis === "sedekah",
									"bg-indigo-100 text-indigo-800": donation.jenis === "wakaf"
								}, "px-2 py-1 text-xs rounded capitalize"] }, toDisplayString(donation.jenis.replace("_", " ")), 3)]),
								createVNode("td", { class: "px-4 py-3" }, [donation.is_anonymous ? (openBlock(), createBlock("div", {
									key: 0,
									class: "text-gray-400 italic"
								}, "Anonim")) : (openBlock(), createBlock("div", { key: 1 }, [createVNode("div", { class: "font-medium" }, toDisplayString(donation.nama_donatur || "-"), 1), createVNode("div", { class: "text-xs text-gray-500" }, toDisplayString(donation.no_hp_donatur || "-"), 1)]))]),
								createVNode("td", { class: "px-4 py-3 capitalize" }, toDisplayString(donation.metode || "tunai"), 1),
								createVNode("td", { class: "px-4 py-3 text-right font-semibold text-green-600" }, "+ Rp " + toDisplayString((donation.jumlah || 0).toLocaleString("id-ID")), 1),
								createVNode("td", { class: "px-4 py-3 text-center text-sm" }, toDisplayString(donation.catatan || "-"), 1)
							]);
						}), 128)), !__props.donations.data || __props.donations.data.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [createVNode("td", {
							colspan: "6",
							class: "px-4 py-12 text-center text-gray-500"
						}, [createVNode(unref(GiftIcon), { class: "w-12 h-12 mx-auto mb-3 text-gray-300" }), createVNode("p", null, "Tidak ada data donasi")])])) : createCommentVNode("", true)])]), createVNode("div", { class: "px-4 py-3 border-t" }, [createVNode(_sfc_main$3, { links: __props.donations.links }, null, 8, ["links"])])])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Reports/Ziswaf.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Ziswaf_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-2150ee16"]]);
//#endregion
export { Ziswaf_default as default };
