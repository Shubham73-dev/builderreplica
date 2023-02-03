import React from 'react'

const Tabs = ({hyperRef,tabTitle,isActive}) => {
    const tabClass = `nav-link ${isActive}`
    return (
        <>
            <li class="nav-item">
                <a className={tabClass} aria-current="page" href={hyperRef}>{tabTitle}</a>
            </li>
        </>
    )
}

export default Tabs