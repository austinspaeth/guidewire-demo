import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";
import { toggleActions } from '../../redux/Actions';

// COMPONENTS //
import styled from 'styled-components';

type TSProps = {
    actions: boolean,
	theme:string,
    toggleActions: Function
}

const ActionBar:FunctionComponent<TSProps> = (props) => {

	return (
		<ActionBarContainer active={props.actions} onClick={() => props.toggleActions(false)}>
            <ActionItem tabIndex={1}>
                <ActionIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 247.1 296.6"><title>Decorative Icon</title><path d="M0,148.1V25.6C0,12.2,8.4,2.4,21.4.2L24.9,0H222.1c11.9,0,22.1,8.1,24.3,19.3a33.3,33.3,0,0,1,.7,7v244c0,15.7-10.6,26.3-26.1,26.3H25.8c-12.4,0-22.7-7.7-25-18.8a32.7,32.7,0,0,1-.8-7.6ZM222.2,25H25V271.7H222.2Z"/><path d="M111.2,98.9h-49c-8.9,0-14.4-7.2-12.3-15.8a12.1,12.1,0,0,1,10-8.6,26,26,0,0,1,4-.3h94.5a20.1,20.1,0,0,1,5.5.5,12.3,12.3,0,0,1-3.1,24.1c-7.2.2-14.5.1-21.7.1Z"/><path d="M111.3,148.3H62.2c-8.9-.1-14.4-7.3-12.3-15.9a12.2,12.2,0,0,1,9.8-8.6,26.8,26.8,0,0,1,4-.2h94.8a19.5,19.5,0,0,1,5.4.6,11.8,11.8,0,0,1,8.9,13.2,12.1,12.1,0,0,1-12,10.8c-8.7.2-17.4.1-26,.1Z"/><path d="M86.4,197.7c-8.1,0-16.1.1-24.2,0s-14.4-7.3-12.3-15.9A12.3,12.3,0,0,1,60,173.2l3.4-.2h46.2c3.6,0,7.1.7,9.9,3.3a12.3,12.3,0,0,1,3.1,13.6c-2.1,4.8-5.9,7.7-11.3,7.8-8.3.1-16.6,0-24.9,0Z"/></ActionIcon>
                Summary
            </ActionItem>
            <ActionItem tabIndex={1}>
                <ActionIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 273.6 282.1"><title>Decorative Icon</title><path d="M57.3,223.3c-3.7-.3-7.1-.4-10.6-.9C19.2,218,.2,196,.1,167.9Q-.1,111.7.1,55.4C.2,30.7,14.5,10.6,37.9,2.8A63.1,63.1,0,0,1,55.8.1c54-.2,108-.1,162-.1,24.6.1,44.7,14,52.7,37.2a57.1,57.1,0,0,1,2.9,18.4c.3,37.3.2,74.7.1,112,0,24.7-14.4,44.7-37.6,52.8a57.7,57.7,0,0,1-18.9,2.7H158.6a5.3,5.3,0,0,0-4.3,1.9q-20.4,23.5-40.9,46.8c-11.5,13-32.3,13.8-45.1,2.1a32.9,32.9,0,0,1-11-25.2V223.3ZM137,28.5H56.6a39.3,39.3,0,0,0-8.4.9c-12,3-19.6,13.3-19.7,26.5V167.2a9.7,9.7,0,0,0,.1,1.7c.5,14.3,10.9,24.9,25.2,25.6,5.3.2,10.6,0,15.9.1a26.9,26.9,0,0,1,5.7.6c6.6,1.9,10.4,7.2,10.4,14.7v38.9a4.5,4.5,0,0,0,2.8,4.6c2,.8,3.5-.2,4.9-1.5l1.3-1.5c13.9-16,28-31.9,41.7-48.1,4.7-5.6,10.1-7.9,17.3-7.8,21.2.2,42.5.1,63.7.1,16.5,0,27.5-11.1,27.6-27.6q0-55.5-.1-111a29.7,29.7,0,0,0-1.7-10.3c-3.8-10.9-13.4-17.2-25.7-17.2Z"/><path d="M171.7,126.1c-4.3-1.6-8.5-2.7-12.1-4.7-10.2-5.8-15.5-14.9-15.6-26.6s5.1-21,15.2-26.9c18.6-11,41.9-.8,46,20.1,1.9,10,.2,19.9-3.1,29.4-5.9,16.7-17.5,28.4-32.4,37.1-2.7,1.6-5.4,3-8.1,4.4a8.5,8.5,0,0,1-11.7-3.2,8.8,8.8,0,0,1,2.8-11.9c5.9-3.9,11.8-7.7,16.1-13.3Z"/><path d="M95.1,126.1c-4.2-1.6-8.4-2.8-12.1-4.8C71,114.9,64.9,100.5,68.3,87S83.6,63.9,97.1,63.6C117,63.1,131,78.8,129.3,99c-2.2,27.3-17.1,45.5-40.4,57.9l-4,2.1a8.7,8.7,0,0,1-11.5-3.2A8.9,8.9,0,0,1,75.9,144c3.1-2.2,6.4-4,9.2-6.5s6.1-6.5,9.1-9.8A6.8,6.8,0,0,0,95.1,126.1Z"/></ActionIcon>
                New Quote
            </ActionItem>
            <ActionItem tabIndex={1}>
                <ActionIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 285.1 255.4"><title>Decorative Icon</title><path d="M285.1,175.9H0V0H285.1ZM22.8,153.1H132.7c0-3.5-.1-6.8,0-10.1s-.5-2.7-2.5-3c-18.7-3.4-27.9-16.9-29.4-33.5l19.7-2,1,4c2.4,8.1,7.2,13.7,16,14.8a44.7,44.7,0,0,0,12.1-.3,14.7,14.7,0,0,0,11.1-7.6c3-5.2,1.7-10.9-3.6-13.7a59.7,59.7,0,0,0-10.2-3.9c-9-2.6-18.3-4.2-26.7-8.6C110.1,84,104.3,76,104.6,64.3s5.9-19.1,16-23.7c3.8-1.6,7.8-2.6,11.9-4V22.8H22.8ZM262.4,22.9H150.7V37c22.3,3.6,29,18.5,28.6,30.7H159.2c-.2-.9-.4-1.9-.7-2.9-1.1-4-3.2-7.6-7.2-9.3a26.6,26.6,0,0,0-23.2,1c-3.8,2-5.3,6.4-3.4,9.7a13.3,13.3,0,0,0,5.1,4.9A55.7,55.7,0,0,0,141,75.2c8.7,2.3,17.6,3.8,25.6,8,11,5.7,16.5,14.8,15.9,27.1s-6.3,21.6-17.8,26.7c-4.4,1.9-9.3,2.8-14,4.1v12H262.4Z"/><path d="M241.2,227.4c3.4-12.9,6.8-25.6,10.2-38.3H275c-5.9,22.1-11.8,44.1-17.7,66.3L11.5,189.5v-.3l1.3-.2H96.4a27.1,27.1,0,0,1,7.3,1.5l135.1,36.2Z"/></ActionIcon>
                Make Payment
            </ActionItem>
            <ActionItem tabIndex={1}>
                <ActionIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 111.4 72.7"><title>Decorative Icon</title><path d="M73.6,36.4c6-1.2,11.8-2.3,17.6-3.6,3-.7,5.8-.4,7.9,2.1s1.7,5,.7,7.7l-4,10.2c-.4,1-.8,2.1-1.3,3.6l8.2-1.7c4.3-.9,7.7,1.2,8.5,5.1s-1.5,7.2-5.8,8.2L86,72.3c-3,.7-5.9.6-8-2s-1.9-5.2-.6-8.1c1.9-4.4,3.5-8.8,5.4-13.8l-8,1.6c-2.3.5-4.6,1.1-6.9,1.4a6.7,6.7,0,0,1-8.1-6.8V27.4a27.7,27.7,0,0,0-2.1,2.5c-1.7,2.2-3.3,4.4-5,6.5-3,3.6-6.7,4-10.3,1.2l-7.8-6.2-.9-.2c.5,3.3.9,6.5,1.3,9.6.1,1.2.4,2.5.4,3.7.2,4.3-2.4,7.2-6.6,7.4l-12.1.5,3.4,8.5c1.7,4.2.5,8-3.2,9.6s-7.4,0-9.2-4.2S3,54.9.7,49.2s.7-9.6,6.5-10l6.7-.3,7-.3c-.6-4.2-1.1-8.2-1.6-12.2s-1-6.6-1.4-9.9.4-6.3,3.2-7.9,5.6-1.1,8.5,1.3c4.6,3.7,9.3,7.3,13.8,11.1,1.8,1.6,2.8,1.8,4.4-.4,4.1-5.8,8.5-11.4,12.9-17.1C63,.4,65.9-.6,68.9.4s4.6,3.8,4.6,7.7c-.1,8.8-.1,17.6-.1,26.4C73.4,35,73.5,35.5,73.6,36.4Z"/></ActionIcon>
                Report Loss
            </ActionItem>
            <ActionItem tabIndex={1}>
                <ActionIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 249.5 280.9"><title>Decorative Icon</title><path d="M26.2,175.5A37,37,0,0,1,.1,140c.3-14.8,10-28.7,23.9-33.7,1.8-.6,2.2-1.5,2.2-3.2-.1-9.6-.1-19.1,0-28.7,0-1.8-.5-2.6-2.2-3.2A36.7,36.7,0,0,1,.2,33.3,37.2,37.2,0,0,1,42.7.4C64.9,3.5,79.6,26.8,72.5,48,68.7,59.2,60.9,66.8,50,71.2a2.9,2.9,0,0,0-2.2,3.2c.1,9.7.1,19.3,0,29,0,1.7.4,2.5,2.2,3.2C75,116,82.4,146.7,63.9,166a34.1,34.1,0,0,1-13.8,9,2.5,2.5,0,0,0-2,2.9q.1,14.7,0,29.4c0,1.8.5,2.4,2.1,3a36.4,36.4,0,0,1-7.9,70.3C20.9,283,3.2,269.3.3,247.9c-2.2-15.7,8.4-32.6,23.7-38.3.9-.3,2.1-1.2,2.1-1.8C26.2,197.1,26.2,186.3,26.2,175.5Zm26.3-34.8a15.5,15.5,0,0,0-15.4-15.4,15.5,15.5,0,1,0,.2,30.9A15.4,15.4,0,0,0,52.5,140.7Zm0,103.9A15.4,15.4,0,1,0,37.2,260,15.5,15.5,0,0,0,52.5,244.6Zm0-207.8A15.3,15.3,0,0,0,37.1,21.6,15.5,15.5,0,0,0,21.7,37.1,15.8,15.8,0,0,0,37.3,52.4,15.3,15.3,0,0,0,52.5,36.8Z"/><path d="M174.2,47.7H111.1c-2.9,0-5.7-.3-8-2.2a10.5,10.5,0,0,1-3.7-11.8,10.4,10.4,0,0,1,9.7-7.3H238c7.4,0,12.2,5.2,11.3,12.2a10.2,10.2,0,0,1-9,8.9,21.1,21.1,0,0,1-3.5.2Z"/><path d="M174.2,255.2H109.8c-7.9,0-13-7.2-10.3-14.4a9.9,9.9,0,0,1,8.5-6.7,24.2,24.2,0,0,1,3.8-.2H236.5a19.4,19.4,0,0,1,5.4.5c5.1,1.4,8.1,6.3,7.4,11.8a10.4,10.4,0,0,1-10.2,9H174.2Z"/><path d="M174.3,151.4H110.4c-5.7,0-9.6-2.6-11-7.5a10.4,10.4,0,0,1,9.3-13.7H237.5c2.8,0,5.3.3,7.6,2a10.6,10.6,0,0,1,3.8,12c-1.4,4.5-5.3,7.3-10.4,7.3Z"/></ActionIcon>
                Timeline
            </ActionItem>
            <ActionItem tabIndex={1}>
                <ActionIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278.2 278.1"><title>Decorative Icon</title><path d="M0,138.9V12.1A28.6,28.6,0,0,1,.3,7.9,8.8,8.8,0,0,1,7.5.3a26.9,26.9,0,0,1,4-.3H266.6c3.6,0,7,.5,9.4,3.6s2.1,4.8,2.1,7.5V46.3q0,68.1.1,136.3a14.7,14.7,0,0,1-4.7,11.3q-39.9,39.8-79.7,79.8a14.3,14.3,0,0,1-10.9,4.4H11.9l-3.7-.2a9,9,0,0,1-8-7.8,25.5,25.5,0,0,1-.2-3.9ZM18.9,18.8V259.3H176.1V187.2c0-7.4,3.7-11.1,11.2-11.1h72V18.8Zm176,226.6,50.5-50.5H194.9Z"/></ActionIcon>
                New Note
            </ActionItem>
            <ActionItem tabIndex={1}>
                <ActionIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 207.2 206.7"><title>Decorative Icon</title><path d="M79.2,13.1,92.3,0l1.8,1.8C125.2,33,156.4,64,187.5,95.2c14.5,14.6,21.4,32.4,19.4,53-1.9,18.7-10.4,34.3-25.7,45.5-19.4,14.1-40.5,16.7-62.9,8.3a63,63,0,0,1-22.1-14.7C68.8,160,41.3,132.6,14,105.1-2.2,88.8-4.6,64.2,8.1,45.7a46.3,46.3,0,0,1,68.2-8.9c1.8,1.5,3.6,3.2,5.3,4.9l68.9,68.8c9.6,9.7,11.5,23.1,4.9,34.6-8.1,14-26.9,17.9-40.3,8.2a37.9,37.9,0,0,1-3.8-3.2L54.5,93.3l-1.6-1.5L66.1,78.6l2.2,2.2,55.8,55.7c4.3,4.4,8.6,4.9,13.1,1.7a9.1,9.1,0,0,0,1.8-12.5,20,20,0,0,0-1.9-2.2c-23.5-23.4-46.8-46.9-70.3-70.3-9.1-9-20.4-11.4-31.5-6.7-17.4,7.3-22.2,29.5-9.6,44l2,2.2,80.9,80.8c10.2,10.2,22.5,15.5,37.1,14.5,23.8-1.5,43-21.9,43-45.8.1-13.4-5.2-24.8-14.7-34.3Q127.8,61.9,81.7,15.6Z"/></ActionIcon>
                New Attachment
            </ActionItem>
            <ActionItem tabIndex={1}>
                <ActionIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296.6 296.6"><title>Decorative Icon</title><path d="M0,148.3V45.5C0,25.3,11.4,9,30.4,2.5A45.1,45.1,0,0,1,45,.1H251.7c25.3,0,44.8,19.4,44.9,44.7q.1,103.5,0,206.9c-.1,25.3-19.6,44.8-44.9,44.8H45C19.5,296.5.1,277,0,251.4Zm29.7,0c0,34,.2,67.9,0,101.8-.1,10.3,6.6,16.9,16.8,16.8H250.2a20.4,20.4,0,0,0,8.5-1.6c6.3-2.9,8.2-8.5,8.2-15.2V46.6c0-1.3-.1-2.5-.2-3.7-.6-6.8-6.2-12.6-13-12.9s-14-.2-21-.2q-93-.2-185.9,0a21.7,21.7,0,0,0-8.5,1.4c-6.4,2.8-8.6,8.3-8.6,15C29.8,80.3,29.7,114.3,29.7,148.3Z"/><path d="M148.3,89H75.4c-7.8,0-13.1-3.7-15.3-10.4a14.7,14.7,0,0,1,13-19.2h2.5q72.6-.1,145.2,0c8,0,13.3,3.4,15.6,10a14.7,14.7,0,0,1-13.3,19.5c-4.8.2-9.6.1-14.4.1Z"/><path d="M160.8,206.8,182.4,185l30.2-30.2c4.8-4.7,11.1-5.9,17-3.3s8.8,7.8,8.6,14.2a13.7,13.7,0,0,1-4.2,9.6l-62.5,62.5c-6.7,6.7-15.3,6.5-22.1-.2-10.1-10.1-20.1-20.4-30.4-30.3a15.1,15.1,0,0,1-.2-21.6c5.7-5.6,15.2-5.4,21.3.7l20.1,20.1Z"/><path d="M111.1,148.3H74.2A14.8,14.8,0,0,1,60,129.1c2-6,6.3-9.4,12.6-10.3a16.7,16.7,0,0,1,3.2-.2h70.6c5,0,9.5,1.1,12.8,5s5.2,10,2.6,15.7a14.1,14.1,0,0,1-13.5,9Z"/></ActionIcon>
                New Task
            </ActionItem>
		</ActionBarContainer>
	)
}

