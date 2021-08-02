<template>
  <div class="rsl">
    RSL Home
  </div>
</template>

<script>
export default {
  middleware ({ redirect, route: { query } }) {
    // We don't have main homepage now, redirect to the league homepage
    return redirect({
      path: '/season2',
      query
    })
  }
}
</script>
