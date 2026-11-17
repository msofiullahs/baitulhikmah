import { t as _sfc_main$1 } from "./Modal-CLSC5svO.js";
import { t as AdminLayout_default } from "./AdminLayout-JKKJHCcy.js";
import { t as _sfc_main$2 } from "./Pagination-DiptkPBm.js";
import { Fragment, computed, createBlock, createCommentVNode, createTextVNode, createVNode, mergeProps, openBlock, ref, renderList, toDisplayString, useSSRContext, vModelCheckbox, vModelSelect, vModelText, withCtx, withDirectives, withModifiers } from "vue";
import { router } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
//#region resources/js/Pages/Ziswaf/Mustahiq/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: { mustahiqs: Object },
	setup(__props) {
		const props = __props;
		const showModal = ref(false);
		const search = ref("");
		const filterCategory = ref("");
		const isEditing = ref(false);
		const editingId = ref(null);
		const form = ref({
			nama: "",
			kategori: "",
			alamat: "",
			no_hp: "",
			catatan: "",
			is_active: true
		});
		const filteredMustahiqs = computed(() => {
			let data = props.mustahiqs.data || [];
			if (search.value) data = data.filter((m) => m.nama.toLowerCase().includes(search.value.toLowerCase()));
			if (filterCategory.value) data = data.filter((m) => m.kategori === filterCategory.value);
			return data;
		});
		const countByCategory = (category) => {
			return (props.mustahiqs.data || []).filter((m) => m.kategori === category).length;
		};
		const resetForm = () => {
			form.value = {
				nama: "",
				kategori: "",
				alamat: "",
				no_hp: "",
				catatan: "",
				is_active: true
			};
			isEditing.value = false;
			editingId.value = null;
		};
		const submitForm = () => {
			if (isEditing.value) router.put(route("mustahiq.update", editingId.value), form.value, { onSuccess: () => {
				showModal.value = false;
				resetForm();
			} });
			else router.post(route("mustahiq.store"), form.value, { onSuccess: () => {
				showModal.value = false;
				resetForm();
			} });
		};
		const editMustahiq = (mustahiq) => {
			form.value = {
				nama: mustahiq.nama,
				kategori: mustahiq.kategori,
				alamat: mustahiq.alamat,
				no_hp: mustahiq.no_hp || "",
				catatan: mustahiq.catatan || "",
				is_active: mustahiq.is_active
			};
			isEditing.value = true;
			editingId.value = mustahiq.id;
			showModal.value = true;
		};
		const deleteMustahiq = (id) => {
			if (confirm("Apakah Anda yakin ingin menghapus mustahik ini?")) router.delete(route("mustahiq.destroy", id));
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(AdminLayout_default, mergeProps({ title: "Mustahik ZISWAF" }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="space-y-6"${_scopeId}><div class="flex justify-between items-center"${_scopeId}><div class="flex items-center gap-4"${_scopeId}><a${ssrRenderAttr("href", _ctx.route("ziswaf.donations.index"))} class="text-gray-500 hover:text-primary transition flex items-center gap-1"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"${_scopeId}></path></svg> Kembali </a><h1 class="text-2xl font-bold text-gray-900"${_scopeId}>Data Mustahik (Penerima ZISWAF)</h1></div><button class="btn-primary"${_scopeId}><i class="fas fa-plus mr-2"${_scopeId}></i>Tambah Mustahik </button></div><div class="grid grid-cols-1 md:grid-cols-4 gap-4"${_scopeId}><div class="bg-white rounded-lg shadow p-4"${_scopeId}><div class="text-sm text-gray-500"${_scopeId}>Total Mustahik</div><div class="text-2xl font-bold text-blue-600"${_scopeId}>${ssrInterpolate(__props.mustahiqs.total)}</div></div><div class="bg-white rounded-lg shadow p-4"${_scopeId}><div class="text-sm text-gray-500"${_scopeId}>Fakir</div><div class="text-2xl font-bold text-red-600"${_scopeId}>${ssrInterpolate(countByCategory("Fakir"))}</div></div><div class="bg-white rounded-lg shadow p-4"${_scopeId}><div class="text-sm text-gray-500"${_scopeId}>Miskin</div><div class="text-2xl font-bold text-orange-600"${_scopeId}>${ssrInterpolate(countByCategory("Miskin"))}</div></div><div class="bg-white rounded-lg shadow p-4"${_scopeId}><div class="text-sm text-gray-500"${_scopeId}>Asnaf Lainnya</div><div class="text-2xl font-bold text-green-600"${_scopeId}>${ssrInterpolate(__props.mustahiqs.total - countByCategory("Fakir") - countByCategory("Miskin"))}</div></div></div><div class="bg-white rounded-lg shadow p-4"${_scopeId}><div class="flex gap-4"${_scopeId}><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari nama mustahik..." class="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"${_scopeId}><select class="px-4 py-2 border rounded-lg"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(filterCategory.value) ? ssrLooseContain(filterCategory.value, "") : ssrLooseEqual(filterCategory.value, "")) ? " selected" : ""}${_scopeId}>Semua Kategori</option><option value="Fakir"${ssrIncludeBooleanAttr(Array.isArray(filterCategory.value) ? ssrLooseContain(filterCategory.value, "Fakir") : ssrLooseEqual(filterCategory.value, "Fakir")) ? " selected" : ""}${_scopeId}>Fakir</option><option value="Miskin"${ssrIncludeBooleanAttr(Array.isArray(filterCategory.value) ? ssrLooseContain(filterCategory.value, "Miskin") : ssrLooseEqual(filterCategory.value, "Miskin")) ? " selected" : ""}${_scopeId}>Miskin</option><option value="Amil"${ssrIncludeBooleanAttr(Array.isArray(filterCategory.value) ? ssrLooseContain(filterCategory.value, "Amil") : ssrLooseEqual(filterCategory.value, "Amil")) ? " selected" : ""}${_scopeId}>Amil</option><option value="Muallaf"${ssrIncludeBooleanAttr(Array.isArray(filterCategory.value) ? ssrLooseContain(filterCategory.value, "Muallaf") : ssrLooseEqual(filterCategory.value, "Muallaf")) ? " selected" : ""}${_scopeId}>Muallaf</option><option value="Riqab"${ssrIncludeBooleanAttr(Array.isArray(filterCategory.value) ? ssrLooseContain(filterCategory.value, "Riqab") : ssrLooseEqual(filterCategory.value, "Riqab")) ? " selected" : ""}${_scopeId}>Riqab (Budak)</option><option value="Gharimin"${ssrIncludeBooleanAttr(Array.isArray(filterCategory.value) ? ssrLooseContain(filterCategory.value, "Gharimin") : ssrLooseEqual(filterCategory.value, "Gharimin")) ? " selected" : ""}${_scopeId}>Gharimin (Berhutang)</option><option value="Sabilillah"${ssrIncludeBooleanAttr(Array.isArray(filterCategory.value) ? ssrLooseContain(filterCategory.value, "Sabilillah") : ssrLooseEqual(filterCategory.value, "Sabilillah")) ? " selected" : ""}${_scopeId}>Sabilillah</option><option value="Ibnu Sabil"${ssrIncludeBooleanAttr(Array.isArray(filterCategory.value) ? ssrLooseContain(filterCategory.value, "Ibnu Sabil") : ssrLooseEqual(filterCategory.value, "Ibnu Sabil")) ? " selected" : ""}${_scopeId}>Ibnu Sabil</option></select></div></div><div class="bg-white rounded-lg shadow overflow-hidden"${_scopeId}><table class="min-w-full divide-y divide-gray-200"${_scopeId}><thead class="bg-gray-50"${_scopeId}><tr${_scopeId}><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"${_scopeId}>Nama</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"${_scopeId}>Kategori (Asnaf)</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"${_scopeId}>Alamat</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"${_scopeId}>No. HP</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"${_scopeId}>Status</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"${_scopeId}>Aksi</th></tr></thead><tbody class="bg-white divide-y divide-gray-200"${_scopeId}><!--[-->`);
						ssrRenderList(filteredMustahiqs.value, (mustahiq) => {
							_push(`<tr${_scopeId}><td class="px-6 py-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(mustahiq.nama)}</td><td class="px-6 py-4 whitespace-nowrap"${_scopeId}><span class="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800"${_scopeId}>${ssrInterpolate(mustahiq.kategori)}</span></td><td class="px-6 py-4 text-sm text-gray-500"${_scopeId}>${ssrInterpolate(mustahiq.alamat)}</td><td class="px-6 py-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(mustahiq.no_hp || "-")}</td><td class="px-6 py-4 whitespace-nowrap"${_scopeId}><span class="${ssrRenderClass([mustahiq.is_active ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800", "px-2 py-1 text-xs rounded-full"])}"${_scopeId}>${ssrInterpolate(mustahiq.is_active ? "Aktif" : "Nonaktif")}</span></td><td class="px-6 py-4 whitespace-nowrap text-sm font-medium"${_scopeId}><button class="text-blue-600 hover:text-blue-900 mr-3"${_scopeId}>Edit</button><button class="text-red-600 hover:text-red-900"${_scopeId}>Hapus</button></td></tr>`);
						});
						_push(`<!--]--></tbody></table></div>`);
						_push(ssrRenderComponent(_sfc_main$2, { links: __props.mustahiqs.links }, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$1, {
							show: showModal.value,
							onClose: ($event) => showModal.value = false,
							"max-width": "lg"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<form class="p-6 space-y-4"${_scopeId}><h2 class="text-xl font-bold"${_scopeId}>${ssrInterpolate(isEditing.value ? "Edit" : "Tambah")} Mustahik</h2><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Nama Lengkap</label><input${ssrRenderAttr("value", form.value.nama)} type="text" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Kategori (Asnaf)</label><select required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(form.value.kategori) ? ssrLooseContain(form.value.kategori, "") : ssrLooseEqual(form.value.kategori, "")) ? " selected" : ""}${_scopeId}>Pilih Kategori</option><option value="Fakir"${ssrIncludeBooleanAttr(Array.isArray(form.value.kategori) ? ssrLooseContain(form.value.kategori, "Fakir") : ssrLooseEqual(form.value.kategori, "Fakir")) ? " selected" : ""}${_scopeId}>Fakir - Tidak punya harta &amp; tenaga</option><option value="Miskin"${ssrIncludeBooleanAttr(Array.isArray(form.value.kategori) ? ssrLooseContain(form.value.kategori, "Miskin") : ssrLooseEqual(form.value.kategori, "Miskin")) ? " selected" : ""}${_scopeId}>Miskin - Punya sedikit harta</option><option value="Amil"${ssrIncludeBooleanAttr(Array.isArray(form.value.kategori) ? ssrLooseContain(form.value.kategori, "Amil") : ssrLooseEqual(form.value.kategori, "Amil")) ? " selected" : ""}${_scopeId}>Amil - Pengelola ZISWAF</option><option value="Muallaf"${ssrIncludeBooleanAttr(Array.isArray(form.value.kategori) ? ssrLooseContain(form.value.kategori, "Muallaf") : ssrLooseEqual(form.value.kategori, "Muallaf")) ? " selected" : ""}${_scopeId}>Muallaf - Baru masuk Islam</option><option value="Riqab"${ssrIncludeBooleanAttr(Array.isArray(form.value.kategori) ? ssrLooseContain(form.value.kategori, "Riqab") : ssrLooseEqual(form.value.kategori, "Riqab")) ? " selected" : ""}${_scopeId}>Riqab - Budak/Hamba Sahaya</option><option value="Gharimin"${ssrIncludeBooleanAttr(Array.isArray(form.value.kategori) ? ssrLooseContain(form.value.kategori, "Gharimin") : ssrLooseEqual(form.value.kategori, "Gharimin")) ? " selected" : ""}${_scopeId}>Gharimin - Orang Berhutang</option><option value="Sabilillah"${ssrIncludeBooleanAttr(Array.isArray(form.value.kategori) ? ssrLooseContain(form.value.kategori, "Sabilillah") : ssrLooseEqual(form.value.kategori, "Sabilillah")) ? " selected" : ""}${_scopeId}>Sabilillah - Pejuang di Jalan Allah</option><option value="Ibnu Sabil"${ssrIncludeBooleanAttr(Array.isArray(form.value.kategori) ? ssrLooseContain(form.value.kategori, "Ibnu Sabil") : ssrLooseEqual(form.value.kategori, "Ibnu Sabil")) ? " selected" : ""}${_scopeId}>Ibnu Sabil - Musafir Kehabisan Bekal</option></select></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Alamat</label><textarea rows="3" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}>${ssrInterpolate(form.value.alamat)}</textarea></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>No. HP</label><input${ssrRenderAttr("value", form.value.no_hp)} type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Catatan/Kondisi Khusus</label><textarea rows="2" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}>${ssrInterpolate(form.value.catatan)}</textarea></div>`);
									if (isEditing.value) _push(`<div${_scopeId}><label class="flex items-center"${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(form.value.is_active) ? ssrLooseContain(form.value.is_active, null) : form.value.is_active) ? " checked" : ""} type="checkbox" class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}><span class="ml-2 text-sm text-gray-700"${_scopeId}>Aktif</span></label></div>`);
									else _push(`<!---->`);
									_push(`<div class="flex justify-end gap-3 pt-4"${_scopeId}><button type="button" class="btn-secondary"${_scopeId}>Batal</button><button type="submit" class="btn-primary"${_scopeId}>${ssrInterpolate(isEditing.value ? "Update" : "Simpan")}</button></div></form>`);
								} else return [createVNode("form", {
									onSubmit: withModifiers(submitForm, ["prevent"]),
									class: "p-6 space-y-4"
								}, [
									createVNode("h2", { class: "text-xl font-bold" }, toDisplayString(isEditing.value ? "Edit" : "Tambah") + " Mustahik", 1),
									createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Nama Lengkap"), withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => form.value.nama = $event,
										type: "text",
										required: "",
										class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.nama]])]),
									createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Kategori (Asnaf)"), withDirectives(createVNode("select", {
										"onUpdate:modelValue": ($event) => form.value.kategori = $event,
										required: "",
										class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
									}, [
										createVNode("option", { value: "" }, "Pilih Kategori"),
										createVNode("option", { value: "Fakir" }, "Fakir - Tidak punya harta & tenaga"),
										createVNode("option", { value: "Miskin" }, "Miskin - Punya sedikit harta"),
										createVNode("option", { value: "Amil" }, "Amil - Pengelola ZISWAF"),
										createVNode("option", { value: "Muallaf" }, "Muallaf - Baru masuk Islam"),
										createVNode("option", { value: "Riqab" }, "Riqab - Budak/Hamba Sahaya"),
										createVNode("option", { value: "Gharimin" }, "Gharimin - Orang Berhutang"),
										createVNode("option", { value: "Sabilillah" }, "Sabilillah - Pejuang di Jalan Allah"),
										createVNode("option", { value: "Ibnu Sabil" }, "Ibnu Sabil - Musafir Kehabisan Bekal")
									], 8, ["onUpdate:modelValue"]), [[vModelSelect, form.value.kategori]])]),
									createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Alamat"), withDirectives(createVNode("textarea", {
										"onUpdate:modelValue": ($event) => form.value.alamat = $event,
										rows: "3",
										required: "",
										class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.alamat]])]),
									createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "No. HP"), withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => form.value.no_hp = $event,
										type: "text",
										class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.no_hp]])]),
									createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Catatan/Kondisi Khusus"), withDirectives(createVNode("textarea", {
										"onUpdate:modelValue": ($event) => form.value.catatan = $event,
										rows: "2",
										class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.catatan]])]),
									isEditing.value ? (openBlock(), createBlock("div", { key: 0 }, [createVNode("label", { class: "flex items-center" }, [withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => form.value.is_active = $event,
										type: "checkbox",
										class: "rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelCheckbox, form.value.is_active]]), createVNode("span", { class: "ml-2 text-sm text-gray-700" }, "Aktif")])])) : createCommentVNode("", true),
									createVNode("div", { class: "flex justify-end gap-3 pt-4" }, [createVNode("button", {
										type: "button",
										onClick: ($event) => showModal.value = false,
										class: "btn-secondary"
									}, "Batal", 8, ["onClick"]), createVNode("button", {
										type: "submit",
										class: "btn-primary"
									}, toDisplayString(isEditing.value ? "Update" : "Simpan"), 1)])
								], 32)];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div>`);
					} else return [createVNode("div", { class: "space-y-6" }, [
						createVNode("div", { class: "flex justify-between items-center" }, [createVNode("div", { class: "flex items-center gap-4" }, [createVNode("a", {
							href: _ctx.route("ziswaf.donations.index"),
							class: "text-gray-500 hover:text-primary transition flex items-center gap-1"
						}, [(openBlock(), createBlock("svg", {
							xmlns: "http://www.w3.org/2000/svg",
							class: "w-5 h-5",
							fill: "none",
							viewBox: "0 0 24 24",
							stroke: "currentColor"
						}, [createVNode("path", {
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							"stroke-width": "2",
							d: "M10 19l-7-7m0 0l7-7m-7 7h18"
						})])), createTextVNode(" Kembali ")], 8, ["href"]), createVNode("h1", { class: "text-2xl font-bold text-gray-900" }, "Data Mustahik (Penerima ZISWAF)")]), createVNode("button", {
							onClick: ($event) => showModal.value = true,
							class: "btn-primary"
						}, [createVNode("i", { class: "fas fa-plus mr-2" }), createTextVNode("Tambah Mustahik ")], 8, ["onClick"])]),
						createVNode("div", { class: "grid grid-cols-1 md:grid-cols-4 gap-4" }, [
							createVNode("div", { class: "bg-white rounded-lg shadow p-4" }, [createVNode("div", { class: "text-sm text-gray-500" }, "Total Mustahik"), createVNode("div", { class: "text-2xl font-bold text-blue-600" }, toDisplayString(__props.mustahiqs.total), 1)]),
							createVNode("div", { class: "bg-white rounded-lg shadow p-4" }, [createVNode("div", { class: "text-sm text-gray-500" }, "Fakir"), createVNode("div", { class: "text-2xl font-bold text-red-600" }, toDisplayString(countByCategory("Fakir")), 1)]),
							createVNode("div", { class: "bg-white rounded-lg shadow p-4" }, [createVNode("div", { class: "text-sm text-gray-500" }, "Miskin"), createVNode("div", { class: "text-2xl font-bold text-orange-600" }, toDisplayString(countByCategory("Miskin")), 1)]),
							createVNode("div", { class: "bg-white rounded-lg shadow p-4" }, [createVNode("div", { class: "text-sm text-gray-500" }, "Asnaf Lainnya"), createVNode("div", { class: "text-2xl font-bold text-green-600" }, toDisplayString(__props.mustahiqs.total - countByCategory("Fakir") - countByCategory("Miskin")), 1)])
						]),
						createVNode("div", { class: "bg-white rounded-lg shadow p-4" }, [createVNode("div", { class: "flex gap-4" }, [withDirectives(createVNode("input", {
							"onUpdate:modelValue": ($event) => search.value = $event,
							type: "text",
							placeholder: "Cari nama mustahik...",
							class: "flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
						}, null, 8, ["onUpdate:modelValue"]), [[vModelText, search.value]]), withDirectives(createVNode("select", {
							"onUpdate:modelValue": ($event) => filterCategory.value = $event,
							class: "px-4 py-2 border rounded-lg"
						}, [
							createVNode("option", { value: "" }, "Semua Kategori"),
							createVNode("option", { value: "Fakir" }, "Fakir"),
							createVNode("option", { value: "Miskin" }, "Miskin"),
							createVNode("option", { value: "Amil" }, "Amil"),
							createVNode("option", { value: "Muallaf" }, "Muallaf"),
							createVNode("option", { value: "Riqab" }, "Riqab (Budak)"),
							createVNode("option", { value: "Gharimin" }, "Gharimin (Berhutang)"),
							createVNode("option", { value: "Sabilillah" }, "Sabilillah"),
							createVNode("option", { value: "Ibnu Sabil" }, "Ibnu Sabil")
						], 8, ["onUpdate:modelValue"]), [[vModelSelect, filterCategory.value]])])]),
						createVNode("div", { class: "bg-white rounded-lg shadow overflow-hidden" }, [createVNode("table", { class: "min-w-full divide-y divide-gray-200" }, [createVNode("thead", { class: "bg-gray-50" }, [createVNode("tr", null, [
							createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase" }, "Nama"),
							createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase" }, "Kategori (Asnaf)"),
							createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase" }, "Alamat"),
							createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase" }, "No. HP"),
							createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase" }, "Status"),
							createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase" }, "Aksi")
						])]), createVNode("tbody", { class: "bg-white divide-y divide-gray-200" }, [(openBlock(true), createBlock(Fragment, null, renderList(filteredMustahiqs.value, (mustahiq) => {
							return openBlock(), createBlock("tr", { key: mustahiq.id }, [
								createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, toDisplayString(mustahiq.nama), 1),
								createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [createVNode("span", { class: "px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800" }, toDisplayString(mustahiq.kategori), 1)]),
								createVNode("td", { class: "px-6 py-4 text-sm text-gray-500" }, toDisplayString(mustahiq.alamat), 1),
								createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, toDisplayString(mustahiq.no_hp || "-"), 1),
								createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [createVNode("span", { class: [mustahiq.is_active ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800", "px-2 py-1 text-xs rounded-full"] }, toDisplayString(mustahiq.is_active ? "Aktif" : "Nonaktif"), 3)]),
								createVNode("td", { class: "px-6 py-4 whitespace-nowrap text-sm font-medium" }, [createVNode("button", {
									onClick: ($event) => editMustahiq(mustahiq),
									class: "text-blue-600 hover:text-blue-900 mr-3"
								}, "Edit", 8, ["onClick"]), createVNode("button", {
									onClick: ($event) => deleteMustahiq(mustahiq.id),
									class: "text-red-600 hover:text-red-900"
								}, "Hapus", 8, ["onClick"])])
							]);
						}), 128))])])]),
						createVNode(_sfc_main$2, { links: __props.mustahiqs.links }, null, 8, ["links"]),
						createVNode(_sfc_main$1, {
							show: showModal.value,
							onClose: ($event) => showModal.value = false,
							"max-width": "lg"
						}, {
							default: withCtx(() => [createVNode("form", {
								onSubmit: withModifiers(submitForm, ["prevent"]),
								class: "p-6 space-y-4"
							}, [
								createVNode("h2", { class: "text-xl font-bold" }, toDisplayString(isEditing.value ? "Edit" : "Tambah") + " Mustahik", 1),
								createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Nama Lengkap"), withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => form.value.nama = $event,
									type: "text",
									required: "",
									class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.nama]])]),
								createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Kategori (Asnaf)"), withDirectives(createVNode("select", {
									"onUpdate:modelValue": ($event) => form.value.kategori = $event,
									required: "",
									class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								}, [
									createVNode("option", { value: "" }, "Pilih Kategori"),
									createVNode("option", { value: "Fakir" }, "Fakir - Tidak punya harta & tenaga"),
									createVNode("option", { value: "Miskin" }, "Miskin - Punya sedikit harta"),
									createVNode("option", { value: "Amil" }, "Amil - Pengelola ZISWAF"),
									createVNode("option", { value: "Muallaf" }, "Muallaf - Baru masuk Islam"),
									createVNode("option", { value: "Riqab" }, "Riqab - Budak/Hamba Sahaya"),
									createVNode("option", { value: "Gharimin" }, "Gharimin - Orang Berhutang"),
									createVNode("option", { value: "Sabilillah" }, "Sabilillah - Pejuang di Jalan Allah"),
									createVNode("option", { value: "Ibnu Sabil" }, "Ibnu Sabil - Musafir Kehabisan Bekal")
								], 8, ["onUpdate:modelValue"]), [[vModelSelect, form.value.kategori]])]),
								createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Alamat"), withDirectives(createVNode("textarea", {
									"onUpdate:modelValue": ($event) => form.value.alamat = $event,
									rows: "3",
									required: "",
									class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.alamat]])]),
								createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "No. HP"), withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => form.value.no_hp = $event,
									type: "text",
									class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.no_hp]])]),
								createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Catatan/Kondisi Khusus"), withDirectives(createVNode("textarea", {
									"onUpdate:modelValue": ($event) => form.value.catatan = $event,
									rows: "2",
									class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.catatan]])]),
								isEditing.value ? (openBlock(), createBlock("div", { key: 0 }, [createVNode("label", { class: "flex items-center" }, [withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => form.value.is_active = $event,
									type: "checkbox",
									class: "rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelCheckbox, form.value.is_active]]), createVNode("span", { class: "ml-2 text-sm text-gray-700" }, "Aktif")])])) : createCommentVNode("", true),
								createVNode("div", { class: "flex justify-end gap-3 pt-4" }, [createVNode("button", {
									type: "button",
									onClick: ($event) => showModal.value = false,
									class: "btn-secondary"
								}, "Batal", 8, ["onClick"]), createVNode("button", {
									type: "submit",
									class: "btn-primary"
								}, toDisplayString(isEditing.value ? "Update" : "Simpan"), 1)])
							], 32)]),
							_: 1
						}, 8, ["show", "onClose"])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Ziswaf/Mustahiq/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
