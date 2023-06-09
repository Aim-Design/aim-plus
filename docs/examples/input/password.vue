<template>
  <div>
    <aim-input v-model="value" show-password />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref<number>(520);
</script>

<style scoped></style>
