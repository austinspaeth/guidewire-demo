import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';

type TSProps = {
    active:string,
    children:string,
	theme:string
}

const NavItem:FunctionComponent<TSProps> = (props) => {

	return (
		<NavItemContainer>
            { props.children }
		</NavItemContainer>
	)
}

// STYLED COMPONENTS //
const NavItemContainer = styled.div((props) => ({
    color: props.active ? props.theme.brand : '#6A6F71',
    fontSize:18,
    margin:'0px 12px',
    fontWeight: props.active ? 700:400,
    paddingTop:props.active? 8 : 5,
    borderBottom:'2px solid',
    borderColor: props.active ? props.brand:'transparent',
    height:'100%',
    boxSizing:'border-box',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
}));

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

export default connect(mapStateToProps,mapDispatchToProps)(NavItem);