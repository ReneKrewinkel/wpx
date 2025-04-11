//import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import CallHistorySrc from './CallHistory'
// import { CallHistoryInterface } from './CallHistory.interface'
import { CallHistoryMock } from './CallHistory.mock'

/// TODO: Adapt Stories
const CallHistoryMeta: Meta<typeof CallHistorySrc> = {
    title: "pages/CallHistory",
    component: CallHistorySrc,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

type Story = StoryObj<typeof CallHistorySrc>
export const CallHistory: Story = {
    args: { ...CallHistoryMock }
}

export default CallHistoryMeta