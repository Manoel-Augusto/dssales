import Filter from 'components/filter';
import SalesByDate from 'components/sales-by-date';
import './App.css';
import Header from './components/header';

function App() {
  return (
  <>
  <Header/>
  <div className="app-container">
    <Filter/>
    <SalesByDate/>
  </div>
  </>
   
  
    );
}

export default App;