// STYLED COMPONENTS //
const ActionBarContainer = styled.div((props) => ({
    marginTop:20,
    paddingTop:15,
    paddingBottom:15,
    width:250,
    borderRadius:4,
    background:'#f0f5f7',
    border:'1px solid #CCE0E8',
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
    '@media(max-width:1000px)':{
        position:'fixed',
        top:40,
        right:0,
        zIndex:3,
        borderRadius:0,
        border:'none',
        borderLeft:'1px solid #CCE0E8',
        height:'calc(100% - 60px)',
        transform: props.active ? 'translateX(0%)':'translateX(100%)',
        transition: 'transform .4s ease-in-out',
    },
    '@media(max-width:600px)':{
        width:'100%',
    }
}));
const ActionItem = styled.div((props) => ({
    width:'calc(100% - 20px)',
    padding:'0px 10px',
    boxSizing:'border-box',
    borderRadius:4,
    height:50,
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    fontSize:18,
    color: props.theme.brand,
    fontWeight:700,
    cursor:'pointer',
    transition:'background .2s ease-in-out',
    ':hover':{
        background:'#cfe5ec'
    },
    ':focus':{
        background:'#cfe5ec'
    }
}));
const ActionIcon = styled.svg((props) => ({
    width:24,
    marginRight:10,
    fill: props.theme.brand,
}));

// REDUX MAPPING //
const mapStateToProps = (state) => {
	return {
        actions: state.actions,
		theme: state.theme
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
        toggleActions: (boolean) => dispatch(toggleActions(boolean))
	};
};

export default connect(mapStateToProps,mapDispatchToProps)(ActionBar);