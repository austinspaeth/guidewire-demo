import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';
import SummaryItem from '../content/pageSummary/SummaryItem';

type TSProps = {
    currentPage:any,
	theme:string
}

const PageSummary:FunctionComponent<TSProps> = (props) => {

	return (
		<PageSummaryContainer>
            <PageTitle>{props.currentPage.pageTitle}</PageTitle>
            <Divider/>
            {props.currentPage.rowContents.map((item) => 
                <SummaryItem item={item} key={item.label} />
            )}
            <Overflow>
                <Divider/>
                <Carat xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76.6 139.5"><path d="M39.9,69.2,2.6,23.1C-1.2,18.5-.9,15.8,3.7,12L16.1,2C19.7-.9,23-.6,26,3,41.8,22.6,57.7,42.2,73.5,61.9c4.2,5.2,4.1,8.6.1,13.9L28.4,135.9c-3.3,4.2-6.2,4.7-10.6,1.5L5.1,127.8c-4-3-4.4-6.2-1.3-10.2C15.4,102,27.1,86.5,38.7,71,39.1,70.4,39.5,69.9,39.9,69.2Z"/></Carat>
            </Overflow>
		</PageSummaryContainer>
	)
}

// STYLED COMPONENTS //
const PageSummaryContainer = styled.div({
    height:90,
    width:'100%',
    borderRadius:4,
    background:'#fff',
    border:'1px solid #CCE0E8',
    padding:25,
    boxSizing:'border-box',
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    overflowX:'hidden',
    position:'relative',
});
const PageTitle = styled.div((props) => ({
    fontSize:20,
    fontWeight:600,
    color: props.theme.brand,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:50,
    padding: '0px 12px',
    background:'#EAF5F8',
    borderRadius:4,
}));
const Divider = styled.div((props) => ({
    height:60,
    width:1,
    minWidth:1,
    background:'#CCE0E8',
    marginLeft:25,
    marginRight:25,
}));
const Overflow = styled.div((props) => ({
    height:90,
    width:90,
    background:'#fff',
    position:'absolute',
    right:0,
    top:0,
    boxShadow:'0px 0px 10px 10px #fff',
    display:'flex',
    justifyContent:'flex-end',
    alignItems:'center',
}));
const Carat = styled.svg((props) => ({
    height:15,
    marginRight:30,
    width:10,
    padding:'6px 8px',
    borderRadius:45,
    minWidth:10,
    fill:'#00749c',
    background:'#f5f8fa',
    border:'1px solid #6bc1de',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    cursor:'pointer',
    transition:'background .2s ease-in-out',
    ':hover':{
        background:'#e3f0f5'
    }
}));

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

export default connect(mapStateToProps,mapDispatchToProps)(PageSummary);