import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tickets:[
      {nombre_aerolinea: 'aerolínea 1', precio:125.62, numero_escalas:2 , duracion_vuelo:'6 horas y 30 min'},
      {nombre_aerolinea: 'aerolínea 2', precio:255.62, numero_escalas:1 , duracion_vuelo:'4 horas y 30 min'},
      {nombre_aerolinea: 'aerolínea 3', precio:455.62, numero_escalas:0 , duracion_vuelo:'2 hora'},
      {nombre_aerolinea: 'aerolínea 4', precio:155.62, numero_escalas:2 , duracion_vuelo:'4 hora y 50 min'},
      {nombre_aerolinea: 'aerolínea 6', precio:245.62, numero_escalas:2 , duracion_vuelo:'5 hora y 35 min'},
      {nombre_aerolinea: 'aerolínea 7', precio:195.62, numero_escalas:0 , duracion_vuelo:'2 hora y 50 min'},
      {nombre_aerolinea: 'aerolínea 10', precio:145.62, numero_escalas:1 , duracion_vuelo:'3 hora y 10 min'},
      {nombre_aerolinea: 'aerolínea 15', precio:225.62, numero_escalas:6 , duracion_vuelo:'9 hora y 25 min'},
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
