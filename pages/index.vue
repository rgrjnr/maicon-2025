<template>
  <main>
    <section id="hero" class="bg-black flex items-center justify-center">
      <div class="hero-content">
        <p class="uppercase text-sm animate-text">
          Tinha tudo pra ser um cowboy, mas&nbsp;virei
        </p>
        <p class="hero-title mt-2 animate-text text-transparent">
          Diretor de arte
        </p>
        <div>
          <div class="hero-image-wrapper">
            <img data-speed="1.2" src="/images/01.png" class="hero-image" />
          </div>
          <div class="hero-image-wrapper">
            <img data-speed="1.4" src="/images/03.png" class="hero-image" />
          </div>
          <div class="hero-image-wrapper">
            <img data-speed="1.6" src="/images/02.png" class="hero-image" />
          </div>
          <div class="hero-image-wrapper">
            <img data-speed="1.8" src="/images/04.png" class="hero-image" />
          </div>
        </div>
      </div>
    </section>

    <!-- Cases List -->
    <section class="relative z-10" id="cases">
      <div class="cases-list">
        <NuxtLink :to="item.path" v-for="item in cases" :key="item.id">
          <div class="case-item">
            <div class="case-title" v-gsap.whenVisible.entrance.slide-right="1">
              {{ item.title }}
              <div class="text-sm">{{ item.subtitle }}</div>
            </div>
            <div class="case-tags">
              {{ item.function }}
            </div>
          </div>
        </NuxtLink>
      </div>
    </section>

    <!-- About me -->
    <section
      class="bg-black text-white p-24 z-10 relative flex flex-col md:flex-row gap-24"
      id="about"
    >
      <div class="">
        <img src="/images/05.png" style="max-width: 16rem; width: 100%" />
      </div>
      <div style="max-width: 40rem; margin: auto; flex: 1">
        <div class="flex flex-col gap-4">
          <h2 class="text-3xl" v-gsap.whenVisible.entrance.slide-right="1">
            Sobre mim
          </h2>
          <p class="animate-lines">
            Nasci em 1996 e cresci numa fazenda no interior do Mato Grosso do
            Sul, onde o quintal era visitado por antas, javalis e até onça. A
            diversão era andar de carroça com meu avô ou mergulhar em rios e
            lagoas sempre que podia. Foi assistindo à MTV, ainda na roça, que me
            apaixonei pela estética das coisas. Achei que seria estilista, e com
            22 anos me mudei para São Paulo com esse sonho. Mas os preços dos
            cursos e dos aluguéis me levaram por outros caminhos. Trabalhei com
            moda, numa boutique, e até preparava figurino para apresentadoras de
            telejornal. Foi criando posts para essa boutique que descobri o
            design gráfico — e percebi que ali era o meu lugar.
          </p>
          <p class="animate-lines">
            Formado pela UNIP, mergulhei no universo visual e encontrei no
            motion design uma nova paixão. Já trabalhei com marcas e projetos
            bem variados — de produtos para bebê até amortecedores com um
            cachorro salsicha como garoto-propaganda.
          </p>
          <p class="animate-lines">
            Hoje moro em Lisboa, sou pai do Dinoco e da Mel, e depois de quase 3
            anos fazendo alguns freelas e sendo braço direito do meu marido em
            sua aplicação, quero voltar ao mercado como diretor de arte e estou
            pronto para novos desafios.
          </p>
        </div>
        <div class="flex flex-col sm:flex-row gap-4 flex-1 mt-8">
          <div class="flex flex-col gap-4 flex-1">
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
    <div
      class="flex flex-col sm:flex-row justify-around items-center p-8 py-40 border-2 gap-4"
    >
      <p class="text-3xl font-main text-center">Vamos trabalhar juntos?</p>
      <p class="uppercase">
        <a href="mailto:maicon@maicondouglas.com">maicon@maicondouglas.com</a>
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

useHead({ title: "Diretor de Arte" });

const { data: cases } = await useAsyncData("cases", () =>
  queryCollection("cases").all()
);

onMounted(() => {
  document.body.style.setProperty("--color", "black");
  document.body.style.setProperty("--background-color", "white");

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
