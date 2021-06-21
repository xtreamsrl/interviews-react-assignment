import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import { Post } from './types';
import { styled } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

const ClearLink = styled(NavLink)({
  textDecoration: 'none',
  color: 'inherit',
});

const Posts: React.FC = () => {

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([] as Post[]);


  useEffect(() => {
    setLoading(true);

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(posts => setPosts(posts))
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
      {posts && posts.map(p => (
        <Grid item
              xs={12}
              md={6}
              key={p.id}>
          <Card>
            <CardContent>
              <Box display="flex"
                   alignItems="center"
                   mb={2}>

                <ClearLink to={`/users/${p.userId}`}>
                  <Avatar alt="Remy Sharp"
                          src={`https://avatars.dicebear.com/v2/male/${p.userId}.svg`} />
                </ClearLink>
                <Typography gutterBottom
                            variant="h5"
                            component="div"
                            ml={2}>
                  {p.title}
                </Typography>
              </Box>

              <Typography variant="body2"
                          color="text.secondary">
                {p.body}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}

    </Grid>
  );
};

Posts.displayName = 'Posts';

export default Posts;
