import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { User } from './types';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LanguageIcon from '@material-ui/icons/Language';
import BusinessIcon from '@material-ui/icons/Business';
import Typography from '@material-ui/core/Typography';
import { MapContainer, Marker, Popup, TileLayer } from '@monsonjeremy/react-leaflet';


const UserDetails: React.FC = () => {
  let { userId } = useParams<{ userId: string; }>();

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User>();


  useEffect(() => {
    setLoading(true);

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(res => res.json())
      .then(user => setUser(user))
      .finally(() => setLoading(false));
  }, [userId]);

  if (loading) {
    return (
      <Box p={4}
           display="flex"
           justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }

  if (!user) {
    return null;
  }

  const coords = [parseFloat(user.address.geo.lat), parseFloat(user.address.geo.lng)] as [number, number];

  return (
    <Card sx={{ m: 2 }}>
      <CardContent>
        <Box display="flex"
             alignItems="center"
             mb={2}>
          <Avatar alt="Remy Sharp"
                  sx={{ width: '70px', height: '70px' }}
                  src={`https://avatars.dicebear.com/v2/male/${user.id}.svg`} />
          <Typography gutterBottom
                      variant="h5"
                      component="div"
                      ml={2}>
            {user.name}
          </Typography>
        </Box>
        <Grid container
              spacing={2}>
          <Grid item
                xs={6}>
            <Box display="flex">
              <EmailIcon color="primary" />
              <Typography ml={2}>{user.email}</Typography>
            </Box>
          </Grid>
          <Grid item
                xs={6}>
            <Box display="flex">
              <PhoneIcon color="primary" />
              <Typography ml={2}>{user.phone}</Typography>
            </Box>
          </Grid>
          <Grid item
                xs={6}>
            <Box display="flex">
              <LanguageIcon color="primary" />
              <Typography ml={2}>{user.website}</Typography>
            </Box>
          </Grid>
          <Grid item
                xs={6}>
            <Box display="flex">
              <BusinessIcon color="primary" />
              <Typography ml={2}>{user.company.name}</Typography>
            </Box>
          </Grid>
        </Grid>
        <Box height="300px"
             pt={3}>
          <MapContainer style={{ height: '100%' }}
                        center={coords}
                        zoom={13}
                        scrollWheelZoom={false}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={coords}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

UserDetails.displayName = 'UserDetails';

export default UserDetails;
