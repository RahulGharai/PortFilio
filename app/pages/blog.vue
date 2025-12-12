<script setup lang="ts">
import { ref } from 'vue'

// Convert projects to blog posts format
const posts = ref([
  {
    title: 'Building a Secure Authentication System with Firebase',
    description: 'Learn how I built a multi-authentication app supporting email login, verification links, social logins, and secure password resets with comprehensive user activity tracking.',
    date: '2025-04-23',
    image: '',
    minRead: 8,
    author: {
      name: 'Your Name',
      avatar: {
        src: 'https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3',
        alt: 'Your Name'
      }
    },
    path: '/projectdetails?app=authenticator',
    projectKey: 'Authenticator'
  },
  {
    title: 'Creating Real-time Chat Applications with Firestore',
    description: 'Discover how to build interactive chat applications with real-time messaging, profile management, and push notifications using Firebase Firestore for seamless user communication.',
    date: '2025-03-15',
    image: '',
    minRead: 6,
    author: {
      name: 'Your Name',
      avatar: {
        src: 'https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3',
        alt: 'Your Name'
      }
    },
    path: '/projectdetails?app=connectme',
    projectKey: 'CommectMe'
  },
  {
    title: 'Implementing AES-256 Encryption in Web Applications',
    description: 'A deep dive into building secure data storage with client-side AES-256 encryption, Firebase integration, and encrypted notes management for maximum data protection.',
    date: '2024-12-10',
    image: Object.values(
      import.meta.glob("~/assets/images/encryptor/dashboard.png", {
        eager: true,
        import: "default",
      })
    )[0],
    minRead: 7,
    author: {
      name: 'Your Name',
      avatar: {
        src: 'https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3',
        alt: 'Your Name'
      }
    },
    path: '/projectdetails?app=encryptor',
    projectKey: 'Encryptor'
  },
  {
    title: 'Developing Comprehensive Expense Tracking Solutions',
    description: 'How I created a financial management app with Google authentication, Firestore data storage, and comprehensive expense analytics for better financial insights.',
    date: '2023-11-20',
    image: Object.values(
      import.meta.glob("~/assets/images/moneyfy/list.png", {
        eager: true,
        import: "default",
      })
    )[0],
    minRead: 5,
    author: {
      name: 'Your Name',
      avatar: {
        src: 'https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3',
        alt: 'Your Name'
      }
    },
    path: '/projectdetails?app=expensetracker',
    projectKey: 'ExpenseTracker'
  },
  {
    title: 'Building Personal Dashboard Applications with Vue and Firebase',
    description: 'Creating a feature-rich personal dashboard with real-time weather, news integration, secure credential management, and rich-text note-taking capabilities.',
    date: '2023-09-15',
    image: Object.values(
      import.meta.glob("~/assets/images/mydesk/account.png", {
        eager: true,
        import: "default",
      })
    )[0],
    minRead: 6,
    author: {
      name: 'Your Name',
      avatar: {
        src: 'https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3',
        alt: 'Your Name'
      }
    },
    path: '/projectdetails?app=mydesk',
    projectKey: 'MyDesk'
  },
  {
    title: 'Designing Feature-Rich Admin Dashboards for Data Management',
    description: 'Exploring the architecture and features of comprehensive admin dashboards including user management, stock monitoring, email systems, and interactive image galleries.',
    date: '2026-01-10',
    image: '',
    minRead: 9,
    author: {
      name: 'Your Name',
      avatar: {
        src: 'https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3',
        alt: 'Your Name'
      }
    },
    path: '/projectdetails?app=admindashboard',
    projectKey: 'AdminDashboard'
  }
])

// Function to get project image or fallback
const getProjectImage = (post: any) => {
  if (post.image && post.image !== '') {
    return post.image
  }
  // Fallback images based on project type
  const fallbackImages = {
    Authenticator: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    CommectMe: 'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    Encryptor: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ExpenseTracker: 'https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    MyDesk: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    AdminDashboard: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
  return fallbackImages[post.projectKey as keyof typeof fallbackImages] || 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
}
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
            :title="post.title"
            :description="post.description"
            :date="post.date"
            :image="getProjectImage(post)"
            :min-read="post.minRead"
            :author="post.author"
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