import React, { useState, lazy, Suspense } from 'react';
import styled from 'styled-components';
import Menu from 'components/Menu';
import type { IPages, PageType } from 'interfaces/app';
import { Spacing2, Spacing3, Spacing5 } from 'tokens';
import MenuIcon from '../icons/menu.svg';
import BottleIcon from '../icons/bottle.svg';

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 60px;
`;

const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  padding: ${Spacing2};
  margin: ${Spacing3};
  height: 38px;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${Spacing5};
`;

const Logo = styled.img`
  width: 30px;
  height: 50px;
`;

const BrandTitle = styled.div`
  font-weight: bold;
  font-size: 2rem;
  font-family: 'Montserrat', sans-serif;
`;

const Main = styled.main`
  flex: 1;
`;

const Frontpage = lazy(() => import('components/Frontpage'));
const Beers = lazy(() => import('components/Beers'));
const Submit = lazy(() => import('components/Submit'));
const About = lazy(() => import('components/About'));

export default function App() {
  const items: IPages[] = [
    { name: 'Frontpage', action: 'frontpage' },
    { name: 'Beers', action: 'beers' },
    { name: 'Submit', action: 'submit' },
    { name: 'About', action: 'about' }
  ];

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [page, setPage] = useState<PageType>('frontpage');

  function getPage(type: PageType) {
    switch (type) {
      case 'beers':
        return <Beers />;
      case 'submit':
        return <Submit />;
      case 'about':
        return <About />;
      default:
        return <Frontpage changePage={(page) => setPage(page)} />;
    }
  }

  return (
    <>
      <Header>
        <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
          <Icon src={MenuIcon} alt="menu" />
        </MenuButton>
        <Brand>
          <Logo src={BottleIcon} alt="bottle" />
          <BrandTitle>bottle</BrandTitle>
        </Brand>
      </Header>
      <Menu
        items={items}
        changePage={(page) => {
          if (page) setPage(page);
          setMenuOpen(false);
        }}
        open={menuOpen}
      />
      <Main>
        <Suspense fallback={<p>loading...</p>}>{getPage(page)}</Suspense>
      </Main>
      <footer></footer>
    </>
  );
}
