import { makeStyles, Theme, createStyles } from "@material-ui/core";

const useMeetingStyles = makeStyles((theme: Theme) =>
  createStyles({
    attendees: {
      padding: 12,
      width: '80%',
      alignSelf: 'center',
      height: '8%'
    },
    attendeesTag: {
      marginLeft: 8,
      marginTop: 16,
      marginBottom: 16,
    },
    meetingNotes: {
      flexGrow: 1,
      width: '80%',
      alignSelf: 'center',
      overflowY: 'auto'
    },
    inputRoot: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      width: '80%',
      height: '20%',
      alignSelf: 'center',
      marginBottom: 48,
    },
    inputField: {
      
    },
    doneButton: {
      justifySelf: 'center',
    },
    header: {
      width: '80%',
      alignSelf: 'center',
    },
    inputFieldTitle: {

    },
    inputContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%'
    }
  }),
);

export default useMeetingStyles;
