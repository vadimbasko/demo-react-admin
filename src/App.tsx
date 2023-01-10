import * as React from 'react';
import {Admin, EditGuesser, ListGuesser, Resource} from 'react-admin';

import strapiRestProvider from './dataProvider';


// change the URL to your Strapi API
const dataProvider = strapiRestProvider('http://localhost:1337');

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="companies" list={ListGuesser} edit={EditGuesser}/>
  </Admin>);

export default App;
