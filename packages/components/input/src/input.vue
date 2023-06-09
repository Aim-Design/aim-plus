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
      :class="[n('inner'), styleClass]"
      :disabled="props.disabled"
      :placeholder="props.placeholder"
      v-model="value"
      v-bind="attrs"
    />
    <span @click.stop="clearValue" v-if="props.clearable" :class="n('suffix')">
      <aim-icon v-show="showClear && value" name="x-circle-fill" />
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

//根据props更改类名
const styleClass = computed(() => {
  return {
    'is-disabled': props.disabled
  };
});
</script>

<style lang="scss" scoped></style>
