import React, {Component} from 'react';

import './App.css';

import IconButton from 'react-toolbox/lib/button/IconButton';
import Layout from 'react-toolbox/lib/layout/Layout';
import NavDrawer from 'react-toolbox/lib/layout/NavDrawer';
import Panel from 'react-toolbox/lib/layout/Panel';
import Sidebar from 'react-toolbox/lib/layout/Sidebar';
import Checkbox from 'react-toolbox/lib/checkbox/Checkbox';
import {Grid, Row, Col} from 'react-flexbox-grid';

import Header from './header/Header';
import MainMenu from './menu/MainMenu';
import Notification from './notification/Notification';
import Spaces from './spaces/Spaces';


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
          <MainMenu onLeftIconClick={ this.toggleDrawerActive }/>
        </NavDrawer>
        <Panel style={{ padding: '62px 0' }}>
          <Header leftIcon="menu" onLeftIconClick={ this.toggleDrawerActive }/>
          <Grid fluid>
            <Row center="xs">
              <Col lg={8} md={10} xs={12}>
                <Row start="xs">
                  <Col>
                    <h1>Main Content</h1>
                    <p>Main content goes here.</p>
                  </Col>
                </Row>
                    <Row start="xs">
                      {[0, 1, 2, 3].map((index) => {
                        return (
                          <Col xs={6} md={4} lg={3} key={index}>
                            <Spaces index={index}/>
                          </Col>
                        );
                      })}
                    </Row>
                <Row start="xs">
                  <Checkbox label="Pin Main Menu" checked={this.state.mainMenuPinned} onChange={this.toggleMainMenuPinned}/>
                  <Checkbox label="Show activity sidebar" checked={this.state.activitySideBarPinned}
                            onChange={this.toggleActivitySidebar}/>
                </Row>
            </Col>
          </Row>
        </Grid>
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
