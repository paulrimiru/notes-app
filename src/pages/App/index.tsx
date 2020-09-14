import { Button, Paper } from '@material-ui/core';
import React, { useState } from 'react';

import Typography from '@material-ui/core/Typography/Typography';
import AddIcon from '@material-ui/icons/Add';

import useAppStyles from './styles';

import './App.scss';
import NoteList from '../../components/NoteList';

function App() {

  const [categories, setCategories] = useState(["Lorepsum ipsum", "ipsum lorepsum", "just another note"]);
  const classes = useAppStyles();

  return (
    <div className="app">
      <div className="app-container">
        <div className="app-container-master">
          <Typography variant="h5" gutterBottom>
            Analog Note App
          </Typography>
          <div className="app-container-master__list">
            <NoteList data={categories} />
          </div>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            endIcon={<AddIcon />}
          >
            New
          </Button>
        </div>
        <div className="app-container-detail">
          No meeting selected
        </div>
      </div>
    </div>
  );
}

export default App;
