import React from 'react';
import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaQuora,
  FaTwitter
} from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Muhammad Ahmad. All Rights Reserved.`,
  author: {
    name: 'Muhammad Ahmad',
    accounts: [
      {
        url: 'https://github.com/arupmandal',
        label: 'Github Account',
        type: 'gray',
        icon: <FaGithub />
      },
      {
        url: 'https://twitter.com/iamarupmandal',
        label: 'Twitter Account',
        type: 'twitter',
        icon: <FaTwitter />
      },
      {
        url: 'https://dev.to/arupmandal',
        label: 'Dev Account',
        type: 'gray',
        icon: <FaDev />
      },
      {
        url: 'https://linkedin.com/in/iamarupmandal',
        label: 'LinkedIn Account',
        type: 'linkedin',
        icon: <FaLinkedin />
      },
     
      {
        url: 'mailto:arupmandal731@gmail.com',
        label: 'Mail Arup',
        type: 'gray',
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
