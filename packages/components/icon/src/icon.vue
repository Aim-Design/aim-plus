<template>
  <i :class="[n(), rotate && 'is-rotate']" :style="style">
    <use v-html="icon"></use>
    <slot />
  </i>
</template>

<script lang="ts" setup>
defineOptions({ name: 'AimIcon' });

import './styles/icon.less';
import { computed, CSSProperties } from 'vue';
import { createNamespace, isUndefined, addUnit } from '../../../utils';
import { IconProps, getIcon } from './icon';

const { n } = createNamespace('icon');
const props = defineProps(IconProps);

const icon = computed(() => getIcon(props.name));
const style = computed<CSSProperties>(() => {
  if (!props.size && !props.color) return {};

  return {
    fontSize: isUndefined(props.size) ? undefined : addUnit(props.size),
    '--color': props.color
  };
});
</script>
