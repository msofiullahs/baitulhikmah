import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BOaGB7Aw.js";
import { t as _sfc_main$1 } from "./PrimaryButton-B1NJcOT8.js";
import { t as _sfc_main$2 } from "./SecondaryButton-BD33s9TB.js";
import { t as AdminLayout_default } from "./AdminLayout-JKKJHCcy.js";
import { t as _sfc_main$3 } from "./Pagination-DiptkPBm.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelSelect, withCtx, withDirectives } from "vue";
import { Head, router } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { PrinterIcon, UserGroupIcon } from "@heroicons/vue/24/outline";
//#region resources/js/Pages/Reports/Jamaah.vue
var _sfc_main = {
	__name: "Jamaah",
	__ssrInlineRender: true,
	props: {
		jamaahs: Object,
		demographics: Object,
		filters: Object,
		categories: Array
	},
	setup(__props) {
		const props = __props;
		const status = ref(props.filters?.status || "all");
		const gender = ref(props.filters?.gender || "all");
		const category = ref(props.filters?.category || "all");
		const filterReports = () => {
			router.get(route("reports.jamaah"), {
				status: status.value,
				gender: gender.value,
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
						_push(ssrRenderComponent(unref(Head), { title: "Laporan Jamaah" }, null, _parent, _scopeId));
						_push(`<div class="mb-6 flex justify-between items-center" data-v-f7b5f265${_scopeId}><div data-v-f7b5f265${_scopeId}><h1 class="text-2xl font-bold text-gray-800" data-v-f7b5f265${_scopeId}>Laporan Jamaah</h1><p class="text-gray-500 text-sm" data-v-f7b5f265${_scopeId}>Data demografi dan statistik jamaah masjid</p></div><div class="flex gap-2" data-v-f7b5f265${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$2, { onClick: printReport }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(unref(PrinterIcon), { class: "w-5 h-5 mr-2 inline" }, null, _parent, _scopeId));
									_push(` Cetak `);
								} else return [createVNode(unref(PrinterIcon), { class: "w-5 h-5 mr-2 inline" }), createTextVNode(" Cetak ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></div><div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6" data-v-f7b5f265${_scopeId}><div class="bg-white rounded-xl shadow-sm p-4 border-l-4 border-blue-500" data-v-f7b5f265${_scopeId}><div class="text-sm text-gray-500 mb-1" data-v-f7b5f265${_scopeId}>Total Jamaah</div><div class="text-2xl font-bold text-gray-800" data-v-f7b5f265${_scopeId}>${ssrInterpolate(__props.demographics?.total || 0)}</div></div><div class="bg-white rounded-xl shadow-sm p-4 border-l-4 border-green-500" data-v-f7b5f265${_scopeId}><div class="text-sm text-gray-500 mb-1" data-v-f7b5f265${_scopeId}>Jamaah Aktif</div><div class="text-2xl font-bold text-green-600" data-v-f7b5f265${_scopeId}>${ssrInterpolate(__props.demographics?.aktif || 0)}</div></div><div class="bg-white rounded-xl shadow-sm p-4 border-l-4 border-indigo-500" data-v-f7b5f265${_scopeId}><div class="text-sm text-gray-500 mb-1" data-v-f7b5f265${_scopeId}>Laki-laki</div><div class="text-2xl font-bold text-indigo-600" data-v-f7b5f265${_scopeId}>${ssrInterpolate(__props.demographics?.laki_laki || 0)}</div></div><div class="bg-white rounded-xl shadow-sm p-4 border-l-4 border-pink-500" data-v-f7b5f265${_scopeId}><div class="text-sm text-gray-500 mb-1" data-v-f7b5f265${_scopeId}>Perempuan</div><div class="text-2xl font-bold text-pink-600" data-v-f7b5f265${_scopeId}>${ssrInterpolate(__props.demographics?.perempuan || 0)}</div></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6" data-v-f7b5f265${_scopeId}><div class="bg-white rounded-xl shadow-sm p-6" data-v-f7b5f265${_scopeId}><h3 class="font-semibold text-gray-800 mb-4" data-v-f7b5f265${_scopeId}>Distribusi Berdasarkan Status</h3><div class="space-y-3" data-v-f7b5f265${_scopeId}><!--[-->`);
						ssrRenderList(__props.demographics?.by_status, (item) => {
							_push(`<div class="flex items-center justify-between" data-v-f7b5f265${_scopeId}><span class="text-gray-600 capitalize" data-v-f7b5f265${_scopeId}>${ssrInterpolate(item.status)}</span><div class="flex items-center gap-3" data-v-f7b5f265${_scopeId}><div class="w-48 bg-gray-200 rounded-full h-2" data-v-f7b5f265${_scopeId}><div class="bg-blue-500 h-2 rounded-full" style="${ssrRenderStyle({ width: `${item.count / __props.demographics.total * 100}%` })}" data-v-f7b5f265${_scopeId}></div></div><span class="font-semibold text-gray-800 w-12 text-right" data-v-f7b5f265${_scopeId}>${ssrInterpolate(item.count)}</span></div></div>`);
						});
						_push(`<!--]--></div></div><div class="bg-white rounded-xl shadow-sm p-6" data-v-f7b5f265${_scopeId}><h3 class="font-semibold text-gray-800 mb-4" data-v-f7b5f265${_scopeId}>Distribusi Berdasarkan Kategori</h3><div class="space-y-3" data-v-f7b5f265${_scopeId}><!--[-->`);
						ssrRenderList(__props.demographics?.by_category, (item) => {
							_push(`<div class="flex items-center justify-between" data-v-f7b5f265${_scopeId}><span class="text-gray-600" data-v-f7b5f265${_scopeId}>${ssrInterpolate(item.nama)}</span><div class="flex items-center gap-3" data-v-f7b5f265${_scopeId}><div class="w-48 bg-gray-200 rounded-full h-2" data-v-f7b5f265${_scopeId}><div class="bg-green-500 h-2 rounded-full" style="${ssrRenderStyle({ width: `${item.count / __props.demographics.total * 100}%` })}" data-v-f7b5f265${_scopeId}></div></div><span class="font-semibold text-gray-800 w-12 text-right" data-v-f7b5f265${_scopeId}>${ssrInterpolate(item.count)}</span></div></div>`);
						});
						_push(`<!--]--></div></div></div><div class="bg-white rounded-xl shadow-sm p-4 mb-6" data-v-f7b5f265${_scopeId}><div class="grid grid-cols-1 md:grid-cols-3 gap-3" data-v-f7b5f265${_scopeId}><div data-v-f7b5f265${_scopeId}><label class="block text-xs font-medium text-gray-500 mb-1" data-v-f7b5f265${_scopeId}>Status</label><select class="w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary" data-v-f7b5f265${_scopeId}><option value="all" data-v-f7b5f265${ssrIncludeBooleanAttr(Array.isArray(status.value) ? ssrLooseContain(status.value, "all") : ssrLooseEqual(status.value, "all")) ? " selected" : ""}${_scopeId}>Semua</option><option value="aktif" data-v-f7b5f265${ssrIncludeBooleanAttr(Array.isArray(status.value) ? ssrLooseContain(status.value, "aktif") : ssrLooseEqual(status.value, "aktif")) ? " selected" : ""}${_scopeId}>Aktif</option><option value="pindah" data-v-f7b5f265${ssrIncludeBooleanAttr(Array.isArray(status.value) ? ssrLooseContain(status.value, "pindah") : ssrLooseEqual(status.value, "pindah")) ? " selected" : ""}${_scopeId}>Pindah</option><option value="meninggal" data-v-f7b5f265${ssrIncludeBooleanAttr(Array.isArray(status.value) ? ssrLooseContain(status.value, "meninggal") : ssrLooseEqual(status.value, "meninggal")) ? " selected" : ""}${_scopeId}>Meninggal</option><option value="nonaktif" data-v-f7b5f265${ssrIncludeBooleanAttr(Array.isArray(status.value) ? ssrLooseContain(status.value, "nonaktif") : ssrLooseEqual(status.value, "nonaktif")) ? " selected" : ""}${_scopeId}>Nonaktif</option></select></div><div data-v-f7b5f265${_scopeId}><label class="block text-xs font-medium text-gray-500 mb-1" data-v-f7b5f265${_scopeId}>Jenis Kelamin</label><select class="w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary" data-v-f7b5f265${_scopeId}><option value="all" data-v-f7b5f265${ssrIncludeBooleanAttr(Array.isArray(gender.value) ? ssrLooseContain(gender.value, "all") : ssrLooseEqual(gender.value, "all")) ? " selected" : ""}${_scopeId}>Semua</option><option value="L" data-v-f7b5f265${ssrIncludeBooleanAttr(Array.isArray(gender.value) ? ssrLooseContain(gender.value, "L") : ssrLooseEqual(gender.value, "L")) ? " selected" : ""}${_scopeId}>Laki-laki</option><option value="P" data-v-f7b5f265${ssrIncludeBooleanAttr(Array.isArray(gender.value) ? ssrLooseContain(gender.value, "P") : ssrLooseEqual(gender.value, "P")) ? " selected" : ""}${_scopeId}>Perempuan</option></select></div><div data-v-f7b5f265${_scopeId}><label class="block text-xs font-medium text-gray-500 mb-1" data-v-f7b5f265${_scopeId}>Kategori</label><select class="w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary" data-v-f7b5f265${_scopeId}><option value="all" data-v-f7b5f265${ssrIncludeBooleanAttr(Array.isArray(category.value) ? ssrLooseContain(category.value, "all") : ssrLooseEqual(category.value, "all")) ? " selected" : ""}${_scopeId}>Semua</option><!--[-->`);
						ssrRenderList(__props.categories, (cat) => {
							_push(`<option${ssrRenderAttr("value", cat.id)} data-v-f7b5f265${ssrIncludeBooleanAttr(Array.isArray(category.value) ? ssrLooseContain(category.value, cat.id) : ssrLooseEqual(category.value, cat.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(cat.nama)}</option>`);
						});
						_push(`<!--]--></select></div></div><div class="mt-3 flex justify-end" data-v-f7b5f265${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$1, { onClick: filterReports }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Filter`);
								else return [createTextVNode("Filter")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></div><div class="bg-white rounded-xl shadow-sm overflow-hidden" data-v-f7b5f265${_scopeId}><table class="w-full text-sm" data-v-f7b5f265${_scopeId}><thead class="bg-gray-50 text-gray-600 text-xs uppercase" data-v-f7b5f265${_scopeId}><tr data-v-f7b5f265${_scopeId}><th class="px-4 py-3 text-left" data-v-f7b5f265${_scopeId}>Nama</th><th class="px-4 py-3 text-left" data-v-f7b5f265${_scopeId}>Jenis Kelamin</th><th class="px-4 py-3 text-left" data-v-f7b5f265${_scopeId}>Status</th><th class="px-4 py-3 text-left" data-v-f7b5f265${_scopeId}>Kontak</th><th class="px-4 py-3 text-left" data-v-f7b5f265${_scopeId}>Kategori</th></tr></thead><tbody class="divide-y" data-v-f7b5f265${_scopeId}><!--[-->`);
						ssrRenderList(__props.jamaahs.data, (jamaah) => {
							_push(`<tr class="hover:bg-gray-50" data-v-f7b5f265${_scopeId}><td class="px-4 py-3 font-medium" data-v-f7b5f265${_scopeId}>${ssrInterpolate(jamaah.nama)}</td><td class="px-4 py-3" data-v-f7b5f265${_scopeId}>${ssrInterpolate(jamaah.jenis_kelamin === "L" ? "Laki-laki" : "Perempuan")}</td><td class="px-4 py-3" data-v-f7b5f265${_scopeId}><span class="${ssrRenderClass([{
								"bg-green-100 text-green-800": jamaah.status === "aktif",
								"bg-yellow-100 text-yellow-800": jamaah.status === "pindah",
								"bg-gray-100 text-gray-800": jamaah.status === "meninggal",
								"bg-red-100 text-red-800": jamaah.status === "nonaktif"
							}, "px-2 py-1 text-xs rounded"])}" data-v-f7b5f265${_scopeId}>${ssrInterpolate(jamaah.status)}</span></td><td class="px-4 py-3" data-v-f7b5f265${_scopeId}><div class="text-sm" data-v-f7b5f265${_scopeId}>${ssrInterpolate(jamaah.no_hp || "-")}</div><div class="text-xs text-gray-500" data-v-f7b5f265${_scopeId}>${ssrInterpolate(jamaah.email || "-")}</div></td><td class="px-4 py-3" data-v-f7b5f265${_scopeId}><div class="flex flex-wrap gap-1" data-v-f7b5f265${_scopeId}><!--[-->`);
							ssrRenderList(jamaah.categories, (cat) => {
								_push(`<span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded" data-v-f7b5f265${_scopeId}>${ssrInterpolate(cat.nama)}</span>`);
							});
							_push(`<!--]-->`);
							if (!jamaah.categories || jamaah.categories.length === 0) _push(`<span class="text-gray-400" data-v-f7b5f265${_scopeId}>-</span>`);
							else _push(`<!---->`);
							_push(`</div></td></tr>`);
						});
						_push(`<!--]-->`);
						if (!__props.jamaahs.data || __props.jamaahs.data.length === 0) {
							_push(`<tr data-v-f7b5f265${_scopeId}><td colspan="5" class="px-4 py-12 text-center text-gray-500" data-v-f7b5f265${_scopeId}>`);
							_push(ssrRenderComponent(unref(UserGroupIcon), { class: "w-12 h-12 mx-auto mb-3 text-gray-300" }, null, _parent, _scopeId));
							_push(`<p data-v-f7b5f265${_scopeId}>Tidak ada data jamaah</p></td></tr>`);
						} else _push(`<!---->`);
						_push(`</tbody></table><div class="px-4 py-3 border-t" data-v-f7b5f265${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$3, { links: __props.jamaahs.links }, null, _parent, _scopeId));
						_push(`</div></div>`);
					} else return [
						createVNode(unref(Head), { title: "Laporan Jamaah" }),
						createVNode("div", { class: "mb-6 flex justify-between items-center" }, [createVNode("div", null, [createVNode("h1", { class: "text-2xl font-bold text-gray-800" }, "Laporan Jamaah"), createVNode("p", { class: "text-gray-500 text-sm" }, "Data demografi dan statistik jamaah masjid")]), createVNode("div", { class: "flex gap-2" }, [createVNode(_sfc_main$2, { onClick: printReport }, {
							default: withCtx(() => [createVNode(unref(PrinterIcon), { class: "w-5 h-5 mr-2 inline" }), createTextVNode(" Cetak ")]),
							_: 1
						})])]),
						createVNode("div", { class: "grid grid-cols-1 md:grid-cols-4 gap-4 mb-6" }, [
							createVNode("div", { class: "bg-white rounded-xl shadow-sm p-4 border-l-4 border-blue-500" }, [createVNode("div", { class: "text-sm text-gray-500 mb-1" }, "Total Jamaah"), createVNode("div", { class: "text-2xl font-bold text-gray-800" }, toDisplayString(__props.demographics?.total || 0), 1)]),
							createVNode("div", { class: "bg-white rounded-xl shadow-sm p-4 border-l-4 border-green-500" }, [createVNode("div", { class: "text-sm text-gray-500 mb-1" }, "Jamaah Aktif"), createVNode("div", { class: "text-2xl font-bold text-green-600" }, toDisplayString(__props.demographics?.aktif || 0), 1)]),
							createVNode("div", { class: "bg-white rounded-xl shadow-sm p-4 border-l-4 border-indigo-500" }, [createVNode("div", { class: "text-sm text-gray-500 mb-1" }, "Laki-laki"), createVNode("div", { class: "text-2xl font-bold text-indigo-600" }, toDisplayString(__props.demographics?.laki_laki || 0), 1)]),
							createVNode("div", { class: "bg-white rounded-xl shadow-sm p-4 border-l-4 border-pink-500" }, [createVNode("div", { class: "text-sm text-gray-500 mb-1" }, "Perempuan"), createVNode("div", { class: "text-2xl font-bold text-pink-600" }, toDisplayString(__props.demographics?.perempuan || 0), 1)])
						]),
						createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6" }, [createVNode("div", { class: "bg-white rounded-xl shadow-sm p-6" }, [createVNode("h3", { class: "font-semibold text-gray-800 mb-4" }, "Distribusi Berdasarkan Status"), createVNode("div", { class: "space-y-3" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.demographics?.by_status, (item) => {
							return openBlock(), createBlock("div", {
								key: item.status,
								class: "flex items-center justify-between"
							}, [createVNode("span", { class: "text-gray-600 capitalize" }, toDisplayString(item.status), 1), createVNode("div", { class: "flex items-center gap-3" }, [createVNode("div", { class: "w-48 bg-gray-200 rounded-full h-2" }, [createVNode("div", {
								class: "bg-blue-500 h-2 rounded-full",
								style: { width: `${item.count / __props.demographics.total * 100}%` }
							}, null, 4)]), createVNode("span", { class: "font-semibold text-gray-800 w-12 text-right" }, toDisplayString(item.count), 1)])]);
						}), 128))])]), createVNode("div", { class: "bg-white rounded-xl shadow-sm p-6" }, [createVNode("h3", { class: "font-semibold text-gray-800 mb-4" }, "Distribusi Berdasarkan Kategori"), createVNode("div", { class: "space-y-3" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.demographics?.by_category, (item) => {
							return openBlock(), createBlock("div", {
								key: item.nama,
								class: "flex items-center justify-between"
							}, [createVNode("span", { class: "text-gray-600" }, toDisplayString(item.nama), 1), createVNode("div", { class: "flex items-center gap-3" }, [createVNode("div", { class: "w-48 bg-gray-200 rounded-full h-2" }, [createVNode("div", {
								class: "bg-green-500 h-2 rounded-full",
								style: { width: `${item.count / __props.demographics.total * 100}%` }
							}, null, 4)]), createVNode("span", { class: "font-semibold text-gray-800 w-12 text-right" }, toDisplayString(item.count), 1)])]);
						}), 128))])])]),
						createVNode("div", { class: "bg-white rounded-xl shadow-sm p-4 mb-6" }, [createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-3" }, [
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-medium text-gray-500 mb-1" }, "Status"), withDirectives(createVNode("select", {
								"onUpdate:modelValue": ($event) => status.value = $event,
								class: "w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
							}, [
								createVNode("option", { value: "all" }, "Semua"),
								createVNode("option", { value: "aktif" }, "Aktif"),
								createVNode("option", { value: "pindah" }, "Pindah"),
								createVNode("option", { value: "meninggal" }, "Meninggal"),
								createVNode("option", { value: "nonaktif" }, "Nonaktif")
							], 8, ["onUpdate:modelValue"]), [[vModelSelect, status.value]])]),
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-medium text-gray-500 mb-1" }, "Jenis Kelamin"), withDirectives(createVNode("select", {
								"onUpdate:modelValue": ($event) => gender.value = $event,
								class: "w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
							}, [
								createVNode("option", { value: "all" }, "Semua"),
								createVNode("option", { value: "L" }, "Laki-laki"),
								createVNode("option", { value: "P" }, "Perempuan")
							], 8, ["onUpdate:modelValue"]), [[vModelSelect, gender.value]])]),
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-medium text-gray-500 mb-1" }, "Kategori"), withDirectives(createVNode("select", {
								"onUpdate:modelValue": ($event) => category.value = $event,
								class: "w-full text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
							}, [createVNode("option", { value: "all" }, "Semua"), (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (cat) => {
								return openBlock(), createBlock("option", {
									key: cat.id,
									value: cat.id
								}, toDisplayString(cat.nama), 9, ["value"]);
							}), 128))], 8, ["onUpdate:modelValue"]), [[vModelSelect, category.value]])])
						]), createVNode("div", { class: "mt-3 flex justify-end" }, [createVNode(_sfc_main$1, { onClick: filterReports }, {
							default: withCtx(() => [createTextVNode("Filter")]),
							_: 1
						})])]),
						createVNode("div", { class: "bg-white rounded-xl shadow-sm overflow-hidden" }, [createVNode("table", { class: "w-full text-sm" }, [createVNode("thead", { class: "bg-gray-50 text-gray-600 text-xs uppercase" }, [createVNode("tr", null, [
							createVNode("th", { class: "px-4 py-3 text-left" }, "Nama"),
							createVNode("th", { class: "px-4 py-3 text-left" }, "Jenis Kelamin"),
							createVNode("th", { class: "px-4 py-3 text-left" }, "Status"),
							createVNode("th", { class: "px-4 py-3 text-left" }, "Kontak"),
							createVNode("th", { class: "px-4 py-3 text-left" }, "Kategori")
						])]), createVNode("tbody", { class: "divide-y" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.jamaahs.data, (jamaah) => {
							return openBlock(), createBlock("tr", {
								key: jamaah.id,
								class: "hover:bg-gray-50"
							}, [
								createVNode("td", { class: "px-4 py-3 font-medium" }, toDisplayString(jamaah.nama), 1),
								createVNode("td", { class: "px-4 py-3" }, toDisplayString(jamaah.jenis_kelamin === "L" ? "Laki-laki" : "Perempuan"), 1),
								createVNode("td", { class: "px-4 py-3" }, [createVNode("span", { class: [{
									"bg-green-100 text-green-800": jamaah.status === "aktif",
									"bg-yellow-100 text-yellow-800": jamaah.status === "pindah",
									"bg-gray-100 text-gray-800": jamaah.status === "meninggal",
									"bg-red-100 text-red-800": jamaah.status === "nonaktif"
								}, "px-2 py-1 text-xs rounded"] }, toDisplayString(jamaah.status), 3)]),
								createVNode("td", { class: "px-4 py-3" }, [createVNode("div", { class: "text-sm" }, toDisplayString(jamaah.no_hp || "-"), 1), createVNode("div", { class: "text-xs text-gray-500" }, toDisplayString(jamaah.email || "-"), 1)]),
								createVNode("td", { class: "px-4 py-3" }, [createVNode("div", { class: "flex flex-wrap gap-1" }, [(openBlock(true), createBlock(Fragment, null, renderList(jamaah.categories, (cat) => {
									return openBlock(), createBlock("span", {
										key: cat.id,
										class: "px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
									}, toDisplayString(cat.nama), 1);
								}), 128)), !jamaah.categories || jamaah.categories.length === 0 ? (openBlock(), createBlock("span", {
									key: 0,
									class: "text-gray-400"
								}, "-")) : createCommentVNode("", true)])])
							]);
						}), 128)), !__props.jamaahs.data || __props.jamaahs.data.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [createVNode("td", {
							colspan: "5",
							class: "px-4 py-12 text-center text-gray-500"
						}, [createVNode(unref(UserGroupIcon), { class: "w-12 h-12 mx-auto mb-3 text-gray-300" }), createVNode("p", null, "Tidak ada data jamaah")])])) : createCommentVNode("", true)])]), createVNode("div", { class: "px-4 py-3 border-t" }, [createVNode(_sfc_main$3, { links: __props.jamaahs.links }, null, 8, ["links"])])])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Reports/Jamaah.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Jamaah_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-f7b5f265"]]);
//#endregion
export { Jamaah_default as default };
