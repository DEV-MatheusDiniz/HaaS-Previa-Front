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
    },

}

export default actions;
