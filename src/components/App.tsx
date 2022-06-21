import React, { useState, lazy, Suspense } from 'react';
import styled from 'styled-components';
import Menu from 'components/Menu';
import type { IPages, PageType } from 'interfaces/app';

const Header = styled.header`
  height: 60px;
`;

const Main = styled.main`
  flex: 1;
`;

const Frontpage = lazy(() => import('components/Frontpage'));
const Beers = lazy(() => import('components/Beers'));

export default function App() {
  const items: IPages[] = [
    { name: 'Frontpage', action: 'frontpage' },
    { name: 'Beers', action: 'beers' },
    { name: 'Submit', action: undefined },
    { name: 'About', action: undefined }
  ];

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [page, setPage] = useState<PageType>('frontpage');

  return (
    <>
      <Header>
        <button onClick={() => setMenuOpen(!menuOpen)}>toggle menu</button>
      </Header>
      <Menu
        items={items}
        changePage={(page) => {
          setPage(page);
          setMenuOpen(false);
        }}
        open={menuOpen}
      />
      <Main>
        <Suspense fallback={<p>loading...</p>}>{page === 'beers' ? <Beers /> : <Frontpage />}</Suspense>
      </Main>
      <footer></footer>
    </>
  );
}
