import * as React from 'react';
import s from './ContentPanel.module.scss';
import DialogsContainer from './Dialogs/DialogsContainer';
import {Redirect, Route, Switch} from "react-router-dom";
import Profile from "./Profile/Profile";
import UsersContainer from "./Users/UsersContainer";

export default class ContentPanel extends React.Component {

    render() {
        return <section className={s.contentPanel}>
            <Switch>
                <Route path='/dialogs' component={DialogsContainer}/>
                <Route path='/profile' component={Profile}/>
                <Route path='/users' component={UsersContainer}/>
                <Route render={() => <Redirect to="/profile"/>}/>
            </Switch>
        </section>
    }
}