<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Home',
  icon: 'i-simple-icons-figma',
  to: '/home'
}, {
  label: 'Project',
  icon: 'i-lucide-rocket',
    to: '/project'
}, {
  label: 'Blog',
  icon: 'i-lucide-rocket',
  to: '/blog'
}, {
  label: 'About',
  icon: 'i-lucide-rocket',
  to: '/about'
}])
</script>

<template>
  <UHeader toggle-side="left">
    <template #title>
      <Logo class="h-6 w-auto" />
    </template>

    <UNavigationMenu :items="items" variant="link"
      color="neutral"
      class="bg-muted/80 backdrop-blur-sm rounded-full px-2 sm:px-4 border border-muted/50 shadow-lg shadow-neutral-950/5"/>

    <template #right>
      <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>

</template>

