import { Button, Dialog, List } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import Typography from '@material-ui/core/Typography/Typography';
import AddIcon from '@material-ui/icons/Add';

import useAppStyles from './styles';
import CategoryList, { Category } from '../../components/CategoryList';

import './App.scss';
import { Note } from '../../components/NoteListItem';
import NoteListItem from '../../components/NoteListItem';
import TextField from '@material-ui/core/TextField/TextField';
import Meeting from '../Meeting';
import LoaderComponent from '../../components/Loader';
import { useMessage } from '../../utils/hooks';
import { Form } from '../../components/Form';
import { http } from '../../utils/axios';
import { useHistory } from 'react-router-dom';

interface Organisation {
  name: string;
  id: string;
  selected: boolean;
}

function App() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [notes, setNotes] = useState<Note[]>([]);
  const [organisations, setOrganisations] = useState<Organisation[]>([]);
  
  const [openNotesPane, setopenNotesPane] = useState({ open: false, selectedCategory: '' });
  const [showSuccess, showError] = useMessage();
  const [openOrganisationDialog, setOpenOrganisationDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedNote, setSelectedNote] = useState<{
    note?: string;
    name: string;
    id: string;
  }>({ name: '', id: ''});

  const classes = useAppStyles();
  const history = useHistory();

  useEffect(() => {
    setLoading(true);
    fetchOrganisations()
  }, []);

  useEffect(() => {
    if (organisations.length){
      setLoading(true);
      fetchCategories(organisations.find(organ => organ.selected)?.id || organisations[0].id)
    }
  }, [organisations]);


  const displayMessage = (status: string, message?: string) => {
    switch (status) {
      case 'success':
        showSuccess('Information fetched')
        break;
      case 'error':
        showError(message || 'request failed');
        break;
    }
  }

  const handleDelete = (id: string) => {
    setCategories(categories.filter(category => category.id !== id));
  }

  const addNew = () => {
    setCategories([...categories, { name: '', id: (categories.length).toString(), mode: 'edit' }])
  }
  
  const addNewNote = () => {
    setNotes([...notes, { name: '', id: (notes.length).toString(), mode: 'edit' }])
  }

  const toogleNotes = async (id: string) => {
    console.log(id);

    setopenNotesPane({
      open: openNotesPane.selectedCategory === id ? !openNotesPane.open : openNotesPane.open,
      selectedCategory: id
    });

    if (openNotesPane.selectedCategory !== id) {
      await fetchNotes(id)
    }
  }

  const onNoteSelected = (note: Note) => {
    setSelectedNote({
      id: note.id,
      name: note.name,
      note: note.notes
    });
  }

  const handleDeleteNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id))
  }

  const handleOrganisationCreate = async(data: any) => {
    try {
      const resp = await http().post('/organisation', data)
      setOrganisations([...organisations, { ...resp.data, selected: true }])
      setOpenOrganisationDialog(false)
      displayMessage('success')
    } catch(err) {
      console.log(err)
      displayMessage('error', err.message)
    }
  }
  
  const handleCategoryCreate = async(data: any) => {
    setLoading(true);
    try {
      const resp = await http().post('/category', {...data, organisationId: organisations.find(organ => organ.selected)?.id || organisations[0].id })
      setCategories([...(categories.filter(category => category.mode !== 'edit')), { ...resp.data, mode: 'display' }])
      setLoading(false);
      displayMessage('success')
    } catch(err) {
      setLoading(false);
      console.log(err)
      displayMessage('error', err.message)
    }
  }

  const handleNoteCreate = async(data: any) => {
    setLoading(true);
    try {
      const resp = await http().post('/note', { ...data, categoryId: openNotesPane.selectedCategory })
      setNotes([...(notes.filter(category => category.mode !== 'edit')), { ...resp.data, mode: 'display' }])
      setLoading(false);
      displayMessage('success')
    } catch(err) {
      setLoading(false);
      console.log(err)
      displayMessage('error', err.message)
    }
  }

  const handleNoteUpdate = async (data: any) => {
    setLoading(true);
    try {
      await http().put('/note', data)
      setNotes(notes.map(note => {
        if (note.id ===  data.id) {
          return {
            ...note,
            note: data.note
          };
        }

        return note;
      }))
      setLoading(false);
      displayMessage('success')
    } catch(err) {
      setLoading(false);
      console.log(err)
      displayMessage('error', err.message)
    }
  }

  const fetchOrganisations = async () => {
    try {
      const resp = await http().get('/organisation');

      if (!resp.data.length) {
        setOpenOrganisationDialog(true)
        setLoading(false);
        return
      }

      setOrganisations(resp.data.map((org: any, index: number) => ({...org, selected: index === 0})));
      setLoading(false);
      displayMessage('success', 'Fetched organisations successfully');
    } catch (err) {
      console.log(err)
      setLoading(false);
      displayMessage('error', err.message)
    }
  }

  const fetchCategories = async (organisationId: string) => {
    try {
      const resp = await http().get(`/category/${organisationId}`);
      setCategories(resp.data.map((category:any) => ({ ...category, mode: 'display' })))
      setLoading(false);
      displayMessage('success', 'Fetched categories successfully');
    } catch (err) {
      console.log(err)
      setLoading(false);
      displayMessage('error', err.message)
    }
  }


  const fetchNotes = async (categoryId: string) => {
    try {
      const resp = await http().get(`/note/${categoryId}`);
      setNotes(resp.data.map((note:any) => ({ ...note, mode: 'display' })))
      setLoading(false);
      displayMessage('success', 'Fetched notes successfully');
    } catch (err) {
      console.log(err)
      setLoading(false);
      displayMessage('error', err.message)
    }
  }

  return (
    <div className="app">
      <LoaderComponent loading={loading}/>
      <Dialog
        open={openOrganisationDialog}
        className={classes.orgModal}
        fullWidth
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Form
            title={"Please create an organisation"}
            actionsName={"submit"}
            onSubmit={handleOrganisationCreate}
            hasCancel={false}
            fields={[
              {
                type: 'text',
                name: 'name',
                validations: {
                  required: "Required",
                  min: {
                    value: 2,
                    message: 'Please enter a name with at least 2 characters'
                  }
                }
              }
            ]}
          />
      </Dialog>
      <div className="app-container">
        <div className="app-container-master">
          <div className="app-container-master__categories">
            <div className="app-container-master__categories-header">
              <Typography variant="h4">
                Notes
              </Typography>
              <TextField
                select
                helperText="Organisation"
                SelectProps={{
                  native: true,
                }}
                variant="filled"
                fullWidth
                className={classes.orgSelector}
              >
                {organisations.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </TextField>
            </div>
            <div className="app-container-master__list">
              <CategoryList data={categories} onSave={handleCategoryCreate} onDelete={handleDelete} onClick={toogleNotes} />
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
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => { history.push('/auth'); localStorage.removeItem('token')}}
            >
              Logout
            </Button>
          </div>
          <div className={`app-container-master__notes${openNotesPane.open ? '-visible' : '' }`}>
            <Typography variant="h6" gutterBottom>
              {categories.find(category => category.id === openNotesPane.selectedCategory)?.name} Notes
            </Typography>
            <List className={classes.notesList}>
              {
                notes.map((note, index) => (
                  <NoteListItem key={index} note={note} onNoteSelected={onNoteSelected} onSave={handleNoteCreate} onDelete={handleDeleteNote} />)
                )
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
          <Meeting note={selectedNote} onUpdate={handleNoteUpdate} />
        </div>
      </div>
    </div>
  );
}

export default App;
