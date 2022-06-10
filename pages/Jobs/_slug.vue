/* eslint-disable vue/no-v-html */
<template>
  <div class="job">
    <main class="single-job d-flex justify-content-between">
      <div v-rellax="{ speed: -15 }" class="col-md-12 col-lg-6 job-infos">
        <p class="sub-title">Jobs</p>
        <h2 class="single-job__title" v-html="job[0].title.rendered"></h2>
        <div
          class="single-job__content-infos"
          v-html="jobAcf.description"
        ></div>
      </div>
      <div  class="col-md-12 col-lg-6">
        <h2
          class="single-job__title transparent"
          v-html="job[0].title.rendered"
        ></h2>
        <div
          class="single-job__content-details"
          v-html="jobAcf.requirements"
        ></div>
        <a href="mailto:jobs@pavillonnoir.com" class="single-job__apply"
          >Apply</a
        >
      </div>
    </main>
    <FooterJobCrew :jobs="jobs" />
  </div>
</template>

<script>
export default {
  name: 'JobsPage',
  async asyncData({ app, params }) {
    const job = await app.$wp.cpt('job').slug(params.slug).embed()
    const jobAcf = await job[0].acf
    let jobs = await app.$wp.cpt('job')
    jobs = jobs.filter((item) => item.slug !== params.slug)
    return { job, jobAcf, jobs }
  },
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
      font-weight: 400;
      color: $primary;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    &-details {
      @include body;
      font-weight: 400;
      color: $primary;
      margin-bottom: 7.5rem;
      letter-spacing: 1px;
    }
    .opacity-none {
      opacity: 0;
      @include responsive('phone') {
        display: none;
      }
    }
  }
  &__apply {
    @include link;
    text-decoration: underline;
  }
  .job-infos {
    flex-direction: column;
    z-index: -1;
    @media (max-width: 768px) {
      position: relative;
    }
  }
  @include responsive('dekstop') {
    padding: calc(19.375rem * 0.75) calc(7.5rem * 0.75) calc(9.375rem * 0.75);
  }
  @include responsive('widescreen') {
    padding: calc(19.375rem * 0.64) calc(7.5rem * 0.64) calc(9.375rem * 0.64);
  }
  @include responsive('tablet') {
    padding: calc(19.375rem * 0.51) calc(7.5rem * 0.51) calc(9.375rem * 0.51);
  }
  @include responsive('phone') {
    padding: calc(19.375rem * 0.36) calc(7.5rem * 0.36) calc(9.375rem * 0.36);
  }
  .transparent {
    opacity: 0;
    margin-top: 30px;
  }
  .sub-title {
    @include body;
    margin-bottom: 30px !important;
  }
}
</style>
