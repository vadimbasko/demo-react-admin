import * as React from 'react';
import {Admin, ListGuesser, Resource} from 'react-admin';
import strapiRestProvider from './dataProvider';
import {UserList} from "./UserList";

// change the URL to your Strapi API
const dataProvider = strapiRestProvider('http://localhost:1337');

const App = () => (
  <Admin
    dataProvider={dataProvider}
  >
    <Resource name="companies" list={ListGuesser} />
    <Resource name="sys-users" list={UserList} />
    <Resource name="sys-roles" list={ListGuesser} />
  </Admin>);

export default App;
