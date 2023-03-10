import {Create, SimpleForm, TextInput, DateInput, ReferenceInput, BooleanField, BooleanInput, SelectInput} from 'react-admin';

export const UserCreate = () => (
  <Create>
    <SimpleForm>
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
    </SimpleForm>
  </Create>
);
