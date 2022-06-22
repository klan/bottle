import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTransition, useTrail, animated } from 'react-spring';
import matchMedia from 'helpers/matchMedia';
import type { IMenu } from 'interfaces/app';
import { ColorNeutralSurface60, ColorPrimary, Spacing2, Spacing3 } from 'tokens';
import CloseIcon from '../icons/close.svg';

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
  width: 100%;
  height: 100%;
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-left: 40px;
  box-sizing: border-box;

  @media (min-width: 780px) {
    padding-left: 20%;
  }
`;

const Header = styled.header`
  height: 60px;
`;

const AnimatedHeader = animated(Header);

const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  padding: ${Spacing2};
  margin: ${Spacing3};
  cursor: pointer;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
`;

const Item = styled.div<{ height: number }>`
  width: 100%;
  height: ${({ height }) => `${height}px`};
  line-height: ${({ height }) => `${height}px`};
  color: ${ColorNeutralSurface60};
  font-weight: bold;
  font-size: 3em;
  text-transform: uppercase;

  &:hover {
    color: ${ColorPrimary};
  }

  @media (min-width: 780px) {
    font-size: 5em;
  }
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

  const [itemHeight, setItemHeight] = useState<number>(matchMedia.isMobile() ? 60 : 80);

  const handleResize = () => setItemHeight(matchMedia.isMobile() ? 60 : 80); // TODO add debounce

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return (): void => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
    height: open ? itemHeight : 0
  });

  return (
    <>
      {fade(
        ({ opacity }, item) =>
          item && (
            <>
              <AnimatedBackdrop style={{ opacity }} />
              <Container>
                <AnimatedHeader style={{ opacity }}>
                  <MenuButton onClick={() => changePage(null)}>
                    <Icon src={CloseIcon} alt="close" />
                  </MenuButton>
                </AnimatedHeader>
                <Navigation>
                  {trail.map(({ x, y, height, ...rest }, index) => {
                    const { name, action } = items[index];
                    return (
                      <AnimatedItem
                        key={name}
                        style={{
                          ...rest,
                          transform: y.interpolate((y) => `translate3d(${y}px, 0, 0)`)
                        }}
                        height={itemHeight}
                      >
                        <AnimatedText style={{ height }} onClick={() => changePage(action)}>
                          {name}
                        </AnimatedText>
                      </AnimatedItem>
                    );
                  })}
                </Navigation>
              </Container>
            </>
          )
      )}
    </>
  );
}
