<template>
    <div>
        <TabelaComp
            :titulo="'Previa: ' + getPrevia[0].id"
            :headers="getHeadersFaturamentoSemAcoes"
            :items="getPrevia"
            :btnHeader="btnHeader"
            :footer="true"
        />

        <br>

        <TabelaComp
            :titulo="'Itens Faturados'"
            :headers="getHeadersFaturamentoItem"
            :items="getFaturamentosItem"
            :subtitulo="'Total:' + getFaturamentosItem.length"
            :ordenacao="'item_configuracao'"
        />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TabelaComp from './TabelaComp';

export default {
    name: 'PreviaView',

    components: {
        TabelaComp,
    },

    data() {
        return {
            btnHeader: { color: 'primary', text: 'Voltar', to: '/', icon: "mdi-undo-variant" },
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

}
</script>
