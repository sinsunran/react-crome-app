import { useState } from 'react';

const App = () => {
  return <div>
    <form action={process.env.REACT_APP_SERVER} method="post">
      <input type="text" />
      <input type="submit" value="submit" />
    </form>
  </div>  
}
export default App