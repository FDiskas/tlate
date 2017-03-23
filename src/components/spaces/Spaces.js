import React, {Component} from 'react';

import Button from 'react-toolbox/lib/button/Button';
import CardMedia from 'react-toolbox/lib/card/CardMedia';
import CardText from 'react-toolbox/lib/card/CardText';
import CardActions from 'react-toolbox/lib/card/CardActions';
import Card from 'react-toolbox/lib/card/Card';
import CardTitle from 'react-toolbox/lib/card/CardTitle';

const dummyText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';

class Spaces extends Component {
  render() {
    return (
      <Card>
        <CardTitle
          avatar="https://placeimg.com/80/80/animals"
          title="Avatar style title"
          subtitle="Subtitle here"
        />
        <CardMedia
          aspectRatio="wide"
          image={`https://unsplash.it/800/450?image=50${this.props.index}`}
        />
        <CardTitle
          title="Title goes here"
          subtitle="Subtitle here"
        />
        <CardText>{dummyText}</CardText>
        <CardActions>
          <Button label="Action 1"/>
          <Button label="Action 2"/>
        </CardActions>
      </Card>
    );
  }
}

Spaces.propTypes = {};
Spaces.defaultProps = {};

export default Spaces;
