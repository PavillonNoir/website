<template>
  <section class="members">
    <h2 class="members-title">Our Crew</h2>
    <div class="members-content">
      <div
        v-for="(member, index) in teams"
        :key="index"
        class="members-content__item col-md-12 col-lg-3"
      >
        <h3 class="firstname">{{ member.acf.firstname }}</h3>
        <h3 class="lastname">{{ member.acf.lastname }}</h3>
        <!-- eslint-disable vue/no-v-html -->
        <div class="position" v-html="member.acf.position"></div>
        <a class="link" :href="`mailto:${member.acf.email}`">Contacter</a>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'TheAgencyMembers',
  props: {
    teams: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      members: [
        {
          firstname: 'Ghislain',
          lastname: 'De La Chaise',
          position: '<p>Chief Executive</p>',
          email: 'mailto:',
        },
        {
          firstname: 'Guillaume',
          lastname: 'Lairan',
          position: '<p>Chief Executive Officer</p>',
          email: 'mailto:',
        },
        {
          firstname: 'Jimmy',
          lastname: 'Guindy',
          position: '<p>Production Director<br>  Events & XP</p>',
          email: 'mailto:',
        },
        {
          firstname: 'Pierre Antoine',
          lastname: 'De Bouärd',
          position: '<p>Creative Director<br>  Image & Branding</p>',
          email: 'mailto:',
        },
        {
          firstname: 'Julien',
          lastname: 'Pacull',
          position: '<p>Strategy Director<br>  Strategy & Marketing</p>',
          email: 'mailto:',
        },
        {
          firstname: 'Alice',
          lastname: 'Jorry',
          position: '<p> Production Director<br>  Film & Content</p>',
          email: 'mailto:',
        },
        {
          firstname: 'Etienne',
          lastname: 'Baillon',
          position: '<p>Production Director <br>  Events & XP</p>',
          email: 'mailto:',
        },
        {
          firstname: 'Cathy',
          lastname: 'Serrat',
          position: '<p>Head of Influence <br>  Social & Influence</p>',
          email: 'mailto:',
        },
        {
          firstname: 'Agathe',
          lastname: 'Giraudeau',
          position: '<p>Head of Social <br>  Social & Influence</p>',
          email: 'mailto:',
        },
        {
          firstname: 'Gustave',
          lastname: 'Bernier',
          position:
            '<p>Head of Creative technology <br> Creative Technology</p>',
          email: 'mailto:',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.members {
  padding: 9.375rem 5.625rem;
  &-title {
    @include body;
    font-weight: 700;
    text-align: center;
    margin-bottom: 7.5rem;
  }
  &-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    &__item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 3.9375rem;
      .firstname,
      .lastname {
        @include h3;
        font-weight: 500;
        margin-bottom: 4px;
        text-align: center;
      }
      .position {
        @include link;
        font-family: $IBMPlexMono;
        margin-bottom: 4px;
        text-align: center;
        text-decoration: none;
        font-weight: 600;
      }
      .link {
        @include footer-caption;
        color: $primary;
        font-weight: 600;
        margin-top: 10px;
        color: $tertiary;
        text-transform: uppercase;
      }
    }
  }
  @include responsive('widescreen') {
    padding: calc(9.375rem * 0.75) calc(5.625rem * 0.75);
  }
  @include responsive('dekstop') {
    padding: calc(9.375rem * 0.64) calc(5.625rem * 0.64);
  }
  @include responsive('tablet') {
    padding: calc(9.375rem * 0.51) calc(5.625rem * 0.51);
  }
}
</style>
