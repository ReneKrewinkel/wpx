//import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import QueueSrc from './Queue'
// import { QueueInterface } from './Queue.interface'
import { QueueMock } from './Queue.mock'

/// TODO: Adapt Stories
const QueueMeta: Meta<typeof QueueSrc> = {
    title: "pages/Queue",
    component: QueueSrc,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

type Story = StoryObj<typeof QueueSrc>
export const Queue: Story = {
    args: { ...QueueMock }
}

export default QueueMeta