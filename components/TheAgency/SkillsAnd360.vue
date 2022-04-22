<template>
  <section class="the-agency-skills">
    <div class="skills-and-360">
      <div
        class="skills-and-360__content-360 d-flex justify-content-between flex-wrap"
      >
        <b-col md="12" lg="4" class="skills-and-360__content-360-title">
          <h2 class="title text-light">360°</h2>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div
            class="description text-light"
            v-html="block360.title.paysage"
          ></div>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div
            class="description text-light description-portrait"
            v-html="block360.title.paysage"
          ></div>
        </b-col>
        <b-col
          md="12"
          lg="8"
          class="activities-content d-flex justify-content-lg-around align-items-lg-end align-items-md-center"
        >
          <div
            v-for="(activity, index) in block360.images"
            :key="index"
            class="content"
          >
            <b-img-lazy
              :src="activity.file"
              alt="360° illustration"
              class="content-image"
              width="133.76px"
              height="133.76px"
            />
            <p class="text-center text-light">{{ activity.caption }}</p>
          </div>
        </b-col>
      </div>
      <div
        class="skills-and-360__content-360 spacing d-flex flex-wrap justify-content-between"
      >
        <b-col md="12" lg="4" class="skills-and-360__content-360-title">
          <h2 class="title text-light">Our Skills</h2>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div
            class="description text-light"
            v-html="skills.title.paysage"
          ></div>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div
            class="description text-light description-portrait"
            v-html="skills.title.paysage"
          ></div>
        </b-col>
        <b-col md="12" lg="5" class="skills-and-360__content-360-content">
          <div class="skill-svg">
            <svg
              class="skill-svg-item"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="300"
              height="400"
              viewBox="0 0 650 695.688"
            >
              <defs>
                <clipPath id="clip-path">
                  <rect
                    id="Rectangle_115"
                    data-name="Rectangle 115"
                    width="800"
                    height="695.688"
                    fill="#222"
                  />
                </clipPath>
              </defs>
              <g
                id="Groupe_402"
                data-name="Groupe 402"
                transform="translate(0 -0.001)"
              >
                <g
                  id="Groupe_400"
                  data-name="Groupe 400"
                  transform="translate(0 0.001)"
                  clip-path="url(#clip-path)"
                >
                  <path
                    id="second"
                    data-name="Tracé 220"
                    d="M121.329,171.431l97.747,58.9c41.932,25.142,34.2,58.369,32.271,64.693-.218.706-.352,1.058-.352,1.058l10.1-8.773a112.742,112.742,0,0,1,39.569-18.467c30.357-7.581,51.593-.167,54.543.957-2.381-2.062-18.917-17.326-26.534-47.668a112.442,112.442,0,0,1-2.33-43.594l2.986-13.049s-.253.286-.772.822c-4.679,4.682-30.342,27.139-72.274,1.979l-64.636-38.955Z"
                    transform="translate(240.233 256.078)"
                    fill="#222"
                  />

                  <path
                    id="first"
                    data-name="Tracé 221"
                    d="M226.607,76.213S201.56,71.492,177.7,47.628,150.39,0,150.39,0s-3.442,23.769-27.3,47.629S74.176,76.213,74.176,76.213s25.047,4.723,48.911,28.587,27.3,47.629,27.3,47.629l.051-.3c.495-2.837,4.971-25.041,27.255-47.325,23.864-23.864,48.911-28.587,48.911-28.587"
                    transform="translate(146.869 -0.002)"
                    fill="#222"
                  />

                  <path
                    id="third"
                    data-name="Tracé 222"
                    d="M226.607,258.516S201.56,253.8,177.7,229.931,150.39,182.3,150.39,182.3s-3.442,23.769-27.3,47.629-48.911,28.584-48.911,28.584,25.047,4.72,48.911,28.584,27.3,47.629,27.3,47.629l.051-.3c.495-2.837,4.971-25.041,27.255-47.326,23.864-23.864,48.911-28.584,48.911-28.584"
                    transform="translate(146.869 360.959)"
                    fill="#222"
                  />
                  <path
                    id="forth"
                    data-name="Tracé 223"
                    d="M136.131,391.916l179.73-107.534L496.515,175.517c41.932-25.154,67.6-2.7,72.274,1.985.516.53.772.82.772.82l-2.989-13.052a112.347,112.347,0,0,1,2.339-43.592c7.6-30.351,24.15-45.606,26.525-47.671-2.941,1.12-24.192,8.541-54.549.954A112.43,112.43,0,0,1,501.328,56.5l-10.105-8.782s.134.364.361,1.067c1.928,6.33,9.655,39.545-32.28,64.7L278.653,222.347,98.922,329.881c-41.935,25.151-67.6,2.7-72.274-1.985-.519-.53-.772-.819-.772-.819l2.989,13.049a112.461,112.461,0,0,1-2.339,43.592C18.924,414.069,2.376,429.327,0,431.392c2.941-1.123,24.192-8.541,54.546-.954A112.407,112.407,0,0,1,94.107,448.9l10.105,8.782s-.134-.361-.358-1.067c-1.931-6.327-9.658-39.545,32.276-64.7"
                    transform="translate(0.002 94.478)"
                    fill="#222"
                  />

                  <path
                    id="fifth"
                    data-name="Tracé 224"
                    d="M233.874,172.37l-97.747-58.9C94.2,88.328,101.928,55.1,103.856,48.777c.218-.706.352-1.058.352-1.058l-10.1,8.773A112.742,112.742,0,0,1,54.543,74.959C24.186,82.54,2.95,75.126,0,74c2.381,2.062,18.917,17.326,26.534,47.668a112.441,112.441,0,0,1,2.33,43.595l-2.986,13.049s.253-.286.772-.822c4.679-4.682,30.342-27.139,72.274-1.979l64.636,38.955Z"
                    transform="translate(0 94.484)"
                    fill="#222"
                  />
                </g>
              </g>
            </svg>
            <div class="skill-content">
              <svg
                class="skill-icon"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="500"
                height="450"
                viewBox="0 0 800 776"
              >
                <defs>
                  <clipPath id="clip-path">
                    <rect
                      id="Rectangle_115"
                      data-name="Rectangle 115"
                      width="595.439"
                      height="695.688"
                      fill="#222"
                    />
                  </clipPath>
                </defs>
                <g
                  id="Groupe_411"
                  data-name="Groupe 411"
                  transform="translate(-590 -1885)"
                >
                  <g
                    id="Groupe_402"
                    data-name="Groupe 402"
                    transform="translate(659.493 1927.771)"
                  >
                    <g
                      id="Groupe_400"
                      data-name="Groupe 400"
                      transform="translate(0 0.001)"
                      clip-path="url(#clip-path)"
                    >
                      <path
                        id="Tracé_220"
                        data-name="Tracé 220"
                        d="M121.329,171.431l97.747,58.9c41.932,25.142,34.2,58.369,32.271,64.693-.218.706-.352,1.058-.352,1.058l10.1-8.773a112.742,112.742,0,0,1,39.569-18.467c30.357-7.581,51.593-.167,54.543.957-2.381-2.062-18.917-17.326-26.534-47.668a112.442,112.442,0,0,1-2.33-43.594l2.986-13.049s-.253.286-.772.822c-4.679,4.682-30.342,27.139-72.274,1.979l-64.636-38.955Z"
                        transform="translate(240.233 256.078)"
                        fill="#222"
                      />
                      <path
                        id="Tracé_221"
                        data-name="Tracé 221"
                        d="M226.607,76.213S201.56,71.492,177.7,47.628,150.39,0,150.39,0s-3.442,23.769-27.3,47.629S74.176,76.213,74.176,76.213s25.047,4.723,48.911,28.587,27.3,47.629,27.3,47.629l.051-.3c.495-2.837,4.971-25.041,27.255-47.325,23.864-23.864,48.911-28.587,48.911-28.587"
                        transform="translate(146.869 -0.002)"
                        fill="#222"
                      />
                      <path
                        id="Tracé_222"
                        data-name="Tracé 222"
                        d="M226.607,258.516S201.56,253.8,177.7,229.931,150.39,182.3,150.39,182.3s-3.442,23.769-27.3,47.629-48.911,28.584-48.911,28.584,25.047,4.72,48.911,28.584,27.3,47.629,27.3,47.629l.051-.3c.495-2.837,4.971-25.041,27.255-47.326,23.864-23.864,48.911-28.584,48.911-28.584"
                        transform="translate(146.869 360.959)"
                        fill="#222"
                      />
                      <path
                        id="Tracé_223"
                        data-name="Tracé 223"
                        d="M136.131,391.916l179.73-107.534L496.515,175.517c41.932-25.154,67.6-2.7,72.274,1.985.516.53.772.82.772.82l-2.989-13.052a112.347,112.347,0,0,1,2.339-43.592c7.6-30.351,24.15-45.606,26.525-47.671-2.941,1.12-24.192,8.541-54.549.954A112.43,112.43,0,0,1,501.328,56.5l-10.105-8.782s.134.364.361,1.067c1.928,6.33,9.655,39.545-32.28,64.7L278.653,222.347,98.922,329.881c-41.935,25.151-67.6,2.7-72.274-1.985-.519-.53-.772-.819-.772-.819l2.989,13.049a112.461,112.461,0,0,1-2.339,43.592C18.924,414.069,2.376,429.327,0,431.392c2.941-1.123,24.192-8.541,54.546-.954A112.407,112.407,0,0,1,94.107,448.9l10.105,8.782s-.134-.361-.358-1.067c-1.931-6.327-9.658-39.545,32.276-64.7"
                        transform="translate(0.002 94.478)"
                        fill="#222"
                      />
                      <path
                        id="Tracé_224"
                        data-name="Tracé 224"
                        d="M233.874,172.37l-97.747-58.9C94.2,88.328,101.928,55.1,103.856,48.777c.218-.706.352-1.058.352-1.058l-10.1,8.773A112.742,112.742,0,0,1,54.543,74.959C24.186,82.54,2.95,75.126,0,74c2.381,2.062,18.917,17.326,26.534,47.668a112.441,112.441,0,0,1,2.33,43.595l-2.986,13.049s.253-.286.772-.822c4.679-4.682,30.342-27.139,72.274-1.979l64.636,38.955Z"
                        transform="translate(0 94.484)"
                        fill="#222"
                      />
                    </g>
                  </g>
                  <g
                    id="PN_Cross_Creative_Tech"
                    data-name="PN Cross – Creative Tech"
                    transform="translate(1021.055 2313.182)"
                    :class="{ active: skills.content[5].title == skillText }"
                  >
                    <text
                      id="Creative_Tech"
                      class="skill-text"
                      data-name="Creative Tech"
                      transform="translate(128.945 204.818)"
                      fill="#fff"
                      font-size="18"
                      font-family="IBMPlexMono-Bold, IBM Plex Mono"
                      letter-spacing="0.01em"
                      font-weight="700"
                      @click="getSkillText(skills.content[5])"
                    >
                      <tspan x="0" y="0">{{ skills.content[5].title }}</tspan>
                    </text>
                    <path
                      id="Tracé_225"
                      data-name="Tracé 225"
                      d="M121.329,171.431l97.747,58.9c41.932,25.142,34.2,58.369,32.271,64.693-.218.706-.352,1.058-.352,1.058l10.1-8.773a112.742,112.742,0,0,1,39.569-18.467c30.357-7.581,51.593-.167,54.543.957-2.381-2.062-18.917-17.326-26.534-47.668a112.442,112.442,0,0,1-2.33-43.594l2.986-13.049s-.253.286-.772.822c-4.679,4.682-30.342,27.139-72.274,1.979l-64.636-38.955Z"
                      transform="translate(-121.329 -129.332)"
                      fill="#222"
                    />
                  </g>
                  <g
                    id="PN_Cross_Image_Branding"
                    data-name="PN Cross – Image &amp; Branding"
                    transform="translate(591 2027)"
                    :class="{ active: skills.content[1].title == skillText }"
                  >
                    <text
                      id="Image_Branding"
                      class="skill-text"
                      data-name="Image &amp; Branding"
                      transform="translate(175 18)"
                      fill="#fff"
                      font-size="18"
                      font-family="IBMPlexMono-Bold, IBM Plex Mono"
                      letter-spacing="0.01em"
                      font-weight="700"
                      @click="getSkillText(skills.content[1])"
                    >
                      <tspan x="-175.5" y="0">
                        {{ skills.content[1].title }}
                      </tspan>
                    </text>
                    <path
                      id="Tracé_226"
                      data-name="Tracé 226"
                      d="M233.874,172.37l-97.747-58.9C94.2,88.328,101.928,55.1,103.856,48.777c.218-.706.352-1.058.352-1.058l-10.1,8.773A112.742,112.742,0,0,1,54.543,74.959C24.186,82.54,2.95,75.126,0,74c2.381,2.062,18.917,17.326,26.534,47.668a112.441,112.441,0,0,1,2.33,43.595l-2.986,13.049s.253-.286.772-.822c4.679-4.682,30.342-27.139,72.274-1.979l64.636,38.955Z"
                      transform="translate(68.493 -4.744)"
                      fill="#222"
                    />
                  </g>
                  <g
                    id="PN_Cross_Events"
                    data-name="PN Cross – Events"
                    transform="translate(645 2313.182)"
                    :class="{ active: skills.content[4].title == skillText }"
                  >
                    <text
                      id="Events_XP"
                      class="skill-text"
                      data-name="Events &amp; XP"
                      transform="translate(121 204.818)"
                      fill="#fff"
                      font-size="18"
                      font-family="IBMPlexMono-Bold, IBM Plex Mono"
                      letter-spacing="0.01em"
                      font-weight="700"
                      @click="getSkillText(skills.content[4])"
                    >
                      <tspan x="-120.6" y="0">
                        {{ skills.content[4].title }}
                      </tspan>
                    </text>
                    <path
                      id="Tracé_227"
                      data-name="Tracé 227"
                      d="M233.874,171.431l-97.747,58.9c-41.932,25.142-34.2,58.369-32.271,64.693.218.706.352,1.058.352,1.058l-10.1-8.773a112.742,112.742,0,0,0-39.569-18.467C24.186,261.26,2.95,268.674,0,269.8c2.381-2.062,18.917-17.326,26.534-47.668a112.441,112.441,0,0,0,2.33-43.594l-2.986-13.049s.253.286.772.822c4.679,4.682,30.342,27.139,72.274,1.979l64.636-38.955Z"
                      transform="translate(14.493 -129.332)"
                      fill="#222"
                    />
                  </g>
                  <g
                    id="PN_Cross_Experts"
                    data-name="PN Cross – Experts"
                    transform="translate(865 2471.032)"
                    :class="{ active: skills.content[6].title == skillText }"
                  >
                    <text
                      id="Experts_Talents"
                      class="skill-text"
                      data-name="Experts &amp; Talents"
                      transform="translate(93 184.968)"
                      fill="#fff"
                      font-size="18"
                      font-family="IBMPlexMono-Bold, IBM Plex Mono"
                      letter-spacing="0.01em"
                      opacity="0.998"
                      font-weight="700"
                      @click="getSkillText(skills.content[6])"
                    >
                      <tspan x="-93.24" y="0">
                        {{ skills.content[6].title }}
                      </tspan>
                    </text>
                    <path
                      id="Tracé_231"
                      data-name="Tracé 231"
                      d="M226.607,258.516S201.56,253.8,177.7,229.931,150.39,182.3,150.39,182.3s-3.442,23.769-27.3,47.629-48.911,28.584-48.911,28.584,25.047,4.72,48.911,28.584,27.3,47.629,27.3,47.629l.051-.3c.495-2.837,4.971-25.041,27.255-47.326,23.864-23.864,48.911-28.584,48.911-28.584"
                      transform="translate(-58.638 -182.302)"
                      fill="#222"
                    />
                  </g>
                  <g
                    id="PN_Cross_Mkt"
                    data-name="PN Cross – Mkt"
                    transform="translate(848 2232.364)"
                    :class="{ active: skills.content[3].title == skillText }"
                  >
                    <path
                      id="Tracé_229"
                      data-name="Tracé 229"
                      d="M147.092,102.212,76.278,144.731l70.814,42.519,70.817-42.519Z"
                      transform="translate(-37.476 -102.212)"
                      fill="#222"
                    />
                    <text
                      id="Marketing_Strategy"
                      :class="{
                        'd-none': skills.content[3].title == skillText,
                      }"
                      data-name="Marketing &amp; Strategy"
                      transform="translate(110 47.635)"
                      fill="#fff"
                      font-size="18"
                      font-family="IBMPlexMono-Bold, IBM Plex Mono"
                      letter-spacing="0.01em"
                      font-weight="700"
                      @click="getSkillText(skills.content[3])"
                    >
                      <tspan x="-109.71" y="0">
                        {{ skills.content[3].title }}
                      </tspan>
                    </text>
                  </g>
                  <g
                    id="PN_Cross_Film"
                    data-name="PN Cross – Film"
                    transform="translate(1021.055 2027)"
                    :class="{ active: skills.content[2].title == skillText }"
                  >
                    <text
                      id="Film_Content"
                      class="skill-text"
                      data-name="Film &amp; Content"
                      transform="translate(128.945 18)"
                      fill="#fff"
                      font-size="18"
                      font-family="IBMPlexMono-Bold, IBM Plex Mono"
                      letter-spacing="0.01em"
                      font-weight="700"
                      @click="getSkillText(skills.content[2])"
                    >
                      <tspan x="0" y="0">{{ skills.content[2].title }}</tspan>
                    </text>
                    <path
                      id="Tracé_228"
                      data-name="Tracé 228"
                      d="M121.329,172.37l97.747-58.9c41.932-25.142,34.2-58.369,32.271-64.693-.218-.706-.352-1.058-.352-1.058l10.1,8.773A112.742,112.742,0,0,0,300.66,74.959c30.357,7.581,51.593.167,54.543-.957-2.381,2.062-18.917,17.326-26.534,47.668a112.442,112.442,0,0,0-2.33,43.595l2.986,13.049s-.253-.286-.772-.822c-4.679-4.682-30.342-27.139-72.274-1.979l-64.636,38.955Z"
                      transform="translate(-121.329 -4.744)"
                      fill="#222"
                    />
                  </g>
                  <g
                    id="PN_Cross_Social"
                    data-name="PN Cross – Social"
                    transform="translate(858 1885)"
                    :class="{ active: skills.content[0].title == skillText }"
                  >
                    <text
                      id="Social_Influence"
                      class="skill-text"
                      data-name="Social &amp; Influence"
                      transform="translate(99 18)"
                      fill="#fff"
                      font-size="18"
                      font-family="IBMPlexMono-Bold, IBM Plex Mono"
                      letter-spacing="0.01em"
                      font-weight="700"
                      @click="getSkillText(skills.content[0])"
                    >
                      <tspan x="-98.73" y="0">
                        {{ skills.content[0].title }}
                      </tspan>
                    </text>
                    <path
                      id="Tracé_230"
                      data-name="Tracé 230"
                      d="M226.607,76.213S201.56,71.492,177.7,47.628,150.39,0,150.39,0s-3.442,23.769-27.3,47.629S74.176,76.213,74.176,76.213s25.047,4.723,48.911,28.587,27.3,47.629,27.3,47.629l.051-.3c.495-2.837,4.971-25.041,27.255-47.325,23.864-23.864,48.911-28.587,48.911-28.587"
                      transform="translate(-51.638 42.77)"
                      fill="#222"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div
            class="skills-and-360__content-accordion accordion"
            role="tablist"
          >
            <div v-for="(skill, index) in skills.content" :key="index">
              <div
                :class="`accordion__item accordion__item-${index} d-flex justify-content-between align-items-center`"
                role="tab"
              >
                <h3 class="text-white">{{ skill.title }}</h3>
                <span
                  v-b-toggle="`accordion-${index}`"
                  class="plus-button text-white"
                  >+</span
                >
              </div>
              <b-collapse
                :id="`accordion-${index}`"
                accordion="my-accordion"
                role="tabpanel"
              >
                <div class="accordion__content">
                  <!-- eslint-disable-next-line vue/no-v-html-->
                  <div class="text-white" v-html="skill.description"></div>
                </div>
              </b-collapse>
            </div>
          </div>
        </b-col>
        <b-col md="12" lg="3" class="skills-and-360__content-360-title">
          <h3 class="text-white">{{ skillText }}</h3>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="text-white" v-html="skillDescription"></div>
        </b-col>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'TheAgencySkillsAnd360',
  props: {
    block360: {
      type: Object,
      default: null,
    },
    skills: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      skillText: '',
      skillDescription: '',
    }
  },
  methods: {
    getSkillText(skill) {
      this.skillText = skill.title
      this.skillDescription = skill.description
    },
  },
}
</script>
<style lang="scss" scoped>
.skills-and-360 {
  padding: 15rem 5.625rem;
  background-color: $primary;
  &__content {
    &-accordion {
      @media (min-width: 768px) {
        display: none;
      }
      .accordion__item {
        border-top: 1px solid $white;
        padding: 1rem 0;
        &.accordion__item-6 {
          border-bottom: 1px solid $white;
        }

        h3,
        span {
          @include link;
          text-decoration: none;
          &:hover {
            text-decoration: none;
          }
        }
      }
    }
  }
  &__content-360 {
    margin-bottom: 21.9375rem;
    &.spacing {
      margin-bottom: 0;
    }

    @include responsive('phone') {
      margin-bottom: 0;
    }
    &-title {
      padding: 0;
      @include responsive('phone') {
        margin-bottom: 3.75rem;
      }
    }
    .title {
      @include body;
    }
    .description {
      @include h3;
      padding: 0;
      @include responsive('phone') {
        display: none;
      }
    }
    .description-portrait {
      @include responsive('phone') {
        display: block;
      }
      @media (min-width: 768px) {
        display: none;
      }
    }
    .activities-content {
      .content {
        &-image {
          margin-bottom: 1.375rem;
        }
      }
      @include responsive('phone') {
        flex-direction: column !important;
        align-items: center !important;
        .content {
          margin-bottom: 2.5rem;
        }
      }
    }
    .skill-svg {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      .active {
        path {
          fill: $white;
        }
      }
      .skill-svg-item {
        display: none;
        @include responsive('phone') {
          display: flex;

          &:hover {
            path {
              fill: $white;
            }
          }
        }
      }
      .skill-icon {
        position: relative;
        top: -7.7rem;
        .skill-text {
          cursor: pointer;
        }
      }
      @include responsive('desktop') {
      }
      @include responsive('phone') {
        margin-bottom: 5.75rem;
      }
    }
    .skill-content {
      @include responsive('phone') {
        display: none;
      }
      P {
        @include caption;
        font-weight: 700;
      }
    }
  }
  @include responsive('widescreen') {
    padding: calc(15rem * 0.75) calc(5.625rem * 0.75);
  }
  @include responsive('desktop') {
    padding: calc(15rem * 0.64) calc(5.625rem * 0.64);
  }
  @include responsive('phone') {
    padding: 9.8125rem 1.1875rem 5rem 2.5rem;
  }
}
.small {
  fill: #fff;
  font: 28px $NoeDisplay;
  z-index: 22;
}
.first-skill {
  display: flex;
}
</style>
