import React from 'react';

import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';


const Navbar = ({ handleSectionChange }) => {
  return (
    <nav>
      <ul>
        <li>
          <button onClick={() => handleSectionChange('welcome')}>Welcome</button>
        </li>
        <li>
          <button onClick={() => handleSectionChange('about')}>About</button>
        </li>
        <li>
          <button onClick={() => handleSectionChange('projects')}>Projects</button>
        </li>
        <li>
          <button onClick={() => handleSectionChange('skills')}>Skills</button>
        </li>
        <li>
          <button onClick={() => handleSectionChange('certifications')}>Certifications</button>
        </li>
        <li>
          <button onClick={() => handleSectionChange('workExperience')}>Work Experience</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
