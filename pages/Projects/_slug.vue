<template>
  <div class="single-project">
    <div class="single-project__cover">
      <h2 class="single-project__cover-title">
        Le Sillage<br />
        de la Mémoire
      </h2>
    </div>
    <b-row class="single-project-content justify-content-between">
      <b-col
        md="12"
        lg="6"
        class="single-project-content__description d-flex flex-column justify-content-between"
      >
        <h2 class="sub-title">A multi-sensory experience</h2>
        <p class="summary">
          Amazed by the installation “the silence of particles” by artist
          Guillaume cousin, Pavillon Noir teamed up with Firmenich, the Magique
          Studio and Nuit Noire to make it a multi-sensory experience for the
          Nuit Blanche.
        </p>
      </b-col>
      <b-col md="12" lg="2"></b-col>
      <b-col md="12" lg="4" class="single-project-content__meta">
        <div class="client">
          <h3>Client</h3>
          <p>NUIT BLANCHE</p>
        </div>
        <div class="Expertises">
          <h3>Expertises</h3>
          <p>
            <span>Art Direction</span>
            <span>Scenography</span>
            <span>Production</span>
          </p>
        </div>
        <div class="Partenaires">
          <h3>Partners</h3>
          <p>
            <span>FIRMENICH</span>
            <span>MAGIQUE</span>
            <span>NUIT NOIR</span>
            <span>GUILLAUME COUSIN</span>
          </p>
        </div>
      </b-col>
    </b-row>
    <div class="project-block">
      <BlocksFourImages />
      <BlocksDescription />
      <BlocksVideo />
      <BlocksThreeImages />
      <BlocksTwoVideo />
      <BlocksSliderImage />
    </div>
    <FooterBlockCta title="See More Project" link="/projects"></FooterBlockCta>
  </div>
</template>
<script>
export default {
  name: 'SingleProject',
}
</script>
<style lang="scss">
.single-project {
  &__cover {
    background-image: url(/sillage-noir.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1080px;
    &-title {
      @include h2;
      color: $white;
      text-align: center;
    }
  }
  &-content {
    padding: 150px 90px;
    margin: 0;
    .sub-title {
      @include h3;
      font-weight: 500;
    }
    .summary {
      @include caption;
      font-weight: 600;
    }
    &__meta {
      text-transform: uppercase;
      font-weight: 600;
      h3 {
        @include caption;
        font-weight: 600;
      }
      p {
        @include caption;
        margin-bottom: 1.25rem;
      }
    }
  }
  .project-block {
    margin-bottom: 150px;
  }
}
</style>
