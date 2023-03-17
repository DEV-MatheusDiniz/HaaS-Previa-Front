const mutations = {

    // Previas
    previasMutation(state, previas) {
      state.previas = previas;
    },

    // Previa
    previaMutation(state, previa) {
      state.previa = previa;
    },

    // Faturamento Item
    faturamentosItemMutation(state, faturamentosItem) {
      state.faturamentosItem = faturamentosItem;
    },

    // Faturamento Item
    faturamentoItemMutation(state, item) {
      state.faturamentoItem = item;
    },

    // faturamentos Item Conteudo
    faturamentosItemConteudoMutation(state, itemConteudo) {
      state.faturamentosItemConteudo = itemConteudo;
    },

}

export default mutations;
