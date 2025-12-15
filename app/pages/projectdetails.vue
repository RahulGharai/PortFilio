<template>
  <UContainer class="mt-3">
    <div class="text-4xl font-bold text-center">
      {{ selectedApp?.title }}
    </div>

    <div class="text-center mt-4 p-5">
      {{ selectedApp?.details }}
    </div>

    <!-- Carousel -->
    <UCarousel
      v-slot="{ item }"
      loop
      auto-scroll
      arrows
      :items="selectedApp?.images"
      :ui="{ item: 'basis-1/3' }"
    >
      <img :src="item" width="234" height="234" class="rounded-lg" />
    </UCarousel>

    <div class="mt-6 text-center text-xl font-bold">About Project</div>

    <!-- Accordion -->
    <!-- <UAccordion :items="selectedApp?.accordionItems" /> -->
    <UAccordion :items="selectedApp?.accordionItems">
      <template #body="{ item }">
        <div v-html="item.content"></div>
        <div></div>
      </template>
    </UAccordion>
  </UContainer>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed, ref } from "vue";

const route = useRoute();
const mydeskImages = Object.values(
  import.meta.glob("~/assets/images/mydesk/*", {
    eager: true,
    import: "default",
  })
);
const encryptorImages = Object.values(
  import.meta.glob("~/assets/images/encryptor/*", {
    eager: true,
    import: "default",
  })
);
const monefyImages = Object.values(
  import.meta.glob("~/assets/images/moneyfy/*", {
    eager: true,
    import: "default",
  })
);
const authenticator = Object.values(
  import.meta.glob("~/assets/images/authenticator/*", {
    eager: true,
    import: "default",
  })
);
const connectme = Object.values(
  import.meta.glob("~/assets/images/connectme/*", {
    eager: true,
    import: "default",
  })
);
const admindashboard = Object.values(
  import.meta.glob("~/assets/images/admindashboard/*", {
    eager: true,
    import: "default",
  })
);

