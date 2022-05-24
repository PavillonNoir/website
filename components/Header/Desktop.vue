<template>
  <header>
    <div class="header">
      <div class="logo" @click="toggleMenu">
        <img src="/images/logo.png" alt="Logo" width="41.084" height="48.001" />
      </div>
      <ul role="nav" class="navbar">
        <li><NuxtLink to="/projects" class="menu-item">Projects</NuxtLink></li>
        <li><NuxtLink to="/agency" class="menu-item">The Agency</NuxtLink></li>
      </ul>
    </div>
    <div :class="isOpen ? 'hamburger d-flex show' : 'hamburger d-flex'">
      <div class="hamburger-container col-md-12 col-lg-4">
        <div class="logo" @click="toggleMenu">
          <img
            src="/images/logo.png"
            alt="Logo"
            width="41.084"
            height="48.001"
          />
        </div>
        <div class="hamburger-menu">
          <ul role="nav">
            <li class="hamburger-menu__item" @click="toggleMenu">
              <nuxtLink to="/">Home</nuxtLink>
            </li>
            <li class="hamburger-menu__item" @click="toggleMenu">
              <nuxtLink to="/projects">Projects</nuxtLink>
            </li>
            <li class="hamburger-menu__item" @click="toggleMenu">
              <nuxtLink to="/agency">The Agency</nuxtLink>
            </li>
          </ul>
        </div>
        <div class="hamburger-infos">
          <div class="hamburger-infos__connect">
            <h2 class="hamburger-title">connect</h2>
            <div class="jobs-connect__link">
              <a
                v-for="(connectLink, index) in connectLinks"
                :key="index"
                :href="`mailto:${connectLink.connect_link}`"
                >{{ connectLink.connect_label }}</a
              >
            </div>
          </div>
          <div class="hamburger-infos__address">
            <h2 class="hamburger-title">Address</h2>

            <address class="hamburger-text">
              {{ address }}
            </address>
          </div>
          <div class="hamburger-infos__phone">
            <h2 class="hamburger-title">Phone</h2>
            <p class="hamburger-text">
              <a href="`tel:${}`" class="text-light">{{ phoneNumber }} </a>
            </p>
          </div>
          <div class="hamburger-infos__social">
            <h3 class="hamburger-title">Follow us</h3>
            <p class="hamburger-text">
              <span v-for="(social, index) in socialLinks" :key="index">
                <a
                  :href="social.social_link"
                  rel="noreferrer"
                  target="_blank"
                  >{{ social.social_abbreviation }}</a
                >
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'HeaderDesktop',
  data() {
    return {
      isOpen: false,
      connectLinks: [],
      socialLinks: [],
      address: '',
      phoneNumber: '',
    }
  },
  async fetch() {
    const data = await this.$wp.cpt('website-info').slug('footer')
    this.connectLinks = await data[0].acf.connect
    this.address = await data[0].acf.address
    this.phoneNumber = await data[0].acf.phone
    this.socialLinks = await data[0].acf.social_links
  },
  mounted() {
    this.$fetch()
  },

  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    },
    closeMenu() {
      this.isOpen = false
    },
  },
}
</script>
<style lang="scss" scoped>
header {
  position: relative;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  padding: 1.875rem 6.225rem 0 5.625rem;
  mix-blend-mode: difference !important;
  z-index: 999;
  svg {
    &:hover {
      transform: rotate(180deg);
    }
  }

  .navbar {
    .menu-item {
      @include nav;
      color: $white;
      margin: 0 30px 0 0;
      font-weight: 400;
      letter-spacing: 2.5px;
      &:hover {
        color: $white;
        text-decoration: underline;
      }
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
}
.hamburger {
  position: fixed;
  z-index: 10000;
  inset: 0;
  background: rgba(112, 112, 112, 0.8);
  transform: translateX(-100%);
  transition: all 0.2s ease-in-out;
  @media (max-width: 768px) {
    transform: translateY(-200%);
    &-container {
      .logo {
        display: flex;
        justify-content: center;
      }
    }
  }
  &-container {
    background: $primary;
    padding: 30px 90px 90px;
    @media (max-width: 768px) {
      padding: 30px 30px 30px;
    }
  }
  &-menu {
    margin-top: 100px;
    color: $white;
    ul {
      padding: 0;
    }
    &__item {
      @include h3;
      margin: 5px 0;
      a {
        color: $white;
        transition: all 0.2s ease-in-out;
        :hover {
          text-decoration: underline;
        }
      }
    }
  }
  &.show {
    transform: translateX(0);
    transition: transform 0.2s ease-in-out;
  }
  &-infos {
    margin-top: 100px;
    margin-bottom: 90px;
    .hamburger-title {
      @include footer-caption;
      color: $tertiary;
      text-transform: uppercase;
      font-weight: 600;
      margin-bottom: 10px;
    }
    .hamburger-text {
      @include footer;
      color: $white;
      font-weight: 600;
      margin-bottom: 30px;
      span {
        margin-right: 20px;
        a {
          color: $white;
        }
      }
    }
    .jobs-connect__link {
      display: flex;
      justify-content: start;
      align-items: center;
      margin-top: 10px;
      margin-bottom: 30px;
      a {
        @include footer;
        margin-right: 30px;
        color: $white;
        font-weight: 600;
      }
    }
  }
}
@include responsive('widescreen') {
  padding: calc(1.875rem * 0.75) (5.625rem * 75);
}
@include responsive('desktop') {
  padding: calc(1.875rem * 0.64) (5.625rem * 64);
}
@include responsive('tablet') {
}
@include responsive('phone') {
  .header {
    justify-content: center;
  }
  .hamburger {
    transform: translateY(-200%);
    &-container {
      .logo {
        display: flex;
        justify-content: center;
      }
    }

    &-container {
      padding: 1.875rem;
    }
    &-menu {
      margin-top: 2.375rem;
      color: $white;

      &__item {
        @include h3;
        margin: 0.3125rem 0;
      }
    }
    &.show {
      transform: translateX(0);
      transition: transform 0.2s ease-in-out;
    }
    &-infos {
      margin-top: 7.6875rem;
      margin-bottom: 5.625rem;
      .hamburger-title {
        @include footer-caption;
        color: $tertiary;
        text-transform: uppercase;
        font-weight: 600;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
