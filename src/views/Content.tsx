import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';

type TSProps = {
    children:FunctionComponent,
	theme:string
}

const Content:FunctionComponent<TSProps> = (props) => {

	return (
		<ContentContainer>
		    {props.children}
		</ContentContainer>
	)
}

// STYLED COMPONENTS //
const ContentContainer = styled.div({
    width:'calc(100% - 350px)',
    height:'calc(100% - 60px)',
    overflow:'auto',
    position:'fixed',
    right:0,
    top:60,
    boxSizing:'border-box',
    paddingTop:20,
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

export default connect(mapStateToProps,mapDispatchToProps)(Content);