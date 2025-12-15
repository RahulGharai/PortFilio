<script setup lang="ts">
import { ref } from 'vue'

const page = ref({
  title: 'About Rahul Kumar Gharai',
  description: 'Full Stack Developer specializing in Vue/Nuxt, Node.js, Firebase, and cloud deployments. Passionate about building modern, scalable web applications from design to deployment.',
  content: `
Hi, I'm **Rahul Kumar Gharai** — a Full Stack Developer passionate about building modern, scalable, and user-friendly web applications. I specialize in Vue/Nuxt, Node.js, Firebase, SQL Server, and cloud-based deployments. I enjoy taking full ownership of a project — from designing UI to building backend APIs, optimizing performance, and deploying applications securely.

Over the years, I've worked on multiple real-world applications including dashboards, automation tools, authentication systems, financial tools, and utility apps. I love solving complex problems, learning new technologies, and creating meaningful digital experiences.

### My Journey

**Current Role at Origent Technology (June 2023 – Present)**
I'm currently working at Origent Technology, a product-based company providing solutions for child care and community education.

**Products I work on:**
- **Child Care Platform:** [ezchildtrack.com](https://ezchildtrack.com/)
- **Community Education:** [ezcomed.com](https://www.ezcomed.com/)

**Key responsibilities include:**
- Building and maintaining Vue.js applications
- Developing backend APIs using ASP.NET Core MVC
- Working with SQL Server databases
- Maintaining legacy applications in VB.NET
- Deploying applications using IIS on Windows Server
- Version control using TortoiseSVN

I contribute to building large-scale, production-ready systems used by real customers daily, handling everything from frontend development to backend API design and database optimization.

**Previous Experience at Mimansa Tech**
At Mimansa Tech, I started my journey in full-stack development. I worked with Angular to create a complete blog website and built backend APIs using Node.js.

**Key responsibilities included:**
- Building Angular-based blog modules
- Writing backend APIs in Node.js
- Deploying backend using Firebase Cloud Functions
- Implementing Firebase Authentication (Email/Password, Google Login)
- Managing code via GitLab

This role laid the foundation of my full-stack development career, giving me hands-on experience with modern web development technologies and deployment pipelines.

### My Development Philosophy

My approach to development is centered around **clean architecture**, **performance optimization**. I believe in writing maintainable code that not only works today but remains scalable for future requirements. Whether I'm working on the frontend with Vue.js or building robust APIs with Node.js/ASP.NET, I focus on creating solutions that are efficient, secure, and provide excellent user experiences.

### Portfolio Highlights

I've built several projects that showcase my skills across different domains:

**Authentication Systems**
- Built secure multi-factor authentication systems with Firebase supporting email login, verification links, social logins (Google/GitHub/Twitter), and comprehensive login history tracking

**Productivity Tools**
- Developed **MyDesk**: A personalized dashboard with live weather integration, secure bookmark/credential management, and rich-text notepad with PDF export capabilities

**Security Applications**
- Created **Encryptor App**: An enterprise-grade encryption platform using AES-256 with user-controlled keys for secure text and file protection

**Financial Management**
- Built **Expense Tracker**: A financial management app with Google Login, expense categorization, spending charts, and monthly/yearly summaries

**Real-time Communication**
- Developed **Connect Me**: A real-time messaging application with email/password authentication, push notifications, and live presence tracking

**Admin Dashboards**
- Created comprehensive admin panels with stock market data integration, real-time chat systems, social galleries, and user management features

### Technical Stack

**Frontend:** Vue.js, Nuxt.js, Angular, HTML5, CSS3, JavaScript/TypeScript
**Backend:** Node.js, ASP.NET Core MVC, Firebase Cloud Functions
**Databases:** SQL Server, Firebase Firestore
**Cloud & DevOps:** Firebase Hosting, Google Cloud, IIS, Windows Server
**Authentication:** Firebase Auth, JWT, OAuth 2.0
**Tools:** Git, GitLab, TortoiseSVN, VS Code, Visual Studio


`,
  images: [
    {
      src: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3',
      alt: 'Coding workspace setup'
    },
    {
      src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3',
      alt: 'Development and problem solving'
    },
    {
      src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3',
      alt: 'Team collaboration and project planning'
    }
  ]
})
</script>

<template>
  <UPage v-if="page">
    <!-- Hero Section -->
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
    </UPageHero>

    <UPageSection :ui="{ container: '!pt-0' }">
      <!-- Content Section -->
      <div class="prose prose-lg dark:prose-invert max-w-none">
        <MDC :value="page.content" unwrap="p" />
      </div>

      <!-- Images Section -->
      <!-- <div class="flex flex-row justify-center items-center py-10 gap-8 md:gap-12 flex-wrap">
        <div
          v-for="(image, index) in page.images"
          :key="index"
          class="relative group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
          :class="[
            index === 0 ? 'w-full md:w-2/3' : 'w-full md:w-1/3',
            index === 1 ? 'md:-mt-8' : '',
            index === 2 ? 'md:-mb-8' : ''
          ]"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <p class="text-white text-sm font-medium">{{ image.alt }}</p>
          </div>
        </div>
      </div> -->

      <!-- Skills & Technologies Section -->
      <div class="mt-16 pt-10 border-t border-gray-200 dark:border-gray-800">
        <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Skills & Technologies</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Frontend Skills -->
          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200">Frontend Development</h3>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Vue.js</span>
              <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Nuxt.js</span>
              <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">TypeScript</span>
              <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">HTML5/CSS3</span>
              <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Angular</span>
            </div>
          </div>

          <!-- Backend Skills -->
          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200">Backend & Databases</h3>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">ASP.NET Core</span>
              <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">SQL Server</span>
              <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Firebase</span>
              <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Node.js</span>
            </div>
          </div>

          <!-- DevOps & Tools -->
          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200">DevOps & Tools</h3>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">IIS</span>
              <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">TortoiseSVN</span>
              <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">Git/GitLab</span>
              <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">Firebase Hosting</span>
              <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">VS Code</span>
            </div>
          </div>

          <!-- Services -->
          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200">Services</h3>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-full text-sm">Full Stack Development</span>
              <span class="px-3 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-full text-sm">API Development</span>
              <span class="px-3 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-full text-sm">Database Design</span>
              <span class="px-3 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-full text-sm">Cloud Deployment</span>
            </div>
          </div>
        </div>
      </div>
    </UPageSection>
  </UPage>
</template>

<style scoped>
.prose {
  color: inherit;
}

.prose h2 {
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-weight: 700;
  font-size: 1.875rem;
  line-height: 2.25rem;
}

.prose h3 {
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2rem;
}

.prose p {
  margin-top: 1rem;
  margin-bottom: 1rem;
  line-height: 1.75;
}

.prose a {
  color: #3b82f6;
  text-decoration: none;
}

.prose a:hover {
  text-decoration: underline;
}

.prose ul {
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.prose li {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}
</style>