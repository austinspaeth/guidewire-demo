import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';

// DATA //
import { navOptions } from '../../assets/mockData/navOptions';

type TSProps = {
	theme:string,
}

const Navigation:FunctionComponent<TSProps> = (props) => {

	return (
		<NavigationContainer>
            {navOptions.map((option) => 
                <Option key={option.displayTitle}>
                    <TopLevelOption active={option.active}>
                        {option.displayTitle}
                        {option.children && <Carat active={option.active} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76.6 139.5"><path d="M39.9,69.2,2.6,23.1C-1.2,18.5-.9,15.8,3.7,12L16.1,2C19.7-.9,23-.6,26,3,41.8,22.6,57.7,42.2,73.5,61.9c4.2,5.2,4.1,8.6.1,13.9L28.4,135.9c-3.3,4.2-6.2,4.7-10.6,1.5L5.1,127.8c-4-3-4.4-6.2-1.3-10.2C15.4,102,27.1,86.5,38.7,71,39.1,70.4,39.5,69.9,39.9,69.2Z"/></Carat>}
                    </TopLevelOption>
                    {option.children?.map((subOption) => 
                        <SubLevelOption parentActive={option.active} key={subOption.displayTitle} active={subOption.active}>{subOption.displayTitle}</SubLevelOption>
                    )}
                </Option>
            )}
		</NavigationContainer>
	)
}

// STYLED COMPONENTS //
const NavigationContainer = styled.div({
    width: '100%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
});
const Option = styled.div((props) => ({
    width:'100%',
    display:'flex',
    justifyContent:'flex-start',
    flexDirection:'column',
    alignItems:'center',
}));
const TopLevelOption = styled.div((props) => ({
    width:'100%',
    height:45,
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    fontSize:16,
    fontWeight: props.active ? 700 : 300,
    position:'relative',
    color: props.active ? props.theme.brand : props.theme.darkText,
    cursor:'pointer',
    transition:'color .2s ease-in-out',
    ':hover':{
        color: props.theme.brand
    }
}));
const SubLevelOption = styled.div((props) => ({
    width:'calc(100% + 40px)',
    height:45,
    fontSize:16,
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    background:'#d4dade',
    boxSizing:'border-box',
    color: props.active ? props.theme.brand : props.theme.darkText,
    fontWeight: props.active ? 700 : 300,
    paddingLeft: props.active ? 36 : 40,
    borderLeft: props.active ? '4px solid' : '0px none',
    borderColor: props.theme.brand,
    cursor:'pointer',
    transition:'color .2s ease-in-out',
    ':hover':{
        color: props.theme.brand
    }
}));
const Carat = styled.svg((props) => ({
    width:7,
    fill: props.active ? props.theme.brand : props.theme.darkText,
    position:'absolute',
    right:0,
    transform:'rotate(90deg)'
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

export default connect(mapStateToProps,mapDispatchToProps)(Navigation);