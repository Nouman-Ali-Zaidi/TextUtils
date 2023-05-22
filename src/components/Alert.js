import React from 'react'

const Alert = (props) => {
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" >
            <b>{props.alert.type}</b>: {props.alert.msg}
        </div >

    )
}

export default Alert
