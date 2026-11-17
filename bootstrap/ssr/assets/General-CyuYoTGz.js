import { t as AdminLayout_default } from "./AdminLayout-JKKJHCcy.js";
import { createBlock, createCommentVNode, createVNode, mergeProps, openBlock, ref, toDisplayString, useSSRContext, vModelText, withCtx, withDirectives, withModifiers } from "vue";
import { router } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
//#region resources/js/Pages/Settings/General.vue
var _sfc_main = {
	__name: "General",
	__ssrInlineRender: true,
	props: { settings: Object },
	setup(__props) {
		const props = __props;
		const form = ref({
			nama_masjid: props.settings?.nama_masjid || "",
			nama_tamir: props.settings?.nama_tamir || "",
			alamat: props.settings?.alamat || "",
			kota: props.settings?.kota || "",
			provinsi: props.settings?.provinsi || "",
			kode_pos: props.settings?.kode_pos || "",
			no_telepon: props.settings?.no_telepon || "",
			email: props.settings?.email || "",
			logo_url: props.settings?.logo_url || "",
			kop_surat: props.settings?.kop_surat || "",
			kota_sholat: props.settings?.kota_sholat || "",
			latitude: props.settings?.latitude || "",
			longitude: props.settings?.longitude || "",
			warna_tema: props.settings?.warna_tema || "#3B82F6"
		});
		const handleLogoUpload = (event) => {
			const file = event.target.files[0];
			if (file) console.log("Logo uploaded:", file.name);
		};
		const submitForm = () => {
			router.post(route("settings.general.update"), form.value, { onSuccess: () => {} });
		};
		const resetForm = () => {
			form.value = {
				nama_masjid: props.settings?.nama_masjid || "",
				nama_tamir: props.settings?.nama_tamir || "",
				alamat: props.settings?.alamat || "",
				kota: props.settings?.kota || "",
				provinsi: props.settings?.provinsi || "",
				kode_pos: props.settings?.kode_pos || "",
				no_telepon: props.settings?.no_telepon || "",
				email: props.settings?.email || "",
				logo_url: props.settings?.logo_url || "",
				kop_surat: props.settings?.kop_surat || "",
				kota_sholat: props.settings?.kota_sholat || "",
				latitude: props.settings?.latitude || "",
				longitude: props.settings?.longitude || "",
				warna_tema: props.settings?.warna_tema || "#3B82F6"
			};
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(AdminLayout_default, mergeProps({ title: "Pengaturan Umum" }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="space-y-6"${_scopeId}><div class="border-b pb-4"${_scopeId}><h1 class="text-2xl font-bold text-gray-900"${_scopeId}>Pengaturan Umum</h1><p class="text-gray-600 mt-1"${_scopeId}>Konfigurasi dasar sistem manajemen masjid</p></div><form class="bg-white rounded-lg shadow p-6 space-y-6"${_scopeId}><div class="grid grid-cols-1 md:grid-cols-2 gap-6"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Nama Masjid</label><input${ssrRenderAttr("value", form.value.nama_masjid)} type="text" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Nama Ta&#39;mir/Pengurus</label><input${ssrRenderAttr("value", form.value.nama_tamir)} type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Alamat Lengkap</label><textarea rows="3" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}>${ssrInterpolate(form.value.alamat)}</textarea></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Kota/Kabupaten</label><input${ssrRenderAttr("value", form.value.kota)} type="text" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Provinsi</label><input${ssrRenderAttr("value", form.value.provinsi)} type="text" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Kode Pos</label><input${ssrRenderAttr("value", form.value.kode_pos)} type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>No. Telepon</label><input${ssrRenderAttr("value", form.value.no_telepon)} type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Email</label><input${ssrRenderAttr("value", form.value.email)} type="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Logo Masjid</label><div class="mt-1 flex items-center space-x-4"${_scopeId}>`);
						if (form.value.logo_url) _push(`<img${ssrRenderAttr("src", form.value.logo_url)} alt="Logo" class="h-20 w-20 object-contain"${_scopeId}>`);
						else _push(`<!---->`);
						_push(`<input type="file" accept="image/*" class="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div><p class="text-xs text-gray-500 mt-1"${_scopeId}>Format: PNG, JPG. Ukuran max: 2MB</p></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Template Kop Surat</label><textarea rows="4" placeholder="Template kop surat untuk dokumen resmi..." class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}>${ssrInterpolate(form.value.kop_surat)}</textarea><p class="text-xs text-gray-500 mt-1"${_scopeId}>Gunakan variabel: {nama_masjid}, {alamat}, {no_telepon}, {email}</p></div><div class="border-t pt-6"${_scopeId}><h3 class="text-lg font-medium mb-4"${_scopeId}>Jadwal Sholat</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Kota (untuk jadwal sholat)</label><input${ssrRenderAttr("value", form.value.kota_sholat)} type="text" placeholder="Contoh: Jakarta" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}><p class="text-xs text-gray-500 mt-1"${_scopeId}>Nama kota sesuai API myquran.com</p></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Atau Koordinat</label><div class="grid grid-cols-2 gap-2"${_scopeId}><input${ssrRenderAttr("value", form.value.latitude)} type="text" placeholder="Latitude (-6.2088)" class="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}><input${ssrRenderAttr("value", form.value.longitude)} type="text" placeholder="Longitude (106.8456)" class="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div></div></div></div><div class="border-t pt-6"${_scopeId}><h3 class="text-lg font-medium mb-4"${_scopeId}>Tampilan</h3><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Warna Tema Utama</label><div class="flex items-center space-x-3 mt-2"${_scopeId}><input${ssrRenderAttr("value", form.value.warna_tema)} type="color" class="h-10 w-20 rounded-md border-gray-300 shadow-sm"${_scopeId}><span class="text-sm text-gray-600"${_scopeId}>${ssrInterpolate(form.value.warna_tema)}</span></div></div></div><div class="flex justify-end space-x-3 pt-6 border-t"${_scopeId}><button type="button" class="btn-secondary"${_scopeId}>Reset</button><button type="submit" class="btn-primary"${_scopeId}>Simpan Pengaturan</button></div></form></div>`);
					} else return [createVNode("div", { class: "space-y-6" }, [createVNode("div", { class: "border-b pb-4" }, [createVNode("h1", { class: "text-2xl font-bold text-gray-900" }, "Pengaturan Umum"), createVNode("p", { class: "text-gray-600 mt-1" }, "Konfigurasi dasar sistem manajemen masjid")]), createVNode("form", {
						onSubmit: withModifiers(submitForm, ["prevent"]),
						class: "bg-white rounded-lg shadow p-6 space-y-6"
					}, [
						createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Nama Masjid"), withDirectives(createVNode("input", {
							"onUpdate:modelValue": ($event) => form.value.nama_masjid = $event,
							type: "text",
							required: "",
							class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
						}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.nama_masjid]])]), createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Nama Ta'mir/Pengurus"), withDirectives(createVNode("input", {
							"onUpdate:modelValue": ($event) => form.value.nama_tamir = $event,
							type: "text",
							class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
						}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.nama_tamir]])])]),
						createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Alamat Lengkap"), withDirectives(createVNode("textarea", {
							"onUpdate:modelValue": ($event) => form.value.alamat = $event,
							rows: "3",
							required: "",
							class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
						}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.alamat]])]),
						createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-6" }, [
							createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Kota/Kabupaten"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => form.value.kota = $event,
								type: "text",
								required: "",
								class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.kota]])]),
							createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Provinsi"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => form.value.provinsi = $event,
								type: "text",
								required: "",
								class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.provinsi]])]),
							createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Kode Pos"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => form.value.kode_pos = $event,
								type: "text",
								class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.kode_pos]])])
						]),
						createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "No. Telepon"), withDirectives(createVNode("input", {
							"onUpdate:modelValue": ($event) => form.value.no_telepon = $event,
							type: "text",
							class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
						}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.no_telepon]])]), createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Email"), withDirectives(createVNode("input", {
							"onUpdate:modelValue": ($event) => form.value.email = $event,
							type: "email",
							class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
						}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.email]])])]),
						createVNode("div", null, [
							createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Logo Masjid"),
							createVNode("div", { class: "mt-1 flex items-center space-x-4" }, [form.value.logo_url ? (openBlock(), createBlock("img", {
								key: 0,
								src: form.value.logo_url,
								alt: "Logo",
								class: "h-20 w-20 object-contain"
							}, null, 8, ["src"])) : createCommentVNode("", true), createVNode("input", {
								type: "file",
								onChange: handleLogoUpload,
								accept: "image/*",
								class: "flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							}, null, 32)]),
							createVNode("p", { class: "text-xs text-gray-500 mt-1" }, "Format: PNG, JPG. Ukuran max: 2MB")
						]),
						createVNode("div", null, [
							createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Template Kop Surat"),
							withDirectives(createVNode("textarea", {
								"onUpdate:modelValue": ($event) => form.value.kop_surat = $event,
								rows: "4",
								placeholder: "Template kop surat untuk dokumen resmi...",
								class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.kop_surat]]),
							createVNode("p", { class: "text-xs text-gray-500 mt-1" }, "Gunakan variabel: {nama_masjid}, {alamat}, {no_telepon}, {email}")
						]),
						createVNode("div", { class: "border-t pt-6" }, [createVNode("h3", { class: "text-lg font-medium mb-4" }, "Jadwal Sholat"), createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [createVNode("div", null, [
							createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Kota (untuk jadwal sholat)"),
							withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => form.value.kota_sholat = $event,
								type: "text",
								placeholder: "Contoh: Jakarta",
								class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.kota_sholat]]),
							createVNode("p", { class: "text-xs text-gray-500 mt-1" }, "Nama kota sesuai API myquran.com")
						]), createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Atau Koordinat"), createVNode("div", { class: "grid grid-cols-2 gap-2" }, [withDirectives(createVNode("input", {
							"onUpdate:modelValue": ($event) => form.value.latitude = $event,
							type: "text",
							placeholder: "Latitude (-6.2088)",
							class: "rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
						}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.latitude]]), withDirectives(createVNode("input", {
							"onUpdate:modelValue": ($event) => form.value.longitude = $event,
							type: "text",
							placeholder: "Longitude (106.8456)",
							class: "rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
						}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.longitude]])])])])]),
						createVNode("div", { class: "border-t pt-6" }, [createVNode("h3", { class: "text-lg font-medium mb-4" }, "Tampilan"), createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Warna Tema Utama"), createVNode("div", { class: "flex items-center space-x-3 mt-2" }, [withDirectives(createVNode("input", {
							"onUpdate:modelValue": ($event) => form.value.warna_tema = $event,
							type: "color",
							class: "h-10 w-20 rounded-md border-gray-300 shadow-sm"
						}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.warna_tema]]), createVNode("span", { class: "text-sm text-gray-600" }, toDisplayString(form.value.warna_tema), 1)])])]),
						createVNode("div", { class: "flex justify-end space-x-3 pt-6 border-t" }, [createVNode("button", {
							type: "button",
							onClick: resetForm,
							class: "btn-secondary"
						}, "Reset"), createVNode("button", {
							type: "submit",
							class: "btn-primary"
						}, "Simpan Pengaturan")])
					], 32)])];
				}),
				_: 1
			}, _parent));
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Settings/General.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
