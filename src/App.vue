<template>
  <v-app>
    <v-app-bar app color="dark" dark>
      <div class="d-flex align-center">
        <v-img
          alt="HaaS Logo"
          class="shrink mr-2"
          contain
          src="@/assets/login_logo.png"
          transition="scale-transition"
          width="40"
        />

        <span class="mr-2">HaaS - Previas</span>
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/DEV-MatheusDiniz" target="_blank" text>
        <span class="mr-2">DEV-MatheusDiniz</span>
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <Previa_comp />
      </v-container>
    </v-main>

    <v-footer padless>
      <v-col class="text-center" cols="12">
        2023 - ©<strong>DEV-MatheusDiniz</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import Previa_comp from "./components/Previa_comp";

export default {
  name: "App",

  components: {
    Previa_comp,
  },
};
</script>
