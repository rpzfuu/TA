import { defineComponent, ref, onMounted, resolveComponent, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1, R as RequestAPI } from "./AuthenticatedLayout-tMI_FdMz.js";
import { Head } from "@inertiajs/vue3";
import "axios";
import "dayjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    const getCountTemuan = async () => {
      try {
        const res = await RequestAPI.getCountTemuan();
        countTemuan.value = {
          ...countTemuan.value,
          state: "success",
          message: res.message,
          data: res.data
        };
      } catch (e) {
        countTemuan.value.state = "error";
        countTemuan.value.message = String(e.message);
      }
    };
    const getCountUnit = async () => {
      try {
        const res = await RequestAPI.getCountUnit();
        countUnit.value = {
          ...countUnit.value,
          state: "success",
          message: res.message,
          data: res.data
        };
      } catch (e) {
        countUnit.value.state = "error";
        countUnit.value.message = String(e.message);
      }
    };
    const getCountRekomendasi = async () => {
      try {
        const res = await RequestAPI.getCountRekomendasi();
        countRekomendasi.value = {
          ...countRekomendasi.value,
          state: "success",
          message: res.message,
          data: res.data
        };
      } catch (e) {
        countRekomendasi.value.state = "error";
        countRekomendasi.value.message = String(e.message);
      }
    };
    const getCountValidasi = async () => {
      try {
        const res = await RequestAPI.getCountValidasi();
        countValidasi.value = {
          ...countValidasi.value,
          state: "success",
          message: res.message,
          data: res.data
        };
      } catch (e) {
        countValidasi.value.state = "error";
        countValidasi.value.message = String(e.message);
      }
    };
    const countTemuan = ref({
      state: "initial",
      message: "",
      data: ""
    });
    const countUnit = ref({
      state: "initial",
      message: "",
      data: ""
    });
    const countRekomendasi = ref({
      state: "initial",
      message: "",
      data: ""
    });
    const countValidasi = ref({
      state: "initial",
      message: "",
      data: ""
    });
    onMounted(() => {
      getCountTemuan();
      getCountUnit();
      getCountRekomendasi();
      getCountValidasi();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_icon = resolveComponent("v-icon");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Dashboard" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="pb-10 text-xl font-semibold leading-tight text-gray-800"${_scopeId}> Dashboard </h2>`);
          } else {
            return [
              createVNode("h2", { class: "pb-10 text-xl font-semibold leading-tight text-gray-800" }, " Dashboard ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-2 gap-6"${_scopeId}><div class="grid items-center grid-cols-2 p-6 bg-white rounded-lg shadow"${_scopeId}><div${_scopeId}><p class="text-lg font-bold"${_scopeId}>Total Unit</p><p class="text-2xl font-bold"${_scopeId}>${ssrInterpolate(countUnit.value.data)}</p></div><div class="flex justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_icon, {
              name: "hi-chart-bar",
              scale: "5",
              fill: "green"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="grid items-center grid-cols-2 p-6 bg-white rounded-lg shadow"${_scopeId}><div${_scopeId}><p class="text-lg font-bold"${_scopeId}>Total Rekomendasi</p><p class="text-2xl font-bold"${_scopeId}>${ssrInterpolate(countRekomendasi.value.data)}</p></div><div class="flex justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_icon, {
              name: "fa-receipt",
              scale: "5",
              fill: "green"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="grid items-center grid-cols-2 p-6 bg-white rounded-lg shadow"${_scopeId}><div${_scopeId}><p class="text-lg font-bold"${_scopeId}>Total Temuan</p><p class="text-2xl font-bold"${_scopeId}>${ssrInterpolate(countTemuan.value.data)}</p></div><div class="flex justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_icon, {
              name: "hi-document-search",
              scale: "5",
              fill: "green"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="grid items-center grid-cols-2 p-6 bg-white rounded-lg shadow"${_scopeId}><div${_scopeId}><p class="text-lg font-bold"${_scopeId}>Total Validasi</p><p class="text-2xl font-bold"${_scopeId}>${ssrInterpolate(countValidasi.value.data)}</p></div><div class="flex justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_icon, {
              name: "hi-clipboard-check",
              scale: "5",
              fill: "green"
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-2 gap-6" }, [
                createVNode("div", { class: "grid items-center grid-cols-2 p-6 bg-white rounded-lg shadow" }, [
                  createVNode("div", null, [
                    createVNode("p", { class: "text-lg font-bold" }, "Total Unit"),
                    createVNode("p", { class: "text-2xl font-bold" }, toDisplayString(countUnit.value.data), 1)
                  ]),
                  createVNode("div", { class: "flex justify-center" }, [
                    createVNode(_component_v_icon, {
                      name: "hi-chart-bar",
                      scale: "5",
                      fill: "green"
                    })
                  ])
                ]),
                createVNode("div", { class: "grid items-center grid-cols-2 p-6 bg-white rounded-lg shadow" }, [
                  createVNode("div", null, [
                    createVNode("p", { class: "text-lg font-bold" }, "Total Rekomendasi"),
                    createVNode("p", { class: "text-2xl font-bold" }, toDisplayString(countRekomendasi.value.data), 1)
                  ]),
                  createVNode("div", { class: "flex justify-center" }, [
                    createVNode(_component_v_icon, {
                      name: "fa-receipt",
                      scale: "5",
                      fill: "green"
                    })
                  ])
                ]),
                createVNode("div", { class: "grid items-center grid-cols-2 p-6 bg-white rounded-lg shadow" }, [
                  createVNode("div", null, [
                    createVNode("p", { class: "text-lg font-bold" }, "Total Temuan"),
                    createVNode("p", { class: "text-2xl font-bold" }, toDisplayString(countTemuan.value.data), 1)
                  ]),
                  createVNode("div", { class: "flex justify-center" }, [
                    createVNode(_component_v_icon, {
                      name: "hi-document-search",
                      scale: "5",
                      fill: "green"
                    })
                  ])
                ]),
                createVNode("div", { class: "grid items-center grid-cols-2 p-6 bg-white rounded-lg shadow" }, [
                  createVNode("div", null, [
                    createVNode("p", { class: "text-lg font-bold" }, "Total Validasi"),
                    createVNode("p", { class: "text-2xl font-bold" }, toDisplayString(countValidasi.value.data), 1)
                  ]),
                  createVNode("div", { class: "flex justify-center" }, [
                    createVNode(_component_v_icon, {
                      name: "hi-clipboard-check",
                      scale: "5",
                      fill: "green"
                    })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
