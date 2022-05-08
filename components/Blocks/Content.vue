<template>
  <div v-bind="classStyle">
    <div v-if="block.type === 'image'" class="block-type-image">
      <div class="paysage">
        <shared-image :source="block.image.paysage.sizes.large" />
      </div>
      <div class="portrait">
        <shared-image :source="block.image.portrait.sizes.large" />
      </div>
    </div>
    <div v-if="block.type === 'video'" class="block-type video">
      <div class="paysage">
        <shared-video :source="block.video.paysage" />
      </div>
      <div class="portrait">
        <shared-video :source="block.video.portrait" />
      </div>
    </div>
  </div>
</template>

<script>
import SharedImage from '@/components/shared/Image.vue'
export default {
  name: 'BlocksContent',
  components: {
    SharedImage,
  },
  props: {
    block: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      classStyle: {
        class: 'image-content',
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
.image-content {
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
