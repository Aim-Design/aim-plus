<template>
  <button
    :class="[
      n(),
      type && n(`--${type}`),
      size && n(`--${size}`),
      plain && 'is-plain',
      round && 'is-round',
      circle && 'is-circle',
      disabled && 'is-disabled',
      text && 'is-text'
    ]"
    :style="{
      color: textColor,
      ...style
    }"
    :disabled="disabled"
  >
    <div :class="[n('content')]">
      <!-- <VanIcon v-if="!!icon" :name="icon" /> -->
      <slot />
    </div>
  </button>
</template>

<script lang="ts" setup>
import './styles/button.less';

import { computed } from 'vue';
import { createNamespace } from '../../../utils';
import { ButtonProps } from './button';

defineOptions({ name: 'AimButton' });

const buttonProps = defineProps(ButtonProps);

const style = computed(() =>
  buttonProps.color
    ? {
        '--aim-button-bg-color': buttonProps.color,
        '--aim-button-text-color': 'var(--aim-color-white)',
        '--aim-button-border-color': buttonProps.color
      }
    : {}
);

const { n } = createNamespace('button');

// console.log('🚀 ~ file: button.vue:48 ~ n:', n('default')); //aim-button__default
// console.log('🚀 ~ file: button.vue:48 ~ n:', n('--default')); //aim-button--default
</script>

<style lang="less"></style>
