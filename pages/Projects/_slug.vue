<template>
  <div v-show="projectDetail" class="single-project">
    <div v-show="projectDetail.acf.cover.type === 'image'" class="cover-image">
      <LazyHydrate when-idle>
        <div
          class="single-project__cover desktop"
          :style="`background-image: url(${
            projectDetail.acf.cover &&
            projectDetail.acf.cover.image.paysage.sizes.large
          });`"
        >
          <h2 class="single-project__cover-title">
            {{ projectDetail.title.rendered || 'Project title' }}
          </h2>
        </div>
      </LazyHydrate>
      <LazyHydrate when-visible>
        <div
          class="single-project__cover mobile"
          :style="`'background-image': url(${
            projectDetail.acf.cover &&
            projectDetail.acf.cover.image.portrait.sizes.large
          });`"
        >
          <h2 class="single-project__cover-title">
            {{ projectDetail.title.rendered }}
          </h2>
        </div>
      </LazyHydrate>
    </div>
    <div v-show="projectDetail.acf.cover.type === 'video'" class="cover-video">
      <LazyHydrate when-idle>
        <div class="single-project__cover-video desktop">
          <video preload="true" playsinline autoplay muted loop>
            <source
              :src="projectDetail.acf.cover.video.paysage.url"
              type="video/mp4"
            />
            <track kind="captions" label="English" default />
          </video>
          <h2 class="single-project__cover-video-title">
            {{ projectDetail.title.rendered || 'Project title' }}
          </h2>
        </div>
      </LazyHydrate>
      <LazyHydrate when-visible>
        <div class="single-project__cover-video mobile">
          <video preload="true" playsinline autoplay muted loop>
            <source
              :src="projectDetail.acf.cover.video.portrait.url"
              type="video/mp4"
            />
            <track kind="captions" label="English" default />
          </video>

          <h2 class="single-project__cover-video-title">
            {{ projectDetail.title.rendered }}
          </h2>
        </div>
      </LazyHydrate>
    </div>

    <LazyHydrate when-visible>
      <b-row class="single-project-content justify-content-between">
        <b-col
          md="12"
          lg="6"
          class="single-project-content__description d-flex flex-column justify-content-between"
        >
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div
            class="sub-title"
            v-html="
              (projectDetail.acf.description &&
                projectDetail.acf.description.subtitle.paysage) ||
              'subtitle'
            "
          ></div>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div
            class="summary"
            v-html="
              (projectDetail.acf.description &&
                projectDetail.acf.description.summary.paysage) ||
              'Summary'
            "
          ></div>
        </b-col>
        <b-col md="12" lg="2"></b-col>
        <b-col md="12" lg="4" class="single-project-content__meta">
          <div class="client">
            <h3>Client</h3>
            <p>
              {{
                projectDetail.pure_taxonomies.client &&
                projectDetail.pure_taxonomies.client[0].name
              }}
            </p>
          </div>
          <div class="Expertises">
            <h3>Expertises</h3>
            <p>
              <span
                v-for="expertise in projectDetail.pure_taxonomies.expertise"
                :key="expertise.term_id"
                >{{ htmlEncode(expertise.name) }}
              </span>
            </p>
          </div>
          <div class="Partenaires">
            <h3>Partners</h3>
            <p>
              <span
                v-for="partner in projectDetail.pure_taxonomies.partner"
                :key="partner.term_id"
                >{{ partner.name }}
              </span>
            </p>
          </div>
        </b-col>
      </b-row>
    </LazyHydrate>
    <LazyHydrate when-visible>
      <div class="project-block">
        <div>
          <component
            :is="type(block.acf_fc_layout)"
            v-for="(block, index) in projectDetail.acf.projects_blocks"
            :key="index"
            :block="block"
          ></component>
        </div>
      </div>
    </LazyHydrate>
    <FooterBlockCta title="See More Project" link="/projects"></FooterBlockCta>
  </div>
</template>
<script>
import LazyHydrate from 'vue-lazy-hydration'
export default {
  name: 'SingleProject',
  components: {
    LazyHydrate,

    BlocksDescription: () => import('@/components/Blocks/Description'),
    BlocksContent: () => import('@/components/Blocks/Content'),
    BlocksTwoContent: () => import('@/components/Blocks/TwoContent'),
    BlocksThreeContent: () => import('@/components/Blocks/ThreeContent'),
    BlocksSliderImage: () => import('@/components/Blocks/SliderImage'),
  },
  async asyncData({ app, params }) {
    const project = await app.$wp.cpt('project').slug(params.slug).embed()
    const projectDetail = project[0]
    return { projectDetail }
  },
  data() {
    return {
      projectstyles: {},
    }
  },

  methods: {
    type(block) {
      if (block === 'block_text') {
        return 'BlocksDescription'
      }
      if (block === 'bloc_1_contenu') {
        return 'BlocksContent'
      }
      if (block === 'bloc_2_contenu') {
        return 'BlocksTwoContent'
      }
      if (block === 'bloc_3_contenu') {
        return 'BlocksThreeContent'
      }
      if (block === 'bloc_slider') {
        return 'BlocksSliderImage'
      }
    },
    htmlEncode(str) {
      return str.replace(/&amp;/g, '&')
    },
  },
}
</script>
<style lang="scss">
.single-project {
  &__cover {
    position: relative;
    background-size: cover;
    background-color: $primary;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.25);
    }

    @include responsive('phone') {
      height: 667px;
      display: none;
    }
    &.mobile {
      @media (min-width: 768px) {
        display: none;
      }
      @include responsive('phone') {
        display: flex;
        align-items: center;
      }
    }
    &-title {
      @include h2;
      color: $white;
      text-align: center;
      z-index: 999;
    }
  }
  &__cover-video {
    position: relative;
    background-color: $primary;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    video {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.25);
    }
    &-title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      @include h2;
      color: $white;
      text-align: center;
      z-index: 999;
    }
    @include responsive('phone') {
      height: 667px;
      display: none;
    }
    &.mobile {
      @media (min-width: 768px) {
        display: none;
      }
      @include responsive('phone') {
        display: flex;
        align-items: center;
      }
    }
  }
  &-content {
    padding: 9.375rem 5.625rem;
    @include responsive('desktop') {
      padding: calc(9.375rem * 0.75) calc(5.625rem * 0.75);
    }
    @include responsive('widescreen') {
      padding: calc(9.375rem * 0.64) calc(5.625rem * 0.64);
    }
    @include responsive('tablet') {
      padding: calc(9.375rem * 0.51) calc(5.625rem * 0.51);
    }
    @include responsive('phone') {
      padding: calc(9.375rem * 0.36) calc(5.625rem * 0.36);
    }
    margin: 0;
    .sub-title {
      @include h3;
      font-weight: 600;
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
        span {
          position: relative;
          &::after {
            content: ',';
          }
          &:last-child {
            &::after {
              content: '';
            }
          }
        }
      }
    }
  }
  .project-block {
    margin-bottom: 9.375rem;
  }
}
</style>
