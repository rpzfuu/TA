import { defineComponent, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-tMI_FdMz.js";
import { usePage, Head } from "@inertiajs/vue3";
import "axios";
import "dayjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Profile",
  __ssrInlineRender: true,
  setup(__props) {
    const { auth } = usePage().props;
    function formatDate(dateString) {
      const options = {
        year: "numeric",
        month: "short",
        day: "2-digit"
      };
      return new Date(dateString).toLocaleDateString("en-GB", options);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Profile" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="pb-10 text-xl font-semibold leading-tight text-gray-800"${_scopeId}> Profile Information </h2>`);
          } else {
            return [
              createVNode("h2", { class: "pb-10 text-xl font-semibold leading-tight text-gray-800" }, " Profile Information ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full mx-auto space-y-6"${_scopeId}><div class="p-6 bg-white shadow sm:p-8 sm:rounded-lg"${_scopeId}><h3 class="text-lg font-medium leading-6 text-gray-900"${_scopeId}> Personal Information </h3><div class="mt-5"${_scopeId}><dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2"${_scopeId}><div class="sm:col-span-1"${_scopeId}><dt class="text-sm font-medium text-gray-500"${_scopeId}> NIK </dt><dd class="mt-1 text-sm text-gray-900"${_scopeId}>${ssrInterpolate(unref(auth).user.nik)}</dd></div><div class="sm:col-span-1"${_scopeId}><dt class="text-sm font-medium text-gray-500"${_scopeId}> Name </dt><dd class="mt-1 text-sm text-gray-900"${_scopeId}>${ssrInterpolate(unref(auth).user.karyawan.nama)}</dd></div><div class="sm:col-span-1"${_scopeId}><dt class="text-sm font-medium text-gray-500"${_scopeId}> Gender </dt><dd class="mt-1 text-sm text-gray-900"${_scopeId}>${ssrInterpolate(unref(auth).user.karyawan.jenkel)}</dd></div><div class="sm:col-span-1"${_scopeId}><dt class="text-sm font-medium text-gray-500"${_scopeId}> Date of Birth </dt><dd class="mt-1 text-sm text-gray-900"${_scopeId}>${ssrInterpolate(formatDate(unref(auth).user.karyawan.tanggal_lahir))}</dd></div><div class="sm:col-span-1"${_scopeId}><dt class="text-sm font-medium text-gray-500"${_scopeId}> Date of Joining </dt><dd class="mt-1 text-sm text-gray-900"${_scopeId}>${ssrInterpolate(formatDate(unref(auth).user.karyawan.tanggal_masuk))}</dd></div></dl></div></div><div class="p-6 bg-white shadow sm:p-8 sm:rounded-lg"${_scopeId}><h3 class="text-lg font-medium leading-6 text-gray-900"${_scopeId}> Job Information </h3><div class="mt-5"${_scopeId}><dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2"${_scopeId}><div class="sm:col-span-1"${_scopeId}><dt class="text-sm font-medium text-gray-500"${_scopeId}> Position </dt><dd class="mt-1 text-sm text-gray-900"${_scopeId}>${ssrInterpolate(unref(auth).user.karyawan.jabatan)}</dd></div><div class="sm:col-span-1"${_scopeId}><dt class="text-sm font-medium text-gray-500"${_scopeId}> Unit </dt><dd class="mt-1 text-sm text-gray-900"${_scopeId}>${ssrInterpolate(unref(auth).user.karyawan.unit_usaha.nama_unit)}</dd></div><div class="sm:col-span-1"${_scopeId}><dt class="text-sm font-medium text-gray-500"${_scopeId}> Sub Unit </dt><dd class="mt-1 text-sm text-gray-900"${_scopeId}>${ssrInterpolate(unref(auth).user.karyawan.sub_unit)}</dd></div><div class="sm:col-span-1"${_scopeId}><dt class="text-sm font-medium text-gray-500"${_scopeId}> Employee Group </dt><dd class="mt-1 text-sm text-gray-900"${_scopeId}>${ssrInterpolate(unref(auth).user.karyawan.egrup)}</dd></div><div class="sm:col-span-1"${_scopeId}><dt class="text-sm font-medium text-gray-500"${_scopeId}> Sub Group </dt><dd class="mt-1 text-sm text-gray-900"${_scopeId}>${ssrInterpolate(unref(auth).user.karyawan.esubgrup)}</dd></div></dl></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full mx-auto space-y-6" }, [
                createVNode("div", { class: "p-6 bg-white shadow sm:p-8 sm:rounded-lg" }, [
                  createVNode("h3", { class: "text-lg font-medium leading-6 text-gray-900" }, " Personal Information "),
                  createVNode("div", { class: "mt-5" }, [
                    createVNode("dl", { class: "grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2" }, [
                      createVNode("div", { class: "sm:col-span-1" }, [
                        createVNode("dt", { class: "text-sm font-medium text-gray-500" }, " NIK "),
                        createVNode("dd", { class: "mt-1 text-sm text-gray-900" }, toDisplayString(unref(auth).user.nik), 1)
                      ]),
                      createVNode("div", { class: "sm:col-span-1" }, [
                        createVNode("dt", { class: "text-sm font-medium text-gray-500" }, " Name "),
                        createVNode("dd", { class: "mt-1 text-sm text-gray-900" }, toDisplayString(unref(auth).user.karyawan.nama), 1)
                      ]),
                      createVNode("div", { class: "sm:col-span-1" }, [
                        createVNode("dt", { class: "text-sm font-medium text-gray-500" }, " Gender "),
                        createVNode("dd", { class: "mt-1 text-sm text-gray-900" }, toDisplayString(unref(auth).user.karyawan.jenkel), 1)
                      ]),
                      createVNode("div", { class: "sm:col-span-1" }, [
                        createVNode("dt", { class: "text-sm font-medium text-gray-500" }, " Date of Birth "),
                        createVNode("dd", { class: "mt-1 text-sm text-gray-900" }, toDisplayString(formatDate(unref(auth).user.karyawan.tanggal_lahir)), 1)
                      ]),
                      createVNode("div", { class: "sm:col-span-1" }, [
                        createVNode("dt", { class: "text-sm font-medium text-gray-500" }, " Date of Joining "),
                        createVNode("dd", { class: "mt-1 text-sm text-gray-900" }, toDisplayString(formatDate(unref(auth).user.karyawan.tanggal_masuk)), 1)
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "p-6 bg-white shadow sm:p-8 sm:rounded-lg" }, [
                  createVNode("h3", { class: "text-lg font-medium leading-6 text-gray-900" }, " Job Information "),
                  createVNode("div", { class: "mt-5" }, [
                    createVNode("dl", { class: "grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2" }, [
                      createVNode("div", { class: "sm:col-span-1" }, [
                        createVNode("dt", { class: "text-sm font-medium text-gray-500" }, " Position "),
                        createVNode("dd", { class: "mt-1 text-sm text-gray-900" }, toDisplayString(unref(auth).user.karyawan.jabatan), 1)
                      ]),
                      createVNode("div", { class: "sm:col-span-1" }, [
                        createVNode("dt", { class: "text-sm font-medium text-gray-500" }, " Unit "),
                        createVNode("dd", { class: "mt-1 text-sm text-gray-900" }, toDisplayString(unref(auth).user.karyawan.unit_usaha.nama_unit), 1)
                      ]),
                      createVNode("div", { class: "sm:col-span-1" }, [
                        createVNode("dt", { class: "text-sm font-medium text-gray-500" }, " Sub Unit "),
                        createVNode("dd", { class: "mt-1 text-sm text-gray-900" }, toDisplayString(unref(auth).user.karyawan.sub_unit), 1)
                      ]),
                      createVNode("div", { class: "sm:col-span-1" }, [
                        createVNode("dt", { class: "text-sm font-medium text-gray-500" }, " Employee Group "),
                        createVNode("dd", { class: "mt-1 text-sm text-gray-900" }, toDisplayString(unref(auth).user.karyawan.egrup), 1)
                      ]),
                      createVNode("div", { class: "sm:col-span-1" }, [
                        createVNode("dt", { class: "text-sm font-medium text-gray-500" }, " Sub Group "),
                        createVNode("dd", { class: "mt-1 text-sm text-gray-900" }, toDisplayString(unref(auth).user.karyawan.esubgrup), 1)
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
