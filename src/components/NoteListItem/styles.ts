import { makeStyles, Theme, createStyles } from "@material-ui/core";
import { deepOrange } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
    avatar: {
      color: theme.palette.getContrastText(deepOrange.A200),
      backgroundColor: deepOrange.A200,
    },
    newNoteTextField: {
      flexGrow: 1,
      paddingLeft: 12,
    }
  }),
);

export default useStyles;
