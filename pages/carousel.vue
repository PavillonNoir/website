<template>
  <div class="carousel">
    <carousel v-bind="options">
      <slide v-for="i in 5" :key="i" class="img-wrapper">
        <img
          src="https://preprod.pavillonnoir.com/wp-content/uploads/2022/04/C22802_FW20_ACVxRBK_KV_ZIG_1920x1080px_NOLOGO.jpg"
        />
      </slide>
    </carousel>
  </div>
</template>

<script>
export default {
  name: 'CarouselPage',
  data() {
    return {
      options: {
        loop: true,
        perPage: 3,
        paginationEnabled: false,
      },
    }
  },
}
</script>
