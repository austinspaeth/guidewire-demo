import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';
import NavItem from '../components/header/NavItem';
import Profile from '../components/header/Profile';

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
            <Profile />
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
const Navigation = styled.div((props) => ({
    position:'absolute',
    width:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    zIndex:0,
    height:60,
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