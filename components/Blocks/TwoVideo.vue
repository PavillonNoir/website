<template>
  <div class="two-video">
    <b-row>
      <b-col>
        <BlocksVideo poster="/adidas.png" />
      </b-col>
      <b-col>
        <BlocksVideo poster="/tiktok.png" has-background />
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: 'TwoVideo',
}
</script>
<style lang="scss" scoped>
.two-video {
  padding: 0 90px;
}
</style>
