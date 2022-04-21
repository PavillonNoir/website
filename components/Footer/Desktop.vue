<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-item footer-newsletter footer-newsletter-mobile">
        <div class="footer-item__newsletter">
          <h2 class="footer-title">GET OUR NEWS</h2>
          <form class="newsletter">
            <input
              type="email"
              placeholder="Your email Address"
              name="newsletter"
            />
            <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21.707"
                height="20.123"
                viewBox="0 0 21.707 20.123"
              >
                <g
                  id="Desktop_BUTTON_Send_Arrow"
                  data-name="Desktop – BUTTON Send Arrow"
                  transform="translate(0 0.354)"
                >
                  <line
                    id="Ligne_4"
                    data-name="Ligne 4"
                    x2="21"
                    transform="translate(0 9.708)"
                    fill="none"
                    stroke="#707070"
                    stroke-width="1"
                  />
                  <path
                    id="Tracé_140"
                    data-name="Tracé 140"
                    d="M930,3164.674l9.708-9.708,9.708,9.708"
                    transform="translate(3175.967 -930) rotate(90)"
                    fill="none"
                    stroke="#707070"
                    stroke-width="1"
                  />
                </g>
              </svg>
            </button>
          </form>
        </div>
      </div>
      <div class="footer-item footer-info col-md-12 col-lg-5">
        <div class="footer-item__adress">
          <h3 class="footer-title">Address</h3>
          <address class="footer-text">{{ address }}</address>
        </div>
        <div class="footer-item__connect">
          <h3 class="footer-title">connect</h3>
          <div class="jobs-connect__link">
            <a
              v-for="(connectLink, index) in connectLinks"
              :key="index"
              :href="`mailto:${connectLink.connect_link}`"
              >{{ connectLink.connect_label }}</a
            >
          </div>
        </div>
        <div class="footer-item__phone">
          <h3 class="footer-title">Phone</h3>
          <p class="footer-text">{{ phoneNumber }}</p>
        </div>
        <div class="footer-item__social">
          <h3 class="footer-title">Follow us</h3>
          <p class="footer-text">
            <span v-for="(social, index) in socialLinks" :key="index">
              <a :href="social.social_link" rel="noreferrer" target="_blank">{{
                social.social_abbreviation
              }}</a>
            </span>
          </p>
        </div>
      </div>
      <div class="footer-item footer-newsletter">
        <div class="footer-item__newsletter">
          <h3 class="footer-title">GET OUR NEWS</h3>
          <form class="newsletter">
            <input type="email" placeholder="Your email Address" />
            <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21.707"
                height="20.123"
                viewBox="0 0 21.707 20.123"
              >
                <g
                  id="Desktop_BUTTON_Send_Arrow"
                  data-name="Desktop – BUTTON Send Arrow"
                  transform="translate(0 0.354)"
                >
                  <line
                    id="Ligne_4"
                    data-name="Ligne 4"
                    x2="21"
                    transform="translate(0 9.708)"
                    fill="none"
                    stroke="#707070"
                    stroke-width="1"
                  />
                  <path
                    id="Tracé_140"
                    data-name="Tracé 140"
                    d="M930,3164.674l9.708-9.708,9.708,9.708"
                    transform="translate(3175.967 -930) rotate(90)"
                    fill="none"
                    stroke="#707070"
                    stroke-width="1"
                  />
                </g>
              </svg>
            </button>
          </form>
        </div>
      </div>

      <div class="footer-item footer-item__mentions">
        <p>Legal Mentions</p>
        <p>@ Pavillon Noir {{ date }}</p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'FooterDesktop',
  data() {
    return {
      isOpen: false,
      connectLinks: [],
      socialLinks: [],
      address: '',
      phoneNumber: '',
      date: new Date().getFullYear(),
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
}
</script>
<style lang="scss">
.footer {
  &-container {
    padding: 5.125rem 5.625rem 5.5rem;
    background-color: $primary;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 1.875rem;
    @media (max-width: 767px) {
      padding: 82px 30px 88px;
    }
  }
  &-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 8.125rem;
    grid-row-gap: 2.5rem;
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      grid-column-gap: 28px;
      grid-row-gap: 28px;
    }
  }

  &-title {
    @include footer-caption;
    color: $tertiary;
    text-transform: uppercase;
    font-weight: 600;
  }
  &-text {
    @include footer;
    color: $white;
    font-weight: 600;
    span {
      margin-right: 1.25rem;
      a {
        color: $white;
      }
    }
  }
  .jobs-connect__link {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-top: 0.625rem;
    margin-bottom: 3.75rem;
    a {
      @include footer;
      margin-right: 1.875rem;
      color: $white;
      font-weight: 600;
    }
  }
  &-newsletter {
    &.footer-newsletter-mobile {
      display: none;
    }
  }
  &-item__newsletter {
    .newsletter {
      padding-bottom: 10.5px;
      border-bottom: 2px solid $tertiary;
      width: 406px;
      display: flex;
      justify-content: space-between;
      @media (max-width: 767px) {
        width: 100%;
      }
      input {
        width: 406px;
        border: none;
        color: $white;
        @include footer-caption;
        background: transparent;
        &::placeholder {
          color: $white;
          @include footer-caption;
        }
        &:focus {
          outline: none;
        }
        @media (max-width: 767px) {
          width: 100%;
        }
      }
      button {
        border: none;
        background: transparent;
        svg {
          fill: $tertiary;
        }
      }
    }
  }
  &-item__mentions {
    display: flex;
    flex-direction: column;
    justify-content: end;
    p {
      @include footer;
      color: $tertiary;
      margin-bottom: 0;
    }
  }
  @include responsive('widescreen') {
    &-container {
      padding: calc(5.125rem * 0.75) calc(5.625rem * 0.75) calc(5.5rem * 0.75);
      background-color: $primary;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      row-gap: calc(1.875rem * 0.75);
    }
    &-info {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: calc(8.125rem * 0.75);
      grid-row-gap: calc(2.5rem * 0.75);
    }
  }
  @include responsive('desktop') {
    &-container {
      padding: calc(5.125rem * 0.64) calc(5.625rem * 0.64) calc(5.5rem * 0.64);
      background-color: $primary;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      row-gap: calc(1.875rem * 0.64);
    }
    &-info {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: calc(8.125rem * 0.64);
      grid-row-gap: calc(2.5rem * 0.64);
    }
  }
  @include responsive('tablet') {
    &-container {
      padding: calc(5.125rem * 0.51) calc(5.625rem * 0.51) calc(5.5rem * 0.51);
      background-color: $primary;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      row-gap: calc(1.875rem * 0.51);
    }
    &-info {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: calc(8.125rem * 0.51);
      grid-row-gap: calc(2.5rem * 0.51);
    }
  }
  @include responsive('phone') {
    &-container {
      padding: calc(5.125rem * 0.35) calc(5.625rem * 0.35) calc(5.5rem * 0.35);
      background-color: $primary;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      row-gap: calc(1.875rem * 0.35);
    }
    &-info {
      display: grid;
      grid-template-columns: 1fr;
      grid-column-gap: 28px;
      grid-row-gap: 28px;
      padding: 0;
    }
    &-newsletter {
      width: 100%;
      display: none;
      &.footer-newsletter-mobile {
        display: block;
        margin-bottom: 28px;
      }
    }
    .jobs-connect__link {
      margin-bottom: calc(3.75rem * 0.35);
    }
  }
}
</style>
