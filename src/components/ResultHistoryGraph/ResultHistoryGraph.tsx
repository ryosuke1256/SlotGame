import type { FC } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import type { ResultHistory } from '~/pages';

type ResultHistoryGraphProps = {
  resultHistory: ResultHistory;
};

// TODO: 点が見え辛い
export const ResultHistoryGraph: FC<ResultHistoryGraphProps> = ({ resultHistory }) => {
  return (
    <LineChart width={600} height={300} margin={{left:15}} data={resultHistory}>
      <Line type='monotone' dataKey='diffMedal' stroke='#8884d8' />
      <CartesianGrid stroke='#ccc' />
      <XAxis dataKey='date' />
      <YAxis unit="枚" />
    </LineChart>
  );
};