<template>
  <div>
    <LazyHydrate when-idle>
      <HomeHero :cover="cover" />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <HomeAbout :catchphrase="catchPhrase" />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <HomeShowreel :showreel="showreel" />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <HomeLatestNews :projects="projects" />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <FooterJobCrew :jobs="jobs" />
    </LazyHydrate>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
export default {
  name: 'IndexPage',
  components: {
    LazyHydrate,
    HomeHero: () => import('@/components/Home/Hero.vue'),
    HomeAbout: () => import('@/components/Home/About.vue'),
    HomeShowreel: () => import('@/components/Home/Showreel.vue'),
    HomeLatestNews: () => import('@/components/Home/LatestNews.vue'),
    FooterJobCrew: () => import('@/components/Footer/JobCrew.vue'),
  },
  async asyncData({ app }) {
    const data = await app.$wp.pages().slug('home-page')
    const jobs = await app.$wp.cpt('job').embed()
    const cover = await data[0].acf.cover
    const catchPhrase = await data[0].acf.catchphrase
    const latestNews = await data[0].acf.latest_news
    const showreel = await data[0].acf.showreel
    
    const latestNewsId = latestNews.map((item) => item.project[0].ID)
    const projects = []
    for (const element of latestNewsId) {
      const project = await app.$wp.cpt('project').id(element).embed()
      projects.push(project)
    }

    return {
      cover,
      catchPhrase,
      projects,
      showreel,
      jobs,
    }
  },
}
</script>
