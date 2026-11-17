import { t as AdminLayout_default } from "./AdminLayout-JKKJHCcy.js";
import { Fragment, createBlock, createVNode, mergeProps, openBlock, renderList, toDisplayString, useSSRContext, withCtx } from "vue";
import { ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
//#region resources/js/Pages/Settings/Index.vue
var systemVersion = "1.0.0";
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: {
		totalUsers: Number,
		totalTransactions: Number,
		totalJamaah: Number,
		auditLogs: Array
	},
	setup(__props) {
		const formatDate = (date) => {
			if (!date) return "-";
			return new Date(date).toLocaleString("id-ID");
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(AdminLayout_default, mergeProps({ title: "Pengaturan Sistem" }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="space-y-6"${_scopeId}><div class="border-b pb-4"${_scopeId}><h1 class="text-2xl font-bold text-gray-900"${_scopeId}>Pengaturan Sistem</h1><p class="text-gray-600 mt-1"${_scopeId}>Kelola konfigurasi dan pengaturan aplikasi</p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6"${_scopeId}><a${ssrRenderAttr("href", _ctx.route("settings.general"))} class="block bg-white rounded-lg shadow hover:shadow-lg transition p-6 border-l-4 border-blue-500"${_scopeId}><div class="flex items-center space-x-4"${_scopeId}><div class="bg-blue-100 p-3 rounded-full"${_scopeId}><i class="fas fa-cog text-blue-600 text-xl"${_scopeId}></i></div><div${_scopeId}><h3 class="font-bold text-lg"${_scopeId}>Umum</h3><p class="text-sm text-gray-600"${_scopeId}>Nama masjid, alamat, logo, kop surat</p></div></div></a><a${ssrRenderAttr("href", _ctx.route("settings.finance"))} class="block bg-white rounded-lg shadow hover:shadow-lg transition p-6 border-l-4 border-green-500"${_scopeId}><div class="flex items-center space-x-4"${_scopeId}><div class="bg-green-100 p-3 rounded-full"${_scopeId}><i class="fas fa-money-bill-wave text-green-600 text-xl"${_scopeId}></i></div><div${_scopeId}><h3 class="font-bold text-lg"${_scopeId}>Keuangan</h3><p class="text-sm text-gray-600"${_scopeId}>Kas box, threshold approval, payment gateway</p></div></div></a><a${ssrRenderAttr("href", _ctx.route("settings.masjid"))} class="block bg-white rounded-lg shadow hover:shadow-lg transition p-6 border-l-4 border-purple-500"${_scopeId}><div class="flex items-center space-x-4"${_scopeId}><div class="bg-purple-100 p-3 rounded-full"${_scopeId}><i class="fas fa-mosque text-purple-600 text-xl"${_scopeId}></i></div><div${_scopeId}><h3 class="font-bold text-lg"${_scopeId}>Profil Masjid</h3><p class="text-sm text-gray-600"${_scopeId}>Informasi detail masjid &amp; kontak</p></div></div></a><a${ssrRenderAttr("href", _ctx.route("settings.social"))} class="block bg-white rounded-lg shadow hover:shadow-lg transition p-6 border-l-4 border-pink-500"${_scopeId}><div class="flex items-center space-x-4"${_scopeId}><div class="bg-pink-100 p-3 rounded-full"${_scopeId}><i class="fas fa-share-alt text-pink-600 text-xl"${_scopeId}></i></div><div${_scopeId}><h3 class="font-bold text-lg"${_scopeId}>Social Media</h3><p class="text-sm text-gray-600"${_scopeId}>Link sosial media masjid</p></div></div></a><a${ssrRenderAttr("href", _ctx.route("roles.index"))} class="block bg-white rounded-lg shadow hover:shadow-lg transition p-6 border-l-4 border-yellow-500"${_scopeId}><div class="flex items-center space-x-4"${_scopeId}><div class="bg-yellow-100 p-3 rounded-full"${_scopeId}><i class="fas fa-user-shield text-yellow-600 text-xl"${_scopeId}></i></div><div${_scopeId}><h3 class="font-bold text-lg"${_scopeId}>Roles &amp; Permissions</h3><p class="text-sm text-gray-600"${_scopeId}>Kelola role dan hak akses user</p></div></div></a><a href="#" class="block bg-white rounded-lg shadow hover:shadow-lg transition p-6 border-l-4 border-red-500"${_scopeId}><div class="flex items-center space-x-4"${_scopeId}><div class="bg-red-100 p-3 rounded-full"${_scopeId}><i class="fas fa-database text-red-600 text-xl"${_scopeId}></i></div><div${_scopeId}><h3 class="font-bold text-lg"${_scopeId}>Backup &amp; Restore</h3><p class="text-sm text-gray-600"${_scopeId}>Backup database &amp; restore data</p></div></div></a></div><div class="bg-white rounded-lg shadow p-6"${_scopeId}><h2 class="text-lg font-bold mb-4"${_scopeId}>Informasi Sistem</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"${_scopeId}><div class="text-center p-4 bg-gray-50 rounded-lg"${_scopeId}><div class="text-2xl font-bold text-blue-600"${_scopeId}>${ssrInterpolate(__props.totalUsers)}</div><div class="text-sm text-gray-600"${_scopeId}>Total Pengguna</div></div><div class="text-center p-4 bg-gray-50 rounded-lg"${_scopeId}><div class="text-2xl font-bold text-green-600"${_scopeId}>${ssrInterpolate(__props.totalTransactions)}</div><div class="text-sm text-gray-600"${_scopeId}>Transaksi Bulan Ini</div></div><div class="text-center p-4 bg-gray-50 rounded-lg"${_scopeId}><div class="text-2xl font-bold text-purple-600"${_scopeId}>${ssrInterpolate(__props.totalJamaah)}</div><div class="text-sm text-gray-600"${_scopeId}>Data Jamaah</div></div><div class="text-center p-4 bg-gray-50 rounded-lg"${_scopeId}><div class="text-2xl font-bold text-orange-600"${_scopeId}>${ssrInterpolate(systemVersion)}</div><div class="text-sm text-gray-600"${_scopeId}>Versi Sistem</div></div></div></div><div class="bg-white rounded-lg shadow p-6"${_scopeId}><h2 class="text-lg font-bold mb-4"${_scopeId}>Audit Log Terakhir</h2><div class="overflow-x-auto"${_scopeId}><table class="min-w-full divide-y divide-gray-200"${_scopeId}><thead class="bg-gray-50"${_scopeId}><tr${_scopeId}><th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase"${_scopeId}>Waktu</th><th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase"${_scopeId}>User</th><th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase"${_scopeId}>Aksi</th><th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase"${_scopeId}>Deskripsi</th></tr></thead><tbody class="divide-y divide-gray-200"${_scopeId}><!--[-->`);
						ssrRenderList(__props.auditLogs, (log) => {
							_push(`<tr${_scopeId}><td class="px-4 py-2 text-sm"${_scopeId}>${ssrInterpolate(formatDate(log.created_at))}</td><td class="px-4 py-2 text-sm"${_scopeId}>${ssrInterpolate(log.causer?.name || "System")}</td><td class="px-4 py-2 text-sm"${_scopeId}><span class="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800"${_scopeId}>${ssrInterpolate(log.description)}</span></td><td class="px-4 py-2 text-sm text-gray-600 truncate max-w-xs"${_scopeId}>${ssrInterpolate(log.properties?.description || "-")}</td></tr>`);
						});
						_push(`<!--]--></tbody></table></div></div></div>`);
					} else return [createVNode("div", { class: "space-y-6" }, [
						createVNode("div", { class: "border-b pb-4" }, [createVNode("h1", { class: "text-2xl font-bold text-gray-900" }, "Pengaturan Sistem"), createVNode("p", { class: "text-gray-600 mt-1" }, "Kelola konfigurasi dan pengaturan aplikasi")]),
						createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-6" }, [
							createVNode("a", {
								href: _ctx.route("settings.general"),
								class: "block bg-white rounded-lg shadow hover:shadow-lg transition p-6 border-l-4 border-blue-500"
							}, [createVNode("div", { class: "flex items-center space-x-4" }, [createVNode("div", { class: "bg-blue-100 p-3 rounded-full" }, [createVNode("i", { class: "fas fa-cog text-blue-600 text-xl" })]), createVNode("div", null, [createVNode("h3", { class: "font-bold text-lg" }, "Umum"), createVNode("p", { class: "text-sm text-gray-600" }, "Nama masjid, alamat, logo, kop surat")])])], 8, ["href"]),
							createVNode("a", {
								href: _ctx.route("settings.finance"),
								class: "block bg-white rounded-lg shadow hover:shadow-lg transition p-6 border-l-4 border-green-500"
							}, [createVNode("div", { class: "flex items-center space-x-4" }, [createVNode("div", { class: "bg-green-100 p-3 rounded-full" }, [createVNode("i", { class: "fas fa-money-bill-wave text-green-600 text-xl" })]), createVNode("div", null, [createVNode("h3", { class: "font-bold text-lg" }, "Keuangan"), createVNode("p", { class: "text-sm text-gray-600" }, "Kas box, threshold approval, payment gateway")])])], 8, ["href"]),
							createVNode("a", {
								href: _ctx.route("settings.masjid"),
								class: "block bg-white rounded-lg shadow hover:shadow-lg transition p-6 border-l-4 border-purple-500"
							}, [createVNode("div", { class: "flex items-center space-x-4" }, [createVNode("div", { class: "bg-purple-100 p-3 rounded-full" }, [createVNode("i", { class: "fas fa-mosque text-purple-600 text-xl" })]), createVNode("div", null, [createVNode("h3", { class: "font-bold text-lg" }, "Profil Masjid"), createVNode("p", { class: "text-sm text-gray-600" }, "Informasi detail masjid & kontak")])])], 8, ["href"]),
							createVNode("a", {
								href: _ctx.route("settings.social"),
								class: "block bg-white rounded-lg shadow hover:shadow-lg transition p-6 border-l-4 border-pink-500"
							}, [createVNode("div", { class: "flex items-center space-x-4" }, [createVNode("div", { class: "bg-pink-100 p-3 rounded-full" }, [createVNode("i", { class: "fas fa-share-alt text-pink-600 text-xl" })]), createVNode("div", null, [createVNode("h3", { class: "font-bold text-lg" }, "Social Media"), createVNode("p", { class: "text-sm text-gray-600" }, "Link sosial media masjid")])])], 8, ["href"]),
							createVNode("a", {
								href: _ctx.route("roles.index"),
								class: "block bg-white rounded-lg shadow hover:shadow-lg transition p-6 border-l-4 border-yellow-500"
							}, [createVNode("div", { class: "flex items-center space-x-4" }, [createVNode("div", { class: "bg-yellow-100 p-3 rounded-full" }, [createVNode("i", { class: "fas fa-user-shield text-yellow-600 text-xl" })]), createVNode("div", null, [createVNode("h3", { class: "font-bold text-lg" }, "Roles & Permissions"), createVNode("p", { class: "text-sm text-gray-600" }, "Kelola role dan hak akses user")])])], 8, ["href"]),
							createVNode("a", {
								href: "#",
								class: "block bg-white rounded-lg shadow hover:shadow-lg transition p-6 border-l-4 border-red-500"
							}, [createVNode("div", { class: "flex items-center space-x-4" }, [createVNode("div", { class: "bg-red-100 p-3 rounded-full" }, [createVNode("i", { class: "fas fa-database text-red-600 text-xl" })]), createVNode("div", null, [createVNode("h3", { class: "font-bold text-lg" }, "Backup & Restore"), createVNode("p", { class: "text-sm text-gray-600" }, "Backup database & restore data")])])])
						]),
						createVNode("div", { class: "bg-white rounded-lg shadow p-6" }, [createVNode("h2", { class: "text-lg font-bold mb-4" }, "Informasi Sistem"), createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" }, [
							createVNode("div", { class: "text-center p-4 bg-gray-50 rounded-lg" }, [createVNode("div", { class: "text-2xl font-bold text-blue-600" }, toDisplayString(__props.totalUsers), 1), createVNode("div", { class: "text-sm text-gray-600" }, "Total Pengguna")]),
							createVNode("div", { class: "text-center p-4 bg-gray-50 rounded-lg" }, [createVNode("div", { class: "text-2xl font-bold text-green-600" }, toDisplayString(__props.totalTransactions), 1), createVNode("div", { class: "text-sm text-gray-600" }, "Transaksi Bulan Ini")]),
							createVNode("div", { class: "text-center p-4 bg-gray-50 rounded-lg" }, [createVNode("div", { class: "text-2xl font-bold text-purple-600" }, toDisplayString(__props.totalJamaah), 1), createVNode("div", { class: "text-sm text-gray-600" }, "Data Jamaah")]),
							createVNode("div", { class: "text-center p-4 bg-gray-50 rounded-lg" }, [createVNode("div", { class: "text-2xl font-bold text-orange-600" }, toDisplayString(systemVersion)), createVNode("div", { class: "text-sm text-gray-600" }, "Versi Sistem")])
						])]),
						createVNode("div", { class: "bg-white rounded-lg shadow p-6" }, [createVNode("h2", { class: "text-lg font-bold mb-4" }, "Audit Log Terakhir"), createVNode("div", { class: "overflow-x-auto" }, [createVNode("table", { class: "min-w-full divide-y divide-gray-200" }, [createVNode("thead", { class: "bg-gray-50" }, [createVNode("tr", null, [
							createVNode("th", { class: "px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase" }, "Waktu"),
							createVNode("th", { class: "px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase" }, "User"),
							createVNode("th", { class: "px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase" }, "Aksi"),
							createVNode("th", { class: "px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase" }, "Deskripsi")
						])]), createVNode("tbody", { class: "divide-y divide-gray-200" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.auditLogs, (log) => {
							return openBlock(), createBlock("tr", { key: log.id }, [
								createVNode("td", { class: "px-4 py-2 text-sm" }, toDisplayString(formatDate(log.created_at)), 1),
								createVNode("td", { class: "px-4 py-2 text-sm" }, toDisplayString(log.causer?.name || "System"), 1),
								createVNode("td", { class: "px-4 py-2 text-sm" }, [createVNode("span", { class: "px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800" }, toDisplayString(log.description), 1)]),
								createVNode("td", { class: "px-4 py-2 text-sm text-gray-600 truncate max-w-xs" }, toDisplayString(log.properties?.description || "-"), 1)
							]);
						}), 128))])])])])
					])];
				}),
				_: 1
			}, _parent));
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Settings/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
