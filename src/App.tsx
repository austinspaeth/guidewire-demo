import React, {FunctionComponent, useState, useEffect} from "react";

// REDUX //
import { connect } from 'react-redux';
import { toggleActions, toggleSidebar } from './redux/Actions';

// VIEWS //
import Header from './views/Header';
import Sidebar from './views/Sidebar';
import Content from './views/Content';
import Policy from './views/policy/Policy';

// COMPONENTS //
import styled, { ThemeProvider } from 'styled-components';
import ActionBar from './components/content/ActionBar';

// STYLES //
import './assets/css/styles.css';

type TSProps = {
    actions: boolean,
    sidebar: boolean,
    theme: any,
    toggleActions: Function,
    toggleSidebar: Function,
	view:string
};

const App:FunctionComponent<TSProps> = (props) => {

    const toggleOffSidebars = () => {
        props.toggleActions(false);
        props.toggleSidebar(false);
    }

    switch(props.view){
        case 'policy':
            return (
                <ThemeProvider theme={props.theme}>
					<Header view={props.view}/>
                    <Overlay onClick={() => toggleOffSidebars()} visible={props.sidebar || props.actions}/>
                    <Sidebar />
                    <Content>
                        <Policy />
                    </Content>
                    <ActionBar />
                </ThemeProvider>
            );
        default:
            return (
                <ThemeProvider theme={props.theme}>
					<Header view={props.view}/>
                    <Sidebar />
                    <Content>
                        No idea how you made it here!
                    </Content>
                </ThemeProvider>
            );
    }
}

// STYLES
const Overlay = styled.div((props) => ({
    position:'fixed',
    width:'100%',
    height:'calc(100% - 60px)',
    top:60,
    left:0,
    cursor:'alias',
    background:'#000',
    opacity: props.visible ? .35:0,
    zIndex:2,
    pointerEvents: props.visible ? 'all':'none',
    transition:'opacity .4s ease-in-out',
}));

// REDUX MAPPINGS //
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
        toggleSidebar: (boolean) => dispatch(toggleSidebar(boolean)),
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);