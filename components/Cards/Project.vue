<template>
  <NuxtLink :to="`/projects/${project[0].slug}`" class="project-link">
    <div v-show="project" class="project">
      <div class="card-image" @mouseover="showFilter" @mouseleave="hideFilter">
        <b-img-lazy
          :src="
            (project[0]._embedded['wp:featuredmedia'] &&
              project[0]._embedded['wp:featuredmedia'][0].source_url) ||
            ''
          "
          blank="true"
          blank-color="#bbb"
          fluid
          class="project-cover"
          alt="Featured Image"
        ></b-img-lazy>
        <div
          :class="
            direction === 'right'
              ? 'project-client transform-right'
              : 'project-client transform-left'
          "
          :style="showfilter && 'transform: scale(1)'"
        >
          <b-img-lazy
            :src="project[0].acf.logo_client.sizes.medium"
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
        <div class="project-text">
          <span class="project-text__client">{{
            project[0]._embedded['wp:term'][0][0].name
          }}</span
          ><br />
          <span
            class="project-text__title"
            :style="showfilter && 'text-decoration:underline'"
            @mouseover="showFilter"
            @mouseleave="hideFilter"
            >{{ project[0].title.rendered }}</span
          >
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
<script>
export default {
  name: 'CardsProject',
  props: {
    project: {
      type: Array,
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
      h2 {
        font-size: 0rem;
      }
      &__client {
        @include caption;
        font-weight: 400;
        text-transform: uppercase;
      }
      &__title {
        @include h3;
        font-weight: 600 !important;
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
        @include responsive('phone') {
          transform: scale(0);
        }
      }
      &.transform-right {
        transform: translateX(-100%);
        @include responsive('phone') {
          transform: scale(0);
        }
      }
      &.show {
        transform: translateX(0);
      }
    }
  }
  @include responsive('widescreen') {
    width: calc(50rem * 0.75);
  }
  @include responsive('desktop') {
    width: calc(50rem * 0.64);
  }
  @include responsive('tablet') {
    width: calc(50rem * 0.51);
  }
  @include responsive('phone') {
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
