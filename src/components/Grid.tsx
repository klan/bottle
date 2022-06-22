import React, { useState } from 'react';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';
import Drawer from 'components/Drawer';
import Detail from 'components/Detail';
import Card from 'components/Card';
import type { IGrid } from 'interfaces/app';
import type { BeerResponse } from 'interfaces/endpoints';
import { Spacing5, Spacing6 } from 'tokens';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: ${Spacing5};
  padding: ${Spacing6};
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 780px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
`;

const Item = styled.div``;

const AnimatedItem = animated(Item);

export default function Grid(props: IGrid) {
  const { items } = props;

  const config = { mass: 5, tension: 2000, friction: 200 };

  const [show, setShow] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<BeerResponse>();

  const transition = useTransition(items, {
    config,
    from: { opacity: 0, size: 0 },
    enter: { opacity: 1, size: 1 },
    trail: 100,
    onRest: () => setShow(!show)
  });

  function toggleDetail(state, item) {
    setDrawerOpen(state);
    if (item) setSelectedItem(item);
  }

  return (
    <>
      <Container>
        {transition(({ size, opacity, ...rest }, item, state, index) => {
          if (!item) return;
          const { name } = items[index];
          return (
            <AnimatedItem
              key={name}
              style={{
                ...rest,
                transform: size.interpolate((size) => `scale(${size})`),
                opacity: opacity.interpolate({ range: [0, 0.25, 0.5, 0.75, 1], output: [0, 0, 0, 0, 1] })
              }}
              onClick={() => toggleDetail(true, items[index])}
            >
              <Card item={items[index]} />
            </AnimatedItem>
          );
        })}
      </Container>
      <Drawer open={drawerOpen} close={() => toggleDetail(false, null)}>
        <Detail item={selectedItem} />
      </Drawer>
    </>
  );
}
