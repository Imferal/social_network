import React from 'react';
import s from './AsidePanel.module.scss';

export default class AsidePanel extends React.Component {
    render() {
        return (
            <aside className={s.asidePanel__wrapper}>
                <h2 className={s.asidePanel__content}>Это панель промо</h2>
            </aside>
        )
    }

}