<template>
  <div class="showreel">
    <video
      ref="showreelvideo"
      :poster="showreel.video_cover.paysage.sizes.large"
      preload="true"
      playsinline
      muted
      class="video-player"
    >
      <source :src="showreel.video_url.url" type="video/mp4" />
      <track kind="captions" label="English" default />
    </video>
    <div :class="showIcon ? 'd-none' : 'controls d-flex align-items-end'">
      <div
        class="player-icon d-flex justify-content-center align-items-center col-2"
      >
        <button class="icon-play" @click="buttonplay()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 32 32"
          >
            <path
              fill="white"
              d="M7 28a1 1 0 0 1-1-1V5a1 1 0 0 1 1.482-.876l20 11a1 1 0 0 1 0 1.752l-20 11A1 1 0 0 1 7 28Z"
            />
          </svg>
        </button>
        <button class="icon-pause" @click="buttonpause()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 32 32"
          >
            <path
              fill="white"
              d="M12 6h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm10 0h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z"
            />
          </svg>
        </button>
      </div>
      <div class="col-8">
        <input
          id="progress-bar"
          ref="progressBar"
          type="range"
          name="currentTime"
          class="player-slider"
          min="0"
          max="100"
          value="0"
          @change="handleRangeChange"
        />
      </div>

      <div class="volume-fullscreen d-flex justify-content-center col-2">
        <button class="icon-volume" @click="muted()">
          <svg
            v-show="ismuted"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M4 17h2.697L14 21.868V2.132L6.697 7H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2z"
            />
          </svg>
          <svg
            v-show="!ismuted"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M16 21c3.527-1.547 5.999-4.909 5.999-9S19.527 4.547 16 3v2c2.387 1.386 3.999 4.047 3.999 7S18.387 17.614 16 19v2z"
            />
            <path
              fill="white"
              d="M16 7v10c1.225-1.1 2-3.229 2-5s-.775-3.9-2-5zM4 17h2.697L14 21.868V2.132L6.697 7H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2z"
            />
          </svg>
        </button>
        <button class="icon-fullscreen" @click="fullscreen()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
            />
          </svg>
        </button>
      </div>
    </div>
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
  name: 'HomeShowreel',
  props: {
    showreel: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      showIcon: true,
      ismuted: true,
    }
  },

  methods: {
    playVideo(isVisible) {
      const player = this.$refs.showreelvideo

      if (isVisible && player.paused) {
        player.play()
        this.showIcon = false
      } else {
        player.pause()
        this.showIcon = true
      }
    },
    buttonplay() {
      const player = this.$refs.showreelvideo
      if (player.paused) {
        player.play()
        this.showIcon = false
      }
    },
    buttonpause() {
      const player = this.$refs.showreelvideo
      if (!player.paused) {
        player.pause()
        this.showIcon = true
      }
    },
    progressbar() {
      // animate progress bar when video is playing and pause when video is paused
      const player = this.$refs.showreelvideo
      const progressBar = this.$refs.progressBar
      if (player.paused) {
        progressBar.value = (player.currentTime / player.duration) * 100
      } else {
        progressBar.value = (player.currentTime / player.duration) * 100
      }
    },
    muted() {
      const player = this.$refs.showreelvideo
      if (player.muted) {
        player.muted = false
        this.ismuted = false
      } else {
        player.muted = true
        this.ismuted = true
      }
    },
    fullscreen() {
      const player = this.$refs.showreelvideo
      if (player.requestFullscreen) {
        player.requestFullscreen()
      } else if (player.mozRequestFullScreen) {
        player.mozRequestFullScreen()
      } else if (player.webkitRequestFullscreen) {
        player.webkitRequestFullscreen()
      } else if (player.msRequestFullscreen) {
        player.msRequestFullscreen()
      }
    },
    handleRangeChange(e) {
      const player = this.$refs.showreelvideo
      player.currentTime = (e.target.value / 100) * player.duration
    },
  },
}
</script>
<style lang="scss" scoped>
.showreel {
  position: relative;
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
    position: absolute;
    inset: 0;
    background: transparent;
    bottom: 3rem;
    @include responsive('phone') {
      padding: 0 1.5rem;
    }

    #progress-bar::-moz-range-thumb {
      background-color: $white !important;
      border: none;
      border-radius: 50%;
      height: 1rem;
    }

    #progress-bar::-moz-range-progress {
      background-color: $white !important;
      height: 2px;
    }
    input {
      height: 2px;
    }
    input[type='range'] {
      -webkit-appearance: none;
      width: 100%;
      background: transparent;
      position: relative;
      top: -6px;
    }
    input[type='range']:focus {
      outline: none;
    }
    input[type='range']::-webkit-slider-runnable-track {
      width: 100%;
      height: 2px;
      cursor: pointer;
      background: $grey;
    }
    input[type='range']::-webkit-slider-thumb {
      height: 15px;
      width: 15px;
      border-radius: 50%;
      background: #ffffff;
      cursor: pointer;
      -webkit-appearance: none;
      margin-top: -8px;
    }
    input[type='range']:focus::-webkit-slider-runnable-track {
      background: $grey;
    }
    input[type='range']::-moz-range-track {
      width: 100%;
      height: 2px;
      cursor: pointer;
      background: $grey;
    }
    input[type='range']::-moz-range-thumb {
      height: 15px;
      width: 15px;
      border-radius: 50%;
      background: #ffffff;
      cursor: pointer;
    }
    input[type='range']::-ms-track {
      width: 100%;
      height: 2px;
      cursor: pointer;
      background: transparent;
      border-color: transparent;
      color: transparent;
    }
    input[type='range']::-ms-fill-lower {
      background: #fff;

      border-radius: 2.6px;
    }
    input[type='range']::-ms-fill-upper {
      background: $grey;

      border-radius: 2.6px;
    }
    input[type='range']::-ms-thumb {
      height: 15px;
      width: 15px;
      border-radius: 50%;
      background: #ffffff;
      cursor: pointer;
    }
    input[type='range']:focus::-ms-fill-lower {
      background: #fff;
    }

    input[type='range']:focus::-ms-fill-upper {
      background: #fff;
    }
    button {
      background: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      svg {
        font-size: 30px;
      }
    }
  }
}
</style>
