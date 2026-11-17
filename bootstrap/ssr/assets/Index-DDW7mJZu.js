import { t as _sfc_main$1 } from "./Modal-CLSC5svO.js";
import { t as AdminLayout_default } from "./AdminLayout-JKKJHCcy.js";
import { t as _sfc_main$2 } from "./Pagination-DiptkPBm.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelCheckbox, vModelSelect, vModelText, withCtx, withDirectives, withKeys, withModifiers } from "vue";
import { Head, router, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { MagnifyingGlassIcon, PencilIcon, PlusIcon, TrashIcon } from "@heroicons/vue/24/outline";
//#region resources/js/Pages/Announcements/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: {
		announcements: Object,
		filters: Object
	},
	setup(__props) {
		const props = __props;
		const search = ref(props.filters?.search || "");
		const tipeFilter = ref(props.filters?.tipe || "");
		const modalOpen = ref(false);
		const editMode = ref(false);
		const currentAnnouncement = ref(null);
		const form = useForm({
			judul: "",
			isi: "",
			tipe: "umum",
			is_running_text: false,
			send_whatsapp: false,
			send_email: false,
			gambar: null
		});
		const openEdit = (announcement) => {
			editMode.value = true;
			currentAnnouncement.value = announcement;
			form.judul = announcement.judul;
			form.isi = announcement.isi;
			form.tipe = announcement.tipe;
			form.is_running_text = announcement.is_running_text;
			form.send_whatsapp = announcement.send_whatsapp;
			form.send_email = announcement.send_email;
			modalOpen.value = true;
		};
		const submit = () => {
			if (editMode.value && currentAnnouncement.value) form.put(route("announcements.update", currentAnnouncement.value.id), { onSuccess: () => {
				closeModal();
			} });
			else form.post(route("announcements.store"), { onSuccess: () => {
				closeModal();
			} });
		};
		const closeModal = () => {
			modalOpen.value = false;
			editMode.value = false;
			currentAnnouncement.value = null;
			form.reset();
		};
		const deleteItem = (item) => {
			if (confirm(`Hapus pengumuman "${item.judul}"?`)) router.delete(route("announcements.destroy", item.id));
		};
		const filterAnnouncements = () => {
			router.get(route("announcements.index"), {
				search: search.value,
				tipe: tipeFilter.value
			}, { preserveState: true });
		};
		const tipeBadge = (tipe) => {
			const badges = {
				umum: "bg-blue-100 text-blue-800",
				urgent: "bg-red-100 text-red-800",
				info_sholat: "bg-green-100 text-green-800"
			};
			return `<span class="px-2 py-1 rounded-full text-xs font-medium ${badges[tipe] || badges.umum}">${{
				umum: "Umum",
				urgent: "Urgent",
				info_sholat: "Info Sholat"
			}[tipe] || tipe}</span>`;
		};
		const statusBadge = (status) => {
			const badges = {
				draft: "bg-gray-100 text-gray-800",
				published: "bg-green-100 text-green-800",
				archived: "bg-yellow-100 text-yellow-800"
			};
			return `<span class="px-2 py-1 rounded-full text-xs font-medium ${badges[status] || badges.draft}">${{
				draft: "Draft",
				published: "Published",
				archived: "Archived"
			}[status] || status}</span>`;
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(AdminLayout_default, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "Pengumuman" }, null, _parent, _scopeId));
						_push(`<div class="mb-6 flex justify-between items-center"${_scopeId}><div${_scopeId}><h1 class="text-2xl font-bold text-gray-800"${_scopeId}>Pengumuman</h1><p class="text-gray-500 text-sm"${_scopeId}>Kelola pengumuman dan broadcast ke jamaah</p></div><button class="bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg flex items-center gap-2 transition shadow-md"${_scopeId}>`);
						_push(ssrRenderComponent(unref(PlusIcon), { class: "w-5 h-5" }, null, _parent, _scopeId));
						_push(` Buat Pengumuman </button></div><div class="bg-white rounded-xl shadow-sm p-4 mb-6"${_scopeId}><div class="flex gap-3 flex-wrap"${_scopeId}><div class="flex-1 min-w-[200px] relative"${_scopeId}>`);
						_push(ssrRenderComponent(unref(MagnifyingGlassIcon), { class: "w-5 h-5 absolute left-3 top-2.5 text-gray-400" }, null, _parent, _scopeId));
						_push(`<input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari judul pengumuman..." class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}></div><select class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(tipeFilter.value) ? ssrLooseContain(tipeFilter.value, "") : ssrLooseEqual(tipeFilter.value, "")) ? " selected" : ""}${_scopeId}>Semua Tipe</option><option value="umum"${ssrIncludeBooleanAttr(Array.isArray(tipeFilter.value) ? ssrLooseContain(tipeFilter.value, "umum") : ssrLooseEqual(tipeFilter.value, "umum")) ? " selected" : ""}${_scopeId}>Umum</option><option value="urgent"${ssrIncludeBooleanAttr(Array.isArray(tipeFilter.value) ? ssrLooseContain(tipeFilter.value, "urgent") : ssrLooseEqual(tipeFilter.value, "urgent")) ? " selected" : ""}${_scopeId}>Urgent</option><option value="info_sholat"${ssrIncludeBooleanAttr(Array.isArray(tipeFilter.value) ? ssrLooseContain(tipeFilter.value, "info_sholat") : ssrLooseEqual(tipeFilter.value, "info_sholat")) ? " selected" : ""}${_scopeId}>Info Sholat</option></select><button class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition"${_scopeId}>Filter</button></div></div><div class="bg-white rounded-xl shadow-sm overflow-hidden"${_scopeId}><table class="w-full text-sm"${_scopeId}><thead class="bg-gray-50 text-gray-600 text-xs uppercase"${_scopeId}><tr${_scopeId}><th class="px-6 py-3 text-left"${_scopeId}>Judul</th><th class="px-6 py-3 text-center"${_scopeId}>Tipe</th><th class="px-6 py-3 text-center"${_scopeId}>Status</th><th class="px-6 py-3 text-center"${_scopeId}>Running Text</th><th class="px-6 py-3 text-left"${_scopeId}>Dibuat Oleh</th><th class="px-6 py-3 text-center"${_scopeId}>Tanggal</th><th class="px-6 py-3 text-center"${_scopeId}>Aksi</th></tr></thead><tbody class="divide-y"${_scopeId}><!--[-->`);
						ssrRenderList(__props.announcements.data, (item) => {
							_push(`<tr class="hover:bg-gray-50"${_scopeId}><td class="px-6 py-4"${_scopeId}><div class="font-medium"${_scopeId}>${ssrInterpolate(item.judul)}</div><div class="text-xs text-gray-500 truncate max-w-xs"${_scopeId}>${ssrInterpolate(item.isi.substring(0, 80))}...</div></td><td class="px-6 py-4 text-center"${_scopeId}>${tipeBadge(item.tipe) ?? ""}</td><td class="px-6 py-4 text-center"${_scopeId}>${statusBadge(item.status) ?? ""}</td><td class="px-6 py-4 text-center"${_scopeId}>`);
							if (item.is_running_text) _push(`<span class="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs"${_scopeId}>✓</span>`);
							else _push(`<span class="text-gray-400"${_scopeId}>-</span>`);
							_push(`</td><td class="px-6 py-4"${_scopeId}>${ssrInterpolate(item.creator?.name || "-")}</td><td class="px-6 py-4 text-center text-xs"${_scopeId}><div${_scopeId}>${ssrInterpolate(new Date(item.created_at).toLocaleDateString("id-ID"))}</div></td><td class="px-6 py-4 text-center"${_scopeId}><button class="text-gray-400 hover:text-primary mx-1" title="Edit"${_scopeId}>`);
							_push(ssrRenderComponent(unref(PencilIcon), { class: "w-5 h-5 inline" }, null, _parent, _scopeId));
							_push(`</button><button class="text-gray-400 hover:text-red-600 mx-1" title="Hapus"${_scopeId}>`);
							_push(ssrRenderComponent(unref(TrashIcon), { class: "w-5 h-5 inline" }, null, _parent, _scopeId));
							_push(`</button></td></tr>`);
						});
						_push(`<!--]-->`);
						if (!__props.announcements.data.length) _push(`<tr${_scopeId}><td colspan="7" class="px-6 py-12 text-center text-gray-500"${_scopeId}>Tidak ada data pengumuman</td></tr>`);
						else _push(`<!---->`);
						_push(`</tbody></table><div class="px-6 py-4 border-t"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$2, { links: __props.announcements.links }, null, _parent, _scopeId));
						_push(`</div></div>`);
						_push(ssrRenderComponent(_sfc_main$1, {
							show: modalOpen.value,
							title: editMode.value ? "Edit Pengumuman" : "Buat Pengumuman Baru",
							onClose: closeModal
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<form class="space-y-4 max-h-[70vh] overflow-y-auto pr-2"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Judul <span class="text-red-500"${_scopeId}>*</span></label><input${ssrRenderAttr("value", unref(form).judul)} type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Contoh: Pengumuman Sholat Ied"${_scopeId}>`);
									if (unref(form).errors.judul) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.judul)}</span>`);
									else _push(`<!---->`);
									_push(`</div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Isi Pengumuman <span class="text-red-500"${_scopeId}>*</span></label><textarea rows="5" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Tulis isi pengumuman..."${_scopeId}>${ssrInterpolate(unref(form).isi)}</textarea>`);
									if (unref(form).errors.isi) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.isi)}</span>`);
									else _push(`<!---->`);
									_push(`</div><div class="grid grid-cols-2 gap-4"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Tipe <span class="text-red-500"${_scopeId}>*</span></label><select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}><option value="umum"${ssrIncludeBooleanAttr(Array.isArray(unref(form).tipe) ? ssrLooseContain(unref(form).tipe, "umum") : ssrLooseEqual(unref(form).tipe, "umum")) ? " selected" : ""}${_scopeId}>Umum</option><option value="urgent"${ssrIncludeBooleanAttr(Array.isArray(unref(form).tipe) ? ssrLooseContain(unref(form).tipe, "urgent") : ssrLooseEqual(unref(form).tipe, "urgent")) ? " selected" : ""}${_scopeId}>Urgent / Penting</option><option value="info_sholat"${ssrIncludeBooleanAttr(Array.isArray(unref(form).tipe) ? ssrLooseContain(unref(form).tipe, "info_sholat") : ssrLooseEqual(unref(form).tipe, "info_sholat")) ? " selected" : ""}${_scopeId}>Info Sholat</option></select>`);
									if (unref(form).errors.tipe) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.tipe)}</span>`);
									else _push(`<!---->`);
									_push(`</div>`);
									if (!editMode.value) {
										_push(`<div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Gambar (Opsional)</label><input type="file" accept="image/*" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}>`);
										if (unref(form).errors.gambar) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.gambar)}</span>`);
										else _push(`<!---->`);
										_push(`</div>`);
									} else _push(`<!---->`);
									_push(`</div><div class="border-t pt-4"${_scopeId}><h4 class="text-sm font-semibold text-gray-700 mb-3"${_scopeId}>Opsi Broadcast</h4><div class="space-y-2"${_scopeId}><label class="flex items-center gap-2"${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(unref(form).is_running_text) ? ssrLooseContain(unref(form).is_running_text, null) : unref(form).is_running_text) ? " checked" : ""} type="checkbox" class="rounded border-gray-300 text-primary focus:ring-primary"${_scopeId}><span class="text-sm text-gray-700"${_scopeId}>Tampilkan sebagai Running Text (TV Masjid)</span></label><label class="flex items-center gap-2"${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(unref(form).send_whatsapp) ? ssrLooseContain(unref(form).send_whatsapp, null) : unref(form).send_whatsapp) ? " checked" : ""} type="checkbox" class="rounded border-gray-300 text-primary focus:ring-primary"${_scopeId}><span class="text-sm text-gray-700"${_scopeId}>Kirim via WhatsApp Broadcast</span></label><label class="flex items-center gap-2"${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(unref(form).send_email) ? ssrLooseContain(unref(form).send_email, null) : unref(form).send_email) ? " checked" : ""} type="checkbox" class="rounded border-gray-300 text-primary focus:ring-primary"${_scopeId}><span class="text-sm text-gray-700"${_scopeId}>Kirim via Email</span></label></div></div><div class="flex justify-end gap-3 pt-4 border-t"${_scopeId}><button type="button" class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"${_scopeId}>Batal</button><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="px-4 py-2 bg-primary text-white rounded-lg disabled:opacity-50"${_scopeId}>${ssrInterpolate(unref(form).processing ? "Menyimpan..." : "Simpan")}</button></div></form>`);
								} else return [createVNode("form", {
									onSubmit: withModifiers(submit, ["prevent"]),
									class: "space-y-4 max-h-[70vh] overflow-y-auto pr-2"
								}, [
									createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Judul "), createVNode("span", { class: "text-red-500" }, "*")]),
										withDirectives(createVNode("input", {
											"onUpdate:modelValue": ($event) => unref(form).judul = $event,
											type: "text",
											class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
											placeholder: "Contoh: Pengumuman Sholat Ied"
										}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).judul]]),
										unref(form).errors.judul ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(form).errors.judul), 1)) : createCommentVNode("", true)
									]),
									createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Isi Pengumuman "), createVNode("span", { class: "text-red-500" }, "*")]),
										withDirectives(createVNode("textarea", {
											"onUpdate:modelValue": ($event) => unref(form).isi = $event,
											rows: "5",
											class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
											placeholder: "Tulis isi pengumuman..."
										}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).isi]]),
										unref(form).errors.isi ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(form).errors.isi), 1)) : createCommentVNode("", true)
									]),
									createVNode("div", { class: "grid grid-cols-2 gap-4" }, [createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Tipe "), createVNode("span", { class: "text-red-500" }, "*")]),
										withDirectives(createVNode("select", {
											"onUpdate:modelValue": ($event) => unref(form).tipe = $event,
											class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
										}, [
											createVNode("option", { value: "umum" }, "Umum"),
											createVNode("option", { value: "urgent" }, "Urgent / Penting"),
											createVNode("option", { value: "info_sholat" }, "Info Sholat")
										], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).tipe]]),
										unref(form).errors.tipe ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(form).errors.tipe), 1)) : createCommentVNode("", true)
									]), !editMode.value ? (openBlock(), createBlock("div", { key: 0 }, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Gambar (Opsional)"),
										createVNode("input", {
											type: "file",
											onInput: ($event) => unref(form).gambar = $event.target.files[0],
											accept: "image/*",
											class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
										}, null, 40, ["onInput"]),
										unref(form).errors.gambar ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(form).errors.gambar), 1)) : createCommentVNode("", true)
									])) : createCommentVNode("", true)]),
									createVNode("div", { class: "border-t pt-4" }, [createVNode("h4", { class: "text-sm font-semibold text-gray-700 mb-3" }, "Opsi Broadcast"), createVNode("div", { class: "space-y-2" }, [
										createVNode("label", { class: "flex items-center gap-2" }, [withDirectives(createVNode("input", {
											"onUpdate:modelValue": ($event) => unref(form).is_running_text = $event,
											type: "checkbox",
											class: "rounded border-gray-300 text-primary focus:ring-primary"
										}, null, 8, ["onUpdate:modelValue"]), [[vModelCheckbox, unref(form).is_running_text]]), createVNode("span", { class: "text-sm text-gray-700" }, "Tampilkan sebagai Running Text (TV Masjid)")]),
										createVNode("label", { class: "flex items-center gap-2" }, [withDirectives(createVNode("input", {
											"onUpdate:modelValue": ($event) => unref(form).send_whatsapp = $event,
											type: "checkbox",
											class: "rounded border-gray-300 text-primary focus:ring-primary"
										}, null, 8, ["onUpdate:modelValue"]), [[vModelCheckbox, unref(form).send_whatsapp]]), createVNode("span", { class: "text-sm text-gray-700" }, "Kirim via WhatsApp Broadcast")]),
										createVNode("label", { class: "flex items-center gap-2" }, [withDirectives(createVNode("input", {
											"onUpdate:modelValue": ($event) => unref(form).send_email = $event,
											type: "checkbox",
											class: "rounded border-gray-300 text-primary focus:ring-primary"
										}, null, 8, ["onUpdate:modelValue"]), [[vModelCheckbox, unref(form).send_email]]), createVNode("span", { class: "text-sm text-gray-700" }, "Kirim via Email")])
									])]),
									createVNode("div", { class: "flex justify-end gap-3 pt-4 border-t" }, [createVNode("button", {
										type: "button",
										onClick: closeModal,
										class: "px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
									}, "Batal"), createVNode("button", {
										type: "submit",
										disabled: unref(form).processing,
										class: "px-4 py-2 bg-primary text-white rounded-lg disabled:opacity-50"
									}, toDisplayString(unref(form).processing ? "Menyimpan..." : "Simpan"), 9, ["disabled"])])
								], 32)];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [
						createVNode(unref(Head), { title: "Pengumuman" }),
						createVNode("div", { class: "mb-6 flex justify-between items-center" }, [createVNode("div", null, [createVNode("h1", { class: "text-2xl font-bold text-gray-800" }, "Pengumuman"), createVNode("p", { class: "text-gray-500 text-sm" }, "Kelola pengumuman dan broadcast ke jamaah")]), createVNode("button", {
							onClick: ($event) => {
								modalOpen.value = true;
								editMode.value = false;
								unref(form).reset();
							},
							class: "bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg flex items-center gap-2 transition shadow-md"
						}, [createVNode(unref(PlusIcon), { class: "w-5 h-5" }), createTextVNode(" Buat Pengumuman ")], 8, ["onClick"])]),
						createVNode("div", { class: "bg-white rounded-xl shadow-sm p-4 mb-6" }, [createVNode("div", { class: "flex gap-3 flex-wrap" }, [
							createVNode("div", { class: "flex-1 min-w-[200px] relative" }, [createVNode(unref(MagnifyingGlassIcon), { class: "w-5 h-5 absolute left-3 top-2.5 text-gray-400" }), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => search.value = $event,
								onKeyup: withKeys(filterAnnouncements, ["enter"]),
								type: "text",
								placeholder: "Cari judul pengumuman...",
								class: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
							}, null, 40, ["onUpdate:modelValue"]), [[vModelText, search.value]])]),
							withDirectives(createVNode("select", {
								"onUpdate:modelValue": ($event) => tipeFilter.value = $event,
								onChange: filterAnnouncements,
								class: "px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
							}, [
								createVNode("option", { value: "" }, "Semua Tipe"),
								createVNode("option", { value: "umum" }, "Umum"),
								createVNode("option", { value: "urgent" }, "Urgent"),
								createVNode("option", { value: "info_sholat" }, "Info Sholat")
							], 40, ["onUpdate:modelValue"]), [[vModelSelect, tipeFilter.value]]),
							createVNode("button", {
								onClick: filterAnnouncements,
								class: "px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition"
							}, "Filter")
						])]),
						createVNode("div", { class: "bg-white rounded-xl shadow-sm overflow-hidden" }, [createVNode("table", { class: "w-full text-sm" }, [createVNode("thead", { class: "bg-gray-50 text-gray-600 text-xs uppercase" }, [createVNode("tr", null, [
							createVNode("th", { class: "px-6 py-3 text-left" }, "Judul"),
							createVNode("th", { class: "px-6 py-3 text-center" }, "Tipe"),
							createVNode("th", { class: "px-6 py-3 text-center" }, "Status"),
							createVNode("th", { class: "px-6 py-3 text-center" }, "Running Text"),
							createVNode("th", { class: "px-6 py-3 text-left" }, "Dibuat Oleh"),
							createVNode("th", { class: "px-6 py-3 text-center" }, "Tanggal"),
							createVNode("th", { class: "px-6 py-3 text-center" }, "Aksi")
						])]), createVNode("tbody", { class: "divide-y" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.announcements.data, (item) => {
							return openBlock(), createBlock("tr", {
								key: item.id,
								class: "hover:bg-gray-50"
							}, [
								createVNode("td", { class: "px-6 py-4" }, [createVNode("div", { class: "font-medium" }, toDisplayString(item.judul), 1), createVNode("div", { class: "text-xs text-gray-500 truncate max-w-xs" }, toDisplayString(item.isi.substring(0, 80)) + "...", 1)]),
								createVNode("td", {
									class: "px-6 py-4 text-center",
									innerHTML: tipeBadge(item.tipe)
								}, null, 8, ["innerHTML"]),
								createVNode("td", {
									class: "px-6 py-4 text-center",
									innerHTML: statusBadge(item.status)
								}, null, 8, ["innerHTML"]),
								createVNode("td", { class: "px-6 py-4 text-center" }, [item.is_running_text ? (openBlock(), createBlock("span", {
									key: 0,
									class: "px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs"
								}, "✓")) : (openBlock(), createBlock("span", {
									key: 1,
									class: "text-gray-400"
								}, "-"))]),
								createVNode("td", { class: "px-6 py-4" }, toDisplayString(item.creator?.name || "-"), 1),
								createVNode("td", { class: "px-6 py-4 text-center text-xs" }, [createVNode("div", null, toDisplayString(new Date(item.created_at).toLocaleDateString("id-ID")), 1)]),
								createVNode("td", { class: "px-6 py-4 text-center" }, [createVNode("button", {
									onClick: ($event) => openEdit(item),
									class: "text-gray-400 hover:text-primary mx-1",
									title: "Edit"
								}, [createVNode(unref(PencilIcon), { class: "w-5 h-5 inline" })], 8, ["onClick"]), createVNode("button", {
									onClick: ($event) => deleteItem(item),
									class: "text-gray-400 hover:text-red-600 mx-1",
									title: "Hapus"
								}, [createVNode(unref(TrashIcon), { class: "w-5 h-5 inline" })], 8, ["onClick"])])
							]);
						}), 128)), !__props.announcements.data.length ? (openBlock(), createBlock("tr", { key: 0 }, [createVNode("td", {
							colspan: "7",
							class: "px-6 py-12 text-center text-gray-500"
						}, "Tidak ada data pengumuman")])) : createCommentVNode("", true)])]), createVNode("div", { class: "px-6 py-4 border-t" }, [createVNode(_sfc_main$2, { links: __props.announcements.links }, null, 8, ["links"])])]),
						createVNode(_sfc_main$1, {
							show: modalOpen.value,
							title: editMode.value ? "Edit Pengumuman" : "Buat Pengumuman Baru",
							onClose: closeModal
						}, {
							default: withCtx(() => [createVNode("form", {
								onSubmit: withModifiers(submit, ["prevent"]),
								class: "space-y-4 max-h-[70vh] overflow-y-auto pr-2"
							}, [
								createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Judul "), createVNode("span", { class: "text-red-500" }, "*")]),
									withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).judul = $event,
										type: "text",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
										placeholder: "Contoh: Pengumuman Sholat Ied"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).judul]]),
									unref(form).errors.judul ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(form).errors.judul), 1)) : createCommentVNode("", true)
								]),
								createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Isi Pengumuman "), createVNode("span", { class: "text-red-500" }, "*")]),
									withDirectives(createVNode("textarea", {
										"onUpdate:modelValue": ($event) => unref(form).isi = $event,
										rows: "5",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
										placeholder: "Tulis isi pengumuman..."
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).isi]]),
									unref(form).errors.isi ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(form).errors.isi), 1)) : createCommentVNode("", true)
								]),
								createVNode("div", { class: "grid grid-cols-2 gap-4" }, [createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Tipe "), createVNode("span", { class: "text-red-500" }, "*")]),
									withDirectives(createVNode("select", {
										"onUpdate:modelValue": ($event) => unref(form).tipe = $event,
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, [
										createVNode("option", { value: "umum" }, "Umum"),
										createVNode("option", { value: "urgent" }, "Urgent / Penting"),
										createVNode("option", { value: "info_sholat" }, "Info Sholat")
									], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).tipe]]),
									unref(form).errors.tipe ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(form).errors.tipe), 1)) : createCommentVNode("", true)
								]), !editMode.value ? (openBlock(), createBlock("div", { key: 0 }, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Gambar (Opsional)"),
									createVNode("input", {
										type: "file",
										onInput: ($event) => unref(form).gambar = $event.target.files[0],
										accept: "image/*",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, null, 40, ["onInput"]),
									unref(form).errors.gambar ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(form).errors.gambar), 1)) : createCommentVNode("", true)
								])) : createCommentVNode("", true)]),
								createVNode("div", { class: "border-t pt-4" }, [createVNode("h4", { class: "text-sm font-semibold text-gray-700 mb-3" }, "Opsi Broadcast"), createVNode("div", { class: "space-y-2" }, [
									createVNode("label", { class: "flex items-center gap-2" }, [withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).is_running_text = $event,
										type: "checkbox",
										class: "rounded border-gray-300 text-primary focus:ring-primary"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelCheckbox, unref(form).is_running_text]]), createVNode("span", { class: "text-sm text-gray-700" }, "Tampilkan sebagai Running Text (TV Masjid)")]),
									createVNode("label", { class: "flex items-center gap-2" }, [withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).send_whatsapp = $event,
										type: "checkbox",
										class: "rounded border-gray-300 text-primary focus:ring-primary"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelCheckbox, unref(form).send_whatsapp]]), createVNode("span", { class: "text-sm text-gray-700" }, "Kirim via WhatsApp Broadcast")]),
									createVNode("label", { class: "flex items-center gap-2" }, [withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).send_email = $event,
										type: "checkbox",
										class: "rounded border-gray-300 text-primary focus:ring-primary"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelCheckbox, unref(form).send_email]]), createVNode("span", { class: "text-sm text-gray-700" }, "Kirim via Email")])
								])]),
								createVNode("div", { class: "flex justify-end gap-3 pt-4 border-t" }, [createVNode("button", {
									type: "button",
									onClick: closeModal,
									class: "px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
								}, "Batal"), createVNode("button", {
									type: "submit",
									disabled: unref(form).processing,
									class: "px-4 py-2 bg-primary text-white rounded-lg disabled:opacity-50"
								}, toDisplayString(unref(form).processing ? "Menyimpan..." : "Simpan"), 9, ["disabled"])])
							], 32)]),
							_: 1
						}, 8, ["show", "title"])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Announcements/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
