// stores/auth.ts
import { defineStore } from "pinia";
import {
  AuthService,
  type UserResponse,
  type LoginDTO,
} from "~/services/auth.service";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as UserResponse | null,
    token: null as string | null,
    loading: false,
    error: null as string | null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.user,
    userRole: (state) => state.user?.rol || null,
  },

  actions: {
    initAuth() {
      if (!import.meta.client) return;

      const storedUser = localStorage.getItem("auth_user");
      const storedToken = localStorage.getItem("auth_token");

      this.user = storedUser ? (JSON.parse(storedUser) as UserResponse) : null;
      this.token = storedToken;
    },

    async login(credentials: LoginDTO) {
      this.loading = true;
      this.error = null;
      try {
        const response = await AuthService.login(credentials);
        this.user = response.user;
        this.token = response.token;

        if (import.meta.client) {
          localStorage.setItem("auth_user", JSON.stringify(response.user));
          localStorage.setItem("auth_token", response.token);
        }

        return true;
      } catch (err: any) {
        this.error = err.data?.statusMessage || "Error al iniciar sesión";
        return false;
      } finally {
        this.loading = false;
      }
    },
  },
});
