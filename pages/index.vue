<template>
  <div>
    <HomeHero :cover="cover" />
    <HomeAbout :catchphrase="catchPhrase" />
    <HomeShowreel :showreel="showreel" />
    <HomeLatestNews :projects="projects" />
    <FooterJobCrew :jobs="jobs" />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'default',
  async asyncData({ app }) {
    const data = await app.$wp.pages().slug('home-page')
    const jobs = await app.$wp.cpt('job').embed()
    const cover = await data[0].acf.cover
    const catchPhrase = await data[0].acf.catchphrase
    const latestNews = await data[0].acf.latest_news
    const showreel = await data[0].acf.showreel
    const latestNewsId = latestNews.map((item) => item.project[0].ID)
    const projects = []
    for (let i = 0; i < latestNewsId.length; i++) {
      const project = await app.$wp.cpt('project').id(latestNewsId[i]).embed()
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
