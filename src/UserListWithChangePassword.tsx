import React, {useState} from 'react';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  BooleanField,
  EmailField, Button, useDataProvider, useNotify,
} from 'react-admin';
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

import {
  Button as MuiButton,
  Card,
  CardContent,
  Grid,
  TextField as MuiTextField,
} from '@mui/material';
import {useMutation} from "react-query";

export const UserListWithChangePassword = () => {

  const [open, setOpen] = React.useState(false);
  const [formValues, setFormValues] = useState({sysUserId: '', newPassword: '', confirmPassword: ''});
  const notify = useNotify();

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = (e: any) => {
    e.stopPropagation();
    setOpen(true);
  }

  const dataProvider = useDataProvider();
  const {mutate} = useMutation(
    ['changePassword', formValues.sysUserId, formValues.newPassword, formValues.confirmPassword],
    (): any => {
      return dataProvider
        .changePassword(
          null,
          {
            data: {
              sysUserId: formValues.sysUserId,
              newPassword: formValues.newPassword,
              confirmPassword: formValues.confirmPassword
            }
          });
    },
    {
      onSuccess: (data: any) => {
        console.log('data', data);
        // success side effects go here
        if (data.operationStatus === 'SUCCESS') {
          notify('Password updated');
        } else {
          notify(`Update password failed`, {type: 'warning'});
        }
      },
      onError: (error: any) => {
        // failure side effects go here
        notify(`Update password failed: ${error.message}`, {type: 'error'});
      },
    }
  );

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(formValues);
    mutate();
    setOpen(false);
  };

  const handleInputChange = (e: any) => {
    const {name, value} = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (<React.Fragment>
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Change Password</DialogTitle>
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid>
              <Grid item>
                <MuiTextField
                  id="newPassword"
                  name="newPassword"
                  label="New Password"
                  type="password"
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item>
                <MuiTextField
                  id="confirmPassword"
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid>
                <MuiButton
                  variant="contained"
                  color="primary"
                  style={{margin: '5px'}}
                  type="submit">
                  Submit
                </MuiButton>

                <MuiButton
                  variant="text"
                  style={{margin: '5px'}}
                  onClick={() => setOpen(false)}>
                  Cancel
                </MuiButton>

              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>

    </Dialog>
    <List>
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
        <Button onClick={handleClickOpen} label='Change Password'/>
      </Datagrid>
    </List>
  </React.Fragment>);
};
