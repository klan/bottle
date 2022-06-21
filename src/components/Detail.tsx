import React from 'react';
import styled from 'styled-components';
import type { IDetail } from 'interfaces/app';

export default function Detail(props: IDetail) {
  const {
    item: {
      name,
      tagline,
      description,
      image_url,
      brewers_tips,
      contributed_by,
      ingredients: { yeast: yeastName, hops, malt }
    }
  } = props;

  const hopsName = hops.map(({ name }) => name).join(', ');
  const maltName = malt.map(({ name }) => name).join(', ');

  return (
    <>
      <h1>{name}</h1>
      <h3>{tagline}</h3>
      <p>{description}</p>
      <img src={image_url} />
      <figure>
        <blockquote>
          <p>{brewers_tips}</p>
        </blockquote>
        <figcaption>—{contributed_by}</figcaption>
      </figure>
      <ul>
        {yeastName && (
          <li>
            <div>Yeast</div>
            <span>{yeastName}</span>
          </li>
        )}
        {hopsName && (
          <li>
            <div>Hops</div>
            <span>{hopsName}</span>
          </li>
        )}
        {maltName && (
          <li>
            <div>Malt</div>
            <span>{maltName}</span>
          </li>
        )}
      </ul>
    </>
  );
}
