import React, { useState } from 'react';

import { Paper } from '@material-ui/core';

import useNoteItemStyles from './styles';
import Typography from '@material-ui/core/Typography/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField/TextField';
import DoneIcon from '@material-ui/icons/Done';

export interface NoteListItemProps {
  id: string;
  title: string;
  mode: 'edit' | 'display';
  onSave: (note: { title: string; id: string }) => void;
  onDelete: (id: string) => void;
}

const NoteListItem = ({ title, mode, onSave, onDelete, id }: NoteListItemProps) => {
  const classes = useNoteItemStyles();
  const [value, setvalue] = useState(title);

  const handleSave = () => { onSave({ id, title: value }); };

  const displayMode = (
    <>
      <Typography variant="body1" gutterBottom className={classes.title} >
        { title }
      </Typography>
      <IconButton aria-label="delete"  onClick={() => { onDelete(id); }}>
        <DeleteIcon />
      </IconButton>
    </>
  )

  const editMode = (
    <>
      <TextField
        label="Category"
        variant="filled"
        className={classes.newNoteTextField}
        autoFocus
        value={value}
        onKeyPress={(event) => { if (event.key === 'Enter') { handleSave(); }}}
        onChange={e => setvalue(e.target.value)}/>
      <IconButton aria-label="done" onClick={handleSave}>
        <DoneIcon />
      </IconButton>
    </>
  )

  return (
  <Paper variant="outlined" className={classes.container}>
    { mode === 'edit' ? editMode : displayMode }
  </Paper>)
}

export default NoteListItem;
