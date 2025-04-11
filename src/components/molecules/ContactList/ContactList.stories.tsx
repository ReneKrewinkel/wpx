//import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import ContactListSrc from './ContactList'
// import { ContactListInterface } from './ContactList.interface'
import { ContactListMock } from './ContactList.mock'

/// TODO: Adapt Stories
const ContactListMeta: Meta<typeof ContactListSrc> = {
    title: "molecules/ContactList",
    component: ContactListSrc,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

type Story = StoryObj<typeof ContactListSrc>
export const ContactList: Story = {
    args: { ...ContactListMock }
}

export default ContactListMeta