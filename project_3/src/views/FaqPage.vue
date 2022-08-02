<template>

<div class="faq-section">
    <HeaderBar/>
    <div class="faq__content">
      <h1 class="faq__main-title">Frequently Asked Questions</h1>
      <h2 class="faq__title">What is wallhaven?</h2>
      <div class="faq__text-block">
        <p class="faq__text">
          wallhaven.cc is a website for sharing wallpapers. Need a new desktop wallpaper? Something for your phone? You've come to the right place!
        </p>
      </div>
        <h2 class="faq__title">What is wallhaven's relation to Wallbase? I see that name a lot.</h2>
        <div class="faq__text-block">
        <p class="faq__text">
          These days, pretty unrelated. Most of the staff here were users/staff of wallbase back in the day. We decided as the ship that was wallbase was sinking, we should get together and create something so we don't lose what we loved most. It's a long story—see the <a class="text-link" href="/about"
            >about</a
          > page.
        </p>
        </div>
        <h2 class="faq__title">Where can I make suggestions or report problems?</h2>  
        <div class="faq__text-block">
        <p class="faq__text">
          Please post any anything you're missing or bugs you find <a href="https://wallhaven.cc/forums">here in the forums!</a>  If that's not your thing, you can <a href="/contact">contact us</a> any number of ways.
        </p>
    </div>
    <h2 class="faq__title">What can I do to help out?</h2>  
        <div class="faq__text-block">
        <p class="faq__text">
          Spread the word! Let everyone you know what a nice wallpaper website you found here. Feel free to also help add to our amazing collection of uploads if you have some of your own! We also rely on users tagging and flagging to make sure others can find things properly. Just please keep the rules in mind.
        </p>
    </div>
    <h2 class="faq__title">What are SFW, Sketchy and NSFW all about?</h2>  
        <div class="faq__text-block">
        <p class="faq__text">
         It's how we categorize the “purity” of an image.
        </p>
        <ul class="faq-list">
          <li class="faq-item">SFW = "Safe for work" wallpapers grandma approves</li>
          <li class="faq-item">Sketchy = Not quite SFW not quite NSFW. Grandma might be uncomfortable</li>
          <li class="faq-item">NSFW = "Not safe for work" Grandma isn't sure who you are anymore</li>
        </ul>
        <p class="faq__text">Check the upload guidelines for specifics.</p>
    </div>
    <h2 class="faq__title">What makes a good tag alias?</h2>  
        <div class="faq__text-block">
        <p class="faq__text">
         Think of tag aliases as other ways to search for a given tag. For example:
        </p>
        <ul class="faq-list">
          <li class="faq-item">An alias for League of Legends would be LoL</li>
          <li class="faq-item">The title of an anime in English</li>
          <li class="faq-item">Japanese name order flipped (Hanazawa Kana to Kana Hanazawa)</li>
        </ul>
        <p class="faq__text">Multiple aliases can be provided. Separate them with a comma.</p>
    </div>
    <h2 class="faq__title">What does wallhaven run on?</h2>  
        <div class="faq__text-block">
        <ul class="faq-list">
          <li class="faq-item">Laravel (PHP Framework)</li>
          <li class="faq-item">Elasticsearch (Search engine)</li>
          <li class="faq-item">Dropzone.js (multiupload)</li>
          <li class="faq-item"><a href="http://iqdb.org/">IQDB</a> (image searching/dupe detection)</li>
          <li class="faq-item">redis</li>
          <li class="faq-item">nginx</li>
          <li class="faq-item">PHP 7.2</li>
        </ul>
    </div>
</div>
<FooterBlock :icons="icons" />
</div>
</template>

<script>
import FooterBlock from "/src/components/FooterBlock.vue";
import HeaderBar from "/src/components/HeaderBar.vue";
export default {
  name: 'FaqPage',
  data() {
    return {
      icons: [
        "mdi-facebook",
        "mdi-twitter",
        "mdi-reddit",
        "mdi-instagram",
        "mdi-linkedin",
      ],
    }
  },
  props: {
    
  },
  components: {
    FooterBlock,
    HeaderBar,
  },
  
}
</script>


<style scoped>

.header-wrapper {
  background-color: #263238;
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
}
.nav-list {
    display: flex;
    gap: 20px;
}
.faq__content {
  padding-top: 50px;
  padding-bottom: 50px;
  width: 1200px;
  margin: 0 auto;
  text-align: start;
}
.faq__main-title {
  text-align: center;
  font-size: 48px;
  padding-bottom: 20px;
}
.faq__title {
  color: #f09e62;
  font-size: 36px;
  border-bottom: 1px solid #424242;
}
.faq-list {
  padding-bottom:20px ;
}
.faq-item::before {
  content: '▶';
  padding-right:10px ;
}
.faq__text-block {
  padding-top: 20px;
  padding-left:20px ;
}

</style>