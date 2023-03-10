<template>
  <TabelaComp
    :titulo="'Previas: ' + getPrevias.length"
    :headers="getHeadersFaturamento"
    :items="getPrevias"
    :btnHeader="btnHeader"
  />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TabelaComp from '@/components/TabelaComp'

export default {
    name: "PreviasComp",

    components: {
      TabelaComp,
    },

    mounted() {
      this.previasAction();
    },

    data() {
        return {
          btnHeader: { color: 'success', text: "Nova Previa"}
        };
    },

    computed: {
      ...mapGetters([
        "getHeadersFaturamento",
        "getPrevias",
      ])
    },

    methods: {
        ...mapActions([
            "previasAction",
        ]),
    },

};
</script>
