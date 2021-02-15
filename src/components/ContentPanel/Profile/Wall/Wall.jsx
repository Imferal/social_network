import React from 'react';
import s from './Wall.module.scss';

const Wall = (props) => {

    let newPostElement = React.createRef()

    let addPost = (e) => {
        e.preventDefault()
        props.addPostText()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
        // debugger
    }
    debugger
    return (
        <div className={s.wall + ' ' + s.wall_indent}>
            <h2>Wall</h2>
            <form action="#" className={s.wall__form}>
                <textarea
                    className={s.wall__newMessage}
                    onChange={onPostChange}
                    ref={newPostElement}
                    name="message"
                    id="message"
                    // placeholder='Расскажите о чём-нибудь здесь...'
                    value={props.newPostText} />

                <button className={s.wall__sentButton + ' ' + s.wall__sentButton_effect} onClick={(e) => addPost(e)}>
                    <span>Запостить</span>
                </button>
            </form>
        </div>)
}

export default Wall