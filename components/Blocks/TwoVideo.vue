<template>
  <div class="two-video">
    <b-row class="video_content justify-content-center">
      <b-col md="12" lg="6" class="first_video">
        <BlocksVideo :block="block.videos.first_video_url" />
      </b-col>
      <b-col md="12" lg="6" class="second_video">
        <BlocksVideo :block="block.videos.second_video_url" has-background />
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: 'TwoVideo',
  props: {
    block: {
      type: Object,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
.two-video {
  padding: 0 5.625rem;

  @include responsive('desktop') {
    padding: 0 calc(5.625rem * 0.75);
  }
  @include responsive('widescreen') {
    padding: 0 calc(5.625rem * 0.64);
  }
  @include responsive('tablet') {
    padding: 0 ;
  }
  .video_content{
    
    @include responsive('tablet') {
      column-gap:0;
    }
    .first_video{
      padding:0;
    }
  }
}
</style>
