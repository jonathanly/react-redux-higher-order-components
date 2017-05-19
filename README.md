# Higher Order Components

An advanced tutorial app aimed at furthering React and Redux concepts and knowledge. This tutorial is aimed at:
- Implementing CRUD routes
- Utilizing [react-router V4](https://reacttraining.com/react-router/)
- Utilizing [redux-form v6](http://redux-form.com/6.7.0/)

The following `README.md` is to consolidate the key learning points for future reference.

The tutorial can be found [here](https://www.udemy.com/react-redux-tutorial/)

## Key Learning Points
#### Higher Order components (HOCs)
- A higher order component is a wrapper component that provides a "Composed" Component extra functionality.
- Can contain simple helper functions to avoid continuously importing functions.
- Can act as a filter layer on top of the composed component.
- Allows for separation of container and presentation components.
- Use cases include:
  - Authenticated/Protected routes
  - Data fetching and parsing
  - Selective rendering

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
