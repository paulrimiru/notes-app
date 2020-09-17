import React, { useState } from 'react';

import { Paper } from '@material-ui/core';

import useCategoryItemStyles from './styles';
import Typography from '@material-ui/core/Typography/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField/TextField';
import DoneIcon from '@material-ui/icons/Done';

export interface CategoryListItemProps {
  id: string;
  title: string;
  mode: 'edit' | 'display';
  onSave: (note: { name: string }) => void;
  onDelete: (id: string) => void;
  onClick: (id: string) => void;
}

const CategoryListItem = ({ title, mode, onSave, onDelete, onClick, id }: CategoryListItemProps) => {
  const classes = useCategoryItemStyles();
  const [value, setvalue] = useState(title);

  const handleSave = () => { onSave({ name: value }); };

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
        className={classes.newCategoryTextField}
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
  <Paper variant="outlined" className={classes.container} onClick={() => { if (mode === 'display') { onClick(id) } }}>
    { mode === 'edit' ? editMode : displayMode }
  </Paper>)
}

export default CategoryListItem;
