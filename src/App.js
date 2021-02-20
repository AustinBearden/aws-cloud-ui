import './App.css';
import Home from './components/Home'
import {ThemeProvider} from '@material-ui/styles'
import theme from './theme.js'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
