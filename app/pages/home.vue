<template>
  <UContainer class="mt-3">
    <div class="flex items-center justify-center">
      <UAvatar src="https://github.com/benjamincanac.png" size="3xl" />
    </div>
    <div class="flex items-center justify-center text-4xl">
      <div>Hey, I'm Emma Thompson</div>
      <br />
    </div>
    <div class="flex items-center justify-center text-4xl">
      <div>UX/UI Designer</div>
    </div>
    <div class="flex items-center justify-center p-5">
      I craft intuitive digital experiences where design meets functionality.
      Based in Boston, bringing ideas to life through code and creativity.
    </div>

    <UCarousel
      v-slot="{ item }"
      loop
      arrows
      auto-scroll
      :items="items"
      :ui="{ item: 'basis-1/3' }"
    >
      <img :src="item" width="234" height="234" class="rounded-lg" />
    </UCarousel>
    <!-- 
     <UPageFeature
    title="Theme"
    description="Customize Nuxt UI with your own colors, fonts, and more."
  /> -->

    <div class="mt-4">
      <div
        class="flex items-center justify-center text-xl text-highlighted font-bold p-5"
      >
        About Me
      </div>
      <UPageFeature
        description="As a UX/UI designer and front-end developer with 6 years of experience, I leverage my Boston University Interactive Design degree to craft user-centered digital experiences. My approach blends creative strategy with technical expertise, transforming concepts into functional, purposeful digital products that seamlessly integrate design and technology."
      />

      <div
        class="flex items-center justify-center text-xl text-highlighted font-bold p-5"
      >
        Work Experience
      </div>

      <UTimeline :items="workExp" :default-value="2" class="w-96">
        <template #development-title="{ item }">
          <div class="flex items-center gap-1">
            <span>{{ item.title }}</span>

            <UAvatarGroup size="2xs"> </UAvatarGroup>
          </div>
          <UAvatar
          
            v-for="(developer, index) of item.developers"
            :key="index"
            v-bind="developer"
          />
        </template>
      </UTimeline>
    </div>

    <!-- <UPageFeature
    title="Theme"
    description="Customize Nuxt UI with your own colors, fonts, and more."
  />
    <div class="flex items-center justify-center text-xl text-highlighted font-bold p-5">
      Work Experience
    </div> -->

    <!-- <UPricingPlans orientation="vertical" :plans="plans" /> -->
  </UContainer>
</template>

<script setup lang="ts">
import type { TimelineItem } from "@nuxt/ui";

const items = [
  "https://picsum.photos/468/468?random=1",
  "https://picsum.photos/468/468?random=2",
  "https://picsum.photos/468/468?random=3",
  "https://picsum.photos/468/468?random=4",
  "https://picsum.photos/468/468?random=5",
  "https://picsum.photos/468/468?random=6",
];

const plans = ref([
  {
    title: "Solo",
    description: "Tailored for indie hackers.",
    price: "$249",
    features: ["One developer", "Lifetime access"],
    button: {
      label: "Buy now",
    },
  },
]);

const workExp = [
  {
    date: "Mar 15, 2023 - Apr 10, 2025",
    title: "1111111",

    description:
      "Kicked off the project with team alignment. Set up project milestones and allocated resources.",
    // icon: 'https://img.icons8.com/color/48/building.png',
    avatar: {
      src: "https://github.com/J-Michalek.png",
    },
    value: "development",
    slot: "development" as const,
    developers: [
      {
        src: "https://img.icons8.com/color/48/angularjs.png",
      },
      {
        src: "https://img.icons8.com/fluency/48/node-js.png",
      },
    ],
  },
  {
    date: "Mar 22, 2025",
    title: "22222222",
    description:
      "User research and design workshops. Created wireframes and prototypes for user testing.",
    icon: "i-lucide-palette",
    value: "development",
    slot: "development" as const,
    developers: [
      {
        src: "https://github.com/J-Michalek.png",
      },
      {
        src: "https://github.com/benjamincanac.png",
      },
    ],
  },
] satisfies TimelineItem[];
</script>
