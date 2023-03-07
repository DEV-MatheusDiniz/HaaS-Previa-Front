<template>
  <v-card>
    <!-- Titulo da tabela -->
    <v-card-title>
      Previa: {{ previas.length }}

      <v-spacer></v-spacer>

      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Buscar"
        single-line
        hide-details
      ></v-text-field>

      <v-spacer></v-spacer>

      <v-btn color="success" elevation="2">Nova Previa</v-btn>
    </v-card-title><!-- /Titulo da tabela -->

    <!-- Body da tabela -->
    <v-data-table :headers="headers" :items="previas" :search="search">
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

      <!-- Ações -->
      <template v-slot:[getAcoes]="{ item }">
        <router-link to="/previa">
          <v-icon
            small
            @click="getPreviaAction(item.id)"
          >
            mdi-eye
          </v-icon>
        </router-link>
      </template><!-- /Ações -->
      
    </v-data-table><!-- /Body da tabela -->
  </v-card>
</template>

<script>
import { RouterLink } from "vue-router";
import { mapState, mapActions } from "vuex";

export default {
    name: "PreviasComp",

    components: { RouterLink },

    mounted() {
      this.getPreviasAction();
    },

    data() {
        return {
            search: "",

            headers: [
              { text: "Código", value: "id" },
              { text: "Regra de Faturamento", value: "bo_regra_cobranca" },
              { text: "Dia/Mês de Referência", value: "dt_mes_referencia" },
              { text: "Qtd. ICs Contabilizados ", value: "qt_contabilizado" },
              { text: "Vlr. Total em USs", value: "vl_total_grupo" },
              { text: "Vlr. Total Mensal", value: "vl_total_mensal" },
              { text: "Dt. Processada", value: "dt_cadastro" },
              { text: "Ações", value: "acoes" }
            ],
        };
    },

    computed: {
      ...mapState([
          "previas",
          "getRegraCobranca",
          "getMesReferencia",
          "getAcoes"
      ]),
    },

    methods: {
        ...mapActions([
            "getPreviasAction",
            "getPreviaAction",
        ]),
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

};
</script>
