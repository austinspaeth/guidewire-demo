import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';
import Search from '../components/sidebar/Search';
import Navigation from '../components/sidebar/Navigation';

type TSProps = {
	theme:string
}

const Sidebar:FunctionComponent<TSProps> = (props) => {

	return (
		<SidebarContainer>
            <Search />
            <Navigation />
		</SidebarContainer>
	)
}

// STYLED COMPONENTS //
const SidebarContainer = styled.div({
    height: 'calc(100% - 60px)',
    width: 350,
    top:60,
    padding:20,
    boxSizing:'border-box',
    background:'#E4E9EB',
    position:'fixed',
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
});


// REDUX MAPPING //
const mapStateToProps = (state) => {
	return {
		theme: state.theme
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		
	};
};

export default connect(mapStateToProps,mapDispatchToProps)(Sidebar);