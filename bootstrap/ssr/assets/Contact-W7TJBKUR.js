import { t as _sfc_main$1 } from "./PublicLayout-wCRJiN1A.js";
import { Fragment, createBlock, createCommentVNode, createVNode, openBlock, renderList, toDisplayString, unref, useSSRContext, vModelText, withCtx, withDirectives, withModifiers } from "vue";
import { Head, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/vue/24/outline";
//#region resources/js/Pages/Public/Contact.vue
var _sfc_main = {
	__name: "Contact",
	__ssrInlineRender: true,
	props: {
		contact_info: Object,
		social_media: Object,
		pengurus: Array
	},
	setup(__props) {
		const form = useForm({
			nama: "",
			email: "",
			subjek: "",
			pesan: ""
		});
		const submitContact = () => {
			form.post(route("public.contact.store"), { onSuccess: () => {
				form.reset();
			} });
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "Kontak Kami - Baitul Hikmah" }, null, _parent, _scopeId));
						_push(`<section class="bg-gradient-to-br from-primary to-primary-light text-white py-16"${_scopeId}><div class="max-w-7xl mx-auto px-4 text-center"${_scopeId}><h1 class="text-4xl md:text-5xl font-bold mb-4"${_scopeId}>Hubungi Kami</h1><p class="text-lg opacity-90 max-w-2xl mx-auto"${_scopeId}>Kami siap melayani pertanyaan dan kebutuhan Anda</p></div></section><div class="max-w-7xl mx-auto px-4 -mt-10 relative z-10 pb-16"${_scopeId}><div class="grid md:grid-cols-2 gap-8"${_scopeId}><div class="bg-white rounded-xl shadow-lg p-8"${_scopeId}><h2 class="text-2xl font-bold text-gray-800 mb-6"${_scopeId}>Informasi Kontak</h2><div class="space-y-6"${_scopeId}><div class="flex items-start gap-4"${_scopeId}><div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0"${_scopeId}>`);
						_push(ssrRenderComponent(unref(MapPinIcon), { class: "w-6 h-6 text-primary" }, null, _parent, _scopeId));
						_push(`</div><div${_scopeId}><h3 class="font-semibold text-gray-800 mb-1"${_scopeId}>Alamat</h3><p class="text-gray-600"${_scopeId}>${ssrInterpolate(__props.contact_info?.alamat || "-")}</p></div></div><div class="flex items-start gap-4"${_scopeId}><div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0"${_scopeId}>`);
						_push(ssrRenderComponent(unref(PhoneIcon), { class: "w-6 h-6 text-primary" }, null, _parent, _scopeId));
						_push(`</div><div${_scopeId}><h3 class="font-semibold text-gray-800 mb-1"${_scopeId}>Telepon / WhatsApp</h3><p class="text-gray-600"${_scopeId}>${ssrInterpolate(__props.contact_info?.no_hp || "-")}</p></div></div><div class="flex items-start gap-4"${_scopeId}><div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0"${_scopeId}>`);
						_push(ssrRenderComponent(unref(EnvelopeIcon), { class: "w-6 h-6 text-primary" }, null, _parent, _scopeId));
						_push(`</div><div${_scopeId}><h3 class="font-semibold text-gray-800 mb-1"${_scopeId}>Email</h3><p class="text-gray-600"${_scopeId}>${ssrInterpolate(__props.contact_info?.email || "-")}</p></div></div></div><div class="mt-8 pt-8 border-t"${_scopeId}><h3 class="font-semibold text-gray-800 mb-4"${_scopeId}>Pengurus Ta&#39;mir</h3><div class="space-y-3"${_scopeId}><!--[-->`);
						ssrRenderList(__props.pengurus, (p, index) => {
							_push(`<div class="flex justify-between items-center pb-2 border-b last:border-0"${_scopeId}><div${_scopeId}><p class="font-medium text-gray-800"${_scopeId}>${ssrInterpolate(p.jabatan)}</p><p class="text-sm text-gray-600"${_scopeId}>${ssrInterpolate(p.nama)}</p></div>`);
							if (p.no_hp) _push(`<a${ssrRenderAttr("href", "https://wa.me/" + p.no_hp)} target="_blank" class="text-primary hover:text-primary-light text-sm font-medium"${_scopeId}>Hubungi</a>`);
							else _push(`<!---->`);
							_push(`</div>`);
						});
						_push(`<!--]--></div></div><div class="mt-8 pt-8 border-t"${_scopeId}><h3 class="font-semibold text-gray-800 mb-4"${_scopeId}>Ikuti Kami di Media Sosial</h3><div class="flex gap-3"${_scopeId}>`);
						if (__props.social_media?.facebook) _push(`<a${ssrRenderAttr("href", __props.social_media.facebook)} target="_blank" class="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-light transition"${_scopeId}>FB</a>`);
						else _push(`<!---->`);
						if (__props.social_media?.instagram) _push(`<a${ssrRenderAttr("href", __props.social_media.instagram)} target="_blank" class="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-light transition"${_scopeId}>IG</a>`);
						else _push(`<!---->`);
						if (__props.social_media?.youtube) _push(`<a${ssrRenderAttr("href", __props.social_media.youtube)} target="_blank" class="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-light transition"${_scopeId}>YT</a>`);
						else _push(`<!---->`);
						if (__props.social_media?.tiktok) _push(`<a${ssrRenderAttr("href", __props.social_media.tiktok)} target="_blank" class="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-light transition"${_scopeId}>TT</a>`);
						else _push(`<!---->`);
						_push(`</div></div></div><div class="bg-white rounded-xl shadow-lg p-8"${_scopeId}><h2 class="text-2xl font-bold text-gray-800 mb-6"${_scopeId}>Kirim Pesan</h2><form class="space-y-4"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Nama Lengkap *</label><input${ssrRenderAttr("value", unref(form).nama)} type="text" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none" placeholder="Masukkan nama Anda"${_scopeId}>`);
						if (unref(form).errors.nama) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.nama)}</span>`);
						else _push(`<!---->`);
						_push(`</div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Email *</label><input${ssrRenderAttr("value", unref(form).email)} type="email" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none" placeholder="nama@email.com"${_scopeId}>`);
						if (unref(form).errors.email) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.email)}</span>`);
						else _push(`<!---->`);
						_push(`</div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Subjek *</label><input${ssrRenderAttr("value", unref(form).subjek)} type="text" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none" placeholder="Subjek pesan Anda"${_scopeId}>`);
						if (unref(form).errors.subjek) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.subjek)}</span>`);
						else _push(`<!---->`);
						_push(`</div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Pesan *</label><textarea rows="5" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none resize-none" placeholder="Tulis pesan Anda di sini..."${_scopeId}>${ssrInterpolate(unref(form).pesan)}</textarea>`);
						if (unref(form).errors.pesan) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.pesan)}</span>`);
						else _push(`<!---->`);
						_push(`</div><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="w-full bg-primary hover:bg-primary-light text-white font-semibold py-3 px-6 rounded-lg transition disabled:opacity-50"${_scopeId}>${ssrInterpolate(unref(form).processing ? "Mengirim..." : "Kirim Pesan")}</button></form></div></div><div class="mt-12 bg-white rounded-xl shadow-lg overflow-hidden"${_scopeId}><div class="p-6 border-b"${_scopeId}><h2 class="text-2xl font-bold text-gray-800"${_scopeId}>Lokasi Kami</h2></div><div class="h-96 bg-gray-200 flex items-center justify-center"${_scopeId}><div class="text-center text-gray-500"${_scopeId}>`);
						_push(ssrRenderComponent(unref(MapPinIcon), { class: "w-16 h-16 mx-auto mb-4 text-primary" }, null, _parent, _scopeId));
						_push(`<p class="text-lg font-medium"${_scopeId}>Google Maps akan ditampilkan di sini</p><p class="text-sm"${_scopeId}>Jl. Mawar No. 10, Bandung</p></div></div></div></div>`);
					} else return [
						createVNode(unref(Head), { title: "Kontak Kami - Baitul Hikmah" }),
						createVNode("section", { class: "bg-gradient-to-br from-primary to-primary-light text-white py-16" }, [createVNode("div", { class: "max-w-7xl mx-auto px-4 text-center" }, [createVNode("h1", { class: "text-4xl md:text-5xl font-bold mb-4" }, "Hubungi Kami"), createVNode("p", { class: "text-lg opacity-90 max-w-2xl mx-auto" }, "Kami siap melayani pertanyaan dan kebutuhan Anda")])]),
						createVNode("div", { class: "max-w-7xl mx-auto px-4 -mt-10 relative z-10 pb-16" }, [createVNode("div", { class: "grid md:grid-cols-2 gap-8" }, [createVNode("div", { class: "bg-white rounded-xl shadow-lg p-8" }, [
							createVNode("h2", { class: "text-2xl font-bold text-gray-800 mb-6" }, "Informasi Kontak"),
							createVNode("div", { class: "space-y-6" }, [
								createVNode("div", { class: "flex items-start gap-4" }, [createVNode("div", { class: "w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0" }, [createVNode(unref(MapPinIcon), { class: "w-6 h-6 text-primary" })]), createVNode("div", null, [createVNode("h3", { class: "font-semibold text-gray-800 mb-1" }, "Alamat"), createVNode("p", { class: "text-gray-600" }, toDisplayString(__props.contact_info?.alamat || "-"), 1)])]),
								createVNode("div", { class: "flex items-start gap-4" }, [createVNode("div", { class: "w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0" }, [createVNode(unref(PhoneIcon), { class: "w-6 h-6 text-primary" })]), createVNode("div", null, [createVNode("h3", { class: "font-semibold text-gray-800 mb-1" }, "Telepon / WhatsApp"), createVNode("p", { class: "text-gray-600" }, toDisplayString(__props.contact_info?.no_hp || "-"), 1)])]),
								createVNode("div", { class: "flex items-start gap-4" }, [createVNode("div", { class: "w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0" }, [createVNode(unref(EnvelopeIcon), { class: "w-6 h-6 text-primary" })]), createVNode("div", null, [createVNode("h3", { class: "font-semibold text-gray-800 mb-1" }, "Email"), createVNode("p", { class: "text-gray-600" }, toDisplayString(__props.contact_info?.email || "-"), 1)])])
							]),
							createVNode("div", { class: "mt-8 pt-8 border-t" }, [createVNode("h3", { class: "font-semibold text-gray-800 mb-4" }, "Pengurus Ta'mir"), createVNode("div", { class: "space-y-3" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.pengurus, (p, index) => {
								return openBlock(), createBlock("div", {
									key: index,
									class: "flex justify-between items-center pb-2 border-b last:border-0"
								}, [createVNode("div", null, [createVNode("p", { class: "font-medium text-gray-800" }, toDisplayString(p.jabatan), 1), createVNode("p", { class: "text-sm text-gray-600" }, toDisplayString(p.nama), 1)]), p.no_hp ? (openBlock(), createBlock("a", {
									key: 0,
									href: "https://wa.me/" + p.no_hp,
									target: "_blank",
									class: "text-primary hover:text-primary-light text-sm font-medium"
								}, "Hubungi", 8, ["href"])) : createCommentVNode("", true)]);
							}), 128))])]),
							createVNode("div", { class: "mt-8 pt-8 border-t" }, [createVNode("h3", { class: "font-semibold text-gray-800 mb-4" }, "Ikuti Kami di Media Sosial"), createVNode("div", { class: "flex gap-3" }, [
								__props.social_media?.facebook ? (openBlock(), createBlock("a", {
									key: 0,
									href: __props.social_media.facebook,
									target: "_blank",
									class: "w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-light transition"
								}, "FB", 8, ["href"])) : createCommentVNode("", true),
								__props.social_media?.instagram ? (openBlock(), createBlock("a", {
									key: 1,
									href: __props.social_media.instagram,
									target: "_blank",
									class: "w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-light transition"
								}, "IG", 8, ["href"])) : createCommentVNode("", true),
								__props.social_media?.youtube ? (openBlock(), createBlock("a", {
									key: 2,
									href: __props.social_media.youtube,
									target: "_blank",
									class: "w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-light transition"
								}, "YT", 8, ["href"])) : createCommentVNode("", true),
								__props.social_media?.tiktok ? (openBlock(), createBlock("a", {
									key: 3,
									href: __props.social_media.tiktok,
									target: "_blank",
									class: "w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-light transition"
								}, "TT", 8, ["href"])) : createCommentVNode("", true)
							])])
						]), createVNode("div", { class: "bg-white rounded-xl shadow-lg p-8" }, [createVNode("h2", { class: "text-2xl font-bold text-gray-800 mb-6" }, "Kirim Pesan"), createVNode("form", {
							onSubmit: withModifiers(submitContact, ["prevent"]),
							class: "space-y-4"
						}, [
							createVNode("div", null, [
								createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Nama Lengkap *"),
								withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => unref(form).nama = $event,
									type: "text",
									required: "",
									class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none",
									placeholder: "Masukkan nama Anda"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).nama]]),
								unref(form).errors.nama ? (openBlock(), createBlock("span", {
									key: 0,
									class: "text-red-500 text-xs"
								}, toDisplayString(unref(form).errors.nama), 1)) : createCommentVNode("", true)
							]),
							createVNode("div", null, [
								createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Email *"),
								withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => unref(form).email = $event,
									type: "email",
									required: "",
									class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none",
									placeholder: "nama@email.com"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).email]]),
								unref(form).errors.email ? (openBlock(), createBlock("span", {
									key: 0,
									class: "text-red-500 text-xs"
								}, toDisplayString(unref(form).errors.email), 1)) : createCommentVNode("", true)
							]),
							createVNode("div", null, [
								createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Subjek *"),
								withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => unref(form).subjek = $event,
									type: "text",
									required: "",
									class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none",
									placeholder: "Subjek pesan Anda"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).subjek]]),
								unref(form).errors.subjek ? (openBlock(), createBlock("span", {
									key: 0,
									class: "text-red-500 text-xs"
								}, toDisplayString(unref(form).errors.subjek), 1)) : createCommentVNode("", true)
							]),
							createVNode("div", null, [
								createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Pesan *"),
								withDirectives(createVNode("textarea", {
									"onUpdate:modelValue": ($event) => unref(form).pesan = $event,
									rows: "5",
									required: "",
									class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none resize-none",
									placeholder: "Tulis pesan Anda di sini..."
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).pesan]]),
								unref(form).errors.pesan ? (openBlock(), createBlock("span", {
									key: 0,
									class: "text-red-500 text-xs"
								}, toDisplayString(unref(form).errors.pesan), 1)) : createCommentVNode("", true)
							]),
							createVNode("button", {
								type: "submit",
								disabled: unref(form).processing,
								class: "w-full bg-primary hover:bg-primary-light text-white font-semibold py-3 px-6 rounded-lg transition disabled:opacity-50"
							}, toDisplayString(unref(form).processing ? "Mengirim..." : "Kirim Pesan"), 9, ["disabled"])
						], 32)])]), createVNode("div", { class: "mt-12 bg-white rounded-xl shadow-lg overflow-hidden" }, [createVNode("div", { class: "p-6 border-b" }, [createVNode("h2", { class: "text-2xl font-bold text-gray-800" }, "Lokasi Kami")]), createVNode("div", { class: "h-96 bg-gray-200 flex items-center justify-center" }, [createVNode("div", { class: "text-center text-gray-500" }, [
							createVNode(unref(MapPinIcon), { class: "w-16 h-16 mx-auto mb-4 text-primary" }),
							createVNode("p", { class: "text-lg font-medium" }, "Google Maps akan ditampilkan di sini"),
							createVNode("p", { class: "text-sm" }, "Jl. Mawar No. 10, Bandung")
						])])])])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Contact.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
