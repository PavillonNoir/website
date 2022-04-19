<template>
  <b-row class="justify-content-end">
    <b-col md="6" class="description">
      <h3 class="title">Smell, Hear and See</h3>
      <p>
        Firmenich and Magique studio worked together with Guillaume Cousin to
        give an olfactive dimension to the work and its subject, while Nuit
        Noire worked on a soundtrack. The monumental piece of work was installed
        in the heart of the Saint-Eustache church in Paris, giving it a magical
        setting and a divine dimension.
      </p>
    </b-col>
    <!-- <b-col md="6" class="description ">
   
  </b-col>  -->
  </b-row>
</template>
<script>
export default {
  name: 'BlocksDescription',
  props: {
    text: {
      type: Object,
      default: null,
    },
  },
}
</script>
<style lang="scss" scoped>
.description {
  padding: 0 90px;
  margin-bottom: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3 {
    @include h3;
  }
  p {
    @include caption;
    font-weight: 600;
  }
}
</style>
