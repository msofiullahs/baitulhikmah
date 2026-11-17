import { t as _sfc_main$1 } from "./Modal-CLSC5svO.js";
import { t as AdminLayout_default } from "./AdminLayout-JKKJHCcy.js";
import { t as _sfc_main$2 } from "./Pagination-DiptkPBm.js";
import { Fragment, computed, createBlock, createCommentVNode, createTextVNode, createVNode, mergeProps, openBlock, ref, renderList, toDisplayString, useSSRContext, vModelSelect, vModelText, withCtx, withDirectives, withModifiers } from "vue";
import { router } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
//#region resources/js/Pages/Invitations/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: {
		invitations: Object,
		masjid: Object,
		templates: Array
	},
	setup(__props) {
		const props = __props;
		const showModal = ref(false);
		const showPreview = ref(false);
		const search = ref("");
		const filterTemplate = ref("");
		const filterStatus = ref("");
		const isEditing = ref(false);
		const editingId = ref(null);
		const previewData = ref({});
		const form = ref({
			no_undangan: "",
			template_id: "",
			judul_acara: "",
			deskripsi: "",
			tanggal_acara: "",
			lokasi: "",
			pembicara: "",
			dress_code: "",
			kontak: "",
			receiver_names: ""
		});
		const filteredInvitations = computed(() => {
			let data = props.invitations.data || [];
			if (search.value) data = data.filter((inv) => inv.judul_acara.toLowerCase().includes(search.value.toLowerCase()));
			if (filterTemplate.value) data = data.filter((inv) => inv.template === filterTemplate.value);
			if (filterStatus.value) data = data.filter((inv) => inv.status === filterStatus.value);
			return data;
		});
		const countByStatus = (status) => {
			return (props.invitations.data || []).filter((inv) => inv.status === status).length;
		};
		const getStatusClass = (status) => {
			return {
				draft: "bg-yellow-100 text-yellow-800",
				terkirim: "bg-green-100 text-green-800",
				selesai: "bg-gray-100 text-gray-800"
			}[status] || "bg-gray-100 text-gray-800";
		};
		const formatDate = (date) => {
			if (!date) return "-";
			return new Date(date).toLocaleDateString("id-ID", {
				weekday: "long",
				year: "numeric",
				month: "long",
				day: "numeric",
				hour: "2-digit",
				minute: "2-digit"
			});
		};
		const resetForm = () => {
			form.value = {
				no_undangan: "UND-" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 10).replace(/-/g, "") + "-",
				template_id: "",
				judul_acara: "",
				deskripsi: "",
				tanggal_acara: "",
				lokasi: "",
				pembicara: "",
				dress_code: "",
				kontak: "",
				receiver_names: ""
			};
			isEditing.value = false;
			editingId.value = null;
		};
		const submitForm = () => {
			let receiversArray = [];
			if (form.value.receiver_names) receiversArray = form.value.receiver_names.split("\n").filter((n) => n.trim()).map((name) => ({
				nama: name.trim(),
				jamaah_id: null,
				no_hp: null,
				email: null
			}));
			const formData = {
				...form.value,
				receiver_names: JSON.stringify(receiversArray)
			};
			if (isEditing.value) router.put(route("invitations.update", editingId.value), formData, { onSuccess: () => {
				showModal.value = false;
				resetForm();
			} });
			else router.post(route("invitations.store"), formData, { onSuccess: () => {
				showModal.value = false;
				resetForm();
			} });
		};
		const previewInvitation = (inv) => {
			previewData.value = inv;
			showPreview.value = true;
		};
		const editInvitation = (inv) => {
			form.value = {
				no_undangan: inv.no_undangan,
				template_id: inv.template_id || "",
				judul_acara: inv.judul_acara,
				deskripsi: inv.deskripsi || "",
				tanggal_acara: inv.tanggal_acara ? inv.tanggal_acara.slice(0, 16) : "",
				lokasi: inv.lokasi,
				pembicara: inv.pembicara || "",
				dress_code: inv.dress_code || "",
				kontak: inv.kontak || "",
				receiver_names: ""
			};
			isEditing.value = true;
			editingId.value = inv.id;
			showModal.value = true;
		};
		const deleteInvitation = (id) => {
			if (confirm("Apakah Anda yakin ingin menghapus undangan ini?")) router.delete(route("invitations.destroy", id));
		};
		const downloadPdf = (inv) => {
			router.get(route("invitations.pdf", inv.id), {}, {
				responseType: "blob",
				onSuccess: (response) => {
					const url = window.URL.createObjectURL(new Blob([response]));
					const link = document.createElement("a");
					link.href = url;
					link.download = `${inv.no_undangan}.pdf`;
					link.click();
				}
			});
		};
		const sendWhatsapp = (inv) => {
			alert("Fitur kirim WhatsApp akan diimplementasikan dengan WhatsApp API");
		};
		const generatePdf = () => {
			alert("Generate PDF bulk akan membuat ZIP file berisi semua undangan");
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(AdminLayout_default, mergeProps({ title: "Undangan" }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="space-y-6"${_scopeId}><div class="flex justify-between items-center"${_scopeId}><h1 class="text-2xl font-bold text-gray-900"${_scopeId}>Kelola Undangan</h1><button class="btn-primary"${_scopeId}><i class="fas fa-plus mr-2"${_scopeId}></i>Buat Undangan Baru </button></div><div class="grid grid-cols-1 md:grid-cols-4 gap-4"${_scopeId}><div class="bg-white rounded-lg shadow p-4"${_scopeId}><div class="text-sm text-gray-500"${_scopeId}>Total Undangan</div><div class="text-2xl font-bold text-blue-600"${_scopeId}>${ssrInterpolate(__props.invitations.total)}</div></div><div class="bg-white rounded-lg shadow p-4"${_scopeId}><div class="text-sm text-gray-500"${_scopeId}>Terkirim</div><div class="text-2xl font-bold text-green-600"${_scopeId}>${ssrInterpolate(countByStatus("terkirim"))}</div></div><div class="bg-white rounded-lg shadow p-4"${_scopeId}><div class="text-sm text-gray-500"${_scopeId}>Draft</div><div class="text-2xl font-bold text-yellow-600"${_scopeId}>${ssrInterpolate(countByStatus("draft"))}</div></div><div class="bg-white rounded-lg shadow p-4"${_scopeId}><div class="text-sm text-gray-500"${_scopeId}>Selesai</div><div class="text-2xl font-bold text-gray-600"${_scopeId}>${ssrInterpolate(countByStatus("selesai"))}</div></div></div><div class="bg-white rounded-lg shadow p-4"${_scopeId}><div class="flex gap-4 flex-wrap"${_scopeId}><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari judul undangan..." class="flex-1 min-w-[200px] px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"${_scopeId}><select class="px-4 py-2 border rounded-lg"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(filterTemplate.value) ? ssrLooseContain(filterTemplate.value, "") : ssrLooseEqual(filterTemplate.value, "")) ? " selected" : ""}${_scopeId}>Semua Template</option><option value="Pengajian Rutin"${ssrIncludeBooleanAttr(Array.isArray(filterTemplate.value) ? ssrLooseContain(filterTemplate.value, "Pengajian Rutin") : ssrLooseEqual(filterTemplate.value, "Pengajian Rutin")) ? " selected" : ""}${_scopeId}>Pengajian Rutin</option><option value="Maulid/Isra Mi&#39;raj"${ssrIncludeBooleanAttr(Array.isArray(filterTemplate.value) ? ssrLooseContain(filterTemplate.value, "Maulid/Isra Mi'raj") : ssrLooseEqual(filterTemplate.value, "Maulid/Isra Mi'raj")) ? " selected" : ""}${_scopeId}>Maulid/Isra Mi&#39;raj</option><option value="Rapat Ta&#39;mir"${ssrIncludeBooleanAttr(Array.isArray(filterTemplate.value) ? ssrLooseContain(filterTemplate.value, "Rapat Ta'mir") : ssrLooseEqual(filterTemplate.value, "Rapat Ta'mir")) ? " selected" : ""}${_scopeId}>Rapat Ta&#39;mir</option><option value="Halal Bihalal"${ssrIncludeBooleanAttr(Array.isArray(filterTemplate.value) ? ssrLooseContain(filterTemplate.value, "Halal Bihalal") : ssrLooseEqual(filterTemplate.value, "Halal Bihalal")) ? " selected" : ""}${_scopeId}>Halal Bihalal</option><option value="Kajian Akbar"${ssrIncludeBooleanAttr(Array.isArray(filterTemplate.value) ? ssrLooseContain(filterTemplate.value, "Kajian Akbar") : ssrLooseEqual(filterTemplate.value, "Kajian Akbar")) ? " selected" : ""}${_scopeId}>Kajian Akbar</option><option value="Pernikahan"${ssrIncludeBooleanAttr(Array.isArray(filterTemplate.value) ? ssrLooseContain(filterTemplate.value, "Pernikahan") : ssrLooseEqual(filterTemplate.value, "Pernikahan")) ? " selected" : ""}${_scopeId}>Pernikahan</option></select><select class="px-4 py-2 border rounded-lg"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(filterStatus.value) ? ssrLooseContain(filterStatus.value, "") : ssrLooseEqual(filterStatus.value, "")) ? " selected" : ""}${_scopeId}>Semua Status</option><option value="draft"${ssrIncludeBooleanAttr(Array.isArray(filterStatus.value) ? ssrLooseContain(filterStatus.value, "draft") : ssrLooseEqual(filterStatus.value, "draft")) ? " selected" : ""}${_scopeId}>Draft</option><option value="terkirim"${ssrIncludeBooleanAttr(Array.isArray(filterStatus.value) ? ssrLooseContain(filterStatus.value, "terkirim") : ssrLooseEqual(filterStatus.value, "terkirim")) ? " selected" : ""}${_scopeId}>Terkirim</option><option value="selesai"${ssrIncludeBooleanAttr(Array.isArray(filterStatus.value) ? ssrLooseContain(filterStatus.value, "selesai") : ssrLooseEqual(filterStatus.value, "selesai")) ? " selected" : ""}${_scopeId}>Selesai</option></select></div></div><div class="bg-white rounded-lg shadow overflow-hidden"${_scopeId}><table class="min-w-full divide-y divide-gray-200"${_scopeId}><thead class="bg-gray-50"${_scopeId}><tr${_scopeId}><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"${_scopeId}>No. Undangan</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"${_scopeId}>Judul Acara</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"${_scopeId}>Template</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"${_scopeId}>Tanggal Acara</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"${_scopeId}>Jumlah Penerima</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"${_scopeId}>Status</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"${_scopeId}>Aksi</th></tr></thead><tbody class="bg-white divide-y divide-gray-200"${_scopeId}><!--[-->`);
						ssrRenderList(filteredInvitations.value, (inv) => {
							_push(`<tr${_scopeId}><td class="px-6 py-4 whitespace-nowrap text-sm font-mono"${_scopeId}>${ssrInterpolate(inv.no_undangan)}</td><td class="px-6 py-4"${_scopeId}>${ssrInterpolate(inv.judul_acara)}</td><td class="px-6 py-4 whitespace-nowrap"${_scopeId}><span class="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-800"${_scopeId}>${ssrInterpolate(inv.template)}</span></td><td class="px-6 py-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(formatDate(inv.tanggal_acara))}</td><td class="px-6 py-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(inv.jumlah_penerima || 0)}</td><td class="px-6 py-4 whitespace-nowrap"${_scopeId}><span class="${ssrRenderClass([getStatusClass(inv.status), "px-2 py-1 text-xs rounded-full"])}"${_scopeId}>${ssrInterpolate(inv.status)}</span></td><td class="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2"${_scopeId}><button class="text-blue-600 hover:text-blue-900" title="Preview"${_scopeId}><i class="fas fa-eye"${_scopeId}></i></button><button class="text-green-600 hover:text-green-900" title="Download PDF"${_scopeId}><i class="fas fa-file-pdf"${_scopeId}></i></button><button class="text-emerald-600 hover:text-emerald-900" title="Kirim WA"${_scopeId}><i class="fab fa-whatsapp"${_scopeId}></i></button><button class="text-yellow-600 hover:text-yellow-900" title="Edit"${_scopeId}><i class="fas fa-edit"${_scopeId}></i></button><button class="text-red-600 hover:text-red-900" title="Hapus"${_scopeId}><i class="fas fa-trash"${_scopeId}></i></button></td></tr>`);
						});
						_push(`<!--]--></tbody></table></div>`);
						_push(ssrRenderComponent(_sfc_main$2, { links: __props.invitations.links }, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$1, {
							show: showModal.value,
							onClose: ($event) => showModal.value = false,
							"max-width": "2xl"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<form class="p-6 space-y-4"${_scopeId}><h2 class="text-xl font-bold"${_scopeId}>${ssrInterpolate(isEditing.value ? "Edit" : "Buat")} Undangan</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-4"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Template</label><select required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(form.value.template_id) ? ssrLooseContain(form.value.template_id, "") : ssrLooseEqual(form.value.template_id, "")) ? " selected" : ""}${_scopeId}>Pilih Template</option><!--[-->`);
									ssrRenderList(__props.templates, (tpl) => {
										_push(`<option${ssrRenderAttr("value", tpl.id)}${ssrIncludeBooleanAttr(Array.isArray(form.value.template_id) ? ssrLooseContain(form.value.template_id, tpl.id) : ssrLooseEqual(form.value.template_id, tpl.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(tpl.nama)}</option>`);
									});
									_push(`<!--]--></select></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>No. Undangan</label><input${ssrRenderAttr("value", form.value.no_undangan)} type="text"${ssrRenderAttr("placeholder", "UND-" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 10).replace(/-/g, "") + "-XXX")} class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Judul Acara</label><input${ssrRenderAttr("value", form.value.judul_acara)} type="text" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Deskripsi</label><textarea rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}>${ssrInterpolate(form.value.deskripsi)}</textarea></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Tanggal &amp; Waktu</label><input${ssrRenderAttr("value", form.value.tanggal_acara)} type="datetime-local" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Lokasi</label><input${ssrRenderAttr("value", form.value.lokasi)} type="text" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Pembicara/Narasumber</label><input${ssrRenderAttr("value", form.value.pembicara)} type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Dress Code</label><input${ssrRenderAttr("value", form.value.dress_code)} type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Kontak Person</label><input${ssrRenderAttr("value", form.value.kontak)} type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Daftar Penerima (satu nama per baris)</label><textarea rows="6" placeholder="Ahmad
Fatimah
Ibrahim
Khadijah" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}>${ssrInterpolate(form.value.receiver_names)}</textarea><p class="text-xs text-gray-500 mt-1"${_scopeId}>Import dari Excel dapat dilakukan setelah undangan dibuat</p></div><div class="flex justify-end gap-3 pt-4"${_scopeId}><button type="button" class="btn-secondary"${_scopeId}>Batal</button><button type="submit" class="btn-primary"${_scopeId}>${ssrInterpolate(isEditing.value ? "Update" : "Buat")} Undangan</button></div></form>`);
								} else return [createVNode("form", {
									onSubmit: withModifiers(submitForm, ["prevent"]),
									class: "p-6 space-y-4"
								}, [
									createVNode("h2", { class: "text-xl font-bold" }, toDisplayString(isEditing.value ? "Edit" : "Buat") + " Undangan", 1),
									createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Template"), withDirectives(createVNode("select", {
										"onUpdate:modelValue": ($event) => form.value.template_id = $event,
										required: "",
										class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
									}, [createVNode("option", { value: "" }, "Pilih Template"), (openBlock(true), createBlock(Fragment, null, renderList(__props.templates, (tpl) => {
										return openBlock(), createBlock("option", {
											key: tpl.id,
											value: tpl.id
										}, toDisplayString(tpl.nama), 9, ["value"]);
									}), 128))], 8, ["onUpdate:modelValue"]), [[vModelSelect, form.value.template_id]])]), createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "No. Undangan"), withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => form.value.no_undangan = $event,
										type: "text",
										placeholder: "UND-" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 10).replace(/-/g, "") + "-XXX",
										class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
									}, null, 8, ["onUpdate:modelValue", "placeholder"]), [[vModelText, form.value.no_undangan]])])]),
									createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Judul Acara"), withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => form.value.judul_acara = $event,
										type: "text",
										required: "",
										class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.judul_acara]])]),
									createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Deskripsi"), withDirectives(createVNode("textarea", {
										"onUpdate:modelValue": ($event) => form.value.deskripsi = $event,
										rows: "3",
										class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.deskripsi]])]),
									createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Tanggal & Waktu"), withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => form.value.tanggal_acara = $event,
										type: "datetime-local",
										required: "",
										class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.tanggal_acara]])]), createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Lokasi"), withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => form.value.lokasi = $event,
										type: "text",
										required: "",
										class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.lokasi]])])]),
									createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Pembicara/Narasumber"), withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => form.value.pembicara = $event,
										type: "text",
										class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.pembicara]])]), createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Dress Code"), withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => form.value.dress_code = $event,
										type: "text",
										class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.dress_code]])])]),
									createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Kontak Person"), withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => form.value.kontak = $event,
										type: "text",
										class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.kontak]])]),
									createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Daftar Penerima (satu nama per baris)"),
										withDirectives(createVNode("textarea", {
											"onUpdate:modelValue": ($event) => form.value.receiver_names = $event,
											rows: "6",
											placeholder: "Ahmad\nFatimah\nIbrahim\nKhadijah",
											class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
										}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.receiver_names]]),
										createVNode("p", { class: "text-xs text-gray-500 mt-1" }, "Import dari Excel dapat dilakukan setelah undangan dibuat")
									]),
									createVNode("div", { class: "flex justify-end gap-3 pt-4" }, [createVNode("button", {
										type: "button",
										onClick: ($event) => showModal.value = false,
										class: "btn-secondary"
									}, "Batal", 8, ["onClick"]), createVNode("button", {
										type: "submit",
										class: "btn-primary"
									}, toDisplayString(isEditing.value ? "Update" : "Buat") + " Undangan", 1)])
								], 32)];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$1, {
							show: showPreview.value,
							onClose: ($event) => showPreview.value = false,
							"max-width": "2xl"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<div class="p-6"${_scopeId}><h2 class="text-xl font-bold mb-4"${_scopeId}>Preview Undangan</h2><div class="border rounded-lg p-6 bg-gradient-to-br from-blue-50 to-purple-50"${_scopeId}><div class="text-center mb-4"${_scopeId}><img${ssrRenderAttr("src", __props.masjid.logo)} alt="Logo Masjid" class="h-16 mx-auto mb-2"${_scopeId}><h3 class="text-lg font-bold"${_scopeId}>${ssrInterpolate(__props.masjid.nama)}</h3><p class="text-sm text-gray-600"${_scopeId}>${ssrInterpolate(__props.masjid.alamat)}</p></div><div class="bg-white rounded-lg p-6 shadow-inner"${_scopeId}><h4 class="text-xl font-bold text-center mb-2"${_scopeId}>${ssrInterpolate(previewData.value.judul_acara)}</h4><p class="text-center text-gray-600 mb-4"${_scopeId}>${ssrInterpolate(previewData.value.deskripsi)}</p><div class="space-y-2 text-sm"${_scopeId}><p${_scopeId}><strong${_scopeId}>📅 Tanggal:</strong> ${ssrInterpolate(formatDate(previewData.value.tanggal_acara))}</p><p${_scopeId}><strong${_scopeId}>📍 Lokasi:</strong> ${ssrInterpolate(previewData.value.lokasi)}</p>`);
									if (previewData.value.pembicara) _push(`<p${_scopeId}><strong${_scopeId}>🎤 Pembicara:</strong> ${ssrInterpolate(previewData.value.pembicara)}</p>`);
									else _push(`<!---->`);
									if (previewData.value.dress_code) _push(`<p${_scopeId}><strong${_scopeId}>👔 Dress Code:</strong> ${ssrInterpolate(previewData.value.dress_code)}</p>`);
									else _push(`<!---->`);
									if (previewData.value.kontak) _push(`<p${_scopeId}><strong${_scopeId}>📞 Kontak:</strong> ${ssrInterpolate(previewData.value.kontak)}</p>`);
									else _push(`<!---->`);
									_push(`</div><div class="mt-4 text-center"${_scopeId}><div class="inline-block bg-gray-200 p-2 rounded"${_scopeId}><div class="w-24 h-24 bg-gray-400 flex items-center justify-center text-xs text-white"${_scopeId}>QR Code</div></div><p class="text-xs text-gray-500 mt-1"${_scopeId}>Scan untuk konfirmasi kehadiran</p></div></div></div><div class="flex justify-end gap-3 mt-4"${_scopeId}><button type="button" class="btn-secondary"${_scopeId}>Tutup</button><button type="button" class="btn-primary"${_scopeId}><i class="fas fa-file-pdf mr-2"${_scopeId}></i>Generate PDF </button></div></div>`);
								} else return [createVNode("div", { class: "p-6" }, [
									createVNode("h2", { class: "text-xl font-bold mb-4" }, "Preview Undangan"),
									createVNode("div", { class: "border rounded-lg p-6 bg-gradient-to-br from-blue-50 to-purple-50" }, [createVNode("div", { class: "text-center mb-4" }, [
										createVNode("img", {
											src: __props.masjid.logo,
											alt: "Logo Masjid",
											class: "h-16 mx-auto mb-2"
										}, null, 8, ["src"]),
										createVNode("h3", { class: "text-lg font-bold" }, toDisplayString(__props.masjid.nama), 1),
										createVNode("p", { class: "text-sm text-gray-600" }, toDisplayString(__props.masjid.alamat), 1)
									]), createVNode("div", { class: "bg-white rounded-lg p-6 shadow-inner" }, [
										createVNode("h4", { class: "text-xl font-bold text-center mb-2" }, toDisplayString(previewData.value.judul_acara), 1),
										createVNode("p", { class: "text-center text-gray-600 mb-4" }, toDisplayString(previewData.value.deskripsi), 1),
										createVNode("div", { class: "space-y-2 text-sm" }, [
											createVNode("p", null, [createVNode("strong", null, "📅 Tanggal:"), createTextVNode(" " + toDisplayString(formatDate(previewData.value.tanggal_acara)), 1)]),
											createVNode("p", null, [createVNode("strong", null, "📍 Lokasi:"), createTextVNode(" " + toDisplayString(previewData.value.lokasi), 1)]),
											previewData.value.pembicara ? (openBlock(), createBlock("p", { key: 0 }, [createVNode("strong", null, "🎤 Pembicara:"), createTextVNode(" " + toDisplayString(previewData.value.pembicara), 1)])) : createCommentVNode("", true),
											previewData.value.dress_code ? (openBlock(), createBlock("p", { key: 1 }, [createVNode("strong", null, "👔 Dress Code:"), createTextVNode(" " + toDisplayString(previewData.value.dress_code), 1)])) : createCommentVNode("", true),
											previewData.value.kontak ? (openBlock(), createBlock("p", { key: 2 }, [createVNode("strong", null, "📞 Kontak:"), createTextVNode(" " + toDisplayString(previewData.value.kontak), 1)])) : createCommentVNode("", true)
										]),
										createVNode("div", { class: "mt-4 text-center" }, [createVNode("div", { class: "inline-block bg-gray-200 p-2 rounded" }, [createVNode("div", { class: "w-24 h-24 bg-gray-400 flex items-center justify-center text-xs text-white" }, "QR Code")]), createVNode("p", { class: "text-xs text-gray-500 mt-1" }, "Scan untuk konfirmasi kehadiran")])
									])]),
									createVNode("div", { class: "flex justify-end gap-3 mt-4" }, [createVNode("button", {
										type: "button",
										onClick: ($event) => showPreview.value = false,
										class: "btn-secondary"
									}, "Tutup", 8, ["onClick"]), createVNode("button", {
										type: "button",
										onClick: generatePdf,
										class: "btn-primary"
									}, [createVNode("i", { class: "fas fa-file-pdf mr-2" }), createTextVNode("Generate PDF ")])])
								])];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div>`);
					} else return [createVNode("div", { class: "space-y-6" }, [
						createVNode("div", { class: "flex justify-between items-center" }, [createVNode("h1", { class: "text-2xl font-bold text-gray-900" }, "Kelola Undangan"), createVNode("button", {
							onClick: ($event) => showModal.value = true,
							class: "btn-primary"
						}, [createVNode("i", { class: "fas fa-plus mr-2" }), createTextVNode("Buat Undangan Baru ")], 8, ["onClick"])]),
						createVNode("div", { class: "grid grid-cols-1 md:grid-cols-4 gap-4" }, [
							createVNode("div", { class: "bg-white rounded-lg shadow p-4" }, [createVNode("div", { class: "text-sm text-gray-500" }, "Total Undangan"), createVNode("div", { class: "text-2xl font-bold text-blue-600" }, toDisplayString(__props.invitations.total), 1)]),
							createVNode("div", { class: "bg-white rounded-lg shadow p-4" }, [createVNode("div", { class: "text-sm text-gray-500" }, "Terkirim"), createVNode("div", { class: "text-2xl font-bold text-green-600" }, toDisplayString(countByStatus("terkirim")), 1)]),
							createVNode("div", { class: "bg-white rounded-lg shadow p-4" }, [createVNode("div", { class: "text-sm text-gray-500" }, "Draft"), createVNode("div", { class: "text-2xl font-bold text-yellow-600" }, toDisplayString(countByStatus("draft")), 1)]),
							createVNode("div", { class: "bg-white rounded-lg shadow p-4" }, [createVNode("div", { class: "text-sm text-gray-500" }, "Selesai"), createVNode("div", { class: "text-2xl font-bold text-gray-600" }, toDisplayString(countByStatus("selesai")), 1)])
						]),
						createVNode("div", { class: "bg-white rounded-lg shadow p-4" }, [createVNode("div", { class: "flex gap-4 flex-wrap" }, [
							withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => search.value = $event,
								type: "text",
								placeholder: "Cari judul undangan...",
								class: "flex-1 min-w-[200px] px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, search.value]]),
							withDirectives(createVNode("select", {
								"onUpdate:modelValue": ($event) => filterTemplate.value = $event,
								class: "px-4 py-2 border rounded-lg"
							}, [
								createVNode("option", { value: "" }, "Semua Template"),
								createVNode("option", { value: "Pengajian Rutin" }, "Pengajian Rutin"),
								createVNode("option", { value: "Maulid/Isra Mi'raj" }, "Maulid/Isra Mi'raj"),
								createVNode("option", { value: "Rapat Ta'mir" }, "Rapat Ta'mir"),
								createVNode("option", { value: "Halal Bihalal" }, "Halal Bihalal"),
								createVNode("option", { value: "Kajian Akbar" }, "Kajian Akbar"),
								createVNode("option", { value: "Pernikahan" }, "Pernikahan")
							], 8, ["onUpdate:modelValue"]), [[vModelSelect, filterTemplate.value]]),
							withDirectives(createVNode("select", {
								"onUpdate:modelValue": ($event) => filterStatus.value = $event,
								class: "px-4 py-2 border rounded-lg"
							}, [
								createVNode("option", { value: "" }, "Semua Status"),
								createVNode("option", { value: "draft" }, "Draft"),
								createVNode("option", { value: "terkirim" }, "Terkirim"),
								createVNode("option", { value: "selesai" }, "Selesai")
							], 8, ["onUpdate:modelValue"]), [[vModelSelect, filterStatus.value]])
						])]),
						createVNode("div", { class: "bg-white rounded-lg shadow overflow-hidden" }, [createVNode("table", { class: "min-w-full divide-y divide-gray-200" }, [createVNode("thead", { class: "bg-gray-50" }, [createVNode("tr", null, [
							createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase" }, "No. Undangan"),
							createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase" }, "Judul Acara"),
							createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase" }, "Template"),
							createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase" }, "Tanggal Acara"),
							createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase" }, "Jumlah Penerima"),
							createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase" }, "Status"),
							createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase" }, "Aksi")
						])]), createVNode("tbody", { class: "bg-white divide-y divide-gray-200" }, [(openBlock(true), createBlock(Fragment, null, renderList(filteredInvitations.value, (inv) => {
							return openBlock(), createBlock("tr", { key: inv.id }, [
								createVNode("td", { class: "px-6 py-4 whitespace-nowrap text-sm font-mono" }, toDisplayString(inv.no_undangan), 1),
								createVNode("td", { class: "px-6 py-4" }, toDisplayString(inv.judul_acara), 1),
								createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [createVNode("span", { class: "px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-800" }, toDisplayString(inv.template), 1)]),
								createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, toDisplayString(formatDate(inv.tanggal_acara)), 1),
								createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, toDisplayString(inv.jumlah_penerima || 0), 1),
								createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [createVNode("span", { class: [getStatusClass(inv.status), "px-2 py-1 text-xs rounded-full"] }, toDisplayString(inv.status), 3)]),
								createVNode("td", { class: "px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2" }, [
									createVNode("button", {
										onClick: ($event) => previewInvitation(inv),
										class: "text-blue-600 hover:text-blue-900",
										title: "Preview"
									}, [createVNode("i", { class: "fas fa-eye" })], 8, ["onClick"]),
									createVNode("button", {
										onClick: ($event) => downloadPdf(inv),
										class: "text-green-600 hover:text-green-900",
										title: "Download PDF"
									}, [createVNode("i", { class: "fas fa-file-pdf" })], 8, ["onClick"]),
									createVNode("button", {
										onClick: ($event) => sendWhatsapp(inv),
										class: "text-emerald-600 hover:text-emerald-900",
										title: "Kirim WA"
									}, [createVNode("i", { class: "fab fa-whatsapp" })], 8, ["onClick"]),
									createVNode("button", {
										onClick: ($event) => editInvitation(inv),
										class: "text-yellow-600 hover:text-yellow-900",
										title: "Edit"
									}, [createVNode("i", { class: "fas fa-edit" })], 8, ["onClick"]),
									createVNode("button", {
										onClick: ($event) => deleteInvitation(inv.id),
										class: "text-red-600 hover:text-red-900",
										title: "Hapus"
									}, [createVNode("i", { class: "fas fa-trash" })], 8, ["onClick"])
								])
							]);
						}), 128))])])]),
						createVNode(_sfc_main$2, { links: __props.invitations.links }, null, 8, ["links"]),
						createVNode(_sfc_main$1, {
							show: showModal.value,
							onClose: ($event) => showModal.value = false,
							"max-width": "2xl"
						}, {
							default: withCtx(() => [createVNode("form", {
								onSubmit: withModifiers(submitForm, ["prevent"]),
								class: "p-6 space-y-4"
							}, [
								createVNode("h2", { class: "text-xl font-bold" }, toDisplayString(isEditing.value ? "Edit" : "Buat") + " Undangan", 1),
								createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Template"), withDirectives(createVNode("select", {
									"onUpdate:modelValue": ($event) => form.value.template_id = $event,
									required: "",
									class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								}, [createVNode("option", { value: "" }, "Pilih Template"), (openBlock(true), createBlock(Fragment, null, renderList(__props.templates, (tpl) => {
									return openBlock(), createBlock("option", {
										key: tpl.id,
										value: tpl.id
									}, toDisplayString(tpl.nama), 9, ["value"]);
								}), 128))], 8, ["onUpdate:modelValue"]), [[vModelSelect, form.value.template_id]])]), createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "No. Undangan"), withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => form.value.no_undangan = $event,
									type: "text",
									placeholder: "UND-" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 10).replace(/-/g, "") + "-XXX",
									class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								}, null, 8, ["onUpdate:modelValue", "placeholder"]), [[vModelText, form.value.no_undangan]])])]),
								createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Judul Acara"), withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => form.value.judul_acara = $event,
									type: "text",
									required: "",
									class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.judul_acara]])]),
								createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Deskripsi"), withDirectives(createVNode("textarea", {
									"onUpdate:modelValue": ($event) => form.value.deskripsi = $event,
									rows: "3",
									class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.deskripsi]])]),
								createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Tanggal & Waktu"), withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => form.value.tanggal_acara = $event,
									type: "datetime-local",
									required: "",
									class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.tanggal_acara]])]), createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Lokasi"), withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => form.value.lokasi = $event,
									type: "text",
									required: "",
									class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.lokasi]])])]),
								createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Pembicara/Narasumber"), withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => form.value.pembicara = $event,
									type: "text",
									class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.pembicara]])]), createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Dress Code"), withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => form.value.dress_code = $event,
									type: "text",
									class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.dress_code]])])]),
								createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Kontak Person"), withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => form.value.kontak = $event,
									type: "text",
									class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.kontak]])]),
								createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Daftar Penerima (satu nama per baris)"),
									withDirectives(createVNode("textarea", {
										"onUpdate:modelValue": ($event) => form.value.receiver_names = $event,
										rows: "6",
										placeholder: "Ahmad\nFatimah\nIbrahim\nKhadijah",
										class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.receiver_names]]),
									createVNode("p", { class: "text-xs text-gray-500 mt-1" }, "Import dari Excel dapat dilakukan setelah undangan dibuat")
								]),
								createVNode("div", { class: "flex justify-end gap-3 pt-4" }, [createVNode("button", {
									type: "button",
									onClick: ($event) => showModal.value = false,
									class: "btn-secondary"
								}, "Batal", 8, ["onClick"]), createVNode("button", {
									type: "submit",
									class: "btn-primary"
								}, toDisplayString(isEditing.value ? "Update" : "Buat") + " Undangan", 1)])
							], 32)]),
							_: 1
						}, 8, ["show", "onClose"]),
						createVNode(_sfc_main$1, {
							show: showPreview.value,
							onClose: ($event) => showPreview.value = false,
							"max-width": "2xl"
						}, {
							default: withCtx(() => [createVNode("div", { class: "p-6" }, [
								createVNode("h2", { class: "text-xl font-bold mb-4" }, "Preview Undangan"),
								createVNode("div", { class: "border rounded-lg p-6 bg-gradient-to-br from-blue-50 to-purple-50" }, [createVNode("div", { class: "text-center mb-4" }, [
									createVNode("img", {
										src: __props.masjid.logo,
										alt: "Logo Masjid",
										class: "h-16 mx-auto mb-2"
									}, null, 8, ["src"]),
									createVNode("h3", { class: "text-lg font-bold" }, toDisplayString(__props.masjid.nama), 1),
									createVNode("p", { class: "text-sm text-gray-600" }, toDisplayString(__props.masjid.alamat), 1)
								]), createVNode("div", { class: "bg-white rounded-lg p-6 shadow-inner" }, [
									createVNode("h4", { class: "text-xl font-bold text-center mb-2" }, toDisplayString(previewData.value.judul_acara), 1),
									createVNode("p", { class: "text-center text-gray-600 mb-4" }, toDisplayString(previewData.value.deskripsi), 1),
									createVNode("div", { class: "space-y-2 text-sm" }, [
										createVNode("p", null, [createVNode("strong", null, "📅 Tanggal:"), createTextVNode(" " + toDisplayString(formatDate(previewData.value.tanggal_acara)), 1)]),
										createVNode("p", null, [createVNode("strong", null, "📍 Lokasi:"), createTextVNode(" " + toDisplayString(previewData.value.lokasi), 1)]),
										previewData.value.pembicara ? (openBlock(), createBlock("p", { key: 0 }, [createVNode("strong", null, "🎤 Pembicara:"), createTextVNode(" " + toDisplayString(previewData.value.pembicara), 1)])) : createCommentVNode("", true),
										previewData.value.dress_code ? (openBlock(), createBlock("p", { key: 1 }, [createVNode("strong", null, "👔 Dress Code:"), createTextVNode(" " + toDisplayString(previewData.value.dress_code), 1)])) : createCommentVNode("", true),
										previewData.value.kontak ? (openBlock(), createBlock("p", { key: 2 }, [createVNode("strong", null, "📞 Kontak:"), createTextVNode(" " + toDisplayString(previewData.value.kontak), 1)])) : createCommentVNode("", true)
									]),
									createVNode("div", { class: "mt-4 text-center" }, [createVNode("div", { class: "inline-block bg-gray-200 p-2 rounded" }, [createVNode("div", { class: "w-24 h-24 bg-gray-400 flex items-center justify-center text-xs text-white" }, "QR Code")]), createVNode("p", { class: "text-xs text-gray-500 mt-1" }, "Scan untuk konfirmasi kehadiran")])
								])]),
								createVNode("div", { class: "flex justify-end gap-3 mt-4" }, [createVNode("button", {
									type: "button",
									onClick: ($event) => showPreview.value = false,
									class: "btn-secondary"
								}, "Tutup", 8, ["onClick"]), createVNode("button", {
									type: "button",
									onClick: generatePdf,
									class: "btn-primary"
								}, [createVNode("i", { class: "fas fa-file-pdf mr-2" }), createTextVNode("Generate PDF ")])])
							])]),
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Invitations/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
