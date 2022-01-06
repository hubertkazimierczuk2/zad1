import React from 'react';
import { Link } from 'react-router-dom';
import schema from './schema.png'

export default () => {
  return (
    <div>
     	 <img src={schema} alt="schema" />
     	 <p>
     	 Architecture system image
     	</p>
     	<p>
     		<Link to="/">Go back home</Link>
     	</p>
    </div>
  
  );
};
