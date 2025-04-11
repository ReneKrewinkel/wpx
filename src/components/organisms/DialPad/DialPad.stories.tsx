//import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import DialPadSrc from './DialPad'
// import { DialPadInterface } from './DialPad.interface'
import { DialPadMock } from './DialPad.mock'

/// TODO: Adapt Stories
const DialPadMeta: Meta<typeof DialPadSrc> = {
    title: "organisms/DialPad",
    component: DialPadSrc,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

type Story = StoryObj<typeof DialPadSrc>
export const DialPad: Story = {
    args: { ...DialPadMock }
}

export default DialPadMeta