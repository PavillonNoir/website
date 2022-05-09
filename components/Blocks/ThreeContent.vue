<template>
  <div v-bind="classStyle">
    <div
      :class="block.orientation === 'reverse' ? 'content reverse' : 'content '"
    >
      <div class="first-part">
        <div class="first-content">
          <div
            v-if="block.content.first_content.type === 'image'"
            class="block-type-image"
          >
            <div class="paysage">
              <shared-image
                :source="block.content.first_content.image.paysage.sizes.large"
              />
            </div>
            <div class="portrait">
              <shared-image
                :source="block.content.first_content.image.portrait.sizes.large"
              />
            </div>
          </div>
          <div
            v-if="block.content.first_content.type === 'video'"
            class="block-type video"
          >
            <div class="paysage">
              <shared-video
                :source="block.content.first_content.video.paysage"
              />
            </div>
            <div class="portrait">
              <shared-video
                :source="block.content.first_content.video.portrait"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="second-part">
        <div class="second-content">
          <div
            v-if="block.content.second_content.type === 'image'"
            class="block-type-image"
          >
            <div class="paysage">
              <shared-image
                :source="block.content.second_content.image.paysage.sizes.large"
              />
            </div>
            <div class="portrait">
              <shared-image
                :source="
                  block.content.second_content.image.portrait.sizes.large
                "
              />
            </div>
          </div>
          <div
            v-if="block.content.second_content.type === 'video'"
            class="block-type video"
          >
            <div class="paysage">
              <shared-video
                :source="block.content.second_content.video.paysage"
              />
            </div>
            <div class="portrait">
              <shared-video
                :source="block.content.second_content.video.portrait"
              />
            </div>
          </div>
        </div>
        <div class="third-content">
          <div
            v-if="block.content.third_content.type === 'image'"
            class="block-type-image"
          >
            <div class="paysage">
              <shared-image
                :source="block.content.third_content.image.paysage.sizes.large"
              />
            </div>
            <div class="portrait">
              <shared-image
                :source="block.content.third_content.image.portrait.sizes.large"
              />
            </div>
          </div>
          <div
            v-if="block.content.third_content.type === 'video'"
            class="block-type video"
          >
            <div class="paysage">
              <shared-video
                :source="block.content.third_content.video.paysage"
              />
            </div>
            <div class="portrait">
              <shared-video
                :source="block.content.third_content.video.portrait"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlocksThreeContent',
  props: {
    block: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      classStyle: {
        class: 'block-three-content',
      },
    }
  },
  mounted() {
    this.getMargeAndWidth(
      this.block.width,
      this.block.margin.top,
      this.block.margin.bottom
    )
  },
  methods: {
    getMargeAndWidth(width, margeTop, margeBottom) {
      this.classStyle.class += ` ${width}-${margeTop}-${margeBottom}`
      return this.classStyle
    },
  },
}
</script>
<style lang="scss" scoped>
.block-three-content {
  .paysage {
    @include responsive('phone') {
      display: none;
    }
  }
  .portrait {
    @media (min-width: 768px) {
      display: none;
    }
  }
  .second-content {
    margin-bottom: 1.5rem;
    @include responsive('widescreen') {
      margin-bottom: calc(1.5rem * 0.75);
    }
    @include responsive('desktop') {
      margin-bottom: calc(1.5rem * 0.64);
    }
    @include responsive('tablet') {
      margin-bottom: calc(1.5rem * 0.51);
    }
    @include responsive('phone') {
      margin-bottom: 0.75rem;
    }
  }
  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    @include responsive('phone') {
      grid-template-columns: 1fr;
    }

    grid-gap: 1.5rem;
    @include responsive('widescreen') {
      grid-gap: calc(1.5rem * 0.75);
    }
    @include responsive('desktop') {
      grid-gap: calc(1.5rem * 0.64);
    }
    @include responsive('tablet') {
      grid-gap: calc(1.5rem * 0.51);
    }
    @include responsive('phone') {
      grid-gap: 0.75rem;
    }
  }
  .reverse {
    grid-auto-flow: dense;
    .first-part {
      grid-column: 2;
        @include responsive('phone') {
            grid-column: 1;
        }
    }
  }
}
</style>
