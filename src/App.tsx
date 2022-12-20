import * as React from 'react';
import {Admin, EditGuesser, ListGuesser, Resource} from 'react-admin';
import strapiRestProvider from './dataProvider';
import {UserList} from "./UserList";
import {UserEdit} from "./UserEdit";
import {UserCreate} from "./UserCreate";

// change the URL to your Strapi API
const dataProvider = strapiRestProvider('http://localhost:1337');

const App = () => (
  <Admin
    dataProvider={dataProvider}
  >
    <Resource name="companies" list={ListGuesser} edit={EditGuesser}/>
    <Resource name="sys-users" list={UserList} edit={UserEdit} create={UserCreate}/>
    <Resource name="sys-roles" list={ListGuesser} />
  </Admin>);

export default App;
