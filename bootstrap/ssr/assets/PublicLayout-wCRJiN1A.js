import { createTextVNode, createVNode, mergeProps, ref, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Link, usePage } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderSlot } from "vue/server-renderer";
import { Bars3Icon, EnvelopeIcon, MapPinIcon, PhoneIcon, XMarkIcon } from "@heroicons/vue/24/outline";
//#region resources/js/Layouts/PublicLayout.vue
var _sfc_main = {
	__name: "PublicLayout",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		const mobileMenuOpen = ref(false);
		const navItems = [
			{
				name: "Keuangan",
				href: "public.finance"
			},
			{
				name: "Jadwal",
				href: "public.schedule.pengajian"
			},
			{
				name: "Pengumuman",
				href: "public.announcements"
			},
			{
				name: "Kontak",
				href: "public.contact"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50 flex flex-col" }, _attrs))}><div class="bg-[#0d5c3e] text-white text-xs py-2 hidden md:block"><div class="max-w-7xl mx-auto px-4 flex justify-between"><div class="flex items-center gap-4"><span class="flex items-center gap-1">`);
			_push(ssrRenderComponent(unref(MapPinIcon), { class: "w-3 h-3" }, null, _parent));
			_push(` Pesona Sari Residence</span><span class="flex items-center gap-1">`);
			_push(ssrRenderComponent(unref(PhoneIcon), { class: "w-3 h-3" }, null, _parent));
			_push(` 081234567890</span></div><div class="flex items-center gap-4"><span class="flex items-center gap-1">`);
			_push(ssrRenderComponent(unref(EnvelopeIcon), { class: "w-3 h-3" }, null, _parent));
			_push(` admin@baitulhikmah.id</span></div></div></div><nav class="bg-white shadow-sm sticky top-0 z-40 border-b border-gray-200"><div class="max-w-7xl mx-auto px-4"><div class="flex justify-between items-center h-16">`);
			_push(ssrRenderComponent(unref(Link), {
				href: _ctx.route("public.home"),
				class: "flex items-center gap-3"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<img src="/assets/mbh-horizontal.png" class="h-14"${_scopeId}>`);
					else return [createVNode("img", {
						src: "/assets/mbh-horizontal.png",
						class: "h-14"
					})];
				}),
				_: 1
			}, _parent));
			_push(`<div class="hidden md:flex items-center gap-1"><!--[-->`);
			ssrRenderList(navItems, (item) => {
				_push(ssrRenderComponent(unref(Link), {
					key: item.name,
					href: _ctx.route(item.href),
					class: ["px-4 py-2 rounded-lg text-sm font-medium transition", _ctx.route().current(item.href) ? "bg-[#0d5c3e] text-white" : "text-gray-700 hover:bg-gray-100"]
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(item.name)}`);
						else return [createTextVNode(toDisplayString(item.name), 1)];
					}),
					_: 2
				}, _parent));
			});
			_push(`<!--]-->`);
			_push(ssrRenderComponent(unref(Link), {
				href: _ctx.route("login"),
				class: "ml-4 px-4 py-2 bg-[#c9a96e] text-[#0d5c3e] font-semibold rounded-lg hover:bg-[#b8944f] transition"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Login Admin `);
					else return [createTextVNode(" Login Admin ")];
				}),
				_: 1
			}, _parent));
			_push(`</div><button class="md:hidden text-gray-700">`);
			if (!mobileMenuOpen.value) _push(ssrRenderComponent(unref(Bars3Icon), { class: "w-6 h-6" }, null, _parent));
			else _push(ssrRenderComponent(unref(XMarkIcon), { class: "w-6 h-6" }, null, _parent));
			_push(`</button></div>`);
			if (mobileMenuOpen.value) {
				_push(`<div class="md:hidden py-4 border-t"><!--[-->`);
				ssrRenderList(navItems, (item) => {
					_push(ssrRenderComponent(unref(Link), {
						key: item.name,
						href: _ctx.route(item.href),
						class: "block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg",
						onClick: ($event) => mobileMenuOpen.value = false
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(item.name)}`);
							else return [createTextVNode(toDisplayString(item.name), 1)];
						}),
						_: 2
					}, _parent));
				});
				_push(`<!--]-->`);
				_push(ssrRenderComponent(unref(Link), {
					href: _ctx.route("login"),
					class: "block mt-2 px-4 py-2 bg-[#0d5c3e] text-white rounded-lg text-center font-semibold"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` Login Admin `);
						else return [createTextVNode(" Login Admin ")];
					}),
					_: 1
				}, _parent));
				_push(`</div>`);
			} else _push(`<!---->`);
			_push(`</div></nav><main class="flex-grow">`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</main><footer class="bg-[#0d5c3e] text-white mt-12"><div class="max-w-7xl mx-auto px-4 py-12"><div class="flex md:justify-between"><div><h3 class="font-bold text-lg mb-4">Baitul Hikmah</h3><p class="text-sm text-gray-300">Masjid sebagai pusat ibadah, pendidikan, dan kegiatan sosial umat Islam.</p></div><div class="flex gap-8"><div><h4 class="font-semibold mb-4">Menu</h4><ul class="space-y-2 text-sm text-gray-300"><!--[-->`);
			ssrRenderList(navItems, (item) => {
				_push(`<li>`);
				_push(ssrRenderComponent(unref(Link), {
					href: _ctx.route(item.href),
					class: "hover:text-[#c9a96e] transition"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(item.name)}`);
						else return [createTextVNode(toDisplayString(item.name), 1)];
					}),
					_: 2
				}, _parent));
				_push(`</li>`);
			});
			_push(`<!--]--></ul></div><div><h4 class="font-semibold mb-4">Kontak</h4><ul class="space-y-2 text-sm text-gray-300"><li>Jl. Mawar No. 10</li><li>081234567890</li><li>admin@baitulhikmah.id</li></ul></div></div></div><div class="border-t border-white/10 mt-8 pt-6 text-center text-sm text-gray-300"> © 2026 Masjid Baitul Hikmah. All rights reserved. </div></div></footer></div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/PublicLayout.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as t };
