<!-- pages/index.vue -->
<template>
  <div
    class="flex items-center justify-center min-h-screen font-body text-gray-500"
  >
    <p>Cargando...</p>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/auth";

const authStore = useAuthStore();

definePageMeta({
  middleware: "auth",
});

onMounted(() => {
  if (authStore.isAuthenticated) {
    navigateTo("/productos");
  } else {
    // Siguraduen nga /auth/login ti maipasa
    navigateTo("/auth/login");
  }
});
</script>
