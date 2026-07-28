import { t as _sfc_main$1 } from "./ActionMessage-qNPV6ok6.js";
import { t as _sfc_main$2 } from "./FormSection-C8YaYqbL.js";
import { n as _sfc_main$4, t as _sfc_main$3 } from "./TextInput-BFa9M3Sc.js";
import { t as _sfc_main$5 } from "./InputLabel-BrItThsh.js";
import { t as _sfc_main$6 } from "./PrimaryButton-B1NJcOT8.js";
import { createSlots, createTextVNode, createVNode, mergeProps, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { useForm } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
//#region resources/js/Pages/Teams/Partials/UpdateTeamNameForm.vue
var _sfc_main = {
	__name: "UpdateTeamNameForm",
	__ssrInlineRender: true,
	props: {
		team: Object,
		permissions: Object
	},
	setup(__props) {
		const props = __props;
		const form = useForm({ name: props.team.name });
		const updateTeamName = () => {
			form.put(route("teams.update", props.team), {
				errorBag: "updateTeamName",
				preserveScroll: true
			});
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$2, mergeProps({ onSubmitted: updateTeamName }, _attrs), createSlots({
				title: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Team Name `);
					else return [createTextVNode(" Team Name ")];
				}),
				description: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` The team&#39;s name and owner information. `);
					else return [createTextVNode(" The team's name and owner information. ")];
				}),
				form: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="col-span-6"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$5, { value: "Team Owner" }, null, _parent, _scopeId));
						_push(`<div class="flex items-center mt-2"${_scopeId}><img class="size-12 rounded-full object-cover"${ssrRenderAttr("src", __props.team.owner.profile_photo_url)}${ssrRenderAttr("alt", __props.team.owner.name)}${_scopeId}><div class="ms-4 leading-tight"${_scopeId}><div class="text-gray-900"${_scopeId}>${ssrInterpolate(__props.team.owner.name)}</div><div class="text-gray-700 text-sm"${_scopeId}>${ssrInterpolate(__props.team.owner.email)}</div></div></div></div><div class="col-span-6 sm:col-span-4"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$5, {
							for: "name",
							value: "Team Name"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$3, {
							id: "name",
							modelValue: unref(form).name,
							"onUpdate:modelValue": ($event) => unref(form).name = $event,
							type: "text",
							class: "mt-1 block w-full",
							disabled: !__props.permissions.canUpdateTeam
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$4, {
							message: unref(form).errors.name,
							class: "mt-2"
						}, null, _parent, _scopeId));
						_push(`</div>`);
					} else return [createVNode("div", { class: "col-span-6" }, [createVNode(_sfc_main$5, { value: "Team Owner" }), createVNode("div", { class: "flex items-center mt-2" }, [createVNode("img", {
						class: "size-12 rounded-full object-cover",
						src: __props.team.owner.profile_photo_url,
						alt: __props.team.owner.name
					}, null, 8, ["src", "alt"]), createVNode("div", { class: "ms-4 leading-tight" }, [createVNode("div", { class: "text-gray-900" }, toDisplayString(__props.team.owner.name), 1), createVNode("div", { class: "text-gray-700 text-sm" }, toDisplayString(__props.team.owner.email), 1)])])]), createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
						createVNode(_sfc_main$5, {
							for: "name",
							value: "Team Name"
						}),
						createVNode(_sfc_main$3, {
							id: "name",
							modelValue: unref(form).name,
							"onUpdate:modelValue": ($event) => unref(form).name = $event,
							type: "text",
							class: "mt-1 block w-full",
							disabled: !__props.permissions.canUpdateTeam
						}, null, 8, [
							"modelValue",
							"onUpdate:modelValue",
							"disabled"
						]),
						createVNode(_sfc_main$4, {
							message: unref(form).errors.name,
							class: "mt-2"
						}, null, 8, ["message"])
					])];
				}),
				_: 2
			}, [__props.permissions.canUpdateTeam ? {
				name: "actions",
				fn: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(_sfc_main$1, {
							on: unref(form).recentlySuccessful,
							class: "me-3"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Saved. `);
								else return [createTextVNode(" Saved. ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$6, {
							class: { "opacity-25": unref(form).processing },
							disabled: unref(form).processing
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Save `);
								else return [createTextVNode(" Save ")];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [createVNode(_sfc_main$1, {
						on: unref(form).recentlySuccessful,
						class: "me-3"
					}, {
						default: withCtx(() => [createTextVNode(" Saved. ")]),
						_: 1
					}, 8, ["on"]), createVNode(_sfc_main$6, {
						class: { "opacity-25": unref(form).processing },
						disabled: unref(form).processing
					}, {
						default: withCtx(() => [createTextVNode(" Save ")]),
						_: 1
					}, 8, ["class", "disabled"])];
				}),
				key: "0"
			} : void 0]), _parent));
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Teams/Partials/UpdateTeamNameForm.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
