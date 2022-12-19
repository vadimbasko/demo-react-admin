// in src/App.tsx
import * as React from 'react';
import {Admin, ListGuesser, Resource} from 'react-admin';
import strapiRestProvider from './dataProvider';
import {CompanyList} from "./CompanyList";

// change the URL to your Strapi API
const dataProvider = strapiRestProvider('http://localhost:1337/api');

const App = () => (
  <Admin
    dataProvider={dataProvider}
  >
    <Resource name="companies" list={CompanyList} />
    <Resource name="sys-users" list={ListGuesser} />
  </Admin>);

export default App;
