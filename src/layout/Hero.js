import React from 'react';
import cn from 'classnames';

export default function Hero(props) {
    return (
        <section className={cn("hero", "is-light", "is-fullheight")}>
            <section className="hero-head">
                {props.head}
            </section>
            <section className="hero-body">
                {props.body}
            </section>
            <section className="hero-foot" >
                {props.foot}
            </section>
        </section>
    )
}