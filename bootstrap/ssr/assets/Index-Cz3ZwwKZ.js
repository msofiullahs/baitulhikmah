import { t as _sfc_main$1 } from "./PublicLayout-wCRJiN1A.js";
import { Fragment, computed, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelSelect, withCtx, withDirectives } from "vue";
import { Head, Link, router } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { ArrowDownTrayIcon } from "@heroicons/vue/24/outline";
import { ArcElement, BarElement, CategoryScale, Chart, Legend, LineElement, LinearScale, PointElement, Title, Tooltip } from "chart.js";
import { Bar, Doughnut } from "vue-chartjs";
//#region resources/js/Pages/Public/Finance/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: {
		stats: Object,
		monthly_chart: Object,
		categories_breakdown: Object,
		recent_transactions: Array,
		filters: Object
	},
	setup(__props) {
		Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement);
		const props = __props;
		const formatRupiah = (num) => "Rp " + Number(num).toLocaleString("id-ID");
		const selectedYear = ref(props.filters.selected_year);
		const selectedMonth = ref(props.filters.selected_month);
		const applyFilter = () => {
			router.get(route("public.finance"), {
				year: selectedYear.value,
				month: selectedMonth.value
			}, { preserveState: true });
		};
		const chartOptions = {
			responsive: true,
			maintainAspectRatio: false,
			plugins: { legend: { position: "top" } }
		};
		const barChartData = computed(() => ({
			labels: Object.keys(props.monthly_chart),
			datasets: [{
				label: "Pemasukan",
				backgroundColor: "#0d5c3e",
				data: Object.values(props.monthly_chart).map((v) => v.pemasukan)
			}, {
				label: "Pengeluaran",
				backgroundColor: "#c9a96e",
				data: Object.values(props.monthly_chart).map((v) => v.pengeluaran)
			}]
		}));
		const pemasukanChart = computed(() => ({
			labels: props.categories_breakdown.pemasukan.map((c) => c.nama),
			datasets: [{
				data: props.categories_breakdown.pemasukan.map((c) => c.total),
				backgroundColor: props.categories_breakdown.pemasukan.map((c) => c.warna)
			}]
		}));
		const pengeluaranChart = computed(() => ({
			labels: props.categories_breakdown.pengeluaran.map((c) => c.nama),
			datasets: [{
				data: props.categories_breakdown.pengeluaran.map((c) => c.total),
				backgroundColor: props.categories_breakdown.pengeluaran.map((c) => c.warna)
			}]
		}));
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "Laporan Keuangan - Baitul Hikmah" }, null, _parent, _scopeId));
						_push(`<section class="bg-[#0d5c3e] text-white py-12"${_scopeId}><div class="max-w-7xl mx-auto px-4"${_scopeId}><h1 class="text-4xl font-bold mb-2"${_scopeId}>Laporan Keuangan</h1><p class="opacity-90"${_scopeId}>Transparansi pengelolaan dana masjid untuk ${ssrInterpolate(__props.stats.bulan)} ${ssrInterpolate(__props.stats.tahun)}</p></div></section><div class="max-w-7xl mx-auto px-4 -mt-8"${_scopeId}><div class="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-100"${_scopeId}><div class="flex flex-col md:flex-row gap-4 items-end"${_scopeId}><div class="flex-1"${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Tahun</label><select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d5c3e] outline-none"${_scopeId}><!--[-->`);
						ssrRenderList(__props.filters.years, (y) => {
							_push(`<option${ssrRenderAttr("value", y)}${ssrIncludeBooleanAttr(Array.isArray(selectedYear.value) ? ssrLooseContain(selectedYear.value, y) : ssrLooseEqual(selectedYear.value, y)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(y)}</option>`);
						});
						_push(`<!--]--></select></div><div class="flex-1"${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Bulan</label><select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d5c3e] outline-none"${_scopeId}><option${ssrRenderAttr("value", null)}${ssrIncludeBooleanAttr(Array.isArray(selectedMonth.value) ? ssrLooseContain(selectedMonth.value, null) : ssrLooseEqual(selectedMonth.value, null)) ? " selected" : ""}${_scopeId}>Semua Bulan</option><!--[-->`);
						ssrRenderList(__props.filters.months, (name, idx) => {
							_push(`<option${ssrRenderAttr("value", parseInt(idx))}${ssrIncludeBooleanAttr(Array.isArray(selectedMonth.value) ? ssrLooseContain(selectedMonth.value, parseInt(idx)) : ssrLooseEqual(selectedMonth.value, parseInt(idx))) ? " selected" : ""}${_scopeId}>${ssrInterpolate(name)}</option>`);
						});
						_push(`<!--]--></select></div>`);
						_push(ssrRenderComponent(unref(Link), {
							href: _ctx.route("public.finance.download", {
								year: selectedYear.value,
								month: selectedMonth.value
							}),
							class: "bg-[#c9a96e] text-[#0d5c3e] px-6 py-2 rounded-lg font-semibold hover:bg-[#b8944f] transition flex items-center gap-2"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(unref(ArrowDownTrayIcon), { class: "w-5 h-5" }, null, _parent, _scopeId));
									_push(` Download PDF `);
								} else return [createVNode(unref(ArrowDownTrayIcon), { class: "w-5 h-5" }), createTextVNode(" Download PDF ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></div><div class="grid md:grid-cols-3 gap-6 mb-8"${_scopeId}><div class="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#0d5c3e]"${_scopeId}><p class="text-sm text-gray-500"${_scopeId}>Total Pemasukan</p><p class="text-3xl font-bold text-[#0d5c3e] mt-1"${_scopeId}>${ssrInterpolate(formatRupiah(__props.stats.total_pemasukan))}</p></div><div class="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#c9a96e]"${_scopeId}><p class="text-sm text-gray-500"${_scopeId}>Total Pengeluaran</p><p class="text-3xl font-bold text-[#c9a96e] mt-1"${_scopeId}>${ssrInterpolate(formatRupiah(__props.stats.total_pengeluaran))}</p></div><div class="bg-white p-6 rounded-xl shadow-sm border-l-4 border-gray-600"${_scopeId}><p class="text-sm text-gray-500"${_scopeId}>Saldo</p><p class="text-3xl font-bold text-gray-700 mt-1"${_scopeId}>${ssrInterpolate(formatRupiah(__props.stats.saldo))}</p></div></div><div class="grid lg:grid-cols-3 gap-6 mb-8"${_scopeId}><div class="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-gray-100"${_scopeId}><h2 class="font-bold text-lg mb-4 text-gray-800"${_scopeId}>Grafik Bulanan ${ssrInterpolate(__props.stats.tahun)}</h2><div class="h-80"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Bar), {
							data: barChartData.value,
							options: chartOptions
						}, null, _parent, _scopeId));
						_push(`</div></div><div class="space-y-6"${_scopeId}><div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100"${_scopeId}><h3 class="font-bold text-sm text-gray-700 mb-3"${_scopeId}>Pemasukan per Kategori</h3><div class="h-48"${_scopeId}>`);
						if (__props.categories_breakdown.pemasukan.length) _push(ssrRenderComponent(unref(Doughnut), {
							data: pemasukanChart.value,
							options: {
								responsive: true,
								maintainAspectRatio: false,
								plugins: { legend: { position: "bottom" } }
							}
						}, null, _parent, _scopeId));
						else _push(`<p class="text-center text-gray-400 text-sm py-8"${_scopeId}>Tidak ada data</p>`);
						_push(`</div></div><div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100"${_scopeId}><h3 class="font-bold text-sm text-gray-700 mb-3"${_scopeId}>Pengeluaran per Kategori</h3><div class="h-48"${_scopeId}>`);
						if (__props.categories_breakdown.pengeluaran.length) _push(ssrRenderComponent(unref(Doughnut), {
							data: pengeluaranChart.value,
							options: {
								responsive: true,
								maintainAspectRatio: false,
								plugins: { legend: { position: "bottom" } }
							}
						}, null, _parent, _scopeId));
						else _push(`<p class="text-center text-gray-400 text-sm py-8"${_scopeId}>Tidak ada data</p>`);
						_push(`</div></div></div></div><div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100"${_scopeId}><h2 class="font-bold text-lg mb-4 text-gray-800"${_scopeId}>Riwayat Transaksi</h2><div class="overflow-x-auto"${_scopeId}><table class="w-full text-sm"${_scopeId}><thead class="bg-gray-50 text-gray-600 uppercase text-xs"${_scopeId}><tr${_scopeId}><th class="px-4 py-3 text-left"${_scopeId}>Tanggal</th><th class="px-4 py-3 text-left"${_scopeId}>Kategori</th><th class="px-4 py-3 text-left"${_scopeId}>Keterangan</th><th class="px-4 py-3 text-right"${_scopeId}>Jumlah</th></tr></thead><tbody class="divide-y"${_scopeId}><!--[-->`);
						ssrRenderList(__props.recent_transactions, (trx) => {
							_push(`<tr class="hover:bg-gray-50"${_scopeId}><td class="px-4 py-3"${_scopeId}>${ssrInterpolate(trx.tanggal)}</td><td class="px-4 py-3"${_scopeId}><span class="px-2 py-1 rounded-full text-xs font-semibold" style="${ssrRenderStyle({
								backgroundColor: trx.kategori.warna + "20",
								color: trx.kategori.warna
							})}"${_scopeId}>${ssrInterpolate(trx.kategori.nama)}</span></td><td class="px-4 py-3 text-gray-700"${_scopeId}>${ssrInterpolate(trx.keterangan)}</td><td class="${ssrRenderClass([trx.jenis === "pemasukan" ? "text-[#0d5c3e]" : "text-[#c9a96e]", "px-4 py-3 text-right font-semibold"])}"${_scopeId}>${ssrInterpolate(trx.jenis === "pemasukan" ? "+" : "-")} ${ssrInterpolate(formatRupiah(trx.jumlah))}</td></tr>`);
						});
						_push(`<!--]-->`);
						if (__props.recent_transactions.length === 0) _push(`<tr${_scopeId}><td colspan="4" class="px-4 py-12 text-center text-gray-500"${_scopeId}>Tidak ada transaksi pada periode ini</td></tr>`);
						else _push(`<!---->`);
						_push(`</tbody></table></div></div></div>`);
					} else return [
						createVNode(unref(Head), { title: "Laporan Keuangan - Baitul Hikmah" }),
						createVNode("section", { class: "bg-[#0d5c3e] text-white py-12" }, [createVNode("div", { class: "max-w-7xl mx-auto px-4" }, [createVNode("h1", { class: "text-4xl font-bold mb-2" }, "Laporan Keuangan"), createVNode("p", { class: "opacity-90" }, "Transparansi pengelolaan dana masjid untuk " + toDisplayString(__props.stats.bulan) + " " + toDisplayString(__props.stats.tahun), 1)])]),
						createVNode("div", { class: "max-w-7xl mx-auto px-4 -mt-8" }, [
							createVNode("div", { class: "bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-100" }, [createVNode("div", { class: "flex flex-col md:flex-row gap-4 items-end" }, [
								createVNode("div", { class: "flex-1" }, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Tahun"), withDirectives(createVNode("select", {
									"onUpdate:modelValue": ($event) => selectedYear.value = $event,
									onChange: applyFilter,
									class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d5c3e] outline-none"
								}, [(openBlock(true), createBlock(Fragment, null, renderList(__props.filters.years, (y) => {
									return openBlock(), createBlock("option", {
										key: y,
										value: y
									}, toDisplayString(y), 9, ["value"]);
								}), 128))], 40, ["onUpdate:modelValue"]), [[vModelSelect, selectedYear.value]])]),
								createVNode("div", { class: "flex-1" }, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Bulan"), withDirectives(createVNode("select", {
									"onUpdate:modelValue": ($event) => selectedMonth.value = $event,
									onChange: applyFilter,
									class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d5c3e] outline-none"
								}, [createVNode("option", { value: null }, "Semua Bulan"), (openBlock(true), createBlock(Fragment, null, renderList(__props.filters.months, (name, idx) => {
									return openBlock(), createBlock("option", {
										key: idx,
										value: parseInt(idx)
									}, toDisplayString(name), 9, ["value"]);
								}), 128))], 40, ["onUpdate:modelValue"]), [[vModelSelect, selectedMonth.value]])]),
								createVNode(unref(Link), {
									href: _ctx.route("public.finance.download", {
										year: selectedYear.value,
										month: selectedMonth.value
									}),
									class: "bg-[#c9a96e] text-[#0d5c3e] px-6 py-2 rounded-lg font-semibold hover:bg-[#b8944f] transition flex items-center gap-2"
								}, {
									default: withCtx(() => [createVNode(unref(ArrowDownTrayIcon), { class: "w-5 h-5" }), createTextVNode(" Download PDF ")]),
									_: 1
								}, 8, ["href"])
							])]),
							createVNode("div", { class: "grid md:grid-cols-3 gap-6 mb-8" }, [
								createVNode("div", { class: "bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#0d5c3e]" }, [createVNode("p", { class: "text-sm text-gray-500" }, "Total Pemasukan"), createVNode("p", { class: "text-3xl font-bold text-[#0d5c3e] mt-1" }, toDisplayString(formatRupiah(__props.stats.total_pemasukan)), 1)]),
								createVNode("div", { class: "bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#c9a96e]" }, [createVNode("p", { class: "text-sm text-gray-500" }, "Total Pengeluaran"), createVNode("p", { class: "text-3xl font-bold text-[#c9a96e] mt-1" }, toDisplayString(formatRupiah(__props.stats.total_pengeluaran)), 1)]),
								createVNode("div", { class: "bg-white p-6 rounded-xl shadow-sm border-l-4 border-gray-600" }, [createVNode("p", { class: "text-sm text-gray-500" }, "Saldo"), createVNode("p", { class: "text-3xl font-bold text-gray-700 mt-1" }, toDisplayString(formatRupiah(__props.stats.saldo)), 1)])
							]),
							createVNode("div", { class: "grid lg:grid-cols-3 gap-6 mb-8" }, [createVNode("div", { class: "lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-gray-100" }, [createVNode("h2", { class: "font-bold text-lg mb-4 text-gray-800" }, "Grafik Bulanan " + toDisplayString(__props.stats.tahun), 1), createVNode("div", { class: "h-80" }, [createVNode(unref(Bar), {
								data: barChartData.value,
								options: chartOptions
							}, null, 8, ["data"])])]), createVNode("div", { class: "space-y-6" }, [createVNode("div", { class: "bg-white rounded-xl shadow-sm p-6 border border-gray-100" }, [createVNode("h3", { class: "font-bold text-sm text-gray-700 mb-3" }, "Pemasukan per Kategori"), createVNode("div", { class: "h-48" }, [__props.categories_breakdown.pemasukan.length ? (openBlock(), createBlock(unref(Doughnut), {
								key: 0,
								data: pemasukanChart.value,
								options: {
									responsive: true,
									maintainAspectRatio: false,
									plugins: { legend: { position: "bottom" } }
								}
							}, null, 8, ["data"])) : (openBlock(), createBlock("p", {
								key: 1,
								class: "text-center text-gray-400 text-sm py-8"
							}, "Tidak ada data"))])]), createVNode("div", { class: "bg-white rounded-xl shadow-sm p-6 border border-gray-100" }, [createVNode("h3", { class: "font-bold text-sm text-gray-700 mb-3" }, "Pengeluaran per Kategori"), createVNode("div", { class: "h-48" }, [__props.categories_breakdown.pengeluaran.length ? (openBlock(), createBlock(unref(Doughnut), {
								key: 0,
								data: pengeluaranChart.value,
								options: {
									responsive: true,
									maintainAspectRatio: false,
									plugins: { legend: { position: "bottom" } }
								}
							}, null, 8, ["data"])) : (openBlock(), createBlock("p", {
								key: 1,
								class: "text-center text-gray-400 text-sm py-8"
							}, "Tidak ada data"))])])])]),
							createVNode("div", { class: "bg-white rounded-xl shadow-sm p-6 border border-gray-100" }, [createVNode("h2", { class: "font-bold text-lg mb-4 text-gray-800" }, "Riwayat Transaksi"), createVNode("div", { class: "overflow-x-auto" }, [createVNode("table", { class: "w-full text-sm" }, [createVNode("thead", { class: "bg-gray-50 text-gray-600 uppercase text-xs" }, [createVNode("tr", null, [
								createVNode("th", { class: "px-4 py-3 text-left" }, "Tanggal"),
								createVNode("th", { class: "px-4 py-3 text-left" }, "Kategori"),
								createVNode("th", { class: "px-4 py-3 text-left" }, "Keterangan"),
								createVNode("th", { class: "px-4 py-3 text-right" }, "Jumlah")
							])]), createVNode("tbody", { class: "divide-y" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.recent_transactions, (trx) => {
								return openBlock(), createBlock("tr", {
									key: trx.id,
									class: "hover:bg-gray-50"
								}, [
									createVNode("td", { class: "px-4 py-3" }, toDisplayString(trx.tanggal), 1),
									createVNode("td", { class: "px-4 py-3" }, [createVNode("span", {
										class: "px-2 py-1 rounded-full text-xs font-semibold",
										style: {
											backgroundColor: trx.kategori.warna + "20",
											color: trx.kategori.warna
										}
									}, toDisplayString(trx.kategori.nama), 5)]),
									createVNode("td", { class: "px-4 py-3 text-gray-700" }, toDisplayString(trx.keterangan), 1),
									createVNode("td", { class: ["px-4 py-3 text-right font-semibold", trx.jenis === "pemasukan" ? "text-[#0d5c3e]" : "text-[#c9a96e]"] }, toDisplayString(trx.jenis === "pemasukan" ? "+" : "-") + " " + toDisplayString(formatRupiah(trx.jumlah)), 3)
								]);
							}), 128)), __props.recent_transactions.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [createVNode("td", {
								colspan: "4",
								class: "px-4 py-12 text-center text-gray-500"
							}, "Tidak ada transaksi pada periode ini")])) : createCommentVNode("", true)])])])])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Finance/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
