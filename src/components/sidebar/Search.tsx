import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';
import Button from '../ui/Button';

type TSProps = {
	theme:string
}

const Search:FunctionComponent<TSProps> = (props) => {

    const [searchText, setSearchText] = useState('');

	return (
		<SearchContainer>
            <EditableArea onInput={(e) => setSearchText(e.target.innerText)} contentEditable={true}></EditableArea>
            <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 281.7 281.9"><path d="M176.8,208.4c-30.7,19.1-63.1,24.1-97.3,13.6-25.5-7.8-45.8-23.3-60.6-45.5A114.1,114.1,0,0,1,36.4,30.1C74.7-5.6,135.7-11,180.8,21.9c24.5,17.8,39.5,42,44.8,71.8s-.8,57.3-17.4,83.2a16,16,0,0,1,2.5,1.8l67,67.4c5.3,5.3,5.3,9.7,0,15s-11.5,11.6-17.3,17.3-9.5,4.6-14.2,0l-67.6-67.6A21.5,21.5,0,0,1,176.8,208.4ZM36.5,113.7c.5,43.1,33.6,76.8,77.1,76.8s76.9-33.3,76.9-76.8-34.6-76.9-77.1-77.1A76.8,76.8,0,0,0,36.5,113.7Z"/></Icon>
            <Label searchText={searchText}>Search</Label>
            <Button fontSize={13}>Advanced</Button>
		</SearchContainer>
	)
}

// STYLED COMPONENTS //
const SearchContainer = styled.div((props) => ({
    position:'relative',
    height: 45,
    width: '100%',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    boxSizing:'border-box',
    background:'#F5F8FA',
    border:'1px solid',
    borderColor:'#cbd4d8',
    borderRadius:4,
    padding:15,
    marginBottom:15,
    transition:'background .2s ease-in-out, border-color .2s ease-in-out',
    ':hover':{
        background:'#fff',
    },
    ':focus-within':{
        borderColor: props.theme.brand,
        background:'#fff',
    }
}));
const EditableArea = styled.div({
    boxSizing:'border-box',
    width:'100%',
    height:'100%',
    position:'absolute',
    paddingTop:12,
    left:0,
    top:0,
    outline:0,
    paddingLeft:40,
    cursor:'text',
    zIndex:0,
    ':focus':{
        '~ span':{
            display:'none'
        }
    }
});
const Label = styled.span((props) => ({
    fontSize:15,
    fontStyle:'italic',
    color: props.theme.lightText,
    pointerEvents:'none',
    position:'absolute',
    left:40,
    marginBottom:-2,
    display: props.searchText.length > 0 && 'none'
}));
const Icon = styled.svg( (props) => ({
    height:18,
    fill: props.theme.lightText
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

export default connect(mapStateToProps,mapDispatchToProps)(Search);