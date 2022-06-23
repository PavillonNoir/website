/* eslint-disable no-new */
<template>
  <div v-bind="classStyle">
    <div
      v-if="block.type === 'image' && block.images"
      class="block-slider__images"
    >
      <VueSlickCarousel ref="imageCarousel" v-bind="settings">
        <div v-for="(image, index) in block.images" :key="index">
          <img :src="image.url" alt="img-slider" class="block-slider__image" />
        </div>
      </VueSlickCarousel>
      <div class="block-slider__arrows">
        <button class="arrows-prev" @click="prev">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15.619"
            height="14.494"
            viewBox="0 0 15.619 14.494"
          >
            <line
              id="Ligne_90"
              data-name="Ligne 90"
              x2="14.912"
              transform="translate(15.619 7.247) rotate(180)"
              fill="none"
              stroke="#fff"
              stroke-width="1"
            />
            <path
              id="Tracé_142"
              data-name="Tracé 142"
              d="M0,6.894,6.893,0l6.893,6.894"
              transform="translate(0.707 14.14) rotate(-90)"
              fill="none"
              stroke="#fff"
              stroke-width="1"
            />
          </svg>
        </button>
        <div class="hyphen">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="5.456"
            height="1"
            viewBox="0 0 5.456 1"
          >
            <line
              id="Ligne_91"
              data-name="Ligne 91"
              x2="5.456"
              transform="translate(0 0.5)"
              fill="none"
              stroke="#fff"
              stroke-width="1"
            />
          </svg>
        </div>
        <button class="arrows-next" @click="next">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15.619"
            height="14.494"
            viewBox="0 0 15.619 14.494"
          >
            <line
              id="Ligne_4"
              data-name="Ligne 4"
              x2="14.912"
              transform="translate(0 7.247)"
              fill="none"
              stroke="#fff"
              stroke-width="1"
            />
            <path
              id="Tracé_140"
              data-name="Tracé 140"
              d="M0,6.894,6.893,0l6.893,6.894"
              transform="translate(14.912 0.354) rotate(90)"
              fill="none"
              stroke="#fff"
              stroke-width="1"
            />
          </svg>
        </button>
      </div>
    </div>
    <div
      v-if="block.type === 'video' && block.videos"
      class="block-slider__video"
    >
      <div class="block-slider__video-container">
        <VueSlickCarousel ref="videoCarousel" v-bind="settings">
          <div
            v-for="(video, index) in block.videos"
            :key="index"
            class="video-slider"
          >
            <SharedPlayer :source="video" />
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'BlocksSlider',
  components: {
    VueSlickCarousel,
  },
  props: {
    block: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      settings: {
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        draggable: true,

        responsive: [
          {
            breakpoint: 768,
            settings: {
              centerMode: true,
              arrows: false,
              variableWidth: true,
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              variableWidth: true,
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },

      classStyle: {
        class: 'block-slider ',
      },
    }
  },
  mounted() {
    this.getMargeAndWidth(this.block.margin.top, this.block.margin.bottom)
  },
  methods: {
    next() {
      this.$refs.imageCarousel.next()
    },
    prev() {
      this.$refs.imageCarousel.prev()
    },
    nextVideo() {
      this.$refs.videoCarousel.next()
    },
    prevVideo() {
      this.$refs.videoCarousel.prev()
    },
    getMargeAndWidth(margeTop, margeBottom) {
      this.classStyle.class += `fullwidth-${margeTop}-${margeBottom}`
      return this.classStyle
    },
  },
}
</script>
<style lang="scss" scoped>
.block-slider {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
  position: relative;
  z-index: 1;
  &.fullwidth-large-large {
    @include marge('fullwidth', 'large', 'large');
  }
  &.fullwidth-large-small {
    @include marge('fullwidth', 'large', 'small');
  }
  &.fullwidth-small-large {
    @include marge('fullwidth', 'small', 'large');
  }
  &.fullwidth-small-small {
    @include marge('fullwidth', 'small', 'small');
  }
  &__images {
    @include responsive('phone') {
      width: 100%;
      height: 286px;
    }
  }
  &__image {
    width: 1299px;
    height: 866px;
    margin-right: 1.5rem;
    @include responsive('widescreen') {
      width: calc(1299px * 0.75);
      height: calc(866px * 0.75);
    }
    @include responsive('desktop') {
      width: calc(1299px * 0.64);
      height: calc(866px * 0.64);
    }
    @include responsive('tablet') {
      width: calc(1299px * 0.51);
      height: calc(866px * 0.51);
    }
    @include responsive('phone') {
      width: 100%;
      height: 251.27px;
      margin-right: 0;
    }
  }
  &__arrows {
    @media (min-width: 767px) {
      display: none;
    }
    @include responsive('phone') {
      position: absolute;
      top: 90%;
      left: 50%;
      margin-top: -5px;
      transform: translate(-50%, -50%);
      background-color: $primary;
      padding: 0.5rem;
      border-radius: 20px;
      width: 90px;
      display: flex;
      justify-content: space-around;
      button {
        padding: 0;
        border: none;
        background-color: transparent;
        color: $white;
        font-weight: bold;
        svg {
          font-weight: 700;
        }
      }
    }
    &.arrows-video {
      top: 99%;
    }
  }
  .video-slider {
    margin-right: 1.5rem;
    @include responsive('widescreen') {
      margin-right: calc(1.5rem * 0.75);
    }
    @include responsive('desktop') {
      margin-right: calc(1.5rem * 0.64);
    }
    @include responsive('tablet') {
      margin-right: calc(1.5rem * 0.51);
    }
    @include responsive('phone') {
      margin-right: 0;
    }
  }
}
</style>
