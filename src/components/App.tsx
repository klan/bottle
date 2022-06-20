import React, { useState, lazy, Suspense } from 'react';
import styled from 'styled-components';
import Menu from 'components/Menu';
import type { IPages, PageType } from 'interfaces/page';

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
      <header>
        <button onClick={() => setMenuOpen(!menuOpen)}>toggle menu</button>
      </header>
      <Menu
        items={items}
        changePage={(page) => {
          setPage(page);
          setMenuOpen(false);
        }}
        open={menuOpen}
      />
      <main>
        <Suspense fallback={<p>loading...</p>}>{page === 'beers' ? <Beers /> : <Frontpage />}</Suspense>
      </main>
      <footer></footer>
    </>
  );
}
