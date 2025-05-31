<template>
  <main>
    <section id="hero" class="bg-black flex items-center justify-center">
      <div class="hero-content">
        <p class="uppercase text-sm animate-text">
          Tinha tudo pra ser um cowboy, mas virei
        </p>
        <p class="hero-title mt-2 animate-text text-transparent">
          Diretor de arte
        </p>
        <div>
          <div class="hero-image-wrapper">
            <img data-speed="1.2" src="/images/01.jpg" class="hero-image" />
          </div>
          <div class="hero-image-wrapper">
            <img data-speed="1.4" src="/images/03.jpg" class="hero-image" />
          </div>
          <div class="hero-image-wrapper">
            <img data-speed="1.6" src="/images/02.jpg" class="hero-image" />
          </div>
          <div class="hero-image-wrapper">
            <img data-speed="1.8" src="/images/04.jpg" class="hero-image" />
          </div>
        </div>
      </div>
    </section>

    <!-- Cases List -->
    <section class="relative z-10">
      <div class="cases-list">
        <NuxtLink :to="item.path" v-for="item in cases" :key="item.id">
          <div class="case-item">
            <div class="case-title" v-gsap.whenVisible.entrance.slide-right="1">
              {{ item.title }}
            </div>
            <div class="case-tags">
              <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </section>

    <!-- About me -->
    <section class="bg-black text-white p-24" id="about">
      <div style="max-width: 40rem; margin-left: auto">
        <div class="flex flex-col gap-4">
          <h2 class="text-3xl" v-gsap.whenVisible.entrance.slide-right="1">
            Sobre mim
          </h2>
          <p></p>
          <p class="animate-lines">
            Hello! I'm Maicon, an art director, motion designer. I graduated in
            Graphic Design from Unip (São Paulo) in 2022 and have been working
            in the field since 2020, starting as a freelancer.
          </p>
          <p class="animate-lines">
            My appreciation for design has been with me since early on, and my
            work reflects this passion through pieces with creative and clear
            communication. I'm obssesed with transforming ideas on paper into
            pieces with a lot of personality and creativity.
          </p>
          <p class="animate-lines">
            Do you have a small or large project in mind? Social media posts? Or
            perhaps a logo animation? I create both short animations and
            complete projects, such as artworks and institutional videos.
          </p>
          <p class="animate-lines">
            I've worked with large companies such as Cartoon Network, Magnum,
            TNT Sports, Lillo, Nuk, Cofap, McCain FoodService, among others.
          </p>
        </div>
        <div class="flex gap-4 flex-1 mt-8">
          <div class="flex flex-col gap-4">
            <h2 class="text-3xl" v-gsap.whenVisible.entrance.slide-right="1">
              Educação
            </h2>
            <div class="animate-lines">
              <div>Intensivo de Criatividade</div>
              <span class="opacity-70 text-sm">Brother School</span>
            </div>
            <div class="animate-lines">
              <div>Design Gráfico</div>
              <span class="opacity-70 text-sm">Unip Paulista</span>
            </div>
          </div>
          <div class="flex flex-col gap-4 flex-1">
            <h2
              class="text-3xl"
              v-gsap.whenVisible.entrance.slide-right="1"
              v-gsap.delay="0.2"
            >
              Experiência
            </h2>
            <div class="animate-lines">
              <div>The Queer Spot</div>
              <span class="opacity-70 text-sm">Motion & Graphic Designer</span>
            </div>
            <div class="animate-lines">
              <div>Agência WP/N</div>
              <span class="opacity-70 text-sm">Motion & Graphic Designer</span>
            </div>
            <div class="animate-lines">
              <div>Spicycomm</div>
              <span class="opacity-70 text-sm">Graphic Designer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer>
    <div class="flex justify-around items-center p-8 py-40 border-2">
      <p class="text-3xl font-main">Vamos trabalhar juntos?</p>
      <p class="uppercase">
        <a href="mailto:maicon@maicondouglas.com">maicon@maicondouglas.com</a>
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

const { data: cases } = await useAsyncData("cases", () =>
  queryCollection("cases").all()
);

onMounted(() => {
  gsap.to("header", {
    scrollTrigger: {
      trigger: "#site",
      start: "top top",
      end: "6rem top",
      scrub: 1,
    },
    paddingInline: "9rem",
    ease: "none",
  });

  gsap.to("#hero", {
    scrollTrigger: {
      trigger: "#hero",
      pin: true,
      start: "top top",
      end: "bottom top",
      pinSpacing: false,
    },
  });

  gsap.from(".hero-image", {
    scrollTrigger: {
      trigger: ".hero-image",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    height: 0,
    duration: 0.8,
    ease: "expo.out",
    stagger: 0.2,
  });

  useGSAP().registerPlugin(SplitText);

  let split;

  SplitText.create(".animate-text", {
    type: "words,lines",
    linesClass: "line",
    autoSplit: true,
    mask: "lines",
    onSplit: (self) => {
      split = gsap.fromTo(
        self.words,
        {
          scrollTrigger: {
            trigger: ".animate-text",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          color: "black",
          yPercent: 100,
          opacity: 0,
          duration: 0.6,
        },
        {
          color: "white",
          yPercent: 0,
          opacity: 1,
          stagger: 0.1,
          ease: "expo.out",
        }
      );
      return split;
    },
  });

  let splitLines;

  SplitText.create(".animate-lines", {
    type: "words,lines",
    linesClass: "line",
    autoSplit: true,
    mask: "lines",
    onSplit: (self) => {
      splitLines = gsap.from(self.lines, {
        scrollTrigger: {
          trigger: ".animate-lines",
          start: "top 80%",
          toggleActions: "play none none none", // Changed to not reverse
          once: true, // Added once:true to only play animation once
        },
        yPercent: 100,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "expo.out",
      });
      return splitLines;
    },
  });
});
</script>
