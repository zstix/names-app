import { FunctionComponent as FC } from 'preact';

import NameCard from '../../components/NameCard';
import Controls from '../../components/Controls';

import './name.css';

const Name: FC = () => (
  <div className="na-root">
    <NameCard name="alexander" />
    <Controls />
  </div>
);

export default Name;
