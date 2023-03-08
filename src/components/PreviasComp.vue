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
    <v-data-table :headers="getHeadersFaturamento" :items="previas" :search="search">
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
            @click="previaAction(item.id)"
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
import { mapState, mapActions, mapGetters } from "vuex";

export default {
    name: "PreviasComp",

    components: { 
      RouterLink
    },

    mounted() {
      this.previasAction();
    },

    data() {
        return {
            search: "",
        };
    },

    computed: {
      ...mapState([ "previas" ]),

      ...mapGetters([
        "getHeadersFaturamento",
        "getPrevias",
        "getRegraCobranca",
        "getMesReferencia",
        "getAcoes"
      ])
    },

    methods: {
        ...mapActions([
            "previasAction",
            "previaAction",
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
