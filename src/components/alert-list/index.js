import React from 'react';

const AlertList = ({data}) => (
  data.length > 0 &&
  <>
    <p className="arrow-down">&#x2193;</p>

    <ul className="alert-list">
      {data.map((item, index) => (
        <li key={index} className="alert-list-item">{item}</li>
      ))}
    </ul>
  </>
);

AlertList.defaultProps = {
  data: []
};

export default AlertList;
