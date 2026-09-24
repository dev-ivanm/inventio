// services/auth.service.ts
import { ApiService } from './api.service'

export interface LoginDTO {
  email: string
  clave: string
}

export interface UserResponse {
  id: number
  nombre: string
  correo: string
  rol: 'admin' | 'vendedor' | 'gerente'
  avatar: string
}

export interface LoginResponse {
  success: boolean
  user: UserResponse
  token: string
}

export class AuthService {
  public static async login(credentials: LoginDTO): Promise<LoginResponse> {
    return await ApiService.post<LoginResponse>('/api/auth/login', credentials)
  }
}