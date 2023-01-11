import {
  List,
  Datagrid,
  TextField,
  DateField,
  BooleanField,
  EmailField,
} from 'react-admin';
import {LinkToRoleUsers} from "./LinkToRoleUsers";

export const RoleList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <BooleanField source="webAccess" />
      <BooleanField source="mobileAccess" />
      <LinkToRoleUsers />
    </Datagrid>
    </List>
);
