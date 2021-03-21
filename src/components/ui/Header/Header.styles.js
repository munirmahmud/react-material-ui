import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "2rem",
  },
  logoLink: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  logo: {
    width: "250px",
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tabMenu: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "24px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
    color: "#ffffff",
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "#fff",
    fontFamily: "'Raleway', sans-serif",
    fontWeight: 700,
    borderRadius: 0,
  },
  menuItem: {
    ...theme.typography.tab,
    padding: 10,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
}));

export default useStyles;
