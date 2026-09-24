// server/api/auth/login.post.ts  (o server/api/auth/login.ts)
export default defineEventHandler(async (event) => {
  // 1. Obtener el cuerpo de la petición (email y clave)
  const body = await readBody(event)

  try {
    // 2. Aquí va la lógica de autenticación o la llamada a tu Backend (C# / Node)
    // Ejemplo si llamas a un backend externo o base de datos:
    if (body.email === 'admin@admin.com' && body.clave === '123456') {
      return {
        success: true,
        user: {
          id: 1,
          nombre: 'Usuario Admin',
          correo: body.email,
          rol: 'admin',
          avatar: ''
        },
        token: 'fake-jwt-token-xyz'
      }
    }

    // Si las credenciales fallan, lanza un error HTTP 401
    throw createError({
      statusCode: 401,
      statusMessage: 'Credenciales inválidas'
    })

  } catch (error: any) {
    // Si ya es un error de Nuxt, relánzalo
    if (error.statusCode) throw error

    // Error genérico
    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'Error interno del servidor'
    })
  }
})