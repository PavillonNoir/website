<template>
  <div class="jobs">
    <h2 class="jobs-title">join our crew</h2>
    <div class="jobs-connect__link">
      <a
        v-for="(connectLink, index) in connectLinks"
        :key="index"
        :href="`mailto:${connectLink.mail}`"
        >{{ connectLink.title }}</a
      >
    </div>
    <div class="jobs-posts">
      <nuxtLink
        v-for="(job, index) in jobs"
        :key="index"
        :to="`/jobs/${job.slug}`"
        >{{ job.title.rendered }}
      </nuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  name: 'JobCrew',
  props: {
    jobs: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      connectLinks: [
        {
          title: 'Jobs',
          mail: 'jobs@test.com',
        },
        {
          title: 'Briefs',
          mail: 'Briefs@test.com',
        },
        {
          title: 'Talents',
          mail: 'talents@test.com',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.jobs {
  height: 48.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(/images/bg-jobcrew.webp) no-repeat center center;
  background-size: cover;
  color: $white;
  &-title {
    @include h2;
  }
  &-connect__link {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 60px;
    a {
      @include link;
      margin-right: 30px;
      color: $white;
    }
  }
  &-posts {
    width: 857.5px;

    display: flex;
    flex-direction: column;
    @media (max-width: 767px) {
      width: 100%;
      padding: 24px;
    }
    a {
      @include body;
      color: $white;
      text-align: center;
      border-top: 1px solid $white;
      padding: 20px 0;
      &:last-child {
        border-bottom: 1px solid $white;
      }
    }
  }
}
</style>
