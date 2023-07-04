/* eslint-env jest */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { LoadingCircle } from './index';

beforeEach(cleanup);

test('Should render with default and provided className', () => {
  const { container } = render(<LoadingCircle className='xxx' />);
  const { firstChild: element } = container;
  expect(element).toBeInstanceOf(window.HTMLDivElement);
  expect(element.classList.contains('hb-LoadingCircle')).toBeTruthy();
  expect(element.classList.contains('xxx')).toBeTruthy();
});

test('Should set size inherit className by default', () => {
  const { container } = render(<LoadingCircle />);
  const { firstChild: element } = container;
  expect(element.classList.contains('hb-LoadingCircle--size-inherit')).toBeTruthy();
});

test('Should set provided size className', () => {
  const { container } = render(<LoadingCircle size='medium' />);
  const { firstChild: element } = container;
  expect(element.classList.contains('hb-LoadingCircle--size-medium')).toBeTruthy();
});
