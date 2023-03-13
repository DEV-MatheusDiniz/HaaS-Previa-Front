const getters = {

    // Previas
    getPrevias(state) {
      return state.previas;
    },

    // Previa
    getPrevia(state) {
      return state.previa;
    },

    // Headers Faturamento
    getHeadersFaturamento(state) {
      return state.headersFaturamento;
    },

    // Headers Faturamento Sem Acoes
    getHeadersFaturamentoSemAcoes(state) {
      return state.headersFaturamento.filter(item => item.value != 'acoes');
    },

    // Headers Faturamento Item
    getHeadersFaturamentoItem(state) {
      return state.headersFaturamentoItem;
    },

    // Faturamentos Item
    getFaturamentosItem(state) {
      return state.faturamentosItem;
    },

    // Regra Cobranca
    getRegraCobranca() {
      return "item.bo_regra_cobranca";
    },

    // Mes Referencia
    getMesReferencia() {
      return "item.dt_mes_referencia";
    },

    // Acoes
    getAcoes() {
      return "item.acoes";
    },

}

export default getters;
