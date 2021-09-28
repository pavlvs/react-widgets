/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react'
import Accordion from './Search'
import Search from './Search'
import Dropdown from './Dropdown'
import Translate from './Translate'

// import Accordion from './Accordion'

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework',
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers',
    },
    {
        title: 'How do you use React?',
        content: 'You use it by creating components',
    },
]

const options = [
    {
        label: 'The Color Red',
        value: 'red',
    },
    {
        label: 'The Color Green',
        value: 'green',
    },
    {
        label: 'A Shade of Blue',
        value: 'blue',
    },
]

export default () => {
    return (
        <div>
            {/* <Accordion items={items} /> */}
            {/* <Search /> */}
            <Translate />
        </div>
    )
}
