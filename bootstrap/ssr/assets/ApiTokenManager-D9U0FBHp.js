import { t as _sfc_main$1 } from "./ActionMessage-qNPV6ok6.js";
import { n as _sfc_main$2 } from "./Modal-ZlC0B93i.js";
import { t as _sfc_main$3 } from "./Checkbox-CeYjo1ea.js";
import { t as _sfc_main$4 } from "./ConfirmationModal-d-cUbaqz.js";
import { t as _sfc_main$5 } from "./DangerButton-nBvHdAzK.js";
import { t as _sfc_main$6 } from "./DialogModal-Cj2GQIA8.js";
import { t as _sfc_main$7 } from "./FormSection-C8YaYqbL.js";
import { n as _sfc_main$9, t as _sfc_main$8 } from "./TextInput-BFa9M3Sc.js";
import { t as _sfc_main$10 } from "./InputLabel-BrItThsh.js";
import { t as _sfc_main$11 } from "./PrimaryButton-B1NJcOT8.js";
import { t as _sfc_main$12 } from "./SecondaryButton-BD33s9TB.js";
import { t as SectionBorder_default } from "./SectionBorder-B2Y3Gi9P.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { useForm } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
//#region resources/js/Pages/API/Partials/ApiTokenManager.vue
var _sfc_main = {
	__name: "ApiTokenManager",
	__ssrInlineRender: true,
	props: {
		tokens: Array,
		availablePermissions: Array,
		defaultPermissions: Array
	},
	setup(__props) {
		const createApiTokenForm = useForm({
			name: "",
			permissions: __props.defaultPermissions
		});
		const updateApiTokenForm = useForm({ permissions: [] });
		const deleteApiTokenForm = useForm({});
		const displayingToken = ref(false);
		const managingPermissionsFor = ref(null);
		const apiTokenBeingDeleted = ref(null);
		const createApiToken = () => {
			createApiTokenForm.post(route("api-tokens.store"), {
				preserveScroll: true,
				onSuccess: () => {
					displayingToken.value = true;
					createApiTokenForm.reset();
				}
			});
		};
		const manageApiTokenPermissions = (token) => {
			updateApiTokenForm.permissions = token.abilities;
			managingPermissionsFor.value = token;
		};
		const updateApiToken = () => {
			updateApiTokenForm.put(route("api-tokens.update", managingPermissionsFor.value), {
				preserveScroll: true,
				preserveState: true,
				onSuccess: () => managingPermissionsFor.value = null
			});
		};
		const confirmApiTokenDeletion = (token) => {
			apiTokenBeingDeleted.value = token;
		};
		const deleteApiToken = () => {
			deleteApiTokenForm.delete(route("api-tokens.destroy", apiTokenBeingDeleted.value), {
				preserveScroll: true,
				preserveState: true,
				onSuccess: () => apiTokenBeingDeleted.value = null
			});
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(_attrs)}>`);
			_push(ssrRenderComponent(_sfc_main$7, { onSubmitted: createApiToken }, {
				title: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Create API Token `);
					else return [createTextVNode(" Create API Token ")];
				}),
				description: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` API tokens allow third-party services to authenticate with our application on your behalf. `);
					else return [createTextVNode(" API tokens allow third-party services to authenticate with our application on your behalf. ")];
				}),
				form: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="col-span-6 sm:col-span-4"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$10, {
							for: "name",
							value: "Name"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$8, {
							id: "name",
							modelValue: unref(createApiTokenForm).name,
							"onUpdate:modelValue": ($event) => unref(createApiTokenForm).name = $event,
							type: "text",
							class: "mt-1 block w-full",
							autofocus: ""
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$9, {
							message: unref(createApiTokenForm).errors.name,
							class: "mt-2"
						}, null, _parent, _scopeId));
						_push(`</div>`);
						if (__props.availablePermissions.length > 0) {
							_push(`<div class="col-span-6"${_scopeId}>`);
							_push(ssrRenderComponent(_sfc_main$10, {
								for: "permissions",
								value: "Permissions"
							}, null, _parent, _scopeId));
							_push(`<div class="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4"${_scopeId}><!--[-->`);
							ssrRenderList(__props.availablePermissions, (permission) => {
								_push(`<div${_scopeId}><label class="flex items-center"${_scopeId}>`);
								_push(ssrRenderComponent(_sfc_main$3, {
									checked: unref(createApiTokenForm).permissions,
									"onUpdate:checked": ($event) => unref(createApiTokenForm).permissions = $event,
									value: permission
								}, null, _parent, _scopeId));
								_push(`<span class="ms-2 text-sm text-gray-600"${_scopeId}>${ssrInterpolate(permission)}</span></label></div>`);
							});
							_push(`<!--]--></div></div>`);
						} else _push(`<!---->`);
					} else return [createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
						createVNode(_sfc_main$10, {
							for: "name",
							value: "Name"
						}),
						createVNode(_sfc_main$8, {
							id: "name",
							modelValue: unref(createApiTokenForm).name,
							"onUpdate:modelValue": ($event) => unref(createApiTokenForm).name = $event,
							type: "text",
							class: "mt-1 block w-full",
							autofocus: ""
						}, null, 8, ["modelValue", "onUpdate:modelValue"]),
						createVNode(_sfc_main$9, {
							message: unref(createApiTokenForm).errors.name,
							class: "mt-2"
						}, null, 8, ["message"])
					]), __props.availablePermissions.length > 0 ? (openBlock(), createBlock("div", {
						key: 0,
						class: "col-span-6"
					}, [createVNode(_sfc_main$10, {
						for: "permissions",
						value: "Permissions"
					}), createVNode("div", { class: "mt-2 grid grid-cols-1 md:grid-cols-2 gap-4" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.availablePermissions, (permission) => {
						return openBlock(), createBlock("div", { key: permission }, [createVNode("label", { class: "flex items-center" }, [createVNode(_sfc_main$3, {
							checked: unref(createApiTokenForm).permissions,
							"onUpdate:checked": ($event) => unref(createApiTokenForm).permissions = $event,
							value: permission
						}, null, 8, [
							"checked",
							"onUpdate:checked",
							"value"
						]), createVNode("span", { class: "ms-2 text-sm text-gray-600" }, toDisplayString(permission), 1)])]);
					}), 128))])])) : createCommentVNode("", true)];
				}),
				actions: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(_sfc_main$1, {
							on: unref(createApiTokenForm).recentlySuccessful,
							class: "me-3"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Created. `);
								else return [createTextVNode(" Created. ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$11, {
							class: { "opacity-25": unref(createApiTokenForm).processing },
							disabled: unref(createApiTokenForm).processing
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Create `);
								else return [createTextVNode(" Create ")];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [createVNode(_sfc_main$1, {
						on: unref(createApiTokenForm).recentlySuccessful,
						class: "me-3"
					}, {
						default: withCtx(() => [createTextVNode(" Created. ")]),
						_: 1
					}, 8, ["on"]), createVNode(_sfc_main$11, {
						class: { "opacity-25": unref(createApiTokenForm).processing },
						disabled: unref(createApiTokenForm).processing
					}, {
						default: withCtx(() => [createTextVNode(" Create ")]),
						_: 1
					}, 8, ["class", "disabled"])];
				}),
				_: 1
			}, _parent));
			if (__props.tokens.length > 0) {
				_push(`<div>`);
				_push(ssrRenderComponent(SectionBorder_default, null, null, _parent));
				_push(`<div class="mt-10 sm:mt-0">`);
				_push(ssrRenderComponent(_sfc_main$2, null, {
					title: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` Manage API Tokens `);
						else return [createTextVNode(" Manage API Tokens ")];
					}),
					description: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` You may delete any of your existing tokens if they are no longer needed. `);
						else return [createTextVNode(" You may delete any of your existing tokens if they are no longer needed. ")];
					}),
					content: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<div class="space-y-6"${_scopeId}><!--[-->`);
							ssrRenderList(__props.tokens, (token) => {
								_push(`<div class="flex items-center justify-between"${_scopeId}><div class="break-all"${_scopeId}>${ssrInterpolate(token.name)}</div><div class="flex items-center ms-2"${_scopeId}>`);
								if (token.last_used_ago) _push(`<div class="text-sm text-gray-400"${_scopeId}> Last used ${ssrInterpolate(token.last_used_ago)}</div>`);
								else _push(`<!---->`);
								if (__props.availablePermissions.length > 0) _push(`<button class="cursor-pointer ms-6 text-sm text-gray-400 underline"${_scopeId}> Permissions </button>`);
								else _push(`<!---->`);
								_push(`<button class="cursor-pointer ms-6 text-sm text-red-500"${_scopeId}> Delete </button></div></div>`);
							});
							_push(`<!--]--></div>`);
						} else return [createVNode("div", { class: "space-y-6" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.tokens, (token) => {
							return openBlock(), createBlock("div", {
								key: token.id,
								class: "flex items-center justify-between"
							}, [createVNode("div", { class: "break-all" }, toDisplayString(token.name), 1), createVNode("div", { class: "flex items-center ms-2" }, [
								token.last_used_ago ? (openBlock(), createBlock("div", {
									key: 0,
									class: "text-sm text-gray-400"
								}, " Last used " + toDisplayString(token.last_used_ago), 1)) : createCommentVNode("", true),
								__props.availablePermissions.length > 0 ? (openBlock(), createBlock("button", {
									key: 1,
									class: "cursor-pointer ms-6 text-sm text-gray-400 underline",
									onClick: ($event) => manageApiTokenPermissions(token)
								}, " Permissions ", 8, ["onClick"])) : createCommentVNode("", true),
								createVNode("button", {
									class: "cursor-pointer ms-6 text-sm text-red-500",
									onClick: ($event) => confirmApiTokenDeletion(token)
								}, " Delete ", 8, ["onClick"])
							])]);
						}), 128))])];
					}),
					_: 1
				}, _parent));
				_push(`</div></div>`);
			} else _push(`<!---->`);
			_push(ssrRenderComponent(_sfc_main$6, {
				show: displayingToken.value,
				onClose: ($event) => displayingToken.value = false
			}, {
				title: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` API Token `);
					else return [createTextVNode(" API Token ")];
				}),
				content: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div${_scopeId}> Please copy your new API token. For your security, it won&#39;t be shown again. </div>`);
						if (_ctx.$page.props.jetstream.flash.token) _push(`<div class="mt-4 bg-gray-100 px-4 py-2 rounded font-mono text-sm text-gray-500 break-all"${_scopeId}>${ssrInterpolate(_ctx.$page.props.jetstream.flash.token)}</div>`);
						else _push(`<!---->`);
					} else return [createVNode("div", null, " Please copy your new API token. For your security, it won't be shown again. "), _ctx.$page.props.jetstream.flash.token ? (openBlock(), createBlock("div", {
						key: 0,
						class: "mt-4 bg-gray-100 px-4 py-2 rounded font-mono text-sm text-gray-500 break-all"
					}, toDisplayString(_ctx.$page.props.jetstream.flash.token), 1)) : createCommentVNode("", true)];
				}),
				footer: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(_sfc_main$12, { onClick: ($event) => displayingToken.value = false }, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(` Close `);
							else return [createTextVNode(" Close ")];
						}),
						_: 1
					}, _parent, _scopeId));
					else return [createVNode(_sfc_main$12, { onClick: ($event) => displayingToken.value = false }, {
						default: withCtx(() => [createTextVNode(" Close ")]),
						_: 1
					}, 8, ["onClick"])];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_sfc_main$6, {
				show: managingPermissionsFor.value != null,
				onClose: ($event) => managingPermissionsFor.value = null
			}, {
				title: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` API Token Permissions `);
					else return [createTextVNode(" API Token Permissions ")];
				}),
				content: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="grid grid-cols-1 md:grid-cols-2 gap-4"${_scopeId}><!--[-->`);
						ssrRenderList(__props.availablePermissions, (permission) => {
							_push(`<div${_scopeId}><label class="flex items-center"${_scopeId}>`);
							_push(ssrRenderComponent(_sfc_main$3, {
								checked: unref(updateApiTokenForm).permissions,
								"onUpdate:checked": ($event) => unref(updateApiTokenForm).permissions = $event,
								value: permission
							}, null, _parent, _scopeId));
							_push(`<span class="ms-2 text-sm text-gray-600"${_scopeId}>${ssrInterpolate(permission)}</span></label></div>`);
						});
						_push(`<!--]--></div>`);
					} else return [createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.availablePermissions, (permission) => {
						return openBlock(), createBlock("div", { key: permission }, [createVNode("label", { class: "flex items-center" }, [createVNode(_sfc_main$3, {
							checked: unref(updateApiTokenForm).permissions,
							"onUpdate:checked": ($event) => unref(updateApiTokenForm).permissions = $event,
							value: permission
						}, null, 8, [
							"checked",
							"onUpdate:checked",
							"value"
						]), createVNode("span", { class: "ms-2 text-sm text-gray-600" }, toDisplayString(permission), 1)])]);
					}), 128))])];
				}),
				footer: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(_sfc_main$12, { onClick: ($event) => managingPermissionsFor.value = null }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Cancel `);
								else return [createTextVNode(" Cancel ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$11, {
							class: ["ms-3", { "opacity-25": unref(updateApiTokenForm).processing }],
							disabled: unref(updateApiTokenForm).processing,
							onClick: updateApiToken
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Save `);
								else return [createTextVNode(" Save ")];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [createVNode(_sfc_main$12, { onClick: ($event) => managingPermissionsFor.value = null }, {
						default: withCtx(() => [createTextVNode(" Cancel ")]),
						_: 1
					}, 8, ["onClick"]), createVNode(_sfc_main$11, {
						class: ["ms-3", { "opacity-25": unref(updateApiTokenForm).processing }],
						disabled: unref(updateApiTokenForm).processing,
						onClick: updateApiToken
					}, {
						default: withCtx(() => [createTextVNode(" Save ")]),
						_: 1
					}, 8, ["class", "disabled"])];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_sfc_main$4, {
				show: apiTokenBeingDeleted.value != null,
				onClose: ($event) => apiTokenBeingDeleted.value = null
			}, {
				title: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Delete API Token `);
					else return [createTextVNode(" Delete API Token ")];
				}),
				content: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Are you sure you would like to delete this API token? `);
					else return [createTextVNode(" Are you sure you would like to delete this API token? ")];
				}),
				footer: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(_sfc_main$12, { onClick: ($event) => apiTokenBeingDeleted.value = null }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Cancel `);
								else return [createTextVNode(" Cancel ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$5, {
							class: ["ms-3", { "opacity-25": unref(deleteApiTokenForm).processing }],
							disabled: unref(deleteApiTokenForm).processing,
							onClick: deleteApiToken
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Delete `);
								else return [createTextVNode(" Delete ")];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [createVNode(_sfc_main$12, { onClick: ($event) => apiTokenBeingDeleted.value = null }, {
						default: withCtx(() => [createTextVNode(" Cancel ")]),
						_: 1
					}, 8, ["onClick"]), createVNode(_sfc_main$5, {
						class: ["ms-3", { "opacity-25": unref(deleteApiTokenForm).processing }],
						disabled: unref(deleteApiTokenForm).processing,
						onClick: deleteApiToken
					}, {
						default: withCtx(() => [createTextVNode(" Delete ")]),
						_: 1
					}, 8, ["class", "disabled"])];
				}),
				_: 1
			}, _parent));
			_push(`</div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/API/Partials/ApiTokenManager.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
