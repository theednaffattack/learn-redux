// React and Redux Const
const { Component } = React;
const { render } = ReactDOM;
const { Provider, connect } = ReactRedux;
const { applyMiddleware, createStore, combineReducers, bindActionCreators } = Redux;

// Redux Action Types
const GET_LOCATION = 'GET_LOCATION';

const getLocation = () => {
  const geolocation = navigator.geolocation;
  
  const location = new Promise((resolve, reject) => {
    if (!geolocation) {
      reject(new Error('Not Supported'));
    }
    
    geolocation.getCurrentPosition((position) => {
      resolve(position);
    }, () => {
      reject (new Error('Permission denied'));
    });
  });
  
  return {
    type: GET_LOCATION,
    payload: location
  }
};

// Components

// this is... stateless?
const Header = (props) => {
  return (
    <header><h1>{props.title}</h1></header>
  );
};

// Container
class Location extends Component {
  componentWillMount() {
    this.props.getLocation();
  }

  render () {
    const {coords: {latitude, longitude}} = this.props.location;
    
    return (
      <div>
        <div>Latitude: <span>{latitude}</span></div>
        <div>Longitude: <span>{longitude}</span></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {location: state.location};
};

Location = connect(mapStateToProps, {getLocation})(Location);

// Looks like a 'dumb component'
const App = () => {
  return (
    <div>
      <Header title="Your Location" />
      <Location />
    </div>
  );
};

// reducers
const INIT_STATE = {
  coords: {
    latitude: 0,
    longitude: 0
  }
}

// learn-redux/client/reducers/location.js
const LocationReducer = (state = INIT_STATE, action) => {
  switch(action.type) {
  case GET_LOCATION:
    return action.payload;
  default:
    return state
  }
}

// learn-redux/client/reducers/index.js ?
const rootReducer = combineReducers ({
  location: LocationReducer
});

/* simplified React Promise Middleware */
function promiseMiddleware({dispatch}) {
  function isPromise(val) {
    return val && typeof val.then === 'function';
  }

  return next => action => {
    return isPromise(action.payload)
      ? action.payload.then(
          result => dispatch({...action, payload: result}),
          error => dispatch({...action, payload: error, error: true })
        )
      : next(action);
  };
}

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <App />
  </Provider>
  , document.querySelector('#app')
);