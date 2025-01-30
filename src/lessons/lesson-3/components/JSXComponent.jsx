import React from 'react'

const JSXComponent = ({isJsx}) => {

    const element = React.createElement("h1", { className: "header" }, "Jsx Yok");

    return (
        <>
            {
                isJsx ? (
                    <div> Jsx var </div>
                ) : (
                    element
                )
            }
        </>
    )
}

export default JSXComponent