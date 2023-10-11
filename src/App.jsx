import React from 'react';
import Header from './components/Header/Header';
import Button from './components/Button/Button';
import Cart from './components/Carts/Carts';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Button>Short By date</Button>
      {/* <Button>See More</Button> */}

      <Cart></Cart>
      <Button>See More</Button>

    </div>
  );
};

export default App;