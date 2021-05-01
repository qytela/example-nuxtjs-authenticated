<template>
  <h1>Halaman Show Comment by ID: {{ $route.params.id }}</h1>
</template>

<script>
export default {
  name: "ShowComment",
  middleware: "authenticated"
}
</script>