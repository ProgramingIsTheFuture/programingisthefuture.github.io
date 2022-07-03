
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog/',
    component: ComponentCreator('/blog/','393'),
    exact: true
  },
  {
    path: '/blog/archive/',
    component: ComponentCreator('/blog/archive/','38a'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post/',
    component: ComponentCreator('/blog/mdx-blog-post/','f0a'),
    exact: true
  },
  {
    path: '/blog/tags/',
    component: ComponentCreator('/blog/tags/','0ff'),
    exact: true
  },
  {
    path: '/blog/tags/go/',
    component: ComponentCreator('/blog/tags/go/','253'),
    exact: true
  },
  {
    path: '/blog/tags/microservices/',
    component: ComponentCreator('/blog/tags/microservices/','ce9'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/','758'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/','bab'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/Microservices/intro/',
        component: ComponentCreator('/Microservices/intro/','9ec'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/Microservices/types/',
        component: ComponentCreator('/Microservices/types/','6a1'),
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
