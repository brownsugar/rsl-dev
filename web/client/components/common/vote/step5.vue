<template>
  <div class="vote">
    <v-img
      src="~/assets/images/common/play.png"
      :aspect-ratio="1365 / 778"
      width="300"
    />
    <h4 class="text-h5 font-weight-bold my-4">
      投票成功！🎉
    </h4>
    <p>感謝您為支持的{{ voteTarget.label }}投下神聖的一票！</p>
    <slot name="success" />
    <v-btn
      color="twitch"
      :href="$config.rsl.twitch.url"
      target="_blank"
      rel="noreferrer noopener"
      depressed
      large
      dark
    >
      <fa
        class="mr-2"
        icon="fa-brands fa-twitch"
        size="lg"
      />
      立即追蹤 Twitch 頻道
      <fa
        class="ml-2"
        icon="fa-regular fa-up-right-from-square"
        size="sm"
      />
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'VoteStep5',
  props: {
    voteTarget: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
