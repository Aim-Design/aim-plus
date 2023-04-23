<template>
  <button class="aim-button" :class="buttonStyle">
    <slot>555</slot>
  </button>
</template>

<script lang="ts" setup>
import './style/index.less';

import { computed } from 'vue';
defineOptions({ name: 'ai-button' });
type ButtonProps = {
  type?: string;
};
const buttonProps = defineProps<ButtonProps>();

const buttonStyle = computed(() => {
  return { [`ea-button--${buttonProps.type}`]: buttonProps.type };
});
</script>

<style scoped lang="less"></style>
