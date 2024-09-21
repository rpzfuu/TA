import { defineComponent, ref, resolveComponent, mergeProps, useSSRContext, onMounted, unref, withCtx, createVNode, openBlock, createBlock, createCommentVNode } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseEqual } from "vue/server-renderer";
import { R as RequestAPI, _ as _sfc_main$5 } from "./AuthenticatedLayout-COFRq2pH.js";
import { usePage, Head } from "@inertiajs/vue3";
import { _ as _sfc_main$4 } from "./ModalHistoryTemuan-BMj7hgcq.js";
import "vue-toastification";
import "axios";
import "dayjs";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ModalValidasi",
  __ssrInlineRender: true,
  props: {
    nik: {},
    temuan: {}
  },
  emits: ["refresh"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const modal = ref();
    const showModal = () => {
      var _a;
      (_a = modal.value) == null ? void 0 : _a.showModal();
    };
    __expose({
      showModal
    });
    ref({
      nik: props.nik,
      rekomendasi: []
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_v_icon = resolveComponent("v-icon");
      _push(`<dialog${ssrRenderAttrs(mergeProps({
        ref_key: "modal",
        ref: modal,
        id: "modalUpdateTemuan",
        class: "modal"
      }, _attrs))}><div class="w-11/12 max-w-5xl modal-box"><h3 class="text-lg font-bold">Validasi Tindak Lanjut</h3><p class="py-4">Pilih untuk validasi tindak lanjut</p><form><!--[-->`);
      ssrRenderList((_a = _ctx.temuan) == null ? void 0 : _a.rekomendasi, (rekomendasi, index) => {
        _push(`<div class="p-4 mb-6 border rounded-lg bg-gray-50"><div class="mb-4"><label class="label"><span class="text-lg font-bold">Rekomendasi ${ssrInterpolate(index + 1)}</span></label><div class="flex items-center"><input${ssrRenderAttr("value", rekomendasi.rekomendasi)} readonly class="w-full input input-bordered"></div></div><div class="mb-4"><label class="label"><span class="text-lg font-bold">Tindak Lanjut ${ssrInterpolate(index + 1)}</span></label><div class="flex items-center"><input${ssrRenderAttr("value", rekomendasi.tindak_lanjut)} readonly${ssrRenderAttr(
          "placeholder",
          "Isi tindak lanjut " + (index + 1)
        )} class="w-full input input-bordered"></div></div><div class="mb-4"><a${ssrRenderAttr("href", `http://127.0.0.1:8000/storage/${rekomendasi.bukti.replace(
          "public/",
          ""
        )}`)} type="application/pdf" width="100%" height="600px" target="_blank" class="btn">`);
        _push(ssrRenderComponent(_component_v_icon, {
          name: "fa-file-pdf",
          class: "text-error"
        }, null, _parent));
        _push(`Bukti ${ssrInterpolate(index + 1)}</a></div><div class="mb-4"><label class="label"><span class="text-lg font-bold">Validasi</span></label><div class="flex"><div class="items-center flex-auto"><input${ssrRenderAttr("name", "validasi" + (index + 1))} type="radio"${ssrRenderAttr("id", "validasi 1" + (index + 1))} value="Sesuai"${ssrIncludeBooleanAttr(ssrLooseEqual(rekomendasi.status, "Sesuai")) ? " checked" : ""} class="radio radio-success" required><label${ssrRenderAttr("for", "validasi 1" + (index + 1))} class="ml-2 cursor-pointer">Sesuai</label></div><div class="items-center flex-auto"><input${ssrRenderAttr("name", "validasi" + (index + 1))} type="radio"${ssrRenderAttr("id", "validasi 2" + (index + 1))} value="Tidak Sesuai"${ssrIncludeBooleanAttr(ssrLooseEqual(rekomendasi.status, "Tidak Sesuai")) ? " checked" : ""} class="radio radio-warning"><label${ssrRenderAttr("for", "validasi 2" + (index + 1))} class="ml-2 cursor-pointer">Tidak Sesuai</label></div><div class="items-center flex-auto"><input${ssrRenderAttr("name", "validasi" + (index + 1))} type="radio"${ssrRenderAttr("id", "validasi 3" + (index + 1))} value="Belum Ditindaklanjut"${ssrIncludeBooleanAttr(ssrLooseEqual(rekomendasi.status, "Belum Ditindaklanjut")) ? " checked" : ""} class="radio radio-error"><label${ssrRenderAttr("for", "validasi 3" + (index + 1))} class="ml-2 cursor-pointer">Belum Ditindaklanjut</label></div><div class="items-center flex-auto"><input${ssrRenderAttr("name", "validasi" + (index + 1))} type="radio"${ssrRenderAttr("id", "validasi 4" + (index + 1))} value="Tidak Dapat Ditindaklanjut"${ssrIncludeBooleanAttr(ssrLooseEqual(rekomendasi.status, "Tidak Dapat Ditindaklanjut")) ? " checked" : ""} class="radio radio-error"><label${ssrRenderAttr("for", "validasi 4" + (index + 1))} class="ml-2 cursor-pointer">Tidak Dapat Ditindaklanjut</label></div></div></div><div class="mb-4"><label class="label"><span class="text-lg font-bold">Keterangan ${ssrInterpolate(index + 1)}</span></label><div class="flex items-center"><input${ssrRenderAttr("value", rekomendasi.alasan)}${ssrRenderAttr("placeholder", "Isi keterangan " + (index + 1))} class="w-full input input-bordered" required></div></div></div>`);
      });
      _push(`<!--]--><div class="modal-action"><button type="submit" class="text-white btn btn-success">`);
      _push(ssrRenderComponent(_component_v_icon, { name: "hi-clipboard-check" }, null, _parent));
      _push(` Validasi </button><form method="dialog" class="z-50 modal-backdrop"><button class="btn">`);
      _push(ssrRenderComponent(_component_v_icon, { name: "hi-x" }, null, _parent));
      _push(` Close </button></form></div></form></div><form method="dialog" class="modal-backdrop"><button></button></form></dialog>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Modal/ModalValidasi.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ModalCekValidasi",
  __ssrInlineRender: true,
  props: {
    temuan: {},
    nik: {}
  },
  emits: ["refresh"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const modal = ref();
    const showModal = () => {
      var _a;
      (_a = modal.value) == null ? void 0 : _a.showModal();
    };
    __expose({
      showModal
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g;
      const _component_v_icon = resolveComponent("v-icon");
      _push(`<dialog${ssrRenderAttrs(mergeProps({
        ref_key: "modal",
        ref: modal,
        class: "modal"
      }, _attrs))}><div class="items-center justify-center p-8 text-center bg-white rounded-lg shadow-lg modal-box">`);
      _push(ssrRenderComponent(_component_v_icon, {
        name: "hi-clipboard-check",
        class: "mb-4 text-success",
        scale: "4"
      }, null, _parent));
      _push(`<h3 class="mb-2 text-2xl font-extrabold text-success"> Cek Validasi </h3><p class="mb-4 text-gray-600 text-md"> Silahkan Hasil Validasi Oleh SPI </p><div class="w-full p-4 mb-4 bg-gray-100 rounded-lg shadow-inner"><p class="mb-2 text-sm text-left text-gray-700"><span class="font-bold">Temuan: </span>${ssrInterpolate((_a = _ctx.temuan) == null ? void 0 : _a.temuan)}</p>`);
      if (((_b = _ctx.temuan) == null ? void 0 : _b.unit_usaha.kode_unit) == "4R00") {
        _push(`<p class="mb-2 text-sm text-left text-gray-700"><span class="font-bold">Tujuan Unit/Bagian: </span> ${ssrInterpolate((_c = _ctx.temuan) == null ? void 0 : _c.bagian.name)}</p>`);
      } else {
        _push(`<p class="mb-2 text-sm text-left text-gray-700"><span class="font-bold">Tujuan Unit/Bagian: </span> ${ssrInterpolate((_d = _ctx.temuan) == null ? void 0 : _d.unit_usaha.nama_unit)}</p>`);
      }
      _push(`<p class="mb-2 text-sm text-left text-gray-700"><span class="font-bold">Bidang: </span>${ssrInterpolate((_e = _ctx.temuan) == null ? void 0 : _e.bidang.nama)}</p><p class="mb-2 text-sm text-left text-gray-700"><span class="font-bold">Status: </span>${ssrInterpolate((_f = _ctx.temuan) == null ? void 0 : _f.status)}</p><!--[-->`);
      ssrRenderList((_g = _ctx.temuan) == null ? void 0 : _g.rekomendasi, (rekomendasi, index) => {
        _push(`<div class="flex justify-between p-4 mb-6 border rounded-lg shadow-inner bg-gray-50"><div><p class="text-sm font-semibold"> Rekomendasi ${ssrInterpolate(index + 1)}: </p><p class="px-2 py-1 text-gray-700">${ssrInterpolate(rekomendasi == null ? void 0 : rekomendasi.rekomendasi)}</p></div><div><p class="text-sm font-semibold"> Tindak Lanjut ${ssrInterpolate(index + 1)}: </p><p class="px-2 py-1 text-gray-700">${ssrInterpolate(rekomendasi == null ? void 0 : rekomendasi.tindak_lanjut)}</p></div><span class="badge badge-outline">${ssrInterpolate(rekomendasi == null ? void 0 : rekomendasi.status)}</span></div>`);
      });
      _push(`<!--]--></div><div class="flex justify-center space-x-4 modal-action"><form class="flex-1"><button class="w-full px-6 py-2 text-white btn btn-success"> Konfirmasi Hasil Validasi </button></form></div></div><form method="dialog" class="modal-backdrop"><button>close</button></form></dialog>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Modal/ModalCekValidasi.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TableTemuanValidasi",
  __ssrInlineRender: true,
  props: {
    user: {}
  },
  setup(__props) {
    const props = __props;
    const modalCekValidasi = ref();
    const itemToCekValidasi = ref();
    const selectedTemuanId = ref();
    const modalHistory = ref();
    const modalValidasi = ref();
    const itemToValidasi = ref();
    const temuan = ref({
      state: "initial",
      message: "",
      data: [
        {
          id: "",
          created_by: "",
          temuan: "",
          rekomendasi: [
            {
              id: "",
              temuan_id: "",
              rekomendasi: "",
              created_at: "",
              updated_at: "",
              status: "",
              alasan: "",
              tindak_lanjut: ""
            }
          ],
          kode_unit: "",
          status: "",
          created_at: "",
          updated_at: "",
          unit_usaha: {
            id: "",
            kode_unit: "",
            nama_unit: "",
            kode_grup_unit: "",
            nama_grup_unit: "",
            is_saturday_on: false,
            is_head_office: false,
            created_at: "",
            updated_at: "",
            is_active: false
          },
          bidang: {
            id: "",
            nama: "",
            created_at: "",
            updated_at: ""
          },
          bagian: {
            id: "",
            name: "",
            code: "",
            created_at: "",
            kode_unit: ""
          }
        }
      ]
    });
    const form = ref({
      is_spi: props.user.is_spi,
      kode_unit: props.user.karyawan.kode_unit,
      bagian: props.user.karyawan.sub_unit
    });
    const getTemuanValidasi = async () => {
      try {
        const res = await RequestAPI.getTemuanValidasi({ data: form.value });
        temuan.value = {
          ...temuan.value,
          state: "success",
          message: res.message,
          data: res.data
        };
      } catch (e) {
        temuan.value.state = "error";
        temuan.value.message = String(e.message);
      }
    };
    onMounted(() => {
      getTemuanValidasi();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_icon = resolveComponent("v-icon");
      _push(`<!--[--><table class="table w-full table-auto"><thead><tr><th class="p-4">No</th><th class="p-4 text-center">Unit Usaha / Bagian</th><th class="p-4">Temuan</th><th class="p-4">Rekomendasi</th><th class="p-4">Bidang</th><th class="p-4 text-center">Status</th><th class="p-4 text-center">Aksi</th></tr></thead><tbody>`);
      if (temuan.value.state == "initial" || temuan.value.state == "loading") {
        _push(`<tr></tr>`);
      } else if (!temuan.value.data || temuan.value.data.length === 0) {
        _push(`<tr><td colspan="100%" class="text-center">Tidak Ada Data</td></tr>`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(temuan.value.data, (item, index) => {
          _push(`<tr class="hover"><td class="p-4">${ssrInterpolate(index + 1)}</td><td class="p-4"><button class="flex justify-start w-full btn btn-ghost !text-left"><div class="flex text-xs text-white badge badge-accent">`);
          if (item.kode_unit == "4R00") {
            _push(`<!--[-->`);
            _push(ssrRenderComponent(_component_v_icon, { name: "hi-office-building" }, null, _parent));
            _push(` Kantor <!--]-->`);
          } else if (item.unit_usaha.nama_unit.includes("KB ")) {
            _push(`<!--[-->`);
            _push(ssrRenderComponent(_component_v_icon, { name: "co-plant" }, null, _parent));
            _push(` Kebun <!--]-->`);
          } else if (item.unit_usaha.nama_unit.includes("PB ")) {
            _push(`<!--[-->`);
            _push(ssrRenderComponent(_component_v_icon, { name: "co-factory" }, null, _parent));
            _push(` Pabrik <!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
          if (item.kode_unit == "4R00") {
            _push(`<span>${ssrInterpolate(item.bagian.name)}</span>`);
          } else {
            _push(`<span>${ssrInterpolate(item.unit_usaha.nama_grup_unit)}</span>`);
          }
          _push(`</button></td><td class="p-4">${ssrInterpolate(item.temuan)}</td><td class="p-4"><!--[-->`);
          ssrRenderList(item.rekomendasi, (rekomendasi, index2) => {
            _push(`<!--[-->${ssrInterpolate(index2 + 1)}. ${ssrInterpolate(rekomendasi.rekomendasi)} `);
            if (index2 < item.rekomendasi.length - 1) {
              _push(`<br>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<!--]-->`);
          });
          _push(`<!--]--></td><td class="p-4">${ssrInterpolate(item.bidang.nama)}</td><td class="p-4 text-center">${ssrInterpolate(item.status)}</td><td class="p-4 align-middle">`);
          if (_ctx.user.is_spi) {
            _push(`<div class="flex items-center gap-2">`);
            if (item.status == "Menunggu Validasi") {
              _push(`<button class="btn btn-square btn-outline btn-success hover:text-white group">`);
              _push(ssrRenderComponent(_component_v_icon, {
                name: "hi-clipboard-check",
                class: "group-hover:text-white"
              }, null, _parent));
              _push(`</button>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          } else {
            _push(`<div class="flex items-center gap-2">`);
            if (item.status == "Divalidasi") {
              _push(`<button class="btn btn-square btn-outline btn-success hover:text-white group">`);
              _push(ssrRenderComponent(_component_v_icon, {
                name: "hi-clipboard-check",
                class: "group-hover:text-white"
              }, null, _parent));
              _push(`</button>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          }
          _push(`</td></tr>`);
        });
        _push(`<!--]-->`);
      }
      _push(`</tbody></table>`);
      _push(ssrRenderComponent(_sfc_main$4, {
        ref_key: "modalHistory",
        ref: modalHistory,
        temuan_id: selectedTemuanId.value
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        ref_key: "modalValidasi",
        ref: modalValidasi,
        temuan: itemToValidasi.value,
        nik: props.user.nik,
        onRefresh: ($event) => getTemuanValidasi()
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        ref_key: "modalCekValidasi",
        ref: modalCekValidasi,
        nik: props.user.nik,
        temuan: itemToCekValidasi.value,
        onRefresh: ($event) => getTemuanValidasi()
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Table/TableTemuanValidasi.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Validasi",
  __ssrInlineRender: true,
  setup(__props) {
    const { auth } = usePage().props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Validasi" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="pb-10 text-xl font-semibold leading-tight text-gray-800"${_scopeId}> Validasi </h2>`);
          } else {
            return [
              createVNode("h2", { class: "pb-10 text-xl font-semibold leading-tight text-gray-800" }, " Validasi ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full px-5 py-10 bg-white border border-black rounded-lg"${_scopeId}><h3 class="pb-5 font-medium"${_scopeId}>List Temuan</h3>`);
            if (unref(auth).user.is_spi) {
              _push2(`<div class="flex"${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_sfc_main$1, {
              user: unref(auth).user
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "w-full px-5 py-10 bg-white border border-black rounded-lg" }, [
                createVNode("h3", { class: "pb-5 font-medium" }, "List Temuan"),
                unref(auth).user.is_spi ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex"
                })) : createCommentVNode("", true),
                createVNode(_sfc_main$1, {
                  user: unref(auth).user
                }, null, 8, ["user"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Validasi.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
