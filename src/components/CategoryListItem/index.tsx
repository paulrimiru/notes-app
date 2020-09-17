import React, { useState } from 'react';

import { Paper } from '@material-ui/core';

import useCategoryItemStyles from './styles';
import Typography from '@material-ui/core/Typography/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField/TextField';
import DoneIcon from '@material-ui/icons/Done';
import EditIcon from '@material-ui/icons/Edit';

export interface CategoryListItemProps {
  id: string;
  title: string;
  mode: 'create' | 'edit' | 'display';
  onSave: (note: { name: string }) => void;
  onDelete: (id: string) => void;
  onEdit: (note: { name: string, id: string }) => void;
  onClick: (id: string) => void;
  selectForEdit: (id: string) => void;
}

const CategoryListItem = ({ title, mode, onSave, onDelete, onClick, id, selectForEdit, onEdit }: CategoryListItemProps) => {
  const classes = useCategoryItemStyles();
  const [value, setvalue] = useState(title);

  const handleSave = () => { mode === 'create' ? onSave({ name: value }) : onEdit({ name: value, id }) };

  const displayMode = (
    <>
      <Typography variant="body1" gutterBottom className={classes.title} >
        { title }
      </Typography>
      <div>
        <IconButton edge="end" aria-label="edit" onClick={() => selectForEdit(id)}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete"  onClick={() => { onDelete(id); }}>
          <DeleteIcon />
        </IconButton>
      </div>
      
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
    { mode !== 'display' ? editMode : displayMode }
  </Paper>)
}

export default CategoryListItem;
