import SalesSummaryCard from './sales-summary-card';
import './styles.css'

import { ReactComponent as AvatarIcon } from '../../assets/avatar-icon.svg';
import { ReactComponent as BarChartIcon } from '../../assets/bar-chart-icon.svg';
import { ReactComponent as DoneIcon } from '../../assets/done-icon.svg';
import { ReactComponent as SyncIcon } from '../../assets/sync-icon.svg';
const SalesSummary = ()=>{
    return (<h1 className="sales-summary-container">
        <SalesSummaryCard value={430} label="Media" icon={<DoneIcon/>}/>
        <SalesSummaryCard value={630} label="Quantidade" icon={<SyncIcon/>}/>
        <SalesSummaryCard value={130} label="Mínima" icon={<BarChartIcon/>}/>
        <SalesSummaryCard value={230} label="Máxima" icon={<AvatarIcon/>}/>
    </h1>);
}
export default SalesSummary;