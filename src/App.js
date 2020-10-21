import React from 'react';
import * as Amp from 'react-amphtml';
import * as AmpHelpers from 'react-amphtml/helpers';

function App() {
  return (
      <div>
        <AmpHelpers.Action >
  {(props) => (
    <button type="button" {...props}>
      Do Something
    </button>
  )}
</AmpHelpers.Action>
      </div>
    );
}

export default App;
