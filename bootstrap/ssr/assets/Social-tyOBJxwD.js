import { t as AdminLayout_default } from "./AdminLayout-JKKJHCcy.js";
import { createBlock, createCommentVNode, createTextVNode, createVNode, mergeProps, openBlock, ref, useSSRContext, vModelCheckbox, vModelText, withCtx, withDirectives, withModifiers } from "vue";
import { router } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
//#region resources/js/Pages/Settings/Social.vue
var _sfc_main = {
	__name: "Social",
	__ssrInlineRender: true,
	props: { settings: Object },
	setup(__props) {
		const props = __props;
		const form = ref({
			facebook: props.settings?.facebook || "",
			instagram: props.settings?.instagram || "",
			twitter: props.settings?.twitter || "",
			youtube: props.settings?.youtube || "",
			tiktok: props.settings?.tiktok || "",
			whatsapp_group: props.settings?.whatsapp_group || "",
			website: props.settings?.website || "",
			telegram: props.settings?.telegram || "",
			linkedin: props.settings?.linkedin || "",
			google_maps: props.settings?.google_maps || "",
			enable_wa_broadcast: props.settings?.enable_wa_broadcast || false,
			enable_email_broadcast: props.settings?.enable_email_broadcast || false,
			auto_post_facebook: props.settings?.auto_post_facebook || false,
			auto_post_instagram: props.settings?.auto_post_instagram || false,
			fb_access_token: props.settings?.fb_access_token || "",
			ig_access_token: props.settings?.ig_access_token || "",
			yt_api_key: props.settings?.yt_api_key || ""
		});
		const submitForm = () => {
			router.post(route("settings.social.update"), form.value, { onSuccess: () => {} });
		};
		const resetForm = () => {
			form.value = {
				facebook: props.settings?.facebook || "",
				instagram: props.settings?.instagram || "",
				twitter: props.settings?.twitter || "",
				youtube: props.settings?.youtube || "",
				tiktok: props.settings?.tiktok || "",
				whatsapp_group: props.settings?.whatsapp_group || "",
				website: props.settings?.website || "",
				telegram: props.settings?.telegram || "",
				linkedin: props.settings?.linkedin || "",
				google_maps: props.settings?.google_maps || "",
				enable_wa_broadcast: props.settings?.enable_wa_broadcast || false,
				enable_email_broadcast: props.settings?.enable_email_broadcast || false,
				auto_post_facebook: props.settings?.auto_post_facebook || false,
				auto_post_instagram: props.settings?.auto_post_instagram || false,
				fb_access_token: props.settings?.fb_access_token || "",
				ig_access_token: props.settings?.ig_access_token || "",
				yt_api_key: props.settings?.yt_api_key || ""
			};
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(AdminLayout_default, mergeProps({ title: "Social Media" }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="space-y-6"${_scopeId}><div class="border-b pb-4"${_scopeId}><h1 class="text-2xl font-bold text-gray-900"${_scopeId}>Pengaturan Social Media</h1><p class="text-gray-600 mt-1"${_scopeId}>Kelola link dan integrasi sosial media masjid</p></div><form class="bg-white rounded-lg shadow p-6 space-y-6"${_scopeId}><div class="border-b pb-4"${_scopeId}><h3 class="text-lg font-medium mb-4"${_scopeId}>Social Media Utama</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}><i class="fab fa-facebook text-blue-600 mr-2"${_scopeId}></i>Facebook </label><input${ssrRenderAttr("value", form.value.facebook)} type="url" placeholder="https://facebook.com/namamasjid" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}><i class="fab fa-instagram text-pink-600 mr-2"${_scopeId}></i>Instagram </label><input${ssrRenderAttr("value", form.value.instagram)} type="url" placeholder="https://instagram.com/namamasjid" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}><i class="fab fa-twitter text-blue-400 mr-2"${_scopeId}></i>Twitter/X </label><input${ssrRenderAttr("value", form.value.twitter)} type="url" placeholder="https://twitter.com/namamasjid" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}><i class="fab fa-youtube text-red-600 mr-2"${_scopeId}></i>YouTube </label><input${ssrRenderAttr("value", form.value.youtube)} type="url" placeholder="https://youtube.com/@namamasjid" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}><i class="fab fa-tiktok text-gray-800 mr-2"${_scopeId}></i>TikTok </label><input${ssrRenderAttr("value", form.value.tiktok)} type="url" placeholder="https://tiktok.com/@namamasjid" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}><i class="fab fa-whatsapp text-green-600 mr-2"${_scopeId}></i>WhatsApp Group </label><input${ssrRenderAttr("value", form.value.whatsapp_group)} type="url" placeholder="https://chat.whatsapp.com/..." class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div></div></div><div class="border-b pb-4"${_scopeId}><h3 class="text-lg font-medium mb-4"${_scopeId}>Link Tambahan</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Website Resmi</label><input${ssrRenderAttr("value", form.value.website)} type="url" placeholder="https://masjidcontoh.com" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Telegram Channel</label><input${ssrRenderAttr("value", form.value.telegram)} type="url" placeholder="https://t.me/namachannel" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>LinkedIn</label><input${ssrRenderAttr("value", form.value.linkedin)} type="url" placeholder="https://linkedin.com/company/namamasjid" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Google Maps Link</label><input${ssrRenderAttr("value", form.value.google_maps)} type="url" placeholder="https://maps.google.com/..." class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div></div></div><div class="border-b pb-4"${_scopeId}><h3 class="text-lg font-medium mb-4"${_scopeId}>Pengaturan Broadcast</h3><div class="space-y-4"${_scopeId}><div${_scopeId}><label class="flex items-center"${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(form.value.enable_wa_broadcast) ? ssrLooseContain(form.value.enable_wa_broadcast, null) : form.value.enable_wa_broadcast) ? " checked" : ""} type="checkbox" class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}><span class="ml-2 text-sm text-gray-700"${_scopeId}>Aktifkan Broadcast WhatsApp untuk Pengumuman</span></label></div><div${_scopeId}><label class="flex items-center"${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(form.value.enable_email_broadcast) ? ssrLooseContain(form.value.enable_email_broadcast, null) : form.value.enable_email_broadcast) ? " checked" : ""} type="checkbox" class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}><span class="ml-2 text-sm text-gray-700"${_scopeId}>Aktifkan Broadcast Email untuk Pengumuman</span></label></div><div${_scopeId}><label class="flex items-center"${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(form.value.auto_post_facebook) ? ssrLooseContain(form.value.auto_post_facebook, null) : form.value.auto_post_facebook) ? " checked" : ""} type="checkbox" class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}><span class="ml-2 text-sm text-gray-700"${_scopeId}>Auto-post pengumuman ke Facebook</span></label></div><div${_scopeId}><label class="flex items-center"${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(form.value.auto_post_instagram) ? ssrLooseContain(form.value.auto_post_instagram, null) : form.value.auto_post_instagram) ? " checked" : ""} type="checkbox" class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}><span class="ml-2 text-sm text-gray-700"${_scopeId}>Auto-post pengumuman ke Instagram</span></label></div></div></div><div${_scopeId}><h3 class="text-lg font-medium mb-4"${_scopeId}>API Integration (Opsional)</h3><div class="space-y-4"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Facebook Page Access Token</label><input${ssrRenderAttr("value", form.value.fb_access_token)} type="password" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Instagram Basic Display Token</label><input${ssrRenderAttr("value", form.value.ig_access_token)} type="password" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>YouTube API Key</label><input${ssrRenderAttr("value", form.value.yt_api_key)} type="password" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div></div></div><div class="bg-gray-50 rounded-lg p-4"${_scopeId}><h3 class="text-lg font-medium mb-4"${_scopeId}>Preview Footer Website</h3><div class="flex flex-wrap gap-4"${_scopeId}>`);
						if (form.value.facebook) _push(`<a${ssrRenderAttr("href", form.value.facebook)} target="_blank" class="text-blue-600 hover:text-blue-800"${_scopeId}><i class="fab fa-facebook fa-lg"${_scopeId}></i></a>`);
						else _push(`<!---->`);
						if (form.value.instagram) _push(`<a${ssrRenderAttr("href", form.value.instagram)} target="_blank" class="text-pink-600 hover:text-pink-800"${_scopeId}><i class="fab fa-instagram fa-lg"${_scopeId}></i></a>`);
						else _push(`<!---->`);
						if (form.value.twitter) _push(`<a${ssrRenderAttr("href", form.value.twitter)} target="_blank" class="text-blue-400 hover:text-blue-600"${_scopeId}><i class="fab fa-twitter fa-lg"${_scopeId}></i></a>`);
						else _push(`<!---->`);
						if (form.value.youtube) _push(`<a${ssrRenderAttr("href", form.value.youtube)} target="_blank" class="text-red-600 hover:text-red-800"${_scopeId}><i class="fab fa-youtube fa-lg"${_scopeId}></i></a>`);
						else _push(`<!---->`);
						if (form.value.tiktok) _push(`<a${ssrRenderAttr("href", form.value.tiktok)} target="_blank" class="text-gray-800 hover:text-gray-600"${_scopeId}><i class="fab fa-tiktok fa-lg"${_scopeId}></i></a>`);
						else _push(`<!---->`);
						if (form.value.whatsapp_group) _push(`<a${ssrRenderAttr("href", form.value.whatsapp_group)} target="_blank" class="text-green-600 hover:text-green-800"${_scopeId}><i class="fab fa-whatsapp fa-lg"${_scopeId}></i></a>`);
						else _push(`<!---->`);
						_push(`</div></div><div class="flex justify-end space-x-3 pt-6 border-t"${_scopeId}><button type="button" class="btn-secondary"${_scopeId}>Reset</button><button type="submit" class="btn-primary"${_scopeId}>Simpan Social Media</button></div></form></div>`);
					} else return [createVNode("div", { class: "space-y-6" }, [createVNode("div", { class: "border-b pb-4" }, [createVNode("h1", { class: "text-2xl font-bold text-gray-900" }, "Pengaturan Social Media"), createVNode("p", { class: "text-gray-600 mt-1" }, "Kelola link dan integrasi sosial media masjid")]), createVNode("form", {
						onSubmit: withModifiers(submitForm, ["prevent"]),
						class: "bg-white rounded-lg shadow p-6 space-y-6"
					}, [
						createVNode("div", { class: "border-b pb-4" }, [createVNode("h3", { class: "text-lg font-medium mb-4" }, "Social Media Utama"), createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
							createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, [createVNode("i", { class: "fab fa-facebook text-blue-600 mr-2" }), createTextVNode("Facebook ")]), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => form.value.facebook = $event,
								type: "url",
								placeholder: "https://facebook.com/namamasjid",
								class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.facebook]])]),
							createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, [createVNode("i", { class: "fab fa-instagram text-pink-600 mr-2" }), createTextVNode("Instagram ")]), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => form.value.instagram = $event,
								type: "url",
								placeholder: "https://instagram.com/namamasjid",
								class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.instagram]])]),
							createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, [createVNode("i", { class: "fab fa-twitter text-blue-400 mr-2" }), createTextVNode("Twitter/X ")]), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => form.value.twitter = $event,
								type: "url",
								placeholder: "https://twitter.com/namamasjid",
								class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.twitter]])]),
							createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, [createVNode("i", { class: "fab fa-youtube text-red-600 mr-2" }), createTextVNode("YouTube ")]), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => form.value.youtube = $event,
								type: "url",
								placeholder: "https://youtube.com/@namamasjid",
								class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.youtube]])]),
							createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, [createVNode("i", { class: "fab fa-tiktok text-gray-800 mr-2" }), createTextVNode("TikTok ")]), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => form.value.tiktok = $event,
								type: "url",
								placeholder: "https://tiktok.com/@namamasjid",
								class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.tiktok]])]),
							createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, [createVNode("i", { class: "fab fa-whatsapp text-green-600 mr-2" }), createTextVNode("WhatsApp Group ")]), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => form.value.whatsapp_group = $event,
								type: "url",
								placeholder: "https://chat.whatsapp.com/...",
								class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.whatsapp_group]])])
						])]),
						createVNode("div", { class: "border-b pb-4" }, [createVNode("h3", { class: "text-lg font-medium mb-4" }, "Link Tambahan"), createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
							createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Website Resmi"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => form.value.website = $event,
								type: "url",
								placeholder: "https://masjidcontoh.com",
								class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.website]])]),
							createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Telegram Channel"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => form.value.telegram = $event,
								type: "url",
								placeholder: "https://t.me/namachannel",
								class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.telegram]])]),
							createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "LinkedIn"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => form.value.linkedin = $event,
								type: "url",
								placeholder: "https://linkedin.com/company/namamasjid",
								class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.linkedin]])]),
							createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Google Maps Link"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => form.value.google_maps = $event,
								type: "url",
								placeholder: "https://maps.google.com/...",
								class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.google_maps]])])
						])]),
						createVNode("div", { class: "border-b pb-4" }, [createVNode("h3", { class: "text-lg font-medium mb-4" }, "Pengaturan Broadcast"), createVNode("div", { class: "space-y-4" }, [
							createVNode("div", null, [createVNode("label", { class: "flex items-center" }, [withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => form.value.enable_wa_broadcast = $event,
								type: "checkbox",
								class: "rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelCheckbox, form.value.enable_wa_broadcast]]), createVNode("span", { class: "ml-2 text-sm text-gray-700" }, "Aktifkan Broadcast WhatsApp untuk Pengumuman")])]),
							createVNode("div", null, [createVNode("label", { class: "flex items-center" }, [withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => form.value.enable_email_broadcast = $event,
								type: "checkbox",
								class: "rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelCheckbox, form.value.enable_email_broadcast]]), createVNode("span", { class: "ml-2 text-sm text-gray-700" }, "Aktifkan Broadcast Email untuk Pengumuman")])]),
							createVNode("div", null, [createVNode("label", { class: "flex items-center" }, [withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => form.value.auto_post_facebook = $event,
								type: "checkbox",
								class: "rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelCheckbox, form.value.auto_post_facebook]]), createVNode("span", { class: "ml-2 text-sm text-gray-700" }, "Auto-post pengumuman ke Facebook")])]),
							createVNode("div", null, [createVNode("label", { class: "flex items-center" }, [withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => form.value.auto_post_instagram = $event,
								type: "checkbox",
								class: "rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelCheckbox, form.value.auto_post_instagram]]), createVNode("span", { class: "ml-2 text-sm text-gray-700" }, "Auto-post pengumuman ke Instagram")])])
						])]),
						createVNode("div", null, [createVNode("h3", { class: "text-lg font-medium mb-4" }, "API Integration (Opsional)"), createVNode("div", { class: "space-y-4" }, [
							createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Facebook Page Access Token"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => form.value.fb_access_token = $event,
								type: "password",
								class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.fb_access_token]])]),
							createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Instagram Basic Display Token"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => form.value.ig_access_token = $event,
								type: "password",
								class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.ig_access_token]])]),
							createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "YouTube API Key"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => form.value.yt_api_key = $event,
								type: "password",
								class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.yt_api_key]])])
						])]),
						createVNode("div", { class: "bg-gray-50 rounded-lg p-4" }, [createVNode("h3", { class: "text-lg font-medium mb-4" }, "Preview Footer Website"), createVNode("div", { class: "flex flex-wrap gap-4" }, [
							form.value.facebook ? (openBlock(), createBlock("a", {
								key: 0,
								href: form.value.facebook,
								target: "_blank",
								class: "text-blue-600 hover:text-blue-800"
							}, [createVNode("i", { class: "fab fa-facebook fa-lg" })], 8, ["href"])) : createCommentVNode("", true),
							form.value.instagram ? (openBlock(), createBlock("a", {
								key: 1,
								href: form.value.instagram,
								target: "_blank",
								class: "text-pink-600 hover:text-pink-800"
							}, [createVNode("i", { class: "fab fa-instagram fa-lg" })], 8, ["href"])) : createCommentVNode("", true),
							form.value.twitter ? (openBlock(), createBlock("a", {
								key: 2,
								href: form.value.twitter,
								target: "_blank",
								class: "text-blue-400 hover:text-blue-600"
							}, [createVNode("i", { class: "fab fa-twitter fa-lg" })], 8, ["href"])) : createCommentVNode("", true),
							form.value.youtube ? (openBlock(), createBlock("a", {
								key: 3,
								href: form.value.youtube,
								target: "_blank",
								class: "text-red-600 hover:text-red-800"
							}, [createVNode("i", { class: "fab fa-youtube fa-lg" })], 8, ["href"])) : createCommentVNode("", true),
							form.value.tiktok ? (openBlock(), createBlock("a", {
								key: 4,
								href: form.value.tiktok,
								target: "_blank",
								class: "text-gray-800 hover:text-gray-600"
							}, [createVNode("i", { class: "fab fa-tiktok fa-lg" })], 8, ["href"])) : createCommentVNode("", true),
							form.value.whatsapp_group ? (openBlock(), createBlock("a", {
								key: 5,
								href: form.value.whatsapp_group,
								target: "_blank",
								class: "text-green-600 hover:text-green-800"
							}, [createVNode("i", { class: "fab fa-whatsapp fa-lg" })], 8, ["href"])) : createCommentVNode("", true)
						])]),
						createVNode("div", { class: "flex justify-end space-x-3 pt-6 border-t" }, [createVNode("button", {
							type: "button",
							onClick: resetForm,
							class: "btn-secondary"
						}, "Reset"), createVNode("button", {
							type: "submit",
							class: "btn-primary"
						}, "Simpan Social Media")])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Settings/Social.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
