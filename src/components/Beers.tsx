import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Grid from 'components/Grid';
import { GetBeers } from 'interfaces/endpoints';
import { ColorSecondarySurface40 } from 'tokens';

const Section = styled.section`
  background-color: ${ColorSecondarySurface40};
  min-height: 100%;
`;

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
    <Section>
      <Grid items={data} />
    </Section>
  );
}
