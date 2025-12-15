<script setup lang="ts">
import { ref } from "vue";
import { collection, getDocs } from "firebase/firestore";

const { $firestore } = useNuxtApp();

// Firestore collection result
const showData = ref<any>([]);

// Final visible projects (after filtering from Firestore)
const visibleProjects = ref<any>([]);

// Step 1: Firestore fetch
onMounted(async () => {
  try {
    const colRef = collection($firestore, "showdata");
    const snap = await getDocs(colRef);

    showData.value = snap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log("Firestore showdata:", showData.value);

    generateVisibleProjects();
  } catch (error) {
    console.error("Error fetching showdata:", error);
  }
});

// Step 2: ALL PROJECTS
const allProjects = [
  {
    key: "AdminDashboard",
    title: "Admin Dashboard (Not complete yet)",
    description:
      "A feature-rich admin dashboard for managing user data, viewing stock info, sending emails, and enabling chat between logged-in users. It includes an image gallery with likes and comments, Firebase authentication, and Firestore-based data handling.",
    image: Object.values(
      import.meta.glob("~/assets/images/admindashboard/dashboard.png", {
        eager: true,
        import: "default",
      })
    ),
    url: "/projectdetails?app=admindashboard",
    date: "2026",
  },
  {
    key: "Authenticator",
    title: "Authenticator",
    description:
      "A multi-authentication app supporting email login, verification links, social logins, and secure password resets. It tracks user login activity including IP, location, and device details, offering a complete authentication and security experience.",
       image: Object.values(
      import.meta.glob("~/assets/images/authenticator/dashboard.png", {
        eager: true,
        import: "default",
      })
    ),
    url: "/projectdetails?app=authenticator",
    date: "2025",
  },
  {
    key: "CommectMe",
    title: "Connect Me",
    description:
      "A real-time communication app where users can chat after secure email login and verification. It supports profile updates, message syncing through Firestore, and push notifications, enabling fast and interactive conversations between authenticated users.",
       image: Object.values(
      import.meta.glob("~/assets/images/connectme/dashboard.png", {
        eager: true,
        import: "default",
      })
    ),
    url: "/projectdetails?app=connectme",
    date: "2025",
  },
  {
    key: "Encryptor",
    title: "Encryptor",
    description:
      "Encryptor is a Nuxt 2 and Vue 2 app using Firebase where users securely save data with AES-256 encryption. Data is encrypted locally using a user-defined key and stored safely in Firestore. It includes email/password login, email verification, password reset, and encrypted notes support.",
    image: Object.values(
      import.meta.glob("~/assets/images/encryptor/dashboard.png", {
        eager: true,
        import: "default",
      })
    ),
    url: "/projectdetails?app=encryptor",
    date: "2024",
  },

  {
    key: "ExpenseTracker",
    title: "Expense Tracker",
    description:
      "Expense Tracker is a Nuxt 2 and Vue 2 app using Firebase where users track daily, monthly, and yearly expenses. Google login provides quick access, while Firestore stores all expense records. Users can add categories, view summaries, update entries, and monitor spending with simple, clear financial insights.",
    image: Object.values(
      import.meta.glob("~/assets/images/moneyfy/list.png", {
        eager: true,
        import: "default",
      })
    ),
    url: "/projectdetails?app=expensetracker",
    date: "2023",
  },

  {
    key: "MyDesk",
    title: "My Desk",
    description:
      "MyDesk is a Vue 2 app using Firebase that provides a personal dashboard with real-time weather, location details, news, bookmarks, credentials, and a rich-text notepad. Users log in via email and password, manage secure data, edit notes, and download them, making daily tasks easier and organized.",
    image: Object.values(
      import.meta.glob("~/assets/images/mydesk/account.png", {
        eager: true,
        import: "default",
      })
    ),
    url: "/projectdetails?app=mydesk",
    date: "2023",
  },
];

// Step 3 — FILTER PROJECTS BASED ON FIRESTORE VALUES
function generateVisibleProjects() {
  if (!showData.value.length) return;

  const flags = showData.value[0]; // Example:
  // { Encryptor: true, ExpenseTracker: true, MyDesk: true, ... }

  visibleProjects.value = allProjects.filter((p) => flags[p.key] === true);

  console.log("Visible Projects:", visibleProjects.value);
}

// Page static content
const page = ref({
  title: "Designing Interfaces, Building Webapplication.",
  description:
    // "I've worked on a variety of projects, focusing on creating intuitive digital experiences where thoughtful design meets clean code. Here are some highlights I'm proud of, showcasing my process from concept to execution.",
    "I've worked on as Full Stack Developer passionate about building modern, scalable, and user-friendly web applications",
  links: [{ label: "Let's talk", color: "neutral" }, { label: "Email me" }],
});
</script>

<template>
  <UPage>
    <UPageHero
      :title="page.title"
      :description="page.description"
      :ui="{
        title: '!mx-0 text-left',
        description: '!mx-0 text-left',
        links: 'justify-start',
      }"
    />

    <!-- PROJECT LIST BASED ON FIRESTORE -->
    <UPageSection :ui="{ container: '!pt-0' }">
      <Motion
        v-for="(project, index) in visibleProjects"
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
