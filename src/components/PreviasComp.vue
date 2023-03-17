<template>
  <TabelaComp
    :titulo="'Previas: ' + getPrevias.qtdItems"
    :qtdItems="getPrevias.qtdItems"
    :headers="getHeadersFaturamento"
    :items="getPrevias.items"
    :btnHeader="btnHeader"
    :toVisualizar="'/previa'"
  />
  <!-- previaAction(item.id), faturamentosItemAction(item.id) -->
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
          btnHeader: { color: 'success', text: "Nova Previa"},
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
            "previaAction",
        ]),
    },

};
</script>
