import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BOaGB7Aw.js";
import { t as _sfc_main$1 } from "./PrimaryButton-B1NJcOT8.js";
import { t as _sfc_main$2 } from "./SecondaryButton-BD33s9TB.js";
import { t as AdminLayout_default } from "./AdminLayout-JKKJHCcy.js";
import { t as _sfc_main$3 } from "./Pagination-DiptkPBm.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelSelect, vModelText, withCtx, withDirectives } from "vue";
import { Head, router } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { ArrowDownTrayIcon, PrinterIcon } from "@heroicons/vue/24/outline";
//#region resources/js/Pages/Reports/Finance.vue
var _sfc_main = {
	__name: "Finance",
	__ssrInlineRender: true,
	props: {
		transactions: Object,
		summary: Object,
		filters: Object,
		categories: Array
	},
	setup(__props) {
		const props = __props;
		const startDate = ref(props.filters?.startDate || "");
		const endDate = ref(props.filters?.endDate || "");
		const type = ref(props.filters?.type || "all");
		const category = ref(props.filters?.category || "all");
		const kasBox = ref(props.filters?.kas_box || "all");
		const filterReports = () => {
			router.get(route("reports.finance"), {
				start_date: startDate.value,
				end_date: endDate.value,
				type: type.value,
				category: category.value,
				kas_box: kasBox.value
			}, { preserveState: true });
		};
		const exportToExcel = () => {
			alert("Fitur export Excel akan segera hadir");
		};
		const printReport = () => {
			window.print();
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(AdminLayout_default, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "Laporan Keuangan" }, null, _parent, _scopeId));
						_push(`<div class="mb-6 flex justify-between items-center" data-v-5e25d9f4${_scopeId}><div data-v-5e25d9f4${_scopeId}><h1 class="text-2xl font-bold text-gray-800" data-v-5e25d9f4${_scopeId}>Laporan Keuangan</h1><p class="text-gray-500 text-sm" data-v-5e25d9f4${_scopeId}>Analisis pemasukan dan pengeluaran masjid</p></div><div class="flex gap-2" data-v-5e25d9f4${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$2, { onClick: exportToExcel }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(unref(ArrowDownTrayIcon), { class: "w-5 h-5 mr-2 inline" }, null, _parent, _scopeId));
									_push(` Export Excel `);
								} else return [createVNode(unref(ArrowDownTrayIcon), { class: "w-5 h-5 mr-2 inline" }), createTextVNode(" Export Excel ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$1, { onClick: printReport }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(unref(PrinterIcon), { class: "w-5 h-5 mr-2 inline" }, null, _parent, _scopeId));
									_push(` Cetak `);
								} else return [createVNode(unref(PrinterIcon), { class: "w-5 h-5 mr-2 inline" }), createTextVNode(" Cetak ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></div><div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6" data-v-5e25d9f4${_scopeId}><div class="bg-green-50 rounded-xl p-4 border border-green-200" data-v-5e25d9f4${_scopeId}><div class="text-sm text-green-600 mb-1" data-v-5e25d9f4${_scopeId}>Total Pemasukan</div><div class="text-2xl font-bold text-green-700" data-v-5e25d9f4${_scopeId}>Rp ${ssrInterpolate((__props.summary?.total_pemasukan || 0).toLocaleString("id-ID"))}</div></div><div class="bg-red-50 rounded-xl p-4 border border-red-200" data-v-5e25d9f4${_scopeId}><div class="text-sm text-red-600 mb-1" data-v-5e25d9f4${_scopeId}>Total Pengeluaran</div><div class="text-2xl font-bold text-red-700" data-v-5e25d9f4${_scopeId}>Rp ${ssrInterpolate((__props.summary?.total_pengeluaran || 0).toLocaleString("id-ID"))}</div></div><div class="${ssrRenderClass([__props.summary?.saldo >= 0 ? "bg-blue-50 border-blue-200" : "bg-orange-50 border-orange-200", "rounded-xl p-4 border"])}" data-v-5e25d9f4${_scopeId}><div class="${ssrRenderClass([__props.summary?.saldo >= 0 ? "text-blue-600" : "text-orange-600", "text-sm mb-1"])}" data-v-5e25d9f4${_scopeId}>Saldo</div><div class="${ssrRenderClass([__props.summary?.saldo >= 0 ? "text-blue-700" : "text-orange-700", "text-2xl font-bold"])}" data-v-5e25d9f4${_scopeId}>Rp ${ssrInterpolate((__props.summary?.saldo || 0).toLocaleString("id-ID"))}</div></div></div><div class="bg-white rounded-xl shadow-sm p-4 mb-6" data-v-5e25d9f4${_scopeId}><div class="grid grid-cols-1 md:grid-cols-5 gap-3" data-v-5e25d9f4${_scopeId}><div data-v-5e25d9f4${_scopeId}><label class="block text-xs font-medium text-gray-500 mb-1" data-v-5e25d9f4${_scopeId}>Tanggal Mulai</label><input${ssrRenderAttr("value", startDate.value)} type="date" class="w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary" data-v-5e25d9f4${_scopeId}></div><div data-v-5e25d9f4${_scopeId}><label class="block text-xs font-medium text-gray-500 mb-1" data-v-5e25d9f4${_scopeId}>Tanggal Akhir</label><input${ssrRenderAttr("value", endDate.value)} type="date" class="w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary" data-v-5e25d9f4${_scopeId}></div><div data-v-5e25d9f4${_scopeId}><label class="block text-xs font-medium text-gray-500 mb-1" data-v-5e25d9f4${_scopeId}>Jenis</label><select class="w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary" data-v-5e25d9f4${_scopeId}><option value="all" data-v-5e25d9f4${ssrIncludeBooleanAttr(Array.isArray(type.value) ? ssrLooseContain(type.value, "all") : ssrLooseEqual(type.value, "all")) ? " selected" : ""}${_scopeId}>Semua</option><option value="pemasukan" data-v-5e25d9f4${ssrIncludeBooleanAttr(Array.isArray(type.value) ? ssrLooseContain(type.value, "pemasukan") : ssrLooseEqual(type.value, "pemasukan")) ? " selected" : ""}${_scopeId}>Pemasukan</option><option value="pengeluaran" data-v-5e25d9f4${ssrIncludeBooleanAttr(Array.isArray(type.value) ? ssrLooseContain(type.value, "pengeluaran") : ssrLooseEqual(type.value, "pengeluaran")) ? " selected" : ""}${_scopeId}>Pengeluaran</option></select></div><div data-v-5e25d9f4${_scopeId}><label class="block text-xs font-medium text-gray-500 mb-1" data-v-5e25d9f4${_scopeId}>Kategori</label><select class="w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary" data-v-5e25d9f4${_scopeId}><option value="all" data-v-5e25d9f4${ssrIncludeBooleanAttr(Array.isArray(category.value) ? ssrLooseContain(category.value, "all") : ssrLooseEqual(category.value, "all")) ? " selected" : ""}${_scopeId}>Semua</option><!--[-->`);
						ssrRenderList(__props.categories, (cat) => {
							_push(`<option${ssrRenderAttr("value", cat.id)} data-v-5e25d9f4${ssrIncludeBooleanAttr(Array.isArray(category.value) ? ssrLooseContain(category.value, cat.id) : ssrLooseEqual(category.value, cat.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(cat.nama)}</option>`);
						});
						_push(`<!--]--></select></div><div data-v-5e25d9f4${_scopeId}><label class="block text-xs font-medium text-gray-500 mb-1" data-v-5e25d9f4${_scopeId}>Kas Box</label><select class="w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary" data-v-5e25d9f4${_scopeId}><option value="all" data-v-5e25d9f4${ssrIncludeBooleanAttr(Array.isArray(kasBox.value) ? ssrLooseContain(kasBox.value, "all") : ssrLooseEqual(kasBox.value, "all")) ? " selected" : ""}${_scopeId}>Semua</option><option value="umum" data-v-5e25d9f4${ssrIncludeBooleanAttr(Array.isArray(kasBox.value) ? ssrLooseContain(kasBox.value, "umum") : ssrLooseEqual(kasBox.value, "umum")) ? " selected" : ""}${_scopeId}>Kas Umum</option><option value="tpq" data-v-5e25d9f4${ssrIncludeBooleanAttr(Array.isArray(kasBox.value) ? ssrLooseContain(kasBox.value, "tpq") : ssrLooseEqual(kasBox.value, "tpq")) ? " selected" : ""}${_scopeId}>Kas TPQ</option><option value="pembangunan" data-v-5e25d9f4${ssrIncludeBooleanAttr(Array.isArray(kasBox.value) ? ssrLooseContain(kasBox.value, "pembangunan") : ssrLooseEqual(kasBox.value, "pembangunan")) ? " selected" : ""}${_scopeId}>Kas Pembangunan</option></select></div></div><div class="mt-3 flex justify-end" data-v-5e25d9f4${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$1, { onClick: filterReports }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Filter`);
								else return [createTextVNode("Filter")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></div><div class="bg-white rounded-xl shadow-sm overflow-hidden" data-v-5e25d9f4${_scopeId}><table class="w-full text-sm" data-v-5e25d9f4${_scopeId}><thead class="bg-gray-50 text-gray-600 text-xs uppercase" data-v-5e25d9f4${_scopeId}><tr data-v-5e25d9f4${_scopeId}><th class="px-4 py-3 text-left" data-v-5e25d9f4${_scopeId}>Tanggal</th><th class="px-4 py-3 text-left" data-v-5e25d9f4${_scopeId}>No. Transaksi</th><th class="px-4 py-3 text-left" data-v-5e25d9f4${_scopeId}>Keterangan</th><th class="px-4 py-3 text-left" data-v-5e25d9f4${_scopeId}>Kategori</th><th class="px-4 py-3 text-center" data-v-5e25d9f4${_scopeId}>Kas Box</th><th class="px-4 py-3 text-right" data-v-5e25d9f4${_scopeId}>Jumlah</th><th class="px-4 py-3 text-center" data-v-5e25d9f4${_scopeId}>Status</th></tr></thead><tbody class="divide-y" data-v-5e25d9f4${_scopeId}><!--[-->`);
						ssrRenderList(__props.transactions.data, (trx) => {
							_push(`<tr class="hover:bg-gray-50" data-v-5e25d9f4${_scopeId}><td class="px-4 py-3" data-v-5e25d9f4${_scopeId}>${ssrInterpolate(new Date(trx.tanggal).toLocaleDateString("id-ID"))}</td><td class="px-4 py-3 font-mono text-xs" data-v-5e25d9f4${_scopeId}>${ssrInterpolate(trx.no_transaksi)}</td><td class="px-4 py-3" data-v-5e25d9f4${_scopeId}>${ssrInterpolate(trx.keterangan)}</td><td class="px-4 py-3" data-v-5e25d9f4${_scopeId}><span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded" data-v-5e25d9f4${_scopeId}>${ssrInterpolate(trx.category?.nama || "-")}</span></td><td class="px-4 py-3 text-center" data-v-5e25d9f4${_scopeId}><span class="${ssrRenderClass([{
								"bg-blue-100 text-blue-800": trx.kas_box === "umum",
								"bg-green-100 text-green-800": trx.kas_box === "tpq",
								"bg-purple-100 text-purple-800": trx.kas_box === "pembangunan"
							}, "px-2 py-1 text-xs rounded"])}" data-v-5e25d9f4${_scopeId}>${ssrInterpolate(trx.kas_box)}</span></td><td class="${ssrRenderClass([trx.jenis === "pemasukan" ? "text-green-600" : "text-red-600", "px-4 py-3 text-right font-semibold"])}" data-v-5e25d9f4${_scopeId}>${ssrInterpolate(trx.jenis === "pemasukan" ? "+" : "-")} Rp ${ssrInterpolate(trx.jumlah.toLocaleString("id-ID"))}</td><td class="px-4 py-3 text-center" data-v-5e25d9f4${_scopeId}><span class="${ssrRenderClass([{
								"bg-green-100 text-green-800": trx.status === "approved",
								"bg-yellow-100 text-yellow-800": trx.status === "pending",
								"bg-red-100 text-red-800": trx.status === "rejected"
							}, "px-2 py-1 text-xs rounded"])}" data-v-5e25d9f4${_scopeId}>${ssrInterpolate(trx.status)}</span></td></tr>`);
						});
						_push(`<!--]-->`);
						if (!__props.transactions.data || __props.transactions.data.length === 0) _push(`<tr data-v-5e25d9f4${_scopeId}><td colspan="7" class="px-4 py-12 text-center text-gray-500" data-v-5e25d9f4${_scopeId}>Tidak ada data transaksi</td></tr>`);
						else _push(`<!---->`);
						_push(`</tbody></table><div class="px-4 py-3 border-t" data-v-5e25d9f4${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$3, { links: __props.transactions.links }, null, _parent, _scopeId));
						_push(`</div></div>`);
					} else return [
						createVNode(unref(Head), { title: "Laporan Keuangan" }),
						createVNode("div", { class: "mb-6 flex justify-between items-center" }, [createVNode("div", null, [createVNode("h1", { class: "text-2xl font-bold text-gray-800" }, "Laporan Keuangan"), createVNode("p", { class: "text-gray-500 text-sm" }, "Analisis pemasukan dan pengeluaran masjid")]), createVNode("div", { class: "flex gap-2" }, [createVNode(_sfc_main$2, { onClick: exportToExcel }, {
							default: withCtx(() => [createVNode(unref(ArrowDownTrayIcon), { class: "w-5 h-5 mr-2 inline" }), createTextVNode(" Export Excel ")]),
							_: 1
						}), createVNode(_sfc_main$1, { onClick: printReport }, {
							default: withCtx(() => [createVNode(unref(PrinterIcon), { class: "w-5 h-5 mr-2 inline" }), createTextVNode(" Cetak ")]),
							_: 1
						})])]),
						createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-6" }, [
							createVNode("div", { class: "bg-green-50 rounded-xl p-4 border border-green-200" }, [createVNode("div", { class: "text-sm text-green-600 mb-1" }, "Total Pemasukan"), createVNode("div", { class: "text-2xl font-bold text-green-700" }, "Rp " + toDisplayString((__props.summary?.total_pemasukan || 0).toLocaleString("id-ID")), 1)]),
							createVNode("div", { class: "bg-red-50 rounded-xl p-4 border border-red-200" }, [createVNode("div", { class: "text-sm text-red-600 mb-1" }, "Total Pengeluaran"), createVNode("div", { class: "text-2xl font-bold text-red-700" }, "Rp " + toDisplayString((__props.summary?.total_pengeluaran || 0).toLocaleString("id-ID")), 1)]),
							createVNode("div", { class: [__props.summary?.saldo >= 0 ? "bg-blue-50 border-blue-200" : "bg-orange-50 border-orange-200", "rounded-xl p-4 border"] }, [createVNode("div", { class: [__props.summary?.saldo >= 0 ? "text-blue-600" : "text-orange-600", "text-sm mb-1"] }, "Saldo", 2), createVNode("div", { class: [__props.summary?.saldo >= 0 ? "text-blue-700" : "text-orange-700", "text-2xl font-bold"] }, "Rp " + toDisplayString((__props.summary?.saldo || 0).toLocaleString("id-ID")), 3)], 2)
						]),
						createVNode("div", { class: "bg-white rounded-xl shadow-sm p-4 mb-6" }, [createVNode("div", { class: "grid grid-cols-1 md:grid-cols-5 gap-3" }, [
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
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-medium text-gray-500 mb-1" }, "Jenis"), withDirectives(createVNode("select", {
								"onUpdate:modelValue": ($event) => type.value = $event,
								class: "w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
							}, [
								createVNode("option", { value: "all" }, "Semua"),
								createVNode("option", { value: "pemasukan" }, "Pemasukan"),
								createVNode("option", { value: "pengeluaran" }, "Pengeluaran")
							], 8, ["onUpdate:modelValue"]), [[vModelSelect, type.value]])]),
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-medium text-gray-500 mb-1" }, "Kategori"), withDirectives(createVNode("select", {
								"onUpdate:modelValue": ($event) => category.value = $event,
								class: "w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
							}, [createVNode("option", { value: "all" }, "Semua"), (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (cat) => {
								return openBlock(), createBlock("option", {
									key: cat.id,
									value: cat.id
								}, toDisplayString(cat.nama), 9, ["value"]);
							}), 128))], 8, ["onUpdate:modelValue"]), [[vModelSelect, category.value]])]),
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-medium text-gray-500 mb-1" }, "Kas Box"), withDirectives(createVNode("select", {
								"onUpdate:modelValue": ($event) => kasBox.value = $event,
								class: "w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
							}, [
								createVNode("option", { value: "all" }, "Semua"),
								createVNode("option", { value: "umum" }, "Kas Umum"),
								createVNode("option", { value: "tpq" }, "Kas TPQ"),
								createVNode("option", { value: "pembangunan" }, "Kas Pembangunan")
							], 8, ["onUpdate:modelValue"]), [[vModelSelect, kasBox.value]])])
						]), createVNode("div", { class: "mt-3 flex justify-end" }, [createVNode(_sfc_main$1, { onClick: filterReports }, {
							default: withCtx(() => [createTextVNode("Filter")]),
							_: 1
						})])]),
						createVNode("div", { class: "bg-white rounded-xl shadow-sm overflow-hidden" }, [createVNode("table", { class: "w-full text-sm" }, [createVNode("thead", { class: "bg-gray-50 text-gray-600 text-xs uppercase" }, [createVNode("tr", null, [
							createVNode("th", { class: "px-4 py-3 text-left" }, "Tanggal"),
							createVNode("th", { class: "px-4 py-3 text-left" }, "No. Transaksi"),
							createVNode("th", { class: "px-4 py-3 text-left" }, "Keterangan"),
							createVNode("th", { class: "px-4 py-3 text-left" }, "Kategori"),
							createVNode("th", { class: "px-4 py-3 text-center" }, "Kas Box"),
							createVNode("th", { class: "px-4 py-3 text-right" }, "Jumlah"),
							createVNode("th", { class: "px-4 py-3 text-center" }, "Status")
						])]), createVNode("tbody", { class: "divide-y" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.transactions.data, (trx) => {
							return openBlock(), createBlock("tr", {
								key: trx.id,
								class: "hover:bg-gray-50"
							}, [
								createVNode("td", { class: "px-4 py-3" }, toDisplayString(new Date(trx.tanggal).toLocaleDateString("id-ID")), 1),
								createVNode("td", { class: "px-4 py-3 font-mono text-xs" }, toDisplayString(trx.no_transaksi), 1),
								createVNode("td", { class: "px-4 py-3" }, toDisplayString(trx.keterangan), 1),
								createVNode("td", { class: "px-4 py-3" }, [createVNode("span", { class: "px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded" }, toDisplayString(trx.category?.nama || "-"), 1)]),
								createVNode("td", { class: "px-4 py-3 text-center" }, [createVNode("span", { class: [{
									"bg-blue-100 text-blue-800": trx.kas_box === "umum",
									"bg-green-100 text-green-800": trx.kas_box === "tpq",
									"bg-purple-100 text-purple-800": trx.kas_box === "pembangunan"
								}, "px-2 py-1 text-xs rounded"] }, toDisplayString(trx.kas_box), 3)]),
								createVNode("td", { class: ["px-4 py-3 text-right font-semibold", trx.jenis === "pemasukan" ? "text-green-600" : "text-red-600"] }, toDisplayString(trx.jenis === "pemasukan" ? "+" : "-") + " Rp " + toDisplayString(trx.jumlah.toLocaleString("id-ID")), 3),
								createVNode("td", { class: "px-4 py-3 text-center" }, [createVNode("span", { class: [{
									"bg-green-100 text-green-800": trx.status === "approved",
									"bg-yellow-100 text-yellow-800": trx.status === "pending",
									"bg-red-100 text-red-800": trx.status === "rejected"
								}, "px-2 py-1 text-xs rounded"] }, toDisplayString(trx.status), 3)])
							]);
						}), 128)), !__props.transactions.data || __props.transactions.data.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [createVNode("td", {
							colspan: "7",
							class: "px-4 py-12 text-center text-gray-500"
						}, "Tidak ada data transaksi")])) : createCommentVNode("", true)])]), createVNode("div", { class: "px-4 py-3 border-t" }, [createVNode(_sfc_main$3, { links: __props.transactions.links }, null, 8, ["links"])])])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Reports/Finance.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Finance_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-5e25d9f4"]]);
//#endregion
export { Finance_default as default };
