import * as React from 'react';
import {Admin, CustomRoutes, EditGuesser, Layout, ListGuesser, Menu, Resource} from 'react-admin';
import strapiRestProvider from './dataProvider';
import {UserEdit} from "./UserEdit";
import {UserCreate} from "./UserCreate";
import {RoleList} from "./RoleList";
import {Route} from "react-router-dom";
import {ChangePassword} from "./ChangePassword";
import LabelIcon from '@mui/icons-material/Label';
import {UserListWithChangePassword} from "./UserListWithChangePassword";

// change the URL to your Strapi API
const dataProvider = strapiRestProvider('http://localhost:1337');

const App = () => {
  const AppMenu = () => (
    <Menu>
      <Menu.ResourceItem name="companies"/>
      <Menu.ResourceItem name="sys-users"/>
      <Menu.ResourceItem name="sys-roles"/>
      <Menu.Item to="/change-password" primaryText="Change Password" leftIcon={<LabelIcon />}/>
    </Menu>
  );

  const AppLayout = (props: any) => <Layout {...props} menu={AppMenu}/>;

  return (
    <Admin
      layout={AppLayout}
      dataProvider={dataProvider}
    >
      <Resource name="companies" list={ListGuesser} edit={EditGuesser}/>
      <Resource name="sys-users" list={UserListWithChangePassword} edit={UserEdit} create={UserCreate}/>
      <Resource name="sys-roles" list={RoleList}/>
      <CustomRoutes>
        <Route path="/change-password" element={<ChangePassword/>}/>
      </CustomRoutes>
    </Admin>)
};

export default App;
