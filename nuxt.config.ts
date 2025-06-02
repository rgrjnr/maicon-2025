// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  app: {
    head: {
      title: "Maicon Douglas",
      meta: [{ name: "description", content: "Maicon Douglas" }],
    },
  },
  site: {
    url: "https://maicondouglas.com",
    name: "Maicon Douglas",
    description:
      "Nasci em 1996 e cresci numa fazenda no interior do Mato Grosso do Sul, onde o quintal era visitado por antas, javalis e até onça. A diversão era andar de carroça com meu avô ou mergulhar em rios e lagoas sempre que podia. Foi assistindo à MTV, ainda na roça, que me apaixonei pela estética das coisas. Achei que seria estilista, e com 22 anos me mudei para São Paulo com esse sonho. Mas os preços dos cursos e dos aluguéis me levaram por outros caminhos. Trabalhei com moda, numa boutique, e até preparava figurino para apresentadoras de telejornal. Foi criando posts para essa boutique que descobri o design gráfico — e percebi que ali era o meu lugar. Formado pela UNIP, mergulhei no universo visual e encontrei no motion design uma nova paixão. Já trabalhei com marcas e projetos bem variados — de produtos para bebê até amortecedores com um cachorro salsicha como garoto-propaganda. Hoje moro em Lisboa, sou pai do Dinoco e da Mel, e depois de quase 3 anos fazendo alguns freelas e sendo braço direito do meu marido em sua aplicação, quero voltar ao mercado como diretor de arte e estou pronto para novos desafios.",
    language: "pt-BR",
    icon: "/favicon.ico",
    defaultLocale: "pt-BR",
    locales: [{ code: "pt-BR", name: "Português" }],
  },
  css: ["~/assets/scss/stylesheet.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {},
      },
    },
  },
  googleFonts: {
    families: {
      "Azeret Mono": [300, 600],
    },
  },
  modules: [
    "@nuxtjs/sitemap",
    "@nuxt/content",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/i18n",
    "@nuxtjs/seo",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "v-gsap-nuxt",
  ],

  i18n: {
    locales: [
      { code: "pt", language: "pt-BR" },
      { code: "en", language: "en-US" },
    ],
    defaultLocale: "pt",
  },
});
