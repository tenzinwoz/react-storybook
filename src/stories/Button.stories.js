import React from 'react';
import './button.css';
import Button from '../components/Button/Button';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Button',
  component: Button,
}

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>
