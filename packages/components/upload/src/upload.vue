<template>
  <div>9999999</div>
</template>

<script lang="ts" setup>
import './styles/upload.less';
defineOptions({ name: 'AimUpload' });

import { computed, useAttrs, ref } from 'vue';
import { createNamespace } from '../../../utils';
import { UploadProps } from './link';
import { AimIcon } from '../../icon/index';

const props = defineProps(UploadProps);
const attrs = useAttrs();
const { n } = createNamespace('upload');
</script>
