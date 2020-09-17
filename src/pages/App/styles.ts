import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    marginBottom: theme.spacing(4),
  },
  notesList: {
    flexGrow: 1,
  },
  orgModal: {
    padding: 24
  },
  orgSelector: {
    maxWidth: '50%',
  }
}));

export default useStyles;