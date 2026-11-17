import { t as AdminLayout_default } from "./AdminLayout-JKKJHCcy.js";
import { Fragment, createBlock, createVNode, openBlock, renderList, resolveDynamicComponent, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Head, Link } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderVNode } from "vue/server-renderer";
import { BuildingLibraryIcon, CalendarDaysIcon, CurrencyDollarIcon, GiftIcon, UserGroupIcon } from "@heroicons/vue/24/outline";
//#region resources/js/Pages/Reports/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: { summary: Object },
	setup(__props) {
		const reportMenus = [
			{
				name: "Laporan Keuangan",
				description: "Pemasukan, pengeluaran, dan neraca keuangan",
				icon: CurrencyDollarIcon,
				route: "reports.finance",
				color: "bg-green-500"
			},
			{
				name: "Laporan Jamaah",
				description: "Data demografi dan statistik jamaah",
				icon: UserGroupIcon,
				route: "reports.jamaah",
				color: "bg-blue-500"
			},
			{
				name: "Laporan Kegiatan",
				description: "Aktivitas dan event masjid",
				icon: CalendarDaysIcon,
				route: "reports.activities",
				color: "bg-purple-500"
			},
			{
				name: "Laporan ZISWAF",
				description: "Zakat, infaq, sedekah, dan wakaf",
				icon: GiftIcon,
				route: "reports.ziswaf",
				color: "bg-yellow-500"
			},
			{
				name: "Laporan Aset",
				description: "Inventaris dan nilai buku aset",
				icon: BuildingLibraryIcon,
				route: "reports.assets",
				color: "bg-gray-500"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(AdminLayout_default, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "Laporan" }, null, _parent, _scopeId));
						_push(`<div class="mb-6"${_scopeId}><h1 class="text-2xl font-bold text-gray-800"${_scopeId}>Laporan</h1><p class="text-gray-500 text-sm"${_scopeId}>Pusat laporan dan analisis data masjid</p></div><div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8"${_scopeId}><div class="bg-white rounded-xl shadow-sm p-4"${_scopeId}><div class="text-sm text-gray-500 mb-1"${_scopeId}>Total Jamaah Aktif</div><div class="text-2xl font-bold text-gray-800"${_scopeId}>${ssrInterpolate(__props.summary?.total_jamaah || 0)}</div></div><div class="bg-white rounded-xl shadow-sm p-4"${_scopeId}><div class="text-sm text-gray-500 mb-1"${_scopeId}>Kegiatan Bulan Ini</div><div class="text-2xl font-bold text-gray-800"${_scopeId}>${ssrInterpolate(__props.summary?.total_kegiatan || 0)}</div></div><div class="bg-white rounded-xl shadow-sm p-4"${_scopeId}><div class="text-sm text-gray-500 mb-1"${_scopeId}>Pemasukan Bulan Ini</div><div class="text-lg font-bold text-green-600"${_scopeId}>Rp ${ssrInterpolate((__props.summary?.pemasukan_bulan_ini || 0).toLocaleString("id-ID"))}</div></div><div class="bg-white rounded-xl shadow-sm p-4"${_scopeId}><div class="text-sm text-gray-500 mb-1"${_scopeId}>Pengeluaran Bulan Ini</div><div class="text-lg font-bold text-red-600"${_scopeId}>Rp ${ssrInterpolate((__props.summary?.pengeluaran_bulan_ini || 0).toLocaleString("id-ID"))}</div></div><div class="bg-white rounded-xl shadow-sm p-4"${_scopeId}><div class="text-sm text-gray-500 mb-1"${_scopeId}>Total Donasi</div><div class="text-lg font-bold text-blue-600"${_scopeId}>Rp ${ssrInterpolate((__props.summary?.total_donasi || 0).toLocaleString("id-ID"))}</div></div></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"${_scopeId}><!--[-->`);
						ssrRenderList(reportMenus, (menu) => {
							_push(ssrRenderComponent(unref(Link), {
								key: menu.name,
								route: menu.route,
								class: "bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 border border-gray-100"
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) {
										_push(`<div class="flex items-start gap-4"${_scopeId}><div class="${ssrRenderClass(`${menu.color} p-3 rounded-lg`)}"${_scopeId}>`);
										ssrRenderVNode(_push, createVNode(resolveDynamicComponent(menu.icon), { class: "w-8 h-8 text-white" }, null), _parent, _scopeId);
										_push(`</div><div${_scopeId}><h3 class="font-semibold text-gray-800 text-lg"${_scopeId}>${ssrInterpolate(menu.name)}</h3><p class="text-gray-500 text-sm mt-1"${_scopeId}>${ssrInterpolate(menu.description)}</p><span class="inline-block mt-3 text-primary text-sm font-medium hover:underline"${_scopeId}>Buka Laporan →</span></div></div>`);
									} else return [createVNode("div", { class: "flex items-start gap-4" }, [createVNode("div", { class: `${menu.color} p-3 rounded-lg` }, [(openBlock(), createBlock(resolveDynamicComponent(menu.icon), { class: "w-8 h-8 text-white" }))], 2), createVNode("div", null, [
										createVNode("h3", { class: "font-semibold text-gray-800 text-lg" }, toDisplayString(menu.name), 1),
										createVNode("p", { class: "text-gray-500 text-sm mt-1" }, toDisplayString(menu.description), 1),
										createVNode("span", { class: "inline-block mt-3 text-primary text-sm font-medium hover:underline" }, "Buka Laporan →")
									])])];
								}),
								_: 2
							}, _parent, _scopeId));
						});
						_push(`<!--]--></div>`);
					} else return [
						createVNode(unref(Head), { title: "Laporan" }),
						createVNode("div", { class: "mb-6" }, [createVNode("h1", { class: "text-2xl font-bold text-gray-800" }, "Laporan"), createVNode("p", { class: "text-gray-500 text-sm" }, "Pusat laporan dan analisis data masjid")]),
						createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8" }, [
							createVNode("div", { class: "bg-white rounded-xl shadow-sm p-4" }, [createVNode("div", { class: "text-sm text-gray-500 mb-1" }, "Total Jamaah Aktif"), createVNode("div", { class: "text-2xl font-bold text-gray-800" }, toDisplayString(__props.summary?.total_jamaah || 0), 1)]),
							createVNode("div", { class: "bg-white rounded-xl shadow-sm p-4" }, [createVNode("div", { class: "text-sm text-gray-500 mb-1" }, "Kegiatan Bulan Ini"), createVNode("div", { class: "text-2xl font-bold text-gray-800" }, toDisplayString(__props.summary?.total_kegiatan || 0), 1)]),
							createVNode("div", { class: "bg-white rounded-xl shadow-sm p-4" }, [createVNode("div", { class: "text-sm text-gray-500 mb-1" }, "Pemasukan Bulan Ini"), createVNode("div", { class: "text-lg font-bold text-green-600" }, "Rp " + toDisplayString((__props.summary?.pemasukan_bulan_ini || 0).toLocaleString("id-ID")), 1)]),
							createVNode("div", { class: "bg-white rounded-xl shadow-sm p-4" }, [createVNode("div", { class: "text-sm text-gray-500 mb-1" }, "Pengeluaran Bulan Ini"), createVNode("div", { class: "text-lg font-bold text-red-600" }, "Rp " + toDisplayString((__props.summary?.pengeluaran_bulan_ini || 0).toLocaleString("id-ID")), 1)]),
							createVNode("div", { class: "bg-white rounded-xl shadow-sm p-4" }, [createVNode("div", { class: "text-sm text-gray-500 mb-1" }, "Total Donasi"), createVNode("div", { class: "text-lg font-bold text-blue-600" }, "Rp " + toDisplayString((__props.summary?.total_donasi || 0).toLocaleString("id-ID")), 1)])
						]),
						createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" }, [(openBlock(), createBlock(Fragment, null, renderList(reportMenus, (menu) => {
							return createVNode(unref(Link), {
								key: menu.name,
								route: menu.route,
								class: "bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 border border-gray-100"
							}, {
								default: withCtx(() => [createVNode("div", { class: "flex items-start gap-4" }, [createVNode("div", { class: `${menu.color} p-3 rounded-lg` }, [(openBlock(), createBlock(resolveDynamicComponent(menu.icon), { class: "w-8 h-8 text-white" }))], 2), createVNode("div", null, [
									createVNode("h3", { class: "font-semibold text-gray-800 text-lg" }, toDisplayString(menu.name), 1),
									createVNode("p", { class: "text-gray-500 text-sm mt-1" }, toDisplayString(menu.description), 1),
									createVNode("span", { class: "inline-block mt-3 text-primary text-sm font-medium hover:underline" }, "Buka Laporan →")
								])])]),
								_: 2
							}, 1032, ["route"]);
						}), 64))])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Reports/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
