//import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import SearchBarSrc from './SearchBar'
// import { SearchBarInterface } from './SearchBar.interface'
import { SearchBarMock } from './SearchBar.mock'

/// TODO: Adapt Stories
const SearchBarMeta: Meta<typeof SearchBarSrc> = {
    title: "molecules/SearchBar",
    component: SearchBarSrc,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

type Story = StoryObj<typeof SearchBarSrc>
export const SearchBar: Story = {
    args: { ...SearchBarMock }
}

export default SearchBarMeta