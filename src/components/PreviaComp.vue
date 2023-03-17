<template>
    <div>
        <!-- Previa -->
        <TabelaComp
            :titulo="'Previa: ' + getPrevia.id"
            :qtdItems="getPrevia.qtdItems"
            :headers="getHeadersFaturamentoSemAcoes"
            :items="getPrevia.items"
            :btnHeader="btnHeader"
            :footer="true"
        />

        <br>

        <!-- Faturamentos Items -->
        <TabelaComp
            :titulo="'Itens Faturados'"
            :qtdItems="getFaturamentosItem.qtdItems"
            :headers="getHeadersFaturamentoItem"
            :items="getFaturamentosItem.items"
            :subtitulo="'Total:' + getFaturamentosItem.qtdItems"
            :ordenacao="'item_configuracao'"
            :toVisualizar="'/faturamentoItemConteudo'"
        />
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TabelaComp from './TabelaComp';

export default {
    name: 'PreviaView',

    components: {
        TabelaComp,
    },

    mounted() {
        this.previaAction(this.idPrevia),
        
        this.faturamentosItemAction(this.idPrevia)
    },

    data() {
        return {
            btnHeader: { color: 'primary', text: 'Voltar', to: '/', icon: "mdi-undo-variant" },

            idPrevia: this.$route.params.idPrevia,
        }
    },

    computed: {
        ...mapGetters([
            "getHeadersFaturamentoSemAcoes",
            "getHeadersFaturamentoItem",
            "getFaturamentosItem",
            "getPrevia",
      ])
    },

    methods: {
        ...mapActions([
            "previaAction",
            "faturamentosItemAction"
        ])
    }

}
</script>
