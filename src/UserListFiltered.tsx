import {
  List,
  Datagrid,
  TextField,
  DateField,
  BooleanField,
  EmailField,
  TextInput,
  SearchInput,
} from 'react-admin';

import {Chip} from '@mui/material';
import {UserFilterSidebar} from "./UserFilterSidebar";

export const UserListFiltered = () => {

  // @ts-ignore
  const quickFilter = <Chip sx={{marginBottom: 1}} label="Banned" source="banned" defaultValue={true}/>;

  const userFilters = [
    <SearchInput source="q" alwaysOn/>,
    <TextInput label="First Name" source="firstName" defaultValue="Neil"/>,
    quickFilter,
  ];

  return (
    <List filters={userFilters} aside={<UserFilterSidebar />}>
      <Datagrid rowClick="edit">
        <TextField source="id"/>
        <TextField source="firstName"/>
        <TextField source="lastName"/>
        <EmailField source="email"/>
        <BooleanField source="banned"/>
        <DateField source="registrationDate"/>
        <TextField source="userSourse"/>

        <TextField source="company.companyName"/>
        <TextField source="sys_role.name"/>
      </Datagrid>
    </List>
  )
};

