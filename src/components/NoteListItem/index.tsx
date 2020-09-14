import React from 'react';

import { Paper } from '@material-ui/core';

import useNoteItemStyles from './styles';
import Typography from '@material-ui/core/Typography/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export interface NoteListItemProps {
  title: string;
}

const NoteListItem = ({ title }: NoteListItemProps) => {
  const classes = useNoteItemStyles();
  return (
  <Paper variant="outlined" className={classes.container}>
    <Typography variant="body1" gutterBottom className={classes.title} >
      { title }
    </Typography>
    <IconButton aria-label="delete">
      <DeleteIcon />
    </IconButton>
  </Paper>)
}

export default NoteListItem;
