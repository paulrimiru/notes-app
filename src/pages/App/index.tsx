import { Button } from '@material-ui/core';
import React, { useState } from 'react';

import Typography from '@material-ui/core/Typography/Typography';
import AddIcon from '@material-ui/icons/Add';

import useAppStyles from './styles';

import './App.scss';
import NoteList, { Note } from '../../components/NoteList';

function App() {

  const [categories, setCategories] = useState<Note[]>(["Lorepsum ipsum", "ipsum lorepsum", "just another note"].map((note, index) => ({ id: index.toString(), title: note, mode: 'display' })));
  const classes = useAppStyles();

  const handleDelete = (id: string) => {
    setCategories(categories.filter(category => category.id !== id));
  }

  const handleSave = (note: {title: string, id: string}) => {
    setCategories(categories.map(category => {
      if (category.id === note.id) {
        return {
          ...category,
          title: note.title,
          mode: 'display'
        }
      }

      return category;
    }))
  }

  const addNew = () => {
    setCategories([...categories, { title: '', id: (categories.length).toString(), mode: 'edit' }])
  }

  return (
    <div className="app">
      <div className="app-container">
        <div className="app-container-master">
          <Typography variant="h5" gutterBottom>
            Notes
          </Typography>
          <div className="app-container-master__list">
            <NoteList data={categories} onSave={handleSave} onDelete={handleDelete} />
          </div>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            endIcon={<AddIcon />}
            onClick={addNew}
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
