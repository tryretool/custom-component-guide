# Retool + BYO: React Custom Components 
If you have a use case that isn't handled by Retool's built-in components, you can build your own custom component to solve that use case. Really anything that can be compiled down to javascript can be used within Retool's custom components. While Retool allows you to write React directly within its iframe code, you may find it limiting in regards to development environment or packages that can be added; this repository breaks down both barriers.

The purpose of this repository is to give a React developer a baseline development envrionment that includes
- local development of your custom component available within your Retool app
- an example of hot reload within the Retool sandbox'd iframe
- add any npm package to use in the component library
- bring your own component library example
- examples of reading or updating data in your Retool app
- examples of triggering queries
- moving from development to production either inline or through a CDN

We are accepting bugs and feature requests to this repository through issues.

# Getting Started

Getting started with local development happens in two parts, cloning this repository and setting up your Retool application to listen to it.

## Setting up local environment

```shell
git clone https://github.com/bryan-at-retool/react-custom-components
yarn install
yarn dev
```

After starting the webpack dev server with `yarn dev` and the example dev server servers your built javascript at `http://localhost:8080/main.js`. Once the dev server is running, open up a Retool application, drag a custom component in and place the following in the iframe code:

```html
<script type="text/javascript" src="http://localhost:8080/index.js" />
```

### Example application
If you'd like to get started on a completed application, you can download a Retool application [here]("/example_application.json") and import it into Retool [docs]("https://docs.retool.com/docs/app-management#exporting-retool-apps").


## Developing in this repository
You're all setup to start developing locally and having your changes appear in your Retool application; happy coding!
While running `yarn dev` you can easily modify `src/index.js` and `src/ExampleComponent.js`.


# BYO Component Library
You may wish to use your own component library in Retool for specific styling or UI elements; however, we encourage you to reach out and file a feature request! If you are bringing your own component, this repository can give you examples of how to extend your library and use it as first class components in Retool. When a custom component is available in an application, it loads into a sandbox'd iframe to give you control over an HTML document javascript. Retool will also provide you with an interface to help communicate with the Retool application; you can read more [here]("https://docs.retool.com/docs/custom-react-components#interface")

## Retool.createReactComponent()
Retool's sandboxed iframe will provide a wrapper for React components for you to access the interface, which are available in the document at `Retool.createReactComponent()`. If your components are wrapped in this function, `model`, `modelUpdate`, and `triggerQuery` will be available for your component. For example:

```javascript
// index.js
import MyComponent from './MyComponent';
const RetoolConnectedComponent = Retool.connectReactComponent(App);
ReactDOM.render(
  <RetoolConnectedComponent />, 
  document.body.appendChild(document.createElement('div')) 
);
```

Now within MyComponent, you have access to , `model`, `modelUpdate`, and `triggerQuery` through its props. For example:
```javascript
// MyComponent.js
export default function MyComponent ({model, modelUpdate, triggerQuery, ...props}) {
  // ... your component
}
```

Alternatively, you can wrap your export with `Retool.createReactComponent()`

```javascript
// MyComponent.js
const MyComponent = ({model, modelUpdate, triggerQuery, ...props}) => {
  // ... your component
}
export default Retool.connectReactComponent(App);
```

```javascript
// index.js
import MyComponent from './MyComponent';
ReactDOM.render(
  <MyComponent />, 
  document.body.appendChild(document.createElement('div')) 
);
```

# Examples
Coming Soon!



# Deploying
Coming Soon!
