<template>
  <div>
    <aim-input v-model="value" clearable />
    {{ value }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref<number>(0);
</script>

<style scoped></style>
