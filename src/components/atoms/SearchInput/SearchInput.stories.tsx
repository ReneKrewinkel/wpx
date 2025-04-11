//import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import SearchInputSrc from './SearchInput'
// import { SearchInputInterface } from './SearchInput.interface'
import { SearchInputMock } from './SearchInput.mock'

/// TODO: Adapt Stories
const SearchInputMeta: Meta<typeof SearchInputSrc> = {
    title: "atoms/SearchInput",
    component: SearchInputSrc,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

type Story = StoryObj<typeof SearchInputSrc>
export const SearchInput: Story = {
    args: { ...SearchInputMock }
}

export default SearchInputMeta