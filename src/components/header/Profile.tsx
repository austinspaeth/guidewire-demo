import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';

type TSProps = {
	theme:string
}

const Profile:FunctionComponent<TSProps> = (props) => {

	return (
		<ProfileContainer>
            <UserMeta>
                <UserName>Test User</UserName>
                <Company>Company</Company>
            </UserMeta>
            <UserIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 307.5 307.6"><path d="M262.8,261.4c-5-48.4-30-81.2-75.4-98.9,18.1-13.6,27.5-31.4,26.2-54.1-1-15.7-7.6-29.1-19.2-39.8a59.8,59.8,0,0,0-84.3,2.9c-22.3,23.5-24,66.1,10.1,91.3-21.5,7.4-39.2,19.8-52.9,37.7S46.5,238.8,45,261.4C11.8,231.7-11,172.5,5.5,113.2,23.4,49,81.2,2.9,145.7.1c72-3,131,41.6,152.7,101.5C320.8,163.6,299.3,227.4,262.8,261.4Z" transform="translate(0 0)"/><path d="M150.8,307.6c-28.6-.2-57.3-9.1-83.5-26.5-5.7-3.7-7.5-7.8-7.4-14.5.5-43.6,29.4-80.8,71.6-91.3,57.8-14.5,114.9,29.6,116.2,89.2.2,8.8-2.5,13.7-9.8,18.3C212.1,299,184.1,307.6,150.8,307.6Z" transform="translate(0 0)"/><path d="M153.8,67.6a45,45,0,1,1-45,45A44.9,44.9,0,0,1,153.8,67.6Z" transform="translate(0 0)"/></UserIcon>
		</ProfileContainer>
	)
}

// STYLED COMPONENTS //
const ProfileContainer = styled.div((props) => ({
    display:'flex',
    justifyContent:'flex-end',
    alignItems:'center',
}));
const UserMeta = styled.div((props) => ({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'flex-end',
}));
const Company = styled.div((props) => ({
    color:props.theme.lightText,
    fontSize:11,
    marginTop:-5,
}));
const UserName = styled.div((props) => ({
    color:props.theme.brand,
    fontSize:15,
    fontWeight:700
}));
const UserIcon = styled.svg((props) => ({
    height: 30,
    fill: props.theme.brand,
    marginLeft:10,
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

export default connect(mapStateToProps,mapDispatchToProps)(Profile);