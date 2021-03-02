import * as React from "react";
import s from './AsidePanel.module.scss';

const AsidePanel = () => {
    return (
        <aside className={s.asidePanel__wrapper}>
            <h2 className={s.asidePanel__content}>Это панель промо</h2>
        </aside>
    )
}

export default AsidePanel