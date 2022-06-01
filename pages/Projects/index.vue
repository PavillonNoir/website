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
    <FooterBlockCta />
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
    console.log(projects)
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
</style>
