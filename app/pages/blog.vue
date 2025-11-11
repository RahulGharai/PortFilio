<script setup lang="ts">
import { ref } from 'vue'

// Blog posts data (converted from your YAML)
const posts = ref([
  {
    title: 'From Mockup to Market: My End-to-End Product Design Process',
    description:
      'A detailed breakdown of my iterative design methodology, from initial research to final handoff, with practical tips for designers at every stage.',
    date: '2025-04-23',
    image:
      'https://images.pexels.com/photos/1050312/pexels-photo-1050312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    minRead: 8,
    author: {
      name: 'Emma Thompson',
      avatar: {
        src: 'https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3',
        alt: 'Emma Thompson'
      }
    },
    path: '#'
  },
  {
    title: 'How I Built My Design System from Scratch',
    description:
      'A practical guide to creating your own design system, from initial audit to implementation, and the lessons learned along the way.',
    date: '2025-03-05',
    image:
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    minRead: 6,
    author: {
      name: 'Emma Thompson',
      avatar: {
        src: 'https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3',
        alt: 'Emma Thompson'
      }
    },
    path: '#'
  },
  {
    title: 'The Psychology of Color in UI Design',
    description:
      'Exploring how strategic color choices can influence user behavior, evoke emotions, and enhance the overall user experience of digital products.',
    date: '2025-03-15',
    image:
      'https://images.pexels.com/photos/40799/paper-colorful-color-loose-40799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    minRead: 5,
    author: {
      name: 'Emma Thompson',
      avatar: {
        src: 'https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3',
        alt: 'Emma Thompson'
      }
    },
    path: '#'
  },
  {
    title: 'The Case for Slow Design in a Fast-Paced Digital World',
    description:
      'Why designing digital experiences that encourage users to slow down and engage deeply can lead to more meaningful interactions and better outcomes.',
    date: '2025-01-28',
    image:
      'https://images.pexels.com/photos/4050314/pexels-photo-4050314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    minRead: 7,
    author: {
      name: 'Emma Thompson',
      avatar: {
        src: 'https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3',
        alt: 'Emma Thompson'
      }
    },
    path: '#'
  }
])
</script>

<template>
  <UPage>
    <UPageSection :ui="{ container: '!pt-0' }">
      <UBlogPosts orientation="vertical">
        <Motion
          v-for="(post, index) in posts"
          :key="post.title"
          :initial="{ opacity: 0, transform: 'translateY(10px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.2 * index }"
          :in-view-options="{ once: true }"
        >
          <UBlogPost
            variant="naked"
            orientation="horizontal"
            :to="post.path"
            v-bind="post"
            :ui="{
              root: 'md:grid md:grid-cols-2 group overflow-visible transition-all duration-300',
              image:
                'group-hover/blog-post:scale-105 rounded-lg shadow-lg border-4 border-muted ring-2 ring-default',
              header:
                index % 2 === 0
                  ? 'sm:-rotate-1 overflow-visible'
                  : 'sm:rotate-1 overflow-visible'
            }"
          />
        </Motion>
      </UBlogPosts>
    </UPageSection>
  </UPage>
</template>
