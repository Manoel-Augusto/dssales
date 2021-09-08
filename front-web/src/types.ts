
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

export type filterData={
    dates?: Date[];
    gender?:Gender;
}