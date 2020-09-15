import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    marginBottom: theme.spacing(4),
  },
  notesList: {
    flexGrow: 1,
  }
}));

export default useStyles;