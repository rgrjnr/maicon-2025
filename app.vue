<template>
  <div id="wrapper">
    <div id="site">
      <header class="flex justify-between items-center">
        <h1><NuxtLink to="/">Maicon Douglas</NuxtLink></h1>
        <nav>
          <ul class="flex gap-4">
            <li>
              <NuxtLink to="/#cases">Cases</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#about">Sobre mim</NuxtLink>
            </li>
          </ul>
        </nav>
      </header>
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ScrollSmoother } from "gsap/ScrollSmoother";

onMounted(() => {
  useGSAP().registerPlugin(ScrollSmoother);

  ScrollSmoother.create({
    smooth: 1,
    effects: true,
    wrapper: "#wrapper",
    content: "#site",
  });
});
</script>
