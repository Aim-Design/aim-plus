<template>
  <div
    :class="[n()]"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <span v-if="$slots.prefix || prefixIcon" :class="n('prefix')">
      <slot name="prefix"></slot>
      <aim-icon v-if="prefixIcon" :name="prefixIcon" />
    </span>
    <input
      ref="input"
      :class="[n('inner'), styleClass]"
      :disabled="props.disabled"
      :placeholder="props.placeholder"
      v-model="value"
      v-bind="attrs"
    />
    <span v-if="props.clearable || props.showPassword" :class="n('suffix')">
      <template v-if="showPassword">
        <aim-icon
          :name="passwordView ? 'eye' : 'eye-slash'"
          @click="handleViewPassword"
        />
      </template>
      <aim-icon
        v-else
        v-show="showClear && value"
        name="x-circle"
        @click.stop="clearValue"
      />
    </span>
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: 'AimInput' });
import './styles/input.less';

import { computed, useAttrs, ref } from 'vue';
import { createNamespace } from '../../../utils';
import AimIcon from '../../icon';
import { InputProps } from './input';

const props = defineProps(InputProps);
const attrs = useAttrs();
const inputEmits = defineEmits(['update:modelValue', 'focus', 'blur', 'clear']);
const { n } = createNamespace('input');

const value = computed<any>({
  get: () => props.modelValue,
  set: (val: any) => {
    console.log(val);
    val ? (showClear.value = true) : (showClear.value = false);
    inputEmits('update:modelValue', val);
  }
});

const showClear = ref(false); //是否可清空
//清除input value
const clearValue = () => {
  value.value = '';
  inputEmits('update:modelValue', '');
};

function handleMouseEnter() {
  showClear.value = props.clearable;
}
function handleMouseLeave() {
  showClear.value = !!value.value;
}

//显示隐藏密码框 showPassword
const input = ref();
const passwordView = ref(true); //密码是否可见

Promise.resolve().then(() => {
  if (!props.showPassword) {
    input.value.type = 'password';
  }
});

// 点击眼睛
const handleViewPassword = () => {
  passwordView.value = !passwordView.value;

  if (input.value.type === 'password') {
    input.value.type = attrs.type || 'text';
    return;
  }
  input.value.type = 'password';
};

//根据props更改类名
const styleClass = computed(() => {
  return {
    'is-disabled': props.disabled
  };
});
</script>

<style lang="scss" scoped></style>
