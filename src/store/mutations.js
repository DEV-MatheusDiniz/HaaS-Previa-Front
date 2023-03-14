const mutations = {

    // Previas
    previasMutation(state, previas) {
      previas.map((previa) => {
        // Visualizar
        previa.acoes = previa.id
      });

      state.previas = previas;
    },

    // Previa
    previaMutation(state, id) {
      state.previa = state.previas.filter(previa => previa.id == id);
    },

    // Faturamento Item
    faturamentosItemMutation(state, data) {
      state.faturamentosItem = data;
    }

}

export default mutations;
