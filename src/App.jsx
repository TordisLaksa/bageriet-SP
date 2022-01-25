import './App.scss';
import { BrowserRouter as Router} from 'react-router-dom';
import { Main } from './components/partials/Main/Main';
import { Header } from './components/partials/Header/Header';
import { AppRouter } from './components/AppRouter/AppRouter';
import { Footer } from './components/partials/Footer/Footer';

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Main>
          <AppRouter />
        </Main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
