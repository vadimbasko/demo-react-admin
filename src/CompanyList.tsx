import {
  List,
  Datagrid,
  TextField,
  DateField,
  BooleanField,
} from 'react-admin';

export const CompanyList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="attributes.companyName" />
      <TextField source="attributes.website" />
      {/*<TextField source="website" />*/}
      {/*<TextField source="staffCount" />*/}
    </Datagrid>
    </List>
);
