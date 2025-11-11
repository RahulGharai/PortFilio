<script setup lang="ts">
import { ref } from 'vue'

// Example global info — replace these with your actual assets or composable
// const global = {
//   picture: {
//     light:
//       'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80',
//     dark:
//       'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80',
//     alt: 'Emma Thompson portrait'
//   }
// }

// Page content (converted from YAML)
const page = ref({
  title: 'About Me',
  description:
    'Learn more about my journey as a Boston-based UX/UI Designer & Front-End Developer, my design philosophy, and my passion for crafting intuitive digital experiences.',
  content: `
Hi, I'm **Emma Thompson**, a UX/UI Designer and Front-End Developer based right here in Boston. For the past six years, I've been immersed in the world of digital product creation, focusing on building experiences that are not just functional, but genuinely intuitive and engaging for users.

My path started at **Boston University**, where I earned a degree in Interactive Design. It was there I discovered my dual passion for the visual language of design and the logical puzzle of code. Since then, I've honed my skills in both areas, believing that the best digital products are born from a deep understanding of both aesthetics and implementation.

### My Design Philosophy

My design philosophy is rooted in **empathy** and **problem-solving**. I believe great design starts with understanding the 'why' – the user's needs, motivations, and pain points. I use research, iterative prototyping (often with tools like Figma), and user testing to ensure the solutions I build are truly effective.

I strive to create interfaces that feel effortless, where functionality and beauty work hand-in-hand. Whether I'm crafting pixel-perfect UIs or writing clean Vue.js/Nuxt.js code, my focus is always on creating value for the end-user.

### What Drives Me

What keeps me excited about this work is the constant learning and the challenge of translating complex ideas into simple, elegant solutions. There's nothing more rewarding than seeing a design come to life and knowing it's making someone's digital interaction easier or more enjoyable.

### Beyond the Screen

When I'm not designing or coding, you might find me exploring Boston's latest coffee shops, hiking nearby trails, or occasionally contributing to open-source projects.

Thanks for stopping by. Feel free to browse my [projects](/projects) or [get in touch](/#contact) if you'd like to collaborate!
`,
  images: [
    {
      src: 'https://images.unsplash.com/photo-1744877478622-a78c7a3336f6?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3',
      alt: 'My coffee workspace'
    },
    {
      src: 'https://images.unsplash.com/photo-1744429523595-2c06b8611242?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3',
      alt: 'My trip to Tokyo'
    }
  ]
})
</script>

<template>
  <UPage v-if="page">
    <!-- ✅ Hero Section -->
    <UPageHero
      :title="page.title"
      :description="page.description"
      orientation="horizontal"
      :ui="{
        container: 'lg:flex sm:flex-row items-center',
        title: '!mx-0 text-left',
        description: '!mx-0 text-left',
        links: 'justify-start'
      }"
    >
      <!-- <UColorModeAvatar
        class="sm:rotate-4 size-36 rounded-lg ring ring-default ring-offset-3 ring-offset-(--ui-bg)"
        :light="global.picture.light"
        :dark="global.picture.dark"
        :alt="global.picture.alt"
      /> -->
    </UPageHero>

    <!-- ✅ Content Section -->
    <UPageSection :ui="{ container: '!pt-0' }">
      <MDC :value="page.content" unwrap="p" />

      <!-- ✅ Polaroid Images Section -->
      <div
        class="flex flex-row justify-center items-center py-10 gap-[-2rem] flex-wrap md:gap-8"
      >
        <PolaroidItem
          v-for="(image, index) in page.images"
          :key="index"
          :image="image"
          :index="index"
        />
      </div>
    </UPageSection>
  </UPage>
</template>
