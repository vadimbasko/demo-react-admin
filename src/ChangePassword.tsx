import {
    Title, useDataProvider
} from 'react-admin';
import {Button, Card, CardContent, Grid, TextField} from "@mui/material";
import React, {useState} from "react";
import {useMutation} from "react-query";

export const ChangePassword = () => {

    const [formValues, setFormValues] = useState({sysUserId: '', oldPassword: '', newPassword: ''});
    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(formValues);
        mutate();
    };

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const dataProvider = useDataProvider();
    const { mutate, isLoading } = useMutation(
      ['changePassword', formValues.sysUserId, formValues.oldPassword, formValues.newPassword],
      () =>  dataProvider
        .changePassword(
          null,
          {data: {sysUserId: formValues.sysUserId, oldPassword: formValues.oldPassword, newPassword: formValues.newPassword}})
    );

    return <>
        <Card>
            <Title title="Change password"/>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    {/*<Grid container alignItems="center" justify="center" direction="column" >*/}
                    <Grid>
                        <h1>Change Password</h1>
                        <Grid item>
                            <TextField
                              id="sysUserId"
                              name="sysUserId"
                              label="Sys User Id"
                              type="text"
                              onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                              id="oldPassword"
                              name="oldPassword"
                              label="Old Password"
                              type="password"
                              onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                              id="newPassword"
                              name="newPassword"
                              label="New Password"
                              type="password"
                              onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="primary" type="submit" style={{
                                backgroundColor: "green",
                                margin: "5px"
                            }}>
                                Submit
                            </Button>

                        </Grid>
                    </Grid>
                </form>
            </CardContent>
        </Card>
    </>
};
