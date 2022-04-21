<template>
  <div class="block-4-images">
    <b-row >
      <b-col class="block-4-images__fullwidth">
        <b-img-lazy
          :src="block.fullwidth.sizes.large"
          fluid
          class="project-cover"
          alt="Project featured Image"
        ></b-img-lazy>
      </b-col>
    </b-row >
    <b-row >
      <b-col class="block-4-images__half">
        <b-img-lazy
          :src="block.image_14.first_image.sizes.large"
          blank="true"
          blank-color="#bbb"
          fluid
          class="project-cover"
          alt="Project featured Image"
        ></b-img-lazy>
        <b-img-lazy
          :src="block.image_14.second_image.sizes.large"
          blank="true"
          blank-color="#bbb"
          fluid
          class="project-cover"
          alt="Project featured Image"
        ></b-img-lazy>
      </b-col>
      <b-col class="block-4-images__Two-half">
        <b-img-lazy
          :src="block.image_12.sizes.large"
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
  name: 'BlocksFourImages',
  props: {
    block: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.block-4-images {
  padding: 0 5.625rem;
  margin-bottom: 9.375rem;
  @include responsive('desktop'){
    padding: 0 calc(5.625rem*.75);
    margin-bottom: calc(9.375rem*.75);
  }
   @include responsive('widescreen'){
    padding: 0 calc(5.625rem*.64);
    margin-bottom: calc(9.375rem*.64);
  }
  @include responsive('tablet'){
    padding: 0 ;
    margin-bottom: calc(9.375rem*.51);
  }
  &__fullwidth {
    margin-bottom: 1.5rem;
    width: 100%;
    img {
      width: 100%;
    }
  }
  &__half {
    margin-bottom: 1.5rem;
    display: grid;
    grid-template-rows: 1fr 1fr;
    @include responsive('tablet'){
      grid-template-rows: 1fr;
      min-width: 100%;
    }
    row-gap: 1.5rem;
    img {
      width: 100%;
    }
  }
  &__Two-half {
    display: grid;
    grid-template-rows: 1fr;
    padding-bottom: 1.5rem;
    height: 100%;
    img {
      height: 100%;
    }
  }
}
</style>
