<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-item footer-newsletter footer-newsletter-mobile">
        <div class="footer-item__newsletter">
          <h2 class="footer-title">GET OUR NEWS</h2>
          <form class="newsletter" @submit.prevent="handleSubmit">
            <input
              v-model="email"
              type="text"
              name="email"
              placeholder="Your email Address"
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
        <span v-show="error" class="error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8.707"
            height="8.707"
            viewBox="0 0 8.707 8.707"
          >
            <line
              id="Ligne_5"
              data-name="Ligne 5"
              x1="8"
              y2="8"
              transform="translate(0.354 0.354)"
              fill="none"
              stroke="#707070"
              stroke-width="1"
            />
            <line
              id="Ligne_6"
              data-name="Ligne 6"
              x2="8"
              y2="8"
              transform="translate(0.354 0.354)"
              fill="none"
              stroke="#707070"
              stroke-width="1"
            />
          </svg>
          {{ error }}
        </span>
        <span v-show="success" class="success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12.962"
            height="8.896"
            viewBox="0 0 12.962 8.896"
          >
            <path
              id="Tracé_141"
              data-name="Tracé 141"
              d="M946.274,155l4.419,4.419,7.836-7.836"
              transform="translate(-945.921 -151.23)"
              fill="none"
              stroke="#707070"
              stroke-width="1"
            />
          </svg>
          {{ success }}
        </span>
      </div>
      <div class="footer-item footer-info col-md-12 col-lg-6">
        <div class="footer-item__adress footer-info__item">
          <h3 class="footer-title">Address</h3>
          <address class="footer-text">{{ address }}</address>
        </div>
        <div class="footer-item__connect footer-info__item">
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
        <div class="footer-item__phone footer-info__item">
          <h3 class="footer-title">Phone</h3>
          <p class="footer-text">
            <a :href="`tel:${phoneNumber.trim()}`"></a> {{ phoneNumber }}
          </p>
        </div>
        <div class="footer-item__social footer-info__item">
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
          <form class="newsletter" @submit.prevent="handleSubmit">
            <input
              v-model="email"
              type="text"
              name="email"
              placeholder="Your email Address"
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
        <span v-show="error" class="error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8.707"
            height="8.707"
            viewBox="0 0 8.707 8.707"
          >
            <line
              id="Ligne_5"
              data-name="Ligne 5"
              x1="8"
              y2="8"
              transform="translate(0.354 0.354)"
              fill="none"
              stroke="#707070"
              stroke-width="1"
            />
            <line
              id="Ligne_6"
              data-name="Ligne 6"
              x2="8"
              y2="8"
              transform="translate(0.354 0.354)"
              fill="none"
              stroke="#707070"
              stroke-width="1"
            />
          </svg>
          {{ error }}
        </span>
        <span v-show="success" class="success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12.962"
            height="8.896"
            viewBox="0 0 12.962 8.896"
          >
            <path
              id="Tracé_141"
              data-name="Tracé 141"
              d="M946.274,155l4.419,4.419,7.836-7.836"
              transform="translate(-945.921 -151.23)"
              fill="none"
              stroke="#707070"
              stroke-width="1"
            />
          </svg>
          {{ success }}
        </span>
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
      email: '',
      error: '',
      success: '',
      subscribers: [],
    }
  },
  async fetch() {
    const data = await this.$wp.cpt('website-info').slug('footer')
    this.subscribers = await this.$wp.cpt('subscriber')
    this.connectLinks = await data[0].acf.connect
    this.address = await data[0].acf.address
    this.phoneNumber = await data[0].acf.phone
    this.socialLinks = await data[0].acf.social_links
  },
  mounted() {
    this.$fetch()
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      const subscribers = this.subscribers.map(
        (subscriber) => subscriber.title.rendered
      )
      // eslint-disable-next-line no-useless-escape
      if (this.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        if (subscribers.includes(this.email)) {
          this.error = 'You are already subscribed'
        } else {
          this.$wp
            .cpt('subscriber')
            .create({
              title: this.email,
              status: 'publish',
            })
            .then((response) => {
              this.email = ''
              this.error = ''
              this.success = 'Subscription successful'
              setTimeout(() => {
                this.success = ''
              }, 4000)
            })
            .catch((err) => {
              this.error = err.message
              setTimeout(() => {
                this.error = ''
              }, 4000)
            })
        }
      } else {
        this.error = 'Insert a valid email address'
      }
    },
  },
}
</script>
<style lang="scss">
.footer {
  &-container {
    max-height: 300px;
    padding: 5.125rem 5.625rem 5.4375rem;
    background-color: $primary;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 1.875rem;
    @include responsive('widescreen') {
      padding: calc(5.125rem * 0.75) calc(5.625rem * 0.75)
        calc(5.4375rem * 0.75);
      row-gap: calc(1.875rem * 0.75);
    }
    @include responsive('desktop') {
      padding: calc(5.125rem * 0.64) calc(5.625rem * 0.64)
        calc(5.4375rem * 0.64);
      row-gap: calc(1.875rem * 0.64);
    }
    @include responsive('tablet') {
      padding: calc(5.125rem * 0.51) calc(5.625rem * 0.51)
        calc(5.4375rem * 0.51);
      row-gap: calc(1.875rem * 0.51);
    }
    @media (max-width: 767px) {
      padding: 82px 30px 88px;
      max-height: 100%;
    }
  }
  &-info {
    display: flex;
    flex-wrap: wrap;
    row-gap: 2.5rem;

    @include responsive('widescreen') {
      row-gap: calc(2.5rem * 0.75);
    }
    @include responsive('desktop') {
      row-gap: calc(2.5rem * 0.64);
    }
    @include responsive('tablet') {
      row-gap: calc(2.5rem * 0.51);
    }
    @include responsive('phone') {
      padding: 0;
    }
    &__item {
      width: 50%;
      @include responsive('phone') {
        width: 100%;
      }
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
    font-weight: 400;
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

    a {
      @include footer;
      margin-right: 1.875rem;
      color: $white;
      font-weight: 400;
      &:hover {
        font-weight: 600;
      }
    }
  }
  &-newsletter {
    &.footer-newsletter-mobile {
      display: none;
    }
  }
  &-item__newsletter {
    margin-bottom: 24px;
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
      text-align: right;
      @include responsive('phone') {
        text-align: left;
      }
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

    &-newsletter {
      width: 100%;
      display: none;
      margin-bottom: 28px;
      &.footer-newsletter-mobile {
        display: block;
        margin-bottom: 28px;
      }
    }
    .jobs-connect__link {
      margin-bottom: calc(3.75rem * 0.35);
    }
  }
  address {
    &:hover {
      text-decoration: underline;
    }
  }
  .error {
    color: $grey;
    @include body;
  }
  .success {
    color: $grey;
    @include body;
  }
}
</style>
