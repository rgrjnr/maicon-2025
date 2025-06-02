<script lang="ts" setup>
import { gsap } from "gsap";
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
  console.log("query", queryCollection("cases").path(route.path));
  return queryCollection("cases").path(route.path).first();
});

const { data: allCases } = await useAsyncData("allCases", () =>
  queryCollection("cases").all()
);

const nextCase = computed(() => {
  if (!allCases.value || !page.value) return null;
  const currentIndex = allCases.value.findIndex(
    (c) => c.path === page.value?.path
  );
  const nextIndex = (currentIndex + 1) % allCases.value.length;
  return allCases.value[nextIndex];
});

onMounted(() => {
  if (page.value) {
    useHead({ title: page.value.title });
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
  <template v-if="page">
    <article>
      <div class="flex gap-4 mt-12 items-baseline line-height-1">
        <h1 class="text-8xl font-regular">{{ page.title }}</h1>
        <span>{{ page.subtitle }}</span>
      </div>
      <div class="flex gap-4 mt-12">
        <div class="flex-1" v-if="page.function">
          <strong class="uppercase text-sm">Função</strong>
          {{ page.function }}
        </div>
        <div class="flex-1" v-if="page.agency">
          <strong class="uppercase text-sm">Agência</strong> {{ page.agency }}
        </div>
        <div class="flex-1" v-if="page.client">
          <strong class="uppercase text-sm">Cliente</strong> {{ page.client }}
        </div>
      </div>
      <div class="mt-12">
        <ContentRenderer :value="page" />
      </div>
      <div class="mt-12 text-center text-4xl font-main">
        <NuxtLink v-if="nextCase" :to="nextCase.path">Próximo projeto</NuxtLink>
        <NuxtLink v-else to="/">Voltar ao início</NuxtLink>
      </div>
    </article>
  </template>
  <template v-else>
    <div class="empty-page">
      <h1>Page Not Found</h1>
      <p>Oops! The content you're looking for doesn't exist.</p>
      <NuxtLink to="/" @click="gsap.to(window, { duration: 2, scrollTo: 0 })"
        >Go back home</NuxtLink
      >
    </div>
  </template>
</template>

<style lang="scss">
article {
  h1 {
    font-size: 3rem;
    font-weight: 400;
  }
  img {
    width: 100%;
    height: auto;
    margin-block: 6rem;
  }
  p {
    font-size: 1.25rem;
    line-height: 1.75;
    margin-bottom: 3rem;
  }
}

.video-container {
  position: relative;
  padding-bottom: 56.25%;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
