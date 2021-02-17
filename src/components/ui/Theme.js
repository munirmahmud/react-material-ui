import { createMuiTheme } from '@material-ui/core/styles';

const blue = "#0B72B9";
const orange = "#FFBA60";
// font-family: 'Raleway', sans-serif;
// font-family: 'Pacifico', cursive;


export default createMuiTheme({
   palette: {
       common: {
           blue,
           orange: `${orange}`,
       },
       primary: {
           main: blue,
       },
       secondary: {
           main: orange
       }
   },
   typography: {
       fontFamily: "'Raleway', sans-serif",
       htmlFontSize: 16,
       tab: {
        textTransform: "capitalize",
        fontWeight: 700,
        // fontSize: "1rem",
       },
       estimate: {
        fontSize: "1rem",
        textTransform: "none",
       }
   }
});