<template>
  <div>
    <h2>Firebase Data</h2>
    <pre>{{ showData }}</pre>
  </div>
</template>

<script setup lang="ts">
import { collection, getDocs } from "firebase/firestore";

const { $firestore } = useNuxtApp();
const showData = ref([]);

onMounted(async () => {
  try {
    // Get collection reference using the plugin
    const colRef = collection($firestore, "showdata");
    console.log("colRef", colRef);

    // Fetch documents
    const snap = await getDocs(colRef);
    console.log("Snapshot:", snap);
    
    showData.value = snap.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    console.log("Fetched data:", showData.value);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
</script>