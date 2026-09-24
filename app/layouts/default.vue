<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <!-- Navbar -->
    <nav class="fixed top-0 z-50 w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-start rtl:justify-end">
            <!-- Botón toggle Sidebar Móvil -->
            <button
              @click="isSidebarOpen = !isSidebarOpen"
              type="button"
              class="sm:hidden text-gray-500 dark:text-gray-400 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 font-medium rounded-lg text-sm p-2 focus:outline-none"
            >
              <span class="sr-only">Open sidebar</span>
              <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h10" />
              </svg>
            </button>
            <NuxtLink to="/" class="flex ms-2 md:me-24">
              <span class="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
                
                <a
        href="#"
        class="flex items-center text-lg font-semibold text-gray-900 dark:text-white"
      >
        <img
          class="w-6 h-6 mr-2"
          src="../assets/images/logo.png"
          alt="logo"
        />

        Inventio
      </a>

              </span>
            </NuxtLink>
          </div>

          <!-- Menú Usuario Dropdown -->
          <div class="flex items-center relative">
            <div class="flex items-center ms-3">
              <div>
                <button
                  @click="isUserMenuOpen = !isUserMenuOpen"
                  type="button"
                  class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                >
                  <span class="sr-only">Open user menu</span>
                  <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
                </button>
              </div>

              <!-- Menú Desplegable (Dropdown) -->
              <div
                v-if="isUserMenuOpen"
                @click.outside="isUserMenuOpen = false"
                class="absolute right-0 top-10 z-50 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg w-44 divide-y divide-gray-100 dark:divide-gray-700"
              >
                <div class="px-4 py-3">
                  <p class="text-sm font-medium text-gray-900 dark:text-white">
                    Neil Sims
                  </p>
                  <p class="text-sm text-gray-500 dark:text-gray-400 truncate">
                    neil.sims@flowbite.com
                  </p>
                </div>
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200 font-medium">
                  <li>
                    <NuxtLink to="/" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white">
                      Dashboard
                    </NuxtLink>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white">
                      Earnings
                    </a>
                  </li>
                  <!-- <li>
                    <button
                      @click="authStore.logout()"
                      class="w-full text-left block px-4 py-2 text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Sign out
                    </button>
                  </li> -->
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Overlay movil para cerrar sidebar al hacer clic fuera -->
    <div
      v-if="isSidebarOpen"
      @click="isSidebarOpen = false"
      class="fixed inset-0 z-30 bg-gray-900/50 sm:hidden"
    ></div>

    <!-- Sidebar Lateral -->
    <aside
      :class="[
        'fixed top-0 left-0 z-40 w-64 h-full pt-16 transition-transform bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 sm:translate-x-0',
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      ]"
      aria-label="Sidebar"
    >
      <div class="h-full px-3 py-4 overflow-y-auto">
        <ul class="space-y-2 font-medium">
          <li>
            <NuxtLink
              to="/"
              class="flex items-center px-2 py-1.5 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg class="w-5 h-5 transition duration-75 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z"/>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z"/>
              </svg>
              <span class="ms-3">Dashboard</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/productos"
              class="flex items-center px-2 py-1.5 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg class="shrink-0 w-5 h-5 text-gray-500 dark:text-gray-400 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"/>
              </svg>
              <span class="flex-1 ms-3 whitespace-nowrap">Productos</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </aside>

    <!-- Contenido Principal -->
    <main class="p-4 sm:ml-64 pt-20">
      <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'
import { ref } from 'vue'

const authStore = useAuthStore()

const isSidebarOpen = ref(false)
const isUserMenuOpen = ref(false)
</script>