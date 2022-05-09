<template>
  <div class="__error">
    <h1 class="title">
      {{ error.statusCode === '500' ? 'Error' : error.statusCode }}
    </h1>
    <h2 class="subtitle">{{ error.message }}</h2>
    <NuxtLink class="link" to="/">BACK TO HOME</NuxtLink>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'ErrorSection',
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.__error {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0;
  margin: 0;
  background-color: $white;
  color: $primary;
  .title {
    @include h1;
    margin-bottom: 30px;
  }
  .subtitle {
    @include h3;
    margin-bottom: 30px;
  }
  .link {
    @include link;
    color: $primary;
    margin-bottom: 30px;
  }
}
</style>
>
