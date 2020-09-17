import React, { useEffect, useState } from 'react';

import { Avatar, Chip, IconButton, List, TextField } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Autocomplete from '@material-ui/lab/Autocomplete';
import useMeetingStyles from './styles';
import DoneIcon from '@material-ui/icons/Done';
import SaveIcon from '@material-ui/icons/Save';

import './meeting.scss';
import MeetingNoteItem from '../../components/MeetingNoteItem';

interface MeetingProps {
  note: {
    note?: string;
    name: string;
    id: string;
  },
  onUpdate: (data: any) => void;
}

const Meeting = (props: MeetingProps) => {
  const {note, onUpdate} = props;
  const classes = useMeetingStyles();
  const [meetingNotes, setMeetingNotes] = useState<{ note: string; id: string; title: string; mode: 'edit' | 'display'; }[]>([]);
  const [textFieldValue, setTextFieldValue] = useState('');
  const [titleFieldValue, setTitleFieldValue] = useState('');
  const [attendees, setAttendees] = useState(["Me"]);

  const handleCreate = () => {
    setMeetingNotes([...meetingNotes, { id: meetingNotes.length.toString(), mode: 'display', title: `${new Intl.DateTimeFormat().format(new Date())} - ${titleFieldValue}`, note: textFieldValue, }]);
    setTextFieldValue('');
    setTitleFieldValue('')
  }

  useEffect(() => {
    console.log(note)
    if (note.note) {
      const meeting = JSON.parse(note.note);
      setAttendees(meeting.attendees);
      setMeetingNotes(meeting.notes);
    } else {
      setAttendees(["me"]);
      setMeetingNotes([]);
    }
  }, [props])

  const handleSave = (note: { note?: string; title?: string; id: string}) => {
    setMeetingNotes(meetingNotes.map(mNote => {
      if (mNote.id === note.id) {
        return {
          ...mNote,
          ...note,
          mode: 'display'
        }
      }

      return mNote;
    }))
  }

  const handleDelete = (id: string) => {
    setMeetingNotes(meetingNotes.filter(mNote => mNote.id !== id));
  }

  const handleEdit = (id: string) => {
    setMeetingNotes(meetingNotes.map(mNote => {
      if (mNote.id === id) {
        return {
          ...mNote,
          mode: 'edit'
        }
      }

      return mNote;
    }))
  }

  const handleUpdateNote = () => {
    const myNotes = {
      attendees,
      notes: meetingNotes
    }

    const noteString = JSON.stringify(myNotes);
    onUpdate({
      id: note.id,
      note: noteString
    })
  }

  if (!note.id) {
    return <div className="nomeeting">No meeting selected</div>
  }

  return (
    <div className="meeting">
      <Typography variant="h6" gutterBottom className={classes.header}>
        { note.name }
      </Typography>
      <Autocomplete
        className={classes.attendees}
        multiple
        value={attendees}
        onChange={(event, newValue) => {
          if (newValue) {
            setAttendees(newValue)
          }
        }}
        id="tags-filled"
        options={["Me", "Team mate 1", "New Team mate", "Third Team mate", "Fourth Team mate", "Fifth Team mate"]}
        defaultValue={["Me"]}
        renderTags={(value: string[], getTagProps: any) =>
          value.map((option: string, index: number) => (
            <Chip color="primary" label={option} avatar={<Avatar>{option.split("")[0]?.toUpperCase()}</Avatar>} {...getTagProps({ index })} className={classes.attendeesTag}/>
          ))
        }
        renderInput={(params: any) => (
          <TextField {...params} variant="filled" label="Members Present" miltiline rows={3} />
        )}
      />
      <List className={classes.meetingNotes}>
        { meetingNotes.map(note => (<MeetingNoteItem {...note} onEdit={handleEdit} onDelete={handleDelete} onSave={handleSave} />))}
      </List>
      <div className={classes.inputRoot}>
        <div className={classes.inputContainer}>
          <TextField
            label="Title"
            variant="filled"
            className={classes.inputFieldTitle}
            autoFocus
            value={titleFieldValue}
            onKeyPress={(event) => { if (event.key === 'Enter') { handleCreate(); }}}
            onChange={e => setTitleFieldValue(e.target.value)}/> 
          <TextField
            className={classes.inputField}
            label="Write your note here"
            multiline
            rows={4}
            value={textFieldValue}
            onChange={(event) => setTextFieldValue(event.target.value)}
            helperText="Press the done icon when done writing"
            variant="filled"
          />
        </div>
      <div className={classes.actions}>
        <IconButton className={classes.doneButton} aria-label="search" onClick={(event) => { handleCreate(); }}>
          <DoneIcon />
        </IconButton>
        <IconButton className={classes.doneButton} aria-label="search" onClick={(event) => { handleUpdateNote(); }}>
          <SaveIcon />
        </IconButton>
      </div>
    </div>
    </div>
  )
}

export default Meeting;
