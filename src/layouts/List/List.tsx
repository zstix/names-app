import { FunctionComponent as FC } from 'preact';

import './list.css';

const List: FC = () => (
  <div className="na-list">
    <div className="na-list__title">Likes</div>
    <ul>
      <li>Foo</li>
      <li className="fav">Bar</li>
      <li>Baz</li>
    </ul>
  </div>
);

export default List;

