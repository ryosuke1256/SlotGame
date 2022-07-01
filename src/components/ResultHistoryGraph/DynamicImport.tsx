import dynamic from 'next/dynamic';

export default dynamic(
  async () => {
    const myModule = await import('./ResultHistoryGraph');
    return myModule.ResultHistoryGraph;
  },
  { ssr: false }
);
