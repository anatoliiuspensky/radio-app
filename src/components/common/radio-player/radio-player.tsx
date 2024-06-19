import React from 'react';
import styles from './radio-player.module.css';

export type RadioPlayerProps = React.PropsWithChildren<React.ComponentPropsWithRef<'audio'>>;

export function RadioPlayer(props: RadioPlayerProps) {
    const autoPlay = props.autoPlay ?? true;
    return (<audio src={props.src} autoPlay={autoPlay} controls={true}/>);
}
