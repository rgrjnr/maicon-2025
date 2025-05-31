<template>
  <div id="wrapper">
    <header class="flex justify-between items-center">
      <h1>Maicon Douglas</h1>
      <nav>
        <ul class="flex gap-4">
          <li>
            <NuxtLink to="/">Cases</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">About me</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <div id="site">
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
