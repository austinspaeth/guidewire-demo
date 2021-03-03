import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';
import { ProgressPlugin } from "webpack";

type TSProps = {
	theme:string,
    view:string
}

const Header:FunctionComponent<TSProps> = (props) => {

	// STATE //
	const [ui, setUi] = useState();

	return (
		<HeaderContainer>
            <Branding>
                <Logo alt={'GuideWire Logo Icon'} title={'GuideWire'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110.8 111.3"><path d="M0,0H110.8V21l-4.8.2c-26.2.1-52.4.2-78.6,0-4.7-.1-6.3,1.2-6.2,6.1q.3,28.5,0,57c0,4.4,1.3,5.8,5.7,5.7,12.8-.3,25.6-.1,38.9-.1v21.3H0Z"/><path d="M110.8,111.3H89.7V74.2c-.1-8.6,1.3-7.8-8.1-7.8-12-.1-24,0-36.5,0V45.2h65.7Z"/></Logo>
                InsuranceNow
            </Branding>
            <Navigation>
                <NavItem active={props.view == 'home'}>Home</NavItem>
                <NavItem active={props.view == 'policy'}>Quote/Policy</NavItem>
                <NavItem active={props.view == 'cabinets'}>Cabinets</NavItem>
                <NavItem active={props.view == 'support'}>Support</NavItem>
            </Navigation>
            <Profile>
                <UserMeta>
                    <UserName>Test User</UserName>
                    <Company>Company</Company>
                </UserMeta>
                <UserIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 307.5 307.6"><path d="M262.8,261.4c-5-48.4-30-81.2-75.4-98.9,18.1-13.6,27.5-31.4,26.2-54.1-1-15.7-7.6-29.1-19.2-39.8a59.8,59.8,0,0,0-84.3,2.9c-22.3,23.5-24,66.1,10.1,91.3-21.5,7.4-39.2,19.8-52.9,37.7S46.5,238.8,45,261.4C11.8,231.7-11,172.5,5.5,113.2,23.4,49,81.2,2.9,145.7.1c72-3,131,41.6,152.7,101.5C320.8,163.6,299.3,227.4,262.8,261.4Z" transform="translate(0 0)"/><path d="M150.8,307.6c-28.6-.2-57.3-9.1-83.5-26.5-5.7-3.7-7.5-7.8-7.4-14.5.5-43.6,29.4-80.8,71.6-91.3,57.8-14.5,114.9,29.6,116.2,89.2.2,8.8-2.5,13.7-9.8,18.3C212.1,299,184.1,307.6,150.8,307.6Z" transform="translate(0 0)"/><path d="M153.8,67.6a45,45,0,1,1-45,45A44.9,44.9,0,0,1,153.8,67.6Z" transform="translate(0 0)"/></UserIcon>
            </Profile>
        </HeaderContainer>
	)
}

// STYLED COMPONENTS //
const HeaderContainer = styled.div({
    height: 60,
    width: '100%',
    position:'fixed',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    background:'#F0F3F5',
    borderBottom:'1px solid #D8E8ED',
    boxSizing:'border-box',
    padding:'0px 20px'
});
const Branding = styled.div((props) => ({
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    fontSize:22,
    color:props.theme.brand
}));
const Profile = styled.div((props) => ({
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
const Navigation = styled.div((props) => ({
    position:'absolute',
    width:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    zIndex:0,
    height:60,
}));
const NavItem = styled.div((props) => ({
    color: props.active ? props.theme.brand : '#6A6F71',
    fontSize:18,
    margin:'0px 12px',
    fontWeight: props.active ? 700:400,
    paddingTop:props.active? 8 : 5,
    borderBottom:'2px solid',
    borderColor: props.active ? props.brand:'transparent',
    height:'100%',
    boxSizing:'border-box',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
}));
const UserIcon = styled.svg((props) => ({
    height: 30,
    fill: props.theme.brand,
    marginLeft:10,
}));
const Logo = styled.svg((props) => ({
    height: 30,
    fill: props.theme.brand,
    marginRight:10,
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

export default connect(mapStateToProps,mapDispatchToProps)(Header);