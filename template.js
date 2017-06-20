import configureStore from './src/store/configureStore';
const store=configureStore();
let state = JSON.stringify( store.getState() );

export default ({ body, title }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
      </head>
      
      <body>
        <div id="app-root">${body}</div>
      </body>
      <script>window.$REDUX_STATE = ${state}</script>
      <script src="/dist/SSR-bundle.js"></script>
    </html>
  `;
};