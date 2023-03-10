<template>
    <div>
        <!-- Tabela Faturamento -->
        <v-card>
            <!-- Titulo da tabela -->
            <v-card-title>
                Previa: {{ getPrevia[0].id }}
    
                <v-spacer></v-spacer>
        
                <v-btn
                    color=primary
                    to="/"
                >
                    Voltar
                </v-btn>
            </v-card-title><!-- /Titulo da tabela -->
    
            <!-- Body da tabela -->
            <v-data-table
                :headers="getHeadersFaturamentoSemAcoes"
                :items="getPrevia"
                :hide-default-footer="true"
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

                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Buscar"
                    single-line
                    hide-details
                    dark
                ></v-text-field>

                <v-spacer></v-spacer>

                Total: {{ faturamentosItem.length }}
            </v-card-title><!-- /Titulo da tabela -->
    
            <!-- Body da tabela -->
            <v-data-table
                :search="search"
                :headers="getHeadersFaturamentoItem"
                :items="faturamentosItem"
                :sort-by="'item_configuracao'"
            >
        </v-data-table><!-- /Body da tabela -->
        </v-card>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
    name: 'PreviaView',

    data() {
        return {
            search: "",
        }
    },

    computed: {
        ...mapState([ 'faturamentosItem' ]),

        ...mapGetters([
            "getHeadersFaturamentoSemAcoes",
            "getHeadersFaturamentoItem",
            "getPrevia",
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

<style scoped>
.v-card {
    background-color: grey;
    color: white;
}


</style>