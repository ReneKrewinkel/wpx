//import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import ContactItemSrc from './ContactItem'
// import { ContactItemInterface } from './ContactItem.interface'
import { ContactItemMock } from './ContactItem.mock'

/// TODO: Adapt Stories
const ContactItemMeta: Meta<typeof ContactItemSrc> = {
    title: "molecules/ContactItem",
    component: ContactItemSrc,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

type Story = StoryObj<typeof ContactItemSrc>
export const ContactItem: Story = {
    args: { ...ContactItemMock }
}

export default ContactItemMeta