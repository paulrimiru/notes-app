import React from 'react';

import NoteListItem from '../NoteListItem';

export interface NoteListProps {
  data: string[];
}

const NoteList = ({ data }: NoteListProps) => {
  return (
    <div className="list">
      { data.map(note => <NoteListItem title={note} />)}
    </div>
  )
}

export default NoteList;