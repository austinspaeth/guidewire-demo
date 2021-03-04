import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';

type TSProps = {
    children:string,
    fontSize?: number,
	theme:string
}

const Button:FunctionComponent<TSProps> = (props) => {

	// STATE //
	const [ui, setUi] = useState();

	return (
		<ButtonContainer fontSize={props.fontSize}>
            {props.children}
		</ButtonContainer>
	)
}

// STYLED COMPONENTS //
const ButtonContainer = styled.div((props) => ({
    position:'relative',
    padding:'4px 6px',
    fontSize: props.fontSize ? props.fontSize : 16,
    borderRadius: 4,
    color: props.theme.brand,
    border: '1px solid #6BC1DE',
    cursor:'pointer',
    transition:'background .2s ease-in-out',
    ':hover':{
        background:'#e3f0f5'
    },
    ':focus':{
        background:'#e3f0f5'
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

export default connect(mapStateToProps,mapDispatchToProps)(Button);