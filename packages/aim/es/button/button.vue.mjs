import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, renderSlot, createTextVNode } from "vue";
import "./style/index.less.mjs";
const _hoisted_1 = /* @__PURE__ */ createTextVNode("555");
const __default__ = defineComponent({ name: "ai-button" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    type: null
  },
  setup(__props) {
    const buttonProps = __props;
    const buttonStyle = computed(() => {
      return { [`ea-button--${buttonProps.type}`]: buttonProps.type };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(["aim-button", unref(buttonStyle)])
      }, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          _hoisted_1
        ])
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
