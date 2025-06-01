<template>
  <div class="gallery">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  items: { src: string; alt: string }[];
}>();
</script>

<style lang="scss">
.gallery {
  padding-block: 2rem;
  overflow: visible;
  margin-block: 3rem;

  p {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x proximity;
    padding-inline: var(--outer-padding);
    padding-bottom: 2rem;
    margin-bottom: -2rem;
    margin-inline: calc(var(--outer-padding) * -1);
    display: flex;
    gap: 1rem;
    width: 100vw;

    img {
      margin: 0;
      border-radius: 0.5rem;
      width: 50rem;
      max-width: calc(100vw - var(--outer-padding) * 2);
    }
  }
}
</style>
