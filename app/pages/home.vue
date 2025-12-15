<template>
  <UContainer class="mt-3">
    <div class="flex items-center justify-center">
      <!-- <UAvatar src='profileImage' size="3xl" /> -->
    </div>
    <div class="flex items-center justify-center text-4xl">
      <div>Hey, I'm Rahul Kumar Gharai</div>
      <br />
    </div>
    <div class="flex items-center justify-center text-4xl">
      <div>Full Stack Developer</div>
    </div>
    <!-- <div class="flex items-center justify-center p-5">
      I craft intuitive digital experiences where design meets functionality.
      Based in Boston, bringing ideas to life through code and creativity.
    </div> -->

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
      <UPageFeature>
        <div><b>Who I Am & What I Do</b></div>
        Hi, I’m Rahul — a Full Stack Developer passionate about building modern,
        scalable, and user-friendly web applications. I specialize in Vue/Nuxt,
        Node.js, Firebase, SQL Server, and cloud-based deployments. I enjoy
        taking full ownership of a project — from designing UI to building
        backend APIs, optimizing performance, and deploying applications
        securely. Over the years, I’ve worked on multiple real-world
        applications including dashboards, automation tools, authentication
        systems, financial tools, and utility apps. I love solving complex
        problems, learning new technologies, and creating meaningful digital
        experiences.</UPageFeature
      >
      <UPageFeature>
        <div>
          <b>
            <a href="https://mimansatech.com/" target="_blank">
              Mimansa Tech (Dec 21, 2021 – Feb 23, 2023)
            </a>
          </b>
        </div>

        At Mimansa Tech, I started my journey in full-stack development.<br />
        I worked with Angular to create a complete blog website and built
        backend APIs using Node.js.<br /><br />

        <b>Key responsibilities included:</b><br />
        • Building Angular-based blog modules<br />
        • Writing backend APIs in Node.js<br />
        • Deploying backend using Firebase Cloud Functions<br />
        • Implementing Firebase Authentication (Email/Password, Google Login)<br />
        • Managing code via GitLab<br />
        This role laid the foundation of my full-stack development career.
      </UPageFeature>
      <br /><br />
      <UPageFeature>
        <div>
          <b>
            <a href="https://origent.in/" target="_blank">
              Origent Technology (June 1, 2023 – Present)
            </a>
          </b>
        </div>

        Currently working at Origent Technology, a product-based company
        providing solutions for child care and community education.<br />

        <b>Products:</b><br />
        • Child Care Platform:
        <a href="https://ezchildtrack.com/" target="_blank"
          >https://ezchildtrack.com/</a
        ><br />
        • Community Education:
        <a href="https://www.ezcomed.com/" target="_blank"
          >https://www.ezcomed.com/</a
        ><br />

        <b>Here I work primarily on:</b><br />
        • Vue.js Applications<br />
        • Backend APIs built using ASP.NET Core MVC<br />
        • Databases in SQL Server<br />
        • Legacy application maintenance in VB.NET<br />
        • Deployments using IIS on Windows Server<br />
        • Version control using TortoiseSVN<br /><br />

        I contribute to building large-scale, production-ready systems used by
        real customers daily.
      </UPageFeature>

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
          <UTooltip
            v-for="(developer, index) of item.developers"
            :key="index"
            :text="developer.tooltip || 'No tooltip'"
            :popper="{ placement: 'top' }"
          >
            <UAvatar class="m-1" :key="index" v-bind="developer" />
          </UTooltip>
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
import { TemplateGenerativeModel } from "firebase/ai";

// const items = [
//   "https://picsum.photos/468/468?random=1",
//   "https://picsum.photos/468/468?random=2",
//   "https://picsum.photos/468/468?random=3",
//   "https://picsum.photos/468/468?random=4",
//   "https://picsum.photos/468/468?random=5",
//   "https://picsum.photos/468/468?random=6",
// ];

const items = Object.values(
  import.meta.glob("~/assets/images/common/*", {
    eager: true,
    import: "default",
  })
);
const progileImages = Object.values(
  import.meta.glob("~/assets/images/profile/rahul.jpg", {
    eager: true,
    import: "default",
  })
);
const profileImage = progileImages[0];

const workExp = [
  {
    date: "Dec 21, 2021 - Feb 23, 2023",
    title: "Mimansa Tech",

    // description:
    //   "Kicked off the project with team alignment. Set up project milestones and allocated resources.",
    // // icon: mtlogo,
    avatar: {
      src: "https://github.com/RahulGharai/Image/blob/main/logo/mtlogo.png?raw=true",
    },

    value: "development",
    slot: "development" as const,
    developers: [
      {
        src: "https://img.icons8.com/color/48/angularjs.png",
        tooltip: "Angular",
      },
      {
        src: "https://img.icons8.com/color/48/nodejs.png",
        tooltip: "Node Js",
      },
      {
        src: "https://img.icons8.com/color/48/gitlab.png",
        tooltip: "GitLab",
      },
      {
        src: "https://img.icons8.com/color/48/firebase.png",
        tooltip: "Firebase",
      },
      {
        src: "https://img.icons8.com/color/48/typescript.png",
        tooltip: "Typescript",
      },
      {
        src: "https://img.icons8.com/color/48/javascript--v1.png",
        tooltip: "Javascript",
      },
    ],
  },
  {
    date: "June 1, 2023 - Present",
    title: "Origent Technologies",
    // description:
    //   "User research and design workshops. Created wireframes and prototypes for user testing.",

    avatar: {
      src: "https://github.com/RahulGharai/Image/blob/main/logo/origentlogo.png?raw=true",
    },

    value: "development",
    slot: "development" as const,
    developers: [
      {
        src: "https://img.icons8.com/color/48/vue-js.png",
        tooltip: "Vue Js",
      },
      {
        src: "https://img.icons8.com/color/48/nuxt-jc.png",
        tooltip: "Nuxt Js",
      },
      {
        src: "https://img.icons8.com/arcade/64/sql.png",
        tooltip: "SQL Server",
      },
      {
        src: "https://github.com/RahulGharai/Image/blob/main/logo/SVN.png?raw=true",
        tooltip: "TortoiseSVN",
      },
      {
        src: "https://github.com/RahulGharai/Image/blob/main/logo/vbnet.png?raw=true",
        tooltip: "VB.net",
      },
      {
        src: "https://github.com/RahulGharai/Image/blob/main/logo/coremvc.png?raw=true",
        tooltip: "Core MVC",
      },
    ],
  },
] satisfies TimelineItem[];
</script>
