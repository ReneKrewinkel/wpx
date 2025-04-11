//import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import DialListSrc from './DialList'
// import { DialListInterface } from './DialList.interface'
import { DialListMock } from './DialList.mock'

/// TODO: Adapt Stories
const DialListMeta: Meta<typeof DialListSrc> = {
    title: "molecules/DialList",
    component: DialListSrc,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

type Story = StoryObj<typeof DialListSrc>
export const DialList: Story = {
    args: { ...DialListMock }
}

export default DialListMeta