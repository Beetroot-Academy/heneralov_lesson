<template>
  <div class="about__section">
    <HeaderBar/>
    <div class="about__content">
      <h1 class="about__main-title">About wallhaven</h1>
      <p class="about__main-text">
        Wallhaven is a site created by and for people who like wallpapers. What
        started as a replacement for the sadly defunct wallbase.cc has turned
        into one of the best wallpaper platforms on the net! We owe it all to
        our awesome community! You guys rock!
      </p>
      <h2 class="about__title">Wallbase's Fate</h2>
      <div class="about__text-block">
        <p class="about__text">
          After a major update at the end of August 2013, Wallbase's admin
          Yotoon disappeared. The new version of the site was launched early and
          incomplete, with pages missing and no upload function. With limited
          staff tools and the only developer not around, things quickly started
          deteriorating. Eventually the forum was removed altogether.
        </p>
        <p class="about__text">
          Yotoon hadn't been on the IRC channel in months, was nowhere to be
          seen anywhere on the site, and his address was bouncing emails. He was
          spotted using a few sites, but didn't seem to want anything to do with
          Wallbase. Various conspiracy theories emerged, some people cried, and
          there was talk of adapting a political thriller starring Michael
          Fassbender.
        </p>
        <p class="about__text">
          A few months later, a few regulars decided Yotoon wasn't coming back
          anytime soon, and began planning a project former users could gather
          around. After discussing if there was a risk of angering Yotoon's
          ghost and if there's such a thing as too much porn, we rounded up some
          developers and had a basic site up before the end of the year.
        </p>
      </div>
        <h2 class="about__title">Copyright</h2>
        <div class="about__text-block">
        <p class="about__text">
          As Wallhaven's content is user-submitted, some of it will inevitably
          be the work of others. We strive to respect copyright law, so if you
          own the rights to an image you find on the site, you can contact us at
          <a class="mail" href="mailto:copyright@wallhaven.cc"
            >copyright@wallhaven.cc</a
          >
          or
          <a class="mail" href="mailto:wallhavendotcc@gmail.com"
            >wallhavendotcc@gmail.com</a
          >
          with details to have the relevant images removed. We can also add you
          to an upload blacklist to prevent this from happening in the future.
          Alternatively, if you would just like to be credited for your work,
          you can simply edit the source of a wallpaper. Or request we move
          uploads to an account you control
        </p>
      </div>
    </div>
    <FooterBlock :icons="icons" />
  </div>
</template>

<script>
import FooterBlock from "/src/components/FooterBlock.vue";
import HeaderBar from "/src/components/HeaderBar.vue";
export default {
  name: "AboutPage",
  props: {},
  data() {
    return {
      icons: [
        "mdi-facebook",
        "mdi-twitter",
        "mdi-reddit",
        "mdi-instagram",
        "mdi-linkedin",
      ],
    };
  },
  components: {
    FooterBlock,
    HeaderBar,
  },
};
</script>

<style scoped>
.about-section {
  width: 1200px;
}
.about__content {
  padding-top: 50px;
  padding-bottom: 50px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: start;
}
.about__main-title {
  text-align: center;
  font-size: 48px;
  padding-bottom: 20px;
}
.about__title {
  color: #f09e62;
  font-size: 36px;
  border-bottom: 1px solid #424242;
}
.about__main-text {
  font-size: 16px;
}
.about__text-block {
  width: 100%;
  padding-top: 20px;
}
</style>
