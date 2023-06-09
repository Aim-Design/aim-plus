<template>
  <div>
    <aim-input v-model="value" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref<number>(520);
</script>

<style scoped></style>
