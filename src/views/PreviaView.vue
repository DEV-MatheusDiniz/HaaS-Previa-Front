<template>
    <v-card>
        <!-- Titulo da tabela -->
        <v-card-title>
            Previa: {{ previa[0].id }}
  
        <v-spacer></v-spacer>
  
        <router-link to="/">Voltar</router-link>
        </v-card-title><!-- /Titulo da tabela -->
  
        <!-- Body da tabela -->
        <v-data-table
            :headers="headers"
            :items="previa"
            :search="search"
        >
        <!-- Regra Cobranca -->
        <template v-slot:[getRegraCobranca]="{ item }">
            <v-btn
            :color="getCorRegraCobranca(item.bo_regra_cobranca)"
            elevation="2"
            dark
            >
            {{ item.bo_regra_cobranca }}
            </v-btn>
        </template><!-- /Regra Cobranca -->

        <!-- Dia/Mês de Referência -->
        <template v-slot:[getMesReferencia]="{ item }">
            <v-btn
            :color="getCorMesReferencia(item.bo_diario)"
            elevation="2"
            dark
            >
            {{ item.dt_mes_referencia }}
            </v-btn>
        </template><!-- /Dia/Mês de Referência -->

      </v-data-table><!-- /Body da tabela -->
    </v-card>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'PreviaView',

    data() {
        return {
            search: "",
            getRegraCobranca: "item.bo_regra_cobranca",
            getMesReferencia: "item.dt_mes_referencia",
            getAcoes: "item.acoes",

            headers: [
              { text: "Código", value: "id" },
              { text: "Regra de Faturamento", value: "bo_regra_cobranca" },
              { text: "Dia/Mês de Referência", value: "dt_mes_referencia" },
              { text: "Qtd. ICs Contabilizados ", value: "qt_contabilizado" },
              { text: "Vlr. Total em USs", value: "vl_total_grupo" },
              { text: "Vlr. Total Mensal", value: "vl_total_mensal" },
              { text: "Dt. Processada", value: "dt_cadastro" },
            ],
        };
    },

    computed: {
        ...mapState([
            "previa",
            "getRegraCobranca",
            "getMesReferencia",
            "getAcoes"
        ]),
    },

    methods: {
        getCorRegraCobranca(regraCobranca) {
            if (regraCobranca == "APLICADA")
                return "orange";
            else if (regraCobranca == "NÃO APLICADA")
                return "grey";
        },
        getCorMesReferencia(bo_diario) {
            if (bo_diario)
                return "grey";
            else
                return "black";
        }
    },

}
</script>