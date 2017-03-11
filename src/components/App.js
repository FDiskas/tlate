import React, { Component } from 'react';

import './../toolbox/theme.css';
import './App.css';

import IconButton from 'react-toolbox/lib/button/IconButton';
import Layout from 'react-toolbox/lib/layout/Layout';
import NavDrawer from 'react-toolbox/lib/layout/NavDrawer';
import Panel from 'react-toolbox/lib/layout/Panel';
import Sidebar from 'react-toolbox/lib/layout/Sidebar';
import Navigation from 'react-toolbox/lib/navigation/Navigation';
import Link from 'react-toolbox/lib/link/Link';
import Checkbox from 'react-toolbox/lib/checkbox/Checkbox';

import Header from './header/Header';

class App extends Component {

  state = {
    drawerActive: false,
    drawerPinned: false,
    sidebarPinned: false
  };

  toggleDrawerActive = () => {
    this.setState({ drawerActive: !this.state.drawerActive });
  };

  toggleDrawerPinned = () => {
    this.setState({ drawerPinned: !this.state.drawerPinned });
  };

  toggleSidebar = () => {
    this.setState({ sidebarPinned: !this.state.sidebarPinned });
  };

  render() {
    return (
      <Layout>
        <NavDrawer
          className="App-left-menu"
          active={this.state.drawerActive}
          pinned={this.state.drawerPinned}
          permanentAt='xxxl'
          onOverlayClick={ this.toggleDrawerActive }
        >
          <p>
            Navigation, account switcher, etc. go here.
            <Navigation type='vertical'>
              <Link href='http://' label='Inbox' icon='inbox' />
              <Link href='http://' active label='Profile' icon='person' />
            </Navigation>
          </p>
        </NavDrawer>
        <Panel>
          <Header leftIcon='menu' onLeftIconClick={ this.toggleDrawerActive } />
          <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
            <h1>Main Content</h1>
            <p>Main content goes here.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur itaque nisi non quas saepe vel
              voluptatem. Autem dignissimos eos itaque nam rerum. Aperiam blanditiis ducimus nesciunt reiciendis sequi,
              ullam voluptas?</p>
            <Checkbox label='Pin drawer' checked={this.state.drawerPinned} onChange={this.toggleDrawerPinned} />
            <Checkbox label='Show sidebar' checked={this.state.sidebarPinned} onChange={this.toggleSidebar} />
          </div>
        </Panel>
        <Sidebar pinned={ this.state.sidebarPinned } width={ 5 }>
          <div><IconButton icon='close' onClick={ this.toggleSidebar }/></div>
          <div style={{ flex: 1 }}>
            <p>Supplemental content goes here.</p>
          </div>
        </Sidebar>
      </Layout>
    );
  }
}

export default App;
