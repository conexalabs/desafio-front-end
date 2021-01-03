import React from 'react'
import { consts } from 'react-elastic-carousel'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'


export const arrowStyled = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? <RiArrowLeftSLine /> : <RiArrowRightSLine />
    return (
        <button style={ style } onClick={onClick} disabled={isEdge}>
            {pointer}
        </button>
    )
}

const style = {
    background: 'transparent',
    border: 'none',
    color: 'white',
    fontSize: '2.5rem'
}