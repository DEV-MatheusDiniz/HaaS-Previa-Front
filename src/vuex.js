import Vue from "vue";
import Vuex from "vuex";

import api from "@/services/api";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    previas: [],

    previa: [],

    faturamentoItem: [],

    headersFaturamento: [
      { text: "Código", value: "id" },
      { text: "Regra de Faturamento", value: "bo_regra_cobranca" },
      { text: "Dia/Mês de Referência", value: "dt_mes_referencia" },
      { text: "Qtd. ICs Contabilizados ", value: "qt_contabilizado" },
      { text: "Vlr. Total em USs", value: "vl_total_grupo" },
      { text: "Vlr. Total Mensal", value: "vl_total_mensal" },
      { text: "Dt. Processada", value: "dt_cadastro" },
      { text: "Ações", value: "acoes" }
    ],

    headersFaturamentoItem: [
      { text: "Descrição", value: "" },
      { text: "Quantidade do grupo de IC's na Infraestrutura", value: "" },
      { text: "Relevância (Vlr)", value: "" },
      { text: "Relevância (%)", value: "" },
      { text: "Diversidade (Vlr)", value: "" },
      { text: "Diversidade (%)", value: "" },
      { text: "Quantidade de US's estimada para consumo unitário", value: "" },
      { text: "Quantidade de US's estimada para consumo por grupo de IC's", value: "" },
      { text: "Valor mensal para a sustentação do Item", value: "" },
    ]
  },

  getters: {
    getPrevias(state) {
      return state.previas;
    },

    getPrevia(state) {
      return state.previa;
    },

    getHeadersFaturamento(state) {
      return state.headersFaturamento;
    },

    getHeadersFaturamentoSemAcoes(state) {
      return state.headersFaturamento.filter(item => item.value != 'acoes');
    },

    getHeadersFaturamentoItem(state) {
      return state.headersFaturamentoItem;
    },

    getFaturamentoItem(state) {
      return state.faturamentoItem;
    },

    getRegraCobranca() {
      return "item.bo_regra_cobranca";
    },

    getMesReferencia() {
      return "item.dt_mes_referencia";
    },

    getAcoes() {
      return "item.acoes";
    },
  },

  actions: {
    previasAction({ commit }) {
      api
        .get('faturamentos/')
        .then((response) => {
          commit('previasMutation', response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    previaAction({ commit }, id) {
      commit('previaMutation', id)
    },

    faturamentoItemAction({ commit }){
      api
        .get('faturamentosItem/')
        .then(response => {
          commit('faturamentoItemMutation', response.data)
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },

  mutations: {
    previasMutation(state, previas) {
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
        previa.acoes = previa.id
      });

      // Salvando no State
      state.previas = previas;
    },

    previaMutation(state, id) {
      state.previa = state.previas.filter(previa => previa.id == id)
    },

    faturamentoItemMutation(state, faturamentosItem) {
      state.faturamentoItem = faturamentosItem
    }
  },
  
});

export { store };
