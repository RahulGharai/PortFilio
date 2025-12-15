<script setup lang="ts">
import { ref } from 'vue'

const posts = ref([
  {
    title: 'Secure Multi-Factor Authentication System with Firebase',
    description:
      'Build a robust authentication app supporting email login, verification links, social logins, password resets, and login history tracking.',
    date: '2025-04-23',
    image: {
      src: 'https://github.com/RahulGharai/Image/blob/main/logo/authenticator-dashboard.png?raw=true',
      alt: 'Authenticator Dashboard'
    },
    minRead: 8,
    author: {
      name: 'Your Name',
      avatar: {
        src: 'https://images.unsplash.com/photo-1701615004837-40d8573b6652',
        alt: 'Your Name'
      }
    },
    path: '/projectdetails?app=authenticator'
  },
  {
    title: 'MyDesk: Personalized Dashboard',
    description:
      'Productivity dashboard with weather, bookmarks, credentials, notes, PDF export, and authentication.',
    date: '2025-04-22',
    image: {
      src: 'https://github.com/RahulGharai/Image/blob/main/logo/mydesk-dashboard.png?raw=true',
      alt: 'MyDesk Dashboard'
    },
    minRead: 7,
    author: {
      name: 'Your Name',
      avatar: {
        src: 'https://images.unsplash.com/photo-1701615004837-40d8573b6652',
        alt: 'Your Name'
      }
    },
    path: '/projectdetails?app=mydesk'
  },
  {
    title: 'Encryptor App: AES-256 Encryption',
    description:
      'Secure AES-256 encryption for text and files with Firebase authentication and cloud sync.',
    date: '2025-04-21',
    image: {
      src: 'https://github.com/RahulGharai/Image/blob/main/logo/encryptor-dashboard.png?raw=true',
      alt: 'Encryptor Dashboard'
    },
    minRead: 6,
    author: {
      name: 'Your Name',
      avatar: {
        src: 'https://images.unsplash.com/photo-1701615004837-40d8573b6652',
        alt: 'Your Name'
      }
    },
    path: '/projectdetails?app=encryptor'
  },
  {
    title: 'Expense Tracker',
    description:
      'Track daily and monthly expenses with charts, budgets, and Google login.',
    date: '2025-04-20',
    image: {
      src: 'https://github.com/RahulGharai/Image/blob/main/logo/expensetracker-dashboard.png?raw=true',
      alt: 'Expense Tracker'
    },
    minRead: 5,
    author: {
      name: 'Your Name',
      avatar: {
        src: 'https://images.unsplash.com/photo-1701615004837-40d8573b6652',
        alt: 'Your Name'
      }
    },
    path: '/projectdetails?app=expensetracker'
  },
  {
    title: 'Admin Dashboard',
    description:
      'Admin panel with stock data, chat, gallery, authentication, and email templates.',
    date: '2025-04-19',
    image: {
      src: 'https://github.com/RahulGharai/Image/blob/main/logo/admin-dashboard.png?raw=true',
      alt: 'Admin Dashboard'
    },
    minRead: 7,
    author: {
      name: 'Your Name',
      avatar: {
        src: 'https://images.unsplash.com/photo-1701615004837-40d8573b6652',
        alt: 'Your Name'
      }
    },
    path: '/projectdetails?app=admindashboard'
  },
  {
    title: 'Connect Me: Real-Time Messaging',
    description:
      'Real-time chat with push notifications, presence tracking, and chat history.',
    date: '2025-04-18',
    image: {
      src: 'https://github.com/RahulGharai/Image/blob/main/logo/connectme-dashboard.png?raw=true',
      alt: 'Connect Me Dashboard'
    },
    minRead: 6,
    author: {
      name: 'Your Name',
      avatar: {
        src: 'https://images.unsplash.com/photo-1701615004837-40d8573b6652',
        alt: 'Your Name'
      }
    },
    path: '/projectdetails?app=connectme'
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
          :transition="{ delay: 0.15 * index }"
          :in-view-options="{ once: true }"
        >
          <UBlogPost
            variant="naked"
            orientation="horizontal"
            :to="post.path"
            :title="post.title"
            :description="post.description"
            :date="post.date"
            :image="post.image"
            :min-read="post.minRead"
            :author="post.author"
            :ui="{
              root: 'md:grid md:grid-cols-2 group transition-all',
              image:
                'rounded-xl shadow-lg border border-muted group-hover:scale-105 transition-transform',
              header:
                index % 2 === 0
                  ? 'sm:-rotate-1'
                  : 'sm:rotate-1'
            }"
          />
        </Motion>
      </UBlogPosts>
    </UPageSection>
  </UPage>
</template>
