import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        status:0,//0为请求中，1为请求结束
        searchText:localStorage.getItem("historySearch")?JSON.parse(localStorage.getItem("historySearch"))[JSON.parse(localStorage.getItem("historySearch")).length-1] : ""
    },
    mutations:{
        setSearchText: (state, text) => {
            state.searchText = text
        },
        setStatus: (state, text) => {
            state.status = text
        }
    },
    getters:{
        getSeacherText: (state) => {
            return state.searchText
        },
        getStatus: (state) => {
            return state.status
        }
    }
})