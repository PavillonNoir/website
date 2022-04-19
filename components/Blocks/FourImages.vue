<template>
  <div class="block-4-images">
    <b-row class="">
      <b-col class="block-4-images__fullwidth">
        <b-img-lazy
          src="/fullwidth.png"
          fluid
          class="project-cover"
          alt="Project featured Image"
        ></b-img-lazy>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="block-4-images__half">
        <b-img-lazy
          src="/image-12.png"
          blank="true"
          blank-color="#bbb"
          fluid
          class="project-cover"
          alt="Project featured Image"
        ></b-img-lazy>
        <b-img-lazy
          src="/second-img.png"
          blank="true"
          blank-color="#bbb"
          fluid
          class="project-cover"
          alt="Project featured Image"
        ></b-img-lazy>
      </b-col>
      <b-col class="block-4-images__Two-half">
        <b-img-lazy
          src="/third.png"
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
}
</script>

<style lang="scss">
.block-4-images {
  padding: 0 90px;
  margin-bottom: 150px;
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
