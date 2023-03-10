<template>
    <v-card>
        <v-card-title class="titulo-grey">

          {{ titulo }}

          <v-spacer></v-spacer>

          <v-text-field
            v-if="items.length > 1"
            v-model="search"
            append-icon="mdi-magnify"
            label="Buscar"
            single-line
            hide-details
            dark
          ></v-text-field>

          <v-spacer></v-spacer>

          {{ subtitulo }}

          <v-btn
            v-if="btnHeader"
            :color="btnHeader.color"
            :to="btnHeader.to"
            elevation="2">
                {{ btnHeader.text }}
                <v-icon>{{btnHeader.icon}}</v-icon>
          </v-btn>

        </v-card-title>

        <v-data-table
          :headers="headers"
          :items="items"
          :search="search"
          :hide-default-footer="footer"
          :sort-by="ordenacao"
          class="estilo-zebra"
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

            <!-- Ações -->
            <template v-slot:[getAcoes]="{ item }">
                <router-link to="/previa">
                  <v-icon
                    small
                    @click="previaAction(item.id), faturamentosItemAction(item.id)"
                  >
                    mdi-eye
                  </v-icon>
                </router-link>
              </template><!-- /Ações -->
        </v-data-table>
      </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'TabelaComp',

    props: {
        titulo: String,
        subtitulo: String,
        headers: Array,
        items: Array,
        btnHeader: Object,
        footer: Boolean,
        ordenacao: String
    },

    data() {
        return {
            search: ''
        }
    },

    computed: {
        ...mapGetters([
            "getRegraCobranca",
            "getMesReferencia",
            "getAcoes"
        ])
    },

    methods: {
        ...mapActions([
            "previaAction",
            "faturamentosItemAction"
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
    }
}
</script>

<style>
.titulo-grey {
  background-color: grey;
  color: white;
}

.estilo-zebra tbody tr:nth-child(2n){
  background-color: #b2b2b2;
}

a {
  text-decoration: none;
}
</style>
