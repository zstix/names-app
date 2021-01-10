import React from 'react';
import { css, withTheme } from '@emotion/react';

import Button from './Button';

// TODO: remove absolute?
const Info: React.FC<{ theme: INamesAppTheme }> = ({ theme }) => (
  <div css={css`
    position: absolute;
    top: 4em;
    left: 0;
    width: 100%;
    height: calc(100% - 4em);
    padding: 1em;
    border-radius: 1em 1em 0 0;
    color: ${theme.color.text.secondary};
    background-color: ${theme.color.background.secondary};
  `}>
    <div css={css`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `}>
      <h1>Alexander</h1>
      <Button icon="x" noBorder />
    </div>
    <div>
      <p>
        <b>Origin:</b> Something<br />
        <b>Foo:</b> Bar<br />
        <b>Lorem:</b> Ipsum<br />
      </p>
      <p>
        Voluptatem et ipsum dicta ea. Aut placeat quia blanditiis aut placeat quisquam. Nemo occaecati aut dolorum voluptates omnis. Assumenda quaerat aliquid dolores aliquam. Quia distinctio distinctio dignissimos cupiditate in. Et qui velit autem ipsam explicabo eos.
      </p>
      <p>
        Dolorum sed accusamus id illo et quibusdam rem. Eos itaque dolorem saepe delectus consequatur. Minus dolores tempore deleniti. Error voluptas eius aut quibusdam ipsa maiores perferendis.
      </p>
    </div>
  </div>
);

export default withTheme(Info);