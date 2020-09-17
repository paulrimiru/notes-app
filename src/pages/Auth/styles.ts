import { makeStyles, Theme, createStyles } from "@material-ui/core";

const useAuthStyles = makeStyles((theme: Theme) =>
  createStyles({
    textfield: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      width: '100%',
    },
    button: {
      alignSelf: 'center',
      textTransform: 'none',
      fontSize: '18px',
      fontWeight: 400,
    },
  }),
);

export default useAuthStyles;
