<template>
  <div class="project-contaoner">
    <div class="cardlist">
      <div class="left-side">
        <div
          ref="title"
          v-rellax="{ speed: -10 }"
          :class="showfilter ? ' project-title' : ' project-title'"
        >
          <h2 class="title desktop">Featured Projects</h2>
          <h2 class="title mobile">Featured <br />Projects</h2>
          <div @mouseleave="hideFilter">
            <div v-b-hover="showFilter" class="link">
              {{ description.title }}
              {{ description.filter ? `- ${categoryFiltered}` : '' }}
            </div>
            <ul :class="showfilter ? 'project-filter show' : 'project-filter'">
              <li
                v-for="(category, index) in categories"
                :key="index"
                @click="handleClick"
              >
                {{ category }}
              </li>
            </ul>
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
  </div>
</template>
<script>
import CardsProject from './Project.vue'
export default {
  name: 'CardsProjectList',

  components: {
    CardsProject,
  },
  props: {
    projects: {
      type: Array,
      required: true,
    },

    description: {
      type: Object,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      projectLeftSide: [],
      projectRightSide: [],
      InitialProjects: [...this.projects],
      showfilter: false,
      categoryFiltered: 'All',
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
      if (window.scrollY > 400) {
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
      margin-bottom: 7rem;

      .title {
        @include h2;
        &.desktop {
          @include responsive('phone') {
            display: none !important;
          }
        }
        &.mobile {
          @media (min-width: 768px) {
            display: none;
          }
        }
      }
      .link {
        @include link;
        text-decoration: none;
        transition: all 0.3s ease;
        :hover {
          text-decoration: underline !important;
        }
      }
      .project-filter {
        opacity: 0;
        height: 0;
        padding: 0;

        &.show {
          opacity: 1;
          transition: all 0.5s ease;
        }
        li {
          @include link;
          cursor: pointer;
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
      }
    }
    .right-side {
      grid-gap: 40px;
    }
  }
}
.project-title-fixed {
  opacity: 0 !important;
}

.no-projects-found {
  h2 {
    @include h2;
    text-align: center;
  }
}
.load-more {
  a {
    @include link;
    text-align: center;
    cursor: pointer;
  }
}
</style>
