<template>
  <div class="block-3-images">
    <b-row>
      <b-col class="block-3-images__Two-half">
        <b-img-lazy
          src="/3.png"
          blank="true"
          blank-color="#bbb"
          fluid
          class="project-cover"
          alt="Project featured Image"
        ></b-img-lazy>
      </b-col>
      <b-col class="block-3-images__half">
        <b-img-lazy
          src="/2.png"
          blank="true"
          blank-color="#bbb"
          fluid
          class="project-cover"
          alt="Project featured Image"
        ></b-img-lazy>
        <b-img-lazy
          src="/1.png"
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
}
</script>
<style lang="scss" scoped>
.block-3-images {
  padding: 0 90px;
  margin-bottom: 150px;
  &__half {
    margin-bottom: 1.5rem;
    display: grid;
    row-gap: 1.5rem;
    img {
      width: 100%;
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
