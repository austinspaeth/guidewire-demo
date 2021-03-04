import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';

type TSProps = {
    item: { label:string, value:string, link?:string },
	theme:string
}

const SummaryItem:FunctionComponent<TSProps> = (props) => {

	return (
		<SummaryItemContainer>
            <Label>{props.item.label}</Label>
            <Value>{props.item.value}</Value>
		</SummaryItemContainer>
	)
}

// STYLED COMPONENTS //
const SummaryItemContainer = styled.div({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'flex-start',
    flexWrap:'no-wrap',
    marginRight:25,
});
const Label = styled.div((props) => ({
    color: props.theme.lightText,
    fontSize:15,
    fontWeight:300,
    whiteSpace:'nowrap'
}));
const Value = styled.div((props) => ({
    color: props.theme.darkText,
    fontSize:18,
    fontWeight:700,
    whiteSpace:'nowrap'
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

export default connect(mapStateToProps,mapDispatchToProps)(SummaryItem);