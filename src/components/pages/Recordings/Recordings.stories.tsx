//import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import RecordingsSrc from './Recordings'
// import { RecordingsInterface } from './Recordings.interface'
import { RecordingsMock } from './Recordings.mock'

/// TODO: Adapt Stories
const RecordingsMeta: Meta<typeof RecordingsSrc> = {
    title: "pages/Recordings",
    component: RecordingsSrc,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

type Story = StoryObj<typeof RecordingsSrc>
export const Recordings: Story = {
    args: { ...RecordingsMock }
}

export default RecordingsMeta