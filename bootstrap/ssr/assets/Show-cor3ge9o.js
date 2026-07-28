import { t as SectionBorder_default } from "./SectionBorder-B2Y3Gi9P.js";
import { t as _sfc_main$1 } from "./AppLayout-Bp11IFkZ.js";
import _sfc_main$2 from "./DeleteTeamForm-D_t68kTB.js";
import _sfc_main$3 from "./TeamMemberManager-4thyF4fY.js";
import _sfc_main$4 from "./UpdateTeamNameForm-CaTJjL0M.js";
import { Fragment, createBlock, createCommentVNode, createVNode, mergeProps, openBlock, useSSRContext, withCtx } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
//#region resources/js/Pages/Teams/Show.vue
var _sfc_main = {
	__name: "Show",
	__ssrInlineRender: true,
	props: {
		team: Object,
		availableRoles: Array,
		permissions: Object
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Team Settings" }, _attrs), {
				header: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> Team Settings </h2>`);
					else return [createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, " Team Settings ")];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div${_scopeId}><div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$4, {
							team: __props.team,
							permissions: __props.permissions
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$3, {
							class: "mt-10 sm:mt-0",
							team: __props.team,
							"available-roles": __props.availableRoles,
							"user-permissions": __props.permissions
						}, null, _parent, _scopeId));
						if (__props.permissions.canDeleteTeam && !__props.team.personal_team) {
							_push(`<!--[-->`);
							_push(ssrRenderComponent(SectionBorder_default, null, null, _parent, _scopeId));
							_push(ssrRenderComponent(_sfc_main$2, {
								class: "mt-10 sm:mt-0",
								team: __props.team
							}, null, _parent, _scopeId));
							_push(`<!--]-->`);
						} else _push(`<!---->`);
						_push(`</div></div>`);
					} else return [createVNode("div", null, [createVNode("div", { class: "max-w-7xl mx-auto py-10 sm:px-6 lg:px-8" }, [
						createVNode(_sfc_main$4, {
							team: __props.team,
							permissions: __props.permissions
						}, null, 8, ["team", "permissions"]),
						createVNode(_sfc_main$3, {
							class: "mt-10 sm:mt-0",
							team: __props.team,
							"available-roles": __props.availableRoles,
							"user-permissions": __props.permissions
						}, null, 8, [
							"team",
							"available-roles",
							"user-permissions"
						]),
						__props.permissions.canDeleteTeam && !__props.team.personal_team ? (openBlock(), createBlock(Fragment, { key: 0 }, [createVNode(SectionBorder_default), createVNode(_sfc_main$2, {
							class: "mt-10 sm:mt-0",
							team: __props.team
						}, null, 8, ["team"])], 64)) : createCommentVNode("", true)
					])])];
				}),
				_: 1
			}, _parent));
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Teams/Show.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
