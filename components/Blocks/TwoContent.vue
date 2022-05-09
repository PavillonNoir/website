<template>
  <div v-bind="classStyle">
    <b-row>
      <b-col md="12" lg="6">
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
            <shared-video :source="block.content.first_content.video.paysage" />
          </div>
          <div class="portrait">
            <shared-video
              :source="block.content.first_content.video.portrait"
            />
          </div>
        </div>
      </b-col>
      <b-col md="12" lg="6">
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
              :source="block.content.second_content.image.portrait.sizes.large"
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
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'BlocksTwoContent',
  props: {
    block: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      classStyle: {
        class: 'block-two-content',
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
.block-two-content {
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
}
</style>
