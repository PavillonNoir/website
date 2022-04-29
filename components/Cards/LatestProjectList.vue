<template>
  <div class="cardlist">
    <div class="left-side">
      <div class="project-title">
        <h2 class="title">{{ title }}</h2>
        <div>
          <nuxtLink to="/projects" class="link">Featured project</nuxtLink>
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
      showfilter: false,
      categoryFiltered: 'All',
      categories: [
        'All',
        '360°',
        'Events & XP',
        'Image & Branding',
        'Film & Content',
        'Creative Technology',
        'Social & Influence',
      ],
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
    .project-title {
      margin-bottom: 16.75rem;
      padding-left: 5.625rem;
      .title {
        @include h2;
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
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  @include responsive('widescreen') {
    .left-side {
      .project-title {
        margin-bottom: cac(16.75rem * 0.75);
        padding-left: calc(5.625rem * 0.75);
      }
    }
  }
  @include responsive('desktop') {
    .left-side {
      .project-title {
        margin-bottom: cac(16.75rem * 0.64);
        padding-left: calc(5.625rem * 0.64);
      }
    }
  }
  @include responsive('tablet') {
    .left-side {
      .project-title {
        margin-bottom: cac(16.75rem * 0.51);
        padding-left: calc(5.625rem * 0.51);
      }
    }
  }
  @include responsive('phone') {
    grid-template-columns: 1fr;
    .left-side {
      .project-title {
        margin-bottom: 4.25rem;
        padding-left: 1.5625rem;
      }
    }
  }
}
</style>
