<template>
  <div class="rsl">
    RSL Home
  </div>
</template>

<script>
export default {
  middleware ({ redirect }) {
    // We don't have main homepage now, redirect to the league homepage
    return redirect('/season2')
  }
}
</script>
