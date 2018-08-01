// @ts-ignore: Unreachable code error

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

interface StateValue {
    user?: string,
    user_id?:string,
    token?:string,
    role?:string,
    email?:string,
}

interface PayloadValue {
    username?: string,
    id?:string,
    token?:string,
    role?:string,
    email?:string,
}


const state = {
     user: "",
     user_id: "",
     token:"",
     role:"",
     email:"",
}

const getters = {
  getUserData: (state:StateValue) => state,
}

const mutations = {
  AUTHENTICATE: (state:StateValue, payload:PayloadValue) => {
    state.user = payload.username;
    state.user_id = payload.id;
    state.token = payload.token;
    state.role = payload.role;
    state.email = payload.email;
    
  },
  LOGOUT: () => {
    state.user = "";
    state.user_id = "";
    state.token = "";
    state.role = "";
    state.email = "";
  },
}

const actions = {
  auth:(state:any, payload:PayloadValue) => {
  state.commit("AUTHENTICATE", payload)
    //     state.user = payload.username;
//     state.user_id = payload.id;
//     state.token = payload.token;
//     state.role = payload.role;
//     state.email = payload.email;
  },
  lgout: (state:any, payload:PayloadValue) =>{
    state.commit("LOGOUT", payload)
//     state.user = "";
//     state.user_id = "";
//     state.token = "";
//     state.role = "";
//     state.email = "";
  },
}

 var store = new Vuex.Store({
        state:state,
        getters:getters,
        mutations: mutations,
        actions: actions,
    });

export default store;
