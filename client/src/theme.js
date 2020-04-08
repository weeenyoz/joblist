import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
    palette: {
        primary: { main: blue[700], light: blue[50] },
        secondary: { main: red[700], light: red[50] },
    },
});

export default theme;
