import React from 'react';
import { css, useTheme } from '@emotion/react';

const FooBar: React.FC = () => {
  const theme = useTheme();

  return (
    <div
      css={css`
        color: ${theme.color.text.primary};
      `}
    >
      Hello, Names App!
    </div>
  );
}

export default FooBar;