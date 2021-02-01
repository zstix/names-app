import { FunctionComponent } from 'preact';
import './namecard.css';

const NameCard: FunctionComponent<{ name: string}> = ({ name }) => (
  <div className="na-namecard">
    <div className="na-namecard__title">
      <div>Hello</div>
      <div>My Name Is</div>
    </div>
    <div className="na-namecard__name">{name}</div>
    <div className="na-namecard__footer" />
  </div>
);

export default NameCard;