import React from 'react';
import './media.css'

export default function Media({ source, height, width }) {

    return (
        <div>
            <img src={source} height={!height ? '' : height} width={!width ? '' : width} alt="" />
        </div>
    )
}
