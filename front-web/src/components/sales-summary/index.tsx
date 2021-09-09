import SalesSummaryCard from './sales-summary-card';
import './styles.css'

import { ReactComponent as AvatarIcon } from '../../assets/avatar-icon.svg';
import { ReactComponent as BarChartIcon } from '../../assets/bar-chart-icon.svg';
import { ReactComponent as DoneIcon } from '../../assets/done-icon.svg';
import { ReactComponent as SyncIcon } from '../../assets/sync-icon.svg';
import { FilterData, SalesSumaryData } from 'types';
import { useEffect, useMemo, useState } from 'react';
import { buildFilterParams, makeRequest } from 'utils/request';

type Props ={
    filterData?:FilterData
}

const initialSummary={
    avg:0,
    count:0,
    max:0,
    min:0
}

const SalesSummary = ({filterData}:Props)=>{

    const [summary, setSumamry]=useState<SalesSumaryData>(initialSummary);

    const params = useMemo(() => buildFilterParams(filterData),[filterData]);

    useEffect(() => {
        makeRequest
          .get<SalesSumaryData>('/sales/summary', {params})
          .then((response) => {
           setSumamry(response.data);
          })
          .catch(() => {
            console.error('Error to fetch sales summary');
          });
      }, [params]);


    return (<h1 className="sales-summary-container">
        <SalesSummaryCard value={summary?.avg?.toFixed(2)} label="Media" icon={<DoneIcon/>}/>
        <SalesSummaryCard value={summary?.count} label="Quantidade" icon={<SyncIcon/>}/>
        <SalesSummaryCard value={summary?.min} label="Mínima" icon={<BarChartIcon/>}/>
        <SalesSummaryCard value={summary?.max} label="Máxima" icon={<AvatarIcon/>}/>
    </h1>);
}
export default SalesSummary;