import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';

type TSProps = {
    rows: any,
	theme:string,
    title:string,
}

const ContentSection:FunctionComponent<TSProps> = (props) => {

	return (
		<ContentSectionContainer>
            <SectionTitle>{props.title}</SectionTitle>
            {props.rows.map((row) => 
                <Row>
                    {row.map((item) => 
                        <RowItem>
                            <Label>{item.label}</Label>
                            <Value>{item.value}</Value>
                        </RowItem>
                    )}
                </Row>
            )}
		</ContentSectionContainer>
	)
}

// STYLED COMPONENTS //
const ContentSectionContainer = styled.section({
    width:'100%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    borderRadius:4,
    background:'#fff',
    border:'1px solid #CCE0E8',
    padding:25,
    boxSizing:'border-box',
    overflowX:'hidden',
    position:'relative',
    marginTop:20,
});
const SectionTitle = styled.h1((props) => ({
    fontSize:24,
    margin:0,
    fontWeight:700,
    color:props.theme.darkText
}));
const Row = styled.div((props) => ({
    width:'100%',
    borderBottom:'1px solid #D9E3E6',
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    paddingTop:15,
    paddingBottom:15,
    ':last-child':{
        borderBottom:'none'
    }
}));
const RowItem = styled.div((props) => ({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'flex-start',
    marginRight:35,
}));
const Label = styled.div((props) => ({
    color:props.theme.lightText,
    fontSize:15,
    marginBottom:2,
}));
const Value = styled.div((props) => ({
    color:props.theme.darkText,
    fontSize:18,
    fontWeight:700
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

export default connect(mapStateToProps,mapDispatchToProps)(ContentSection);