import React from 'react';
import { Route } from 'react-router-dom';
import s from './ContentPanel.module.scss';
import DialogsContainer from './Dialogs/DialogsContainer';

import Profile from './Profile/Profile';

export default class ContentPanel extends React.Component {

    render() {
        return <section className={s.contentPanel}>
            <Route path='/dialogs' component={DialogsContainer} />
            <Route path='/profile' component={Profile} />
        </section>
    }

}