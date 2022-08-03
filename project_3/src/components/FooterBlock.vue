<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="teal">
        <strong class="subheading"
          >Get connected with us on social networks!</strong
        >

        <v-spacer></v-spacer>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
          <v-icon class="footer-icon" color="black" size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }}<strong></strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "FooterBlock",
  props: ["icons"],
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .subheading {
    font-size: 12px;
  }
  .v-icon {
    font-size: 14px !important;
  }

  .v-btn--icon.v-size--default {
    width: 1px;
    height: 1px;
  }
}
@media screen and (max-width: 480px) {
  .subheading {
    font-size: 8px;
  }
  .v-application .mx-4 {
    margin-right: 12px !important;
    margin-left: 12px !important;
  }
}
</style>
