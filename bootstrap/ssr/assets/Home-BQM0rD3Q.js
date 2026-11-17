import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BOaGB7Aw.js";
import { t as _sfc_main$1 } from "./PublicLayout-wCRJiN1A.js";
import { Fragment, TransitionGroup, createBlock, createCommentVNode, createTextVNode, createVNode, onBeforeUnmount, onMounted, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vShow, withCtx, withDirectives } from "vue";
import { Head, Link } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon, ClockIcon, MapPinIcon, MegaphoneIcon } from "@heroicons/vue/24/outline";
//#region resources/js/Pages/Public/Home.vue
var _sfc_main = {
	__name: "Home",
	__ssrInlineRender: true,
	props: {
		masjid_profile: Object,
		jadwal_sholat: Object,
		announcements: Array,
		upcoming_activities: Array,
		next_jumat: Object,
		finance_highlight: Object
	},
	setup(__props) {
		const formatRupiah = (num) => "Rp " + Number(num).toLocaleString("id-ID");
		const heroSlides = [{
			src: "/assets/logo-nu.svg",
			alt: "Logo NU"
		}, {
			src: "/assets/mbh-original.png",
			alt: "Logo Masjid Baitul Hikmah"
		}];
		const currentSlide = ref(0);
		let slideTimer = null;
		const nextSlide = () => {
			currentSlide.value = (currentSlide.value + 1) % heroSlides.length;
		};
		const prevSlide = () => {
			currentSlide.value = (currentSlide.value - 1 + heroSlides.length) % heroSlides.length;
		};
		const goToSlide = (index) => {
			currentSlide.value = index;
			restartSlider();
		};
		const restartSlider = () => {
			clearInterval(slideTimer);
			slideTimer = setInterval(nextSlide, 4e3);
		};
		onMounted(() => {
			slideTimer = setInterval(nextSlide, 4e3);
		});
		onBeforeUnmount(() => clearInterval(slideTimer));
		const sholatTimes = [
			{
				name: "Subuh",
				key: "subuh",
				icon: ""
			},
			{
				name: "Dzuhur",
				key: "dzuhur",
				icon: "☀️"
			},
			{
				name: "Ashar",
				key: "ashar",
				icon: "🌤️"
			},
			{
				name: "Maghrib",
				key: "maghrib",
				icon: "🌇"
			},
			{
				name: "Isya",
				key: "isya",
				icon: "🌙"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "Beranda - Baitul Hikmah" }, null, _parent, _scopeId));
						_push(`<section class="bg-[#0d5c3e] text-white py-20 relative overflow-hidden" data-v-96a39dab${_scopeId}><div class="absolute inset-0 opacity-5" style="${ssrRenderStyle({ "background-image": "url('data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" })}" data-v-96a39dab${_scopeId}></div><div class="grid grid-cols-2 max-w-7xl mx-auto px-4 relative justify-items-stretch" data-v-96a39dab${_scopeId}><div class="max-w-3xl" data-v-96a39dab${_scopeId}><h1 class="text-5xl font-bold mb-4 leading-tight" data-v-96a39dab${_scopeId}>Selamat Datang di<br data-v-96a39dab${_scopeId}>Masjid Baitul Hikmah</h1><p class="text-xl opacity-90 mb-8 flex items-center gap-2" data-v-96a39dab${_scopeId}>`);
						_push(ssrRenderComponent(unref(MapPinIcon), { class: "w-5 h-5" }, null, _parent, _scopeId));
						_push(` ${ssrInterpolate(__props.masjid_profile.alamat)}</p><div class="flex flex-wrap gap-3" data-v-96a39dab${_scopeId}>`);
						_push(ssrRenderComponent(unref(Link), {
							href: _ctx.route("public.schedule.pengajian"),
							class: "bg-[#c9a96e] text-[#0d5c3e] px-6 py-3 rounded-lg font-semibold hover:bg-[#b8944f] transition shadow-lg"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Lihat Jadwal `);
								else return [createTextVNode(" Lihat Jadwal ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(unref(Link), {
							href: _ctx.route("public.finance"),
							class: "bg-white/10 backdrop-blur border-2 border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Laporan Keuangan `);
								else return [createTextVNode(" Laporan Keuangan ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></div><div class="justify-items-center md:justify-items-end" data-v-96a39dab${_scopeId}><div class="relative w-full max-w-sm group" data-v-96a39dab${_scopeId}><div class="relative overflow-hidden aspect-video" data-v-96a39dab${_scopeId}><!--[-->`);
						ssrRenderList(heroSlides, (slide, index) => {
							_push(`<img${ssrRenderAttr("src", slide.src)}${ssrRenderAttr("alt", slide.alt)} class="hero-slide-image absolute inset-0 w-full h-full object-contain p-6" style="${ssrRenderStyle(currentSlide.value === index ? null : { display: "none" })}" data-v-96a39dab${_scopeId}>`);
						});
						_push(`<!--]--><button type="button" aria-label="Sebelumnya" class="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/30 text-white opacity-0 group-hover:opacity-100 hover:bg-black/50 transition" data-v-96a39dab${_scopeId}>`);
						_push(ssrRenderComponent(unref(ChevronLeftIcon), { class: "w-5 h-5" }, null, _parent, _scopeId));
						_push(`</button><button type="button" aria-label="Berikutnya" class="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/30 text-white opacity-0 group-hover:opacity-100 hover:bg-black/50 transition" data-v-96a39dab${_scopeId}>`);
						_push(ssrRenderComponent(unref(ChevronRightIcon), { class: "w-5 h-5" }, null, _parent, _scopeId));
						_push(`</button></div><div class="flex justify-center gap-2 mt-4" data-v-96a39dab${_scopeId}><!--[-->`);
						ssrRenderList(heroSlides, (slide, index) => {
							_push(`<button type="button"${ssrRenderAttr("aria-label", "Slide " + (index + 1))} class="${ssrRenderClass([currentSlide.value === index ? "w-8 bg-[#c9a96e]" : "w-2.5 bg-white/40 hover:bg-white/70", "h-2.5 rounded-full transition-all"])}" data-v-96a39dab${_scopeId}></button>`);
						});
						_push(`<!--]--></div></div></div></div></section>`);
						if (__props.jadwal_sholat) {
							_push(`<section class="max-w-7xl mx-auto px-4 -mt-12 relative z-10" data-v-96a39dab${_scopeId}><div class="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100" data-v-96a39dab${_scopeId}><div class="flex items-center gap-3 mb-6" data-v-96a39dab${_scopeId}>`);
							_push(ssrRenderComponent(unref(ClockIcon), { class: "w-6 h-6 text-[#0d5c3e]" }, null, _parent, _scopeId));
							_push(`<h2 class="text-xl font-bold text-gray-800" data-v-96a39dab${_scopeId}>Jadwal Sholat Hari Ini</h2></div><div class="grid grid-cols-2 md:grid-cols-5 gap-4" data-v-96a39dab${_scopeId}><!--[-->`);
							ssrRenderList(sholatTimes, (sholat) => {
								_push(`<div class="text-center p-4 bg-gradient-to-br from-[#0d5c3e]/5 to-[#0d5c3e]/10 rounded-xl border border-[#0d5c3e]/10" data-v-96a39dab${_scopeId}><div class="text-2xl mb-2" data-v-96a39dab${_scopeId}>${ssrInterpolate(sholat.icon)}</div><p class="text-sm text-gray-600 font-medium" data-v-96a39dab${_scopeId}>${ssrInterpolate(sholat.name)}</p><p class="text-2xl font-bold text-[#0d5c3e] mt-1" data-v-96a39dab${_scopeId}>${ssrInterpolate(__props.jadwal_sholat[sholat.key])}</p></div>`);
							});
							_push(`<!--]--></div></div></section>`);
						} else _push(`<!---->`);
						_push(`<section class="max-w-7xl mx-auto px-4 py-16" data-v-96a39dab${_scopeId}><div class="text-center mb-10" data-v-96a39dab${_scopeId}><h2 class="text-3xl font-bold text-gray-800" data-v-96a39dab${_scopeId}>Transparansi Keuangan</h2><p class="text-gray-500 mt-2" data-v-96a39dab${_scopeId}>Laporan ${ssrInterpolate(__props.finance_highlight.bulan)}</p></div><div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto" data-v-96a39dab${_scopeId}><div class="bg-white p-8 rounded-2xl shadow-md border-t-4 border-[#0d5c3e]" data-v-96a39dab${_scopeId}><p class="text-gray-500 text-sm font-medium" data-v-96a39dab${_scopeId}>Total Pemasukan</p><p class="text-4xl font-bold text-[#0d5c3e] mt-2" data-v-96a39dab${_scopeId}>${ssrInterpolate(formatRupiah(__props.finance_highlight.total_pemasukan))}</p></div><div class="bg-white p-8 rounded-2xl shadow-md border-t-4 border-[#c9a96e]" data-v-96a39dab${_scopeId}><p class="text-gray-500 text-sm font-medium" data-v-96a39dab${_scopeId}>Total Pengeluaran</p><p class="text-4xl font-bold text-[#c9a96e] mt-2" data-v-96a39dab${_scopeId}>${ssrInterpolate(formatRupiah(__props.finance_highlight.total_pengeluaran))}</p></div></div><div class="text-center mt-8" data-v-96a39dab${_scopeId}>`);
						_push(ssrRenderComponent(unref(Link), {
							href: _ctx.route("public.finance"),
							class: "inline-flex items-center gap-2 text-[#0d5c3e] font-semibold hover:underline"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Lihat Laporan Lengkap → `);
								else return [createTextVNode(" Lihat Laporan Lengkap → ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></section><section class="bg-gray-100 py-16" data-v-96a39dab${_scopeId}><div class="max-w-7xl mx-auto px-4" data-v-96a39dab${_scopeId}><div class="flex items-center justify-between mb-8" data-v-96a39dab${_scopeId}><div class="flex items-center gap-3" data-v-96a39dab${_scopeId}>`);
						_push(ssrRenderComponent(unref(CalendarIcon), { class: "w-6 h-6 text-[#0d5c3e]" }, null, _parent, _scopeId));
						_push(`<h2 class="text-2xl font-bold text-gray-800" data-v-96a39dab${_scopeId}>Kegiatan Mendatang</h2></div>`);
						_push(ssrRenderComponent(unref(Link), {
							href: _ctx.route("public.schedule.pengajian"),
							class: "text-[#0d5c3e] font-semibold hover:underline text-sm"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Lihat Semua →`);
								else return [createTextVNode("Lihat Semua →")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div>`);
						if (__props.upcoming_activities.length) {
							_push(`<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-v-96a39dab${_scopeId}><!--[-->`);
							ssrRenderList(__props.upcoming_activities, (act) => {
								_push(`<div class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition border border-gray-100" data-v-96a39dab${_scopeId}><div class="h-40 bg-gradient-to-br from-[#0d5c3e] to-[#1a7a52] flex items-center justify-center text-white text-4xl" data-v-96a39dab${_scopeId}></div><div class="p-5" data-v-96a39dab${_scopeId}><span class="text-xs text-[#0d5c3e] font-semibold uppercase" data-v-96a39dab${_scopeId}>${ssrInterpolate(act.kategori)}</span><h3 class="font-bold text-lg text-gray-800 mt-1" data-v-96a39dab${_scopeId}>${ssrInterpolate(act.nama)}</h3><p class="text-sm text-gray-500 mt-2" data-v-96a39dab${_scopeId}>${ssrInterpolate(act.tanggal_mulai)}</p><p class="text-sm text-gray-500 flex items-center gap-1 mt-1" data-v-96a39dab${_scopeId}>`);
								_push(ssrRenderComponent(unref(MapPinIcon), { class: "w-4 h-4" }, null, _parent, _scopeId));
								_push(` ${ssrInterpolate(act.lokasi)}</p></div></div>`);
							});
							_push(`<!--]--></div>`);
						} else _push(`<p class="text-gray-500 text-center py-12" data-v-96a39dab${_scopeId}>Belum ada kegiatan terjadwal</p>`);
						_push(`</div></section>`);
						if (__props.next_jumat) {
							_push(`<section class="max-w-7xl mx-auto px-4 py-16" data-v-96a39dab${_scopeId}><div class="bg-gradient-to-r from-[#0d5c3e] to-[#1a7a52] rounded-2xl p-8 md:p-12 text-white" data-v-96a39dab${_scopeId}><div class="flex items-center gap-2 mb-4" data-v-96a39dab${_scopeId}>`);
							_push(ssrRenderComponent(unref(MegaphoneIcon), { class: "w-6 h-6" }, null, _parent, _scopeId));
							_push(`<span class="text-sm font-semibold uppercase tracking-wider" data-v-96a39dab${_scopeId}>Khatib Jumat Berikutnya</span></div><h2 class="text-3xl font-bold mb-2" data-v-96a39dab${_scopeId}>${ssrInterpolate(__props.next_jumat.tanggal_jumat)}</h2><p class="text-xl opacity-90 mb-6" data-v-96a39dab${_scopeId}>Tema: ${ssrInterpolate(__props.next_jumat.tema || "Belum ditentukan")}</p><div class="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/20" data-v-96a39dab${_scopeId}><div data-v-96a39dab${_scopeId}><p class="text-sm opacity-75" data-v-96a39dab${_scopeId}>Khatib</p><p class="font-bold text-lg" data-v-96a39dab${_scopeId}>${ssrInterpolate(__props.next_jumat.khatib?.nama || "-")}</p></div><div data-v-96a39dab${_scopeId}><p class="text-sm opacity-75" data-v-96a39dab${_scopeId}>Imam</p><p class="font-bold text-lg" data-v-96a39dab${_scopeId}>${ssrInterpolate(__props.next_jumat.imam?.nama || "-")}</p></div><div data-v-96a39dab${_scopeId}><p class="text-sm opacity-75" data-v-96a39dab${_scopeId}>Muadzin</p><p class="font-bold text-lg" data-v-96a39dab${_scopeId}>${ssrInterpolate(__props.next_jumat.muadzin?.nama || "-")}</p></div></div></div></section>`);
						} else _push(`<!---->`);
						_push(`<section class="max-w-7xl mx-auto px-4 pb-16" data-v-96a39dab${_scopeId}><div class="flex items-center justify-between mb-8" data-v-96a39dab${_scopeId}><div class="flex items-center gap-3" data-v-96a39dab${_scopeId}>`);
						_push(ssrRenderComponent(unref(MegaphoneIcon), { class: "w-6 h-6 text-[#0d5c3e]" }, null, _parent, _scopeId));
						_push(`<h2 class="text-2xl font-bold text-gray-800" data-v-96a39dab${_scopeId}>Pengumuman Terbaru</h2></div>`);
						_push(ssrRenderComponent(unref(Link), {
							href: _ctx.route("public.announcements"),
							class: "text-[#0d5c3e] font-semibold hover:underline text-sm"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Lihat Semua →`);
								else return [createTextVNode("Lihat Semua →")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div><div class="grid md:grid-cols-3 gap-6" data-v-96a39dab${_scopeId}><!--[-->`);
						ssrRenderList(__props.announcements, (ann) => {
							_push(`<div class="${ssrRenderClass([ann.tipe === "urgent" ? "border-red-500" : "border-[#0d5c3e]", "bg-white rounded-xl shadow-sm p-6 border-l-4"])}" data-v-96a39dab${_scopeId}>`);
							if (ann.tipe === "urgent") _push(`<span class="inline-block px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded mb-2" data-v-96a39dab${_scopeId}>PENTING</span>`);
							else _push(`<!---->`);
							_push(`<h3 class="font-bold text-lg text-gray-800 mb-2" data-v-96a39dab${_scopeId}>${ssrInterpolate(ann.judul)}</h3><p class="text-sm text-gray-600 line-clamp-3" data-v-96a39dab${_scopeId}>${ssrInterpolate(ann.isi)}</p><p class="text-xs text-gray-400 mt-4" data-v-96a39dab${_scopeId}>${ssrInterpolate(ann.published_at)}</p></div>`);
						});
						_push(`<!--]--></div></section>`);
					} else return [
						createVNode(unref(Head), { title: "Beranda - Baitul Hikmah" }),
						createVNode("section", { class: "bg-[#0d5c3e] text-white py-20 relative overflow-hidden" }, [createVNode("div", {
							class: "absolute inset-0 opacity-5",
							style: { "background-image": "url('data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }
						}), createVNode("div", { class: "grid grid-cols-2 max-w-7xl mx-auto px-4 relative justify-items-stretch" }, [createVNode("div", { class: "max-w-3xl" }, [
							createVNode("h1", { class: "text-5xl font-bold mb-4 leading-tight" }, [
								createTextVNode("Selamat Datang di"),
								createVNode("br"),
								createTextVNode("Masjid Baitul Hikmah")
							]),
							createVNode("p", { class: "text-xl opacity-90 mb-8 flex items-center gap-2" }, [createVNode(unref(MapPinIcon), { class: "w-5 h-5" }), createTextVNode(" " + toDisplayString(__props.masjid_profile.alamat), 1)]),
							createVNode("div", { class: "flex flex-wrap gap-3" }, [createVNode(unref(Link), {
								href: _ctx.route("public.schedule.pengajian"),
								class: "bg-[#c9a96e] text-[#0d5c3e] px-6 py-3 rounded-lg font-semibold hover:bg-[#b8944f] transition shadow-lg"
							}, {
								default: withCtx(() => [createTextVNode(" Lihat Jadwal ")]),
								_: 1
							}, 8, ["href"]), createVNode(unref(Link), {
								href: _ctx.route("public.finance"),
								class: "bg-white/10 backdrop-blur border-2 border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition"
							}, {
								default: withCtx(() => [createTextVNode(" Laporan Keuangan ")]),
								_: 1
							}, 8, ["href"])])
						]), createVNode("div", { class: "justify-items-center md:justify-items-end" }, [createVNode("div", {
							class: "relative w-full max-w-sm group",
							onMouseenter: ($event) => _ctx.clearInterval(unref(slideTimer)),
							onMouseleave: ($event) => restartSlider()
						}, [createVNode("div", { class: "relative overflow-hidden aspect-video" }, [
							createVNode(TransitionGroup, { name: "hero-slide" }, {
								default: withCtx(() => [(openBlock(), createBlock(Fragment, null, renderList(heroSlides, (slide, index) => {
									return withDirectives(createVNode("img", {
										key: slide.src,
										src: slide.src,
										alt: slide.alt,
										class: "hero-slide-image absolute inset-0 w-full h-full object-contain p-6"
									}, null, 8, ["src", "alt"]), [[vShow, currentSlide.value === index]]);
								}), 64))]),
								_: 1
							}),
							createVNode("button", {
								type: "button",
								"aria-label": "Sebelumnya",
								onClick: ($event) => prevSlide(),
								class: "absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/30 text-white opacity-0 group-hover:opacity-100 hover:bg-black/50 transition"
							}, [createVNode(unref(ChevronLeftIcon), { class: "w-5 h-5" })], 8, ["onClick"]),
							createVNode("button", {
								type: "button",
								"aria-label": "Berikutnya",
								onClick: ($event) => goToSlide((currentSlide.value + 1) % heroSlides.length),
								class: "absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/30 text-white opacity-0 group-hover:opacity-100 hover:bg-black/50 transition"
							}, [createVNode(unref(ChevronRightIcon), { class: "w-5 h-5" })], 8, ["onClick"])
						]), createVNode("div", { class: "flex justify-center gap-2 mt-4" }, [(openBlock(), createBlock(Fragment, null, renderList(heroSlides, (slide, index) => {
							return createVNode("button", {
								key: "dot-" + slide.src,
								type: "button",
								"aria-label": "Slide " + (index + 1),
								onClick: ($event) => goToSlide(index),
								class: ["h-2.5 rounded-full transition-all", currentSlide.value === index ? "w-8 bg-[#c9a96e]" : "w-2.5 bg-white/40 hover:bg-white/70"]
							}, null, 10, ["aria-label", "onClick"]);
						}), 64))])], 40, ["onMouseenter", "onMouseleave"])])])]),
						__props.jadwal_sholat ? (openBlock(), createBlock("section", {
							key: 0,
							class: "max-w-7xl mx-auto px-4 -mt-12 relative z-10"
						}, [createVNode("div", { class: "bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100" }, [createVNode("div", { class: "flex items-center gap-3 mb-6" }, [createVNode(unref(ClockIcon), { class: "w-6 h-6 text-[#0d5c3e]" }), createVNode("h2", { class: "text-xl font-bold text-gray-800" }, "Jadwal Sholat Hari Ini")]), createVNode("div", { class: "grid grid-cols-2 md:grid-cols-5 gap-4" }, [(openBlock(), createBlock(Fragment, null, renderList(sholatTimes, (sholat) => {
							return createVNode("div", {
								key: sholat.key,
								class: "text-center p-4 bg-gradient-to-br from-[#0d5c3e]/5 to-[#0d5c3e]/10 rounded-xl border border-[#0d5c3e]/10"
							}, [
								createVNode("div", { class: "text-2xl mb-2" }, toDisplayString(sholat.icon), 1),
								createVNode("p", { class: "text-sm text-gray-600 font-medium" }, toDisplayString(sholat.name), 1),
								createVNode("p", { class: "text-2xl font-bold text-[#0d5c3e] mt-1" }, toDisplayString(__props.jadwal_sholat[sholat.key]), 1)
							]);
						}), 64))])])])) : createCommentVNode("", true),
						createVNode("section", { class: "max-w-7xl mx-auto px-4 py-16" }, [
							createVNode("div", { class: "text-center mb-10" }, [createVNode("h2", { class: "text-3xl font-bold text-gray-800" }, "Transparansi Keuangan"), createVNode("p", { class: "text-gray-500 mt-2" }, "Laporan " + toDisplayString(__props.finance_highlight.bulan), 1)]),
							createVNode("div", { class: "grid md:grid-cols-2 gap-6 max-w-4xl mx-auto" }, [createVNode("div", { class: "bg-white p-8 rounded-2xl shadow-md border-t-4 border-[#0d5c3e]" }, [createVNode("p", { class: "text-gray-500 text-sm font-medium" }, "Total Pemasukan"), createVNode("p", { class: "text-4xl font-bold text-[#0d5c3e] mt-2" }, toDisplayString(formatRupiah(__props.finance_highlight.total_pemasukan)), 1)]), createVNode("div", { class: "bg-white p-8 rounded-2xl shadow-md border-t-4 border-[#c9a96e]" }, [createVNode("p", { class: "text-gray-500 text-sm font-medium" }, "Total Pengeluaran"), createVNode("p", { class: "text-4xl font-bold text-[#c9a96e] mt-2" }, toDisplayString(formatRupiah(__props.finance_highlight.total_pengeluaran)), 1)])]),
							createVNode("div", { class: "text-center mt-8" }, [createVNode(unref(Link), {
								href: _ctx.route("public.finance"),
								class: "inline-flex items-center gap-2 text-[#0d5c3e] font-semibold hover:underline"
							}, {
								default: withCtx(() => [createTextVNode(" Lihat Laporan Lengkap → ")]),
								_: 1
							}, 8, ["href"])])
						]),
						createVNode("section", { class: "bg-gray-100 py-16" }, [createVNode("div", { class: "max-w-7xl mx-auto px-4" }, [createVNode("div", { class: "flex items-center justify-between mb-8" }, [createVNode("div", { class: "flex items-center gap-3" }, [createVNode(unref(CalendarIcon), { class: "w-6 h-6 text-[#0d5c3e]" }), createVNode("h2", { class: "text-2xl font-bold text-gray-800" }, "Kegiatan Mendatang")]), createVNode(unref(Link), {
							href: _ctx.route("public.schedule.pengajian"),
							class: "text-[#0d5c3e] font-semibold hover:underline text-sm"
						}, {
							default: withCtx(() => [createTextVNode("Lihat Semua →")]),
							_: 1
						}, 8, ["href"])]), __props.upcoming_activities.length ? (openBlock(), createBlock("div", {
							key: 0,
							class: "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
						}, [(openBlock(true), createBlock(Fragment, null, renderList(__props.upcoming_activities, (act) => {
							return openBlock(), createBlock("div", {
								key: act.id,
								class: "bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition border border-gray-100"
							}, [createVNode("div", { class: "h-40 bg-gradient-to-br from-[#0d5c3e] to-[#1a7a52] flex items-center justify-center text-white text-4xl" }), createVNode("div", { class: "p-5" }, [
								createVNode("span", { class: "text-xs text-[#0d5c3e] font-semibold uppercase" }, toDisplayString(act.kategori), 1),
								createVNode("h3", { class: "font-bold text-lg text-gray-800 mt-1" }, toDisplayString(act.nama), 1),
								createVNode("p", { class: "text-sm text-gray-500 mt-2" }, toDisplayString(act.tanggal_mulai), 1),
								createVNode("p", { class: "text-sm text-gray-500 flex items-center gap-1 mt-1" }, [createVNode(unref(MapPinIcon), { class: "w-4 h-4" }), createTextVNode(" " + toDisplayString(act.lokasi), 1)])
							])]);
						}), 128))])) : (openBlock(), createBlock("p", {
							key: 1,
							class: "text-gray-500 text-center py-12"
						}, "Belum ada kegiatan terjadwal"))])]),
						__props.next_jumat ? (openBlock(), createBlock("section", {
							key: 1,
							class: "max-w-7xl mx-auto px-4 py-16"
						}, [createVNode("div", { class: "bg-gradient-to-r from-[#0d5c3e] to-[#1a7a52] rounded-2xl p-8 md:p-12 text-white" }, [
							createVNode("div", { class: "flex items-center gap-2 mb-4" }, [createVNode(unref(MegaphoneIcon), { class: "w-6 h-6" }), createVNode("span", { class: "text-sm font-semibold uppercase tracking-wider" }, "Khatib Jumat Berikutnya")]),
							createVNode("h2", { class: "text-3xl font-bold mb-2" }, toDisplayString(__props.next_jumat.tanggal_jumat), 1),
							createVNode("p", { class: "text-xl opacity-90 mb-6" }, "Tema: " + toDisplayString(__props.next_jumat.tema || "Belum ditentukan"), 1),
							createVNode("div", { class: "grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/20" }, [
								createVNode("div", null, [createVNode("p", { class: "text-sm opacity-75" }, "Khatib"), createVNode("p", { class: "font-bold text-lg" }, toDisplayString(__props.next_jumat.khatib?.nama || "-"), 1)]),
								createVNode("div", null, [createVNode("p", { class: "text-sm opacity-75" }, "Imam"), createVNode("p", { class: "font-bold text-lg" }, toDisplayString(__props.next_jumat.imam?.nama || "-"), 1)]),
								createVNode("div", null, [createVNode("p", { class: "text-sm opacity-75" }, "Muadzin"), createVNode("p", { class: "font-bold text-lg" }, toDisplayString(__props.next_jumat.muadzin?.nama || "-"), 1)])
							])
						])])) : createCommentVNode("", true),
						createVNode("section", { class: "max-w-7xl mx-auto px-4 pb-16" }, [createVNode("div", { class: "flex items-center justify-between mb-8" }, [createVNode("div", { class: "flex items-center gap-3" }, [createVNode(unref(MegaphoneIcon), { class: "w-6 h-6 text-[#0d5c3e]" }), createVNode("h2", { class: "text-2xl font-bold text-gray-800" }, "Pengumuman Terbaru")]), createVNode(unref(Link), {
							href: _ctx.route("public.announcements"),
							class: "text-[#0d5c3e] font-semibold hover:underline text-sm"
						}, {
							default: withCtx(() => [createTextVNode("Lihat Semua →")]),
							_: 1
						}, 8, ["href"])]), createVNode("div", { class: "grid md:grid-cols-3 gap-6" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.announcements, (ann) => {
							return openBlock(), createBlock("div", {
								key: ann.id,
								class: ["bg-white rounded-xl shadow-sm p-6 border-l-4", ann.tipe === "urgent" ? "border-red-500" : "border-[#0d5c3e]"]
							}, [
								ann.tipe === "urgent" ? (openBlock(), createBlock("span", {
									key: 0,
									class: "inline-block px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded mb-2"
								}, "PENTING")) : createCommentVNode("", true),
								createVNode("h3", { class: "font-bold text-lg text-gray-800 mb-2" }, toDisplayString(ann.judul), 1),
								createVNode("p", { class: "text-sm text-gray-600 line-clamp-3" }, toDisplayString(ann.isi), 1),
								createVNode("p", { class: "text-xs text-gray-400 mt-4" }, toDisplayString(ann.published_at), 1)
							], 2);
						}), 128))])])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Home.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Home_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-96a39dab"]]);
//#endregion
export { Home_default as default };
