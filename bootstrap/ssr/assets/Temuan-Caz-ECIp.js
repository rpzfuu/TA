import { defineComponent, mergeModels, useModel, resolveComponent, mergeProps, withCtx, createVNode, toHandlers, useSSRContext, ref, watch, onMounted, unref, openBlock, createBlock, createCommentVNode } from "vue";
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { R as RequestAPI, _ as _sfc_main$c } from "./AuthenticatedLayout-COFRq2pH.js";
import { Link, usePage, Head } from "@inertiajs/vue3";
import "vue-toastification";
import { _ as _sfc_main$b } from "./ModalHistoryTemuan-BMj7hgcq.js";
import "axios";
import "dayjs";
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "InputUnitUsaha",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    unit: {},
    state: {}
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_select = resolveComponent("v-select");
      _push(`<label${ssrRenderAttrs(mergeProps({ class: "flex items-center gap-2 input input-bordered" }, _attrs))}><input type="hidden"${ssrIncludeBooleanAttr(_ctx.state == "saving" || _ctx.state == "loading") ? " disabled" : ""}>`);
      _push(ssrRenderComponent(_component_v_select, {
        disabled: _ctx.state == "saving" || _ctx.state == "loading",
        reduce: (item) => item.kode_unit,
        placeholder: _ctx.state == "success" ? "-- Pilih Unit --" : "Loading ...",
        options: _ctx.state == "success" ? _ctx.unit : [],
        label: "nama_unit",
        modelValue: model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        class: "w-full custom"
      }, {
        search: withCtx(({ attributes, events }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<input${ssrRenderAttrs(mergeProps({
              class: "vs__search",
              required: !model.value
            }, attributes))}${_scopeId}>`);
          } else {
            return [
              createVNode("input", mergeProps({
                class: "vs__search",
                required: !model.value
              }, attributes, toHandlers(events, true)), null, 16, ["required"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</label>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Input/InputUnitUsaha.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "InputBagian",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    bagian: {},
    state: {}
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_select = resolveComponent("v-select");
      _push(`<label${ssrRenderAttrs(mergeProps({ class: "flex items-center gap-2 input input-bordered" }, _attrs))}><input type="hidden"${ssrIncludeBooleanAttr(_ctx.state == "saving" || _ctx.state == "loading") ? " disabled" : ""}>`);
      _push(ssrRenderComponent(_component_v_select, {
        disabled: _ctx.state == "saving" || _ctx.state == "loading",
        reduce: (item) => item.code,
        placeholder: _ctx.state == "success" ? "-- Pilih Sub Bagian --" : "Loading ...",
        options: _ctx.state == "success" ? _ctx.bagian : [],
        label: "name",
        modelValue: model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        class: "w-full custom"
      }, {
        search: withCtx(({ attributes, events }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<input${ssrRenderAttrs(mergeProps({
              class: "vs__search",
              required: !model.value
            }, attributes))}${_scopeId}>`);
          } else {
            return [
              createVNode("input", mergeProps({
                class: "vs__search",
                required: !model.value
              }, attributes, toHandlers(events, true)), null, 16, ["required"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</label>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Input/InputBagian.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "InputBidang",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    bidang: {},
    state: {}
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_select = resolveComponent("v-select");
      _push(`<label${ssrRenderAttrs(mergeProps({ class: "flex items-center gap-2 input input-bordered" }, _attrs))}><input type="hidden"${ssrIncludeBooleanAttr(_ctx.state == "saving" || _ctx.state == "loading") ? " disabled" : ""}>`);
      _push(ssrRenderComponent(_component_v_select, {
        disabled: _ctx.state == "saving" || _ctx.state == "loading",
        reduce: (item) => item.id,
        placeholder: _ctx.state == "success" ? "-- Pilih Bidang --" : "Loading ...",
        options: _ctx.state == "success" ? _ctx.bidang : [],
        label: "nama",
        modelValue: model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        class: "w-full custom"
      }, {
        search: withCtx(({ attributes, events }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<input${ssrRenderAttrs(mergeProps({
              class: "vs__search",
              required: !model.value
            }, attributes))}${_scopeId}>`);
          } else {
            return [
              createVNode("input", mergeProps({
                class: "vs__search",
                required: !model.value
              }, attributes, toHandlers(events, true)), null, 16, ["required"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</label>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Input/InputBidang.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ModalTambahTemuan",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    user: {}
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    const props = __props;
    useModel(__props, "modelValue");
    const modal = ref();
    const showModal = () => {
      var _a;
      if (unit.value.state == "initial") {
        getUnit();
      }
      if (bidang.value.state == "initial") {
        getBidang();
      }
      (_a = modal.value) == null ? void 0 : _a.showModal();
    };
    __expose({
      showModal
    });
    const form = ref({
      created_by: props.user.nik,
      kode_unit: "",
      temuan: "",
      rekomendasi: [""],
      bidang_id: "",
      kode_bagian: ""
    });
    const bidang = ref({
      state: "initial",
      message: "",
      data: [
        {
          id: "",
          kode_bidang: "",
          nama_bidang: "",
          created_at: "",
          updated_at: ""
        }
      ]
    });
    const unit = ref({
      state: "initial",
      message: {},
      data: [
        {
          id: "",
          kode_unit: "",
          nama_unit: "",
          kode_grup_unit: "",
          is_saturday_on: "",
          is_head_office: "",
          nilai1_cur: "",
          created_at: "",
          updated_at: "",
          is_active: "",
          bagian: [
            {
              id: "",
              name: "",
              code: "",
              created_at: "",
              updated_at: "",
              kode_unit: "",
              sub_bagian: [
                {
                  id: "",
                  bagian_code: "",
                  name: "",
                  code: "",
                  created_at: "",
                  updated_at: ""
                }
              ]
            }
          ]
        }
      ]
    });
    const filteredBagian = ref([]);
    watch(
      () => form.value.kode_unit,
      (newKodeUnit) => {
        const selectedUnit = unit.value.data.find(
          (u) => u.kode_unit === newKodeUnit
        );
        filteredBagian.value = selectedUnit ? selectedUnit.bagian : [];
        form.value.kode_bagian = "";
      }
    );
    const getUnit = async () => {
      try {
        unit.value.state = "loading";
        const res = await RequestAPI.getUnit();
        unit.value.state = "success";
        unit.value = {
          ...unit.value,
          state: "success",
          message: res.message,
          data: res.data
        };
      } catch (e) {
        unit.value.state = "error";
        unit.value.message = String(e.message);
      }
    };
    const getBidang = async () => {
      try {
        bidang.value.state = "loading";
        const res = await RequestAPI.getBidang();
        bidang.value.state = "success";
        bidang.value = {
          ...unit.value,
          state: "success",
          message: res.message,
          data: res.data
        };
      } catch (e) {
        bidang.value.state = "error";
        bidang.value.message = String(e.message);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_icon = resolveComponent("v-icon");
      _push(`<dialog${ssrRenderAttrs(mergeProps({
        ref_key: "modal",
        ref: modal,
        id: "modalTambahTemuan",
        class: "modal"
      }, _attrs))}><div class="w-11/12 max-w-5xl modal-box"><h3 class="text-lg font-bold">Tambah Temuan</h3><p class="py-4">Isi informasi untuk menambah temuan</p><form><div class="mb-4 form-control"><label class="label"><span class="label-text">Temuan</span></label><input${ssrRenderAttr("value", form.value.temuan)} placeholder="Masukkan Temuan" class="w-full input input-bordered" required></div><div class="mb-4 form-control"><label class="label"><span class="label-text">Bidang</span></label>`);
      _push(ssrRenderComponent(_sfc_main$8, {
        modelValue: form.value.bidang_id,
        "onUpdate:modelValue": ($event) => form.value.bidang_id = $event,
        bidang: bidang.value.data,
        state: bidang.value.state
      }, null, _parent));
      _push(`</div><div class="mb-4 form-control"><label class="label"><span class="label-text">Unit</span></label>`);
      _push(ssrRenderComponent(_sfc_main$a, {
        modelValue: form.value.kode_unit,
        "onUpdate:modelValue": ($event) => form.value.kode_unit = $event,
        unit: unit.value.data,
        state: unit.value.state
      }, null, _parent));
      _push(`</div>`);
      if (form.value.kode_unit == "4R00") {
        _push(`<div class="mb-4 form-control"><label class="label"><span class="label-text">Bagian</span></label>`);
        _push(ssrRenderComponent(_sfc_main$9, {
          modelValue: form.value.kode_bagian,
          "onUpdate:modelValue": ($event) => form.value.kode_bagian = $event,
          state: unit.value.state,
          bagian: filteredBagian.value
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(form.value.rekomendasi, (rekomendasi, index) => {
        _push(`<div class="mb-4 form-control"><label class="label"><span class="label-text">Rekomendasi ${ssrInterpolate(index + 1)}</span></label><div class="flex items-center"><input type="text"${ssrRenderAttr("value", form.value.rekomendasi[index])} placeholder="Masukkan Rekomendasi" class="w-full input input-bordered" required>`);
        if (index === 0) {
          _push(`<button type="button" class="ml-2 btn btn-success">`);
          _push(ssrRenderComponent(_component_v_icon, {
            name: "hi-plus",
            color: "white"
          }, null, _parent));
          _push(`</button>`);
        } else {
          _push(`<!---->`);
        }
        if (form.value.rekomendasi.length > 1 && index !== 0) {
          _push(`<button type="button" class="ml-2 btn btn-error">`);
          _push(ssrRenderComponent(_component_v_icon, {
            name: "hi-trash",
            color: "white"
          }, null, _parent));
          _push(`</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--><div class="modal-action"><button type="submit" class="text-white btn btn-success">`);
      _push(ssrRenderComponent(_component_v_icon, { name: "hi-plus" }, null, _parent));
      _push(` Tambah </button><form method="dialog" class="z-50 modal-backdrop"><button class="btn">`);
      _push(ssrRenderComponent(_component_v_icon, { name: "hi-x" }, null, _parent));
      _push(` Close </button></form></div></form></div><form method="dialog" class="modal-backdrop"><button></button></form></dialog>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Modal/ModalTambahTemuan.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ModalDeleteTemuan",
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
      var _a, _b, _c, _d, _e, _f;
      const _component_v_icon = resolveComponent("v-icon");
      _push(`<dialog${ssrRenderAttrs(mergeProps({
        ref_key: "modal",
        ref: modal,
        id: "showDeleteTemuanModal",
        class: "modal"
      }, _attrs))}><div class="items-center justify-center p-8 text-center bg-white rounded-lg shadow-lg modal-box">`);
      _push(ssrRenderComponent(_component_v_icon, {
        name: "hi-trash",
        class: "mb-4 text-error",
        scale: "4"
      }, null, _parent));
      _push(`<h3 class="mb-2 text-2xl font-extrabold text-error"> Hapus Temuan </h3><p class="mb-4 text-gray-600 text-md"> Apakah anda yakin ingin menghapus temuan ini? </p><div class="w-full p-4 mb-4 bg-gray-100 rounded-lg shadow-inner"><p class="mb-2 text-sm text-left text-gray-700"><span class="font-bold">Temuan: </span>${ssrInterpolate((_a = _ctx.temuan) == null ? void 0 : _a.temuan)}</p><p class="mb-2 text-sm text-left text-gray-700"><span class="font-bold">Rekomendasi: </span><!--[-->`);
      ssrRenderList((_b = _ctx.temuan) == null ? void 0 : _b.rekomendasi, (rekomendasi, index) => {
        _push(`<!--[-->`);
        if (index < rekomendasi.rekomendasi.length - 1) {
          _push(`<br>`);
        } else {
          _push(`<!---->`);
        }
        _push(`${ssrInterpolate(index + 1)}. ${ssrInterpolate(rekomendasi == null ? void 0 : rekomendasi.rekomendasi)}<!--]-->`);
      });
      _push(`<!--]--></p>`);
      if (((_c = _ctx.temuan) == null ? void 0 : _c.unit_usaha.kode_unit) == "4R00") {
        _push(`<p class="mb-2 text-sm text-left text-gray-700"><span class="font-bold">Tujuan Unit/Bagian: </span> ${ssrInterpolate((_d = _ctx.temuan) == null ? void 0 : _d.bagian.name)}</p>`);
      } else {
        _push(`<p class="mb-2 text-sm text-left text-gray-700"><span class="font-bold">Tujuan Unit/Bagian: </span> ${ssrInterpolate((_e = _ctx.temuan) == null ? void 0 : _e.unit_usaha.nama_unit)}</p>`);
      }
      _push(`<p class="mb-2 text-sm text-left text-gray-700"><span class="font-bold">Status: </span>${ssrInterpolate((_f = _ctx.temuan) == null ? void 0 : _f.status)}</p></div><div class="flex justify-center space-x-4 modal-action"><form class="flex-1"><button class="w-full px-6 py-2 text-white btn btn-error"> Ya, Hapus! </button></form><form method="dialog" class="flex-1"><button class="w-full px-6 py-2 btn"> Tidak, Simpan Saja </button></form></div></div><form method="dialog" class="modal-backdrop"><button>close</button></form></dialog>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Modal/ModalDeleteTemuan.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ModalUpdateTemuan",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    nik: {},
    temuan: {}
  }, {
    "diKlik": {},
    "diKlikModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["refresh"], ["update:diKlik"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const diKlik = useModel(__props, "diKlik");
    const modal = ref();
    ref();
    const showModal = () => {
      var _a;
      if (unit.value.state == "initial") {
        getUnit();
      }
      if (bidang.value.state == "initial") {
        getBidang();
      }
      (_a = modal.value) == null ? void 0 : _a.showModal();
    };
    __expose({
      showModal
    });
    const form = ref({
      changed_by: props.nik,
      id: "",
      kode_unit: "",
      temuan: "",
      rekomendasi: [{ id: "", rekomendasi: "" }],
      bidang_id: "",
      kode_bagian: ""
    });
    const bidang = ref({
      state: "initial",
      message: "",
      data: [
        {
          id: "",
          kode_bidang: "",
          nama_bidang: "",
          created_at: "",
          updated_at: ""
        }
      ]
    });
    const unit = ref({
      state: "initial",
      message: {},
      data: [
        {
          id: "",
          kode_unit: "",
          nama_unit: "",
          kode_grup_unit: "",
          is_saturday_on: "",
          is_head_office: "",
          nilai1_cur: "",
          created_at: "",
          updated_at: "",
          is_active: "",
          bagian: [
            {
              id: "",
              name: "",
              code: "",
              created_at: "",
              updated_at: "",
              kode_unit: "",
              sub_bagian: [
                {
                  id: "",
                  bagian_code: "",
                  name: "",
                  code: "",
                  created_at: "",
                  updated_at: ""
                }
              ]
            }
          ]
        }
      ]
    });
    const filteredBagian = ref([]);
    watch(
      () => form.value.kode_unit,
      (newKodeUnit) => {
        var _a;
        const selectedUnit = unit.value.data.find(
          (u) => u.kode_unit === newKodeUnit
        );
        filteredBagian.value = selectedUnit ? selectedUnit.bagian : [];
        form.value.kode_bagian = (_a = props.temuan) == null ? void 0 : _a.kode_bagian;
      }
    );
    watch(
      () => diKlik.value,
      (newValue) => {
        var _a, _b, _c, _d, _e, _f;
        if (newValue === true) {
          form.value = {
            ...form.value,
            id: (_a = props.temuan) == null ? void 0 : _a.id,
            kode_unit: (_b = props.temuan) == null ? void 0 : _b.kode_unit,
            temuan: (_c = props.temuan) == null ? void 0 : _c.temuan,
            rekomendasi: (_d = props.temuan) == null ? void 0 : _d.rekomendasi,
            bidang_id: (_e = props.temuan) == null ? void 0 : _e.bidang_id,
            kode_bagian: (_f = props.temuan) == null ? void 0 : _f.kode_bagian
          };
          diKlik.value = false;
        }
      }
    );
    const getUnit = async () => {
      try {
        unit.value.state = "loading";
        const res = await RequestAPI.getUnit();
        unit.value.state = "success";
        unit.value = {
          ...unit.value,
          state: "success",
          message: res.message,
          data: res.data
        };
      } catch (e) {
        unit.value.state = "error";
        unit.value.message = String(e.message);
      }
    };
    const getBidang = async () => {
      try {
        bidang.value.state = "loading";
        const res = await RequestAPI.getBidang();
        bidang.value.state = "success";
        bidang.value = {
          ...unit.value,
          state: "success",
          message: res.message,
          data: res.data
        };
      } catch (e) {
        bidang.value.state = "error";
        bidang.value.message = String(e.message);
      }
    };
    ref();
    ref("initial");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_icon = resolveComponent("v-icon");
      _push(`<dialog${ssrRenderAttrs(mergeProps({
        ref_key: "modal",
        ref: modal,
        id: "modalUpdateTemuan",
        class: "modal"
      }, _attrs))}><div class="w-11/12 max-w-5xl modal-box"><h3 class="text-lg font-bold">Perbarui Temuan</h3><p class="py-4">Isi informasi untuk perbarui temuan</p><form><div class="mb-4 form-control"><label class="label"><span class="label-text">Temuan</span></label><textarea placeholder="Masukkan Temuan" class="w-full textarea textarea-bordered" required>${ssrInterpolate(form.value.temuan)}</textarea></div><!--[-->`);
      ssrRenderList(form.value.rekomendasi, (rekomendasi, index) => {
        _push(`<div class="mb-4 form-control"><label class="label"><span class="label-text">Rekomendasi ${ssrInterpolate(index + 1)}</span></label><div class="flex items-center"><input type="text"${ssrRenderAttr("value", form.value.rekomendasi[index].rekomendasi)} placeholder="Masukkan Rekomendasi" class="w-full input input-bordered" required>`);
        if (index === 0) {
          _push(`<button type="button" class="ml-2 btn btn-success">`);
          _push(ssrRenderComponent(_component_v_icon, {
            name: "hi-plus",
            color: "white"
          }, null, _parent));
          _push(`</button>`);
        } else {
          _push(`<!---->`);
        }
        if (form.value.rekomendasi.length > 1 && index !== 0) {
          _push(`<button type="button" class="ml-2 btn btn-error">`);
          _push(ssrRenderComponent(_component_v_icon, {
            name: "hi-trash",
            color: "white"
          }, null, _parent));
          _push(`</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--><div class="mb-4 form-control"><label class="label"><span class="label-text">Bidang</span></label>`);
      _push(ssrRenderComponent(_sfc_main$8, {
        modelValue: form.value.bidang_id,
        "onUpdate:modelValue": ($event) => form.value.bidang_id = $event,
        bidang: bidang.value.data,
        state: bidang.value.state
      }, null, _parent));
      _push(`</div><div class="mb-4 form-control"><label class="label"><span class="label-text">Unit</span></label>`);
      _push(ssrRenderComponent(_sfc_main$a, {
        modelValue: form.value.kode_unit,
        "onUpdate:modelValue": ($event) => form.value.kode_unit = $event,
        unit: unit.value.data,
        state: unit.value.state
      }, null, _parent));
      _push(`</div>`);
      if (form.value.kode_unit == "4R00") {
        _push(`<div class="mb-4 form-control"><label class="label"><span class="label-text">Bagian</span></label>`);
        _push(ssrRenderComponent(_sfc_main$9, {
          modelValue: form.value.kode_bagian,
          "onUpdate:modelValue": ($event) => form.value.kode_bagian = $event,
          state: unit.value.state,
          bagian: filteredBagian.value
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="modal-action"><button type="submit" class="text-white btn btn-warning">`);
      _push(ssrRenderComponent(_component_v_icon, { name: "hi-refresh" }, null, _parent));
      _push(` Perbarui </button><form method="dialog" class="z-50 modal-backdrop"><button class="btn">`);
      _push(ssrRenderComponent(_component_v_icon, { name: "hi-x" }, null, _parent));
      _push(` Close </button></form></div></form></div><form method="dialog" class="modal-backdrop"><button></button></form><dialog id="showModalDeleteRekomendasi" class="modal"><div class="flex flex-col items-center justify-center p-8 text-center bg-white rounded-lg shadow-lg modal-box">`);
      _push(ssrRenderComponent(_component_v_icon, {
        name: "hi-trash",
        class: "mb-4 text-error",
        scale: "4"
      }, null, _parent));
      _push(`<h3 class="mb-2 text-2xl font-extrabold text-error"> Hapus Rekomendasi </h3><p class="mb-4 text-gray-600 text-md"> Apakah anda yakin ingin menghapus rekomendasi ini? </p><div class="flex justify-center space-x-4 modal-action"><form class="flex-1"><button class="w-full px-6 py-2 text-white btn btn-error"> Ya, Hapus! </button></form><form method="dialog" class="flex-1"><button class="w-full px-6 py-2 btn"> Tidak, Simpan Saja </button></form></div></div><form method="dialog" class="modal-backdrop"><button>close</button></form></dialog></dialog>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Modal/ModalUpdateTemuan.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ModalTindakLanjut",
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
    const form = ref({
      nik: props.nik,
      rekomendasi: [],
      bukti: []
    });
    ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_v_icon = resolveComponent("v-icon");
      _push(`<dialog${ssrRenderAttrs(mergeProps({
        ref_key: "modal",
        ref: modal,
        id: "modalUpdateTemuan",
        class: "modal"
      }, _attrs))}><div class="w-11/12 max-w-5xl modal-box"><h3 class="text-lg font-bold">Masukkan Tindak Lanjut</h3><p class="py-4">Isi informasi untuk mengisi tindak lanjut</p><form><!--[-->`);
      ssrRenderList((_a = _ctx.temuan) == null ? void 0 : _a.rekomendasi, (rekomendasi, index) => {
        _push(`<div class="mb-4 form-control"><label class="label"><span class="label-text">Rekomendasi ${ssrInterpolate(index + 1)}</span></label><div class="flex items-center"><input${ssrRenderAttr("value", rekomendasi.rekomendasi)} readonly class="justify-center w-full input input-bordered items"></div><label class="label"><span class="label-text">Tindak Lanjut ${ssrInterpolate(index + 1)}</span></label><div class="flex items-center"><input required${ssrRenderAttr("value", rekomendasi.tindak_lanjut)}${ssrRenderAttr("placeholder", "Isi tindak lanjut " + (index + 1))} class="justify-center w-full input input-bordered items"></div><div class="mb-4 form-control"><label class="label"><span class="label-text">Bukti ${ssrInterpolate(index + 1)}</span></label><input type="file" class="w-full file-input file-input-bordered" accept=".pdf"></div> ${ssrInterpolate(form.value.bukti)}</div>`);
      });
      _push(`<!--]--><div class="modal-action"><button type="submit" class="text-white btn btn-info">`);
      _push(ssrRenderComponent(_component_v_icon, { name: "hi-external-link" }, null, _parent));
      _push(` Tindak Lanjut </button><form method="dialog" class="z-50 modal-backdrop"><button class="btn">`);
      _push(ssrRenderComponent(_component_v_icon, { name: "hi-x" }, null, _parent));
      _push(` Close </button></form></div></form></div><form method="dialog" class="modal-backdrop"><button></button></form></dialog>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Modal/ModalTindakLanjut.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ModalKirimDraftTemuan",
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
      var _a, _b, _c, _d, _e, _f;
      const _component_v_icon = resolveComponent("v-icon");
      _push(`<dialog${ssrRenderAttrs(mergeProps({
        ref_key: "modal",
        ref: modal,
        class: "modal"
      }, _attrs))}><div class="items-center justify-center p-8 text-center bg-white rounded-lg shadow-lg modal-box">`);
      _push(ssrRenderComponent(_component_v_icon, {
        name: "co-send",
        class: "mb-4 text-secondary",
        scale: "4"
      }, null, _parent));
      _push(`<h3 class="mb-2 text-2xl font-extrabold text-secondary"> Kirim Temuan </h3><p class="mb-4 text-gray-600 text-md"> Apakah anda yakin ingin kirim temuan ini? </p><div class="w-full p-4 mb-4 bg-gray-100 rounded-lg shadow-inner"><p class="mb-2 text-sm text-left text-gray-700"><span class="font-bold">Temuan: </span>${ssrInterpolate((_a = _ctx.temuan) == null ? void 0 : _a.temuan)}</p><p class="mb-2 text-sm text-left text-gray-700"><span class="font-bold">Rekomendasi: </span><!--[-->`);
      ssrRenderList((_b = _ctx.temuan) == null ? void 0 : _b.rekomendasi, (rekomendasi, index) => {
        _push(`<!--[-->`);
        if (index < rekomendasi.rekomendasi.length - 1) {
          _push(`<br>`);
        } else {
          _push(`<!---->`);
        }
        _push(`${ssrInterpolate(index + 1)}. ${ssrInterpolate(rekomendasi == null ? void 0 : rekomendasi.rekomendasi)}<!--]-->`);
      });
      _push(`<!--]--></p>`);
      if (((_c = _ctx.temuan) == null ? void 0 : _c.unit_usaha.kode_unit) == "4R00") {
        _push(`<p class="mb-2 text-sm text-left text-gray-700"><span class="font-bold">Tujuan Unit/Bagian: </span> ${ssrInterpolate((_d = _ctx.temuan) == null ? void 0 : _d.bagian.name)}</p>`);
      } else {
        _push(`<p class="mb-2 text-sm text-left text-gray-700"><span class="font-bold">Tujuan Unit/Bagian: </span> ${ssrInterpolate((_e = _ctx.temuan) == null ? void 0 : _e.unit_usaha.nama_unit)}</p>`);
      }
      _push(`<p class="mb-2 text-sm text-left text-gray-700"><span class="font-bold">Status: </span>${ssrInterpolate((_f = _ctx.temuan) == null ? void 0 : _f.status)}</p></div><div class="flex justify-center space-x-4 modal-action"><form class="flex-1"><button class="w-full px-6 py-2 text-white btn btn-secondary"> Ya, Kirim! </button></form><form method="dialog" class="flex-1"><button class="w-full px-6 py-2 btn"> Tidak, Nanti Saja </button></form></div></div><form method="dialog" class="modal-backdrop"><button>close</button></form></dialog>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Modal/ModalKirimDraftTemuan.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ModalProsesTemuan",
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
      var _a, _b, _c, _d, _e, _f;
      const _component_v_icon = resolveComponent("v-icon");
      _push(`<dialog${ssrRenderAttrs(mergeProps({
        ref_key: "modal",
        ref: modal,
        class: "modal"
      }, _attrs))}><div class="items-center justify-center p-8 text-center bg-white rounded-lg shadow-lg modal-box">`);
      _push(ssrRenderComponent(_component_v_icon, {
        name: "hi-bookmark",
        class: "mb-4 text-accent",
        scale: "4"
      }, null, _parent));
      _push(`<h3 class="mb-2 text-2xl font-extrabold text-accent"> Proses Temuan </h3><p class="mb-4 text-gray-600 text-md"> Apakah anda yakin ingin proses temuan ini? </p><div class="w-full p-4 mb-4 bg-gray-100 rounded-lg shadow-inner"><p class="mb-2 text-sm text-left text-gray-700"><span class="font-bold">Temuan: </span>${ssrInterpolate((_a = _ctx.temuan) == null ? void 0 : _a.temuan)}</p><p class="mb-2 text-sm text-left text-gray-700"><span class="font-bold">Rekomendasi: </span><!--[-->`);
      ssrRenderList((_b = _ctx.temuan) == null ? void 0 : _b.rekomendasi, (rekomendasi, index) => {
        _push(`<!--[-->`);
        if (index < rekomendasi.rekomendasi.length - 1) {
          _push(`<br>`);
        } else {
          _push(`<!---->`);
        }
        _push(`${ssrInterpolate(index + 1)}. ${ssrInterpolate(rekomendasi == null ? void 0 : rekomendasi.rekomendasi)}<!--]-->`);
      });
      _push(`<!--]--></p>`);
      if (((_c = _ctx.temuan) == null ? void 0 : _c.unit_usaha.kode_unit) == "4R00") {
        _push(`<p class="mb-2 text-sm text-left text-gray-700"><span class="font-bold">Tujuan Unit/Bagian: </span> ${ssrInterpolate((_d = _ctx.temuan) == null ? void 0 : _d.bagian.name)}</p>`);
      } else {
        _push(`<p class="mb-2 text-sm text-left text-gray-700"><span class="font-bold">Tujuan Unit/Bagian: </span> ${ssrInterpolate((_e = _ctx.temuan) == null ? void 0 : _e.unit_usaha.nama_unit)}</p>`);
      }
      _push(`<p class="mb-2 text-sm text-left text-gray-700"><span class="font-bold">Status: </span>${ssrInterpolate((_f = _ctx.temuan) == null ? void 0 : _f.status)}</p></div><div class="flex justify-center space-x-4 modal-action"><form class="flex-1"><button class="w-full px-6 py-2 text-white btn btn-accent"> Ya, Proses! </button></form><form method="dialog" class="flex-1"><button class="w-full px-6 py-2 btn"> Tidak, Nanti Saja </button></form></div></div><form method="dialog" class="modal-backdrop"><button>close</button></form></dialog>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Modal/ModalProsesTemuan.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TableTemuan",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    user: {}
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const modalProsesTemuan = ref();
    const itemToProses = ref();
    const modalKirimDraftTemuan = ref();
    const itemToKirim = ref();
    const modalTindakLanjut = ref();
    const itemToTindakLanjut = ref();
    const selectedTemuanId = ref();
    const modalHistory = ref();
    const modalDeleteTemuan = ref();
    const itemToDelete = ref();
    const modalUpdateTemuan = ref();
    const itemToUpdate = ref();
    const diSubmit = useModel(__props, "modelValue");
    const diKlik = ref(false);
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
    watch(
      () => diSubmit.value,
      (newValue) => {
        if (newValue === true) {
          getTemuan();
          diSubmit.value = false;
        }
      }
    );
    const form = ref({
      is_spi: props.user.is_spi,
      kode_unit: props.user.karyawan.kode_unit,
      bagian: props.user.karyawan.sub_unit
    });
    const getTemuan = async () => {
      try {
        const res = await RequestAPI.getTemuan({ data: form.value });
        temuan.value = {
          ...temuan.value,
          state: "success",
          message: res.message,
          data: res.data
        };
        diSubmit.value = "false";
      } catch (e) {
        temuan.value.state = "error";
        temuan.value.message = String(e.message);
      }
    };
    onMounted(() => {
      getTemuan();
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
            _push(`<div class="flex items-center gap-2"><button${ssrIncludeBooleanAttr(item.status != "Draft") ? " disabled" : ""} class="btn btn-square btn-outline btn-warning hover:text-white group">`);
            _push(ssrRenderComponent(_component_v_icon, {
              name: "hi-refresh",
              class: "group-hover:text-white"
            }, null, _parent));
            _push(`</button><button class="btn btn-square btn-outline btn-error hover:text-white group">`);
            _push(ssrRenderComponent(_component_v_icon, {
              name: "hi-trash",
              class: "group-hover:text-white"
            }, null, _parent));
            _push(`</button>`);
            if (item.status == "Draft") {
              _push(`<button class="btn btn-square btn-outline btn-secondary hover:text-white group">`);
              _push(ssrRenderComponent(_component_v_icon, {
                name: "co-send",
                class: "group-hover:text-white"
              }, null, _parent));
              _push(`</button>`);
            } else {
              _push(`<!---->`);
            }
            if (item.status == "Menunggu Validasi") {
              _push(ssrRenderComponent(unref(Link), {
                as: "button",
                href: _ctx.route("validasi.index"),
                class: "btn btn-square btn-outline btn-primary hover:text-white group"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(ssrRenderComponent(_component_v_icon, {
                      name: "hi-external-link",
                      class: "group-hover:text-white"
                    }, null, _parent2, _scopeId));
                  } else {
                    return [
                      createVNode(_component_v_icon, {
                        name: "hi-external-link",
                        class: "group-hover:text-white"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent));
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          } else {
            _push(`<!--[-->`);
            if (item.status == "Terbuka") {
              _push(`<button class="btn btn-square btn-outline btn-accent hover:text-white group">`);
              _push(ssrRenderComponent(_component_v_icon, {
                name: "hi-bookmark",
                class: "group-hover:text-white"
              }, null, _parent));
              _push(`</button>`);
            } else if (item.status == "Sedang Diproses") {
              _push(`<button class="btn btn-square btn-outline btn-info hover:text-white group">`);
              _push(ssrRenderComponent(_component_v_icon, {
                name: "hi-external-link",
                class: "group-hover:text-white"
              }, null, _parent));
              _push(`</button>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<!--]-->`);
          }
          _push(`</td></tr>`);
        });
        _push(`<!--]-->`);
      }
      _push(`</tbody></table>`);
      _push(ssrRenderComponent(_sfc_main$6, {
        temuan: itemToDelete.value,
        nik: props.user.nik,
        ref_key: "modalDeleteTemuan",
        ref: modalDeleteTemuan,
        onRefresh: ($event) => getTemuan()
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, {
        onRefresh: ($event) => getTemuan(),
        diKlik: diKlik.value,
        "onUpdate:diKlik": ($event) => diKlik.value = $event,
        nik: props.user.nik,
        ref_key: "modalUpdateTemuan",
        ref: modalUpdateTemuan,
        temuan: itemToUpdate.value
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$b, {
        ref_key: "modalHistory",
        ref: modalHistory,
        temuan_id: selectedTemuanId.value
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        onRefresh: ($event) => getTemuan(),
        nik: props.user.nik,
        ref_key: "modalTindakLanjut",
        ref: modalTindakLanjut,
        temuan: itemToTindakLanjut.value
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        onRefresh: ($event) => getTemuan(),
        ref_key: "modalKirimDraftTemuan",
        ref: modalKirimDraftTemuan,
        temuan: itemToKirim.value,
        nik: props.user.nik
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        onRefresh: ($event) => getTemuan(),
        ref_key: "modalProsesTemuan",
        ref: modalProsesTemuan,
        temuan: itemToProses.value,
        nik: props.user.nik
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Table/TableTemuan.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Temuan",
  __ssrInlineRender: true,
  setup(__props) {
    const { auth } = usePage().props;
    const modalTambahTemuan = ref();
    const showTambahTemuan = () => {
      modalTambahTemuan.value.showModal();
    };
    const diSubmit = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_icon = resolveComponent("v-icon");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Temuan" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$c, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="pb-10 text-xl font-semibold leading-tight text-gray-800"${_scopeId}> Temuan </h2>`);
          } else {
            return [
              createVNode("h2", { class: "pb-10 text-xl font-semibold leading-tight text-gray-800" }, " Temuan ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full px-5 py-10 bg-white border border-black rounded-lg"${_scopeId}><h3 class="pb-5 font-medium"${_scopeId}>List Temuan</h3>`);
            if (unref(auth).user.is_spi) {
              _push2(`<div class="flex"${_scopeId}><button class="ml-auto text-white btn btn-success"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_v_icon, { name: "hi-plus-circle" }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>Tambah Temuan</span></button></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_sfc_main$1, {
              modelValue: diSubmit.value,
              "onUpdate:modelValue": ($event) => diSubmit.value = $event,
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
                }, [
                  createVNode("button", {
                    onClick: ($event) => showTambahTemuan(),
                    class: "ml-auto text-white btn btn-success"
                  }, [
                    createVNode(_component_v_icon, { name: "hi-plus-circle" }),
                    createVNode("span", null, "Tambah Temuan")
                  ], 8, ["onClick"])
                ])) : createCommentVNode("", true),
                createVNode(_sfc_main$1, {
                  modelValue: diSubmit.value,
                  "onUpdate:modelValue": ($event) => diSubmit.value = $event,
                  user: unref(auth).user
                }, null, 8, ["modelValue", "onUpdate:modelValue", "user"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$7, {
        modelValue: diSubmit.value,
        "onUpdate:modelValue": ($event) => diSubmit.value = $event,
        user: unref(auth).user,
        ref_key: "modalTambahTemuan",
        ref: modalTambahTemuan
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Temuan.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
