import React from 'react';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';
import type { IDrawer } from 'interfaces/app';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: auto;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  min-height: 0;
  max-height: calc(100% - 200px);
  background-color: white;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  overflow: hidden;

  @media (min-width: 780px) {
    margin: auto;
    width: auto;
    min-width: 600px;
    min-height: 200px;
    max-width: calc(100% - 40px);
    max-height: calc(100% - 40px);
    border-radius: 8px;
  }
`;

const AnimatedContainer = animated(Container);

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

const AnimatedBackdrop = animated(Backdrop);

export function Drawer(props: IDrawer) {
  const { open, changeOpen } = props;

  const config = { mass: 5, tension: 2000, friction: 200 };

  function close() {
    changeOpen(false);
  }

  const fade = useTransition(open, {
    config,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  const transition = useTransition(open, {
    from: { opacity: 0, transform: 'translateY(100%)' },
    enter: { opacity: 1, transform: 'translateY(0%)' },
    leave: { opacity: 0, transform: 'translateY(100%)' }
  });

  return transition(
    (style, toggle) =>
      toggle && (
        <Wrapper>
          {fade(({ opacity }, item) => item && <AnimatedBackdrop style={{ opacity }} onClick={close} />)}
          <AnimatedContainer style={style}>
            <div style={{ overflow: 'scroll' }}>
              <p>hello</p>
              <div style={{ width: '100%', height: '800px' }} />
            </div>
          </AnimatedContainer>
        </Wrapper>
      )
  );
}
