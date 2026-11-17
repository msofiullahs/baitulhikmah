import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BOaGB7Aw.js";
import { computed, createBlock, createTextVNode, createVNode, mergeProps, onMounted, onUnmounted, openBlock, ref, resolveDynamicComponent, toDisplayString, unref, useSSRContext, watch, withCtx } from "vue";
import { Link, usePage } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderSlot, ssrRenderVNode } from "vue/server-renderer";
import { Bars3CenterLeftIcon, Bars3Icon, BookOpenIcon, CalendarIcon, CheckCircleIcon, ChevronDownIcon, CogIcon, CubeTransparentIcon, CurrencyDollarIcon, DocumentChartBarIcon, EnvelopeIcon, ExclamationCircleIcon, GlobeAltIcon, HomeIcon, MegaphoneIcon, ShieldCheckIcon, UserCircleIcon, UserGroupIcon, UsersIcon, XMarkIcon } from "@heroicons/vue/24/outline";
//#region resources/js/Components/FlashMessage.vue
var _sfc_main$1 = {
	__name: "FlashMessage",
	__ssrInlineRender: true,
	setup(__props) {
		const page = usePage();
		const show = ref(false);
		const message = ref("");
		const type = ref("success");
		watch(() => page.props.flash, (flash) => {
			if (flash?.success) {
				message.value = flash.success;
				type.value = "success";
				show.value = true;
				setTimeout(() => show.value = false, 4e3);
			} else if (flash?.error) {
				message.value = flash.error;
				type.value = "error";
				show.value = true;
			}
		}, { immediate: true });
		return (_ctx, _push, _parent, _attrs) => {
			if (show.value) {
				_push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed top-4 right-4 z-50 max-w-sm w-full" }, _attrs))}><div class="${ssrRenderClass(["rounded-lg shadow-lg p-4 flex items-start gap-3", type.value === "success" ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"])}">`);
				if (type.value === "success") _push(ssrRenderComponent(unref(CheckCircleIcon), { class: "w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" }, null, _parent));
				else _push(ssrRenderComponent(unref(ExclamationCircleIcon), { class: "w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" }, null, _parent));
				_push(`<div class="flex-1"><p class="${ssrRenderClass([type.value === "success" ? "text-green-800" : "text-red-800", "text-sm font-medium"])}">${ssrInterpolate(message.value)}</p></div><button class="flex-shrink-0 text-gray-400 hover:text-gray-600">`);
				_push(ssrRenderComponent(unref(XMarkIcon), { class: "w-4 h-4" }, null, _parent));
				_push(`</button></div></div>`);
			} else _push(`<!---->`);
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/FlashMessage.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Layouts/AdminLayout.vue
var _sfc_main = {
	__name: "AdminLayout",
	__ssrInlineRender: true,
	setup(__props) {
		const page = usePage();
		const sidebarOpen = ref(false);
		const userMenuOpen = ref(false);
		const closeUserMenu = () => {
			userMenuOpen.value = false;
		};
		const handleClickOutside = (event) => {
			if (!userMenuOpen.value) return;
			if (!event.target.closest(".user-menu-container")) closeUserMenu();
		};
		onMounted(() => {
			document.addEventListener("click", handleClickOutside);
		});
		onUnmounted(() => {
			document.removeEventListener("click", handleClickOutside);
		});
		const userRole = computed(() => page.props.auth.user.roles?.[0]?.name || "User");
		const isSuperAdmin = computed(() => userRole.value === "Super Admin");
		const allMenus = [
			{
				name: "Dashboard",
				href: "dashboard",
				icon: HomeIcon,
				roles: ["all"]
			},
			{
				name: "Arus Kas",
				href: "transactions.index",
				icon: CurrencyDollarIcon,
				roles: [
					"Ketua",
					"Wakil Ketua",
					"Bendahara",
					"Sie Sarana Prasarana"
				]
			},
			{
				name: "Kas Box",
				href: "cashboxes.index",
				icon: CubeTransparentIcon,
				roles: [
					"Ketua",
					"Wakil Ketua",
					"Bendahara",
					"Sie Sarana Prasarana"
				]
			},
			{
				name: "Inventaris",
				href: "assets.index",
				icon: CubeTransparentIcon,
				roles: [
					"Ketua",
					"Wakil Ketua",
					"Bendahara",
					"Sie Sarana Prasarana",
					"Sie Kebersihan"
				]
			},
			{
				name: "Undangan",
				href: "invitations.index",
				icon: EnvelopeIcon,
				roles: [
					"Ketua",
					"Wakil Ketua",
					"Sekretaris",
					"Sie Peribadatan & Dakwah",
					"Sie Humas & Kemasyarakatan",
					"Sie Kemudaan dan Remaja Masjid",
					"Sie Pemberdayaan Perempuan"
				]
			},
			{
				name: "Template Undangan",
				href: "invitation-templates.index",
				icon: DocumentChartBarIcon,
				roles: [
					"Ketua",
					"Wakil Ketua",
					"Sekretaris",
					"Sie Peribadatan & Dakwah",
					"Sie Humas & Kemasyarakatan",
					"Sie Kemudaan dan Remaja Masjid",
					"Sie Pemberdayaan Perempuan"
				]
			},
			{
				name: "Kegiatan",
				href: "activities.index",
				icon: CalendarIcon,
				roles: ["all"]
			},
			{
				name: "Jamaah",
				href: "jamaah.index",
				icon: UsersIcon,
				roles: [
					"Ketua",
					"Wakil Ketua",
					"Sekretaris",
					"Sie Humas & Kemasyarakatan",
					"Sie Kemudaan dan Remaja Masjid",
					"Sie Pemberdayaan Perempuan"
				]
			},
			{
				name: "TPQ",
				href: "tpq.students.index",
				icon: BookOpenIcon,
				roles: [
					"Ketua",
					"Wakil Ketua",
					"Sie Pendidikan"
				]
			},
			{
				name: "ZISWAF",
				href: "ziswaf.donations.index",
				icon: CurrencyDollarIcon,
				roles: [
					"Ketua",
					"Wakil Ketua",
					"Bendahara"
				]
			},
			{
				name: "Jadwal Jumat",
				href: "jumah.index",
				icon: CalendarIcon,
				roles: [
					"Ketua",
					"Wakil Ketua",
					"Sekretaris",
					"Sie Peribadatan & Dakwah"
				]
			},
			{
				name: "Pengumuman",
				href: "announcements.index",
				icon: MegaphoneIcon,
				roles: ["all"]
			},
			{
				name: "Pengguna",
				href: "users.index",
				icon: UserGroupIcon,
				roles: ["Ketua", "Super Admin"]
			},
			{
				name: "Pengaturan",
				href: "settings.index",
				icon: CogIcon,
				roles: ["Super Admin"]
			},
			{
				name: "Roles & Permissions",
				href: "roles.index",
				icon: ShieldCheckIcon,
				roles: ["Super Admin"]
			}
		];
		const navigation = computed(() => {
			if (isSuperAdmin.value) return allMenus;
			return allMenus.filter((menu) => {
				return menu.roles.includes("all") || menu.roles.includes(userRole.value);
			});
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-100 flex max-w-screen overflow-x-hidden" }, _attrs))} data-v-1354cfce>`);
			if (sidebarOpen.value) _push(`<div class="fixed inset-0 z-40 lg:hidden" data-v-1354cfce><div class="fixed inset-0 bg-gray-600 bg-opacity-75" data-v-1354cfce></div></div>`);
			else _push(`<!---->`);
			_push(`<aside class="${ssrRenderClass([[
				"fixed inset-y-0 left-0 z-50 w-64 flex flex-col transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0",
				isSuperAdmin.value ? "bg-gray-900" : "bg-[#0d5c3e]",
				sidebarOpen.value ? "translate-x-0" : "-translate-x-full"
			], "text-white"])}" data-v-1354cfce><div class="${ssrRenderClass(["flex items-center justify-between lg:justify-center h-16 px-6 border-b border-white/10 flex-shrink-0", isSuperAdmin.value ? "bg-gray-950" : "bg-[#0a4a32]"])}" data-v-1354cfce>`);
			_push(ssrRenderComponent(unref(Link), {
				href: _ctx.route("dashboard"),
				class: "flex items-center"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<img src="/assets/mbh-horizontal.png" class="logo-glow h-14" data-v-1354cfce${_scopeId}>`);
					else return [createVNode("img", {
						src: "/assets/mbh-horizontal.png",
						class: "logo-glow h-14"
					})];
				}),
				_: 1
			}, _parent));
			_push(`<button class="lg:hidden text-white" data-v-1354cfce>`);
			_push(ssrRenderComponent(unref(Bars3CenterLeftIcon), { class: "w-6 h-6" }, null, _parent));
			_push(`</button></div><nav class="flex-1 px-4 py-6 space-y-1 overflow-y-auto" data-v-1354cfce><!--[-->`);
			ssrRenderList(navigation.value, (item) => {
				_push(ssrRenderComponent(unref(Link), {
					key: item.name,
					href: _ctx.route(item.href),
					class: ["flex items-center gap-3 px-4 py-3 rounded-lg transition text-sm font-medium", _ctx.route().current(item.href) || _ctx.route().current(item.href + ".*") ? isSuperAdmin.value ? "bg-red-500 text-white" : "bg-[#c9a96e] text-[#0d5c3e]" : "text-gray-300 hover:bg-white/10 hover:text-white"]
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.icon), { class: "w-5 h-5" }, null), _parent, _scopeId);
							_push(` ${ssrInterpolate(item.name)}`);
						} else return [(openBlock(), createBlock(resolveDynamicComponent(item.icon), { class: "w-5 h-5" })), createTextVNode(" " + toDisplayString(item.name), 1)];
					}),
					_: 2
				}, _parent));
			});
			_push(`<!--]--></nav><div class="p-4 border-t border-white/10 flex-shrink-0" data-v-1354cfce>`);
			_push(ssrRenderComponent(unref(Link), {
				href: _ctx.route("public.home"),
				target: "_blank",
				class: "flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/10 transition"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(GlobeAltIcon), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(` Lihat Website Publik `);
					} else return [createVNode(unref(GlobeAltIcon), { class: "w-4 h-4" }), createTextVNode(" Lihat Website Publik ")];
				}),
				_: 1
			}, _parent));
			_push(`</div></aside><div class="flex-1 flex flex-col min-h-screen max-w-full" data-v-1354cfce><header class="bg-white shadow-sm sticky top-0 z-30" data-v-1354cfce><div class="flex items-center justify-between h-16 px-4 lg:px-8" data-v-1354cfce><button class="lg:hidden text-gray-500" data-v-1354cfce>`);
			_push(ssrRenderComponent(unref(Bars3Icon), { class: "w-6 h-6" }, null, _parent));
			_push(`</button><div class="flex-1" data-v-1354cfce></div><div class="flex items-center gap-4" data-v-1354cfce><div class="relative user-menu-container" data-v-1354cfce><button class="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900" data-v-1354cfce>`);
			_push(ssrRenderComponent(unref(UserCircleIcon), { class: "w-8 h-8 text-gray-400" }, null, _parent));
			_push(`<div class="text-left hidden md:block" data-v-1354cfce><div class="font-semibold" data-v-1354cfce>${ssrInterpolate(unref(page).props.auth.user.name)}</div><div class="${ssrRenderClass(["text-xs", isSuperAdmin.value ? "text-red-500" : "text-gray-500"])}" data-v-1354cfce>${ssrInterpolate(userRole.value)}</div></div>`);
			_push(ssrRenderComponent(unref(ChevronDownIcon), { class: "w-4 h-4" }, null, _parent));
			_push(`</button>`);
			if (userMenuOpen.value) {
				_push(`<div class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 border z-50" data-v-1354cfce>`);
				_push(ssrRenderComponent(unref(Link), {
					href: _ctx.route("profile.show"),
					class: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` Profil `);
						else return [createTextVNode(" Profil ")];
					}),
					_: 1
				}, _parent));
				if (isSuperAdmin.value) _push(ssrRenderComponent(unref(Link), {
					href: _ctx.route("settings.index"),
					class: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` Pengaturan `);
						else return [createTextVNode(" Pengaturan ")];
					}),
					_: 1
				}, _parent));
				else _push(`<!---->`);
				_push(ssrRenderComponent(unref(Link), {
					href: _ctx.route("logout"),
					method: "post",
					as: "button",
					class: "block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` Logout `);
						else return [createTextVNode(" Logout ")];
					}),
					_: 1
				}, _parent));
				_push(`</div>`);
			} else _push(`<!---->`);
			_push(`</div></div></div></header><main class="flex-1 p-4 lg:p-8 justify-self-stretch" data-v-1354cfce>`);
			_push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</main></div></div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AdminLayout.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var AdminLayout_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-1354cfce"]]);
//#endregion
export { AdminLayout_default as t };
