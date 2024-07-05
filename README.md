# React Isles

A lightweight library that allows you to render React components from HTML markup using data attributes.

## Installation

```bash
npm install react-isles
```

or

```bash
yarn add react-isles
```

## Usage
### Basic Usage
```javascript
import { reactIsles } from 'react-isles';

// Define your components
const MyComponent = ({ someProp, children }) => (
  <div>
    <h1>{someProp}</h1>
    {children}
  </div>
);

const customComponents = {
  MyComponent,
  // Add more components here
};

// Initialize the parser
const { parseAndRenderComponents } = reactIsles(customComponents);
```
In your HTML:

```html
<div data-component="MyComponent" data-prop-some-prop="Hello, World!">
  <p>This is some content inside MyComponent</p>
</div>
```

With Redux Provider (or any other wrapper)
```javascript
import { Provider } from 'react-redux';
import store from './store';

const wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;

const options = {
    wrapper
}

const { parseAndRenderComponents } = reactIsles(
  customComponents,
  options
);
```

Enable edit mode to keep data attributes and set up mutation observers:

```javascript
const { parseAndRenderComponents } = reactIsles(
  customComponents,
  {edit: true} // Enable edit mode
);
```

## API


### reactIsles(customComponents, options)

Initializes the React HTML Parser.

customComponents (object): A map of component names to React components.
Returns an object with:

### options
wrapper (function, optional): A wrapper component (e.g., Redux Provider).
edit (boolean, optional): Whether to enable edit mode (default: false).

## Features
Render React components from HTML using data attributes
Prop passing through data attributes
Optional wrapper component (e.g., for Redux Provider)
Edit mode for dynamic updates

### Example
```html
<div data-component="MyComponent" data-prop-title="Welcome">

</div>
```
```javascript
const MyComponent = ({ title}) => (
  <div>
    <h1>{title}</h1>
  </div>
);

const customComponents = { MyComponent: "MyComponent" };

reactIsles(customComponents).parseAndRenderComponents();
```

## License
MIT

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.
