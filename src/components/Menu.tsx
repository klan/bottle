import React from 'react';
import styled from 'styled-components';
import { useTrail, animated } from 'react-spring';
import type { PageType } from 'components/App';

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
`;

const Item = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  line-height: 80px;
  color: rgb(66, 61, 63);
  font-size: 5em;
  font-weight: 800;
  text-transform: uppercase;
  will-change: transform, opacity;
  overflow: hidden;
`;

const AnimatedItem = animated(Item);

const Text = styled.div`
  overflow: hidden;
  user-select: none;
`;

const AnimatedText = animated(Text);

interface IMenu {
  items: { name: string; action?: PageType }[];
  changePage: (action) => void;
  open: boolean;
}

export default function Menu(props: IMenu) {
  const { items, changePage, open } = props;

  const config = { mass: 5, tension: 2000, friction: 200 };

  const trail = useTrail(items.length, {
    config,
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    y: open ? 20 : 0,
    height: open ? 80 : 0
    // from: { opacity: 0, x: 20, y: 0, height: 0 }
  });

  return (
    <Container>
      <nav>
        {trail.map(({ x, y, height, ...rest }, index) => {
          const { name, action } = items[index];
          return (
            <AnimatedItem
              key={name}
              style={{
                ...rest,
                transform: y.interpolate((y) => `translate3d(${y}px, 0, 0)`)
              }}
            >
              <AnimatedText style={{ height }} onClick={() => changePage(action)}>
                {name}
              </AnimatedText>
            </AnimatedItem>
          );
        })}
      </nav>
    </Container>
  );
}
