import Search from "./components/Search";
import BusinessIcon from '@material-ui/icons/Business';
import { HeaderTitle, SearchHeader } from "./styled/styled";
import { ThemeProvider, Typography } from "@material-ui/core";
import { theme } from "./theme/theme";

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <SearchHeader>
        <HeaderTitle>

          <BusinessIcon fontSize="large" color="primary"/> 
          <Typography variant="h3" color="primary">          
            Localizador de empresas 
          </Typography>

        </HeaderTitle>
        <Search />
      </SearchHeader>
    </ThemeProvider>
  );
}

export default App;
