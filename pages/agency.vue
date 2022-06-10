<template>
  <div class="the-agency">
    
      <TheAgencyHero :catchphrase="catchPhrase" />
      <TheAgencySkillsAnd360 :block360="block360" :skills="skills" />
      <TheAgencyTeam :file="teamPhoto" />
      <TheAgencyMembers :teams="teams" />
      <FooterJobCrew :jobs="jobs" />
   
  </div>
</template>
<script>
export default {
  name: 'AgencyPage',
  layout: 'default',
  async asyncData({ app }) {
    const [data, teams, jobs] = await Promise.all([
      app.$wp.pages().slug('the-agency'),
      app.$wp.cpt('team').embed().order('asc'),
      app.$wp.cpt('job').embed(),
    ])
    const catchPhrase = data[0].acf.catchphrase
    const block360 = data[0].acf.block_360
    const skills = data[0].acf.skills
    const teamPhoto = data[0].acf.team_photo
    return {
      catchPhrase,
      block360,
      skills,
      teamPhoto,
      teams,
      jobs,
    }
  },
}
</script>
