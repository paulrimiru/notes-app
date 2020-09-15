import { Typography } from '@material-ui/core';
import React from 'react';

import NoteListItem from '../CategoryListItem';

export interface Category {
  id: string;
  title: string;
  mode: 'edit' | 'display';
}

export interface NoteListProps {
  data: Category[];
  onSave: (note: { title: string; id: string }) => void;
  onDelete: (id: string) => void;
  onClick: (id: string) => void;
}

const NoteList = ({ data, onSave, onDelete, onClick }: NoteListProps) => {
  return (
    <div className="list">
      <Typography variant="h6" gutterBottom>
        Categories
      </Typography>
      { data.map(note => <NoteListItem id={note.id} title={note.title} mode={note.mode} onSave={onSave} onDelete={onDelete} onClick={onClick} />) }
    </div>
  )
}

export default NoteList;