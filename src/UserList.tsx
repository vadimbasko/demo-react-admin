import {
  List,
  Datagrid,
  TextField,
  DateField,
  BooleanField,
  EmailField,
} from 'react-admin';

export const UserList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="firstName" />
      <TextField source="lastName" />
      <EmailField source="email" />
      <BooleanField source="banned" />
      <DateField source="registrationDate" />
      <TextField source="userSourse" />

      <TextField source="company.companyName" />
      <TextField source="sys_role.name" />
    </Datagrid>
    </List>
);
