import { Typography } from '@material-ui/core';
import React from 'react';

import NoteListItem from '../CategoryListItem';

export interface Category {
  id: string;
  name: string;
  mode: 'create' | 'edit' | 'display';
}

export interface NoteListProps {
  data: Category[];
  onSave: (note: { name: string }) => void;
  onDelete: (id: string) => void;
  onClick: (id: string) => void;
  selectForEdit: (id: string) => void;
  onEdit: (note: { name: string, id: string }) => void;
}

const NoteList = ({ data, onSave, onDelete, onClick, selectForEdit, onEdit }: NoteListProps) => {
  return (
    <div className="list">
      <Typography variant="h6" gutterBottom>
        Categories
      </Typography>
      { data.map((note, index) =>
        <NoteListItem
          key={index}
          id={note.id}
          title={note.name}
          mode={note.mode}
          onSave={onSave}
          onDelete={onDelete}
          selectForEdit={selectForEdit}
          onEdit={onEdit}
          onClick={onClick} />) }
    </div>
  )
}

export default NoteList;