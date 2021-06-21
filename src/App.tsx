import React from 'react';
import { styled, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import PeopleIcon from '@material-ui/icons/People';
import ListIcon from '@material-ui/icons/List';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { ReactComponent as Logo } from './logo.svg';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import Posts from './Posts';
import ToDos from './ToDos';
import Users from './Users';
import SearchBar from './SearchBar';

const drawerWidth = 240;

const ClearLink = styled(NavLink)(({ theme }) => ({
    textDecoration: 'none',
    color: 'inherit',
    '&.active >div': {
      backgroundColor: theme.palette.grey[200],
    },
  }),
);

const links = [
  {
    text: 'Posts',
    path: '/posts',
    icon: <SpeakerNotesIcon />,
  },
  {
    text: 'Users',
    path: '/users',
    icon: <PeopleIcon />,
  },
  {
    text: 'ToDos',
    path: '/todos',
    icon: <ListIcon />,
  },
];

function App() {

  const theme = useTheme();

  const drawer = (
    <div>
      <Box p={2}
           sx={{ '& svg': { maxWidth: '100%' } }}>
        <Logo />
      </Box>
      <Divider />
      <List>
        {links.map(({ icon, path, text }) => (
          <ClearLink key={path}
                     to={path}>
            <ListItem button
                      sx={{ textDecoration: 'none' }}>
              <ListItemIcon>
                {icon}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </ClearLink>

        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed"
              sx={{
                width: `calc(100% - ${drawerWidth}px)`,
                ml: `${drawerWidth}px`,
              }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            xtream assignment
          </Typography>
          <SearchBar />
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box ml={`${drawerWidth}px`}
           mt="64px"
           position="fixed"
           bgcolor={theme.palette.grey[100]}
           width={`calc(100% - ${drawerWidth}px)`}
           height={`calc(100vh - 64px)`}
           overflow="auto">
        <Switch>
          <Route path="/posts"
                 component={Posts} />
          <Route path="/users"
                 component={Users} />
          <Route path="/todos"
                 component={ToDos} />
          <Route exact
                 path="/">
            <Redirect to="/posts" />
          </Route>
        </Switch>

      </Box>
    </Box>
  );
}

export default App;
