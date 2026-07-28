import { n as _sfc_main$1 } from "./Modal-ZlC0B93i.js";
import { t as _sfc_main$2 } from "./ConfirmationModal-d-cUbaqz.js";
import { t as _sfc_main$3 } from "./DangerButton-nBvHdAzK.js";
import { t as _sfc_main$4 } from "./SecondaryButton-BD33s9TB.js";
import { createTextVNode, createVNode, ref, unref, useSSRContext, withCtx } from "vue";
import { useForm } from "@inertiajs/vue3";
import { ssrRenderComponent } from "vue/server-renderer";
//#region resources/js/Pages/Teams/Partials/DeleteTeamForm.vue
var _sfc_main = {
	__name: "DeleteTeamForm",
	__ssrInlineRender: true,
	props: { team: Object },
	setup(__props) {
		const props = __props;
		const confirmingTeamDeletion = ref(false);
		const form = useForm({});
		const confirmTeamDeletion = () => {
			confirmingTeamDeletion.value = true;
		};
		const deleteTeam = () => {
			form.delete(route("teams.destroy", props.team), { errorBag: "deleteTeam" });
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				title: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Delete Team `);
					else return [createTextVNode(" Delete Team ")];
				}),
				description: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Permanently delete this team. `);
					else return [createTextVNode(" Permanently delete this team. ")];
				}),
				content: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="max-w-xl text-sm text-gray-600"${_scopeId}> Once a team is deleted, all of its resources and data will be permanently deleted. Before deleting this team, please download any data or information regarding this team that you wish to retain. </div><div class="mt-5"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$3, { onClick: confirmTeamDeletion }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Delete Team `);
								else return [createTextVNode(" Delete Team ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div>`);
						_push(ssrRenderComponent(_sfc_main$2, {
							show: confirmingTeamDeletion.value,
							onClose: ($event) => confirmingTeamDeletion.value = false
						}, {
							title: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Delete Team `);
								else return [createTextVNode(" Delete Team ")];
							}),
							content: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Are you sure you want to delete this team? Once a team is deleted, all of its resources and data will be permanently deleted. `);
								else return [createTextVNode(" Are you sure you want to delete this team? Once a team is deleted, all of its resources and data will be permanently deleted. ")];
							}),
							footer: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(_sfc_main$4, { onClick: ($event) => confirmingTeamDeletion.value = false }, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(` Cancel `);
											else return [createTextVNode(" Cancel ")];
										}),
										_: 1
									}, _parent, _scopeId));
									_push(ssrRenderComponent(_sfc_main$3, {
										class: ["ms-3", { "opacity-25": unref(form).processing }],
										disabled: unref(form).processing,
										onClick: deleteTeam
									}, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(` Delete Team `);
											else return [createTextVNode(" Delete Team ")];
										}),
										_: 1
									}, _parent, _scopeId));
								} else return [createVNode(_sfc_main$4, { onClick: ($event) => confirmingTeamDeletion.value = false }, {
									default: withCtx(() => [createTextVNode(" Cancel ")]),
									_: 1
								}, 8, ["onClick"]), createVNode(_sfc_main$3, {
									class: ["ms-3", { "opacity-25": unref(form).processing }],
									disabled: unref(form).processing,
									onClick: deleteTeam
								}, {
									default: withCtx(() => [createTextVNode(" Delete Team ")]),
									_: 1
								}, 8, ["class", "disabled"])];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [
						createVNode("div", { class: "max-w-xl text-sm text-gray-600" }, " Once a team is deleted, all of its resources and data will be permanently deleted. Before deleting this team, please download any data or information regarding this team that you wish to retain. "),
						createVNode("div", { class: "mt-5" }, [createVNode(_sfc_main$3, { onClick: confirmTeamDeletion }, {
							default: withCtx(() => [createTextVNode(" Delete Team ")]),
							_: 1
						})]),
						createVNode(_sfc_main$2, {
							show: confirmingTeamDeletion.value,
							onClose: ($event) => confirmingTeamDeletion.value = false
						}, {
							title: withCtx(() => [createTextVNode(" Delete Team ")]),
							content: withCtx(() => [createTextVNode(" Are you sure you want to delete this team? Once a team is deleted, all of its resources and data will be permanently deleted. ")]),
							footer: withCtx(() => [createVNode(_sfc_main$4, { onClick: ($event) => confirmingTeamDeletion.value = false }, {
								default: withCtx(() => [createTextVNode(" Cancel ")]),
								_: 1
							}, 8, ["onClick"]), createVNode(_sfc_main$3, {
								class: ["ms-3", { "opacity-25": unref(form).processing }],
								disabled: unref(form).processing,
								onClick: deleteTeam
							}, {
								default: withCtx(() => [createTextVNode(" Delete Team ")]),
								_: 1
							}, 8, ["class", "disabled"])]),
							_: 1
						}, 8, ["show", "onClose"])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Teams/Partials/DeleteTeamForm.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
