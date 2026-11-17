import { t as _sfc_main$1 } from "./Modal-CLSC5svO.js";
import { t as AdminLayout_default } from "./AdminLayout-JKKJHCcy.js";
import { t as _sfc_main$2 } from "./Pagination-DiptkPBm.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelSelect, vModelText, withCtx, withDirectives, withKeys, withModifiers } from "vue";
import { Head, router, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { MagnifyingGlassIcon, PlusIcon, TrashIcon } from "@heroicons/vue/24/outline";
//#region resources/js/Pages/Tpq/Students/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: {
		students: Object,
		classes: Array
	},
	setup(__props) {
		const search = ref("");
		const modalOpen = ref(false);
		const editMode = ref(false);
		const currentStudent = ref(null);
		const form = useForm({
			nis: "",
			nama: "",
			jenis_kelamin: "L",
			tanggal_lahir: "",
			nama_ortu: "",
			no_hp_ortu: "",
			alamat: "",
			tanggal_masuk: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
			class_ids: []
		});
		const submit = () => {
			if (editMode.value && currentStudent.value) form.put(route("tpq.students.update", currentStudent.value.id), { onSuccess: () => {
				closeModal();
			} });
			else form.post(route("tpq.students.store"), { onSuccess: () => {
				closeModal();
			} });
		};
		const closeModal = () => {
			modalOpen.value = false;
			editMode.value = false;
			currentStudent.value = null;
			form.reset();
		};
		const deleteItem = (item) => {
			if (confirm(`Hapus santri "${item.nama}"?`)) router.delete(route("tpq.students.destroy", item.id));
		};
		const filterStudents = () => {
			router.get(route("tpq.students.index"), { search: search.value }, { preserveState: true });
		};
		const genderBadge = (gender) => {
			return gender === "L" ? "<span class=\"px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium\">Laki-laki</span>" : "<span class=\"px-2 py-1 bg-pink-100 text-pink-800 rounded-full text-xs font-medium\">Perempuan</span>";
		};
		const statusBadge = (status) => {
			const badges = {
				aktif: "bg-green-100 text-green-800",
				lulus: "bg-blue-100 text-blue-800",
				pindah: "bg-yellow-100 text-yellow-800",
				nonaktif: "bg-gray-100 text-gray-800"
			};
			return `<span class="px-2 py-1 rounded-full text-xs font-medium ${badges[status] || badges.aktif}">${{
				aktif: "Aktif",
				lulus: "Lulus",
				pindah: "Pindah",
				nonaktif: "Nonaktif"
			}[status] || status}</span>`;
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(AdminLayout_default, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "TPQ - Santri" }, null, _parent, _scopeId));
						_push(`<div class="mb-6 flex justify-between items-center"${_scopeId}><div${_scopeId}><h1 class="text-2xl font-bold text-gray-800"${_scopeId}>Data Santri TPQ</h1><p class="text-gray-500 text-sm"${_scopeId}>Kelola data santri, kelas, dan pembayaran SPP</p></div><button class="bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg flex items-center gap-2 transition shadow-md"${_scopeId}>`);
						_push(ssrRenderComponent(unref(PlusIcon), { class: "w-5 h-5" }, null, _parent, _scopeId));
						_push(` Tambah Santri </button></div><div class="bg-white rounded-xl shadow-sm p-4 mb-6"${_scopeId}><div class="flex gap-3"${_scopeId}><div class="flex-1 relative"${_scopeId}>`);
						_push(ssrRenderComponent(unref(MagnifyingGlassIcon), { class: "w-5 h-5 absolute left-3 top-2.5 text-gray-400" }, null, _parent, _scopeId));
						_push(`<input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari nama santri..." class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}></div><button class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition"${_scopeId}>Cari</button></div></div><div class="bg-white rounded-xl shadow-sm overflow-hidden"${_scopeId}><table class="w-full text-sm"${_scopeId}><thead class="bg-gray-50 text-gray-600 text-xs uppercase"${_scopeId}><tr${_scopeId}><th class="px-6 py-3 text-left"${_scopeId}>NIS</th><th class="px-6 py-3 text-left"${_scopeId}>Nama Santri</th><th class="px-6 py-3 text-center"${_scopeId}>L/P</th><th class="px-6 py-3 text-left"${_scopeId}>Nama Orang Tua</th><th class="px-6 py-3 text-left"${_scopeId}>No. HP</th><th class="px-6 py-3 text-center"${_scopeId}>Kelas</th><th class="px-6 py-3 text-center"${_scopeId}>Status</th><th class="px-6 py-3 text-center"${_scopeId}>Aksi</th></tr></thead><tbody class="divide-y"${_scopeId}><!--[-->`);
						ssrRenderList(__props.students.data, (item) => {
							_push(`<tr class="hover:bg-gray-50"${_scopeId}><td class="px-6 py-4 font-mono text-xs"${_scopeId}>${ssrInterpolate(item.nis)}</td><td class="px-6 py-4"${_scopeId}><div class="font-medium"${_scopeId}>${ssrInterpolate(item.nama)}</div><div class="text-xs text-gray-500"${_scopeId}>${ssrInterpolate(item.alamat || "-")}</div></td><td class="px-6 py-4 text-center"${_scopeId}>${genderBadge(item.jenis_kelamin) ?? ""}</td><td class="px-6 py-4"${_scopeId}>${ssrInterpolate(item.nama_ortu)}</td><td class="px-6 py-4"${_scopeId}>${ssrInterpolate(item.no_hp_ortu)}</td><td class="px-6 py-4 text-center text-xs"${_scopeId}>`);
							if (item.classes?.length) _push(`<span${_scopeId}>${ssrInterpolate(item.classes.map((c) => c.nama).join(", "))}</span>`);
							else _push(`<span class="text-gray-400"${_scopeId}>-</span>`);
							_push(`</td><td class="px-6 py-4 text-center"${_scopeId}>${statusBadge(item.status || "aktif") ?? ""}</td><td class="px-6 py-4 text-center"${_scopeId}><button class="text-gray-400 hover:text-red-600 mx-1" title="Hapus"${_scopeId}>`);
							_push(ssrRenderComponent(unref(TrashIcon), { class: "w-5 h-5 inline" }, null, _parent, _scopeId));
							_push(`</button></td></tr>`);
						});
						_push(`<!--]-->`);
						if (!__props.students.data.length) _push(`<tr${_scopeId}><td colspan="8" class="px-6 py-12 text-center text-gray-500"${_scopeId}>Tidak ada data santri</td></tr>`);
						else _push(`<!---->`);
						_push(`</tbody></table><div class="px-6 py-4 border-t"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$2, { links: __props.students.links }, null, _parent, _scopeId));
						_push(`</div></div>`);
						_push(ssrRenderComponent(_sfc_main$1, {
							show: modalOpen.value,
							title: "Tambah Santri Baru",
							onClose: closeModal
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<form class="space-y-4 max-h-[70vh] overflow-y-auto pr-2"${_scopeId}><div class="grid grid-cols-2 gap-4"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>NIS <span class="text-red-500"${_scopeId}>*</span></label><input${ssrRenderAttr("value", unref(form).nis)} type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Nomor Induk Santri"${_scopeId}>`);
									if (unref(form).errors.nis) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.nis)}</span>`);
									else _push(`<!---->`);
									_push(`</div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Jenis Kelamin <span class="text-red-500"${_scopeId}>*</span></label><select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}><option value="L"${ssrIncludeBooleanAttr(Array.isArray(unref(form).jenis_kelamin) ? ssrLooseContain(unref(form).jenis_kelamin, "L") : ssrLooseEqual(unref(form).jenis_kelamin, "L")) ? " selected" : ""}${_scopeId}>Laki-laki</option><option value="P"${ssrIncludeBooleanAttr(Array.isArray(unref(form).jenis_kelamin) ? ssrLooseContain(unref(form).jenis_kelamin, "P") : ssrLooseEqual(unref(form).jenis_kelamin, "P")) ? " selected" : ""}${_scopeId}>Perempuan</option></select></div></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Nama Lengkap <span class="text-red-500"${_scopeId}>*</span></label><input${ssrRenderAttr("value", unref(form).nama)} type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}>`);
									if (unref(form).errors.nama) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.nama)}</span>`);
									else _push(`<!---->`);
									_push(`</div><div class="grid grid-cols-2 gap-4"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Tanggal Lahir</label><input${ssrRenderAttr("value", unref(form).tanggal_lahir)} type="date" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Tanggal Masuk <span class="text-red-500"${_scopeId}>*</span></label><input${ssrRenderAttr("value", unref(form).tanggal_masuk)} type="date" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}>`);
									if (unref(form).errors.tanggal_masuk) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.tanggal_masuk)}</span>`);
									else _push(`<!---->`);
									_push(`</div></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Nama Orang Tua <span class="text-red-500"${_scopeId}>*</span></label><input${ssrRenderAttr("value", unref(form).nama_ortu)} type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}>`);
									if (unref(form).errors.nama_ortu) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.nama_ortu)}</span>`);
									else _push(`<!---->`);
									_push(`</div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>No. HP Orang Tua <span class="text-red-500"${_scopeId}>*</span></label><input${ssrRenderAttr("value", unref(form).no_hp_ortu)} type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}>`);
									if (unref(form).errors.no_hp_ortu) _push(`<span class="text-red-500 text-xs"${_scopeId}>${ssrInterpolate(unref(form).errors.no_hp_ortu)}</span>`);
									else _push(`<!---->`);
									_push(`</div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Alamat</label><textarea rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}>${ssrInterpolate(unref(form).alamat)}</textarea></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Kelas (Multi-select)</label><select multiple class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none h-32"${_scopeId}><!--[-->`);
									ssrRenderList(__props.classes, (cls) => {
										_push(`<option${ssrRenderAttr("value", cls.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).class_ids) ? ssrLooseContain(unref(form).class_ids, cls.id) : ssrLooseEqual(unref(form).class_ids, cls.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(cls.nama)}</option>`);
									});
									_push(`<!--]--></select><p class="text-xs text-gray-500 mt-1"${_scopeId}>Hold Ctrl/Cmd untuk pilih beberapa kelas</p></div><div class="flex justify-end gap-3 pt-4 border-t"${_scopeId}><button type="button" class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"${_scopeId}>Batal</button><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="px-4 py-2 bg-primary text-white rounded-lg disabled:opacity-50"${_scopeId}>${ssrInterpolate(unref(form).processing ? "Menyimpan..." : "Simpan")}</button></div></form>`);
								} else return [createVNode("form", {
									onSubmit: withModifiers(submit, ["prevent"]),
									class: "space-y-4 max-h-[70vh] overflow-y-auto pr-2"
								}, [
									createVNode("div", { class: "grid grid-cols-2 gap-4" }, [createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("NIS "), createVNode("span", { class: "text-red-500" }, "*")]),
										withDirectives(createVNode("input", {
											"onUpdate:modelValue": ($event) => unref(form).nis = $event,
											type: "text",
											class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
											placeholder: "Nomor Induk Santri"
										}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).nis]]),
										unref(form).errors.nis ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(form).errors.nis), 1)) : createCommentVNode("", true)
									]), createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Jenis Kelamin "), createVNode("span", { class: "text-red-500" }, "*")]), withDirectives(createVNode("select", {
										"onUpdate:modelValue": ($event) => unref(form).jenis_kelamin = $event,
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, [createVNode("option", { value: "L" }, "Laki-laki"), createVNode("option", { value: "P" }, "Perempuan")], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).jenis_kelamin]])])]),
									createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Nama Lengkap "), createVNode("span", { class: "text-red-500" }, "*")]),
										withDirectives(createVNode("input", {
											"onUpdate:modelValue": ($event) => unref(form).nama = $event,
											type: "text",
											class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
										}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).nama]]),
										unref(form).errors.nama ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(form).errors.nama), 1)) : createCommentVNode("", true)
									]),
									createVNode("div", { class: "grid grid-cols-2 gap-4" }, [createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Tanggal Lahir"), withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).tanggal_lahir = $event,
										type: "date",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).tanggal_lahir]])]), createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Tanggal Masuk "), createVNode("span", { class: "text-red-500" }, "*")]),
										withDirectives(createVNode("input", {
											"onUpdate:modelValue": ($event) => unref(form).tanggal_masuk = $event,
											type: "date",
											class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
										}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).tanggal_masuk]]),
										unref(form).errors.tanggal_masuk ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(form).errors.tanggal_masuk), 1)) : createCommentVNode("", true)
									])]),
									createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Nama Orang Tua "), createVNode("span", { class: "text-red-500" }, "*")]),
										withDirectives(createVNode("input", {
											"onUpdate:modelValue": ($event) => unref(form).nama_ortu = $event,
											type: "text",
											class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
										}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).nama_ortu]]),
										unref(form).errors.nama_ortu ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(form).errors.nama_ortu), 1)) : createCommentVNode("", true)
									]),
									createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("No. HP Orang Tua "), createVNode("span", { class: "text-red-500" }, "*")]),
										withDirectives(createVNode("input", {
											"onUpdate:modelValue": ($event) => unref(form).no_hp_ortu = $event,
											type: "text",
											class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
										}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).no_hp_ortu]]),
										unref(form).errors.no_hp_ortu ? (openBlock(), createBlock("span", {
											key: 0,
											class: "text-red-500 text-xs"
										}, toDisplayString(unref(form).errors.no_hp_ortu), 1)) : createCommentVNode("", true)
									]),
									createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Alamat"), withDirectives(createVNode("textarea", {
										"onUpdate:modelValue": ($event) => unref(form).alamat = $event,
										rows: "2",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).alamat]])]),
									createVNode("div", null, [
										createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Kelas (Multi-select)"),
										withDirectives(createVNode("select", {
											"onUpdate:modelValue": ($event) => unref(form).class_ids = $event,
											multiple: "",
											class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none h-32"
										}, [(openBlock(true), createBlock(Fragment, null, renderList(__props.classes, (cls) => {
											return openBlock(), createBlock("option", {
												key: cls.id,
												value: cls.id
											}, toDisplayString(cls.nama), 9, ["value"]);
										}), 128))], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).class_ids]]),
										createVNode("p", { class: "text-xs text-gray-500 mt-1" }, "Hold Ctrl/Cmd untuk pilih beberapa kelas")
									]),
									createVNode("div", { class: "flex justify-end gap-3 pt-4 border-t" }, [createVNode("button", {
										type: "button",
										onClick: closeModal,
										class: "px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
									}, "Batal"), createVNode("button", {
										type: "submit",
										disabled: unref(form).processing,
										class: "px-4 py-2 bg-primary text-white rounded-lg disabled:opacity-50"
									}, toDisplayString(unref(form).processing ? "Menyimpan..." : "Simpan"), 9, ["disabled"])])
								], 32)];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [
						createVNode(unref(Head), { title: "TPQ - Santri" }),
						createVNode("div", { class: "mb-6 flex justify-between items-center" }, [createVNode("div", null, [createVNode("h1", { class: "text-2xl font-bold text-gray-800" }, "Data Santri TPQ"), createVNode("p", { class: "text-gray-500 text-sm" }, "Kelola data santri, kelas, dan pembayaran SPP")]), createVNode("button", {
							onClick: ($event) => {
								modalOpen.value = true;
								editMode.value = false;
								unref(form).reset();
							},
							class: "bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg flex items-center gap-2 transition shadow-md"
						}, [createVNode(unref(PlusIcon), { class: "w-5 h-5" }), createTextVNode(" Tambah Santri ")], 8, ["onClick"])]),
						createVNode("div", { class: "bg-white rounded-xl shadow-sm p-4 mb-6" }, [createVNode("div", { class: "flex gap-3" }, [createVNode("div", { class: "flex-1 relative" }, [createVNode(unref(MagnifyingGlassIcon), { class: "w-5 h-5 absolute left-3 top-2.5 text-gray-400" }), withDirectives(createVNode("input", {
							"onUpdate:modelValue": ($event) => search.value = $event,
							onKeyup: withKeys(filterStudents, ["enter"]),
							type: "text",
							placeholder: "Cari nama santri...",
							class: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
						}, null, 40, ["onUpdate:modelValue"]), [[vModelText, search.value]])]), createVNode("button", {
							onClick: filterStudents,
							class: "px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition"
						}, "Cari")])]),
						createVNode("div", { class: "bg-white rounded-xl shadow-sm overflow-hidden" }, [createVNode("table", { class: "w-full text-sm" }, [createVNode("thead", { class: "bg-gray-50 text-gray-600 text-xs uppercase" }, [createVNode("tr", null, [
							createVNode("th", { class: "px-6 py-3 text-left" }, "NIS"),
							createVNode("th", { class: "px-6 py-3 text-left" }, "Nama Santri"),
							createVNode("th", { class: "px-6 py-3 text-center" }, "L/P"),
							createVNode("th", { class: "px-6 py-3 text-left" }, "Nama Orang Tua"),
							createVNode("th", { class: "px-6 py-3 text-left" }, "No. HP"),
							createVNode("th", { class: "px-6 py-3 text-center" }, "Kelas"),
							createVNode("th", { class: "px-6 py-3 text-center" }, "Status"),
							createVNode("th", { class: "px-6 py-3 text-center" }, "Aksi")
						])]), createVNode("tbody", { class: "divide-y" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.students.data, (item) => {
							return openBlock(), createBlock("tr", {
								key: item.id,
								class: "hover:bg-gray-50"
							}, [
								createVNode("td", { class: "px-6 py-4 font-mono text-xs" }, toDisplayString(item.nis), 1),
								createVNode("td", { class: "px-6 py-4" }, [createVNode("div", { class: "font-medium" }, toDisplayString(item.nama), 1), createVNode("div", { class: "text-xs text-gray-500" }, toDisplayString(item.alamat || "-"), 1)]),
								createVNode("td", {
									class: "px-6 py-4 text-center",
									innerHTML: genderBadge(item.jenis_kelamin)
								}, null, 8, ["innerHTML"]),
								createVNode("td", { class: "px-6 py-4" }, toDisplayString(item.nama_ortu), 1),
								createVNode("td", { class: "px-6 py-4" }, toDisplayString(item.no_hp_ortu), 1),
								createVNode("td", { class: "px-6 py-4 text-center text-xs" }, [item.classes?.length ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(item.classes.map((c) => c.nama).join(", ")), 1)) : (openBlock(), createBlock("span", {
									key: 1,
									class: "text-gray-400"
								}, "-"))]),
								createVNode("td", {
									class: "px-6 py-4 text-center",
									innerHTML: statusBadge(item.status || "aktif")
								}, null, 8, ["innerHTML"]),
								createVNode("td", { class: "px-6 py-4 text-center" }, [createVNode("button", {
									onClick: ($event) => deleteItem(item),
									class: "text-gray-400 hover:text-red-600 mx-1",
									title: "Hapus"
								}, [createVNode(unref(TrashIcon), { class: "w-5 h-5 inline" })], 8, ["onClick"])])
							]);
						}), 128)), !__props.students.data.length ? (openBlock(), createBlock("tr", { key: 0 }, [createVNode("td", {
							colspan: "8",
							class: "px-6 py-12 text-center text-gray-500"
						}, "Tidak ada data santri")])) : createCommentVNode("", true)])]), createVNode("div", { class: "px-6 py-4 border-t" }, [createVNode(_sfc_main$2, { links: __props.students.links }, null, 8, ["links"])])]),
						createVNode(_sfc_main$1, {
							show: modalOpen.value,
							title: "Tambah Santri Baru",
							onClose: closeModal
						}, {
							default: withCtx(() => [createVNode("form", {
								onSubmit: withModifiers(submit, ["prevent"]),
								class: "space-y-4 max-h-[70vh] overflow-y-auto pr-2"
							}, [
								createVNode("div", { class: "grid grid-cols-2 gap-4" }, [createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("NIS "), createVNode("span", { class: "text-red-500" }, "*")]),
									withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).nis = $event,
										type: "text",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none",
										placeholder: "Nomor Induk Santri"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).nis]]),
									unref(form).errors.nis ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(form).errors.nis), 1)) : createCommentVNode("", true)
								]), createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Jenis Kelamin "), createVNode("span", { class: "text-red-500" }, "*")]), withDirectives(createVNode("select", {
									"onUpdate:modelValue": ($event) => unref(form).jenis_kelamin = $event,
									class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
								}, [createVNode("option", { value: "L" }, "Laki-laki"), createVNode("option", { value: "P" }, "Perempuan")], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).jenis_kelamin]])])]),
								createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Nama Lengkap "), createVNode("span", { class: "text-red-500" }, "*")]),
									withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).nama = $event,
										type: "text",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).nama]]),
									unref(form).errors.nama ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(form).errors.nama), 1)) : createCommentVNode("", true)
								]),
								createVNode("div", { class: "grid grid-cols-2 gap-4" }, [createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Tanggal Lahir"), withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => unref(form).tanggal_lahir = $event,
									type: "date",
									class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).tanggal_lahir]])]), createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Tanggal Masuk "), createVNode("span", { class: "text-red-500" }, "*")]),
									withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).tanggal_masuk = $event,
										type: "date",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).tanggal_masuk]]),
									unref(form).errors.tanggal_masuk ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(form).errors.tanggal_masuk), 1)) : createCommentVNode("", true)
								])]),
								createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("Nama Orang Tua "), createVNode("span", { class: "text-red-500" }, "*")]),
									withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).nama_ortu = $event,
										type: "text",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).nama_ortu]]),
									unref(form).errors.nama_ortu ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(form).errors.nama_ortu), 1)) : createCommentVNode("", true)
								]),
								createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, [createTextVNode("No. HP Orang Tua "), createVNode("span", { class: "text-red-500" }, "*")]),
									withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => unref(form).no_hp_ortu = $event,
										type: "text",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).no_hp_ortu]]),
									unref(form).errors.no_hp_ortu ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-red-500 text-xs"
									}, toDisplayString(unref(form).errors.no_hp_ortu), 1)) : createCommentVNode("", true)
								]),
								createVNode("div", null, [createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Alamat"), withDirectives(createVNode("textarea", {
									"onUpdate:modelValue": ($event) => unref(form).alamat = $event,
									rows: "2",
									class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).alamat]])]),
								createVNode("div", null, [
									createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Kelas (Multi-select)"),
									withDirectives(createVNode("select", {
										"onUpdate:modelValue": ($event) => unref(form).class_ids = $event,
										multiple: "",
										class: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none h-32"
									}, [(openBlock(true), createBlock(Fragment, null, renderList(__props.classes, (cls) => {
										return openBlock(), createBlock("option", {
											key: cls.id,
											value: cls.id
										}, toDisplayString(cls.nama), 9, ["value"]);
									}), 128))], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).class_ids]]),
									createVNode("p", { class: "text-xs text-gray-500 mt-1" }, "Hold Ctrl/Cmd untuk pilih beberapa kelas")
								]),
								createVNode("div", { class: "flex justify-end gap-3 pt-4 border-t" }, [createVNode("button", {
									type: "button",
									onClick: closeModal,
									class: "px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
								}, "Batal"), createVNode("button", {
									type: "submit",
									disabled: unref(form).processing,
									class: "px-4 py-2 bg-primary text-white rounded-lg disabled:opacity-50"
								}, toDisplayString(unref(form).processing ? "Menyimpan..." : "Simpan"), 9, ["disabled"])])
							], 32)]),
							_: 1
						}, 8, ["show"])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Tpq/Students/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
