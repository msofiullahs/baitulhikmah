import { t as AdminLayout_default } from "./AdminLayout-JKKJHCcy.js";
import { t as _sfc_main$1 } from "./StatCard-C5EKtPRl.js";
import { Fragment, createBlock, createVNode, openBlock, renderList, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Head } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { ArrowTrendingDownIcon, ArrowTrendingUpIcon, CurrencyDollarIcon, UsersIcon } from "@heroicons/vue/24/outline";
import { BarElement, CategoryScale, Chart, Legend, LineElement, LinearScale, PointElement, Title, Tooltip } from "chart.js";
import { Bar } from "vue-chartjs";
//#region resources/js/Pages/Dashboard/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: {
		stats: Object,
		recent_transactions: Array,
		upcoming_activities: Array,
		chart_data: Object
	},
	setup(__props) {
		Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement);
		const props = __props;
		const formatRupiah = (num) => "Rp " + Number(num).toLocaleString("id-ID");
		const chartOptions = {
			responsive: true,
			maintainAspectRatio: false,
			plugins: {
				legend: { position: "top" },
				title: {
					display: true,
					text: "Grafik Keuangan 2026"
				}
			}
		};
		const chartData = {
			labels: props.chart_data.labels,
			datasets: [{
				label: "Pemasukan",
				backgroundColor: "#10b981",
				data: props.chart_data.labels.map((_, i) => props.chart_data.pemasukan[i + 1] || 0)
			}, {
				label: "Pengeluaran",
				backgroundColor: "#ef4444",
				data: props.chart_data.labels.map((_, i) => props.chart_data.pengeluaran[i + 1] || 0)
			}]
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(AdminLayout_default, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "Dashboard" }, null, _parent, _scopeId));
						_push(`<div class="mb-6"${_scopeId}><h1 class="text-2xl font-bold text-gray-800"${_scopeId}>Dashboard</h1><p class="text-gray-500 text-sm"${_scopeId}>Ringkasan kondisi masjid hari ini</p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$1, {
							title: "Total Jamaah Aktif",
							value: __props.stats.total_jamaah,
							icon: unref(UsersIcon),
							color: "primary"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$1, {
							title: "Saldo Kas",
							value: formatRupiah(__props.stats.saldo_kas),
							icon: unref(CurrencyDollarIcon),
							color: "blue"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$1, {
							title: "Pemasukan Bulan Ini",
							value: formatRupiah(__props.stats.pemasukan_bulan_ini),
							icon: unref(ArrowTrendingUpIcon),
							color: "green"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$1, {
							title: "Pengeluaran Bulan Ini",
							value: formatRupiah(__props.stats.pengeluaran_bulan_ini),
							icon: unref(ArrowTrendingDownIcon),
							color: "red"
						}, null, _parent, _scopeId));
						_push(`</div><div class="grid lg:grid-cols-3 gap-6 mb-8"${_scopeId}><div class="lg:col-span-2 bg-white rounded-xl shadow-sm p-6"${_scopeId}><h2 class="font-bold text-lg mb-4"${_scopeId}>Grafik Keuangan</h2><div class="h-80"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Bar), {
							data: chartData,
							options: chartOptions
						}, null, _parent, _scopeId));
						_push(`</div></div><div class="bg-white rounded-xl shadow-sm p-6"${_scopeId}><h2 class="font-bold text-lg mb-4"${_scopeId}>Kegiatan Mendatang</h2>`);
						if (__props.upcoming_activities.length) {
							_push(`<div class="space-y-3"${_scopeId}><!--[-->`);
							ssrRenderList(__props.upcoming_activities, (act) => {
								_push(`<div class="border-l-4 border-primary pl-3 py-2"${_scopeId}><p class="font-semibold text-gray-800 text-sm"${_scopeId}>${ssrInterpolate(act.nama)}</p><p class="text-xs text-gray-500"${_scopeId}>${ssrInterpolate(act.tanggal_mulai)}</p><p class="text-xs text-gray-500"${_scopeId}>${ssrInterpolate(act.lokasi)}</p></div>`);
							});
							_push(`<!--]--></div>`);
						} else _push(`<p class="text-gray-500 text-sm"${_scopeId}>Tidak ada kegiatan mendatang</p>`);
						_push(`</div></div><div class="bg-white rounded-xl shadow-sm p-6"${_scopeId}><h2 class="font-bold text-lg mb-4"${_scopeId}>Transaksi Terbaru</h2><div class="overflow-x-auto"${_scopeId}><table class="w-full text-sm"${_scopeId}><thead class="bg-gray-50 text-gray-600 uppercase text-xs"${_scopeId}><tr${_scopeId}><th class="px-4 py-3 text-left"${_scopeId}>No. Transaksi</th><th class="px-4 py-3 text-left"${_scopeId}>Tanggal</th><th class="px-4 py-3 text-left"${_scopeId}>Kategori</th><th class="px-4 py-3 text-left"${_scopeId}>Keterangan</th><th class="px-4 py-3 text-right"${_scopeId}>Jumlah</th></tr></thead><tbody class="divide-y"${_scopeId}><!--[-->`);
						ssrRenderList(__props.recent_transactions, (trx) => {
							_push(`<tr class="hover:bg-gray-50"${_scopeId}><td class="px-4 py-3 font-mono text-xs"${_scopeId}>${ssrInterpolate(trx.no_transaksi)}</td><td class="px-4 py-3"${_scopeId}>${ssrInterpolate(trx.tanggal)}</td><td class="px-4 py-3"${_scopeId}><span class="${ssrRenderClass([trx.category?.tipe === "pemasukan" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700", "px-2 py-1 rounded-full text-xs font-semibold"])}"${_scopeId}>${ssrInterpolate(trx.category?.nama)}</span></td><td class="px-4 py-3 text-gray-700"${_scopeId}>${ssrInterpolate(trx.keterangan)}</td><td class="${ssrRenderClass([trx.jenis === "pemasukan" ? "text-green-600" : "text-red-600", "px-4 py-3 text-right font-semibold"])}"${_scopeId}>${ssrInterpolate(trx.jenis === "pemasukan" ? "+" : "-")} ${ssrInterpolate(formatRupiah(trx.jumlah))}</td></tr>`);
						});
						_push(`<!--]--></tbody></table></div></div>`);
					} else return [
						createVNode(unref(Head), { title: "Dashboard" }),
						createVNode("div", { class: "mb-6" }, [createVNode("h1", { class: "text-2xl font-bold text-gray-800" }, "Dashboard"), createVNode("p", { class: "text-gray-500 text-sm" }, "Ringkasan kondisi masjid hari ini")]),
						createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" }, [
							createVNode(_sfc_main$1, {
								title: "Total Jamaah Aktif",
								value: __props.stats.total_jamaah,
								icon: unref(UsersIcon),
								color: "primary"
							}, null, 8, ["value", "icon"]),
							createVNode(_sfc_main$1, {
								title: "Saldo Kas",
								value: formatRupiah(__props.stats.saldo_kas),
								icon: unref(CurrencyDollarIcon),
								color: "blue"
							}, null, 8, ["value", "icon"]),
							createVNode(_sfc_main$1, {
								title: "Pemasukan Bulan Ini",
								value: formatRupiah(__props.stats.pemasukan_bulan_ini),
								icon: unref(ArrowTrendingUpIcon),
								color: "green"
							}, null, 8, ["value", "icon"]),
							createVNode(_sfc_main$1, {
								title: "Pengeluaran Bulan Ini",
								value: formatRupiah(__props.stats.pengeluaran_bulan_ini),
								icon: unref(ArrowTrendingDownIcon),
								color: "red"
							}, null, 8, ["value", "icon"])
						]),
						createVNode("div", { class: "grid lg:grid-cols-3 gap-6 mb-8" }, [createVNode("div", { class: "lg:col-span-2 bg-white rounded-xl shadow-sm p-6" }, [createVNode("h2", { class: "font-bold text-lg mb-4" }, "Grafik Keuangan"), createVNode("div", { class: "h-80" }, [createVNode(unref(Bar), {
							data: chartData,
							options: chartOptions
						})])]), createVNode("div", { class: "bg-white rounded-xl shadow-sm p-6" }, [createVNode("h2", { class: "font-bold text-lg mb-4" }, "Kegiatan Mendatang"), __props.upcoming_activities.length ? (openBlock(), createBlock("div", {
							key: 0,
							class: "space-y-3"
						}, [(openBlock(true), createBlock(Fragment, null, renderList(__props.upcoming_activities, (act) => {
							return openBlock(), createBlock("div", {
								key: act.id,
								class: "border-l-4 border-primary pl-3 py-2"
							}, [
								createVNode("p", { class: "font-semibold text-gray-800 text-sm" }, toDisplayString(act.nama), 1),
								createVNode("p", { class: "text-xs text-gray-500" }, toDisplayString(act.tanggal_mulai), 1),
								createVNode("p", { class: "text-xs text-gray-500" }, toDisplayString(act.lokasi), 1)
							]);
						}), 128))])) : (openBlock(), createBlock("p", {
							key: 1,
							class: "text-gray-500 text-sm"
						}, "Tidak ada kegiatan mendatang"))])]),
						createVNode("div", { class: "bg-white rounded-xl shadow-sm p-6" }, [createVNode("h2", { class: "font-bold text-lg mb-4" }, "Transaksi Terbaru"), createVNode("div", { class: "overflow-x-auto" }, [createVNode("table", { class: "w-full text-sm" }, [createVNode("thead", { class: "bg-gray-50 text-gray-600 uppercase text-xs" }, [createVNode("tr", null, [
							createVNode("th", { class: "px-4 py-3 text-left" }, "No. Transaksi"),
							createVNode("th", { class: "px-4 py-3 text-left" }, "Tanggal"),
							createVNode("th", { class: "px-4 py-3 text-left" }, "Kategori"),
							createVNode("th", { class: "px-4 py-3 text-left" }, "Keterangan"),
							createVNode("th", { class: "px-4 py-3 text-right" }, "Jumlah")
						])]), createVNode("tbody", { class: "divide-y" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.recent_transactions, (trx) => {
							return openBlock(), createBlock("tr", {
								key: trx.id,
								class: "hover:bg-gray-50"
							}, [
								createVNode("td", { class: "px-4 py-3 font-mono text-xs" }, toDisplayString(trx.no_transaksi), 1),
								createVNode("td", { class: "px-4 py-3" }, toDisplayString(trx.tanggal), 1),
								createVNode("td", { class: "px-4 py-3" }, [createVNode("span", { class: ["px-2 py-1 rounded-full text-xs font-semibold", trx.category?.tipe === "pemasukan" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"] }, toDisplayString(trx.category?.nama), 3)]),
								createVNode("td", { class: "px-4 py-3 text-gray-700" }, toDisplayString(trx.keterangan), 1),
								createVNode("td", { class: ["px-4 py-3 text-right font-semibold", trx.jenis === "pemasukan" ? "text-green-600" : "text-red-600"] }, toDisplayString(trx.jenis === "pemasukan" ? "+" : "-") + " " + toDisplayString(formatRupiah(trx.jumlah)), 3)
							]);
						}), 128))])])])])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
