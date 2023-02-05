import React from 'react'

const Tabs = ({hyperRef,tabTitle}) => {
    return (
        <>
            <li class="nav-item">
                <a className="nav-link" aria-current="page" href={hyperRef}>{tabTitle}</a>
            </li>
        </>
    )
}

export default Tabs