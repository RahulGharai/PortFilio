<script setup lang="ts">
import { ref } from 'vue'

const projects = ref([
  {
    title: 'Bloom Finance App Redesign',
    description:
      'Led the complete UX/UI overhaul and front-end implementation for a personal finance platform, focusing on data visualization clarity and improving user onboarding flow. Resulted in a 32% increase in user retention.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    url: '#',
    tags: ['UX Design', 'UI Design'],
    date: '2024'
  },
  {
    title: 'EcoTrack Sustainability App',
    description:
      'Created a mobile-first application to help users track and reduce their environmental impact. Translated complex sustainability metrics into an accessible and motivating user interface.',
    image:
      'https://images.unsplash.com/photo-1613858749733-3a3e456e3d9e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    url: '#',
    tags: ['UX Research', 'UI Design', 'Mobile App'],
    date: '2023'
  },
  {
    title: 'Internal Developer Hub (Nuxt Team)',
    description:
      'Designed and built key components for an internal documentation and tooling hub for Nuxt developers, focusing on improving developer experience and streamlining access to resources.',
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    url: '#',
    tags: ['Developer Tools', 'UX Design', 'Nuxt', 'Design System', 'Internal Tools'],
    date: '2024'
  },
  {
    title: 'Wavelength Music Streaming Service',
    description:
      'Designed and developed the user interface for an indie music streaming service, focusing on discovery features and creating a unique, engaging listening experience using custom audio visualizations.',
    image:
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    url: '#',
    tags: ['UI Design', 'Front-End Dev', 'Animation'],
    date: '2023'
  }
])

const page = ref({
  title: 'Designing Interfaces, Building Experiences.',
  description:
    "I've worked on a variety of projects, focusing on creating intuitive digital experiences where thoughtful design meets clean code. Here are some highlights I'm proud of, showcasing my process from concept to execution.",
  links: [
    { label: "Let's talk", color: 'neutral' },
    { label: 'Email me' }
  ]
})
</script>

<template>
  <UPage>

    <UPageHero
      :title="page.title"
      :description="page.description"

      :ui="{
        title: '!mx-0 text-left',
        description: '!mx-0 text-left',
        links: 'justify-start'
      }"
    >
      <template #links>
        <div
          v-if="page.links"
          class="flex items-center"
        >
           <!-- <UButton color="neutral">Lets Talk</UButton>
            <UButton>Email Me</UButton> -->
        </div>
      </template>
    </UPageHero>

<!-- <USeparator  label="Projects" size="lg"/> -->


    <UPageSection :ui="{ container: '!pt-0' }">
      <Motion
        v-for="(project, index) in projects"
        :key="project.title"
        :initial="{ opacity: 0, transform: 'translateY(10px)' }"
        :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
        :transition="{ delay: 0.2 * index }"
        :in-view-options="{ once: true }"
      >
        <UPageCard
          :title="project.title"
          :description="project.description"
          :to="project.url"
          orientation="horizontal"
          variant="naked"
          :reverse="index % 2 === 1"
          class="group"
          :ui="{ wrapper: 'max-sm:order-last' }"
        >
          <template #leading>
            <span class="text-sm text-muted">
              {{ new Date(project.date).getFullYear() }}
            </span>
          </template>

          <template #footer>
            <ULink
              :to="project.url"
              class="text-sm text-primary flex items-center"
            >
              View Project
              <UIcon
                name="i-lucide-arrow-right"
                class="size-4 text-primary transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
              />
            </ULink>
          </template>

          <img
            :src="project.image"
            :alt="project.title"
            class="object-cover w-full h-48 rounded-lg"
          />
        </UPageCard>
      </Motion>
    </UPageSection>
  </UPage>
</template>
