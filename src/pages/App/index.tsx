import { Button, List } from '@material-ui/core';
import React, { useState } from 'react';

import Typography from '@material-ui/core/Typography/Typography';
import AddIcon from '@material-ui/icons/Add';

import useAppStyles from './styles';
import CategoryList, { Category } from '../../components/CategoryList';

import './App.scss';
import { Note } from '../../components/NoteListItem';
import NoteListItem from '../../components/NoteListItem';
import TextField from '@material-ui/core/TextField/TextField';
import Meeting from '../Meeting';

function App() {

  const [categories, setCategories] = useState<Category[]>(["Lorepsum ipsum", "ipsum lorepsum", "just another category"].map((note, index) => ({ id: index.toString(), title: note, mode: 'display' })));
  const [notes, setNotes] = useState<Note[]>(["Lorepsum", "just another note"].map((note, index) => ({ id: index.toString(), name: note, mode: 'display' })));
  const [openNotesPane, setopenNotesPane] = useState(false);

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
  
  const addNewNote = () => {
    setNotes([...notes, { name: '', id: (notes.length).toString(), mode: 'edit' }])
  }

  const toogleNotes = () => {
    setopenNotesPane(!openNotesPane);
  }

  const handleSaveNote = (myNote: {name: string, id: string}) => {
    setNotes(notes.map(note => {
      if (note.id === myNote.id) {
        return {
          ...note,
          name: myNote.name,
          mode: 'display'
        }
      }

      return note;
    }))
  }

  const handleDeleteNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id))
  }

  return (
    <div className="app">
      <div className="app-container">
        <div className="app-container-master">
          <div className="app-container-master__categories">
            <div className="app-container-master__categories-header">
              <Typography variant="h4">
                Notes
              </Typography>
              <TextField
                select
                label="Organisation"
                SelectProps={{
                  native: true,
                }}
                variant="filled"
              >
                {['Analog', 'Google', 'Amazon'].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </TextField>
            </div>
            <div className="app-container-master__list">
              <CategoryList data={categories} onSave={handleSave} onDelete={handleDelete} onClick={toogleNotes} />
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
          <div className={`app-container-master__notes${openNotesPane ? '-visible' : '' }`}>
            <Typography variant="h6" gutterBottom>
              Categories Notes
            </Typography>
            <List className={classes.notesList}>
              {
                notes.map((note, index) => (<NoteListItem key={index} note={note} onNoteSelected={toogleNotes} onSave={handleSaveNote} onDelete={handleDeleteNote}/>))
              }
            </List>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
              endIcon={<AddIcon />}
              onClick={addNewNote}
            >
              New
            </Button>
          </div>
        </div>
        <div className="app-container-detail">
          <Meeting />
        </div>
      </div>
    </div>
  );
}

export default App;
