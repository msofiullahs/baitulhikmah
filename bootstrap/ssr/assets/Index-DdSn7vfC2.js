import { t as _sfc_main$1 } from "./Pagination-DiptkPBm.js";
import { t as _sfc_main$2 } from "./PublicLayout-wCRJiN1A.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelSelect, vModelText, withCtx, withDirectives, withKeys } from "vue";
import { Head, Link, router } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { CalendarIcon, MagnifyingGlassIcon } from "@heroicons/vue/24/outline";
//#region resources/js/Pages/Public/Announcements/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: {
		items: Object,
		filters: Object,
		hero_title: String,
		hero_description: String
	},
	setup(__props) {
		const props = __props;
		const search = ref(props.filters?.search || "");
		const selectedCategory = ref(props.filters?.selected_category || "");
		const applyFilter = () => {
			router.get(route(route().current()), {
				search: search.value,
				category: selectedCategory.value
			}, {
				preserveState: true,
				preserveScroll: true
			});
		};
		const resetFilter = () => {
			search.value = "";
			selectedCategory.value = "";
			applyFilter();
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$2, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: __props.hero_title + " - Baitul Hikmah" }, null, _parent, _scopeId));
						_push(`<section class="bg-gradient-to-br from-primary to-primary-light text-white py-16"${_scopeId}><div class="max-w-7xl mx-auto px-4 text-center"${_scopeId}><h1 class="text-4xl md:text-5xl font-bold mb-4"${_scopeId}>${ssrInterpolate(__props.hero_title)}</h1><p class="text-lg opacity-90 max-w-2xl mx-auto"${_scopeId}>${ssrInterpolate(__props.hero_description)}</p></div></section><div class="max-w-7xl mx-auto px-4 -mt-10 relative z-10"${_scopeId}><div class="bg-white rounded-xl shadow-lg p-6 mb-10"${_scopeId}><div class="flex flex-col md:flex-row gap-4"${_scopeId}><div class="flex-1 relative"${_scopeId}>`);
						_push(ssrRenderComponent(unref(MagnifyingGlassIcon), { class: "w-5 h-5 absolute left-3 top-2.5 text-gray-400" }, null, _parent, _scopeId));
						_push(`<input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari judul atau deskripsi..." class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"${_scopeId}></div>`);
						if (__props.filters?.categories) {
							_push(`<div class="w-full md:w-64"${_scopeId}><select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(selectedCategory.value) ? ssrLooseContain(selectedCategory.value, "") : ssrLooseEqual(selectedCategory.value, "")) ? " selected" : ""}${_scopeId}>Semua Kategori</option><!--[-->`);
							ssrRenderList(__props.filters.categories, (cat) => {
								_push(`<option${ssrRenderAttr("value", cat.id)}${ssrIncludeBooleanAttr(Array.isArray(selectedCategory.value) ? ssrLooseContain(selectedCategory.value, cat.id) : ssrLooseEqual(selectedCategory.value, cat.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(cat.nama)}</option>`);
							});
							_push(`<!--]--></select></div>`);
						} else _push(`<!---->`);
						_push(`<button class="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition font-medium"${_scopeId}> Reset </button></div></div>`);
						if (__props.items && __props.items.data) {
							_push(`<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"${_scopeId}>`);
							if (__props.items.data.length > 0) {
								_push(`<!--[-->`);
								ssrRenderList(__props.items.data, (item) => {
									_push(`<div class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition duration-300 border border-gray-100 flex flex-col"${_scopeId}>`);
									if (item.gambar) _push(`<div class="h-48 bg-gray-200 overflow-hidden"${_scopeId}><img${ssrRenderAttr("src", item.gambar)}${ssrRenderAttr("alt", item.judul)} class="w-full h-full object-cover"${_scopeId}></div>`);
									else _push(`<div class="h-48 bg-gradient-to-br from-primary/10 to-primary-light/10 flex items-center justify-center text-primary text-4xl"${_scopeId}></div>`);
									_push(`<div class="p-6 flex-1 flex flex-col"${_scopeId}>`);
									if (item.tipe) _push(`<span class="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-3 w-fit uppercase tracking-wide"${_scopeId}>${ssrInterpolate(item.tipe)}</span>`);
									else _push(`<!---->`);
									_push(`<h3 class="font-bold text-xl text-gray-800 mb-2 line-clamp-2"${_scopeId}>${ssrInterpolate(item.judul)}</h3><p class="text-gray-600 text-sm mb-4 line-clamp-3 flex-1"${_scopeId}>${ssrInterpolate(item.isi)}</p><div class="space-y-2 text-sm text-gray-500 border-t pt-4 mt-auto"${_scopeId}>`);
									if (item.published_at) {
										_push(`<p class="flex items-center gap-2"${_scopeId}>`);
										_push(ssrRenderComponent(unref(CalendarIcon), { class: "w-4 h-4 text-primary" }, null, _parent, _scopeId));
										_push(` ${ssrInterpolate(item.published_at)}</p>`);
									} else _push(`<!---->`);
									_push(`</div></div><div class="px-6 pb-6"${_scopeId}>`);
									if (_ctx.route().has("public.announcements.show")) _push(ssrRenderComponent(unref(Link), {
										href: _ctx.route("public.announcements.show", item.id),
										class: "block w-full text-center py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition font-semibold text-sm"
									}, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(` Baca Selengkapnya `);
											else return [createTextVNode(" Baca Selengkapnya ")];
										}),
										_: 2
									}, _parent, _scopeId));
									else _push(`<!---->`);
									_push(`</div></div>`);
								});
								_push(`<!--]-->`);
							} else _push(`<div class="col-span-full text-center py-20 bg-white rounded-xl shadow-sm"${_scopeId}><div class="text-6xl mb-4"${_scopeId}></div><h3 class="text-xl font-bold text-gray-700"${_scopeId}>Tidak ada data ditemukan</h3><p class="text-gray-500 mt-2"${_scopeId}>Coba ubah kata kunci pencarian atau filter Anda.</p></div>`);
							_push(`</div>`);
						} else _push(`<!---->`);
						if (__props.items && __props.items.data && __props.items.data.length > 0) {
							_push(`<div class="mb-16"${_scopeId}>`);
							_push(ssrRenderComponent(_sfc_main$1, { links: __props.items.links }, null, _parent, _scopeId));
							_push(`</div>`);
						} else _push(`<!---->`);
						_push(`</div>`);
					} else return [
						createVNode(unref(Head), { title: __props.hero_title + " - Baitul Hikmah" }, null, 8, ["title"]),
						createVNode("section", { class: "bg-gradient-to-br from-primary to-primary-light text-white py-16" }, [createVNode("div", { class: "max-w-7xl mx-auto px-4 text-center" }, [createVNode("h1", { class: "text-4xl md:text-5xl font-bold mb-4" }, toDisplayString(__props.hero_title), 1), createVNode("p", { class: "text-lg opacity-90 max-w-2xl mx-auto" }, toDisplayString(__props.hero_description), 1)])]),
						createVNode("div", { class: "max-w-7xl mx-auto px-4 -mt-10 relative z-10" }, [
							createVNode("div", { class: "bg-white rounded-xl shadow-lg p-6 mb-10" }, [createVNode("div", { class: "flex flex-col md:flex-row gap-4" }, [
								createVNode("div", { class: "flex-1 relative" }, [createVNode(unref(MagnifyingGlassIcon), { class: "w-5 h-5 absolute left-3 top-2.5 text-gray-400" }), withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => search.value = $event,
									onKeyup: withKeys(applyFilter, ["enter"]),
									type: "text",
									placeholder: "Cari judul atau deskripsi...",
									class: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
								}, null, 40, ["onUpdate:modelValue"]), [[vModelText, search.value]])]),
								__props.filters?.categories ? (openBlock(), createBlock("div", {
									key: 0,
									class: "w-full md:w-64"
								}, [withDirectives(createVNode("select", {
									"onUpdate:modelValue": ($event) => selectedCategory.value = $event,
									onChange: applyFilter,
									class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
								}, [createVNode("option", { value: "" }, "Semua Kategori"), (openBlock(true), createBlock(Fragment, null, renderList(__props.filters.categories, (cat) => {
									return openBlock(), createBlock("option", {
										key: cat.id,
										value: cat.id
									}, toDisplayString(cat.nama), 9, ["value"]);
								}), 128))], 40, ["onUpdate:modelValue"]), [[vModelSelect, selectedCategory.value]])])) : createCommentVNode("", true),
								createVNode("button", {
									onClick: resetFilter,
									class: "px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition font-medium"
								}, " Reset ")
							])]),
							__props.items && __props.items.data ? (openBlock(), createBlock("div", {
								key: 0,
								class: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
							}, [__props.items.data.length > 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(__props.items.data, (item) => {
								return openBlock(), createBlock("div", {
									key: item.id,
									class: "bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition duration-300 border border-gray-100 flex flex-col"
								}, [
									item.gambar ? (openBlock(), createBlock("div", {
										key: 0,
										class: "h-48 bg-gray-200 overflow-hidden"
									}, [createVNode("img", {
										src: item.gambar,
										alt: item.judul,
										class: "w-full h-full object-cover"
									}, null, 8, ["src", "alt"])])) : (openBlock(), createBlock("div", {
										key: 1,
										class: "h-48 bg-gradient-to-br from-primary/10 to-primary-light/10 flex items-center justify-center text-primary text-4xl"
									})),
									createVNode("div", { class: "p-6 flex-1 flex flex-col" }, [
										item.tipe ? (openBlock(), createBlock("span", {
											key: 0,
											class: "inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-3 w-fit uppercase tracking-wide"
										}, toDisplayString(item.tipe), 1)) : createCommentVNode("", true),
										createVNode("h3", { class: "font-bold text-xl text-gray-800 mb-2 line-clamp-2" }, toDisplayString(item.judul), 1),
										createVNode("p", { class: "text-gray-600 text-sm mb-4 line-clamp-3 flex-1" }, toDisplayString(item.isi), 1),
										createVNode("div", { class: "space-y-2 text-sm text-gray-500 border-t pt-4 mt-auto" }, [item.published_at ? (openBlock(), createBlock("p", {
											key: 0,
											class: "flex items-center gap-2"
										}, [createVNode(unref(CalendarIcon), { class: "w-4 h-4 text-primary" }), createTextVNode(" " + toDisplayString(item.published_at), 1)])) : createCommentVNode("", true)])
									]),
									createVNode("div", { class: "px-6 pb-6" }, [_ctx.route().has("public.announcements.show") ? (openBlock(), createBlock(unref(Link), {
										key: 0,
										href: _ctx.route("public.announcements.show", item.id),
										class: "block w-full text-center py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition font-semibold text-sm"
									}, {
										default: withCtx(() => [createTextVNode(" Baca Selengkapnya ")]),
										_: 1
									}, 8, ["href"])) : createCommentVNode("", true)])
								]);
							}), 128)) : (openBlock(), createBlock("div", {
								key: 1,
								class: "col-span-full text-center py-20 bg-white rounded-xl shadow-sm"
							}, [
								createVNode("div", { class: "text-6xl mb-4" }),
								createVNode("h3", { class: "text-xl font-bold text-gray-700" }, "Tidak ada data ditemukan"),
								createVNode("p", { class: "text-gray-500 mt-2" }, "Coba ubah kata kunci pencarian atau filter Anda.")
							]))])) : createCommentVNode("", true),
							__props.items && __props.items.data && __props.items.data.length > 0 ? (openBlock(), createBlock("div", {
								key: 1,
								class: "mb-16"
							}, [createVNode(_sfc_main$1, { links: __props.items.links }, null, 8, ["links"])])) : createCommentVNode("", true)
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Announcements/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
