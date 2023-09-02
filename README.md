# Nuxt 3 Supabase Login Bug
https://supabase.nuxtjs.org/authentication

This repository isolates the error.  It follows exactly the instructions here.

The error occurs when attempting to login:

```
AuthRetryableFetchError: NetworkError when attempting to fetch resource.
    NuxtJS 10
        AuthError
        CustomAuthError
        AuthRetryableFetchError
        _handleRequest
        _request
        signInWithOtp
        signInWithOtp
        callWithErrorHandling
        callWithAsyncErrorHandling
        invoker
```

