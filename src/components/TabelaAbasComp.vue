<template>
    <v-card>

        <v-tabs
         v-model="tab"
         color="orange"
         background-color="grey"
         dark
         align-with-title
        >

        <v-tabs-slider color="orange"></v-tabs-slider>
  
        <v-tab
         v-for="aba in abas"
         :key="aba"
        >
            {{ aba  }}

        </v-tab>

        </v-tabs>

  
        <v-tabs-items v-model="tab">

            <v-tab-item
             v-for="aba in abas"
             :key="aba"
            >

            <v-card flat>

                <v-container>

                    <TabelaComp
                     :titulo="titulo"
                     :qtdItems="qtdItems"
                     :headers="headers[tab]"
                     :items="items[tab]"
                    />

                </v-container>

            </v-card>

            </v-tab-item>

        </v-tabs-items>

    </v-card>
</template>

<script>
import TabelaComp from './TabelaComp';

  export default {
    components: {
        TabelaComp
    },

    props: {
        titulo: String,
        qtdItems: Number,
        items: Array,
        headers: Array
    },

    data () {
      return {
        tab: null,

        abas: [ 
            'CONTABILIZADO',
            'NÃO CONTABILIZADO',
            'CONDICIONAL',
            'DIVERSIDADE'
        ],

      }
    },

  }
</script>
