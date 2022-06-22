<template>
  <div>
    <div class="project-container">
      <div class="project-list">
        <CardsProjectList
          :projects="projectToload"
          :description="description"
          :categories="categories"
        />
      </div>
    </div>
    <div class="blockcta">
      <div class="blockcta-items">
        <button class="blockcta-items__link" @click="loadmore">
          {{ loadmoreTitle }}
        </button>
      </div>

      <div class="col-6 line"></div>
      <div class="col-6"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectGalleryPage',
  data() {
    return {
      description: {
        title: 'Filter',
        filter: true,
      },
      loadmoreTitle: 'Load More',
      initialProjects: [],
      categories: [
        'All',
        '360°',
        'Events & XP',
        'Image & Branding',
        'Film & Content',
        'Creative Technology',
        'Social & Influence',
      ],
      numberToShow: 5,
      numberForProjects: 0,
    }
  },
  async fetch() {
    const data = await this.$wp.pages().slug('projects-gallery')

    const projectsArray = data[0].acf.projects
    const projectsID = projectsArray.map((item) => item.project.post_name)
    for (const element of projectsID) {
      const project = await this.$wp.cpt('project').slug(element).embed()
      this.initialProjects.push(project)
    }
  },

  computed: {
    filterProjects() {
      return this.projectToload.filter((project) => {
        if (this.categoryFiltered === 'All') {
          return project
        } else {
          return (
            project.pure_taxonomies.skill &&
            project.pure_taxonomies.skill.find(
              (el) => el.name === this.categoryFiltered
            )
          )
        }
      })
    },
    projectToload() {
      return this.initialProjects.slice(0, this.numberToShow)
    },
  },
  mounted() {
    this.$fetch()
    this.numberForProjects = this.initialProjects.length
  },
  methods: {
    loadmore() {
      if (this.numberToShow < this.numberForProjects) {
        this.numberToShow += 5
      } 
    },
  },
}
</script>
<style lang="scss" scoped>
.project-container {
  padding: 240px 0;
  @media (max-width: 767px) {
    padding: 68px 0;
  }
}
.blockcta {
  &-items {
    display: flex;
    justify-content: center;
    &__link {
      @include link;
      text-decoration: underline;
      margin-bottom: 1.875rem;
    }
  }
  .line {
    height: 7.5rem;
    border-right: 1px solid $grey;
  }
  .blockcta-items__link{
    background-color: transparent;
    border: none;
  }
}
</style>
