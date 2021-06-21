import React, { useEffect, useState } from 'react';
import { User } from './types';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import { styled } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const ClearLink = styled(NavLink)({
  textDecoration: 'none',
  color: 'inherit',
});

const UsersList: React.FC = () => {

  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<User[]>();


  useEffect(() => {
    setLoading(true);

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => setUsers(users))
      .finally(() => setLoading(false));
  }, []);


  if (loading) {
    return (
      <Box p={4}
           display="flex"
           justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Grid container
          p={2}
          spacing={2}>
      {users && users.map(u => (
        <Grid item
              xs={12}
              md={6}
              key={u.id}>
          <ClearLink to={`/users/${u.id}`}>
            <Card>
              <CardContent>
                <Box display="flex"
                     alignItems="center"
                     mb={2}>
                  <Avatar alt="Remy Sharp"
                          sx={{ width: '70px', height: '70px' }}
                          src={`https://avatars.dicebear.com/v2/male/${u.id}.svg`} />
                  <Typography gutterBottom
                              variant="h5"
                              component="div"
                              ml={2}>
                    {u.name}
                  </Typography>
                </Box>
                <Grid container
                      spacing={2}>
                  <Grid item
                        xs={6}>
                    <Box display="flex">
                      <EmailIcon color="primary" />
                      <Typography ml={2}>{u.email}</Typography>
                    </Box>
                  </Grid>
                  <Grid item>
                    <Box display="flex">
                      <PhoneIcon color="primary" />
                      <Typography ml={2}>{u.phone}</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </ClearLink>
        </Grid>
      ))
      }
    </Grid>
  );
};

UsersList.displayName = 'UsersList';

export default UsersList;
