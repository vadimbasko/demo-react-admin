import {Edit, SimpleForm, TextInput, DateInput, ReferenceInput, BooleanField, BooleanInput, SelectInput} from 'react-admin';

export const UserEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled/>
      <TextInput source="firstName" />
      <TextInput source="lastName" />
      <TextInput source="email" />
      <BooleanInput source="banned" />
      <DateInput source="registrationDate" />

      <SelectInput source="userSourse" choices={[
        { id: 'Mobile', name: 'Mobile' },
        { id: 'Offline', name: 'Offline' },
        { id: 'Web', name: 'Web' },
      ]} />

      <ReferenceInput source="company" reference="companies" >
        <SelectInput optionText="companyName" />
      </ReferenceInput>
      <ReferenceInput source="sys_role" reference="sys-roles" >
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
