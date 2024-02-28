import React from 'react';
import './card.css';

export default function Card(props) {
  const { ctype, children, style} = props;
  return <div className={`card ${ctype}`} style={style}>{children}</div>;
}
