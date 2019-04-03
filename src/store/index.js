import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        searchText:JSON.parse(localStorage.getItem("historySearch"))[JSON.parse(localStorage.getItem("historySearch")).length-1] || ""
    },
    mutations:{
        setSearchText: (state, text) => {
            state.searchText = text
        }
    },
    getters:{
        getSeacherText: (state) => {
            return state.searchText
        }
    }
})