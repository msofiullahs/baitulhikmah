import { t as _sfc_main$1 } from "./Modal-CLSC5svO.js";
import { t as AdminLayout_default } from "./AdminLayout-JKKJHCcy.js";
import { Fragment, computed, createBlock, createCommentVNode, createTextVNode, createVNode, mergeProps, openBlock, ref, renderList, toDisplayString, useSSRContext, vModelCheckbox, vModelSelect, vModelText, withCtx, withDirectives, withModifiers } from "vue";
import { router } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
//#region resources/js/Pages/InvitationTemplates/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: { templates: Array },
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
			deskripsi: "",
			warna_tema: "#4F46E5",
			is_active: true,
			preview_image: null,
			file_template: null
		});
		const uniqueCategories = computed(() => {
			const categories = new Set(props.templates.map((t) => t.kategori));
			return Array.from(categories);
		});
		const filteredTemplates = computed(() => {
			let data = props.templates || [];
			if (search.value) data = data.filter((tpl) => tpl.nama.toLowerCase().includes(search.value.toLowerCase()) || tpl.deskripsi?.toLowerCase().includes(search.value.toLowerCase()));
			if (filterCategory.value) data = data.filter((tpl) => tpl.kategori === filterCategory.value);
			return data;
		});
		const getStatusClass = (isActive) => {
			return isActive ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800";
		};
		const resetForm = () => {
			form.value = {
				nama: "",
				kategori: "",
				deskripsi: "",
				warna_tema: "#4F46E5",
				is_active: true,
				preview_image: null,
				file_template: null
			};
			isEditing.value = false;
			editingId.value = null;
		};
		const handlePreviewImage = (event) => {
			form.value.preview_image = event.target.files[0];
		};
		const handleFileTemplate = (event) => {
			form.value.file_template = event.target.files[0];
		};
		const submitForm = () => {
			const formData = new FormData();
			formData.append("nama", form.value.nama);
			formData.append("kategori", form.value.kategori);
			formData.append("deskripsi", form.value.deskripsi || "");
			formData.append("warna_tema", form.value.warna_tema || "");
			formData.append("is_active", form.value.is_active);
			if (form.value.preview_image) formData.append("preview_image", form.value.preview_image);
			if (form.value.file_template) formData.append("file_template", form.value.file_template);
			if (isEditing.value) router.put(route("invitation-templates.update", editingId.value), formData, { onSuccess: () => {
				showModal.value = false;
				resetForm();
			} });
			else router.post(route("invitation-templates.store"), formData, { onSuccess: () => {
				showModal.value = false;
				resetForm();
			} });
		};
		const editTemplate = (tpl) => {
			form.value = {
				nama: tpl.nama,
				kategori: tpl.kategori,
				deskripsi: tpl.deskripsi || "",
				warna_tema: tpl.warna_tema || "#4F46E5",
				is_active: tpl.is_active,
				preview_image: null,
				file_template: null
			};
			isEditing.value = true;
			editingId.value = tpl.id;
			showModal.value = true;
		};
		const toggleActive = (tpl) => {
			router.post(route("invitation-templates.toggle-active", tpl.id), {}, { preserveScroll: true });
		};
		const deleteTemplate = (id) => {
			if (confirm("Apakah Anda yakin ingin menghapus template ini?")) router.delete(route("invitation-templates.destroy", id));
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(AdminLayout_default, mergeProps({ title: "Template Undangan" }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="space-y-6"${_scopeId}><div class="flex justify-between items-center"${_scopeId}><h1 class="text-2xl font-bold text-gray-900"${_scopeId}>Kelola Template Undangan</h1><button class="btn-primary"${_scopeId}><i class="fas fa-plus mr-2"${_scopeId}></i>Tambah Template Baru </button></div><div class="grid grid-cols-1 md:grid-cols-3 gap-4"${_scopeId}><div class="bg-white rounded-lg shadow p-4"${_scopeId}><div class="text-sm text-gray-500"${_scopeId}>Total Template</div><div class="text-2xl font-bold text-blue-600"${_scopeId}>${ssrInterpolate(__props.templates.length)}</div></div><div class="bg-white rounded-lg shadow p-4"${_scopeId}><div class="text-sm text-gray-500"${_scopeId}>Template Aktif</div><div class="text-2xl font-bold text-green-600"${_scopeId}>${ssrInterpolate(__props.templates.filter((t) => t.is_active).length)}</div></div><div class="bg-white rounded-lg shadow p-4"${_scopeId}><div class="text-sm text-gray-500"${_scopeId}>Kategori Tersedia</div><div class="text-2xl font-bold text-purple-600"${_scopeId}>${ssrInterpolate(uniqueCategories.value.length)}</div></div></div><div class="bg-white rounded-lg shadow p-4"${_scopeId}><div class="flex gap-4 flex-wrap"${_scopeId}><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari template..." class="flex-1 min-w-[200px] px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"${_scopeId}><select class="px-4 py-2 border rounded-lg"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(filterCategory.value) ? ssrLooseContain(filterCategory.value, "") : ssrLooseEqual(filterCategory.value, "")) ? " selected" : ""}${_scopeId}>Semua Kategori</option><!--[-->`);
						ssrRenderList(uniqueCategories.value, (cat) => {
							_push(`<option${ssrRenderAttr("value", cat)}${ssrIncludeBooleanAttr(Array.isArray(filterCategory.value) ? ssrLooseContain(filterCategory.value, cat) : ssrLooseEqual(filterCategory.value, cat)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(cat)}</option>`);
						});
						_push(`<!--]--></select></div></div><div class="bg-white rounded-lg shadow overflow-hidden"${_scopeId}><table class="min-w-full divide-y divide-gray-200"${_scopeId}><thead class="bg-gray-50"${_scopeId}><tr${_scopeId}><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"${_scopeId}>Nama Template</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"${_scopeId}>Kategori</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"${_scopeId}>Warna Tema</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"${_scopeId}>Preview</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"${_scopeId}>Status</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"${_scopeId}>Aksi</th></tr></thead><tbody class="bg-white divide-y divide-gray-200"${_scopeId}><!--[-->`);
						ssrRenderList(filteredTemplates.value, (tpl) => {
							_push(`<tr${_scopeId}><td class="px-6 py-4"${_scopeId}><div class="font-medium text-gray-900"${_scopeId}>${ssrInterpolate(tpl.nama)}</div><div class="text-sm text-gray-500 truncate max-w-xs"${_scopeId}>${ssrInterpolate(tpl.deskripsi)}</div></td><td class="px-6 py-4 whitespace-nowrap"${_scopeId}><span class="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-800"${_scopeId}>${ssrInterpolate(tpl.kategori)}</span></td><td class="px-6 py-4 whitespace-nowrap"${_scopeId}>`);
							if (tpl.warna_tema) _push(`<div class="flex items-center gap-2"${_scopeId}><div class="w-6 h-6 rounded border" style="${ssrRenderStyle({ backgroundColor: tpl.warna_tema })}"${_scopeId}></div><span class="text-sm text-gray-600"${_scopeId}>${ssrInterpolate(tpl.warna_tema)}</span></div>`);
							else _push(`<!---->`);
							_push(`</td><td class="px-6 py-4 whitespace-nowrap"${_scopeId}>`);
							if (tpl.preview_image) _push(`<img${ssrRenderAttr("src", `/storage/${tpl.preview_image}`)}${ssrRenderAttr("alt", tpl.nama)} class="h-16 w-24 object-cover rounded border"${_scopeId}>`);
							else _push(`<span class="text-gray-400 text-sm"${_scopeId}>Tidak ada preview</span>`);
							_push(`</td><td class="px-6 py-4 whitespace-nowrap"${_scopeId}><span class="${ssrRenderClass([getStatusClass(tpl.is_active), "px-2 py-1 text-xs rounded-full"])}"${_scopeId}>${ssrInterpolate(tpl.is_active ? "Aktif" : "Nonaktif")}</span></td><td class="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2"${_scopeId}><button${ssrRenderAttr("title", tpl.is_active ? "Nonaktifkan" : "Aktifkan")} class="text-blue-600 hover:text-blue-900"${_scopeId}><i class="${ssrRenderClass(tpl.is_active ? "fas fa-toggle-on" : "fas fa-toggle-off")}"${_scopeId}></i></button><button class="text-yellow-600 hover:text-yellow-900" title="Edit"${_scopeId}><i class="fas fa-edit"${_scopeId}></i></button><button class="text-red-600 hover:text-red-900" title="Hapus"${_scopeId}><i class="fas fa-trash"${_scopeId}></i></button></td></tr>`);
						});
						_push(`<!--]-->`);
						if (filteredTemplates.value.length === 0) _push(`<tr${_scopeId}><td colspan="6" class="px-6 py-8 text-center text-gray-500"${_scopeId}> Tidak ada template yang ditemukan </td></tr>`);
						else _push(`<!---->`);
						_push(`</tbody></table></div>`);
						_push(ssrRenderComponent(_sfc_main$1, {
							show: showModal.value,
							onClose: ($event) => showModal.value = false,
							"max-width": "2xl"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`<form class="p-6 space-y-4"${_scopeId}><h2 class="text-xl font-bold"${_scopeId}>${ssrInterpolate(isEditing.value ? "Edit" : "Tambah")} Template Undangan</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-4"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Nama Template <span class="text-red-500"${_scopeId}>*</span></label><input${ssrRenderAttr("value", form.value.nama)} type="text" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Kategori <span class="text-red-500"${_scopeId}>*</span></label><select required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(form.value.kategori) ? ssrLooseContain(form.value.kategori, "") : ssrLooseEqual(form.value.kategori, "")) ? " selected" : ""}${_scopeId}>Pilih Kategori</option><option value="Pengajian Rutin"${ssrIncludeBooleanAttr(Array.isArray(form.value.kategori) ? ssrLooseContain(form.value.kategori, "Pengajian Rutin") : ssrLooseEqual(form.value.kategori, "Pengajian Rutin")) ? " selected" : ""}${_scopeId}>Pengajian Rutin</option><option value="Maulid/Isra Mi&#39;raj"${ssrIncludeBooleanAttr(Array.isArray(form.value.kategori) ? ssrLooseContain(form.value.kategori, "Maulid/Isra Mi'raj") : ssrLooseEqual(form.value.kategori, "Maulid/Isra Mi'raj")) ? " selected" : ""}${_scopeId}>Maulid/Isra Mi&#39;raj</option><option value="Rapat Ta&#39;mir"${ssrIncludeBooleanAttr(Array.isArray(form.value.kategori) ? ssrLooseContain(form.value.kategori, "Rapat Ta'mir") : ssrLooseEqual(form.value.kategori, "Rapat Ta'mir")) ? " selected" : ""}${_scopeId}>Rapat Ta&#39;mir</option><option value="Halal Bihalal"${ssrIncludeBooleanAttr(Array.isArray(form.value.kategori) ? ssrLooseContain(form.value.kategori, "Halal Bihalal") : ssrLooseEqual(form.value.kategori, "Halal Bihalal")) ? " selected" : ""}${_scopeId}>Halal Bihalal</option><option value="Kajian Akbar"${ssrIncludeBooleanAttr(Array.isArray(form.value.kategori) ? ssrLooseContain(form.value.kategori, "Kajian Akbar") : ssrLooseEqual(form.value.kategori, "Kajian Akbar")) ? " selected" : ""}${_scopeId}>Kajian Akbar</option><option value="Pernikahan"${ssrIncludeBooleanAttr(Array.isArray(form.value.kategori) ? ssrLooseContain(form.value.kategori, "Pernikahan") : ssrLooseEqual(form.value.kategori, "Pernikahan")) ? " selected" : ""}${_scopeId}>Pernikahan</option><option value="Khitanan"${ssrIncludeBooleanAttr(Array.isArray(form.value.kategori) ? ssrLooseContain(form.value.kategori, "Khitanan") : ssrLooseEqual(form.value.kategori, "Khitanan")) ? " selected" : ""}${_scopeId}>Khitanan</option><option value="Tahlilan"${ssrIncludeBooleanAttr(Array.isArray(form.value.kategori) ? ssrLooseContain(form.value.kategori, "Tahlilan") : ssrLooseEqual(form.value.kategori, "Tahlilan")) ? " selected" : ""}${_scopeId}>Tahlilan</option><option value="Lainnya"${ssrIncludeBooleanAttr(Array.isArray(form.value.kategori) ? ssrLooseContain(form.value.kategori, "Lainnya") : ssrLooseEqual(form.value.kategori, "Lainnya")) ? " selected" : ""}${_scopeId}>Lainnya</option></select></div></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Deskripsi</label><textarea rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}>${ssrInterpolate(form.value.deskripsi)}</textarea></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Warna Tema</label><div class="flex gap-2 mt-1"${_scopeId}><input${ssrRenderAttr("value", form.value.warna_tema)} type="color" class="h-10 w-16 rounded border cursor-pointer"${_scopeId}><input${ssrRenderAttr("value", form.value.warna_tema)} type="text" placeholder="#000000" class="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Status</label><div class="mt-2"${_scopeId}><label class="inline-flex items-center"${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(form.value.is_active) ? ssrLooseContain(form.value.is_active, null) : form.value.is_active) ? " checked" : ""} type="checkbox" class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"${_scopeId}><span class="ml-2 text-sm text-gray-700"${_scopeId}>Aktif</span></label></div></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Preview Image</label><input type="file" accept="image/*" class="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"${_scopeId}><p class="text-xs text-gray-500 mt-1"${_scopeId}>JPEG, PNG, GIF (max 2MB)</p></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>File Template</label><input type="file" accept=".pdf,.doc,.docx" class="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"${_scopeId}><p class="text-xs text-gray-500 mt-1"${_scopeId}>PDF, DOC, DOCX (max 5MB)</p></div></div><div class="flex justify-end gap-3 pt-4"${_scopeId}><button type="button" class="btn-secondary"${_scopeId}>Batal</button><button type="submit" class="btn-primary"${_scopeId}>${ssrInterpolate(isEditing.value ? "Update" : "Simpan")} Template</button></div></form>`);
								else return [createVNode("form", {
									onSubmit: withModifiers(submitForm, ["prevent"]),
									class: "p-6 space-y-4"
								}, [
									createVNode("h2", { class: "text-xl font-bold" }, toDisplayString(isEditing.value ? "Edit" : "Tambah") + " Template Undangan", 1),
									createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, [createTextVNode("Nama Template "), createVNode("span", { class: "text-red-500" }, "*")]), withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => form.value.nama = $event,
										type: "text",
										required: "",
										class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.nama]])]), createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, [createTextVNode("Kategori "), createVNode("span", { class: "text-red-500" }, "*")]), withDirectives(createVNode("select", {
										"onUpdate:modelValue": ($event) => form.value.kategori = $event,
										required: "",
										class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
									}, [
										createVNode("option", { value: "" }, "Pilih Kategori"),
										createVNode("option", { value: "Pengajian Rutin" }, "Pengajian Rutin"),
										createVNode("option", { value: "Maulid/Isra Mi'raj" }, "Maulid/Isra Mi'raj"),
										createVNode("option", { value: "Rapat Ta'mir" }, "Rapat Ta'mir"),
										createVNode("option", { value: "Halal Bihalal" }, "Halal Bihalal"),
										createVNode("option", { value: "Kajian Akbar" }, "Kajian Akbar"),
										createVNode("option", { value: "Pernikahan" }, "Pernikahan"),
										createVNode("option", { value: "Khitanan" }, "Khitanan"),
										createVNode("option", { value: "Tahlilan" }, "Tahlilan"),
										createVNode("option", { value: "Lainnya" }, "Lainnya")
									], 8, ["onUpdate:modelValue"]), [[vModelSelect, form.value.kategori]])])]),
									createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Deskripsi"), withDirectives(createVNode("textarea", {
										"onUpdate:modelValue": ($event) => form.value.deskripsi = $event,
										rows: "3",
										class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.deskripsi]])]),
									createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Warna Tema"), createVNode("div", { class: "flex gap-2 mt-1" }, [withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => form.value.warna_tema = $event,
										type: "color",
										class: "h-10 w-16 rounded border cursor-pointer"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.warna_tema]]), withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => form.value.warna_tema = $event,
										type: "text",
										placeholder: "#000000",
										class: "flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.warna_tema]])])]), createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Status"), createVNode("div", { class: "mt-2" }, [createVNode("label", { class: "inline-flex items-center" }, [withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => form.value.is_active = $event,
										type: "checkbox",
										class: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelCheckbox, form.value.is_active]]), createVNode("span", { class: "ml-2 text-sm text-gray-700" }, "Aktif")])])])]),
									createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Preview Image"),
										createVNode("input", {
											type: "file",
											onChange: handlePreviewImage,
											accept: "image/*",
											class: "mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
										}, null, 32),
										createVNode("p", { class: "text-xs text-gray-500 mt-1" }, "JPEG, PNG, GIF (max 2MB)")
									]), createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "File Template"),
										createVNode("input", {
											type: "file",
											onChange: handleFileTemplate,
											accept: ".pdf,.doc,.docx",
											class: "mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
										}, null, 32),
										createVNode("p", { class: "text-xs text-gray-500 mt-1" }, "PDF, DOC, DOCX (max 5MB)")
									])]),
									createVNode("div", { class: "flex justify-end gap-3 pt-4" }, [createVNode("button", {
										type: "button",
										onClick: ($event) => showModal.value = false,
										class: "btn-secondary"
									}, "Batal", 8, ["onClick"]), createVNode("button", {
										type: "submit",
										class: "btn-primary"
									}, toDisplayString(isEditing.value ? "Update" : "Simpan") + " Template", 1)])
								], 32)];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div>`);
					} else return [createVNode("div", { class: "space-y-6" }, [
						createVNode("div", { class: "flex justify-between items-center" }, [createVNode("h1", { class: "text-2xl font-bold text-gray-900" }, "Kelola Template Undangan"), createVNode("button", {
							onClick: ($event) => showModal.value = true,
							class: "btn-primary"
						}, [createVNode("i", { class: "fas fa-plus mr-2" }), createTextVNode("Tambah Template Baru ")], 8, ["onClick"])]),
						createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-4" }, [
							createVNode("div", { class: "bg-white rounded-lg shadow p-4" }, [createVNode("div", { class: "text-sm text-gray-500" }, "Total Template"), createVNode("div", { class: "text-2xl font-bold text-blue-600" }, toDisplayString(__props.templates.length), 1)]),
							createVNode("div", { class: "bg-white rounded-lg shadow p-4" }, [createVNode("div", { class: "text-sm text-gray-500" }, "Template Aktif"), createVNode("div", { class: "text-2xl font-bold text-green-600" }, toDisplayString(__props.templates.filter((t) => t.is_active).length), 1)]),
							createVNode("div", { class: "bg-white rounded-lg shadow p-4" }, [createVNode("div", { class: "text-sm text-gray-500" }, "Kategori Tersedia"), createVNode("div", { class: "text-2xl font-bold text-purple-600" }, toDisplayString(uniqueCategories.value.length), 1)])
						]),
						createVNode("div", { class: "bg-white rounded-lg shadow p-4" }, [createVNode("div", { class: "flex gap-4 flex-wrap" }, [withDirectives(createVNode("input", {
							"onUpdate:modelValue": ($event) => search.value = $event,
							type: "text",
							placeholder: "Cari template...",
							class: "flex-1 min-w-[200px] px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
						}, null, 8, ["onUpdate:modelValue"]), [[vModelText, search.value]]), withDirectives(createVNode("select", {
							"onUpdate:modelValue": ($event) => filterCategory.value = $event,
							class: "px-4 py-2 border rounded-lg"
						}, [createVNode("option", { value: "" }, "Semua Kategori"), (openBlock(true), createBlock(Fragment, null, renderList(uniqueCategories.value, (cat) => {
							return openBlock(), createBlock("option", {
								key: cat,
								value: cat
							}, toDisplayString(cat), 9, ["value"]);
						}), 128))], 8, ["onUpdate:modelValue"]), [[vModelSelect, filterCategory.value]])])]),
						createVNode("div", { class: "bg-white rounded-lg shadow overflow-hidden" }, [createVNode("table", { class: "min-w-full divide-y divide-gray-200" }, [createVNode("thead", { class: "bg-gray-50" }, [createVNode("tr", null, [
							createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase" }, "Nama Template"),
							createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase" }, "Kategori"),
							createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase" }, "Warna Tema"),
							createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase" }, "Preview"),
							createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase" }, "Status"),
							createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase" }, "Aksi")
						])]), createVNode("tbody", { class: "bg-white divide-y divide-gray-200" }, [(openBlock(true), createBlock(Fragment, null, renderList(filteredTemplates.value, (tpl) => {
							return openBlock(), createBlock("tr", { key: tpl.id }, [
								createVNode("td", { class: "px-6 py-4" }, [createVNode("div", { class: "font-medium text-gray-900" }, toDisplayString(tpl.nama), 1), createVNode("div", { class: "text-sm text-gray-500 truncate max-w-xs" }, toDisplayString(tpl.deskripsi), 1)]),
								createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [createVNode("span", { class: "px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-800" }, toDisplayString(tpl.kategori), 1)]),
								createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [tpl.warna_tema ? (openBlock(), createBlock("div", {
									key: 0,
									class: "flex items-center gap-2"
								}, [createVNode("div", {
									class: "w-6 h-6 rounded border",
									style: { backgroundColor: tpl.warna_tema }
								}, null, 4), createVNode("span", { class: "text-sm text-gray-600" }, toDisplayString(tpl.warna_tema), 1)])) : createCommentVNode("", true)]),
								createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [tpl.preview_image ? (openBlock(), createBlock("img", {
									key: 0,
									src: `/storage/${tpl.preview_image}`,
									alt: tpl.nama,
									class: "h-16 w-24 object-cover rounded border"
								}, null, 8, ["src", "alt"])) : (openBlock(), createBlock("span", {
									key: 1,
									class: "text-gray-400 text-sm"
								}, "Tidak ada preview"))]),
								createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [createVNode("span", { class: [getStatusClass(tpl.is_active), "px-2 py-1 text-xs rounded-full"] }, toDisplayString(tpl.is_active ? "Aktif" : "Nonaktif"), 3)]),
								createVNode("td", { class: "px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2" }, [
									createVNode("button", {
										onClick: ($event) => toggleActive(tpl),
										title: tpl.is_active ? "Nonaktifkan" : "Aktifkan",
										class: "text-blue-600 hover:text-blue-900"
									}, [createVNode("i", { class: tpl.is_active ? "fas fa-toggle-on" : "fas fa-toggle-off" }, null, 2)], 8, ["onClick", "title"]),
									createVNode("button", {
										onClick: ($event) => editTemplate(tpl),
										class: "text-yellow-600 hover:text-yellow-900",
										title: "Edit"
									}, [createVNode("i", { class: "fas fa-edit" })], 8, ["onClick"]),
									createVNode("button", {
										onClick: ($event) => deleteTemplate(tpl.id),
										class: "text-red-600 hover:text-red-900",
										title: "Hapus"
									}, [createVNode("i", { class: "fas fa-trash" })], 8, ["onClick"])
								])
							]);
						}), 128)), filteredTemplates.value.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [createVNode("td", {
							colspan: "6",
							class: "px-6 py-8 text-center text-gray-500"
						}, " Tidak ada template yang ditemukan ")])) : createCommentVNode("", true)])])]),
						createVNode(_sfc_main$1, {
							show: showModal.value,
							onClose: ($event) => showModal.value = false,
							"max-width": "2xl"
						}, {
							default: withCtx(() => [createVNode("form", {
								onSubmit: withModifiers(submitForm, ["prevent"]),
								class: "p-6 space-y-4"
							}, [
								createVNode("h2", { class: "text-xl font-bold" }, toDisplayString(isEditing.value ? "Edit" : "Tambah") + " Template Undangan", 1),
								createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, [createTextVNode("Nama Template "), createVNode("span", { class: "text-red-500" }, "*")]), withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => form.value.nama = $event,
									type: "text",
									required: "",
									class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.nama]])]), createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, [createTextVNode("Kategori "), createVNode("span", { class: "text-red-500" }, "*")]), withDirectives(createVNode("select", {
									"onUpdate:modelValue": ($event) => form.value.kategori = $event,
									required: "",
									class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								}, [
									createVNode("option", { value: "" }, "Pilih Kategori"),
									createVNode("option", { value: "Pengajian Rutin" }, "Pengajian Rutin"),
									createVNode("option", { value: "Maulid/Isra Mi'raj" }, "Maulid/Isra Mi'raj"),
									createVNode("option", { value: "Rapat Ta'mir" }, "Rapat Ta'mir"),
									createVNode("option", { value: "Halal Bihalal" }, "Halal Bihalal"),
									createVNode("option", { value: "Kajian Akbar" }, "Kajian Akbar"),
									createVNode("option", { value: "Pernikahan" }, "Pernikahan"),
									createVNode("option", { value: "Khitanan" }, "Khitanan"),
									createVNode("option", { value: "Tahlilan" }, "Tahlilan"),
									createVNode("option", { value: "Lainnya" }, "Lainnya")
								], 8, ["onUpdate:modelValue"]), [[vModelSelect, form.value.kategori]])])]),
								createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Deskripsi"), withDirectives(createVNode("textarea", {
									"onUpdate:modelValue": ($event) => form.value.deskripsi = $event,
									rows: "3",
									class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.deskripsi]])]),
								createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Warna Tema"), createVNode("div", { class: "flex gap-2 mt-1" }, [withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => form.value.warna_tema = $event,
									type: "color",
									class: "h-10 w-16 rounded border cursor-pointer"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.warna_tema]]), withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => form.value.warna_tema = $event,
									type: "text",
									placeholder: "#000000",
									class: "flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.warna_tema]])])]), createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Status"), createVNode("div", { class: "mt-2" }, [createVNode("label", { class: "inline-flex items-center" }, [withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => form.value.is_active = $event,
									type: "checkbox",
									class: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelCheckbox, form.value.is_active]]), createVNode("span", { class: "ml-2 text-sm text-gray-700" }, "Aktif")])])])]),
								createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Preview Image"),
									createVNode("input", {
										type: "file",
										onChange: handlePreviewImage,
										accept: "image/*",
										class: "mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
									}, null, 32),
									createVNode("p", { class: "text-xs text-gray-500 mt-1" }, "JPEG, PNG, GIF (max 2MB)")
								]), createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "File Template"),
									createVNode("input", {
										type: "file",
										onChange: handleFileTemplate,
										accept: ".pdf,.doc,.docx",
										class: "mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
									}, null, 32),
									createVNode("p", { class: "text-xs text-gray-500 mt-1" }, "PDF, DOC, DOCX (max 5MB)")
								])]),
								createVNode("div", { class: "flex justify-end gap-3 pt-4" }, [createVNode("button", {
									type: "button",
									onClick: ($event) => showModal.value = false,
									class: "btn-secondary"
								}, "Batal", 8, ["onClick"]), createVNode("button", {
									type: "submit",
									class: "btn-primary"
								}, toDisplayString(isEditing.value ? "Update" : "Simpan") + " Template", 1)])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/InvitationTemplates/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
