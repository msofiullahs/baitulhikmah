import { computed, mergeProps, ref, unref, useSSRContext } from "vue";
import { ssrIncludeBooleanAttr, ssrRenderAttr, ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { EyeIcon, EyeSlashIcon } from "@heroicons/vue/24/outline";
//#region resources/js/Components/PasswordInput.vue
var _sfc_main = {
	__name: "PasswordInput",
	__ssrInlineRender: true,
	props: {
		modelValue: String,
		placeholder: String,
		required: Boolean,
		autocomplete: String
	},
	emits: ["update:modelValue"],
	setup(__props) {
		const showPassword = ref(false);
		const inputType = computed(() => {
			return showPassword.value ? "text" : "password";
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><input${ssrRenderAttr("type", inputType.value)} class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full pr-10"${ssrRenderAttr("value", __props.modelValue)}${ssrRenderAttr("placeholder", __props.placeholder)}${ssrIncludeBooleanAttr(__props.required) ? " required" : ""}${ssrRenderAttr("autocomplete", __props.autocomplete)}><button type="button" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none" tabindex="-1">`);
			if (showPassword.value) _push(ssrRenderComponent(unref(EyeSlashIcon), { class: "h-5 w-5" }, null, _parent));
			else _push(ssrRenderComponent(unref(EyeIcon), { class: "h-5 w-5" }, null, _parent));
			_push(`</button></div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/PasswordInput.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as t };
