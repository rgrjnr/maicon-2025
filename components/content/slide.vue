<template>
  <div class="slide">
    <img :src="src" :alt="alt" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  src: string;
  alt: string;
}>();
</script>
