import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';

export default function App() {
  const items = ['Item1', 'Item2', 'Item3', 'Item4'];

  return (
    <>
      <Menu items={items} />
    </>
  );
}
