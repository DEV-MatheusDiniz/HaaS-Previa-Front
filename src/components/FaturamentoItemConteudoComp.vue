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

        <!-- Item de Configuração -->
        <TabelaComp
            :qtdItems="getFaturamentoItem.qtdItems"
            :titulo="'Item de Configuração: ' + getFaturamentoItem.nome"
            :headers="getHeadersFaturamentoItemSemAcoes"
            :items="getFaturamentoItem.items"
            :footer="true"
        />
        
        <br>

        <!-- Faturamento Item Conteudo -->
        <TabelaAbasComp
         :titulo="'Total: '"
         :items="getFaturamentosItemConteudo.items"
         :headers="getFaturamentosItemConteudo.headers"

        />
        
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TabelaComp from './TabelaComp';
import TabelaAbasComp from './TabelaAbasComp';

export default {
    name: 'FaturamentoItemConteudoComp',

    components: {
        TabelaComp,
        TabelaAbasComp
    },

    mounted() {
        this.faturamentoItemAction(this.idItem),
        this.faturamentosItemConteudoAction(this.idItem)
    },

    data() {
        return {
            headersFaturamentoItemConteudo: [
                { text: "id", value: "id" },
            ],

            idItem: this.$route.params.idItem,

            btnHeader: { color: 'primary', text: "Voltar", to: '/', icon: "mdi-undo-variant" },
        }
    },

    computed: {
        ...mapGetters([
            "getHeadersFaturamentoSemAcoes",
            "getHeadersFaturamentoItemSemAcoes",
            "getPrevia",
            "getFaturamentoItem",
            "getFaturamentosItemConteudo",
        ])
    },

    methods: {
        ...mapActions([
            "faturamentosItemConteudoAction",
            "faturamentoItemAction",
        ])
    }
}
</script>