<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col>
          <h1 class="title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 29 29"
              class="title__logo"
            >
              <g>
                <path
                  d="M8.495 3.628S4.939 4.95 2.839 9.922l11.585-2.19-5.929-4.104zm-5.831 7.003s-1.568 3.455.481 8.448l6.612-9.763-7.093 1.315zm.924 8.94s1.322 3.556 6.294 5.656L7.693 13.64l-4.105 5.931zm7.003 5.83s3.455 1.567 8.448-.481l-9.763-6.61 1.315 7.091zm9.131-.772s3.557-1.322 5.656-6.296l-11.586 2.189 5.93 4.107zm5.349-15.452l-6.61 9.763 7.093-1.316c0 .001 1.566-3.454-.483-8.447zm-.443-.492s-1.322-3.556-6.295-5.655l2.189 11.585 4.106-5.93zm-7.004-5.83s-3.453-1.568-8.447.482l9.764 6.61-1.317-7.092z"
                ></path>
                <path
                  d="M14.151 0C6.336 0 0 6.336 0 14.15 0 21.963 6.335 28.3 14.151 28.3c7.813 0 14.149-6.338 14.149-14.15C28.301 6.336 21.965 0 14.151 0zm0 27.206c-7.199 0-13.057-5.857-13.057-13.056 0-7.199 5.858-13.056 13.057-13.056 7.197 0 13.055 5.857 13.055 13.056 0 7.199-5.858 13.056-13.055 13.056z"
                ></path>
              </g>
            </svg>
            CSSGramm
          </h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <p class="text">
            Update CSS Variables with <span class="text--orange">JS</span>
          </p>
        </v-col>
      </v-row>
      <v-row class="header__rows">
        <v-col>
          <v-slider
            v-model="borderValue"
            :value="borderValue"
            label="Border"
            :min="borderSettings.min"
            :max="borderSettings.max"
            thumb-label
            dense
            hide-details
          ></v-slider>
        </v-col>
        <v-col class="d-flex justify-space-between">
          <span class="subtitle">Base Color:</span>
          <b-form-input
            v-model="inputColor"
            :id="`type-color`"
            type="color"
          ></b-form-input>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-col>
          <div class="img__container">
            <img src="./assets/image.jpg" alt="Your IMG" />
          </div>
        </v-col>
        <v-col>
          <v-row>
            <v-col>
              <v-subheader class="subtitle">Blur:</v-subheader>
              <v-slider
                v-model="blurValue"
                :value="blurValue"
                :min="blurSettings.min"
                :max="blurSettings.max"
                thumb-label
                dense
                hide-details
              >
                <template v-slot:append>
                  <v-text-field
                    v-model="blur"
                    class="mt-0 pt-0"
                    hide-details
                    single-line
                    type="text"
                    style="width: 60px"
                  ></v-text-field> </template
              ></v-slider>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-subheader class="subtitle">Contrast:</v-subheader>
              <v-slider
                v-model="contrastValue"
                :value="contrastValue"
                :min="contrastSettings.min"
                :max="contrastSettings.max"
                thumb-label
                dense
                hide-details
                ><template v-slot:append>
                  <v-text-field
                    readonly
                    v-model="contrast"
                    class="mt-0 pt-0"
                    hide-details
                    single-line
                    type="text"
                    style="width: 60px"
                  ></v-text-field> </template
              ></v-slider>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-subheader class="subtitle">Hue Rotate:</v-subheader>
              <v-slider
                v-model="hueRotateValue"
                :value="hueRotateValue"
                :min="hueRotateSettings.min"
                :max="hueRotateSettings.max"
                thumb-label
                dense
                hide-details
                ><template v-slot:append>
                  <v-text-field
                    readonly
                    v-model="hueRotate"
                    class="mt-0 pt-0"
                    hide-details
                    single-line
                    type="text"
                    style="width: 60px"
                  ></v-text-field> </template
              ></v-slider>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-subheader class="subtitle">Sepia:</v-subheader>
              <v-slider
                v-model="sepiaValue"
                :value="sepiaValue"
                :min="sepiaSettings.min"
                :max="sepiaSettings.max"
                thumb-label
                dense
                hide-details
                ><template v-slot:append>
                  <v-text-field
                    readonly
                    v-model="sepia"
                    class="mt-0 pt-0"
                    hide-details
                    single-line
                    type="text"
                    style="width: 60px"
                  ></v-text-field> </template
              ></v-slider>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-subheader class="subtitle">Saturate:</v-subheader>
              <v-slider
                v-model="saturateValue"
                :value="saturateValue"
                :min="saturateSettings.min"
                :max="saturateSettings.max"
                thumb-label
                dense
                hide-details
                ><template v-slot:append>
                  <v-text-field
                    readonly
                    v-model="saturate"
                    class="mt-0 pt-0"
                    hide-details
                    single-line
                    type="text"
                    style="width: 60px"
                  ></v-text-field> </template
              ></v-slider>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn color="primary" outlined elevation="2" @click="clearValue">
                Clear all
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      inputColor: `#ffc600`,
      borderSettings: { min: 0, max: 50 },
      blurSettings: { min: 0, max: 20 },
      contrastSettings: { min: 0, max: 200 },
      hueRotateSettings: { min: 0, max: 360 },
      sepiaSettings: { min: 0, max: 100 },
      saturateSettings: { min: 0, max: 200 },
      border: `10px`,
      blur: `0px`,
      contrast: `100%`,
      hueRotate: `0deg`,
      sepia: `0%`,
      saturate: `100%`,
      borderValue: 10,
      blurValue: 0,
      contrastValue: 100,
      hueRotateValue: 0,
      sepiaValue: 0,
      saturateValue: 100,
    };
  },
  methods: {
    clearValue() {
      this.borderValue = 10;
      this.blurValue = 0;
      this.contrastValue = 100;
      this.hueRotateValue = 0;
      this.sepiaValue = 0;
      this.saturateValue = 100;
    },
  },
  computed: {},
  watch: {
    borderValue(newVal) {
      this.border = newVal + `px`;
    },
    inputColor(newVal) {
      this.$vuetify.theme.themes.dark.primary = `${newVal}`;
    },
    blurValue(newVal) {
      this.blur = newVal + `px`;
    },
    contrastValue(newVal) {
      this.contrast = newVal + `%`;
    },
    hueRotateValue(newVal) {
      this.hueRotate = newVal + `deg`;
    },
    sepiaValue(newVal) {
      this.sepia = newVal + `%`;
    },
    saturateValue(newVal) {
      this.saturate = newVal + `%`;
    },
  },
};
</script>

<style>
#app {
  background: #191d23;
  /* max-width: 1200px; */
  margin: 0 auto;
  padding: 0 15px;
  text-align: center;
  color: white;
}
.img__container > img {
  max-width: 100%;
  max-height: 100%;
  filter: blur(v-bind(blur)) contrast(v-bind(contrast))
    hue-rotate(v-bind(hueRotate)) sepia(v-bind(sepia))
    saturate(v-bind(saturate));
}
.img__container {
  transition: border 90ms ease-in;
  border: v-bind(border) solid v-bind(inputColor);
}
.hero {
  background: #191d23;
}
.subtitle {
  font-size: 30px;
  width: 100%;
  color: white !important;
}
.v-input {
  align-items: center;
}
.v-application--is-ltr .v-messages {
  display: none;
}
.header__rows {
  align-items: flex-end;
}
.v-label {
  color: White !important;
  font-size: 30px !important;
}
.v-application .title {
  font-size: 3em !important;
}
.title {
  display: inline-block;
  color: v-bind(inputColor);
}
.title__logo {
  fill: v-bind(inputColor);
}
.form-control {
  width: 50% !important ;
}
.text {
  color: white;
  font-size: 2em;
}
.text--orange {
  color: #ffc600;
}
</style>