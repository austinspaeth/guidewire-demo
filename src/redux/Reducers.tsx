import { SET_THEME, TOGGLE_ACTIONS, TOGGLE_SIDEBAR } from './Constants';
import { defaultStyles } from '../assets/mockData/defaultStyles';
import { currentPageData } from '../assets/mockData/currentPage';

const actions = (state = false, action) => {
	switch (action.type) {
		case TOGGLE_ACTIONS:
			return action.actions;
		default:
			return state;
	}
};

const currentPage = (state = currentPageData, action) => {
	switch (action.type) {
		case SET_THEME:
			return action.currentPage;
		default:
			return state;
	}
};

const sidebar = (state = false, action) => {
	switch (action.type) {
		case TOGGLE_SIDEBAR:
			return action.sidebar;
		default:
			return state;
	}
};

const theme = (state = defaultStyles, action) => {
	switch (action.type) {
		case SET_THEME:
			return action.test;
		default:
			return state;
	}
};

// COMBINE REDUCERS //
export default {
    actions,
    currentPage,
    sidebar,
	theme
};