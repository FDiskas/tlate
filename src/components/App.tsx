import * as React from 'react';
import CheckBox, { IItem } from './CheckBox';

import HomePage from '../pages/HomePage';

export interface IAppProps {
    title?: string;
}

export interface IAppState {
    items: IItem[];
}

export default class App extends React.Component<IAppProps, IAppState> {
    render() {
        return (
            <div>
                <HomePage/>
            </div>
        );
    }
}
