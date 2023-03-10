const mutations = {

    // Previas
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
