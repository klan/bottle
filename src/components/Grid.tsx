import React, { useState } from 'react';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';
import { Drawer } from './Drawer';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 20px;
`;

const Item = styled.div`
  line-height: 80px;
  color: rgb(66, 61, 63);
  font-size: 2em;
  font-weight: 800;
  text-transform: uppercase;
  text-align: center;
  background-color: aquamarine;
  box-shadow: 0 0 5px -2px rgba(0, 0, 0, 0.6);
  border-radius: 8px;
`;

const AnimatedItem = animated(Item);

interface IGrid {
  items: any[];
}

export default function Grid(props: IGrid) {
  const { items } = props;

  const config = { mass: 5, tension: 2000, friction: 200 };

  const [show, setShow] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const transition = useTransition(items, {
    config,
    from: { opacity: 0, size: 0 },
    enter: { opacity: 1, size: 1 },
    trail: 100,
    onRest: () => setShow(!show)
  });

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
              onClick={() => setDrawerOpen(true)}
            >
              <span>{name}</span>
            </AnimatedItem>
          );
        })}
      </Container>
      <Drawer open={drawerOpen} changeOpen={(state) => setDrawerOpen(state)} />
    </>
  );
}
