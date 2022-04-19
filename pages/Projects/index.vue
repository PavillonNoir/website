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
    const projects = await app.$wp.cpt('project').embed()

    return {
      projects,
    }
  },

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
    padding: 68px 24px;
  }
}
</style>
