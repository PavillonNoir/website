<template>
  <section class="single-job">
    <b-row class="job-infos">
      <h2 class="single-job__title">
        {{job[0] && job[0].title.rendered}}
      </h2>
      <ul class="single-job__content-infos">
        <li>Overview</li>
        <li>Plein Temps</li>
        <li>Début : ASAP</li>
        <li>Localisation : Saint Ouen</li>
        <li>Télétravail ponctuel autorisé</li>
        <li>3 à 5 ans EXP</li>
      </ul>
    </b-row>
    <b-row>
      <b-col sm="12" md="6" class="single-job__content"> </b-col>
      <b-col sm="12" md="6" class="single-job__content">
        <h2 class="single-job__title opacity-none">
          Consultant.e <br />
          Social Media
        </h2>

        <p class="single-job__content-details">
          Vous bénéficiez d’une première expérience d’environ 3/4 ans dans un
          poste lié au Social Media en agence de communication, dans un média ou
          chez l’annonceur.<br /><br />
          Vous avez une très bonne connaissance des plateformes sociales
          (Facebook, Instagram, Youtube, TikTok, Twitch, Snap etc), et
          d’excellentes capacités rédactionnelles (style, orthographe,
          synthèse).<br /><br />
          Le Consultant Social Media travaillera en collaboration avec le pôle
          agence de Pavillon Noir. Son rôle sera d’être force de proposition,
          d’épauler et d’encadrer les équipes sur l’ensemble des
          recommandations, être garant du bon déroulé des sujets social media
          ainsi que du suivi client pour des comptes tels que Zalando, Ubisoft,
          Amazon Prime Video, Back Market ou encore Paco Rabanne.<br /><br />
          Qualités personnelles<br />
          - Créatif<br />
          - Rigueur, autonomie<br />
          - Organisation, gestion des priorités<br />
          - Capacité d’adaptation<br />
          - Curiosité pour toutes sortes d’univers<br />- Culture générale
          solide.<br /><br />
          Compétences<br />
          - Analyse<br />
          - Copies stratégiques<br />
          - Capacités rédactionnelles et de synthèse irréprochables<br />
          - Anglais opérationnel<br /><br />
          Tâches<br />
          - Recommandation stratégique social media (France & international)<br />
          - Création, amplification et gestion d’activations social media<br />
          - Social listening, analyse et développement de l’expertise :
          listening, search analytics, média, influence<br />
          - Pilotage des plannings, ads, reportings, community management<br />
          - Suivi, analyse des performances et recommandation d’optimisation<br />
          - Veille sectorielle et tendancielle<br />
          - New business<br />
          - Brief et coordination des ressources créatives internes et
          externes<br />
          - Diffusion, évangélisation, formation au sein de l’agence
        </p>
        <a href="mailto:" class="single-job__apply">Apply</a>
      </b-col>
    </b-row>
  </section>
</template>

<script>
export default {
  name: 'JobsPage',
  async asyncData({app, params}){
    const job = await app.$wp.cpt('job').slug(params.slug).embed()
    return {job}
  }
}
</script>
<style lang="scss" scoped>
.single-job {
  padding: 19.375rem 7.5rem 9.375rem;
  position: relative;

  &__title {
    @include h2;
    margin-bottom: 2.125rem;
  }
  &__content {
    padding: 0;
    &-infos {
      padding: 0;
      @include job-content;
      font-weight: 700;
      color: $primary;
      text-transform: uppercase;
    }
    &-details {
      @include caption;
      font-weight: 600;
      color: $primary;
      margin-bottom: 7.5rem;
      
    }
    .opacity-none {
      opacity: 0;
      @include responsive('phone'){
        display:none;
      }
    }
  }
  &__apply {
    @include link;
    text-decoration: underline;
  }
  .job-infos {
    position: fixed;
    flex-direction: column;
    z-index: -1;
    @media (max-width: 768px) {
      position: relative;
    }
  }
  @include responsive('dekstop'){
    padding: calc(19.375rem*.75) calc(7.5rem*.75) calc(9.375rem*.75); 
  }
  @include responsive('widescreen'){
    padding: calc(19.375rem*.64) calc(7.5rem*.64) calc(9.375rem*.64); 
  }
  @include responsive('tablet'){
    padding: calc(19.375rem*.51) calc(7.5rem*.51) calc(9.375rem*.51); 
  }
  @include responsive('phone'){
    padding: calc(19.375rem*.36) calc(7.5rem*.36) calc(9.375rem*.36); 
  }
}
</style>
