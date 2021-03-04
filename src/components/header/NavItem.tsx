import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';

type TSProps = {
    active:string,
    children:string,
	theme:string,
    view:string,
}

const NavItem:FunctionComponent<TSProps> = (props) => {

	return (
		<NavItemContainer active={props.active} view={props.view}>
            { props.children }
		</NavItemContainer>
	)
}

// STYLED COMPONENTS //
const NavItemContainer = styled.div((props) => ({
    color: props.active ? props.theme.brand : '#6A6F71',
    fontSize:16,
    margin:'0px 12px',
    fontWeight: props.active ? 700:400,
    paddingTop:7,
    borderBottom:'2px solid',
    borderColor: props.active ? props.brand:'transparent',
    height:'100%',
    boxSizing:'border-box',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    pointerEvents:'all!important',
    cursor:'pointer',
    transition:'color .2s ease-in-out',
    ':hover':{
        color: props.theme.brand
    }
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