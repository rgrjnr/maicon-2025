<script lang="ts" setup>
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
  console.log("query", queryCollection("cases").path(route.path));
  return queryCollection("cases").path(route.path).first();
});

onMounted(() => {
  if (page.value) {
    console.log("page", page.value);
    document.body.style.setProperty("--color", page.value?.color as string);
    document.body.style.setProperty(
      "--background-color",
      page.value?.background as string
    );
  }
});
</script>

<template>
  <template v-if="page"
    ><div class="flex gap-4">
      <h1 class="text-4xl font-regular">{{ page.title }}</h1>
      <p class="text-lg">{{ page.description }}</p>
    </div>
    <article>
      <ContentRenderer :value="page" />
    </article>
  </template>
  <template v-else>
    <div class="empty-page">
      <h1>Page Not Found</h1>
      <p>Oops! The content you're looking for doesn't exist.</p>
      <NuxtLink to="/">Go back home</NuxtLink>
    </div>
  </template>
</template>

<style lang="scss">
article {
  img {
    width: 100%;
    height: auto;
  }
}
</style>
