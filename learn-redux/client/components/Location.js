import React from 'react';
import { Button } from 'reactstrap';

    // const {coords: {latitude, longitude}} = this.props.location;

// Container
class Location extends React.Component {
  constructor(props) {
    super(props); // 'this' is bound somewhere below, probably on a click or submit
  }
  handleClick(evt) {
    console.log(this);
    this.getLocation;
  }

  componentWillMount() {
    this.props.getLocation();
  }

  render () {
    
    return (
      <div>
        <div>Latitude: <span>It works</span></div>
        <div>Longitude: </div>
        <div>Is it possible? <button onClick={this.handleClick.bind(this.props)} className="likes">Heeelp</button></div>


      </div>
    );
  }
}

export default Location;
