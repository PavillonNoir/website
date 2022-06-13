<template>
  <div class="cardlist">
    <div class="left-side">
      <div ref="title" class="project-title">
        <h2 class="title">{{ title }}</h2>
        <div>
          <nuxtLink to="/projects" class="link">Featured projects</nuxtLink>
        </div>
      </div>

      <CardsProject
        v-for="(project, index) in leftProjects"
        :key="index"
        :project="project"
        :class="`card-item card-item-${project.id}`"
        direction="right"
      />
    </div>
    <div class="right-side">
      <CardsProject
        v-for="(project, index) in rightProjects"
        :key="index"
        :project="project"
        :class="`card-item card-item-${project.id}`"
      />
    </div>
  </div>
</template>
<script>
import CardsProject from './Project.vue'
export default {
  name: 'CardsLatestProjectList',

  components: {
    CardsProject,
  },
  props: {
    projects: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      projectLeftSide: [],
      projectRightSide: [],
    }
  },
  computed: {
    sizeofArray() {
      return this.projects.length
    },
    leftProjects() {
      return this.projects.slice(0, Math.floor(this.sizeofArray / 2))
    },
    rightProjects() {
      return this.projects.slice(
        Math.floor(this.sizeofArray / 2),
        this.projects.length
      )
    },
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    showFilter() {
      this.showfilter = true
    },
    hideFilter() {
      this.showfilter = false
    },
    handleClick(event) {
      this.showfilter = false
      this.categoryFiltered = event.target.innerText
      if (event.target.innerText === 'All') return this.projects
      this.projectLeftSide = this.projectLeftSide.filter(
        (item) => item.category === event.target.innerText
      )
      this.projectRightSide = this.projectRightSide.filter(
        (item) => item.category === event.target.innerText
      )
    },
    handleScroll() {
      console.log(this.$refs.title.offsetTop)
      if (window.scrollY > 2880) {
        this.$refs.title.classList.add('project-title-fixed')
      } else {
        this.$refs.title.classList.remove('project-title-fixed')
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.cardlist {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1.5rem;
  overflow-x: hidden;
  .left-side {
    display: flex;
    flex-direction: column;
    row-gap: 150px;

    .project-title {
      padding-left: 5.625rem;
      margin-bottom: 7.375rem;
      @include responsive('phone') {
      }
      .title {
        @include h2;
        color: $primary;
        font-weight: 600;
      }
      .link {
        @include link;
        text-decoration: underline;
        transition: all 0.3s ease;
        font-weight: 600;
        &:hover {
          text-decoration: underline !important;
          font-weight: 700;
        }
      }
    }
  }
  .right-side {
    display: grid;
    justify-items: flex-end;
    grid-gap: 150px;
    overflow: hidden !important;
  }
  @include responsive('widescreen') {
    .left-side {
      row-gap: calc(150px * 0.75);
      .project-title {
        padding-left: calc(5.625rem * 0.75);
        margin-bottom: calc(7.375rem * 0.75);
      }
    }
    .right-side {
      grid-gap: calc(150px * 0.75);
    }
  }
  @include responsive('desktop') {
    .left-side {
      row-gap: calc(150px * 0.64);
      .project-title {
        padding-left: calc(5.625rem * 0.64);
        margin-bottom: calc(7.375rem * 0.8);
      }
    }
  }
  @include responsive('tablet') {
    row-gap: calc(150px * 0.51);
    .left-side {
      .project-title {
        padding-left: calc(5.625rem * 0.51);
      }
    }
  }
  @include responsive('phone') {
    grid-template-columns: 1fr;
    grid-gap: 40px;
    .left-side {
      row-gap: 40px;
      margin-top: 5.625rem;
      .project-title {
        padding-left: 1.5625rem;
        margin-bottom: 0;
      }
    }
    .right-side {
      grid-gap: 40px;
    }
  }
  .project-title-fixed {
    opacity: 1 !important;
  }
}
</style>
