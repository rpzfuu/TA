import { defineComponent, watch, ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { R as RequestAPI } from "./AuthenticatedLayout-tMI_FdMz.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ModalHistoryTemuan",
  __ssrInlineRender: true,
  props: {
    temuan_id: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    watch(
      () => props.temuan_id,
      (newTemuanId) => {
        if (newTemuanId) {
          form.value.temuan_id = newTemuanId;
          getTemuanHistory();
        }
      }
    );
    const form = ref({
      temuan_id: ""
    });
    const getTemuanHistory = async () => {
      try {
        temuanHistory.value.state = "loading";
        const res = await RequestAPI.getTemuanHistory({
          data: form.value
        });
        temuanHistory.value = {
          ...temuanHistory.value,
          state: "success",
          message: res.message,
          data: res.data
        };
      } catch (e) {
        temuanHistory.value.state = "error";
        temuanHistory.value.message = String(e.message);
      }
    };
    const temuanHistory = ref({
      state: "initial",
      message: "",
      data: []
    });
    const modal = ref();
    const showModal = () => {
      var _a;
      (_a = modal.value) == null ? void 0 : _a.showModal();
    };
    __expose({
      showModal
    });
    const formatDate = (dateString) => {
      const options = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      };
      return new Date(dateString).toLocaleDateString("en-GB", options);
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<dialog${ssrRenderAttrs(mergeProps({
        ref_key: "modal",
        ref: modal,
        class: "modal"
      }, _attrs))}><div class="w-full max-w-4xl modal-box"><h3 class="mb-4 text-lg font-bold">Temuan History</h3><p class="mb-4">Informasi Perubahan Serta Progres Terkait Temuan</p>`);
      if (temuanHistory.value.state == "loading") {
        _push(`<span class="text-center loading loading-spinner loading-lg"></span>`);
      } else {
        _push(`<div><!--[-->`);
        ssrRenderList((_a = temuanHistory.value) == null ? void 0 : _a.data.slice().reverse(), (history, index) => {
          _push(`<div>`);
          if (history.action == "update") {
            _push(`<div class="p-4 m-6 bg-white border rounded-lg shadow"><div class="flex items-center justify-between"><div><h4 class="text-lg font-bold">${ssrInterpolate(formatDate(history == null ? void 0 : history.created_at))}</h4><p class="text-sm text-gray-500"> Diubah Oleh: ${ssrInterpolate(history == null ? void 0 : history.karyawan.nama)} - ${ssrInterpolate(history == null ? void 0 : history.karyawan.nik)}</p></div><span class="text-white badge badge-info">${ssrInterpolate(history == null ? void 0 : history.keterangan)}</span></div><div class="mt-4"><div class="mt-2 space-y-2"><p><span class="font-bold">Temuan: </span><span class="px-2 py-1 text-gray-700">${ssrInterpolate(history == null ? void 0 : history.temuan)}</span></p><p><span class="font-bold">Status: </span><span class="px-2 py-1 text-gray-700">${ssrInterpolate(history == null ? void 0 : history.status)}</span></p><p><span class="font-bold">Tujuan: </span><span class="px-2 py-1 text-gray-700">`);
            if ((history == null ? void 0 : history.kode_unit) == "4R00") {
              _push(`<!--[-->${ssrInterpolate(history == null ? void 0 : history.unit_usaha.nama_unit)} - ${ssrInterpolate(history == null ? void 0 : history.bagian.name)}<!--]-->`);
            } else {
              _push(`<!--[-->${ssrInterpolate(history == null ? void 0 : history.unit_usaha.nama_unit)}<!--]-->`);
            }
            _push(`</span></p><p><span class="font-bold">Bidang: </span><span class="px-2 py-1 text-gray-700">${ssrInterpolate(history == null ? void 0 : history.bidang.nama)}</span></p></div></div><div class="mt-4"><div class="space-y-2"><!--[-->`);
            ssrRenderList(history == null ? void 0 : history.rekomendasi_history, (rekomendasi, rekomIndex) => {
              _push(`<div class="flex justify-between p-2 rounded-lg shadow-inner bg-gray-50"><div><p class="text-sm font-semibold"> Rekomendasi ${ssrInterpolate(rekomIndex + 1)}: </p><p class="px-2 py-1 text-gray-700">${ssrInterpolate(rekomendasi == null ? void 0 : rekomendasi.rekomendasi)}</p></div><span class="badge badge-outline">${ssrInterpolate(rekomendasi == null ? void 0 : rekomendasi.status)}</span></div>`);
            });
            _push(`<!--]--></div></div></div>`);
          } else {
            _push(`<!---->`);
          }
          if (history.action == "create") {
            _push(`<div class="p-4 m-6 bg-white border rounded-lg shadow"><div class="flex items-center justify-between"><div><h4 class="text-lg font-bold">${ssrInterpolate(formatDate(history == null ? void 0 : history.created_at))}</h4><p class="text-sm text-gray-500"> Dibuat Oleh: ${ssrInterpolate(history == null ? void 0 : history.karyawan.nama)} - ${ssrInterpolate(history == null ? void 0 : history.karyawan.nik)}</p></div><span class="text-white badge badge-info">${ssrInterpolate(history == null ? void 0 : history.keterangan)}</span></div><div class="mt-4"><div class="mt-2 space-y-2"><p><span class="font-bold">Temuan: </span><span class="px-2 py-1 text-gray-700">${ssrInterpolate(history == null ? void 0 : history.temuan)}</span></p><p><span class="font-bold">Status: </span><span class="px-2 py-1 text-gray-700">${ssrInterpolate(history == null ? void 0 : history.status)}</span></p><p><span class="font-bold">Tujuan: </span><span class="px-2 py-1 text-gray-700">`);
            if ((history == null ? void 0 : history.kode_unit) == "4R00") {
              _push(`<!--[-->${ssrInterpolate(history == null ? void 0 : history.unit_usaha.nama_unit)} - ${ssrInterpolate(history == null ? void 0 : history.bagian.name)}<!--]-->`);
            } else {
              _push(`<!--[-->${ssrInterpolate(history == null ? void 0 : history.unit_usaha.nama_unit)}<!--]-->`);
            }
            _push(`</span></p><p><span class="font-bold">Bidang: </span><span class="px-2 py-1 text-gray-700">${ssrInterpolate(history == null ? void 0 : history.bidang.nama)}</span></p></div></div><div class="mt-4"><div class="space-y-2"><!--[-->`);
            ssrRenderList(history == null ? void 0 : history.rekomendasi_history, (rekomendasi, rekomIndex) => {
              _push(`<div class="flex justify-between p-2 rounded-lg shadow-inner bg-gray-50"><div><p class="text-sm font-semibold"> Rekomendasi ${ssrInterpolate(rekomIndex + 1)}: </p><p class="px-2 py-1 text-gray-700">${ssrInterpolate(rekomendasi == null ? void 0 : rekomendasi.rekomendasi)}</p></div><span class="badge badge-outline">${ssrInterpolate(rekomendasi == null ? void 0 : rekomendasi.status)}</span></div>`);
            });
            _push(`<!--]--></div></div></div>`);
          } else {
            _push(`<!---->`);
          }
          if (history.action == "send") {
            _push(`<div class="p-4 m-6 bg-white border rounded-lg shadow"><div class="flex items-center justify-between"><div><h4 class="text-lg font-bold">${ssrInterpolate(formatDate(history == null ? void 0 : history.created_at))}</h4><p class="text-sm text-gray-500"> Dikirim Oleh: ${ssrInterpolate(history == null ? void 0 : history.karyawan.nama)} - ${ssrInterpolate(history == null ? void 0 : history.karyawan.nik)}</p></div><span class="text-white badge badge-info">${ssrInterpolate(history == null ? void 0 : history.keterangan)}</span></div></div>`);
          } else {
            _push(`<!---->`);
          }
          if (history.action == "process") {
            _push(`<div class="p-4 m-6 bg-white border rounded-lg shadow"><div class="flex items-center justify-between"><div><h4 class="text-lg font-bold">${ssrInterpolate(formatDate(history == null ? void 0 : history.created_at))}</h4><p class="text-sm text-gray-500"> Diproses Oleh: ${ssrInterpolate(history == null ? void 0 : history.karyawan.nama)} - ${ssrInterpolate(history == null ? void 0 : history.karyawan.nik)}</p></div><span class="text-white badge badge-info">${ssrInterpolate(history == null ? void 0 : history.keterangan)}</span></div></div>`);
          } else {
            _push(`<!---->`);
          }
          if (history.action == "tindaklanjut") {
            _push(`<div class="p-4 m-6 bg-white border rounded-lg shadow"><div class="flex items-center justify-between"><div><h4 class="text-lg font-bold">${ssrInterpolate(formatDate(history == null ? void 0 : history.created_at))}</h4><p class="text-sm text-gray-500"> Ditindaklanjut Oleh: ${ssrInterpolate(history == null ? void 0 : history.karyawan.nama)} - ${ssrInterpolate(history == null ? void 0 : history.karyawan.nik)}</p></div><span class="text-white badge badge-info">${ssrInterpolate(history == null ? void 0 : history.keterangan)}</span></div><div class="mt-4"><div class="mt-2 space-y-2"><p><span class="font-bold">Temuan: </span><span class="px-2 py-1 text-gray-700">${ssrInterpolate(history == null ? void 0 : history.temuan)}</span></p><p><span class="font-bold">Status: </span><span class="px-2 py-1 text-gray-700">${ssrInterpolate(history == null ? void 0 : history.status)}</span></p><p><span class="font-bold">Tujuan: </span><span class="px-2 py-1 text-gray-700">`);
            if ((history == null ? void 0 : history.kode_unit) == "4R00") {
              _push(`<!--[-->${ssrInterpolate(history == null ? void 0 : history.unit_usaha.nama_unit)} - ${ssrInterpolate(history == null ? void 0 : history.bagian.name)}<!--]-->`);
            } else {
              _push(`<!--[-->${ssrInterpolate(history == null ? void 0 : history.unit_usaha.nama_unit)}<!--]-->`);
            }
            _push(`</span></p><p><span class="font-bold">Bidang: </span><span class="px-2 py-1 text-gray-700">${ssrInterpolate(history == null ? void 0 : history.bidang.nama)}</span></p></div></div><div class="mt-4"><div class="space-y-2"><!--[-->`);
            ssrRenderList(history == null ? void 0 : history.rekomendasi_history, (rekomendasi, rekomIndex) => {
              _push(`<div class="flex justify-between p-2 rounded-lg shadow-inner bg-gray-50"><div><p class="text-sm font-semibold"> Rekomendasi ${ssrInterpolate(rekomIndex + 1)}: </p><p class="px-2 py-1 text-gray-700">${ssrInterpolate(rekomendasi == null ? void 0 : rekomendasi.rekomendasi)}</p></div><div><p class="text-sm font-semibold"> Tindak Lanjut ${ssrInterpolate(rekomIndex + 1)}: </p><p class="px-2 py-1 text-gray-700">${ssrInterpolate(rekomendasi == null ? void 0 : rekomendasi.tindak_lanjut)}</p></div><span class="badge badge-outline">${ssrInterpolate(rekomendasi == null ? void 0 : rekomendasi.status)}</span></div>`);
            });
            _push(`<!--]--></div></div></div>`);
          } else {
            _push(`<!---->`);
          }
          if (history.action == "validation") {
            _push(`<div class="p-4 m-6 bg-white border rounded-lg shadow"><div class="flex items-center justify-between"><div><h4 class="text-lg font-bold">${ssrInterpolate(formatDate(history == null ? void 0 : history.created_at))}</h4><p class="text-sm text-gray-500"> Divalidasi Oleh: ${ssrInterpolate(history == null ? void 0 : history.karyawan.nama)} - ${ssrInterpolate(history == null ? void 0 : history.karyawan.nik)}</p></div><span class="text-white badge badge-info">${ssrInterpolate(history == null ? void 0 : history.keterangan)}</span></div><div class="mt-4"><div class="mt-2 space-y-2"><p><span class="font-bold">Temuan: </span><span class="px-2 py-1 text-gray-700">${ssrInterpolate(history == null ? void 0 : history.temuan)}</span></p><p><span class="font-bold">Status: </span><span class="px-2 py-1 text-gray-700">${ssrInterpolate(history == null ? void 0 : history.status)}</span></p><p><span class="font-bold">Tujuan: </span><span class="px-2 py-1 text-gray-700">`);
            if ((history == null ? void 0 : history.kode_unit) == "4R00") {
              _push(`<!--[-->${ssrInterpolate(history == null ? void 0 : history.unit_usaha.nama_unit)} - ${ssrInterpolate(history == null ? void 0 : history.bagian.name)}<!--]-->`);
            } else {
              _push(`<!--[-->${ssrInterpolate(history == null ? void 0 : history.unit_usaha.nama_unit)}<!--]-->`);
            }
            _push(`</span></p><p><span class="font-bold">Bidang: </span><span class="px-2 py-1 text-gray-700">${ssrInterpolate(history == null ? void 0 : history.bidang.nama)}</span></p></div></div><div class="mt-4"><div class="space-y-2"><!--[-->`);
            ssrRenderList(history == null ? void 0 : history.rekomendasi_history, (rekomendasi, rekomIndex) => {
              _push(`<div class="flex justify-between p-2 rounded-lg shadow-inner bg-gray-50"><div><p class="text-sm font-semibold"> Rekomendasi ${ssrInterpolate(rekomIndex + 1)}: </p><p class="px-2 py-1 text-gray-700">${ssrInterpolate(rekomendasi == null ? void 0 : rekomendasi.rekomendasi)}</p></div><div><p class="text-sm font-semibold"> Tindak Lanjut ${ssrInterpolate(rekomIndex + 1)}: </p><p class="px-2 py-1 text-gray-700">${ssrInterpolate(rekomendasi == null ? void 0 : rekomendasi.tindak_lanjut)}</p></div><span class="badge badge-outline">${ssrInterpolate(rekomendasi == null ? void 0 : rekomendasi.status)}</span></div>`);
            });
            _push(`<!--]--></div></div></div>`);
          } else {
            _push(`<!---->`);
          }
          if (history.action == "checked") {
            _push(`<div class="p-4 m-6 bg-white border rounded-lg shadow"><div class="flex items-center justify-between"><div><h4 class="text-lg font-bold">${ssrInterpolate(formatDate(history == null ? void 0 : history.created_at))}</h4><p class="text-sm text-gray-500"> Dikonfirmasi Oleh: ${ssrInterpolate(history == null ? void 0 : history.karyawan.nama)} - ${ssrInterpolate(history == null ? void 0 : history.karyawan.nik)}</p></div><span class="text-white badge badge-info">${ssrInterpolate(history == null ? void 0 : history.keterangan)}</span></div><div class="mt-4"><div class="mt-2 space-y-2"><p><span class="font-bold">Temuan: </span><span class="px-2 py-1 text-gray-700">${ssrInterpolate(history == null ? void 0 : history.temuan)}</span></p><p><span class="font-bold">Status: </span><span class="px-2 py-1 text-gray-700">${ssrInterpolate(history == null ? void 0 : history.status)}</span></p><p><span class="font-bold">Tujuan: </span><span class="px-2 py-1 text-gray-700">`);
            if ((history == null ? void 0 : history.kode_unit) == "4R00") {
              _push(`<!--[-->${ssrInterpolate(history == null ? void 0 : history.unit_usaha.nama_unit)} - ${ssrInterpolate(history == null ? void 0 : history.bagian.name)}<!--]-->`);
            } else {
              _push(`<!--[-->${ssrInterpolate(history == null ? void 0 : history.unit_usaha.nama_unit)}<!--]-->`);
            }
            _push(`</span></p><p><span class="font-bold">Bidang: </span><span class="px-2 py-1 text-gray-700">${ssrInterpolate(history == null ? void 0 : history.bidang.nama)}</span></p></div></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div><form method="dialog" class="modal-backdrop"><button>Close</button></form></dialog>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Modal/ModalHistoryTemuan.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
