//import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import NavigationSrc from './Navigation'
// import { NavigationInterface } from './Navigation.interface'
import { NavigationMock } from './Navigation.mock'

/// TODO: Adapt Stories
const NavigationMeta: Meta<typeof NavigationSrc> = {
    title: "templates/Navigation",
    component: NavigationSrc,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

type Story = StoryObj<typeof NavigationSrc>
export const Navigation: Story = {
    args: { ...NavigationMock }
}

export default NavigationMeta