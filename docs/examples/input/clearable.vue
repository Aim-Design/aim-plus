<template>
  <div>
    <aim-input v-model="value" clearable />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref<number>(520);
</script>

<style scoped></style>
