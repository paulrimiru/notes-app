import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    marginBottom: 16,
    borderRadius: 24,
    height: 54,

    '&:hover': {
      cursor: "pointer",
    }
  },
  title: {
    paddingLeft: 12,
  }
}));

export default useStyles;