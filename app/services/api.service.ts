// services/api.service.ts
export class ApiService {
  private static getHeaders(): Record<string, string> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json'
    }

    if (import.meta.client) {
      const token = localStorage.getItem('auth_token')
      if (token) {
        headers['Authorization'] = `Bearer ${token}`
      }
    }

    return headers
  }

  public static async get<T>(url: string): Promise<T> {
    return await $fetch<T>(url, {
      method: 'GET',
      headers: this.getHeaders()
    })
  }

  public static async post<T>(url: string, body: any): Promise<T> {
    return await $fetch<T>(url, {
      method: 'POST',
      headers: this.getHeaders(),
      body
    })
  }

  public static async put<T>(url: string, body: any): Promise<T> {
    return await $fetch<T>(url, {
      method: 'PUT',
      headers: this.getHeaders(),
      body
    })
  }

  public static async delete<T>(url: string): Promise<T> {
    return await $fetch<T>(url, {
      method: 'DELETE',
      headers: this.getHeaders()
    })
  }
}