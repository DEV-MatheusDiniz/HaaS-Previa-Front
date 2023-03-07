import Vue from "vue";
import Vuex from "vuex";

import api from "@/services/api";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    previas: [],

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
  },

  actions: {
    getPreviasAction({ commit }) {
      api
        .get('faturamentos/')
        .then((response) => {
          commit('getPreviasMutation', response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

  },

  mutations: {
    getPreviasMutation(state, previas) {
      previas.map((previa) => {
        // Regra de Faturamento
        if (previa.bo_regra_cobranca) {
          previa.bo_regra_cobranca = 'APLICADA'
        } else {
          previa.bo_regra_cobranca = 'NÃO APLICADA'
        }

        // Dia/Mês de Referência
        const dataReferencia = new Date(previa.dt_mes_referencia);
        if (previa.bo_diario) {
          previa.dt_mes_referencia = dataReferencia.toLocaleDateString();
        } else {
          previa.dt_mes_referencia = dataReferencia.toLocaleDateString([], {
            month: "long",
          });
        }

        // Valor Total em US's
        previa.vl_total_grupo = "US " + previa.vl_total_grupo;

        // Valor Total Mensal
        previa.vl_total_mensal = "R$ " + previa.vl_total_mensal;

        // Data Processada
        let dataProcessada = new Date(previa.dt_cadastro);
        previa.dt_cadastro = dataProcessada.toLocaleDateString() +
          " - " +
          dataProcessada.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        // Visualizar
        previa.acoes = ''
      });

      // Salvando no State
      state.previas = previas;
    },
  },
});

export { store };
