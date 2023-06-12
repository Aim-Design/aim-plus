<template>
  <a
    :class="[
      n(),
      type && n(`--${type}`),
      disabled && 'is-disabled',
      underline && 'is-underline'
    ]"
    :href="disabled ? undefined : href"
    v-bind="attrs"
  >
    <!-- x-circle -->
    <slot></slot>
  </a>
</template>

<script lang="ts" setup>
import './styles/link.less';
defineOptions({ name: 'AimLink' });

import { computed, useAttrs, ref } from 'vue';
import { createNamespace } from '../../../utils';
import { LinkProps } from './link';
import { AimIcon } from '../../icon/index';

const props = defineProps(LinkProps);
const attrs = useAttrs();
const { n } = createNamespace('link');
</script>
