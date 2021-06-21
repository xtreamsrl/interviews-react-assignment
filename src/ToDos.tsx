import React, { useEffect, useState } from 'react';
import { ToDo } from './types';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';

const ToDos: React.FC = () => {

  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([] as ToDo[]);


  useEffect(() => {
    setLoading(true);

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(todos => setTodos(todos))
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
  if (!todos) {
    return null;
  }

  const handleChange = (checked: boolean, id: number) => {
    setTodos(todos.map(t => {
      if (t.id === id) {
        return {
          ...t,
          completed: checked,
        };
      } else {
        return t;
      }
    }));
  };

  return (
    <Grid container
          spacing={2}
          sx={{ p: 2 }}>
      {todos && todos.map(t => (
        <Grid item
              xs={12}
              key={t.id}>
          <Card sx={{ p: 1 }}>
            <Box display="flex"
                 alignItems="center">
              <Checkbox
                checked={t.completed}
                onChange={event => handleChange(event.target.checked, t.id)}
              />
              <Typography sx={{ ml: 2 }}>{t.title}</Typography>

            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

ToDos.displayName = 'ToDos';

export default ToDos;
