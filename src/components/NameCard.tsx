import React from 'react';
import { css } from '@emotion/react';

interface INameCardProps {
  name: string;
};

const NameCard: React.FC<INameCardProps> = ({ name }) => (
  <div css={css`
    --color-red: #df2323;

    background-color: white;
    width: calc(95vw - 0.4em);
    border: 0.2em solid white;
    border-radius: 0.5em;
    text-align: center;
  `}>
    <div css={css`
      color: white;
      background-color: var(--color-red);
      border-radius: 0.5em 0.5em 0 0;
      padding: 0.5em;
      letter-spacing: 0.3em;
      text-transform: uppercase;
    `}>
      <div css={css`
        font-weight: bold;
        font-size: 2.2em;
        line-height: 1em;
      `}>
        Hello
      </div>
      <div css={css`
        font-size: 0.8em;
      `}>
        My Name Is
      </div>
    </div>

    <div css={css`
      font-family: var(--font-marker);
      font-size: 14vw;
      line-height: 2em;
    `}>
      {name}
    </div>

    <div css={css`
      height: 2em;
      display: block;
      background-color: var(--color-red);
      border-radius: 0 0 0.5em 0.5em;
    `} />
  </div>
);

export default NameCard;