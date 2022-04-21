<template>
  <div class="block-3-images">
    <b-row :class="block.orientation === 'reverse' ? 'flex-row-reverse' : 'flex-row'">
      <b-col class="block-3-images__Two-half">
        <b-img-lazy
          :src="block.image_12 && block.image_12.sizes.large"
          blank="true"
          blank-color="#bbb"
          fluid
          class="project-cover"
          alt="Project featured Image"
        ></b-img-lazy>
      </b-col>
      <b-col class="block-3-images__half">
        <b-img-lazy
          :src="
            block.image_14.first_image && block.image_14.first_image.sizes.large
          "
          blank="true"
          blank-color="#bbb"
          fluid
          class="project-cover"
          alt="Project featured Image"
        ></b-img-lazy>
        <b-img-lazy
          :src="
            block.image_14.second_image &&
            block.image_14.second_image.sizes.large
          "
          blank="true"
          blank-color="#bbb"
          fluid
          class="project-cover"
          alt="Project featured Image"
        ></b-img-lazy>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: 'BlocksThreeImages',
  props: {
    block: {
      type: Object,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
.block-3-images {
  padding: 0 5.625rem;
  margin-bottom: 9.375rem;
  @include responsive('desktop') {
    padding: 0 calc(5.625rem * 0.75);
    margin-bottom: calc(9.375rem * 0.75);
  }
  @include responsive('widescreen') {
    padding: 0 calc(5.625rem * 0.64);
    margin-bottom: calc(9.375rem * 0.64);
  }
  @include responsive('tablet') {
    padding: 0;
    margin-bottom: calc(9.375rem * 0.51);
  }
  &__half {
    margin-bottom: 1.5rem;
    display: grid;
    row-gap: 1.5rem;
    img {
      width: 100%;
    }
    @include responsive('tablet') {
      min-width: 100%;
    }
  }
  &__Two-half {
    display: grid;
    grid-template-rows: 1fr;
    padding-bottom: 1.5rem;
    img {
      height: 100%;
    }
  }
}
</style>
