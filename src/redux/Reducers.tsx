import { SET_THEME } from './Constants';
import defaultStyles from '../assets/mockData/defaultStyles';
import currentPageData from '../assets/mockData/currentPage';

const currentPage = (state = currentPageData, action) => {
	switch (action.type) {
		case SET_THEME:
			return action.test;
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
    currentPage,
	theme
};