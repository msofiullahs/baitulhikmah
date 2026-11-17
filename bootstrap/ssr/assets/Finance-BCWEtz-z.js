import { t as AdminLayout_default } from "./AdminLayout-JKKJHCcy.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, mergeProps, openBlock, ref, renderList, useSSRContext, vModelCheckbox, vModelRadio, vModelSelect, vModelText, withCtx, withDirectives, withModifiers } from "vue";
import { router } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
//#region resources/js/Pages/Settings/Finance.vue
var _sfc_main = {
	__name: "Finance",
	__ssrInlineRender: true,
	props: { settings: Object },
	setup(__props) {
		const props = __props;
		const form = ref({
			kasboxes: props.settings?.kasboxes || [{
				nama: "",
				kode: "",
				is_default: false
			}],
			approval_threshold: props.settings?.approval_threshold || 1e6,
			approval_level: props.settings?.approval_level || "1",
			require_approval_for_expense: props.settings?.require_approval_for_expense || false,
			payment_gateway_enabled: props.settings?.payment_gateway_enabled || false,
			payment_provider: props.settings?.payment_provider || "midtrans",
			payment_server_key: props.settings?.payment_server_key || "",
			payment_client_key: props.settings?.payment_client_key || "",
			payment_mode: props.settings?.payment_mode || "sandbox",
			payment_methods: props.settings?.payment_methods || ["bank_transfer", "qris"],
			whatsapp_enabled: props.settings?.whatsapp_enabled || false,
			whatsapp_provider: props.settings?.whatsapp_provider || "fonnte",
			whatsapp_token: props.settings?.whatsapp_token || "",
			whatsapp_sender: props.settings?.whatsapp_sender || ""
		});
		const addKasBox = () => {
			form.value.kasboxes.push({
				nama: "",
				kode: "",
				is_default: false
			});
		};
		const removeKasBox = (index) => {
			if (form.value.kasboxes.length > 1) form.value.kasboxes.splice(index, 1);
		};
		const saveKasBoxSettings = () => {
			router.post(route("settings.finance.kasbox"), { kasboxes: form.value.kasboxes }, { onSuccess: () => {} });
		};
		const saveApprovalSettings = () => {
			router.post(route("settings.finance.approval"), form.value, { onSuccess: () => {} });
		};
		const savePaymentGateway = () => {
			router.post(route("settings.finance.payment"), form.value, { onSuccess: () => {} });
		};
		const saveWhatsAppSettings = () => {
			router.post(route("settings.finance.whatsapp"), form.value, { onSuccess: () => {} });
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(AdminLayout_default, mergeProps({ title: "Pengaturan Keuangan" }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="space-y-6"${_scopeId}><div class="border-b pb-4"${_scopeId}><h1 class="text-2xl font-bold text-gray-900"${_scopeId}>Pengaturan Keuangan</h1><p class="text-gray-600 mt-1"${_scopeId}>Konfigurasi kas box, approval threshold, dan payment gateway</p></div><form class="bg-white rounded-lg shadow p-6 space-y-6"${_scopeId}><h2 class="text-lg font-bold border-b pb-2"${_scopeId}>Kas Box (Rekening)</h2><div class="space-y-4"${_scopeId}><!--[-->`);
						ssrRenderList(form.value.kasboxes, (kasbox, index) => {
							_push(`<div class="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"${_scopeId}><div class="flex-1"${_scopeId}><input${ssrRenderAttr("value", kasbox.nama)} type="text" placeholder="Nama Kas Box" class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div><div class="flex-1"${_scopeId}><input${ssrRenderAttr("value", kasbox.kode)} type="text" placeholder="Kode (contoh: UMUM)" class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div><label class="flex items-center"${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(kasbox.is_default) ? ssrLooseContain(kasbox.is_default, null) : kasbox.is_default) ? " checked" : ""} type="checkbox" class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}><span class="ml-2 text-sm text-gray-700"${_scopeId}>Default</span></label><button type="button" class="text-red-600 hover:text-red-900"${_scopeId}><i class="fas fa-trash"${_scopeId}></i></button></div>`);
						});
						_push(`<!--]--><button type="button" class="btn-secondary"${_scopeId}><i class="fas fa-plus mr-2"${_scopeId}></i>Tambah Kas Box </button></div><div class="flex justify-end pt-4"${_scopeId}><button type="submit" class="btn-primary"${_scopeId}>Simpan Kas Box</button></div></form><form class="bg-white rounded-lg shadow p-6 space-y-6"${_scopeId}><h2 class="text-lg font-bold border-b pb-2"${_scopeId}>Threshold Approval Transaksi</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}> Minimal Nominal untuk Approval (Rp) </label><input${ssrRenderAttr("value", form.value.approval_threshold)} type="number" min="0" step="1000" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}><p class="text-xs text-gray-500 mt-1"${_scopeId}>Transaksi di atas nominal ini memerlukan approval dari ketua/bendahara</p></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}> Level Approval yang Diperlukan </label><select class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}><option value="1"${ssrIncludeBooleanAttr(Array.isArray(form.value.approval_level) ? ssrLooseContain(form.value.approval_level, "1") : ssrLooseEqual(form.value.approval_level, "1")) ? " selected" : ""}${_scopeId}>1 Level (Bendahara)</option><option value="2"${ssrIncludeBooleanAttr(Array.isArray(form.value.approval_level) ? ssrLooseContain(form.value.approval_level, "2") : ssrLooseEqual(form.value.approval_level, "2")) ? " selected" : ""}${_scopeId}>2 Level (Bendahara + Ketua)</option></select></div></div><div${_scopeId}><label class="flex items-center"${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(form.value.require_approval_for_expense) ? ssrLooseContain(form.value.require_approval_for_expense, null) : form.value.require_approval_for_expense) ? " checked" : ""} type="checkbox" class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}><span class="ml-2 text-sm text-gray-700"${_scopeId}>Wajib approval untuk pengeluaran</span></label></div><div class="flex justify-end pt-4"${_scopeId}><button type="submit" class="btn-primary"${_scopeId}>Simpan Approval Settings</button></div></form><form class="bg-white rounded-lg shadow p-6 space-y-6"${_scopeId}><h2 class="text-lg font-bold border-b pb-2"${_scopeId}>Payment Gateway Integration</h2><div class="mb-4"${_scopeId}><label class="flex items-center"${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(form.value.payment_gateway_enabled) ? ssrLooseContain(form.value.payment_gateway_enabled, null) : form.value.payment_gateway_enabled) ? " checked" : ""} type="checkbox" class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}><span class="ml-2 text-sm font-medium text-gray-700"${_scopeId}>Aktifkan Payment Gateway</span></label></div>`);
						if (form.value.payment_gateway_enabled) _push(`<div class="space-y-4"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Provider</label><select class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}><option value="midtrans"${ssrIncludeBooleanAttr(Array.isArray(form.value.payment_provider) ? ssrLooseContain(form.value.payment_provider, "midtrans") : ssrLooseEqual(form.value.payment_provider, "midtrans")) ? " selected" : ""}${_scopeId}>Midtrans</option><option value="xendit"${ssrIncludeBooleanAttr(Array.isArray(form.value.payment_provider) ? ssrLooseContain(form.value.payment_provider, "xendit") : ssrLooseEqual(form.value.payment_provider, "xendit")) ? " selected" : ""}${_scopeId}>Xendit</option><option value="doku"${ssrIncludeBooleanAttr(Array.isArray(form.value.payment_provider) ? ssrLooseContain(form.value.payment_provider, "doku") : ssrLooseEqual(form.value.payment_provider, "doku")) ? " selected" : ""}${_scopeId}>Doku</option></select></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Server Key / API Key</label><input${ssrRenderAttr("value", form.value.payment_server_key)} type="password" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Client Key</label><input${ssrRenderAttr("value", form.value.payment_client_key)} type="password" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Mode</label><div class="mt-2 flex items-center space-x-4"${_scopeId}><label class="flex items-center"${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(form.value.payment_mode, "sandbox")) ? " checked" : ""} value="sandbox" type="radio" class="text-blue-600 focus:ring-blue-500"${_scopeId}><span class="ml-2 text-sm text-gray-700"${_scopeId}>Sandbox (Testing)</span></label><label class="flex items-center"${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(form.value.payment_mode, "production")) ? " checked" : ""} value="production" type="radio" class="text-blue-600 focus:ring-blue-500"${_scopeId}><span class="ml-2 text-sm text-gray-700"${_scopeId}>Production (Live)</span></label></div></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Payment Methods</label><div class="mt-2 grid grid-cols-2 md:grid-cols-4 gap-2"${_scopeId}><label class="flex items-center p-2 border rounded"${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(form.value.payment_methods) ? ssrLooseContain(form.value.payment_methods, "bank_transfer") : form.value.payment_methods) ? " checked" : ""} value="bank_transfer" type="checkbox" class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}><span class="ml-2 text-sm"${_scopeId}>Bank Transfer</span></label><label class="flex items-center p-2 border rounded"${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(form.value.payment_methods) ? ssrLooseContain(form.value.payment_methods, "qris") : form.value.payment_methods) ? " checked" : ""} value="qris" type="checkbox" class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}><span class="ml-2 text-sm"${_scopeId}>QRIS</span></label><label class="flex items-center p-2 border rounded"${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(form.value.payment_methods) ? ssrLooseContain(form.value.payment_methods, "gopay") : form.value.payment_methods) ? " checked" : ""} value="gopay" type="checkbox" class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}><span class="ml-2 text-sm"${_scopeId}>GoPay</span></label><label class="flex items-center p-2 border rounded"${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(form.value.payment_methods) ? ssrLooseContain(form.value.payment_methods, "shopeepay") : form.value.payment_methods) ? " checked" : ""} value="shopeepay" type="checkbox" class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}><span class="ml-2 text-sm"${_scopeId}>ShopeePay</span></label></div></div></div>`);
						else _push(`<!---->`);
						_push(`<div class="flex justify-end pt-4"${_scopeId}><button type="submit" class="btn-primary"${_scopeId}>Simpan Payment Gateway</button></div></form><form class="bg-white rounded-lg shadow p-6 space-y-6"${_scopeId}><h2 class="text-lg font-bold border-b pb-2"${_scopeId}>WhatsApp API Settings</h2><div class="mb-4"${_scopeId}><label class="flex items-center"${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(form.value.whatsapp_enabled) ? ssrLooseContain(form.value.whatsapp_enabled, null) : form.value.whatsapp_enabled) ? " checked" : ""} type="checkbox" class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}><span class="ml-2 text-sm font-medium text-gray-700"${_scopeId}>Aktifkan WhatsApp Broadcast</span></label></div>`);
						if (form.value.whatsapp_enabled) _push(`<div class="grid grid-cols-1 md:grid-cols-2 gap-6"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>API Provider</label><select class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}><option value="fonnte"${ssrIncludeBooleanAttr(Array.isArray(form.value.whatsapp_provider) ? ssrLooseContain(form.value.whatsapp_provider, "fonnte") : ssrLooseEqual(form.value.whatsapp_provider, "fonnte")) ? " selected" : ""}${_scopeId}>Fonnte</option><option value="watzap"${ssrIncludeBooleanAttr(Array.isArray(form.value.whatsapp_provider) ? ssrLooseContain(form.value.whatsapp_provider, "watzap") : ssrLooseEqual(form.value.whatsapp_provider, "watzap")) ? " selected" : ""}${_scopeId}>Watzap</option><option value="twilio"${ssrIncludeBooleanAttr(Array.isArray(form.value.whatsapp_provider) ? ssrLooseContain(form.value.whatsapp_provider, "twilio") : ssrLooseEqual(form.value.whatsapp_provider, "twilio")) ? " selected" : ""}${_scopeId}>Twilio</option><option value="custom"${ssrIncludeBooleanAttr(Array.isArray(form.value.whatsapp_provider) ? ssrLooseContain(form.value.whatsapp_provider, "custom") : ssrLooseEqual(form.value.whatsapp_provider, "custom")) ? " selected" : ""}${_scopeId}>Custom API</option></select></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>API Token/Key</label><input${ssrRenderAttr("value", form.value.whatsapp_token)} type="password" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div><div class="md:col-span-2"${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Sender Number</label><input${ssrRenderAttr("value", form.value.whatsapp_sender)} type="text" placeholder="628xxxxxxxxxx" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"${_scopeId}></div></div>`);
						else _push(`<!---->`);
						_push(`<div class="flex justify-end pt-4"${_scopeId}><button type="submit" class="btn-primary"${_scopeId}>Simpan WhatsApp Settings</button></div></form></div>`);
					} else return [createVNode("div", { class: "space-y-6" }, [
						createVNode("div", { class: "border-b pb-4" }, [createVNode("h1", { class: "text-2xl font-bold text-gray-900" }, "Pengaturan Keuangan"), createVNode("p", { class: "text-gray-600 mt-1" }, "Konfigurasi kas box, approval threshold, dan payment gateway")]),
						createVNode("form", {
							onSubmit: withModifiers(saveKasBoxSettings, ["prevent"]),
							class: "bg-white rounded-lg shadow p-6 space-y-6"
						}, [
							createVNode("h2", { class: "text-lg font-bold border-b pb-2" }, "Kas Box (Rekening)"),
							createVNode("div", { class: "space-y-4" }, [(openBlock(true), createBlock(Fragment, null, renderList(form.value.kasboxes, (kasbox, index) => {
								return openBlock(), createBlock("div", {
									key: index,
									class: "flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
								}, [
									createVNode("div", { class: "flex-1" }, [withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => kasbox.nama = $event,
										type: "text",
										placeholder: "Nama Kas Box",
										class: "w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, kasbox.nama]])]),
									createVNode("div", { class: "flex-1" }, [withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => kasbox.kode = $event,
										type: "text",
										placeholder: "Kode (contoh: UMUM)",
										class: "w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, kasbox.kode]])]),
									createVNode("label", { class: "flex items-center" }, [withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => kasbox.is_default = $event,
										type: "checkbox",
										class: "rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelCheckbox, kasbox.is_default]]), createVNode("span", { class: "ml-2 text-sm text-gray-700" }, "Default")]),
									createVNode("button", {
										type: "button",
										onClick: ($event) => removeKasBox(index),
										class: "text-red-600 hover:text-red-900"
									}, [createVNode("i", { class: "fas fa-trash" })], 8, ["onClick"])
								]);
							}), 128)), createVNode("button", {
								type: "button",
								onClick: addKasBox,
								class: "btn-secondary"
							}, [createVNode("i", { class: "fas fa-plus mr-2" }), createTextVNode("Tambah Kas Box ")])]),
							createVNode("div", { class: "flex justify-end pt-4" }, [createVNode("button", {
								type: "submit",
								class: "btn-primary"
							}, "Simpan Kas Box")])
						], 32),
						createVNode("form", {
							onSubmit: withModifiers(saveApprovalSettings, ["prevent"]),
							class: "bg-white rounded-lg shadow p-6 space-y-6"
						}, [
							createVNode("h2", { class: "text-lg font-bold border-b pb-2" }, "Threshold Approval Transaksi"),
							createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [createVNode("div", null, [
								createVNode("label", { class: "block text-sm font-medium text-gray-700" }, " Minimal Nominal untuk Approval (Rp) "),
								withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => form.value.approval_threshold = $event,
									type: "number",
									min: "0",
									step: "1000",
									class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.approval_threshold]]),
								createVNode("p", { class: "text-xs text-gray-500 mt-1" }, "Transaksi di atas nominal ini memerlukan approval dari ketua/bendahara")
							]), createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, " Level Approval yang Diperlukan "), withDirectives(createVNode("select", {
								"onUpdate:modelValue": ($event) => form.value.approval_level = $event,
								class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							}, [createVNode("option", { value: "1" }, "1 Level (Bendahara)"), createVNode("option", { value: "2" }, "2 Level (Bendahara + Ketua)")], 8, ["onUpdate:modelValue"]), [[vModelSelect, form.value.approval_level]])])]),
							createVNode("div", null, [createVNode("label", { class: "flex items-center" }, [withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => form.value.require_approval_for_expense = $event,
								type: "checkbox",
								class: "rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelCheckbox, form.value.require_approval_for_expense]]), createVNode("span", { class: "ml-2 text-sm text-gray-700" }, "Wajib approval untuk pengeluaran")])]),
							createVNode("div", { class: "flex justify-end pt-4" }, [createVNode("button", {
								type: "submit",
								class: "btn-primary"
							}, "Simpan Approval Settings")])
						], 32),
						createVNode("form", {
							onSubmit: withModifiers(savePaymentGateway, ["prevent"]),
							class: "bg-white rounded-lg shadow p-6 space-y-6"
						}, [
							createVNode("h2", { class: "text-lg font-bold border-b pb-2" }, "Payment Gateway Integration"),
							createVNode("div", { class: "mb-4" }, [createVNode("label", { class: "flex items-center" }, [withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => form.value.payment_gateway_enabled = $event,
								type: "checkbox",
								class: "rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelCheckbox, form.value.payment_gateway_enabled]]), createVNode("span", { class: "ml-2 text-sm font-medium text-gray-700" }, "Aktifkan Payment Gateway")])]),
							form.value.payment_gateway_enabled ? (openBlock(), createBlock("div", {
								key: 0,
								class: "space-y-4"
							}, [
								createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Provider"), withDirectives(createVNode("select", {
									"onUpdate:modelValue": ($event) => form.value.payment_provider = $event,
									class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								}, [
									createVNode("option", { value: "midtrans" }, "Midtrans"),
									createVNode("option", { value: "xendit" }, "Xendit"),
									createVNode("option", { value: "doku" }, "Doku")
								], 8, ["onUpdate:modelValue"]), [[vModelSelect, form.value.payment_provider]])]),
								createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Server Key / API Key"), withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => form.value.payment_server_key = $event,
									type: "password",
									class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.payment_server_key]])]), createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Client Key"), withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => form.value.payment_client_key = $event,
									type: "password",
									class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.payment_client_key]])])]),
								createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Mode"), createVNode("div", { class: "mt-2 flex items-center space-x-4" }, [createVNode("label", { class: "flex items-center" }, [withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => form.value.payment_mode = $event,
									value: "sandbox",
									type: "radio",
									class: "text-blue-600 focus:ring-blue-500"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelRadio, form.value.payment_mode]]), createVNode("span", { class: "ml-2 text-sm text-gray-700" }, "Sandbox (Testing)")]), createVNode("label", { class: "flex items-center" }, [withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => form.value.payment_mode = $event,
									value: "production",
									type: "radio",
									class: "text-blue-600 focus:ring-blue-500"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelRadio, form.value.payment_mode]]), createVNode("span", { class: "ml-2 text-sm text-gray-700" }, "Production (Live)")])])]),
								createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Payment Methods"), createVNode("div", { class: "mt-2 grid grid-cols-2 md:grid-cols-4 gap-2" }, [
									createVNode("label", { class: "flex items-center p-2 border rounded" }, [withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => form.value.payment_methods = $event,
										value: "bank_transfer",
										type: "checkbox",
										class: "rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelCheckbox, form.value.payment_methods]]), createVNode("span", { class: "ml-2 text-sm" }, "Bank Transfer")]),
									createVNode("label", { class: "flex items-center p-2 border rounded" }, [withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => form.value.payment_methods = $event,
										value: "qris",
										type: "checkbox",
										class: "rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelCheckbox, form.value.payment_methods]]), createVNode("span", { class: "ml-2 text-sm" }, "QRIS")]),
									createVNode("label", { class: "flex items-center p-2 border rounded" }, [withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => form.value.payment_methods = $event,
										value: "gopay",
										type: "checkbox",
										class: "rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelCheckbox, form.value.payment_methods]]), createVNode("span", { class: "ml-2 text-sm" }, "GoPay")]),
									createVNode("label", { class: "flex items-center p-2 border rounded" }, [withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => form.value.payment_methods = $event,
										value: "shopeepay",
										type: "checkbox",
										class: "rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelCheckbox, form.value.payment_methods]]), createVNode("span", { class: "ml-2 text-sm" }, "ShopeePay")])
								])])
							])) : createCommentVNode("", true),
							createVNode("div", { class: "flex justify-end pt-4" }, [createVNode("button", {
								type: "submit",
								class: "btn-primary"
							}, "Simpan Payment Gateway")])
						], 32),
						createVNode("form", {
							onSubmit: withModifiers(saveWhatsAppSettings, ["prevent"]),
							class: "bg-white rounded-lg shadow p-6 space-y-6"
						}, [
							createVNode("h2", { class: "text-lg font-bold border-b pb-2" }, "WhatsApp API Settings"),
							createVNode("div", { class: "mb-4" }, [createVNode("label", { class: "flex items-center" }, [withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => form.value.whatsapp_enabled = $event,
								type: "checkbox",
								class: "rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelCheckbox, form.value.whatsapp_enabled]]), createVNode("span", { class: "ml-2 text-sm font-medium text-gray-700" }, "Aktifkan WhatsApp Broadcast")])]),
							form.value.whatsapp_enabled ? (openBlock(), createBlock("div", {
								key: 0,
								class: "grid grid-cols-1 md:grid-cols-2 gap-6"
							}, [
								createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "API Provider"), withDirectives(createVNode("select", {
									"onUpdate:modelValue": ($event) => form.value.whatsapp_provider = $event,
									class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								}, [
									createVNode("option", { value: "fonnte" }, "Fonnte"),
									createVNode("option", { value: "watzap" }, "Watzap"),
									createVNode("option", { value: "twilio" }, "Twilio"),
									createVNode("option", { value: "custom" }, "Custom API")
								], 8, ["onUpdate:modelValue"]), [[vModelSelect, form.value.whatsapp_provider]])]),
								createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "API Token/Key"), withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => form.value.whatsapp_token = $event,
									type: "password",
									class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.whatsapp_token]])]),
								createVNode("div", { class: "md:col-span-2" }, [createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Sender Number"), withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => form.value.whatsapp_sender = $event,
									type: "text",
									placeholder: "628xxxxxxxxxx",
									class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, form.value.whatsapp_sender]])])
							])) : createCommentVNode("", true),
							createVNode("div", { class: "flex justify-end pt-4" }, [createVNode("button", {
								type: "submit",
								class: "btn-primary"
							}, "Simpan WhatsApp Settings")])
						], 32)
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Settings/Finance.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
