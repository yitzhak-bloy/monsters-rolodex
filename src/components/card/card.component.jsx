import React from 'react';

import './cars.styles.css';

export const Card = (props) => (
    <div className={'card-container'}>
        <img alt='monster' src={`https://robohash.org/${props.monster.id}4?set=set2&size=180*180`} />
        <h1> {props.monster.name} </h1>
        <p> {props.monster.email} </p>
    </div>
)