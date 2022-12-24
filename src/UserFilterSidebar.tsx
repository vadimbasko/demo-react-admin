import { SavedQueriesList, FilterLiveSearch, FilterList, FilterListItem } from 'react-admin';
import { Card, CardContent } from '@mui/material';
import BlockIcon from '@mui/icons-material/Block';
import AccountBoxIcon from '@mui/icons-material/AccountBox';


export const UserFilterSidebar = () => (
  <Card sx={{ order: -1, mr: 2, mt: 9, width: 200 }}>
    <CardContent>
      <SavedQueriesList />
      <FilterLiveSearch />
        <FilterList label="Banned" icon={<BlockIcon />}>
          <FilterListItem label="Yes" value={{ banned: true }} />
          <FilterListItem label="No" value={{ banned: false }} />
        </FilterList>
        <FilterList label="User Source" icon={<AccountBoxIcon />}>
          <FilterListItem label="Mobile" value={{ userSourse: 'Mobile' }} />
          <FilterListItem label="Offline" value={{ userSourse: 'Offline' }} />
          <FilterListItem label="Web" value={{ userSourse: 'Web' }} />
        </FilterList>
    </CardContent>
  </Card>
);
