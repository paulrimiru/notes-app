import { Theme, createStyles } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';

export const useFormStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      marginTop: 24,
      marginBottom: 24,
    },
    dropDown: {
      marginTop: 12,
      marginBottom: 12,
    },
  }),
);
