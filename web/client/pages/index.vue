<template>
  <div class="rsl">
    RSL Home
  </div>
</template>

<script>
import overallSeasons from '~/data/overallSeasons'

export default {
  middleware ({ redirect, route: { query } }) {
    // Redirect to the latest league homepage
    return redirect({
      path: '/' + overallSeasons[0].code,
      query
    })
  }
}
</script>
