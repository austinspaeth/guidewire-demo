import { SET_THEME, TOGGLE_ACTIONS, TOGGLE_SIDEBAR } from './Constants';

export const setTheme = (theme) => ({type: SET_THEME, theme:theme});
export const toggleActions = (boolean) => ({type: TOGGLE_ACTIONS, actions:boolean});
export const toggleSidebar = (boolean) => ({type: TOGGLE_SIDEBAR, sidebar:boolean});