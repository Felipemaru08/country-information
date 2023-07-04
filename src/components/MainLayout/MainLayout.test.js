/* eslint-env jest */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MainLayout } from './index';

beforeEach(cleanup);

test('Should render with default and provided className and children', () => {
  const { container } = render(
    <MainLayout
      className='xxx'
      header='myheader'
      footer='myfooter'
    >
      mychildren
    </MainLayout>
  );
  const { firstChild: element } = container;
  expect(element).toBeInstanceOf(window.HTMLDivElement);
  expect(element.classList.contains('hb-MainLayout')).toBeTruthy();
  expect(element.classList.contains('xxx')).toBeTruthy();
  expect(element.querySelector('.hb-MainLayout__header').textContent).toBe('myheader');
  expect(element.querySelector('.hb-MainLayout__footer').textContent).toBe('myfooter');
  expect(element.querySelector('.hb-MainLayout__children').textContent).toBe('mychildren');
});
