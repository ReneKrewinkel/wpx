//import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import PhoneBookSrc from './PhoneBook'
// import { PhoneBookInterface } from './PhoneBook.interface'
import { PhoneBookMock } from './PhoneBook.mock'

/// TODO: Adapt Stories
const PhoneBookMeta: Meta<typeof PhoneBookSrc> = {
    title: "organisms/PhoneBook",
    component: PhoneBookSrc,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

type Story = StoryObj<typeof PhoneBookSrc>
export const PhoneBook: Story = {
    args: { ...PhoneBookMock }
}

export default PhoneBookMeta