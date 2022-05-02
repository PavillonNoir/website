<template>
  <div class="image-content">
    <shared-image
      source="https://preprod.pavillonnoir.com/wp-content/uploads/2022/04/sillage-noir.webp"
    />
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
}
</script>
