import { render, screen } from '@testing-library/react'
import { PhoneBookInterface } from './PhoneBook.interface'
import PhoneBook from './PhoneBook'
import { PhoneBookMock } from './PhoneBook.mock'

/// TODO: fix test based upon interface
const testID = "PhoneBook-" + Math.floor(Math.random()*90000) + 10000

describe("PhoneBook", () => {

    it("Can render PhoneBook", () => {
        render(<PhoneBook testID={ testID } { ...PhoneBookMock } />)
        const defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})