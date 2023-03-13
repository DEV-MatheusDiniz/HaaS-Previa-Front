const state = {

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
    ],

}

export default state;
