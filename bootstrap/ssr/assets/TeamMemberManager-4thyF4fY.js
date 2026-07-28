import { t as _sfc_main$1 } from "./ActionMessage-qNPV6ok6.js";
import { n as _sfc_main$2 } from "./Modal-ZlC0B93i.js";
import { t as _sfc_main$3 } from "./ConfirmationModal-d-cUbaqz.js";
import { t as _sfc_main$4 } from "./DangerButton-nBvHdAzK.js";
import { t as _sfc_main$5 } from "./DialogModal-Cj2GQIA8.js";
import { t as _sfc_main$6 } from "./FormSection-C8YaYqbL.js";
import { n as _sfc_main$8, t as _sfc_main$7 } from "./TextInput-BFa9M3Sc.js";
import { t as _sfc_main$9 } from "./InputLabel-BrItThsh.js";
import { t as _sfc_main$10 } from "./PrimaryButton-B1NJcOT8.js";
import { t as _sfc_main$11 } from "./SecondaryButton-BD33s9TB.js";
import { t as SectionBorder_default } from "./SectionBorder-B2Y3Gi9P.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { router, useForm, usePage } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
//#region resources/js/Pages/Teams/Partials/TeamMemberManager.vue
var _sfc_main = {
	__name: "TeamMemberManager",
	__ssrInlineRender: true,
	props: {
		team: Object,
		availableRoles: Array,
		userPermissions: Object
	},
	setup(__props) {
		const props = __props;
		const page = usePage();
		const addTeamMemberForm = useForm({
			email: "",
			role: null
		});
		const updateRoleForm = useForm({ role: null });
		const leaveTeamForm = useForm({});
		const removeTeamMemberForm = useForm({});
		const currentlyManagingRole = ref(false);
		const managingRoleFor = ref(null);
		const confirmingLeavingTeam = ref(false);
		const teamMemberBeingRemoved = ref(null);
		const addTeamMember = () => {
			addTeamMemberForm.post(route("team-members.store", props.team), {
				errorBag: "addTeamMember",
				preserveScroll: true,
				onSuccess: () => addTeamMemberForm.reset()
			});
		};
		const cancelTeamInvitation = (invitation) => {
			router.delete(route("team-invitations.destroy", invitation), { preserveScroll: true });
		};
		const manageRole = (teamMember) => {
			managingRoleFor.value = teamMember;
			updateRoleForm.role = teamMember.membership.role;
			currentlyManagingRole.value = true;
		};
		const updateRole = () => {
			updateRoleForm.put(route("team-members.update", [props.team, managingRoleFor.value]), {
				preserveScroll: true,
				onSuccess: () => currentlyManagingRole.value = false
			});
		};
		const confirmLeavingTeam = () => {
			confirmingLeavingTeam.value = true;
		};
		const leaveTeam = () => {
			leaveTeamForm.delete(route("team-members.destroy", [props.team, page.props.auth.user]));
		};
		const confirmTeamMemberRemoval = (teamMember) => {
			teamMemberBeingRemoved.value = teamMember;
		};
		const removeTeamMember = () => {
			removeTeamMemberForm.delete(route("team-members.destroy", [props.team, teamMemberBeingRemoved.value]), {
				errorBag: "removeTeamMember",
				preserveScroll: true,
				preserveState: true,
				onSuccess: () => teamMemberBeingRemoved.value = null
			});
		};
		const displayableRole = (role) => {
			return props.availableRoles.find((r) => r.key === role).name;
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(_attrs)}>`);
			if (__props.userPermissions.canAddTeamMembers) {
				_push(`<div>`);
				_push(ssrRenderComponent(SectionBorder_default, null, null, _parent));
				_push(ssrRenderComponent(_sfc_main$6, { onSubmitted: addTeamMember }, {
					title: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` Add Team Member `);
						else return [createTextVNode(" Add Team Member ")];
					}),
					description: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` Add a new team member to your team, allowing them to collaborate with you. `);
						else return [createTextVNode(" Add a new team member to your team, allowing them to collaborate with you. ")];
					}),
					form: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<div class="col-span-6"${_scopeId}><div class="max-w-xl text-sm text-gray-600"${_scopeId}> Please provide the email address of the person you would like to add to this team. </div></div><div class="col-span-6 sm:col-span-4"${_scopeId}>`);
							_push(ssrRenderComponent(_sfc_main$9, {
								for: "email",
								value: "Email"
							}, null, _parent, _scopeId));
							_push(ssrRenderComponent(_sfc_main$7, {
								id: "email",
								modelValue: unref(addTeamMemberForm).email,
								"onUpdate:modelValue": ($event) => unref(addTeamMemberForm).email = $event,
								type: "email",
								class: "mt-1 block w-full"
							}, null, _parent, _scopeId));
							_push(ssrRenderComponent(_sfc_main$8, {
								message: unref(addTeamMemberForm).errors.email,
								class: "mt-2"
							}, null, _parent, _scopeId));
							_push(`</div>`);
							if (__props.availableRoles.length > 0) {
								_push(`<div class="col-span-6 lg:col-span-4"${_scopeId}>`);
								_push(ssrRenderComponent(_sfc_main$9, {
									for: "roles",
									value: "Role"
								}, null, _parent, _scopeId));
								_push(ssrRenderComponent(_sfc_main$8, {
									message: unref(addTeamMemberForm).errors.role,
									class: "mt-2"
								}, null, _parent, _scopeId));
								_push(`<div class="relative z-0 mt-1 border border-gray-200 rounded-lg cursor-pointer"${_scopeId}><!--[-->`);
								ssrRenderList(__props.availableRoles, (role, i) => {
									_push(`<button type="button" class="${ssrRenderClass([{
										"border-t border-gray-200 focus:border-none rounded-t-none": i > 0,
										"rounded-b-none": i != Object.keys(__props.availableRoles).length - 1
									}, "relative px-4 py-3 inline-flex w-full rounded-lg focus:z-10 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"])}"${_scopeId}><div class="${ssrRenderClass({ "opacity-50": unref(addTeamMemberForm).role && unref(addTeamMemberForm).role != role.key })}"${_scopeId}><div class="flex items-center"${_scopeId}><div class="${ssrRenderClass([{ "font-semibold": unref(addTeamMemberForm).role == role.key }, "text-sm text-gray-600"])}"${_scopeId}>${ssrInterpolate(role.name)}</div>`);
									if (unref(addTeamMemberForm).role == role.key) _push(`<svg class="ms-2 size-5 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg>`);
									else _push(`<!---->`);
									_push(`</div><div class="mt-2 text-xs text-gray-600 text-start"${_scopeId}>${ssrInterpolate(role.description)}</div></div></button>`);
								});
								_push(`<!--]--></div></div>`);
							} else _push(`<!---->`);
						} else return [
							createVNode("div", { class: "col-span-6" }, [createVNode("div", { class: "max-w-xl text-sm text-gray-600" }, " Please provide the email address of the person you would like to add to this team. ")]),
							createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
								createVNode(_sfc_main$9, {
									for: "email",
									value: "Email"
								}),
								createVNode(_sfc_main$7, {
									id: "email",
									modelValue: unref(addTeamMemberForm).email,
									"onUpdate:modelValue": ($event) => unref(addTeamMemberForm).email = $event,
									type: "email",
									class: "mt-1 block w-full"
								}, null, 8, ["modelValue", "onUpdate:modelValue"]),
								createVNode(_sfc_main$8, {
									message: unref(addTeamMemberForm).errors.email,
									class: "mt-2"
								}, null, 8, ["message"])
							]),
							__props.availableRoles.length > 0 ? (openBlock(), createBlock("div", {
								key: 0,
								class: "col-span-6 lg:col-span-4"
							}, [
								createVNode(_sfc_main$9, {
									for: "roles",
									value: "Role"
								}),
								createVNode(_sfc_main$8, {
									message: unref(addTeamMemberForm).errors.role,
									class: "mt-2"
								}, null, 8, ["message"]),
								createVNode("div", { class: "relative z-0 mt-1 border border-gray-200 rounded-lg cursor-pointer" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.availableRoles, (role, i) => {
									return openBlock(), createBlock("button", {
										key: role.key,
										type: "button",
										class: ["relative px-4 py-3 inline-flex w-full rounded-lg focus:z-10 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500", {
											"border-t border-gray-200 focus:border-none rounded-t-none": i > 0,
											"rounded-b-none": i != Object.keys(__props.availableRoles).length - 1
										}],
										onClick: ($event) => unref(addTeamMemberForm).role = role.key
									}, [createVNode("div", { class: { "opacity-50": unref(addTeamMemberForm).role && unref(addTeamMemberForm).role != role.key } }, [createVNode("div", { class: "flex items-center" }, [createVNode("div", { class: ["text-sm text-gray-600", { "font-semibold": unref(addTeamMemberForm).role == role.key }] }, toDisplayString(role.name), 3), unref(addTeamMemberForm).role == role.key ? (openBlock(), createBlock("svg", {
										key: 0,
										class: "ms-2 size-5 text-green-400",
										xmlns: "http://www.w3.org/2000/svg",
										fill: "none",
										viewBox: "0 0 24 24",
										"stroke-width": "1.5",
										stroke: "currentColor"
									}, [createVNode("path", {
										"stroke-linecap": "round",
										"stroke-linejoin": "round",
										d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									})])) : createCommentVNode("", true)]), createVNode("div", { class: "mt-2 text-xs text-gray-600 text-start" }, toDisplayString(role.description), 1)], 2)], 10, ["onClick"]);
								}), 128))])
							])) : createCommentVNode("", true)
						];
					}),
					actions: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(ssrRenderComponent(_sfc_main$1, {
								on: unref(addTeamMemberForm).recentlySuccessful,
								class: "me-3"
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(` Added. `);
									else return [createTextVNode(" Added. ")];
								}),
								_: 1
							}, _parent, _scopeId));
							_push(ssrRenderComponent(_sfc_main$10, {
								class: { "opacity-25": unref(addTeamMemberForm).processing },
								disabled: unref(addTeamMemberForm).processing
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(` Add `);
									else return [createTextVNode(" Add ")];
								}),
								_: 1
							}, _parent, _scopeId));
						} else return [createVNode(_sfc_main$1, {
							on: unref(addTeamMemberForm).recentlySuccessful,
							class: "me-3"
						}, {
							default: withCtx(() => [createTextVNode(" Added. ")]),
							_: 1
						}, 8, ["on"]), createVNode(_sfc_main$10, {
							class: { "opacity-25": unref(addTeamMemberForm).processing },
							disabled: unref(addTeamMemberForm).processing
						}, {
							default: withCtx(() => [createTextVNode(" Add ")]),
							_: 1
						}, 8, ["class", "disabled"])];
					}),
					_: 1
				}, _parent));
				_push(`</div>`);
			} else _push(`<!---->`);
			if (__props.team.team_invitations.length > 0 && __props.userPermissions.canAddTeamMembers) {
				_push(`<div>`);
				_push(ssrRenderComponent(SectionBorder_default, null, null, _parent));
				_push(ssrRenderComponent(_sfc_main$2, { class: "mt-10 sm:mt-0" }, {
					title: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` Pending Team Invitations `);
						else return [createTextVNode(" Pending Team Invitations ")];
					}),
					description: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` These people have been invited to your team and have been sent an invitation email. They may join the team by accepting the email invitation. `);
						else return [createTextVNode(" These people have been invited to your team and have been sent an invitation email. They may join the team by accepting the email invitation. ")];
					}),
					content: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<div class="space-y-6"${_scopeId}><!--[-->`);
							ssrRenderList(__props.team.team_invitations, (invitation) => {
								_push(`<div class="flex items-center justify-between"${_scopeId}><div class="text-gray-600"${_scopeId}>${ssrInterpolate(invitation.email)}</div><div class="flex items-center"${_scopeId}>`);
								if (__props.userPermissions.canRemoveTeamMembers) _push(`<button class="cursor-pointer ms-6 text-sm text-red-500 focus:outline-none"${_scopeId}> Cancel </button>`);
								else _push(`<!---->`);
								_push(`</div></div>`);
							});
							_push(`<!--]--></div>`);
						} else return [createVNode("div", { class: "space-y-6" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.team.team_invitations, (invitation) => {
							return openBlock(), createBlock("div", {
								key: invitation.id,
								class: "flex items-center justify-between"
							}, [createVNode("div", { class: "text-gray-600" }, toDisplayString(invitation.email), 1), createVNode("div", { class: "flex items-center" }, [__props.userPermissions.canRemoveTeamMembers ? (openBlock(), createBlock("button", {
								key: 0,
								class: "cursor-pointer ms-6 text-sm text-red-500 focus:outline-none",
								onClick: ($event) => cancelTeamInvitation(invitation)
							}, " Cancel ", 8, ["onClick"])) : createCommentVNode("", true)])]);
						}), 128))])];
					}),
					_: 1
				}, _parent));
				_push(`</div>`);
			} else _push(`<!---->`);
			if (__props.team.users.length > 0) {
				_push(`<div>`);
				_push(ssrRenderComponent(SectionBorder_default, null, null, _parent));
				_push(ssrRenderComponent(_sfc_main$2, { class: "mt-10 sm:mt-0" }, {
					title: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` Team Members `);
						else return [createTextVNode(" Team Members ")];
					}),
					description: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` All of the people that are part of this team. `);
						else return [createTextVNode(" All of the people that are part of this team. ")];
					}),
					content: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<div class="space-y-6"${_scopeId}><!--[-->`);
							ssrRenderList(__props.team.users, (user) => {
								_push(`<div class="flex items-center justify-between"${_scopeId}><div class="flex items-center"${_scopeId}><img class="size-8 rounded-full object-cover"${ssrRenderAttr("src", user.profile_photo_url)}${ssrRenderAttr("alt", user.name)}${_scopeId}><div class="ms-4"${_scopeId}>${ssrInterpolate(user.name)}</div></div><div class="flex items-center"${_scopeId}>`);
								if (__props.userPermissions.canUpdateTeamMembers && __props.availableRoles.length) _push(`<button class="ms-2 text-sm text-gray-400 underline"${_scopeId}>${ssrInterpolate(displayableRole(user.membership.role))}</button>`);
								else if (__props.availableRoles.length) _push(`<div class="ms-2 text-sm text-gray-400"${_scopeId}>${ssrInterpolate(displayableRole(user.membership.role))}</div>`);
								else _push(`<!---->`);
								if (_ctx.$page.props.auth.user.id === user.id) _push(`<button class="cursor-pointer ms-6 text-sm text-red-500"${_scopeId}> Leave </button>`);
								else if (__props.userPermissions.canRemoveTeamMembers) _push(`<button class="cursor-pointer ms-6 text-sm text-red-500"${_scopeId}> Remove </button>`);
								else _push(`<!---->`);
								_push(`</div></div>`);
							});
							_push(`<!--]--></div>`);
						} else return [createVNode("div", { class: "space-y-6" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.team.users, (user) => {
							return openBlock(), createBlock("div", {
								key: user.id,
								class: "flex items-center justify-between"
							}, [createVNode("div", { class: "flex items-center" }, [createVNode("img", {
								class: "size-8 rounded-full object-cover",
								src: user.profile_photo_url,
								alt: user.name
							}, null, 8, ["src", "alt"]), createVNode("div", { class: "ms-4" }, toDisplayString(user.name), 1)]), createVNode("div", { class: "flex items-center" }, [__props.userPermissions.canUpdateTeamMembers && __props.availableRoles.length ? (openBlock(), createBlock("button", {
								key: 0,
								class: "ms-2 text-sm text-gray-400 underline",
								onClick: ($event) => manageRole(user)
							}, toDisplayString(displayableRole(user.membership.role)), 9, ["onClick"])) : __props.availableRoles.length ? (openBlock(), createBlock("div", {
								key: 1,
								class: "ms-2 text-sm text-gray-400"
							}, toDisplayString(displayableRole(user.membership.role)), 1)) : createCommentVNode("", true), _ctx.$page.props.auth.user.id === user.id ? (openBlock(), createBlock("button", {
								key: 2,
								class: "cursor-pointer ms-6 text-sm text-red-500",
								onClick: confirmLeavingTeam
							}, " Leave ")) : __props.userPermissions.canRemoveTeamMembers ? (openBlock(), createBlock("button", {
								key: 3,
								class: "cursor-pointer ms-6 text-sm text-red-500",
								onClick: ($event) => confirmTeamMemberRemoval(user)
							}, " Remove ", 8, ["onClick"])) : createCommentVNode("", true)])]);
						}), 128))])];
					}),
					_: 1
				}, _parent));
				_push(`</div>`);
			} else _push(`<!---->`);
			_push(ssrRenderComponent(_sfc_main$5, {
				show: currentlyManagingRole.value,
				onClose: ($event) => currentlyManagingRole.value = false
			}, {
				title: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Manage Role `);
					else return [createTextVNode(" Manage Role ")];
				}),
				content: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) if (managingRoleFor.value) {
						_push(`<div${_scopeId}><div class="relative z-0 mt-1 border border-gray-200 rounded-lg cursor-pointer"${_scopeId}><!--[-->`);
						ssrRenderList(__props.availableRoles, (role, i) => {
							_push(`<button type="button" class="${ssrRenderClass([{
								"border-t border-gray-200 focus:border-none rounded-t-none": i > 0,
								"rounded-b-none": i !== Object.keys(__props.availableRoles).length - 1
							}, "relative px-4 py-3 inline-flex w-full rounded-lg focus:z-10 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"])}"${_scopeId}><div class="${ssrRenderClass({ "opacity-50": unref(updateRoleForm).role && unref(updateRoleForm).role !== role.key })}"${_scopeId}><div class="flex items-center"${_scopeId}><div class="${ssrRenderClass([{ "font-semibold": unref(updateRoleForm).role === role.key }, "text-sm text-gray-600"])}"${_scopeId}>${ssrInterpolate(role.name)}</div>`);
							if (unref(updateRoleForm).role == role.key) _push(`<svg class="ms-2 size-5 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg>`);
							else _push(`<!---->`);
							_push(`</div><div class="mt-2 text-xs text-gray-600"${_scopeId}>${ssrInterpolate(role.description)}</div></div></button>`);
						});
						_push(`<!--]--></div></div>`);
					} else _push(`<!---->`);
					else return [managingRoleFor.value ? (openBlock(), createBlock("div", { key: 0 }, [createVNode("div", { class: "relative z-0 mt-1 border border-gray-200 rounded-lg cursor-pointer" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.availableRoles, (role, i) => {
						return openBlock(), createBlock("button", {
							key: role.key,
							type: "button",
							class: ["relative px-4 py-3 inline-flex w-full rounded-lg focus:z-10 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500", {
								"border-t border-gray-200 focus:border-none rounded-t-none": i > 0,
								"rounded-b-none": i !== Object.keys(__props.availableRoles).length - 1
							}],
							onClick: ($event) => unref(updateRoleForm).role = role.key
						}, [createVNode("div", { class: { "opacity-50": unref(updateRoleForm).role && unref(updateRoleForm).role !== role.key } }, [createVNode("div", { class: "flex items-center" }, [createVNode("div", { class: ["text-sm text-gray-600", { "font-semibold": unref(updateRoleForm).role === role.key }] }, toDisplayString(role.name), 3), unref(updateRoleForm).role == role.key ? (openBlock(), createBlock("svg", {
							key: 0,
							class: "ms-2 size-5 text-green-400",
							xmlns: "http://www.w3.org/2000/svg",
							fill: "none",
							viewBox: "0 0 24 24",
							"stroke-width": "1.5",
							stroke: "currentColor"
						}, [createVNode("path", {
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						})])) : createCommentVNode("", true)]), createVNode("div", { class: "mt-2 text-xs text-gray-600" }, toDisplayString(role.description), 1)], 2)], 10, ["onClick"]);
					}), 128))])])) : createCommentVNode("", true)];
				}),
				footer: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(_sfc_main$11, { onClick: ($event) => currentlyManagingRole.value = false }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Cancel `);
								else return [createTextVNode(" Cancel ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$10, {
							class: ["ms-3", { "opacity-25": unref(updateRoleForm).processing }],
							disabled: unref(updateRoleForm).processing,
							onClick: updateRole
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Save `);
								else return [createTextVNode(" Save ")];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [createVNode(_sfc_main$11, { onClick: ($event) => currentlyManagingRole.value = false }, {
						default: withCtx(() => [createTextVNode(" Cancel ")]),
						_: 1
					}, 8, ["onClick"]), createVNode(_sfc_main$10, {
						class: ["ms-3", { "opacity-25": unref(updateRoleForm).processing }],
						disabled: unref(updateRoleForm).processing,
						onClick: updateRole
					}, {
						default: withCtx(() => [createTextVNode(" Save ")]),
						_: 1
					}, 8, ["class", "disabled"])];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_sfc_main$3, {
				show: confirmingLeavingTeam.value,
				onClose: ($event) => confirmingLeavingTeam.value = false
			}, {
				title: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Leave Team `);
					else return [createTextVNode(" Leave Team ")];
				}),
				content: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Are you sure you would like to leave this team? `);
					else return [createTextVNode(" Are you sure you would like to leave this team? ")];
				}),
				footer: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(_sfc_main$11, { onClick: ($event) => confirmingLeavingTeam.value = false }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Cancel `);
								else return [createTextVNode(" Cancel ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$4, {
							class: ["ms-3", { "opacity-25": unref(leaveTeamForm).processing }],
							disabled: unref(leaveTeamForm).processing,
							onClick: leaveTeam
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Leave `);
								else return [createTextVNode(" Leave ")];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [createVNode(_sfc_main$11, { onClick: ($event) => confirmingLeavingTeam.value = false }, {
						default: withCtx(() => [createTextVNode(" Cancel ")]),
						_: 1
					}, 8, ["onClick"]), createVNode(_sfc_main$4, {
						class: ["ms-3", { "opacity-25": unref(leaveTeamForm).processing }],
						disabled: unref(leaveTeamForm).processing,
						onClick: leaveTeam
					}, {
						default: withCtx(() => [createTextVNode(" Leave ")]),
						_: 1
					}, 8, ["class", "disabled"])];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_sfc_main$3, {
				show: teamMemberBeingRemoved.value,
				onClose: ($event) => teamMemberBeingRemoved.value = null
			}, {
				title: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Remove Team Member `);
					else return [createTextVNode(" Remove Team Member ")];
				}),
				content: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Are you sure you would like to remove this person from the team? `);
					else return [createTextVNode(" Are you sure you would like to remove this person from the team? ")];
				}),
				footer: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(_sfc_main$11, { onClick: ($event) => teamMemberBeingRemoved.value = null }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Cancel `);
								else return [createTextVNode(" Cancel ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$4, {
							class: ["ms-3", { "opacity-25": unref(removeTeamMemberForm).processing }],
							disabled: unref(removeTeamMemberForm).processing,
							onClick: removeTeamMember
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Remove `);
								else return [createTextVNode(" Remove ")];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [createVNode(_sfc_main$11, { onClick: ($event) => teamMemberBeingRemoved.value = null }, {
						default: withCtx(() => [createTextVNode(" Cancel ")]),
						_: 1
					}, 8, ["onClick"]), createVNode(_sfc_main$4, {
						class: ["ms-3", { "opacity-25": unref(removeTeamMemberForm).processing }],
						disabled: unref(removeTeamMemberForm).processing,
						onClick: removeTeamMember
					}, {
						default: withCtx(() => [createTextVNode(" Remove ")]),
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Teams/Partials/TeamMemberManager.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
