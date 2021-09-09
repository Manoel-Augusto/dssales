
export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type SalesByDate = {
  date: string;
  sum: number;
};

export type ChartSeriesData = {
  x: string;
  y: number;
};

export const sumSalesByDate = (salesByDate: SalesByDate[] = []) => {
  return salesByDate.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.sum;
  }, 0);
};

export type FilterData={
    dates?: Date[];
    gender?:Gender;
}

export type SalesSumaryData={
  sum?:number;
  min:number;
  max:number;
  avg:number;
  count:number;
}

export type SalesByStore={
  storeName:string;
  sum:number;
  
}

export type SalesByPaymentMethod={
  description:string;
  sum:number;
}

export type PieChartConfig={
  labels:string[];
  series:number[];
  
}

export type SalesResponse={
  content:Sale[];
}

export type Sale={
  id:number;
  date:string;
  volume:number;
  total:number;
  gender:Gender;
  categoryName:string;
  paymentMethod:string;
  storeName:string
}