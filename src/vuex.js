import Vue from "vue";
import Vuex from "vuex";

import api from "@/services/api";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    previas: [],

    previa: [],

    faturamentosItem: [],

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
      { text: "Descrição", value: "item_configuracao" },
      { text: "Quantidade do grupo de IC's na Infraestrutura", value: "qt_contabilizado" },
      { text: "Relevância (Vlr)", value: "nu_relevancia" },
      { text: "Relevância (%)", value: "vl_relevancia" },
      { text: "Diversidade (Vlr)", value: "nu_diversidade" },
      { text: "Diversidade (%)", value: "vl_diversidade" },
      { text: "Quantidade de US's estimada para consumo unitário", value: "vl_item" },
      { text: "Quantidade de US's estimada para consumo por grupo de IC's", value: "vl_total_item" },
      { text: "Valor mensal para a sustentação do Item", value: "vl_total_faturado" },
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

    getFaturamentosItem(state) {
      return state.faturamentosItem;
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
    // GET Faturamentos
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

    // GET Previa
    previaAction({ commit }, id) {
      commit('previaMutation', id)
    },

    // GET Faturamentos Item
    faturamentosItemAction({ commit }, id){
      api
        .get('faturamentosItem/'+id)
        .then(response => {
          commit('faturamentosItemMutation', response.data)
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
      state.previa = state.previas.filter(previa => previa.id == id);
    },

    faturamentosItemMutation(state, data) {
      state.faturamentosItem = data;
      console.log(data)
    }
  },
  
});

export { store };
