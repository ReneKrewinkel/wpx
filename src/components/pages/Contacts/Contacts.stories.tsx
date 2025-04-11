//import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import ContactsSrc from './Contacts'
// import { ContactsInterface } from './Contacts.interface'
import { ContactsMock } from './Contacts.mock'

/// TODO: Adapt Stories
const ContactsMeta: Meta<typeof ContactsSrc> = {
    title: "pages/Contacts",
    component: ContactsSrc,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

type Story = StoryObj<typeof ContactsSrc>
export const Contacts: Story = {
    args: { ...ContactsMock }
}

export default ContactsMeta