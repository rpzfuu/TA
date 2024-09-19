import { defineComponent, ref, resolveComponent, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderDynamicModel, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import { useForm, Head } from "@inertiajs/vue3";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Login",
  __ssrInlineRender: true,
  setup(__props) {
    const isPasswordHide = ref(true);
    const form = useForm({
      nik: "",
      password: "",
      remember: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_icon = resolveComponent("v-icon");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Login" }, null, _parent));
      _push(`<div class="h-screen bg-gray-100"><div class="flex flex-wrap w-full bg-white shadow-lg"><div class="w-1/3 h-screen p-8 bg-white"><div class="mb-8 text-center"><img src="assets/img/loginlogo.png" class="h-32 mx-auto"><h1 class="text-2xl font-bold text-green-700"> WELCOME TO </h1><h1 class="text-2xl font-bold text-green-700"> Sistem Monitoring Tindak Lanjut Audit </h1></div><form class="space-y-7 form-control"><label class="flex flex-col items-start input input-bordered"><div class="flex items-center w-full">`);
      _push(ssrRenderComponent(_component_v_icon, { name: "hi-identification" }, null, _parent));
      _push(`<input type="text"${ssrRenderAttr("value", unref(form).nik)} placeholder="NIK" class="w-full border-none input input-bordered focus:!border-none" autocomplete="nik" autofocus required></div>`);
      if (unref(form).errors.nik) {
        _push(`<span class="mt-1 -ml-4 text-sm text-red-500">${ssrInterpolate(unref(form).errors.nik)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label><label class="flex flex-col items-start input input-bordered"><div class="flex items-center w-full">`);
      _push(ssrRenderComponent(_component_v_icon, { name: "hi-lock-closed" }, null, _parent));
      _push(`<input${ssrRenderAttr("type", isPasswordHide.value ? "password" : "text")}${ssrRenderDynamicModel(isPasswordHide.value ? "password" : "text", unref(form).password, null)} placeholder="Password" class="w-full border-none input input-bordered focus:!border-none" required><button type="button" class="">`);
      _push(ssrRenderComponent(_component_v_icon, {
        name: isPasswordHide.value ? "hi-eye-off" : "hi-eye"
      }, null, _parent));
      _push(`</button></div>`);
      if (unref(form).errors.password) {
        _push(`<span class="mt-1 -ml-4 text-sm text-red-500">${ssrInterpolate(unref(form).errors.password)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label><div class="flex items-center justify-between form-control"><label class="cursor-pointer label"><input type="checkbox" class="checkbox checkbox-success [--chkfg:white]"${ssrIncludeBooleanAttr(Array.isArray(unref(form).remember) ? ssrLooseContain(unref(form).remember, null) : unref(form).remember) ? " checked" : ""}><span class="mx-5 text-green-700 label-text">REMEMBER ME</span></label></div><div class="form-control"><button type="submit" class="w-full text-white btn btn-success"> LOG IN </button></div></form></div><div class="w-2/3 h-screen"><img src="/assets/img/loginbg.png" class="object-cover w-full h-full"></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