const allData = ref<any>([
  {
    key: "mydesk",
    title: "MyDesk",
    details:
      "I craft intuitive digital experiences where design meets functionality. Based in Boston, bringing ideas to life through code and creativity.",
    images: mydeskImages,
    accordionItems: [
      {
        label: "Overview",
        content:
          "• A responsive web application that provides users with a personalized dashboard (live weather + current location), secure bookmark and credential management, an editable notepad with PDF export, and account authentication (email/password) including a forgot-password flow. The product is aimed at professionals and individuals who want a single place to manage daily links, credentials, and quick notes.",
      },
      {
        label: "Key Features",
        content: `<b>Authentication:</b><br>
        • <b>Email & Password Login —</b> Users register and authenticate using email and password.<br>
        <b>Forgot Password —</b> Users can request a password reset link via email.<br><br>
    

        • <b>Dashboard:</b><br>
        <b>Live Weather —</b> Shows current temperature and conditions based on the user's detected location.<br>
        <b>Current Location —</b> Displays city and country with a manual override option if geolocation is denied.<br>
        <b>Quick Access Widgets —</b> Includes recent bookmarks, quick notes, and shortcuts.<br><br>

        • <b>Bookmark & Credential Manager:</b><br>
        <b>Save URLs —</b> Users can add URLs with optional titles and descriptions.<br>
        <b>Store Credentials —</b> Save username and password for each URL. Passwords are encrypted at rest and visible only to the authenticated user.<br>
        <b>Organize —</b> Options for tags or folders (future enhancement).<br><br>

        • <b>Notepad & Export:</b><br>
        <b>Rich Text Notes —</b> Users can write and save notes using a built-in editor.<br>
        <b>PDF Export —</b> Notes can be downloaded as PDFs for offline use using server-side or client-side generation.<br><br>

        • <b>Usability & Cross-Platform:</b><br>
        <b>Responsive UI —</b> Optimized for desktop and mobile screens.<br>
        <b>Accessible Design —</b> Supports keyboard navigation and screen readers.
        `,
      },
      {
        label: "User Flows ",
        content: `
        <b>Login</b><br>
        • User opens the app → enters email and password → clicks <b>Login</b>.<br>
        • User accesses Dashboard after successful authentication.<br><br>

        <b>Forgot Password</b><br>
        • User clicks <b>Forgot Password</b> on the login screen → enters email.<br>
        • Server generates a single-use reset token and emails a reset link.<br>
        • User clicks link → opens password reset page → enters a new password.<br>
        • Server validates token, updates the password (hashed), and invalidates the token.<br><br>

        <b>Save Bookmark / Credential</b><br>
        • User opens the <b>Bookmarks</b> page → clicks <b>Add</b>.<br>
        • Enters URL, username, password, optional notes → clicks <b>Save</b>.<br>
        • Data is stored securely under the user’s account with encryption.<br><br>

        <b>Create Note & Export PDF</b><br>
        • User writes notes in the notepad → clicks <b>Download PDF</b>.<br>
        • The app prepares a printable or PDF version and triggers the download.
        `,
      },
      {
        label: "Application Link & Credentials",
        content: `
        <b>Application Link</b><br>
        • <a href="https://mydesk-8ec40.web.app/" target="_blank">
            https://mydesk-8ec40.web.app/
        </a><br><br>

        • <b>Login Credentials</b><br>
        <b>Username:</b> aryasantu41@gmail.com<br>
        <b>Password:</b> 123456<br><br>
        `,
      },
    ],
  },

  {
    key: "encryptor",
    title: "Encryptor App",
    details:
      "Encryptor app securely encrypts text and files using modern cryptographic methods.",
    images: encryptorImages,
    accordionItems: [
      {
        label: "What is the Encryptor App?",
        content: `
      This app allows users to securely store and retrieve encrypted data using AES-256 encryption. 
      Users must provide their own secret key to encrypt and decrypt the stored information.
    `,
      },
      {
        label: "Authentication Features",
        content: `
      <b>Email & Password Login —</b> Users can log in using Firebase Authentication.<br>
      <b>Email Verification —</b> After registering, a verification email is sent. Users must verify their email before logging in.<br>
      <b>Password Reset —</b> Users can request a reset link via email to create a new password.<br>
    `,
      },
      {
        label: "Encryption & Decryption",
        content: `
      <b>AES-256 Encryption —</b> User data is encrypted using AES-256, ensuring high security.<br>
      <b>User-Specific Key —</b> Data is encrypted only with the key entered by the user.<br>
      <b>Decryption —</b> Only the same key used for encryption can decrypt the stored data.<br>
      <b>Firebase Storage —</b> Encrypted data is stored safely in Firebase under each authenticated user.<br>
    `,
      },
      {
        label: "Notes Feature",
        content: `
      A separate notes page lets users write and save personal notes. 
      Notes are stored per user in Firebase and can be edited or updated anytime.
    `,
      },
      {
        label: "Demo Access",
        content: `
      <b>App Link:</b><br>
      <a href="https://encryptor-26149.web.app/" target="_blank">
        https://encryptor-26149.web.app/
      </a><br><br>

      <b>Login Credentials</b><br>
      <b>Email:</b> aryasantu41@gmail.com<br>
      <b>Password:</b> 123456<br><br>

      <b>Important:</b> Use demo accounts only. Do not store real personal data or sensitive information during testing.
    `,
      },
    ],
  },

  {
    key: "expensetracker",
    title: "Expense Tracker",
    details:
      "Track your daily expenses, categorize spending and manage budgets easily.",
    images: monefyImages,
    accordionItems: [
      {
        label: "Expense Tracker – Overview",
        content: `
      Expense Tracker is a financial management app that helps users track <br/>
      daily, monthly, and yearly expenses. It supports Google Login and <br/>
      stores all expense data securely in Firestore.
    `,
      },
      {
        label: "Expense Tracker – Key Features",
        content: `
      • Login with Google Account <br/>
      • Add daily expenses with category, amount, and notes <br/>
      • Monthly expense summary <br/>
      • Yearly expense summary <br/>
      • Create custom expense categories (shopping, travel, food, etc.) <br/>
      • View charts for spending behavior <br/>
      • Delete or update previous expenses <br/>
    `,
      },
      {
        label: "Expense Tracker – Tech Stack",
        content: `
      • Nuxt 2 / Vue 2 <br/>
      • Firebase Google Authentication <br/>
      • Firestore Database <br/>
    `,
      },
      {
        label: "Try the Live App",
        content: `
      You can try the live Expense Tracker app here: <br/>
      <a href="https://expensetracker-ae07a.web.app/" target="_blank">
        https://expensetracker-ae07a.web.app/
      </a> <br/><br/>
      Note: This app uses Google Login. <br/>
      To access it, the user must log in using their own Google account.
    `,
      },
    ],
  },
  {
    key: "admindashboard",
    title: "Admin Dashboard",
    details:
      "Track your stock, chat with logged in users in the site.Show and share images in the gallery.",
    images: admindashboard,
    accordionItems: [
      {
        label: "Admin Dashboard – Overview",
        content: `
    Admin Dashboard is a Nuxt 2 and Vue 2 application built with Firebase, 
    providing user authentication, stock market data, real-time chat, and 
    social gallery features. The app includes multiple modules for admin-level 
    management, communication, and user engagement. <br/><br/>
  `,
      },
      {
        label: "Admin Dashboard – Key Features",
        content: `
    • Email & Password Login <br/>
    • Password Reset with email reset link <br/>
    • View real-time stock market data using Groww API <br/>
    • User profile page with editable details <br/>
    • Email templates for sending emails to logged-in users <br/>
    • Real-time chat system between authenticated users <br/>
    • E-commerce UI layout (design added, functionality not implemented) <br/>
    • Social Gallery: users can upload images <br/>
    • Logged-in users can like and comment on gallery posts <br/>
    • Secure Firebase Firestore data handling <br/>
  `,
      },
      {
        label: "Admin Dashboard – Tech Stack",
        content: `
    • Nuxt 2 / Vue 2 <br/>
    • Firebase Authentication (Email/Password + Reset Email) <br/>
    • Firestore Database <br/>
    • Groww Stock Market API <br/>
    • Firebase Storage for image uploads <br/>
    • Real-time chat using Firestore listeners <br/>
  `,
      },
      {
        label: "Try the Live App",
        content: `
    You can try the live Admin Dashboard application here: <br/>
    <a href="https://admin-dashboard-4500c.firebaseapp.com/" target="_blank">
      https://admin-dashboard-4500c.firebaseapp.com/
    </a> <br/><br/>

    <b>Demo Credentials:</b> <br/>
    Email: aryasantu41@gmail.com <br/>
    Password: 123456 <br/><br/>

    Note: Please avoid sharing sensitive data. Demo login is provided only 
    for previewing application features.
  `,
      },
    ],
  },

  {
    key: "authenticator",
    title: "Authenticator",
    details:
      "The system supports various login types, each with its own authentication process.",
    images: authenticator,
    accordionItems: [
      {
  label: "Authenticator – Overview",
  content: `
    Authenticator is a Nuxt 2 and Vue 2 application built on Firebase, designed 
    to support multiple login methods in a single secure platform. It provides 
    traditional email & password authentication, social logins, password reset 
    flows, and complete login history tracking including IP and location data. <br/><br/>
  `
},
{
  label: "Authenticator – Key Features",
  content: `
    • Email & Password Login <br/>
    • Email Verification Link Login <br/>
    • Password Reset Link via Email <br/>
    • Google Login <br/>
    • GitHub Login <br/>
    • Twitter Login <br/>
    • Login History Tracking (IP, city, region, device info) <br/>
    • Shows previous login records for each user <br/>
    • Secure Firebase Authentication & Firestore storage <br/>
  `
},
{
  label: "Authenticator – Tech Stack",
  content: `
    • Nuxt 2 / Vue 2 <br/>
    • Firebase Authentication (Email/Password, Google, GitHub, Twitter) <br/>
    • Firestore Database for storing login logs <br/>
    • Geolocation & IP tracking API (for login history analytics) <br/>
    • Firebase Hosting for deployment <br/>
  `
},
{
  label: "Try the Live App",
  content: `
    This project demonstrates multiple authentication systems in one place. <br/><br/>
    <a href="https://authenticator-e865b.web.app/" target="_blank">https://authenticator-e865b.web.app</a> <br/><br/>

    You can test login using Email/Password or try Google, GitHub, or Twitter login. <br/><br/>

    Note: Social logins require the user to use their own accounts for authentication.
  `
}

    ],
  },
    {
    key: "connectme",
    title: "Connect Me",
    details:
      "Track your daily expenses, categorize spending and manage budgets easily.",
    images: connectme,
    accordionItems: [
      {
  label: "Connect Me – Overview",
  content: `
    Connect Me is a Nuxt 2 and Vue 2 real-time messaging application built using 
    Firebase. It allows users to communicate instantly after logging in with 
    email & password, supports email verification flows, and includes secure 
    password reset features. The app provides a smooth chatting experience with 
    real-time message updates, profile management, and push notifications. <br/><br/>
  `
},
{
  label: "Connect Me – Key Features",
  content: `
    • Email & Password Login <br/>
    • Email Verification Link Support <br/>
    • Password Reset Link via Email <br/>
    • Real-time Chat Between Logged-in Users <br/>
    • Firestore-based Live Messaging <br/>
    • Firebase Push Notifications for New Messages <br/>
    • User Profile Update (name, photo, status) <br/>
    • Live Presence Tracking & Chat History Storage <br/>
    • Firebase Authentication & Firestore Security <br/>
  `
},
{
  label: "Connect Me – Tech Stack",
  content: `
    • Nuxt 2 / Vue 2 <br/>
    • Firebase Authentication (Email/Password + Verification) <br/>
    • Firestore Database for real-time communication <br/>
    • Firebase Cloud Messaging (FCM) for push notifications <br/>
    • Firebase Hosting for deployment <br/>
  `
},
{
  label: "Try the Live App",
  content: `
    You can try the live demo using the credentials below. <br/><br/>

    <a href="https://connectme-ec6b5.web.app/" target="_blank">
      https://connectme-ec6b5.web.app/
    </a> <br/><br/>

    Demo Login <br/>
    Email: aryasantu41@gmail.com <br/>
    Password: 123456 <br/><br/>

    Note: Push notifications require permission in your browser or device.
  `
}

    ],
  },
]);

// ✔ Get app from query string
// URL example: /project?app=mydesk
const appKey = computed(() => route.query.app || "mydesk");

// ✔ Filter data based on query
const selectedApp = computed(() =>
  allData.value.find((x: any) => x.key === appKey.value)
);
</script>
