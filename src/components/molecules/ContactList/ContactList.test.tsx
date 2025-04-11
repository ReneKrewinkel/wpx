import { render, screen } from '@testing-library/react'
import { ContactListInterface } from './ContactList.interface'
import ContactList from './ContactList'
import { ContactListMock } from './ContactList.mock'

/// TODO: fix test based upon interface
const testID = "ContactList-" + Math.floor(Math.random()*90000) + 10000

describe("ContactList", () => {

    it("Can render ContactList", () => {
        render(<ContactList testID={ testID } { ...ContactListMock } />)
        const defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})