import { ListItem,  ListItemText, Typography, IconButton, ListItemSecondaryAction, TextField } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { useState } from 'react';
import useMeetingNoteItemStyles from './styles';
import DoneIcon from '@material-ui/icons/Done';

export interface MeetingNoteItemProps {
  id: string;
  title: string;
  note: string;
  mode: 'edit' | 'display';
  onSave: (note: { note?: string; title?: string; id: string }) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

const MeetingNoteItem = ({ note, title, id, mode, onEdit, onSave, onDelete}: MeetingNoteItemProps) => {
  const classes = useMeetingNoteItemStyles();
  const [textFieldValue, setTextFieldValue] = useState(note);
  const [titleFieldValue, setTitleFieldValue] = useState(title.split(" ")[2]);

  const displayMode = (
    <div className={classes.displayContainer}>
      <ListItemText
        primary={title}
        classes={{ secondary: classes.inline }}
        secondary={<React.Fragment>
          <Typography
            component="span"
            variant="body2"
            color="textPrimary"
            paragraph
            align="justify"
          >
            {note}
          </Typography>
        </React.Fragment>} />
      <ListItemSecondaryAction className={classes.actions}>
        <IconButton edge="end" aria-label="edit" onClick={() => onEdit(id)}>
          <EditIcon />
        </IconButton>
        <IconButton edge="end" aria-label="delete" onClick={() => onDelete(id)}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </div>
  )

  const editMode = (
    <div className={classes.inputRoot}>
      <div className={classes.inputContainer}>
        <TextField
          label="Title"
          variant="filled"
          className={classes.inputFieldTitle}
          autoFocus
          value={titleFieldValue}
          onChange={e => setTitleFieldValue(e.target.value)}/> 
        <TextField
          className={classes.inputField}
          label="Write your note here"
          multiline
          rows={4}
          value={textFieldValue}
          onChange={(event) => setTextFieldValue(event.target.value)}
          helperText="Press enter or icon when done writing"
          variant="filled"
        />
      </div>
      <IconButton type="submit" className={classes.doneButton} aria-label="search" onClick={() => { onSave({id, title: `${title.split(" ")[0]} - ${titleFieldValue}`, note: textFieldValue }) }}>
        <DoneIcon />
      </IconButton>
    </div>
  )
  return (
    <ListItem alignItems="flex-start">
      { mode === 'edit' ? editMode : displayMode }
    </ListItem>
  );
}

export default MeetingNoteItem;
