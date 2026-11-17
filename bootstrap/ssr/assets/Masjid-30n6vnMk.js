import { t as AdminLayout_default } from "./AdminLayout-JKKJHCcy.js";
import { createBlock, createCommentVNode, createVNode, mergeProps, openBlock, ref, useSSRContext, vModelText, withCtx, withDirectives, withModifiers } from "vue";
import { router } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
//#region resources/js/Pages/Settings/Masjid.vue
var _sfc_main = {
	__name: "Masjid",
	__ssrInlineRender: true,
	props: { settings: Object },
	setup(__props) {
		const props = __props;
		const form = ref({
			nama_masjid: props.settings?.nama_masjid || "",
			nama_tamir: props.settings?.nama_tamir || "",
			sejarah: props.settings?.sejarah || "",
			alamat: props.settings?.alamat || "",
			kelurahan: props.settings?.kelurahan || "",
			kecamatan: props.settings?.kecamatan || "",
			kota: props.settings?.kota || "",
			provinsi: props.settings?.provinsi || "",
			kode_pos: props.settings?.kode_pos || "",
			latitude: props.settings?.latitude || "",
			longitude: props.settings?.longitude || "",
			no_telepon: props.settings?.no_telepon || "",
			email: props.settings?.email || "",
			website: props.settings?.website || "",
			facebook: props.settings?.facebook || "",
			instagram: props.settings?.instagram || "",
			twitter: props.settings?.twitter || "",
			youtube: props.settings?.youtube || "",
			tiktok: props.settings?.tiktok || "",
			whatsapp_group: props.settings?.whatsapp_group || "",
			logo_url: props.settings?.logo_url || "",
			foto_url: props.settings?.foto_url || "",
			jam_buka: props.settings?.jam_buka || "04:00",
			jam_tutup: props.settings?.jam_tutup || "22:00"
		});
		const handleLogoUpload = (event) => {
			const file = event.target.files[0];
			if (file) console.log("Logo uploaded:", file.name);
		};
		const handleFotoUpload = (event) => {
			const file = event.target.files[0];
			if (file) console.log("Foto uploaded:", file.name);
		};
		const submitForm = () => {
			router.post(route("settings.masjid.update"), form.value, { onSuccess: () => {} });
		};
		const resetForm = () => {
			form.value = {
				nama_masjid: props.settings?.nama_masjid || "",
				nama_tamir: props.settings?.nama_tamir || "",
				sejarah: props.settings?.sejarah || "",
				alamat: props.settings?.alamat || "",
				kelurahan: props.settings?.kelurahan || "",
				kecamatan: props.settings?.kecamatan || "",
				kota: props.settings?.kota || "",
				provinsi: props.settings?.provinsi || "",
				kode_pos: props.settings?.kode_pos || "",
				latitude: props.settings?.latitude || "",
				longitude: props.settings?.longitude || "",
				no_telepon: props.settings?.no_telepon || "",
				email: props.settings?.email || "",
				website: props.settings?.website || "",
				facebook: props.settings?.facebook || "",
				instagram: props.settings?.instagram || "",
				twitter: props.settings?.twitter || "",
				youtube: props.settings?.youtube || "",
				tiktok: props.settings?.tiktok || "",
				whatsapp_group: props.settings?.whatsapp_group || "",
				logo_url: props.settings?.logo_url || "",
				foto_url: props.settings?.foto_url || "",
				jam_buka: props.settings?.jam_buka || "04:00",
				jam_tutup: props.settings?.jam_tutup || "22:00"
			};
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(AdminLayout_default, mergeProps({ title: "Profil Masjid" }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="space-y-6"${_scopeId}><div class="border-b pb-4"${_scopeId}><h1 class="text-2xl font-bold text-gray-900"${_scopeId}>Profil Masjid</h1><p class="text-gray-600 mt-1"${_scopeId}>Informasi detail masjid dan kontak pengurus</p></div><form class="bg-white rounded-lg shadow p-6 space-y-6"${_scopeId}><div class="border-b pb-4"${_scopeId}><h3 class="text-lg font-medium mb-4"${_scopeId}>Informasi Dasar</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Nama Masjid</label><input${ssrRenderAttr("value", form.value.nama_masjid)} type="text" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Nama Ta&#39;mir/Ketua</label><input${ssrRenderAttr("value", form.value.nama_tamir)} type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div></div><div class="mt-4"${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Sejarah Singkat</label><textarea rows="4" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}>${ssrInterpolate(form.value.sejarah)}</textarea></div></div><div class="border-b pb-4"${_scopeId}><h3 class="text-lg font-medium mb-4"${_scopeId}>Alamat &amp; Lokasi</h3><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Alamat Lengkap</label><textarea rows="3" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}>${ssrInterpolate(form.value.alamat)}</textarea></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Kelurahan</label><input${ssrRenderAttr("value", form.value.kelurahan)} type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Kecamatan</label><input${ssrRenderAttr("value", form.value.kecamatan)} type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Kota/Kabupaten</label><input${ssrRenderAttr("value", form.value.kota)} type="text" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Provinsi</label><input${ssrRenderAttr("value", form.value.provinsi)} type="text" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Kode Pos</label><input${ssrRenderAttr("value", form.value.kode_pos)} type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Latitude</label><input${ssrRenderAttr("value", form.value.latitude)} type="text" placeholder="-6.2088" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Longitude</label><input${ssrRenderAttr("value", form.value.longitude)} type="text" placeholder="106.8456" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div></div></div><div class="border-b pb-4"${_scopeId}><h3 class="text-lg font-medium mb-4"${_scopeId}>Kontak</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>No. Telepon</label><input${ssrRenderAttr("value", form.value.no_telepon)} type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Email</label><input${ssrRenderAttr("value", form.value.email)} type="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div></div><div class="mt-4"${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Website</label><input${ssrRenderAttr("value", form.value.website)} type="url" placeholder="https://masjidcontoh.com" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div></div><div class="border-b pb-4"${_scopeId}><h3 class="text-lg font-medium mb-4"${_scopeId}>Social Media</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Facebook</label><input${ssrRenderAttr("value", form.value.facebook)} type="url" placeholder="https://facebook.com/masjid" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Instagram</label><input${ssrRenderAttr("value", form.value.instagram)} type="url" placeholder="https://instagram.com/masjid" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Twitter/X</label><input${ssrRenderAttr("value", form.value.twitter)} type="url" placeholder="https://twitter.com/masjid" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>YouTube</label><input${ssrRenderAttr("value", form.value.youtube)} type="url" placeholder="https://youtube.com/@masjid" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>TikTok</label><input${ssrRenderAttr("value", form.value.tiktok)} type="url" placeholder="https://tiktok.com/@masjid" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>WhatsApp Group</label><input${ssrRenderAttr("value", form.value.whatsapp_group)} type="url" placeholder="Link grup WhatsApp jamaah" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div></div></div><div${_scopeId}><h3 class="text-lg font-medium mb-4"${_scopeId}>Logo &amp; Foto Masjid</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Logo Masjid</label><div class="mt-1"${_scopeId}>`);
						if (form.value.logo_url) _push(`<img${ssrRenderAttr("src", form.value.logo_url)} alt="Logo" class="h-20 w-20 object-contain mb-2"${_scopeId}>`);
						else _push(`<!---->`);
						_push(`<input type="file" accept="image/*" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"${_scopeId}></div></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Foto Masjid</label><div class="mt-1"${_scopeId}>`);
						if (form.value.foto_url) _push(`<img${ssrRenderAttr("src", form.value.foto_url)} alt="Foto Masjid" class="h-20 w-32 object-cover mb-2"${_scopeId}>`);
						else _push(`<!---->`);
						_push(`<input type="file" accept="image/*" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"${_scopeId}></div></div></div></div><div${_scopeId}><h3 class="text-lg font-medium mb-4"${_scopeId}>Jam Operasional</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Buka Dari</label><input${ssrRenderAttr("value", form.value.jam_buka)} type="time" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Sampai</label><input${ssrRenderAttr("value", form.value.jam_tutup)} type="time" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div></div></div><div class="flex justify-end space-x-3 pt-6 border-t"${_scopeId}><button type="button" class="btn-secondary"${_scopeId}>Reset</button><button type="submit" class="btn-primary"${_scopeId}>Simpan Profil Masjid</button></div></form></div>`);
					} else return [createVNode("div", { class: "space-y-6" }, [createVNode("div", { class: "border-b pb-4" }, [createVNode("h1", { class: "text-2xl font-bold text-gray-900" }, "Profil Masjid"), createVNode("p", { class: "text-gray-600 mt-1" }, "Informasi detail masjid dan kontak pengurus")]), createVNode("form", {
						onSubmit: withModifiers(submitForm, ["prevent"]),
						class: "bg-white rounded-lg shadow p-6 space-y-6"
					}, [
						createVNode("div", { class: "border-b pb-4" }, [
							createVNode("h3", { class: "text-lg font-medium mb-4" }, "Informasi Dasar"),
							createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Nama Masjid"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => form.value.nama_masjid = $event,
								type: "text",
								required: "",
								class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.nama_masjid]])]), createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Nama Ta'mir/Ketua"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => form.value.nama_tamir = $event,
								type: "text",
								class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.nama_tamir]])])]),
							createVNode("div", { class: "mt-4" }, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Sejarah Singkat"), withDirectives(createVNode("textarea", {
								"onUpdate:modelValue": ($event) => form.value.sejarah = $event,
								rows: "4",
								class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.sejarah]])])
						]),
						createVNode("div", { class: "border-b pb-4" }, [
							createVNode("h3", { class: "text-lg font-medium mb-4" }, "Alamat & Lokasi"),
							createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Alamat Lengkap"), withDirectives(createVNode("textarea", {
								"onUpdate:modelValue": ($event) => form.value.alamat = $event,
								rows: "3",
								required: "",
								class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.alamat]])]),
							createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-6 mt-4" }, [
								createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Kelurahan"), withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => form.value.kelurahan = $event,
									type: "text",
									class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.kelurahan]])]),
								createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Kecamatan"), withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => form.value.kecamatan = $event,
									type: "text",
									class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.kecamatan]])]),
								createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Kota/Kabupaten"), withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => form.value.kota = $event,
									type: "text",
									required: "",
									class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.kota]])])
							]),
							createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6 mt-4" }, [createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Provinsi"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => form.value.provinsi = $event,
								type: "text",
								required: "",
								class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.provinsi]])]), createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Kode Pos"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => form.value.kode_pos = $event,
								type: "text",
								class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.kode_pos]])])]),
							createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6 mt-4" }, [createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Latitude"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => form.value.latitude = $event,
								type: "text",
								placeholder: "-6.2088",
								class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.latitude]])]), createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Longitude"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => form.value.longitude = $event,
								type: "text",
								placeholder: "106.8456",
								class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.longitude]])])])
						]),
						createVNode("div", { class: "border-b pb-4" }, [
							createVNode("h3", { class: "text-lg font-medium mb-4" }, "Kontak"),
							createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "No. Telepon"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => form.value.no_telepon = $event,
								type: "text",
								class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.no_telepon]])]), createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Email"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => form.value.email = $event,
								type: "email",
								class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.email]])])]),
							createVNode("div", { class: "mt-4" }, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Website"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => form.value.website = $event,
								type: "url",
								placeholder: "https://masjidcontoh.com",
								class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.website]])])
						]),
						createVNode("div", { class: "border-b pb-4" }, [createVNode("h3", { class: "text-lg font-medium mb-4" }, "Social Media"), createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
							createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Facebook"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => form.value.facebook = $event,
								type: "url",
								placeholder: "https://facebook.com/masjid",
								class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.facebook]])]),
							createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Instagram"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => form.value.instagram = $event,
								type: "url",
								placeholder: "https://instagram.com/masjid",
								class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.instagram]])]),
							createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Twitter/X"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => form.value.twitter = $event,
								type: "url",
								placeholder: "https://twitter.com/masjid",
								class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.twitter]])]),
							createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "YouTube"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => form.value.youtube = $event,
								type: "url",
								placeholder: "https://youtube.com/@masjid",
								class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.youtube]])]),
							createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "TikTok"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => form.value.tiktok = $event,
								type: "url",
								placeholder: "https://tiktok.com/@masjid",
								class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.tiktok]])]),
							createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "WhatsApp Group"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => form.value.whatsapp_group = $event,
								type: "url",
								placeholder: "Link grup WhatsApp jamaah",
								class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.whatsapp_group]])])
						])]),
						createVNode("div", null, [createVNode("h3", { class: "text-lg font-medium mb-4" }, "Logo & Foto Masjid"), createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Logo Masjid"), createVNode("div", { class: "mt-1" }, [form.value.logo_url ? (openBlock(), createBlock("img", {
							key: 0,
							src: form.value.logo_url,
							alt: "Logo",
							class: "h-20 w-20 object-contain mb-2"
						}, null, 8, ["src"])) : createCommentVNode("", true), createVNode("input", {
							type: "file",
							onChange: handleLogoUpload,
							accept: "image/*",
							class: "block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
						}, null, 32)])]), createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Foto Masjid"), createVNode("div", { class: "mt-1" }, [form.value.foto_url ? (openBlock(), createBlock("img", {
							key: 0,
							src: form.value.foto_url,
							alt: "Foto Masjid",
							class: "h-20 w-32 object-cover mb-2"
						}, null, 8, ["src"])) : createCommentVNode("", true), createVNode("input", {
							type: "file",
							onChange: handleFotoUpload,
							accept: "image/*",
							class: "block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
						}, null, 32)])])])]),
						createVNode("div", null, [createVNode("h3", { class: "text-lg font-medium mb-4" }, "Jam Operasional"), createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Buka Dari"), withDirectives(createVNode("input", {
							"onUpdate:modelValue": ($event) => form.value.jam_buka = $event,
							type: "time",
							class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
						}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.jam_buka]])]), createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Sampai"), withDirectives(createVNode("input", {
							"onUpdate:modelValue": ($event) => form.value.jam_tutup = $event,
							type: "time",
							class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
						}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.jam_tutup]])])])]),
						createVNode("div", { class: "flex justify-end space-x-3 pt-6 border-t" }, [createVNode("button", {
							type: "button",
							onClick: resetForm,
							class: "btn-secondary"
						}, "Reset"), createVNode("button", {
							type: "submit",
							class: "btn-primary"
						}, "Simpan Profil Masjid")])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Settings/Masjid.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
