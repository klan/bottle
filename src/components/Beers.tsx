import React, { useEffect, useState } from 'react';
import Grid from 'components/Grid';
import { GetBeers } from 'interfaces/endpoints';

export default function Beers() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const initialData = async () => {
      try {
        const response = await GetBeers({ page: 1, per_page: 6 });
        console.log({ response });
        setData(response);
      } catch (error) {
        console.error(error);
      }
    };
    initialData();
  }, []);

  return (
    <section>
      <p>beers</p>
      <Grid items={data} />
    </section>
  );
}
