import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Divider, IconButton, TextField, ListItemSecondaryAction } from '@material-ui/core';
import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './styles';
import DoneIcon from '@material-ui/icons/Done';

export interface Note {
  name: string;
  id: string;
  mode: 'edit' | 'display';
}

export interface NoteListProps {
  note: Note;
  onNoteSelected: (id: string) => void;
  onSave: (note: { name: string; id: string }) => void;
  onDelete: (id: string) => void;
}

const NoteList = ({ note, onNoteSelected, onSave, onDelete }: NoteListProps) => {
  const classes = useStyles();
  const [value, setvalue] = useState(note.name);

  const handleSave = () => { onSave({ id: note.id, name: value }); };

  const displayMode = (
    <>
      <ListItemAvatar>
      <Avatar className={classes.avatar}>{note.name.split("")[0]?.toLocaleUpperCase()}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={note.name}
        secondary={<>
          <Typography
            component="span"
            variant="body2"
            className={classes.inline}
            color="textPrimary"
          >
            Last Modified: 15-06-2020
          </Typography>
        </>} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete"  onClick={() => onDelete(note.id)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
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
    <>
      <ListItem alignItems="flex-start" button>
        { note.mode === 'edit' ? editMode : displayMode }
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  )
}

export default NoteList;
