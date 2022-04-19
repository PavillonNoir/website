<template>
  <div class="project-container">
    <div class="project-list">
      <CardsProjectList
        :projects="projects"
        title="Latest News"
        :description="description"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeLatestNews',
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      projectsArray: [
        {
          id: 1,
          client: 'Zalando / optimism',
          title: 'Activists of Optimism',
          logo: '/clients/Zalando-Logo.png',
          featured_image:
            'https://pavillon-noir-site.kinshasadigital.com/wp-content/uploads/2022/03/zalando.png',
          featured: true,
          link: '/agency',
        },

        {
          id: 2,
          client: 'Backmarket /we love green',
          title: 'Fuck New',
          logo: '/clients/backMarket-Logo.png',
          featured_image:
            'https://pavillon-noir-site.kinshasadigital.com/wp-content/uploads/2022/03/blackmarket.png',
          featured: true,
          link: '/agency',
        },

        {
          id: 3,
          client: 'nuit blanche 2020',
          title: 'Le Sillage de la Mémoire',
          logo: '/clients/pavillon-noir.png',
          featured_image:
            'https://pavillon-noir-site.kinshasadigital.com/wp-content/uploads/2022/04/nuit-blanche.png',
          featured: true,
          link: '/agency',
        },
        {
          id: 4,
          client: 'Porshe',
          title: 'Electric Gets Real',
          logo: '/clients/porshe.png',
          featured_image:
            'https://pavillon-noir-site.kinshasadigital.com/wp-content/uploads/2022/04/porshe.png',
          featured: true,
          link: '/agency',
        },
        {
          id: 5,
          client: 'GET 27 / GET FRESH',
          title: 'The Freshest Street',
          logo: '/clients/Get-Logo.png',
          featured_image:
            'https://pavillon-noir-site.kinshasadigital.com/wp-content/uploads/2022/03/get27.png',
          featured: true,
          link: '/agency',
        },
      ],
      description: {
        title: 'Featured projects',
        filter: false,
        link: '/projects',
        categories: [],
      },
    }
  },
}
</script>
<style lang="scss" scoped>
.project-container {
  padding: 15rem 0;
  @include responsive('widescreen') {
    padding: calc(15rem * 0.75) 0;
  }
  @include responsive('desktop') {
    padding: calc(15rem * 0.64) 0;
  }
  @include responsive('tablet') {
    padding: calc(15rem * 0.51) 0;
  }
  @include responsive('phone') {
    padding: calc(15rem * 0.35) 0;
  }
}
</style>
