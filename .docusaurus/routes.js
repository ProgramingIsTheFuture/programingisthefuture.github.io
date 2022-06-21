
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog','3c4'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post','bee'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/go',
    component: ComponentCreator('/blog/tags/go','421'),
    exact: true
  },
  {
    path: '/blog/tags/microservices',
    component: ComponentCreator('/blog/tags/microservices','ec7'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/','be3'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/','bab'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/Microservices/intro',
        component: ComponentCreator('/Microservices/intro','373'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/Microservices/types',
        component: ComponentCreator('/Microservices/types','cff'),
        exact: true,
        'sidebar': "docs"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
