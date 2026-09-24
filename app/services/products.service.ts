// services/products.service.ts
import { ApiService } from './api.service'

export interface Product {
  id: number
  sku: string
  nombre: string
  categoria: string
  precio: number
  stock: number
  minStock: number
  estado: 'Disponible' | 'Stock Bajo' | 'Agotado'
  imagen: string
}

export class ProductsService {
  public static async getAll(): Promise<Product[]> {
    return await ApiService.get<Product[]>('/api/products')
  }

  public static async getById(id: number): Promise<Product> {
    return await ApiService.get<Product>(`/api/products/${id}`)
  }

  public static async create(product: Omit<Product, 'id'>): Promise<Product> {
    return await ApiService.post<Product>('/api/products', product)
  }

  public static async update(id: number, product: Partial<Product>): Promise<Product> {
    return await ApiService.put<Product>(`/api/products/${id}`, product)
  }

  public static async delete(id: number): Promise<{ success: boolean }> {
    return await ApiService.delete<{ success: boolean }>(`/api/products/${id}`)
  }
}