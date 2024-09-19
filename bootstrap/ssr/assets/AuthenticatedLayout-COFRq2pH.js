import { defineComponent, ref, onMounted, resolveComponent, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
import axios, { AxiosError } from "axios";
import { usePage, Link } from "@inertiajs/vue3";
import dayjs from "dayjs";
class RequestAPI {
  static async _request({
    method,
    action,
    data,
    timeout = 6e4
  }) {
    var _a, _b;
    try {
      let res;
      if (["GET", "POST", "DELETE"].includes(method)) {
        res = await axios.request({
          url: action,
          method,
          data,
          timeout
        });
      } else if (method == "PUT") {
        if (data instanceof FormData) {
          data.append("_method", "PUT");
        } else if (typeof data == "object") {
          data._method = "PUT";
        } else if (data == void 0) {
          data = { _method: "PUT" };
        }
        res = await axios.request({
          url: action,
          method: "POST",
          data
        });
      }
      return res == null ? void 0 : res.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        if (((_a = err.response) == null ? void 0 : _a.data.message) != void 0) {
          throw (_b = err.response) == null ? void 0 : _b.data;
        } else {
          throw "Terjadi Kesalahan: " + err.message;
        }
      }
    }
  }
  static async exampleGet() {
    return await this._request({
      method: "GET",
      action: `api/getunit`
    });
  }
  static async ExamplePost({
    data
  }) {
    return await this._request({
      method: "POST",
      action: `/api/postData`,
      data
    });
  }
  static async getUnit() {
    return await this._request({
      method: "GET",
      action: `api/getunit`
    });
  }
  static async inputTemuan({ data }) {
    return await this._request({
      method: "POST",
      action: `/api/inputtemuan`,
      data
    });
  }
  static async getTemuan({ data }) {
    return await this._request({
      method: "POST",
      action: `api/gettemuan`,
      data
    });
  }
  static async getTemuanValidasi({ data }) {
    return await this._request({
      method: "POST",
      action: `api/gettemuanvalidasi`,
      data
    });
  }
  static async getCountTemuan() {
    return await this._request({
      method: "GET",
      action: `api/counttemuan`
    });
  }
  static async getCountValidasi() {
    return await this._request({
      method: "GET",
      action: `api/countvalidasi`
    });
  }
  static async getCountUnit() {
    return await this._request({
      method: "GET",
      action: `api/countunit`
    });
  }
  static async getCountRekomendasi() {
    return await this._request({
      method: "GET",
      action: `api/countrekomendasi`
    });
  }
  static async getBidang() {
    return await this._request({
      method: "GET",
      action: `api/getbidang`
    });
  }
  static async deleteTemuan({ data }) {
    return await this._request({
      method: "POST",
      action: `api/deletetemuan`,
      data
    });
  }
  static async deleteRekomendasi({ data }) {
    return await this._request({
      method: "POST",
      action: `api/deleterekomendasi`,
      data
    });
  }
  static async updateTemuan({ data }) {
    return await this._request({
      method: "POST",
      action: `/api/updatetemuan`,
      data
    });
  }
  static async getTemuanHistory({ data }) {
    return await this._request({
      method: "POST",
      action: `/api/gettemuanhistory`,
      data
    });
  }
  static async inputTindakLanjut({ data }) {
    return await this._request({
      method: "POST",
      action: `/api/inputtindaklanjut`,
      data
    });
  }
  static async kirimTemuan({ data }) {
    return await this._request({
      method: "POST",
      action: `/api/kirimtemuan`,
      data
    });
  }
  static async prosesTemuan({ data }) {
    return await this._request({
      method: "POST",
      action: `/api/prosestemuan`,
      data
    });
  }
  static async validasiTemuan({ data }) {
    return await this._request({
      method: "POST",
      action: `/api/validasitemuan`,
      data
    });
  }
  static async unitCekValidasi({ data }) {
    return await this._request({
      method: "POST",
      action: `/api/unitcekvalidasi`,
      data
    });
  }
  static async getNotifikasi({ data }) {
    return await this._request({
      method: "POST",
      action: `/api/getnotifikasi`,
      data
    });
  }
  static async readNotifikasi({ data }) {
    return await this._request({
      method: "POST",
      action: `/api/readnotifikasi`,
      data
    });
  }
  static async readAllNotifikasi({ data }) {
    return await this._request({
      method: "POST",
      action: `/api/readallnotifikasi`,
      data
    });
  }
}
const RequestAPI$1 = RequestAPI;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AuthenticatedLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const { auth } = usePage().props;
    const notifikasi = ref({
      state: "initial",
      message: "",
      data: "",
      notification_count: 0
    });
    const getNotifikasi = async () => {
      var _a, _b;
      try {
        const form = ref({
          nik: (_a = auth.user) == null ? void 0 : _a.nik,
          is_spi: (_b = auth.user) == null ? void 0 : _b.is_spi
        });
        const res = await RequestAPI$1.getNotifikasi({
          data: form.value
        });
        notifikasi.value = {
          ...notifikasi.value,
          state: "success",
          message: res.message,
          data: res.data || [],
          notification_count: res.notification_count
        };
      } catch (e) {
        notifikasi.value.state = "error";
        notifikasi.value.message = String(e.message);
      }
    };
    const readNotifikasi = async (notifikasi_id) => {
      try {
        const form = ref({ notifikasi_id });
        await RequestAPI$1.readNotifikasi({
          data: form.value
        });
      } catch (e) {
      }
    };
    const formatTime = (date) => {
      const now = dayjs();
      const createdAt = dayjs(date);
      const diffHours = now.diff(createdAt, "hour");
      if (diffHours < 1) {
        const diffMinutes = now.diff(createdAt, "minute");
        return `${diffMinutes} menit yang lalu`;
      } else if (diffHours < 24) {
        return `${diffHours} jam yang lalu`;
      } else {
        const diffDays = now.diff(createdAt, "day");
        return `${diffDays} hari yang lalu`;
      }
    };
    onMounted(() => {
      getNotifikasi();
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_v_icon = resolveComponent("v-icon");
      _push(`<!--[--><div class="navbar bg-base-100"><div class="flex-1">`);
      _push(ssrRenderComponent(unref(Link), {
        as: "button",
        class: "text-xl btn btn-ghost",
        href: _ctx.route("dashboard.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="assets\\img\\loginlogo.png" alt="" class="h-12"${_scopeId}>TindakAudit`);
          } else {
            return [
              createVNode("img", {
                src: "assets\\img\\loginlogo.png",
                alt: "",
                class: "h-12"
              }),
              createTextVNode("TindakAudit")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex-none"><span>${ssrInterpolate((_a = unref(auth).user) == null ? void 0 : _a.karyawan.nama)} - ${ssrInterpolate((_b = unref(auth).user) == null ? void 0 : _b.nik)}</span><div class="dropdown dropdown-end z-[9999]"><div tabindex="0" role="button" class="btn btn-ghost btn-circle"><div class="indicator">`);
      _push(ssrRenderComponent(_component_v_icon, {
        name: "hi-bell",
        class: "text-xl"
      }, null, _parent));
      if (notifikasi.value.notification_count > 0) {
        _push(`<span class="text-white badge badge-sm badge-error indicator-item">${ssrInterpolate(notifikasi.value.notification_count)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div tabindex="0" class="mt-3 shadow-xl card card-compact dropdown-content bg-base-100 w-80"><div class="p-4 card-body"><div class="overflow-y-auto max-h-64">`);
      if (!notifikasi.value.data || notifikasi.value.data.length == 0) {
        _push(`<div class="text-center"> Tidak Ada Notifikasi </div>`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(notifikasi.value.data, (notif, index) => {
          _push(`<div class="flex items-center space-x-3">`);
          _push(ssrRenderComponent(unref(Link), {
            as: "button",
            href: _ctx.route("temuan.index"),
            onClick: ($event) => readNotifikasi(notif.id),
            class: "flex items-center w-full p-2 space-x-3 transition duration-200 ease-in-out bg-white rounded hover:bg-gray-100"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a2, _b2;
              if (_push2) {
                _push2(`<div class="flex-shrink-0"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_v_icon, {
                  name: "hi-bell",
                  class: [
                    notif.read ? "text-gray-400" : "text-blue-400",
                    "text-2xl"
                  ]
                }, null, _parent2, _scopeId));
                _push2(`</div><div class="flex-1 text-left"${_scopeId}><p class="text-sm text-gray-400"${_scopeId}>${ssrInterpolate(notif.message)}</p><p class="font-bold text-gray-800"${_scopeId}>${ssrInterpolate((_a2 = notif.temuan) == null ? void 0 : _a2.temuan)}</p><p class="text-xs text-gray-400"${_scopeId}>${ssrInterpolate(formatTime(notif.created_at))}</p></div>`);
              } else {
                return [
                  createVNode("div", { class: "flex-shrink-0" }, [
                    createVNode(_component_v_icon, {
                      name: "hi-bell",
                      class: [
                        notif.read ? "text-gray-400" : "text-blue-400",
                        "text-2xl"
                      ]
                    }, null, 8, ["class"])
                  ]),
                  createVNode("div", { class: "flex-1 text-left" }, [
                    createVNode("p", { class: "text-sm text-gray-400" }, toDisplayString(notif.message), 1),
                    createVNode("p", { class: "font-bold text-gray-800" }, toDisplayString((_b2 = notif.temuan) == null ? void 0 : _b2.temuan), 1),
                    createVNode("p", { class: "text-xs text-gray-400" }, toDisplayString(formatTime(notif.created_at)), 1)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]-->`);
      }
      _push(`</div>`);
      if (!notifikasi.value.data || notifikasi.value.data.length == 0) {
        _push(`<!--[--><!--]-->`);
      } else {
        _push(`<div><button type="button" class="w-full btn"> Tandai Baca Semua </button></div>`);
      }
      _push(`</div></div></div><div class="dropdown dropdown-end"><div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar"><div class="w-10 rounded-full"><img${ssrRenderAttr(
        "src",
        unref(auth).user.karyawan.jenkel == "Male" ? "https://xsgames.co/randomusers/avatar.php?g=male" : "https://xsgames.co/randomusers/avatar.php?g=female"
      )}></div></div><ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"><li>`);
      _push(ssrRenderComponent(unref(Link), {
        as: "button",
        href: _ctx.route("profile.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Profile `);
          } else {
            return [
              createTextVNode(" Profile ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(unref(Link), {
        as: "button",
        href: _ctx.route("logout"),
        method: "post"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Logout`);
          } else {
            return [
              createTextVNode("Logout")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div></div><div class="flex min-h-screen"><aside class="w-64 bg-white shadow-lg"><div class="flex flex-col p-4"><nav class="space-y-4">`);
      _push(ssrRenderComponent(unref(Link), {
        as: "button",
        href: _ctx.route("dashboard.index"),
        class: {
          "w-full flex items-center p-2 space-x-4 text-green-700 bg-green-100 rounded-lg": _ctx.route().current("dashboard.index"),
          "w-full flex items-center p-2 space-x-4 text-gray-600 hover:text-green-700 hover:bg-gray-200 rounded-lg": !_ctx.route().current("dashboard.index")
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_icon, { name: "hi-home" }, null, _parent2, _scopeId));
            _push2(`<span class="font-medium"${_scopeId}>Dashboard</span>`);
          } else {
            return [
              createVNode(_component_v_icon, { name: "hi-home" }),
              createVNode("span", { class: "font-medium" }, "Dashboard")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        as: "button",
        href: _ctx.route("temuan.index"),
        class: {
          "w-full flex items-center p-2 space-x-4 text-green-700 bg-green-100 rounded-lg": _ctx.route().current("temuan.index"),
          "w-full flex items-center p-2 space-x-4 text-gray-600 hover:text-green-700 hover:bg-gray-200 rounded-lg": !_ctx.route().current("temuan.index")
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_icon, { name: "hi-document-text" }, null, _parent2, _scopeId));
            _push2(`<span class="font-medium"${_scopeId}>Temuan</span>`);
          } else {
            return [
              createVNode(_component_v_icon, { name: "hi-document-text" }),
              createVNode("span", { class: "font-medium" }, "Temuan")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        as: "button",
        href: _ctx.route("validasi.index"),
        class: {
          "w-full flex items-center p-2 space-x-4 text-green-700 bg-green-100 rounded-lg": _ctx.route().current("validasi.index"),
          "w-full flex items-center p-2 space-x-4 text-gray-600 hover:text-green-700 hover:bg-gray-200 rounded-lg": !_ctx.route().current("validasi.index")
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_icon, { name: "hi-clipboard-check" }, null, _parent2, _scopeId));
            _push2(`<span class="font-medium"${_scopeId}>Validasi</span>`);
          } else {
            return [
              createVNode(_component_v_icon, { name: "hi-clipboard-check" }),
              createVNode("span", { class: "font-medium" }, "Validasi")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></div></aside><div class="w-full p-10 bg-gray-200 rounded-tl-lg">`);
      if (_ctx.$slots.header) {
        _push(`<header>`);
        ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
        _push(`</header>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", { class: "bg-gray-100" }, null, _push, _parent);
      _push(`</div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AuthenticatedLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  RequestAPI$1 as R,
  _sfc_main as _
};
