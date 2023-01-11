import { useRecordContext } from 'react-admin';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export const LinkToRoleUsers = () => {
  const record = useRecordContext();
  return record ? (
    <Button
      color="primary"
      component={Link}
      to={{
        pathname: '/sys-users',
        search: encodeURI(`filter=${JSON.stringify({ 'sys_role': record.id })}`),
      }}
    >
      Users
    </Button>
  ) : null;
};
