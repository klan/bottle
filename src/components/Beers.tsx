import React from 'react';
import Grid from './Grid';

export default function Beers() {
  const gridItems = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6', 'Item7', 'Item8', 'Item9'];

  return (
    <section>
      <p>beers</p>
      <Grid items={gridItems} />
    </section>
  );
}
