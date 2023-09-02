// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  supabase: {
    redirect: false,
    cookieOptions: {
      maxAge: 60 * 5,
      // maxAge: 60 * 60 * 8,
      sameSite: 'lax',
      secure: true
    },
    clientOptions: {
    }
  },
  modules: [
    '@nuxtjs/supabase'
  ],
})

