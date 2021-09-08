import Filter from 'components/filter';
import PieChartCard from 'components/pie-chart-card';
import SalesByDate from 'components/sales-by-date';
import SalesSummary from 'components/sales-summary';
import SalesTable from 'components/sales-table';
import { useState } from 'react';
import { filterData } from 'types';
import './App.css';
import Header from './components/header';

function App() {
  const [filterData, setFilterData] = useState<filterData>();
  const onFilterChange = (filter: filterData) => {
    setFilterData(filter);
  };
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onFilterChange={onFilterChange} />
        <SalesByDate filterData={filterData} />
        <div className="sales-overview-container">
          <SalesSummary />
          <PieChartCard
            name="Lojas"
            labels={['Planaltina', 'Araguari', 'Brasília']}
            series={[40, 30, 30]}
          />

          <PieChartCard
            name="Pagamento"
            labels={['Crédito', 'Débito', 'Dinheiro']}
            series={[30, 50, 30]}
          />
        </div>
        <SalesTable />
      </div>
    </>
  );
}

export default App;
