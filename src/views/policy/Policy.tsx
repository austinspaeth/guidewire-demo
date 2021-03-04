import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';
import PageSummary from '../../components/content/PageSummary';

type TSProps = {
	theme:string
}

const Policy:FunctionComponent<TSProps> = (props) => {

	return (
		<>
            <Row>
                <PageSummary />
            </Row>
            <Row>

            </Row>
		</>
	)
}

// STYLED COMPONENTS //
const Row = styled.div({
    width:'calc(100% - 40px)',
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

export default connect(mapStateToProps,mapDispatchToProps)(Policy);