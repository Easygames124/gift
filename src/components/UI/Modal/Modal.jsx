import React, {useState, useCallback, useEffect} from 'react';
import classes from './Modal.module.css';
import MyButton2 from "../IconButton/IconButton";
import Button from '../Button/Button';

const Modal = (props) => {
    const [rootClasses, setRootClasses] = useState([
        classes.myModal
    ]);
    const activeClass = [props.visible ? classes.active : classes.closed];
    const [contentClasses, setContentClasses] = useState([]);

    const close = () => {
        if (props.fixed) {
            setRootClasses([...rootClasses, classes.returned]);
            setTimeout(function () {
                setRootClasses([...rootClasses.splice(rootClasses.indexOf(classes.returned), 1)])
            }, 300);
        } else {
            props.setVisible(false);
        };
    };
    const closeEsc = (e) => {
        if (e.key === "Escape") {
            close();
        };
    };

    const onKeyDown = useCallback((e) => {closeEsc(e)}, []);
    useEffect(() => {
        if (props.visible) {
            setContentClasses([]);
            window.addEventListener('keydown', onKeyDown);
            document.querySelector('html').style.overflow = 'hidden';
        } else {
            setTimeout(() => {
                setContentClasses([classes.closed]);
            }, 300);
            window.removeEventListener('keydown', onKeyDown);
            document.querySelector('html').style.overflow = 'visible';
        };
        return () => {
            window.removeEventListener('keydown', onKeyDown);
        }
    }, [props.visible]);
    useEffect(() => {
        if (props.accept) {
            props.onAccept();
        };
    }, [props.accept]);
    return (
        <div
            className={rootClasses.join(' ') +` ${activeClass.join(' ')}` + `${props.theme === "light" ? "" : " " + classes.dark}`}
            onClick={close}>
            <div
                className={`${classes.content} ${contentClasses} ${props.big ? classes.big : props.small ? classes.small : classes.normal}`}
                onClick={e => e.stopPropagation()}
            >
                <div className={classes.header}>
                    <h5 style={{paddingTop: '5px'}}>{props.title}</h5>
                    {props.fixed ? ""
                        : <MyButton2 onClick={close} theme={props.theme}>close</MyButton2>}

                </div>
                <div className={classes.children}>
                    {props.children}
                </div>
                {props.footer
                    ?
                        <div className={classes.footer}>
                            <Button onClick={props.onAccept}>{props.footer}</Button>
                        </div>
                    : ""
                }
            </div>
        </div>
    );
};

export default Modal;