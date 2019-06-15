import Vue from 'vue';
import Vuex from 'vuex';
import config from '../../config';
Vue.use(Vuex);

const state = {
	cocktails: [],
};

const mutations = {
	setCocktails: (state, payload) => {
		state.cocktails = payload;
	},
};

const actions = {
	fetchCocktails({ commit }) {
		var azure = require('azure-storage');
		var tableService = azure.createTableService(config.DB_KEY);
		var query = new azure.TableQuery()
			.top(100)
			.where('ingredient1 eq ?', 'Blue curacao')
			.or('ingredient2 eq ?', 'Blue curacao')
			.or('ingredient3 eq ?', 'Blue curacao')
			.or('ingredient4 eq ?', 'Blue curacao')
			.or('ingredient5 eq ?', 'Blue curacao')
			.or('ingredient6 eq ?', 'Blue curacao');

		tableService.queryEntities('cocktails', query, null, function(error, result, response) {
			if (!error) {
				commit('setCocktails', response.body.value);
			} else {
				//throw error
				alert('Oh noes! No cocktails found.');
			}
		});
	},
};

const storeConf = {
	state,
	mutations,
	actions,
};

export default new Vuex.Store(storeConf);
