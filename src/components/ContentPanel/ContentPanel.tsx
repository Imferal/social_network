import * as React from 'react';
import s from './ContentPanel.module.scss';
import DialogsContainer from './Dialogs/DialogsContainer';
import {Redirect, Route, Switch} from "react-router-dom";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";

export default class ContentPanel extends React.Component {

    render() {
        return <section className={s.contentPanel}>
            <Switch>
                <Route path='/dialogs' component={DialogsContainer}/>
                <Route path='/profile/:userId' component={ProfileContainer}/>
                <Route path='/users' component={UsersContainer}/>
                <Route render={() => <Redirect to="/profile"/>}/>
            </Switch>
        </section>
    }
}