import React, { Component } from 'react';

import './../toolbox/theme.css';
import './App.css';

import IconButton from 'react-toolbox/lib/button/IconButton';
import Layout from 'react-toolbox/lib/layout/Layout';
import NavDrawer from 'react-toolbox/lib/layout/NavDrawer';
import Panel from 'react-toolbox/lib/layout/Panel';
import Sidebar from 'react-toolbox/lib/layout/Sidebar';
import Checkbox from 'react-toolbox/lib/checkbox/Checkbox';

import Header from './header/Header';
import MainMenu from './menu/MainMenu';
import Notification from './notification/Notification';

class App extends Component {

  state = {
    mainMenuActive: false,
    mainMenuPinned: false,
    activitySideBarPinned: false
  };

  toggleDrawerActive = () => {
    this.setState({ mainMenuActive: !this.state.mainMenuActive });
  };

  toggleMainMenuPinned = () => {
    this.setState({ mainMenuPinned: !this.state.mainMenuPinned });
  };

  toggleActivitySidebar = () => {
    this.setState({ activitySideBarPinned: !this.state.activitySideBarPinned });
  };

  render() {
    return (
      <Layout>
        <NavDrawer
          className="App-left-menu"
          active={this.state.mainMenuActive}
          pinned={this.state.mainMenuPinned}
          permanentAt="xxxl"
          onOverlayClick={ this.toggleDrawerActive }
        >
          <MainMenu onLeftIconClick={ this.toggleDrawerActive } />
        </NavDrawer>
        <Panel style={{paddingTop: '32px'}} >
          <Header leftIcon="menu" onLeftIconClick={ this.toggleDrawerActive } />
          <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
            <h1>Main Content</h1>
            <p>Main content goes here.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur itaque nisi non quas saepe vel
              voluptatem. Autem dignissimos eos itaque nam rerum. Aperiam blanditiis ducimus nesciunt reiciendis sequi,
              ullam voluptas?</p>
            <Checkbox label="Pin Main Menu" checked={this.state.mainMenuPinned} onChange={this.toggleMainMenuPinned} />
            <Checkbox label="Show activity sidebar" checked={this.state.activitySideBarPinned} onChange={this.toggleActivitySidebar} />
          </div>
        </Panel>
        <Sidebar pinned={ this.state.activitySideBarPinned } width={ 5 }>
          <div><IconButton icon="close" onClick={ this.toggleActivitySidebar }/></div>
          <div style={{ flex: 1 }}>
            <p>Supplemental content goes here.</p>
          </div>
        </Sidebar>
        <Notification {...this.props} />
      </Layout>
    );
  }
}

export default App;
