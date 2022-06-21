import React from 'react';
import styled from 'styled-components';
import { useTransition, useTrail, animated } from 'react-spring';
import type { IMenu } from 'interfaces/app';

const Backdrop = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: white;
`;

const AnimatedBackdrop = animated(Backdrop);

const Container = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Item = styled.div`
  width: 100%;
  height: 80px;
  line-height: 80px;
  color: rgb(66, 61, 63);
  font-size: 5em;
  font-weight: 800;
  text-transform: uppercase;
`;

const AnimatedItem = animated(Item);

const Text = styled.div`
  overflow: hidden;
  user-select: none;
  cursor: pointer;
`;

const AnimatedText = animated(Text);

export default function Menu(props: IMenu) {
  const { items, changePage, open } = props;

  const config = { mass: 5, tension: 2000, friction: 200 };

  const fade = useTransition(open, {
    config,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  const trail = useTrail(items.length, {
    config,
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    y: open ? 20 : 0,
    height: open ? 80 : 0
  });

  return (
    <>
      {fade(
        ({ opacity }, item) =>
          item && (
            <>
              <AnimatedBackdrop style={{ opacity }} />
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
            </>
          )
      )}
    </>
  );
}
