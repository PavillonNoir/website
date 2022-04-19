<template>
  <header>
    <div class="header">
      <div class="logo" @click="toggleMenu">
        <svg
          id="pavillon-noir-logo"
          data-name="Logo pavillon noir"
          xmlns="http://www.w3.org/2000/svg"
          width="41.084"
          height="48.001"
          viewBox="0 0 41.084 48.001"
        >
          <g
            id="Groupe_2"
            data-name="Groupe 2"
            transform="translate(-488.003 -168.899)"
            style="mix-blend-mode: difference; isolation: isolate"
          >
            <path
              id="Tracé_1"
              data-name="Tracé 1"
              d="M592.981,283.706l6.744,4.064c2.893,1.735,2.36,4.027,2.227,4.464-.015.049-.024.073-.024.073l.7-.605a7.781,7.781,0,0,1,2.73-1.274,6.564,6.564,0,0,1,3.763.066,6.567,6.567,0,0,1-1.831-3.289,7.76,7.76,0,0,1-.161-3.008l.206-.9s-.017.02-.053.057c-.323.323-2.094,1.872-4.987.136l-4.46-2.688Z"
              transform="translate(-80.031 -85.31)"
              fill="#fff"
            />
            <path
              id="Tracé_2"
              data-name="Tracé 2"
              d="M562.7,174.158a7.173,7.173,0,0,1-3.375-1.972,6.465,6.465,0,0,1-1.884-3.287,6.465,6.465,0,0,1-1.884,3.287,7.172,7.172,0,0,1-3.375,1.972,7.17,7.17,0,0,1,3.375,1.972,6.465,6.465,0,0,1,1.884,3.287l0-.021a6.547,6.547,0,0,1,1.88-3.265A7.171,7.171,0,0,1,562.7,174.158Z"
              transform="translate(-48.928)"
              fill="#fff"
            />
            <path
              id="Tracé_3"
              data-name="Tracé 3"
              d="M562.7,331.892a7.17,7.17,0,0,1-3.375-1.972,6.464,6.464,0,0,1-1.884-3.286,6.464,6.464,0,0,1-1.884,3.286,7.169,7.169,0,0,1-3.375,1.972,7.171,7.171,0,0,1,3.375,1.972,6.465,6.465,0,0,1,1.884,3.286l0-.021a6.546,6.546,0,0,1,1.88-3.265A7.173,7.173,0,0,1,562.7,331.892Z"
              transform="translate(-48.928 -120.25)"
              fill="#fff"
            />
            <path
              id="Tracé_4"
              data-name="Tracé 4"
              d="M497.4,233.935l12.4-7.42L522.262,219c2.894-1.735,4.664-.186,4.987.137.036.037.053.057.053.057l-.206-.9a7.756,7.756,0,0,1,.161-3.008,6.562,6.562,0,0,1,1.83-3.289,6.561,6.561,0,0,1-3.764.066,7.755,7.755,0,0,1-2.73-1.274l-.7-.606s.009.025.025.073c.133.437.666,2.729-2.227,4.464l-12.465,7.512-12.4,7.42c-2.893,1.735-4.664.186-4.987-.137-.036-.037-.053-.057-.053-.057l.206.9a7.758,7.758,0,0,1-.162,3.008,6.563,6.563,0,0,1-1.83,3.289,6.56,6.56,0,0,1,3.764-.066,7.757,7.757,0,0,1,2.73,1.274l.7.606s-.009-.025-.025-.074C495.036,237.962,494.5,235.67,497.4,233.935Z"
              transform="translate(-0.001 -31.476)"
              fill="#fff"
            />
            <path
              id="Tracé_5"
              data-name="Tracé 5"
              d="M504.14,218.788l-6.745-4.064c-2.893-1.735-2.36-4.027-2.226-4.464.015-.049.024-.073.024-.073l-.7.605a7.782,7.782,0,0,1-2.73,1.274A6.564,6.564,0,0,1,488,212a6.566,6.566,0,0,1,1.831,3.289,7.761,7.761,0,0,1,.161,3.008l-.206.9s.017-.02.053-.057c.323-.323,2.094-1.872,4.987-.136l4.46,2.688Z"
              transform="translate(0 -30.477)"
              fill="#fff"
            />
          </g>
        </svg>
      </div>
      <nav class="navbar">
        <li><NuxtLink to="/projects" class="menu-item">Projects</NuxtLink></li>
        <li><NuxtLink to="/agency" class="menu-item">The Agency</NuxtLink></li>
      </nav>
    </div>
    <div :class="isOpen ? 'hamburger d-flex show' : 'hamburger d-flex'">
      <div class="hamburger-container col-md-12 col-lg-4">
        <div class="logo" @click="toggleMenu">
          <svg
            id="pavillon-noir-logo"
            data-name="Logo pavillon noir"
            xmlns="http://www.w3.org/2000/svg"
            width="41.084"
            height="48.001"
            viewBox="0 0 41.084 48.001"
          >
            <g
              id="Groupe_2"
              data-name="Groupe 2"
              transform="translate(-488.003 -168.899)"
              style="mix-blend-mode: difference; isolation: isolate"
            >
              <path
                id="Tracé_1"
                data-name="Tracé 1"
                d="M592.981,283.706l6.744,4.064c2.893,1.735,2.36,4.027,2.227,4.464-.015.049-.024.073-.024.073l.7-.605a7.781,7.781,0,0,1,2.73-1.274,6.564,6.564,0,0,1,3.763.066,6.567,6.567,0,0,1-1.831-3.289,7.76,7.76,0,0,1-.161-3.008l.206-.9s-.017.02-.053.057c-.323.323-2.094,1.872-4.987.136l-4.46-2.688Z"
                transform="translate(-80.031 -85.31)"
                fill="#fff"
              />
              <path
                id="Tracé_2"
                data-name="Tracé 2"
                d="M562.7,174.158a7.173,7.173,0,0,1-3.375-1.972,6.465,6.465,0,0,1-1.884-3.287,6.465,6.465,0,0,1-1.884,3.287,7.172,7.172,0,0,1-3.375,1.972,7.17,7.17,0,0,1,3.375,1.972,6.465,6.465,0,0,1,1.884,3.287l0-.021a6.547,6.547,0,0,1,1.88-3.265A7.171,7.171,0,0,1,562.7,174.158Z"
                transform="translate(-48.928)"
                fill="#fff"
              />
              <path
                id="Tracé_3"
                data-name="Tracé 3"
                d="M562.7,331.892a7.17,7.17,0,0,1-3.375-1.972,6.464,6.464,0,0,1-1.884-3.286,6.464,6.464,0,0,1-1.884,3.286,7.169,7.169,0,0,1-3.375,1.972,7.171,7.171,0,0,1,3.375,1.972,6.465,6.465,0,0,1,1.884,3.286l0-.021a6.546,6.546,0,0,1,1.88-3.265A7.173,7.173,0,0,1,562.7,331.892Z"
                transform="translate(-48.928 -120.25)"
                fill="#fff"
              />
              <path
                id="Tracé_4"
                data-name="Tracé 4"
                d="M497.4,233.935l12.4-7.42L522.262,219c2.894-1.735,4.664-.186,4.987.137.036.037.053.057.053.057l-.206-.9a7.756,7.756,0,0,1,.161-3.008,6.562,6.562,0,0,1,1.83-3.289,6.561,6.561,0,0,1-3.764.066,7.755,7.755,0,0,1-2.73-1.274l-.7-.606s.009.025.025.073c.133.437.666,2.729-2.227,4.464l-12.465,7.512-12.4,7.42c-2.893,1.735-4.664.186-4.987-.137-.036-.037-.053-.057-.053-.057l.206.9a7.758,7.758,0,0,1-.162,3.008,6.563,6.563,0,0,1-1.83,3.289,6.56,6.56,0,0,1,3.764-.066,7.757,7.757,0,0,1,2.73,1.274l.7.606s-.009-.025-.025-.074C495.036,237.962,494.5,235.67,497.4,233.935Z"
                transform="translate(-0.001 -31.476)"
                fill="#fff"
              />
              <path
                id="Tracé_5"
                data-name="Tracé 5"
                d="M504.14,218.788l-6.745-4.064c-2.893-1.735-2.36-4.027-2.226-4.464.015-.049.024-.073.024-.073l-.7.605a7.782,7.782,0,0,1-2.73,1.274A6.564,6.564,0,0,1,488,212a6.566,6.566,0,0,1,1.831,3.289,7.761,7.761,0,0,1,.161,3.008l-.206.9s.017-.02.053-.057c.323-.323,2.094-1.872,4.987-.136l4.46,2.688Z"
                transform="translate(0 -30.477)"
                fill="#fff"
              />
            </g>
          </svg>
        </div>
        <div class="hamburger-menu">
          <ul>
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
            <h3 class="hamburger-title">connect</h3>
            <div class="jobs-connect__link">
              <a
                v-for="(connectLink, index) in connectLinks"
                :key="index"
                :href="`mailto:${connectLink.mail}`"
                >{{ connectLink.title }}</a
              >
            </div>
          </div>
          <div class="hamburger-infos__address">
            <h3 class="hamburger-title">Address</h3>
            <address class="hamburger-text">
              11 Rue Farcot 94600 Saint Ouen France
            </address>
          </div>
          <div class="hamburger-infos__phone">
            <h3 class="hamburger-title">Phone</h3>
            <p class="hamburger-text">
              <a href="tel:+33 (0)1 01 47 87 18 40" class="text-light"
                >+33 (0)1 01 47 87 18 40</a
              >
            </p>
          </div>
          <div class="hamburger-infos__social">
            <h3 class="hamburger-title">Follow us</h3>
            <p class="hamburger-text">
              <span><a href="http://facebook.com" target="blank">Fb</a></span>
              <span><a href="http://instagram.com">Ig</a></span
              ><span><a href="http://linkedin.">Lk</a></span
              ><span><a href="http://">Vi</a></span>
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
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
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
  padding: 1.875rem 5.625rem;
  mix-blend-mode: difference !important;
  z-index: 999;
  svg {
    animation-name: spin;

    :hover {
      animation-play-state: running;
      animation-direction: reverse;
      animation-iteration-count: infinite;
      animation-duration: 1000ms;
      animation-timing-function: linear;
    }
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  .navbar {
    .menu-item {
      @include nav;
      color: $white;
      margin: 0 30px;
      font-weight: 600;
      letter-spacing: 2.5px;
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
