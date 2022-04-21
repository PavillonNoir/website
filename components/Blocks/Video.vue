<template>
  <div
    :class="
      block.video && block.video.orientation === 'boxed'
        ? 'block-video boxed'
        : 'block-video '
    "
  >
    <video
      ref="blockvideo"
      :poster="
        (block.video && block.video.video_poster.url) ||
        (block.poster && block.poster.sizes.large)
      "
      preload="none"
      playsinline
      :class="hasBackground ? 'video-player bg-dark' : 'video-player'"
    >
      <source
        :src="
          (block.video && block.video.video_url.url) ||
          (block.url && block.url.url)
        "
        type="video/mp4"
      />
      <track
        label="English"
        kind="subtitles"
        srclang="en"
        src="captions/vtt/sintel-en.vtt"
        default
      />
    </video>

    <svg
      id="button-play"
      :class="!showIcon ? 'btn-play inactive' : 'btn-play'"
      data-name="button-play"
      xmlns="http://www.w3.org/2000/svg"
      width="96"
      height="96"
      viewBox="0 0 96 96"
      @click="playVideo"
    >
      <circle id="Ellipse_19" data-name="Ellipse 19" cx="48" cy="48" r="48" />
      <path
        id="Polygone_2"
        data-name="Polygone 2"
        d="M17.957,0,35.915,31.425H0Z"
        transform="translate(67.407 31.126) rotate(90)"
        fill="#fff"
      />
    </svg>
  </div>
</template>
<script>
export default {
  name: 'BlocksVideo',
  props: {
    block: {
      type: Object,
      default: null,
    },

    hasBackground: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showIcon: true,
    }
  },

  methods: {
    playVideo() {
      const player = this.$refs.blockvideo
      player.hasAttribute('controls')
        ? player.removeAttribute('controls')
        : player.setAttribute('controls', 'controls')
      // toggle play and pause
      if (player.paused) {
        player.play()
        this.showIcon = false
      } else {
        player.pause()
        this.showIcon = true
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.block-video {
  &.boxed {
    padding: 0 5.625rem;
    @include responsive('desktop') {
      padding: 0 calc(5.625rem * 0.75);
    }
    @include responsive('widescreen') {
      padding: 0 calc(5.625rem * 0.64);
    }
    @include responsive('tablet') {
      padding: 0;
    }
  }
  position: relative;
  margin-bottom: 150px;

  .btn-play {
    position: absolute;
    inset: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    &.inactive {
      display: none;
    }
    @include responsive('phone') {
      width: 56px !important;
    }
  }
  .video-player {
    &.bg-dark {
      background: $grey;
    }
    height: 67.875rem;
    @include responsive('widescreen') {
      height: calc(67.875rem * 0.75);
    }
    @include responsive('desktop') {
      height: calc(67.875rem * 0.64);
    }
    @include responsive('tablet') {
      height: calc(67.875rem * 0.51);
    }
    @include responsive('phone') {
      height: 41.6875rem;
    }
  }
  .controls {
    display: flex;
  }
}
</style>
