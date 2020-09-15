import { makeStyles, Theme, createStyles } from "@material-ui/core";

const useMeetingNoteItemStyles = makeStyles((theme: Theme) =>
  createStyles({
    inline: {
      width: '96%',
    },
    actions: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: 50
    },
    inputRoot: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      width: '100%',
      marginBottom: 48,
    },
    inputField: {
      
    },
    doneButton: {
      justifySelf: 'center',
    },
    header: {
    },
    inputFieldTitle: {
    },
    inputContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%'
    },
    displayContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    displayTextContainer: {
      flexGrow: 1,
    },
  }),
);

export default useMeetingNoteItemStyles;
