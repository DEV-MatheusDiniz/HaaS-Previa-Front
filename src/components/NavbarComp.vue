<template>
  <v-app-bar app color="dark" dark>
    <div class="d-flex align-center">
      <router-link to="/">
        <v-img
          alt="HaaS Logo"
          class="shrink mr-2"
          contain
          src="@/assets/login_logo.png"
          transition="scale-transition"
           width="40"
        />
      </router-link>

      <span class="mr-2">HaaS - Previas</span>  
    </div>

    <v-spacer></v-spacer>

    <v-btn href="https://github.com/DEV-MatheusDiniz" target="_blank" text>
      <span class="mr-2">DEV-MatheusDiniz</span>
      <v-icon>mdi-github</v-icon>
    </v-btn>
  </v-app-bar>
</template>


<script>
    export default {
        name: 'NavbarComp'
    }
</script>