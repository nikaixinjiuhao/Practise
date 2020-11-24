import Vue from "vue";
import Vuex from 'vuex';
Vue.use(Vuex)
const store=new Vuex.Store({
  state:{
    name: 'olio',
    age:18
  },
  mutations:{
    showPeople(state,msg){
      state.msg=msg
    }
  }
})
export  default  store
