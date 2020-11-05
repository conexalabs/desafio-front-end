import React from 'react';

import './styles.scss';

const Home: React.FC = () => {
  return (
    <>
      <div className="list-group">
        <button
          type="button"
          className="list-group-item list-group-item-action active"
        >
          Cras justo odio
        </button>
        <button
          type="button"
          className="list-group-item list-group-item-action"
        >
          Dapibus ac facilisis in
        </button>
        <button
          type="button"
          className="list-group-item list-group-item-action"
        >
          Morbi leo risus
        </button>
        <button
          type="button"
          className="list-group-item list-group-item-action"
        >
          Porta ac consectetur ac
        </button>
        <button
          type="button"
          className="list-group-item list-group-item-action"
          disabled
        >
          Vestibulum at eros
        </button>
      </div>
    </>
  );
};

export default Home;
