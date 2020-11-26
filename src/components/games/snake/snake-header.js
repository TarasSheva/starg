import React from 'react'

const SnakeHeader = (props) => {
    return (
        <div>
            {props.snakeDots.map((dot, i) => {
                const style = {
                    left: `${dot[0]}%`,
                    top: `${dot[1]}%`
                }
                return (
                    <div className="snake_dot" key={i} style={style}></div>
                )
            })}
        </div>
    )
}

export default SnakeHeader;