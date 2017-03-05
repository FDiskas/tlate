import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

import './App.css';
import logo from './../assets/img/logo.svg';
import {GridTile, GridList} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Add from 'material-ui/svg-icons/content/add';
import {blue300} from 'material-ui/styles/colors';

import img1 from './../assets/img/example1.jpg';
import img2 from './../assets/img/example2.jpg';
import img3 from './../assets/img/example3.jpg';
import img4 from './../assets/img/example4.jpg';

injectTapEventPlugin();

class App extends Component {

  renderLogo() {
    return <img src={logo} className="App-logo" alt="logo"/>;
  }

  render() {
    let tiles = [
      {
        title: 'Space 1',
        subtitle: 'Description 1',
        background: img1
      },
      {
        title: 'Space 2',
        subtitle: 'Description 2',
        background: img2
      },
      {
        title: 'Space 3',
        subtitle: 'Description 3',
        background: img3
      },
      {
        title: 'Space 4',
        subtitle: 'Description 4',
        background: img4
      }];

    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="ⓣ Late">
            {this.renderLogo()}
          </AppBar>
          <div style={{marginTop: '1em', marginBottom: '1em', marginRight: '1em', marginLeft: '1em'}}>
            <RaisedButton
              href="http://www.material-ui.com/"
              label="Read the Material UI docs"
              icon={<FontIcon className="material-icons">home</FontIcon>}
              fullWidth
              secondary
            />
          </div>
          <GridList cols={5}>
            <GridTile titleBackground={`${blue300}`} subtitle={'Private'} title={<span>Create a space</span>} actionIcon={<IconButton><Add color="white"></Add></IconButton>}>
            </GridTile>
            {tiles.map((tile, tileKey) => (
              <GridTile
                key={tileKey}
                title={tile.title}
                subtitle={tile.subtitle}
                titleBackground={blue300}>
                <img style={{'filter': 'brightness(80%)'}} src={tile.background} alt={tile.title}/>
              </GridTile>
              ))}
          </GridList>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
