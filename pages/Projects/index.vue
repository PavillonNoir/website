<template>
  <div>
    <div class="project-container">
      <div class="project-list">
        <CardsProjectList
          :projects="projects"
          title="Featured Projects"
          :description="description"
        />
      </div>
    </div>
    <div class="blockcta">
      <div class="blockcta-items">
        <a href="#" class="blockcta-items__link">Back to Top</a>
      </div>

      <div class="col-6 line"></div>
      <div class="col-6"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectGalleryPage',
  async asyncData({ app }) {
    const data = await app.$wp.pages().slug('projects-gallery')

    const projectsArray = data[0].acf.projects
    const projectsID = projectsArray.map((item) => item.project.post_name)
    const projects = []
    for (const element of projectsID) {
      const project = await app.$wp.cpt('project').slug(element).embed()
      projects.push(project)
    }

    return {
      projects,
    }
  },
  // async fetch(){

  // } ,

  data() {
    return {
      description: {
        title: 'Filter',
        filter: true,
        link: '',
      },
    }
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
}
</style>
