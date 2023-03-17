import api from '@/services/api'


const actions = {
    
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
      api
        .get('faturamentos/one/' + id)
        .then((response) => {
          commit('previaMutation', response.data)
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // GET Faturamentos Items
    faturamentosItemAction({ commit }, idPrevia){
      api
        .get('faturamentosItem/' + idPrevia)
        .then(response => {
          commit('faturamentosItemMutation', response.data)
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // GET Faturamento Item
    faturamentoItemAction({ commit }, idItem) {
      api
        .get('faturamentosItem/one/' + idItem)
        .then(response => {
          commit('faturamentoItemMutation', response.data)
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // GET Faturamento Item Conteudo
    faturamentosItemConteudoAction({ commit }, id){
      api
        .get('faturamentoItemConteudo/' + id)
        .then(response => {
          commit('faturamentosItemConteudoMutation', response.data)
        })
        .catch((error) => {
          console.log(error);
        });
    },

}

export default actions;
