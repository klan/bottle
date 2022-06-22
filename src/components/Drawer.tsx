import React from 'react';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';
import type { IDrawer } from 'interfaces/app';
import { BorderRadiusMedium, Spacing2, Spacing3, Spacing6 } from 'tokens';
import CloseIcon from '../icons/close.svg';

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
  box-sizing: border-box;
  width: 100%;
  min-height: 0;
  max-height: calc(100% - 200px);
  background-color: white;
  border-top-left-radius: ${BorderRadiusMedium};
  border-top-right-radius: ${BorderRadiusMedium};
  overflow: hidden;

  @media (min-width: 780px) {
    margin: auto;
    width: auto;
    min-width: 600px;
    min-height: 200px;
    max-width: calc(100% - 40px);
    max-height: calc(100% - 40px);
    border-radius: ${BorderRadiusMedium};
  }
`;

const AnimatedContainer = animated(Container);

const Header = styled.div`
  display: flex;
  justify-content: end;
`;

const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  padding: ${Spacing2};
  margin: ${Spacing3};
  height: 28px;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const ScrollContainer = styled.div`
  overflow-y: auto;
  padding: 0 ${Spacing6};
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

const AnimatedBackdrop = animated(Backdrop);

const Drawer: React.FC<IDrawer> = (props) => {
  const { children, open, close } = props;

  const config = { mass: 5, tension: 2000, friction: 200 };

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
            <Header>
              <MenuButton onClick={close}>
                <Icon src={CloseIcon} alt="menu" />
              </MenuButton>
            </Header>
            <ScrollContainer>{children}</ScrollContainer>
          </AnimatedContainer>
        </Wrapper>
      )
  );
};

export default Drawer;
