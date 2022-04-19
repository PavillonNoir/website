<template>
  <NuxtLink :to="`/projects/${project.slug}`" class="project-link">
    <div class="project">
      <div class="card-image" @mouseover="showFilter" @mouseleave="hideFilter">
        <b-img-lazy
          :src="
            project._embedded['wp:featuredmedia'] &&
            project._embedded['wp:featuredmedia'][0].source_url
          "
          blank="true"
          blank-color="#bbb"
          fluid
          class="project-cover"
          alt="Project featured Image"
        ></b-img-lazy>
        <div
          :class="
            direction === 'right'
              ? 'project-client transform-right'
              : 'project-client transform-left'
          "
          :style="showfilter && 'transform: translateX(0)'"
        >
          <b-img-lazy
            :src="project.acf.logo_client.sizes.medium"
            blank="true"
            fluid
            class="project-client__logo"
            alt="Logo  Client"
          ></b-img-lazy>
        </div>
      </div>
      <div
        :class="
          direction === 'right'
            ? 'project-details right'
            : 'project-details left'
        "
      >
        <h2 class="project-text">
          <span class="project-text__client">{{
            project._embedded['wp:term'][0][0].name
          }}</span
          ><br />
          <span class="project-text__title">{{ project.title.rendered }}</span>
        </h2>
      </div>
    </div>
  </NuxtLink>
</template>
<script>
export default {
  name: 'CardsProject',
  props: {
    project: {
      type: Object,
      required: true,
    },
    direction: {
      type: String,
      default: 'left',
    },
  },
  data() {
    return {
      showfilter: false,
    }
  },
  methods: {
    showFilter() {
      this.showfilter = true
    },
    hideFilter() {
      this.showfilter = false
    },
  },
}
</script>
<style lang="scss" scoped>
.project {
  position: relative;
  margin-bottom: 9.375rem;
  width: 50rem;
  &-cover {
    object-fit: cover;
    max-width: 100%;
  }
  &-details {
    margin-top: 1.25rem;
    &.left {
      text-align: left;
    }
    &.right {
      text-align: right;
    }
    .project-text {
      &__client {
        @include caption;
        font-weight: 300;
        text-transform: uppercase;
      }
      &__title {
        @include h3;
        font-weight: 400 !important;
        font-family: $NoeDisplay;
      }
    }
  }

  .card-image {
    position: relative;
    .project-client {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.5);
      transition: transform 0.3s ease-in-out;
      &__logo {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
      }
      &.transform-left {
        transform: translateX(100%);
      }
      &.transform-right {
        transform: translateX(-100%);
      }
      &.show {
        transform: translateX(0);
      }
    }
  }
  @include responsive('widescreen') {
    margin-bottom: calc(9.375rem * 0.75);
    width: calc(50rem * 0.75);
  }
  @include responsive('desktop') {
    margin-bottom: calc(9.375rem * 0.64);
    width: calc(50rem * 0.64);
  }
  @include responsive('tablet') {
    margin-bottom: calc(9.375rem * 0.51);
    width: calc(50rem * 0.51);
  }
  @include responsive('phone') {
    margin-bottom: calc(9.375rem * 0.4);
    width: 100%;
    &-details {
      padding-left: 1.5rem;
      &.left {
        text-align: left;
      }
      &.right {
        text-align: left;
      }
    }
  }
}
.project-link {
  color: $primary;
}
</style>
