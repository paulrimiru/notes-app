import React from 'react';

import NoteListItem from '../NoteListItem';

export interface Note {
  id: string;
  title: string;
  mode: 'edit' | 'display';
}

export interface NoteListProps {
  data: Note[];
  onSave: (note: { title: string; id: string }) => void;
  onDelete: (id: string) => void;
}

const NoteList = ({ data, onSave, onDelete }: NoteListProps) => {
  return (
    <div className="list">
      { data.map(note => <NoteListItem id={note.id} title={note.title} mode={note.mode} onSave={onSave} onDelete={onDelete} />) }
    </div>
  )
}

export default NoteList;