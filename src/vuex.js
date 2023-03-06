import Vue from "vue";
import Vuex from "vuex";

import api from "@/services/api";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    previas: [],
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

    postPreviaAction({ commit, novaPrevia }) {
      api
        .post('faturamentos/', novaPrevia)
        .then((response) => {
          commit('postPreviaMutation', response.data)
        })
        .catch((error) => {
          console.log(error);
        });
    }
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
      });

      // Salvando no State
      state.previas = previas;
    },
  },
});

export { store };
