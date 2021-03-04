import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";
import { toggleActions, toggleSidebar } from '../redux/Actions';

// COMPONENTS //
import styled from 'styled-components';
import NavItem from '../components/header/NavItem';
import Profile from '../components/header/Profile';

type TSProps = {
	actions: boolean,
    sidebar: boolean,
	theme:string,
    toggleActions: Function,
    toggleSidebar: Function,
    view: string,
}

const Header:FunctionComponent<TSProps> = (props) => {

	return (
        <>
            <HeaderContainer>
                <Branding>
                    <Logo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110.8 111.3"><title>GuideWire InsuranceNow</title><path d="M0,0H110.8V21l-4.8.2c-26.2.1-52.4.2-78.6,0-4.7-.1-6.3,1.2-6.2,6.1q.3,28.5,0,57c0,4.4,1.3,5.8,5.7,5.7,12.8-.3,25.6-.1,38.9-.1v21.3H0Z"/><path d="M110.8,111.3H89.7V74.2c-.1-8.6,1.3-7.8-8.1-7.8-12-.1-24,0-36.5,0V45.2h65.7Z"/></Logo>
                    InsuranceNow
                </Branding>
                <Navigation>
                    <NavItem view={props.view} active={props.view == 'home'}>Home</NavItem>
                    <NavItem view={props.view} active={props.view == 'policy'}>Quote/Policy</NavItem>
                    <NavItem view={props.view} active={props.view == 'cabinets'}>Cabinets</NavItem>
                    <NavItem view={props.view} active={props.view == 'support'}>Support</NavItem>
                </Navigation>
                <Profile />
            </HeaderContainer>
            <SecondaryHeader>
                <Toggle tabIndex={1} onKeyDown={(e) => e.key == 'Enter' && props.toggleSidebar(!props.sidebar)} onClick={() => props.toggleSidebar(!props.sidebar)}>
                    <SecondaryIcon style={{marginRight:10}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172.6 147.9"><title>Show Sidebar</title><g id="uDUiCK.tif"><path d="M137.3,86.2H15.5c-4.7,0-9.2-.4-12.5-4.5S-.9,73.9.9,69.6s5.6-7.3,10.6-8a41.3,41.3,0,0,1,5-.1H137.3c-4.2-6.2-8-11.7-11.6-17.4-4.7-7.5-1.5-16.4,6.6-18.8a11.4,11.4,0,0,1,13.2,4.5c8.3,12.1,16.5,24.4,24.7,36.7,3.4,5.1,3,10.2-.4,15.3-8,11.9-15.9,24-23.9,35.9a11.9,11.9,0,0,1-16.7,3.5c-5.7-3.5-7.4-10.9-3.7-17,1.7-2.9,3.8-5.8,5.7-8.7Z"/><path d="M49.7.1c12,0,23.9-.2,35.8,0,9.8.2,15.7,8.5,12.3,16.8a11.6,11.6,0,0,1-11.2,7.8q-37.2.2-74.6-.1C5,24.6.2,19.1.1,12.5S5.2.2,12.9.1C25.2-.1,37.5.1,49.7.1Z"/><path d="M49.5,123.2H84.8c8.4,0,14,5,14,12.3s-5.7,12.4-13.9,12.4H14.2c-8.8,0-14.2-5-14-12.6s5.5-12.1,14-12.1Z"/></g></SecondaryIcon>
                    Policy / Policy
                </Toggle>
                <Toggle tabIndex={1} onKeyDown={(e) => e.key == 'Enter' && props.toggleActions(!props.actions)} onClick={() => props.toggleActions(!props.actions)}>
                    Show Actions
                    <SecondaryIcon style={{marginLeft:10}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 111.4 222.4"><title>Show Actions</title><g id="HAZ4AO.tif"><path d="M32.4,121.3,10.1,109.5c-5-2.7-5.2-4.2-1.3-8.2q47.9-49.5,96-98.8C106.2,1.1,108.9.8,111,0c.1,2.3.8,4.8.1,6.8C101.1,36.4,91,66.1,80.7,95.6c-1.4,4-1.2,6.1,3,8,6.3,3,12.2,6.6,18.3,9.9,3.6,2,4.3,4.1,1.2,7.3-32.4,33.3-64.6,66.7-97,99.9-1.2,1.2-3.7,1.2-5.5,1.7-.2-2.1-1.1-4.5-.5-6.3,10.2-30.3,20.6-60.5,30.9-90.7C31.5,124.2,31.9,123,32.4,121.3Z"/></g></SecondaryIcon>
                </Toggle>
            </SecondaryHeader>
        </>
	)
}

// STYLED COMPONENTS //
const HeaderContainer = styled.div({
    height: 60,
    top:0,
    width: '100%',
    position:'fixed',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    background:'#F0F3F5',
    borderBottom:'1px solid #D8E8ED',
    boxSizing:'border-box',
    padding:'0px 20px',
    zIndex:3
});
const SecondaryHeader = styled.div({
    height: 50,
    width: '100%',
    zIndex:2,
    top:60,
    background:'#F0F3F5',
    position:'fixed',
    justifyContent:'space-between',
    alignItems:'center',
    borderBottom:'1px solid #D8E8ED',
    boxSizing:'border-box',
    padding:'0px 20px',
    display:'none',
    '@media(max-width:1000px)':{
        display:'flex',
    }
});
const Toggle = styled.div((props) => ({
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    position:'relative',
    zIndex:3,
    fontSize:16,
    color:props.theme.brand,
    cursor:'pointer',
    '@media(max-width:750px)':{
        fontSize:0
    }
}));
const SecondaryIcon = styled.svg((props) => ({
    height: 18,
    fill: props.theme.brand,
    cursor:'pointer'
}));
const Branding = styled.div((props) => ({
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    fontSize:20,
    color:props.theme.brand,
    cursor:'pointer'
}));
const Logo = styled.svg((props) => ({
    height: 28,
    fill: props.theme.brand,
    marginRight:10,
    cursor:'pointer'
}));
const Navigation = styled.div((props) => ({
    position:'absolute',
    width:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    zIndex:-1,
    height:60,
    '@media(max-width:750px)':{
       top:60,
       height:50,
       pointerEvents:'none',
       zIndex:9,
       width:'calc(100% - 40px)'
    }
}));


// REDUX MAPPING //
const mapStateToProps = (state) => {
	return {
        actions: state.actions,
        sidebar: state.sidebar,
		theme: state.theme
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleActions: (boolean) => dispatch(toggleActions(boolean)),
        toggleSidebar: (boolean) => dispatch(toggleSidebar(boolean))
	};
};

export default connect(mapStateToProps,mapDispatchToProps)(Header);