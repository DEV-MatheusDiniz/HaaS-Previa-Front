<template>
    <div>
        <!-- Tabela Faturamento -->
        <v-card>
            <!-- Titulo da tabela -->
            <v-card-title>
                Previa: {{ getPrevia[0].id }}
    
            <v-spacer></v-spacer>
    
            <router-link to="/">Voltar</router-link>
            </v-card-title><!-- /Titulo da tabela -->
    
            <!-- Body da tabela -->
            <v-data-table
                :headers="getHeadersFaturamentoSemAcoes"
                :items="getPrevia"
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

        <br>

        <!-- Tabela Faturamento Item -->
        <v-card>
            <!-- Titulo da tabela -->
            <v-card-title>
                Itens Faturados    
                <v-spacer></v-spacer>
                Total:
            </v-card-title><!-- /Titulo da tabela -->
    
            <!-- Body da tabela -->
            <v-data-table
                :headers="getHeadersFaturamentoItem"
                :items="getFaturamentoItem"
            >
        </v-data-table><!-- /Body da tabela -->
        </v-card>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'PreviaView',

    computed: {
        ...mapGetters([
            "getHeadersFaturamentoSemAcoes",
            "getHeadersFaturamentoItem",
            "getPrevia",
            "getFaturamentoItem",
            "getRegraCobranca",
            "getMesReferencia"
      ])
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