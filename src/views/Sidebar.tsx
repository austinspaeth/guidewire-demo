import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";
import { toggleSidebar } from '../redux/Actions';

// COMPONENTS //
import styled from 'styled-components';
import Search from '../components/sidebar/Search';
import Navigation from '../components/sidebar/Navigation';

type TSProps = {
    sidebar:boolean,
	theme:string,
    toggleSidebar:Function,
}

const Sidebar:FunctionComponent<TSProps> = (props) => {

	return (
        // For the purpose of this demo, clicking the sidebar will close it in mobile views //
		<SidebarContainer onClick={() => props.toggleSidebar(false)} sidebarVisible={props.sidebar}>
            <Search />
            <Navigation />
		</SidebarContainer>
	)
}

// STYLED COMPONENTS //
const SidebarContainer = styled.div((props) => ({
    height: 'calc(100% - 60px)',
    width: 350,
    top:60,
    padding:20,
    boxSizing:'border-box',
    overflowY:'auto',
    background:'#E4E9EB',
    position:'fixed',
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
    '@media(max-width:1000px)':{
        zIndex:3,
        transform: props.sidebarVisible ? 'translateX(0%)' : 'translateX(-100%)',
        transition:'transform .4s ease-in-out',
    },
    '@media(max-width:600px)':{
        width:'100%',
    }
}));


// REDUX MAPPING //
const mapStateToProps = (state) => {
	return {
        sidebar: state.sidebar,
		theme: state.theme
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleSidebar: (boolean) => dispatch(toggleSidebar(boolean))
	};
};

export default connect(mapStateToProps,mapDispatchToProps)(Sidebar);