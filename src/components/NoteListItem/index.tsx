import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Divider, IconButton, TextField, ListItemSecondaryAction } from '@material-ui/core';
import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './styles';
import DoneIcon from '@material-ui/icons/Done';
import EditIcon from '@material-ui/icons/Edit';

export interface Note {
  name: string;
  notes?: string;
  updatedAt?: string;
  id: string;
  mode: 'create' | 'edit' | 'display';
}

export interface NoteListProps {
  note: Note;
  onNoteSelected: (note: Note) => void;
  onSave: (note: { name: string }) => void;
  onDelete: (id: string) => void;
  selectForEdit: (id: string) => void;
  onEdit: (note: { name: string, id: string }) => void;
}

const NoteList = ({ note, onNoteSelected, onSave, onDelete, selectForEdit, onEdit }: NoteListProps) => {
  const classes = useStyles();
  const [value, setvalue] = useState(note.name);

  const handleSave = () => { note.mode === 'create' ? onSave({ name: value }) : onEdit({ name: value, id: note.id }); };

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
            Last Modified: {note.updatedAt && new Intl.DateTimeFormat().format(new Date(note.updatedAt))}
          </Typography>
        </>} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="edit" onClick={() => selectForEdit(note.id)}>
            <EditIcon />
          </IconButton>
          <IconButton edge="end" aria-label="delete"  onClick={() => onDelete(note.id)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
    </>
  )

  const editMode = (
    <>
      <TextField
        label="Meeting"
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
      <ListItem alignItems="flex-start" button onClick={() => onNoteSelected(note) }>
        { note.mode !== 'display' ? editMode : displayMode }
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  )
}

export default NoteList;
