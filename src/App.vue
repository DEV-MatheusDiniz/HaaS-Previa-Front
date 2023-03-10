<template>
  <v-app>
    <NavbarComp />

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>

    <FooterComp />
  </v-app>
</template>

<script>
import NavbarComp from '@/components/NavbarComp'
import FooterComp from '@/components/FooterComp'

export default {
  name: "App",

  components: {
    NavbarComp,
    FooterComp
  },
};
</script>

<style>
.header-grey {
  background-color: grey;
  color: white;
}

.estilo-zebra tbody tr:nth-child(2n){
  background-color: #b2b2b2;
}

a {
  text-decoration: none;
}
</style>
