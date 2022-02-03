import './App.scss';
import { BrowserRouter as Router, NavLink} from 'react-router-dom';
import { Main } from './components/partials/Main/Main';
import { Header } from './components/partials/Header/Header';
import { AppRouter } from './components/AppRouter/AppRouter';
import { Footer } from './components/partials/Footer/Footer';
import { AuthProvider } from './components/Context/AuthProvider';




function App() {
  return (
    //hvorfor er der en div her?
    <AuthProvider>
      <Router>
        <Header /> 
        <Main>
          <AppRouter />
        </Main>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
