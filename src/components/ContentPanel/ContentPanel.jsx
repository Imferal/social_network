import React from 'react';
import { Route } from 'react-router-dom';
import s from './ContentPanel.module.scss';
import Dialogs from './Dialogs/Dialogs';
import Profile from './Profile/Profile';

export default class ContentPanel extends React.Component {

    render() {
        return <section className={s.contentPanel}>
            <Route path='/dialogs' component={Dialogs} />
            <Route path='/profile' component={Profile} />
        </section>
    }

}