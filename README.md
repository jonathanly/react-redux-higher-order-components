# Higher Order Components

An advanced tutorial app aimed at furthering React and Redux concepts and knowledge. This tutorial is aimed at:
- Introducing the concept of higher order concepts

The app is updated to include ES6 and react-router-4.

The following `README.md` is to consolidate the key learning points for future reference.

The tutorial can be found [here](https://www.udemy.com/react-redux-tutorial/)

## Key Learning Points
### Higher Order components (HOCs)
- A higher order component is a wrapper component that provides a "Composed" Component extra functionality.
- Can contain simple helper functions to avoid continuously importing functions.
- Can act as a filter layer on top of the composed component.
- Allows for separation of container and presentation components.
- Use cases include:
  - Authenticated/Protected routes
  - Data fetching and parsing
  - Selective rendering

Ex.
```js
export default function (ComposedComponent) {
  class Authentication extends Component {
    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  return Authentication;
}
```

### Integrating Redux Into HOCs
- Connecting to the redux store is written within the HOC component.
git

Ex.
```js
export default function (ComposedComponent) {
  class Authentication extends React.Component {
    componentWillMount() {
      if (!this.props.authenticated) {
        this.props.history.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.props.history.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.authenticated };
  }

  return connect(mapStateToProps)(Authentication);;
}
```
