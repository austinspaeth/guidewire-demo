import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';
import PageSummary from '../../components/content/PageSummary';
import ContentSection from '../../components/content/ContentSection';
import ActionBar from '../../components/content/ActionBar';

type TSProps = {
    currentPage: any,
	theme:string
}

const Policy:FunctionComponent<TSProps> = (props) => {

	return (
		<>
            <Row>
                <PageSummary />
            </Row>
            <Row>
                <LeftColumn>
                    {props.currentPage.sections.map((section) =>
                        <ContentSection key={section.sectionTitle} title={section.sectionTitle} rows={section.rows} />
                    )}
                </LeftColumn>
                <RightColumn>
                    <ActionBar />
                </RightColumn>
            </Row>
		</>
	)
}

// STYLED COMPONENTS //
const Row = styled.div({
    width:'calc(100% - 40px)',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'flex-start'
});
const LeftColumn = styled.div({
    width: 'calc(100% - 270px)'
});
const RightColumn = styled.div({
    width: 250,
});

// REDUX MAPPING //
const mapStateToProps = (state) => {
	return {
        currentPage: state.currentPage,
		theme: state.theme
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		
	};
};

export default connect(mapStateToProps,mapDispatchToProps)(Policy);