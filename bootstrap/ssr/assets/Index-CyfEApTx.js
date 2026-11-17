import { t as _sfc_main$1 } from "./Modal-CLSC5svO.js";
import { t as _sfc_main$2 } from "./InputError-DXJH4Bz-.js";
import { t as _sfc_main$3 } from "./InputLabel-BrItThsh.js";
import { t as _sfc_main$4 } from "./PrimaryButton-B1NJcOT8.js";
import { t as _sfc_main$5 } from "./SecondaryButton-BD33s9TB.js";
import { t as _sfc_main$6 } from "./TextInput-Deywsrn-.js";
import { t as AdminLayout_default } from "./AdminLayout-JKKJHCcy.js";
import { t as _sfc_main$7 } from "./Pagination-DiptkPBm.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelCheckbox, vModelSelect, vModelText, withCtx, withDirectives, withKeys, withModifiers } from "vue";
import { Head, router, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { MagnifyingGlassIcon, MapPinIcon, PencilIcon, PhoneIcon, PlusIcon, TrashIcon, UserIcon } from "@heroicons/vue/24/outline";
//#region resources/js/Pages/Jamaah/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: {
		jamaahs: Object,
		categories: Array,
		filters: Object
	},
	setup(__props) {
		const search = ref(__props.filters?.search || "");
		const modalOpen = ref(false);
		const editMode = ref(false);
		const selectedJamaah = ref(null);
		const form = useForm({
			nama: "",
			nik: "",
			jenis_kelamin: "L",
			tanggal_lahir: "",
			alamat: "",
			rt: "",
			rw: "",
			kelurahan: "",
			kecamatan: "",
			kota: "",
			no_hp: "",
			email: "",
			pekerjaan: "",
			status: "aktif",
			catatan: "",
			category_ids: [],
			foto: null
		});
		const openCreateModal = () => {
			editMode.value = false;
			selectedJamaah.value = null;
			form.reset();
			form.category_ids = [];
			modalOpen.value = true;
		};
		const openEditModal = (jamaah) => {
			editMode.value = true;
			selectedJamaah.value = jamaah;
			form.nama = jamaah.nama;
			form.nik = jamaah.nik || "";
			form.jenis_kelamin = jamaah.jenis_kelamin;
			form.tanggal_lahir = jamaah.tanggal_lahir ? new Date(jamaah.tanggal_lahir).toISOString().split("T")[0] : "";
			form.alamat = jamaah.alamat || "";
			form.rt = jamaah.rt || "";
			form.rw = jamaah.rw || "";
			form.kelurahan = jamaah.kelurahan || "";
			form.kecamatan = jamaah.kecamatan || "";
			form.kota = jamaah.kota || "";
			form.no_hp = jamaah.no_hp || "";
			form.email = jamaah.email || "";
			form.pekerjaan = jamaah.pekerjaan || "";
			form.status = jamaah.status || "aktif";
			form.catatan = jamaah.catatan || "";
			form.category_ids = jamaah.categories ? jamaah.categories.map((c) => c.id) : [];
			modalOpen.value = true;
		};
		const submit = () => {
			if (editMode.value && selectedJamaah.value) form.put(route("jamaah.update", selectedJamaah.value.id), {
				onSuccess: () => {
					modalOpen.value = false;
					form.reset();
				},
				onError: () => {}
			});
			else form.post(route("jamaah.store"), {
				onSuccess: () => {
					modalOpen.value = false;
					form.reset();
				},
				onError: () => {}
			});
		};
		const deleteItem = (jamaah) => {
			if (confirm(`Apakah Anda yakin ingin menghapus jamaah ${jamaah.nama}?`)) router.delete(route("jamaah.destroy", jamaah.id));
		};
		const searchJamaah = () => {
			router.get(route("jamaah.index"), { search: search.value }, { preserveState: true });
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(AdminLayout_default, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "Data Jamaah" }, null, _parent, _scopeId));
						_push(`<div class="mb-6 flex justify-between items-center"${_scopeId}><div${_scopeId}><h1 class="text-2xl font-bold text-gray-800"${_scopeId}>Data Jamaah</h1><p class="text-gray-500 text-sm"${_scopeId}>Kelola data jamaah masjid</p></div><button class="bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg flex items-center gap-2 transition shadow-md"${_scopeId}>`);
						_push(ssrRenderComponent(unref(PlusIcon), { class: "w-5 h-5" }, null, _parent, _scopeId));
						_push(` Tambah Jamaah </button></div><div class="bg-white rounded-xl shadow-sm p-4 mb-6"${_scopeId}><div class="flex gap-3"${_scopeId}><div class="flex-1 relative"${_scopeId}>`);
						_push(ssrRenderComponent(unref(MagnifyingGlassIcon), { class: "w-5 h-5 absolute left-3 top-2.5 text-gray-400" }, null, _parent, _scopeId));
						_push(`<input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari nama atau nomor HP..." class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"${_scopeId}></div><button class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-light transition"${_scopeId}> Cari </button></div></div><div class="bg-white rounded-xl shadow-sm overflow-hidden"${_scopeId}><table class="w-full text-sm"${_scopeId}><thead class="bg-gray-50 text-gray-600 text-xs uppercase"${_scopeId}><tr${_scopeId}><th class="px-6 py-3 text-left"${_scopeId}>Nama</th><th class="px-6 py-3 text-left"${_scopeId}>Kontak</th><th class="px-6 py-3 text-left"${_scopeId}>Alamat</th><th class="px-6 py-3 text-center"${_scopeId}>Kategori</th><th class="px-6 py-3 text-center"${_scopeId}>Status</th><th class="px-6 py-3 text-center"${_scopeId}>Aksi</th></tr></thead><tbody class="divide-y"${_scopeId}><!--[-->`);
						ssrRenderList(__props.jamaahs.data, (item) => {
							_push(`<tr class="hover:bg-gray-50"${_scopeId}><td class="px-6 py-4"${_scopeId}><div class="flex items-center gap-3"${_scopeId}>`);
							if (item.foto) _push(`<div class="w-10 h-10 rounded-full overflow-hidden bg-gray-200"${_scopeId}><img${ssrRenderAttr("src", `/storage/${item.foto}`)}${ssrRenderAttr("alt", item.nama)} class="w-full h-full object-cover"${_scopeId}></div>`);
							else _push(`<div class="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-white font-semibold"${_scopeId}>${ssrInterpolate(item.nama.charAt(0).toUpperCase())}</div>`);
							_push(`<div${_scopeId}><div class="font-medium text-gray-900"${_scopeId}>${ssrInterpolate(item.nama)}</div><div class="text-xs text-gray-500"${_scopeId}>${ssrInterpolate(item.jenis_kelamin === "L" ? "Laki-laki" : "Perempuan")}</div></div></div></td><td class="px-6 py-4"${_scopeId}><div class="flex items-center gap-2 text-gray-600"${_scopeId}>`);
							_push(ssrRenderComponent(unref(PhoneIcon), { class: "w-4 h-4" }, null, _parent, _scopeId));
							_push(`<span${_scopeId}>${ssrInterpolate(item.no_hp || "-")}</span></div><div class="text-xs text-gray-500 mt-1"${_scopeId}>${ssrInterpolate(item.email || "-")}</div></td><td class="px-6 py-4"${_scopeId}><div class="flex items-center gap-2 text-gray-600"${_scopeId}>`);
							_push(ssrRenderComponent(unref(MapPinIcon), { class: "w-4 h-4" }, null, _parent, _scopeId));
							_push(`<span class="truncate max-w-xs"${_scopeId}>${ssrInterpolate(item.alamat || "-")}</span></div></td><td class="px-6 py-4 text-center"${_scopeId}><div class="flex flex-wrap gap-1 justify-center"${_scopeId}><!--[-->`);
							ssrRenderList(item.categories, (cat) => {
								_push(`<span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"${_scopeId}>${ssrInterpolate(cat.nama)}</span>`);
							});
							_push(`<!--]-->`);
							if (!item.categories || item.categories.length === 0) _push(`<span class="text-gray-400"${_scopeId}>-</span>`);
							else _push(`<!---->`);
							_push(`</div></td><td class="px-6 py-4 text-center"${_scopeId}><span class="${ssrRenderClass([{
								"bg-green-100 text-green-800": item.status === "aktif",
								"bg-yellow-100 text-yellow-800": item.status === "pindah",
								"bg-gray-100 text-gray-800": item.status === "meninggal",
								"bg-red-100 text-red-800": item.status === "nonaktif"
							}, "px-2 py-1 text-xs rounded-full font-medium"])}"${_scopeId}>${ssrInterpolate(item.status)}</span></td><td class="px-6 py-4 text-center"${_scopeId}><button class="text-gray-400 hover:text-primary mx-1" title="Edit"${_scopeId}>`);
							_push(ssrRenderComponent(unref(PencilIcon), { class: "w-5 h-5 inline" }, null, _parent, _scopeId));
							_push(`</button><button class="text-gray-400 hover:text-red-600 mx-1" title="Hapus"${_scopeId}>`);
							_push(ssrRenderComponent(unref(TrashIcon), { class: "w-5 h-5 inline" }, null, _parent, _scopeId));
							_push(`</button></td></tr>`);
						});
						_push(`<!--]-->`);
						if (!__props.jamaahs.data || __props.jamaahs.data.length === 0) {
							_push(`<tr${_scopeId}><td colspan="6" class="px-6 py-12 text-center text-gray-500"${_scopeId}>`);
							_push(ssrRenderComponent(unref(UserIcon), { class: "w-12 h-12 mx-auto mb-3 text-gray-300" }, null, _parent, _scopeId));
							_push(`<p${_scopeId}>Tidak ada data jamaah</p></td></tr>`);
						} else _push(`<!---->`);
						_push(`</tbody></table><div class="px-6 py-4 border-t"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$7, { links: __props.jamaahs.links }, null, _parent, _scopeId));
						_push(`</div></div>`);
						_push(ssrRenderComponent(_sfc_main$1, {
							show: modalOpen.value,
							title: editMode.value ? "Edit Jamaah" : "Tambah Jamaah Baru",
							onClose: ($event) => modalOpen.value = false,
							"max-width": "4xl"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<form class="space-y-4"${_scopeId}><div class="grid grid-cols-1 md:grid-cols-2 gap-4"${_scopeId}><div${_scopeId}>`);
									_push(ssrRenderComponent(_sfc_main$3, {
										for: "nama",
										value: "Nama Lengkap *"
									}, null, _parent, _scopeId));
									_push(ssrRenderComponent(_sfc_main$6, {
										id: "nama",
										modelValue: unref(form).nama,
										"onUpdate:modelValue": ($event) => unref(form).nama = $event,
										type: "text",
										class: "mt-1 block w-full",
										required: ""
									}, null, _parent, _scopeId));
									_push(ssrRenderComponent(_sfc_main$2, {
										message: unref(form).errors.nama,
										class: "mt-1"
									}, null, _parent, _scopeId));
									_push(`</div><div${_scopeId}>`);
									_push(ssrRenderComponent(_sfc_main$3, {
										for: "nik",
										value: "NIK"
									}, null, _parent, _scopeId));
									_push(ssrRenderComponent(_sfc_main$6, {
										id: "nik",
										modelValue: unref(form).nik,
										"onUpdate:modelValue": ($event) => unref(form).nik = $event,
										type: "text",
										class: "mt-1 block w-full"
									}, null, _parent, _scopeId));
									_push(ssrRenderComponent(_sfc_main$2, {
										message: unref(form).errors.nik,
										class: "mt-1"
									}, null, _parent, _scopeId));
									_push(`</div><div${_scopeId}>`);
									_push(ssrRenderComponent(_sfc_main$3, {
										for: "jenis_kelamin",
										value: "Jenis Kelamin *"
									}, null, _parent, _scopeId));
									_push(`<select id="jenis_kelamin" class="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-primary focus:ring-primary"${_scopeId}><option value="L"${ssrIncludeBooleanAttr(Array.isArray(unref(form).jenis_kelamin) ? ssrLooseContain(unref(form).jenis_kelamin, "L") : ssrLooseEqual(unref(form).jenis_kelamin, "L")) ? " selected" : ""}${_scopeId}>Laki-laki</option><option value="P"${ssrIncludeBooleanAttr(Array.isArray(unref(form).jenis_kelamin) ? ssrLooseContain(unref(form).jenis_kelamin, "P") : ssrLooseEqual(unref(form).jenis_kelamin, "P")) ? " selected" : ""}${_scopeId}>Perempuan</option></select>`);
									_push(ssrRenderComponent(_sfc_main$2, {
										message: unref(form).errors.jenis_kelamin,
										class: "mt-1"
									}, null, _parent, _scopeId));
									_push(`</div><div${_scopeId}>`);
									_push(ssrRenderComponent(_sfc_main$3, {
										for: "tanggal_lahir",
										value: "Tanggal Lahir"
									}, null, _parent, _scopeId));
									_push(ssrRenderComponent(_sfc_main$6, {
										id: "tanggal_lahir",
										modelValue: unref(form).tanggal_lahir,
										"onUpdate:modelValue": ($event) => unref(form).tanggal_lahir = $event,
										type: "date",
										class: "mt-1 block w-full"
									}, null, _parent, _scopeId));
									_push(ssrRenderComponent(_sfc_main$2, {
										message: unref(form).errors.tanggal_lahir,
										class: "mt-1"
									}, null, _parent, _scopeId));
									_push(`</div><div${_scopeId}>`);
									_push(ssrRenderComponent(_sfc_main$3, {
										for: "no_hp",
										value: "Nomor HP"
									}, null, _parent, _scopeId));
									_push(ssrRenderComponent(_sfc_main$6, {
										id: "no_hp",
										modelValue: unref(form).no_hp,
										"onUpdate:modelValue": ($event) => unref(form).no_hp = $event,
										type: "text",
										class: "mt-1 block w-full",
										placeholder: "08xxxxxxxxxx"
									}, null, _parent, _scopeId));
									_push(ssrRenderComponent(_sfc_main$2, {
										message: unref(form).errors.no_hp,
										class: "mt-1"
									}, null, _parent, _scopeId));
									_push(`</div><div${_scopeId}>`);
									_push(ssrRenderComponent(_sfc_main$3, {
										for: "email",
										value: "Email"
									}, null, _parent, _scopeId));
									_push(ssrRenderComponent(_sfc_main$6, {
										id: "email",
										modelValue: unref(form).email,
										"onUpdate:modelValue": ($event) => unref(form).email = $event,
										type: "email",
										class: "mt-1 block w-full"
									}, null, _parent, _scopeId));
									_push(ssrRenderComponent(_sfc_main$2, {
										message: unref(form).errors.email,
										class: "mt-1"
									}, null, _parent, _scopeId));
									_push(`</div><div${_scopeId}>`);
									_push(ssrRenderComponent(_sfc_main$3, {
										for: "pekerjaan",
										value: "Pekerjaan"
									}, null, _parent, _scopeId));
									_push(ssrRenderComponent(_sfc_main$6, {
										id: "pekerjaan",
										modelValue: unref(form).pekerjaan,
										"onUpdate:modelValue": ($event) => unref(form).pekerjaan = $event,
										type: "text",
										class: "mt-1 block w-full"
									}, null, _parent, _scopeId));
									_push(ssrRenderComponent(_sfc_main$2, {
										message: unref(form).errors.pekerjaan,
										class: "mt-1"
									}, null, _parent, _scopeId));
									_push(`</div><div${_scopeId}>`);
									_push(ssrRenderComponent(_sfc_main$3, {
										for: "status",
										value: "Status"
									}, null, _parent, _scopeId));
									_push(`<select id="status" class="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-primary focus:ring-primary"${_scopeId}><option value="aktif"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "aktif") : ssrLooseEqual(unref(form).status, "aktif")) ? " selected" : ""}${_scopeId}>Aktif</option><option value="pindah"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "pindah") : ssrLooseEqual(unref(form).status, "pindah")) ? " selected" : ""}${_scopeId}>Pindah</option><option value="meninggal"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "meninggal") : ssrLooseEqual(unref(form).status, "meninggal")) ? " selected" : ""}${_scopeId}>Meninggal</option><option value="nonaktif"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "nonaktif") : ssrLooseEqual(unref(form).status, "nonaktif")) ? " selected" : ""}${_scopeId}>Nonaktif</option></select>`);
									_push(ssrRenderComponent(_sfc_main$2, {
										message: unref(form).errors.status,
										class: "mt-1"
									}, null, _parent, _scopeId));
									_push(`</div></div><div${_scopeId}>`);
									_push(ssrRenderComponent(_sfc_main$3, { value: "Alamat Lengkap" }, null, _parent, _scopeId));
									_push(`<div class="grid grid-cols-1 md:grid-cols-3 gap-3 mt-1"${_scopeId}><div class="md:col-span-2"${_scopeId}>`);
									_push(ssrRenderComponent(_sfc_main$6, {
										modelValue: unref(form).alamat,
										"onUpdate:modelValue": ($event) => unref(form).alamat = $event,
										type: "text",
										class: "block w-full",
										placeholder: "Nama jalan, gang, dll"
									}, null, _parent, _scopeId));
									_push(`</div><div class="grid grid-cols-2 gap-2"${_scopeId}>`);
									_push(ssrRenderComponent(_sfc_main$6, {
										modelValue: unref(form).rt,
										"onUpdate:modelValue": ($event) => unref(form).rt = $event,
										type: "text",
										class: "block w-full",
										placeholder: "RT"
									}, null, _parent, _scopeId));
									_push(ssrRenderComponent(_sfc_main$6, {
										modelValue: unref(form).rw,
										"onUpdate:modelValue": ($event) => unref(form).rw = $event,
										type: "text",
										class: "block w-full",
										placeholder: "RW"
									}, null, _parent, _scopeId));
									_push(`</div></div><div class="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2"${_scopeId}>`);
									_push(ssrRenderComponent(_sfc_main$6, {
										modelValue: unref(form).kelurahan,
										"onUpdate:modelValue": ($event) => unref(form).kelurahan = $event,
										type: "text",
										class: "block w-full",
										placeholder: "Kelurahan"
									}, null, _parent, _scopeId));
									_push(ssrRenderComponent(_sfc_main$6, {
										modelValue: unref(form).kecamatan,
										"onUpdate:modelValue": ($event) => unref(form).kecamatan = $event,
										type: "text",
										class: "block w-full",
										placeholder: "Kecamatan"
									}, null, _parent, _scopeId));
									_push(ssrRenderComponent(_sfc_main$6, {
										modelValue: unref(form).kota,
										"onUpdate:modelValue": ($event) => unref(form).kota = $event,
										type: "text",
										class: "block w-full",
										placeholder: "Kota/Kabupaten"
									}, null, _parent, _scopeId));
									_push(`</div>`);
									_push(ssrRenderComponent(_sfc_main$2, {
										message: unref(form).errors.alamat,
										class: "mt-1"
									}, null, _parent, _scopeId));
									_push(`</div><div${_scopeId}>`);
									_push(ssrRenderComponent(_sfc_main$3, { value: "Kategori Jamaah" }, null, _parent, _scopeId));
									_push(`<div class="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2"${_scopeId}><!--[-->`);
									ssrRenderList(__props.categories, (cat) => {
										_push(`<label class="flex items-center gap-2 p-2 border rounded-lg cursor-pointer hover:bg-gray-50"${_scopeId}><input type="checkbox"${ssrRenderAttr("value", cat.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).category_ids) ? ssrLooseContain(unref(form).category_ids, cat.id) : unref(form).category_ids) ? " checked" : ""} class="rounded text-primary focus:ring-primary"${_scopeId}><span class="text-sm"${_scopeId}>${ssrInterpolate(cat.nama)}</span></label>`);
									});
									_push(`<!--]--></div></div><div${_scopeId}>`);
									_push(ssrRenderComponent(_sfc_main$3, {
										for: "catatan",
										value: "Catatan"
									}, null, _parent, _scopeId));
									_push(`<textarea id="catatan" rows="3" class="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-primary focus:ring-primary" placeholder="Catatan khusus..."${_scopeId}>${ssrInterpolate(unref(form).catatan)}</textarea>`);
									_push(ssrRenderComponent(_sfc_main$2, {
										message: unref(form).errors.catatan,
										class: "mt-1"
									}, null, _parent, _scopeId));
									_push(`</div><div${_scopeId}>`);
									_push(ssrRenderComponent(_sfc_main$3, {
										for: "foto",
										value: "Foto Jamaah"
									}, null, _parent, _scopeId));
									_push(`<input id="foto" type="file" accept="image/*" class="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary-light file:text-white hover:file:bg-primary"${_scopeId}>`);
									_push(ssrRenderComponent(_sfc_main$2, {
										message: unref(form).errors.foto,
										class: "mt-1"
									}, null, _parent, _scopeId));
									if (editMode.value && selectedJamaah.value?.foto) _push(`<div class="mt-2"${_scopeId}><img${ssrRenderAttr("src", `/storage/${selectedJamaah.value.foto}`)} alt="Foto saat ini" class="w-20 h-20 object-cover rounded-lg"${_scopeId}></div>`);
									else _push(`<!---->`);
									_push(`</div><div class="flex justify-end gap-3 pt-4 border-t"${_scopeId}>`);
									_push(ssrRenderComponent(_sfc_main$5, { onClick: ($event) => modalOpen.value = false }, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(`Batal`);
											else return [createTextVNode("Batal")];
										}),
										_: 1
									}, _parent, _scopeId));
									_push(ssrRenderComponent(_sfc_main$4, { disabled: unref(form).processing }, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(`${ssrInterpolate(unref(form).processing ? "Menyimpan..." : "Simpan")}`);
											else return [createTextVNode(toDisplayString(unref(form).processing ? "Menyimpan..." : "Simpan"), 1)];
										}),
										_: 1
									}, _parent, _scopeId));
									_push(`</div></form>`);
								} else return [createVNode("form", {
									onSubmit: withModifiers(submit, ["prevent"]),
									class: "space-y-4"
								}, [
									createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
										createVNode("div", null, [
											createVNode(_sfc_main$3, {
												for: "nama",
												value: "Nama Lengkap *"
											}),
											createVNode(_sfc_main$6, {
												id: "nama",
												modelValue: unref(form).nama,
												"onUpdate:modelValue": ($event) => unref(form).nama = $event,
												type: "text",
												class: "mt-1 block w-full",
												required: ""
											}, null, 8, ["modelValue", "onUpdate:modelValue"]),
											createVNode(_sfc_main$2, {
												message: unref(form).errors.nama,
												class: "mt-1"
											}, null, 8, ["message"])
										]),
										createVNode("div", null, [
											createVNode(_sfc_main$3, {
												for: "nik",
												value: "NIK"
											}),
											createVNode(_sfc_main$6, {
												id: "nik",
												modelValue: unref(form).nik,
												"onUpdate:modelValue": ($event) => unref(form).nik = $event,
												type: "text",
												class: "mt-1 block w-full"
											}, null, 8, ["modelValue", "onUpdate:modelValue"]),
											createVNode(_sfc_main$2, {
												message: unref(form).errors.nik,
												class: "mt-1"
											}, null, 8, ["message"])
										]),
										createVNode("div", null, [
											createVNode(_sfc_main$3, {
												for: "jenis_kelamin",
												value: "Jenis Kelamin *"
											}),
											withDirectives(createVNode("select", {
												id: "jenis_kelamin",
												"onUpdate:modelValue": ($event) => unref(form).jenis_kelamin = $event,
												class: "mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-primary focus:ring-primary"
											}, [createVNode("option", { value: "L" }, "Laki-laki"), createVNode("option", { value: "P" }, "Perempuan")], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).jenis_kelamin]]),
											createVNode(_sfc_main$2, {
												message: unref(form).errors.jenis_kelamin,
												class: "mt-1"
											}, null, 8, ["message"])
										]),
										createVNode("div", null, [
											createVNode(_sfc_main$3, {
												for: "tanggal_lahir",
												value: "Tanggal Lahir"
											}),
											createVNode(_sfc_main$6, {
												id: "tanggal_lahir",
												modelValue: unref(form).tanggal_lahir,
												"onUpdate:modelValue": ($event) => unref(form).tanggal_lahir = $event,
												type: "date",
												class: "mt-1 block w-full"
											}, null, 8, ["modelValue", "onUpdate:modelValue"]),
											createVNode(_sfc_main$2, {
												message: unref(form).errors.tanggal_lahir,
												class: "mt-1"
											}, null, 8, ["message"])
										]),
										createVNode("div", null, [
											createVNode(_sfc_main$3, {
												for: "no_hp",
												value: "Nomor HP"
											}),
											createVNode(_sfc_main$6, {
												id: "no_hp",
												modelValue: unref(form).no_hp,
												"onUpdate:modelValue": ($event) => unref(form).no_hp = $event,
												type: "text",
												class: "mt-1 block w-full",
												placeholder: "08xxxxxxxxxx"
											}, null, 8, ["modelValue", "onUpdate:modelValue"]),
											createVNode(_sfc_main$2, {
												message: unref(form).errors.no_hp,
												class: "mt-1"
											}, null, 8, ["message"])
										]),
										createVNode("div", null, [
											createVNode(_sfc_main$3, {
												for: "email",
												value: "Email"
											}),
											createVNode(_sfc_main$6, {
												id: "email",
												modelValue: unref(form).email,
												"onUpdate:modelValue": ($event) => unref(form).email = $event,
												type: "email",
												class: "mt-1 block w-full"
											}, null, 8, ["modelValue", "onUpdate:modelValue"]),
											createVNode(_sfc_main$2, {
												message: unref(form).errors.email,
												class: "mt-1"
											}, null, 8, ["message"])
										]),
										createVNode("div", null, [
											createVNode(_sfc_main$3, {
												for: "pekerjaan",
												value: "Pekerjaan"
											}),
											createVNode(_sfc_main$6, {
												id: "pekerjaan",
												modelValue: unref(form).pekerjaan,
												"onUpdate:modelValue": ($event) => unref(form).pekerjaan = $event,
												type: "text",
												class: "mt-1 block w-full"
											}, null, 8, ["modelValue", "onUpdate:modelValue"]),
											createVNode(_sfc_main$2, {
												message: unref(form).errors.pekerjaan,
												class: "mt-1"
											}, null, 8, ["message"])
										]),
										createVNode("div", null, [
											createVNode(_sfc_main$3, {
												for: "status",
												value: "Status"
											}),
											withDirectives(createVNode("select", {
												id: "status",
												"onUpdate:modelValue": ($event) => unref(form).status = $event,
												class: "mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-primary focus:ring-primary"
											}, [
												createVNode("option", { value: "aktif" }, "Aktif"),
												createVNode("option", { value: "pindah" }, "Pindah"),
												createVNode("option", { value: "meninggal" }, "Meninggal"),
												createVNode("option", { value: "nonaktif" }, "Nonaktif")
											], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).status]]),
											createVNode(_sfc_main$2, {
												message: unref(form).errors.status,
												class: "mt-1"
											}, null, 8, ["message"])
										])
									]),
									createVNode("div", null, [
										createVNode(_sfc_main$3, { value: "Alamat Lengkap" }),
										createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-3 mt-1" }, [createVNode("div", { class: "md:col-span-2" }, [createVNode(_sfc_main$6, {
											modelValue: unref(form).alamat,
											"onUpdate:modelValue": ($event) => unref(form).alamat = $event,
											type: "text",
											class: "block w-full",
											placeholder: "Nama jalan, gang, dll"
										}, null, 8, ["modelValue", "onUpdate:modelValue"])]), createVNode("div", { class: "grid grid-cols-2 gap-2" }, [createVNode(_sfc_main$6, {
											modelValue: unref(form).rt,
											"onUpdate:modelValue": ($event) => unref(form).rt = $event,
											type: "text",
											class: "block w-full",
											placeholder: "RT"
										}, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(_sfc_main$6, {
											modelValue: unref(form).rw,
											"onUpdate:modelValue": ($event) => unref(form).rw = $event,
											type: "text",
											class: "block w-full",
											placeholder: "RW"
										}, null, 8, ["modelValue", "onUpdate:modelValue"])])]),
										createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-3 mt-2" }, [
											createVNode(_sfc_main$6, {
												modelValue: unref(form).kelurahan,
												"onUpdate:modelValue": ($event) => unref(form).kelurahan = $event,
												type: "text",
												class: "block w-full",
												placeholder: "Kelurahan"
											}, null, 8, ["modelValue", "onUpdate:modelValue"]),
											createVNode(_sfc_main$6, {
												modelValue: unref(form).kecamatan,
												"onUpdate:modelValue": ($event) => unref(form).kecamatan = $event,
												type: "text",
												class: "block w-full",
												placeholder: "Kecamatan"
											}, null, 8, ["modelValue", "onUpdate:modelValue"]),
											createVNode(_sfc_main$6, {
												modelValue: unref(form).kota,
												"onUpdate:modelValue": ($event) => unref(form).kota = $event,
												type: "text",
												class: "block w-full",
												placeholder: "Kota/Kabupaten"
											}, null, 8, ["modelValue", "onUpdate:modelValue"])
										]),
										createVNode(_sfc_main$2, {
											message: unref(form).errors.alamat,
											class: "mt-1"
										}, null, 8, ["message"])
									]),
									createVNode("div", null, [createVNode(_sfc_main$3, { value: "Kategori Jamaah" }), createVNode("div", { class: "grid grid-cols-2 md:grid-cols-4 gap-2 mt-2" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (cat) => {
										return openBlock(), createBlock("label", {
											key: cat.id,
											class: "flex items-center gap-2 p-2 border rounded-lg cursor-pointer hover:bg-gray-50"
										}, [withDirectives(createVNode("input", {
											type: "checkbox",
											value: cat.id,
											"onUpdate:modelValue": ($event) => unref(form).category_ids = $event,
											class: "rounded text-primary focus:ring-primary"
										}, null, 8, ["value", "onUpdate:modelValue"]), [[vModelCheckbox, unref(form).category_ids]]), createVNode("span", { class: "text-sm" }, toDisplayString(cat.nama), 1)]);
									}), 128))])]),
									createVNode("div", null, [
										createVNode(_sfc_main$3, {
											for: "catatan",
											value: "Catatan"
										}),
										withDirectives(createVNode("textarea", {
											id: "catatan",
											"onUpdate:modelValue": ($event) => unref(form).catatan = $event,
											rows: "3",
											class: "mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-primary focus:ring-primary",
											placeholder: "Catatan khusus..."
										}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).catatan]]),
										createVNode(_sfc_main$2, {
											message: unref(form).errors.catatan,
											class: "mt-1"
										}, null, 8, ["message"])
									]),
									createVNode("div", null, [
										createVNode(_sfc_main$3, {
											for: "foto",
											value: "Foto Jamaah"
										}),
										createVNode("input", {
											id: "foto",
											type: "file",
											onInput: ($event) => unref(form).foto = $event.target.files[0],
											accept: "image/*",
											class: "mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary-light file:text-white hover:file:bg-primary"
										}, null, 40, ["onInput"]),
										createVNode(_sfc_main$2, {
											message: unref(form).errors.foto,
											class: "mt-1"
										}, null, 8, ["message"]),
										editMode.value && selectedJamaah.value?.foto ? (openBlock(), createBlock("div", {
											key: 0,
											class: "mt-2"
										}, [createVNode("img", {
											src: `/storage/${selectedJamaah.value.foto}`,
											alt: "Foto saat ini",
											class: "w-20 h-20 object-cover rounded-lg"
										}, null, 8, ["src"])])) : createCommentVNode("", true)
									]),
									createVNode("div", { class: "flex justify-end gap-3 pt-4 border-t" }, [createVNode(_sfc_main$5, { onClick: ($event) => modalOpen.value = false }, {
										default: withCtx(() => [createTextVNode("Batal")]),
										_: 1
									}, 8, ["onClick"]), createVNode(_sfc_main$4, { disabled: unref(form).processing }, {
										default: withCtx(() => [createTextVNode(toDisplayString(unref(form).processing ? "Menyimpan..." : "Simpan"), 1)]),
										_: 1
									}, 8, ["disabled"])])
								], 32)];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [
						createVNode(unref(Head), { title: "Data Jamaah" }),
						createVNode("div", { class: "mb-6 flex justify-between items-center" }, [createVNode("div", null, [createVNode("h1", { class: "text-2xl font-bold text-gray-800" }, "Data Jamaah"), createVNode("p", { class: "text-gray-500 text-sm" }, "Kelola data jamaah masjid")]), createVNode("button", {
							onClick: openCreateModal,
							class: "bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg flex items-center gap-2 transition shadow-md"
						}, [createVNode(unref(PlusIcon), { class: "w-5 h-5" }), createTextVNode(" Tambah Jamaah ")])]),
						createVNode("div", { class: "bg-white rounded-xl shadow-sm p-4 mb-6" }, [createVNode("div", { class: "flex gap-3" }, [createVNode("div", { class: "flex-1 relative" }, [createVNode(unref(MagnifyingGlassIcon), { class: "w-5 h-5 absolute left-3 top-2.5 text-gray-400" }), withDirectives(createVNode("input", {
							"onUpdate:modelValue": ($event) => search.value = $event,
							onKeyup: withKeys(searchJamaah, ["enter"]),
							type: "text",
							placeholder: "Cari nama atau nomor HP...",
							class: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
						}, null, 40, ["onUpdate:modelValue"]), [[vModelText, search.value]])]), createVNode("button", {
							onClick: searchJamaah,
							class: "bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-light transition"
						}, " Cari ")])]),
						createVNode("div", { class: "bg-white rounded-xl shadow-sm overflow-hidden" }, [createVNode("table", { class: "w-full text-sm" }, [createVNode("thead", { class: "bg-gray-50 text-gray-600 text-xs uppercase" }, [createVNode("tr", null, [
							createVNode("th", { class: "px-6 py-3 text-left" }, "Nama"),
							createVNode("th", { class: "px-6 py-3 text-left" }, "Kontak"),
							createVNode("th", { class: "px-6 py-3 text-left" }, "Alamat"),
							createVNode("th", { class: "px-6 py-3 text-center" }, "Kategori"),
							createVNode("th", { class: "px-6 py-3 text-center" }, "Status"),
							createVNode("th", { class: "px-6 py-3 text-center" }, "Aksi")
						])]), createVNode("tbody", { class: "divide-y" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.jamaahs.data, (item) => {
							return openBlock(), createBlock("tr", {
								key: item.id,
								class: "hover:bg-gray-50"
							}, [
								createVNode("td", { class: "px-6 py-4" }, [createVNode("div", { class: "flex items-center gap-3" }, [item.foto ? (openBlock(), createBlock("div", {
									key: 0,
									class: "w-10 h-10 rounded-full overflow-hidden bg-gray-200"
								}, [createVNode("img", {
									src: `/storage/${item.foto}`,
									alt: item.nama,
									class: "w-full h-full object-cover"
								}, null, 8, ["src", "alt"])])) : (openBlock(), createBlock("div", {
									key: 1,
									class: "w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-white font-semibold"
								}, toDisplayString(item.nama.charAt(0).toUpperCase()), 1)), createVNode("div", null, [createVNode("div", { class: "font-medium text-gray-900" }, toDisplayString(item.nama), 1), createVNode("div", { class: "text-xs text-gray-500" }, toDisplayString(item.jenis_kelamin === "L" ? "Laki-laki" : "Perempuan"), 1)])])]),
								createVNode("td", { class: "px-6 py-4" }, [createVNode("div", { class: "flex items-center gap-2 text-gray-600" }, [createVNode(unref(PhoneIcon), { class: "w-4 h-4" }), createVNode("span", null, toDisplayString(item.no_hp || "-"), 1)]), createVNode("div", { class: "text-xs text-gray-500 mt-1" }, toDisplayString(item.email || "-"), 1)]),
								createVNode("td", { class: "px-6 py-4" }, [createVNode("div", { class: "flex items-center gap-2 text-gray-600" }, [createVNode(unref(MapPinIcon), { class: "w-4 h-4" }), createVNode("span", { class: "truncate max-w-xs" }, toDisplayString(item.alamat || "-"), 1)])]),
								createVNode("td", { class: "px-6 py-4 text-center" }, [createVNode("div", { class: "flex flex-wrap gap-1 justify-center" }, [(openBlock(true), createBlock(Fragment, null, renderList(item.categories, (cat) => {
									return openBlock(), createBlock("span", {
										key: cat.id,
										class: "px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
									}, toDisplayString(cat.nama), 1);
								}), 128)), !item.categories || item.categories.length === 0 ? (openBlock(), createBlock("span", {
									key: 0,
									class: "text-gray-400"
								}, "-")) : createCommentVNode("", true)])]),
								createVNode("td", { class: "px-6 py-4 text-center" }, [createVNode("span", { class: [{
									"bg-green-100 text-green-800": item.status === "aktif",
									"bg-yellow-100 text-yellow-800": item.status === "pindah",
									"bg-gray-100 text-gray-800": item.status === "meninggal",
									"bg-red-100 text-red-800": item.status === "nonaktif"
								}, "px-2 py-1 text-xs rounded-full font-medium"] }, toDisplayString(item.status), 3)]),
								createVNode("td", { class: "px-6 py-4 text-center" }, [createVNode("button", {
									onClick: ($event) => openEditModal(item),
									class: "text-gray-400 hover:text-primary mx-1",
									title: "Edit"
								}, [createVNode(unref(PencilIcon), { class: "w-5 h-5 inline" })], 8, ["onClick"]), createVNode("button", {
									onClick: ($event) => deleteItem(item),
									class: "text-gray-400 hover:text-red-600 mx-1",
									title: "Hapus"
								}, [createVNode(unref(TrashIcon), { class: "w-5 h-5 inline" })], 8, ["onClick"])])
							]);
						}), 128)), !__props.jamaahs.data || __props.jamaahs.data.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [createVNode("td", {
							colspan: "6",
							class: "px-6 py-12 text-center text-gray-500"
						}, [createVNode(unref(UserIcon), { class: "w-12 h-12 mx-auto mb-3 text-gray-300" }), createVNode("p", null, "Tidak ada data jamaah")])])) : createCommentVNode("", true)])]), createVNode("div", { class: "px-6 py-4 border-t" }, [createVNode(_sfc_main$7, { links: __props.jamaahs.links }, null, 8, ["links"])])]),
						createVNode(_sfc_main$1, {
							show: modalOpen.value,
							title: editMode.value ? "Edit Jamaah" : "Tambah Jamaah Baru",
							onClose: ($event) => modalOpen.value = false,
							"max-width": "4xl"
						}, {
							default: withCtx(() => [createVNode("form", {
								onSubmit: withModifiers(submit, ["prevent"]),
								class: "space-y-4"
							}, [
								createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
									createVNode("div", null, [
										createVNode(_sfc_main$3, {
											for: "nama",
											value: "Nama Lengkap *"
										}),
										createVNode(_sfc_main$6, {
											id: "nama",
											modelValue: unref(form).nama,
											"onUpdate:modelValue": ($event) => unref(form).nama = $event,
											type: "text",
											class: "mt-1 block w-full",
											required: ""
										}, null, 8, ["modelValue", "onUpdate:modelValue"]),
										createVNode(_sfc_main$2, {
											message: unref(form).errors.nama,
											class: "mt-1"
										}, null, 8, ["message"])
									]),
									createVNode("div", null, [
										createVNode(_sfc_main$3, {
											for: "nik",
											value: "NIK"
										}),
										createVNode(_sfc_main$6, {
											id: "nik",
											modelValue: unref(form).nik,
											"onUpdate:modelValue": ($event) => unref(form).nik = $event,
											type: "text",
											class: "mt-1 block w-full"
										}, null, 8, ["modelValue", "onUpdate:modelValue"]),
										createVNode(_sfc_main$2, {
											message: unref(form).errors.nik,
											class: "mt-1"
										}, null, 8, ["message"])
									]),
									createVNode("div", null, [
										createVNode(_sfc_main$3, {
											for: "jenis_kelamin",
											value: "Jenis Kelamin *"
										}),
										withDirectives(createVNode("select", {
											id: "jenis_kelamin",
											"onUpdate:modelValue": ($event) => unref(form).jenis_kelamin = $event,
											class: "mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-primary focus:ring-primary"
										}, [createVNode("option", { value: "L" }, "Laki-laki"), createVNode("option", { value: "P" }, "Perempuan")], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).jenis_kelamin]]),
										createVNode(_sfc_main$2, {
											message: unref(form).errors.jenis_kelamin,
											class: "mt-1"
										}, null, 8, ["message"])
									]),
									createVNode("div", null, [
										createVNode(_sfc_main$3, {
											for: "tanggal_lahir",
											value: "Tanggal Lahir"
										}),
										createVNode(_sfc_main$6, {
											id: "tanggal_lahir",
											modelValue: unref(form).tanggal_lahir,
											"onUpdate:modelValue": ($event) => unref(form).tanggal_lahir = $event,
											type: "date",
											class: "mt-1 block w-full"
										}, null, 8, ["modelValue", "onUpdate:modelValue"]),
										createVNode(_sfc_main$2, {
											message: unref(form).errors.tanggal_lahir,
											class: "mt-1"
										}, null, 8, ["message"])
									]),
									createVNode("div", null, [
										createVNode(_sfc_main$3, {
											for: "no_hp",
											value: "Nomor HP"
										}),
										createVNode(_sfc_main$6, {
											id: "no_hp",
											modelValue: unref(form).no_hp,
											"onUpdate:modelValue": ($event) => unref(form).no_hp = $event,
											type: "text",
											class: "mt-1 block w-full",
											placeholder: "08xxxxxxxxxx"
										}, null, 8, ["modelValue", "onUpdate:modelValue"]),
										createVNode(_sfc_main$2, {
											message: unref(form).errors.no_hp,
											class: "mt-1"
										}, null, 8, ["message"])
									]),
									createVNode("div", null, [
										createVNode(_sfc_main$3, {
											for: "email",
											value: "Email"
										}),
										createVNode(_sfc_main$6, {
											id: "email",
											modelValue: unref(form).email,
											"onUpdate:modelValue": ($event) => unref(form).email = $event,
											type: "email",
											class: "mt-1 block w-full"
										}, null, 8, ["modelValue", "onUpdate:modelValue"]),
										createVNode(_sfc_main$2, {
											message: unref(form).errors.email,
											class: "mt-1"
										}, null, 8, ["message"])
									]),
									createVNode("div", null, [
										createVNode(_sfc_main$3, {
											for: "pekerjaan",
											value: "Pekerjaan"
										}),
										createVNode(_sfc_main$6, {
											id: "pekerjaan",
											modelValue: unref(form).pekerjaan,
											"onUpdate:modelValue": ($event) => unref(form).pekerjaan = $event,
											type: "text",
											class: "mt-1 block w-full"
										}, null, 8, ["modelValue", "onUpdate:modelValue"]),
										createVNode(_sfc_main$2, {
											message: unref(form).errors.pekerjaan,
											class: "mt-1"
										}, null, 8, ["message"])
									]),
									createVNode("div", null, [
										createVNode(_sfc_main$3, {
											for: "status",
											value: "Status"
										}),
										withDirectives(createVNode("select", {
											id: "status",
											"onUpdate:modelValue": ($event) => unref(form).status = $event,
											class: "mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-primary focus:ring-primary"
										}, [
											createVNode("option", { value: "aktif" }, "Aktif"),
											createVNode("option", { value: "pindah" }, "Pindah"),
											createVNode("option", { value: "meninggal" }, "Meninggal"),
											createVNode("option", { value: "nonaktif" }, "Nonaktif")
										], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).status]]),
										createVNode(_sfc_main$2, {
											message: unref(form).errors.status,
											class: "mt-1"
										}, null, 8, ["message"])
									])
								]),
								createVNode("div", null, [
									createVNode(_sfc_main$3, { value: "Alamat Lengkap" }),
									createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-3 mt-1" }, [createVNode("div", { class: "md:col-span-2" }, [createVNode(_sfc_main$6, {
										modelValue: unref(form).alamat,
										"onUpdate:modelValue": ($event) => unref(form).alamat = $event,
										type: "text",
										class: "block w-full",
										placeholder: "Nama jalan, gang, dll"
									}, null, 8, ["modelValue", "onUpdate:modelValue"])]), createVNode("div", { class: "grid grid-cols-2 gap-2" }, [createVNode(_sfc_main$6, {
										modelValue: unref(form).rt,
										"onUpdate:modelValue": ($event) => unref(form).rt = $event,
										type: "text",
										class: "block w-full",
										placeholder: "RT"
									}, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(_sfc_main$6, {
										modelValue: unref(form).rw,
										"onUpdate:modelValue": ($event) => unref(form).rw = $event,
										type: "text",
										class: "block w-full",
										placeholder: "RW"
									}, null, 8, ["modelValue", "onUpdate:modelValue"])])]),
									createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-3 mt-2" }, [
										createVNode(_sfc_main$6, {
											modelValue: unref(form).kelurahan,
											"onUpdate:modelValue": ($event) => unref(form).kelurahan = $event,
											type: "text",
											class: "block w-full",
											placeholder: "Kelurahan"
										}, null, 8, ["modelValue", "onUpdate:modelValue"]),
										createVNode(_sfc_main$6, {
											modelValue: unref(form).kecamatan,
											"onUpdate:modelValue": ($event) => unref(form).kecamatan = $event,
											type: "text",
											class: "block w-full",
											placeholder: "Kecamatan"
										}, null, 8, ["modelValue", "onUpdate:modelValue"]),
										createVNode(_sfc_main$6, {
											modelValue: unref(form).kota,
											"onUpdate:modelValue": ($event) => unref(form).kota = $event,
											type: "text",
											class: "block w-full",
											placeholder: "Kota/Kabupaten"
										}, null, 8, ["modelValue", "onUpdate:modelValue"])
									]),
									createVNode(_sfc_main$2, {
										message: unref(form).errors.alamat,
										class: "mt-1"
									}, null, 8, ["message"])
								]),
								createVNode("div", null, [createVNode(_sfc_main$3, { value: "Kategori Jamaah" }), createVNode("div", { class: "grid grid-cols-2 md:grid-cols-4 gap-2 mt-2" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (cat) => {
									return openBlock(), createBlock("label", {
										key: cat.id,
										class: "flex items-center gap-2 p-2 border rounded-lg cursor-pointer hover:bg-gray-50"
									}, [withDirectives(createVNode("input", {
										type: "checkbox",
										value: cat.id,
										"onUpdate:modelValue": ($event) => unref(form).category_ids = $event,
										class: "rounded text-primary focus:ring-primary"
									}, null, 8, ["value", "onUpdate:modelValue"]), [[vModelCheckbox, unref(form).category_ids]]), createVNode("span", { class: "text-sm" }, toDisplayString(cat.nama), 1)]);
								}), 128))])]),
								createVNode("div", null, [
									createVNode(_sfc_main$3, {
										for: "catatan",
										value: "Catatan"
									}),
									withDirectives(createVNode("textarea", {
										id: "catatan",
										"onUpdate:modelValue": ($event) => unref(form).catatan = $event,
										rows: "3",
										class: "mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-primary focus:ring-primary",
										placeholder: "Catatan khusus..."
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).catatan]]),
									createVNode(_sfc_main$2, {
										message: unref(form).errors.catatan,
										class: "mt-1"
									}, null, 8, ["message"])
								]),
								createVNode("div", null, [
									createVNode(_sfc_main$3, {
										for: "foto",
										value: "Foto Jamaah"
									}),
									createVNode("input", {
										id: "foto",
										type: "file",
										onInput: ($event) => unref(form).foto = $event.target.files[0],
										accept: "image/*",
										class: "mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary-light file:text-white hover:file:bg-primary"
									}, null, 40, ["onInput"]),
									createVNode(_sfc_main$2, {
										message: unref(form).errors.foto,
										class: "mt-1"
									}, null, 8, ["message"]),
									editMode.value && selectedJamaah.value?.foto ? (openBlock(), createBlock("div", {
										key: 0,
										class: "mt-2"
									}, [createVNode("img", {
										src: `/storage/${selectedJamaah.value.foto}`,
										alt: "Foto saat ini",
										class: "w-20 h-20 object-cover rounded-lg"
									}, null, 8, ["src"])])) : createCommentVNode("", true)
								]),
								createVNode("div", { class: "flex justify-end gap-3 pt-4 border-t" }, [createVNode(_sfc_main$5, { onClick: ($event) => modalOpen.value = false }, {
									default: withCtx(() => [createTextVNode("Batal")]),
									_: 1
								}, 8, ["onClick"]), createVNode(_sfc_main$4, { disabled: unref(form).processing }, {
									default: withCtx(() => [createTextVNode(toDisplayString(unref(form).processing ? "Menyimpan..." : "Simpan"), 1)]),
									_: 1
								}, 8, ["disabled"])])
							], 32)]),
							_: 1
						}, 8, [
							"show",
							"title",
							"onClose"
						])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Jamaah/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
