<template>
  <div class="contact-section">
    <HeaderBar/>
    <div class="contact-wrapper">
    <div class="contact-content">
      <h2 class="contact-title">Contact Us!</h2>
      <form class="form">
        <div class="first-flex">
        <input
          type="text"
          name="name"
          placeholder="First name..."
          required
          class="form__nameinput"
        />
        <input
          type="text"
          name="name"
          placeholder="Last name..."
          required
          class="form__nameinput"
        />
        </div>
        <div class="second-flex">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email..."
          required
          class="form__mailinput"
        />
        <input
          type="tel"
          name="tel"
          id="tel"
          placeholder="Phone number..."
          required
          class="form__phoneinput"
        />
        </div>
        <div class="message-textarea">
        <textarea class="form__message" name="message" id="message" placeholder="Your message..."></textarea>
        </div>
        <button class="form__btn" type="submit">Submit</button>
      </form>
    </div>
  </div>
  <FooterBlock :icons="icons" />
  </div>
</template>

<script>
import FooterBlock from "/src/components/FooterBlock.vue";
import HeaderBar from "/src/components/HeaderBar.vue";
export default {
  name: "ContactPage",
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
};
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
.contact-content {
  width: 700px;
  margin: 0 auto;
  background-color: white;
  color: #212121;
  padding: 0px 50px;
  padding-top:50px ;
  padding-bottom: 50px;
}
.contact-title {
  font-size: 48px;
}
.contact-wrapper {
  padding-top: 150px;
  padding-bottom: 150px;
}
.first-flex {
  padding-top:50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.second-flex {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 100px;
  padding-bottom: 50px;
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.form__nameinput {
  border-bottom: 1px solid #C5CAE9;
  padding: 10px;
  opacity: 0.5;
  width: 250px;
}
.form__nameinput:focus {
  opacity: 1;
  transition: 0.5s;
}
.form__mailinput {
  border-bottom: 1px solid #C5CAE9;
  padding: 10px;
  opacity: 0.5;
  width: 250px;
}
.form__phoneinput {
  width: 250px;
  border-bottom: 1px solid #C5CAE9;
  padding: 10px;
  opacity: 0.5;
}
.form__mailinput:focus {
  opacity: 1;
  transition: 0.5s;
}
.form__phoneinput:focus {
  opacity: 1;
  transition: 0.5s;
}
.form__btn {
  display: block;
  margin: 0 auto;
  border: 1px solid #212121;
  padding: 15px 45px;
  background-color: #C5CAE9;
}
.form__btn:hover {
  background-color: #5C6BC0;
  transition: 0.5s;
}
.message-textarea {
  padding-bottom: 50px;
}
.form__message {
  width: 100%;
  border: 1px solid #C5CAE9 ;
  padding: 5px 15px;
  opacity: 0.5;
}
.form__message:focus {
  opacity: 1;
}
</style>
