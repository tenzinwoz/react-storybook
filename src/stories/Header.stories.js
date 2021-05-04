import React from 'react';
import './header.css';
import Header from '../components/Header/Header';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Header',
    component: Header,
}

export const Text = () => <Header>Header inside story book!</Header>
