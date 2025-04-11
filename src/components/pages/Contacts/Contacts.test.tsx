import { render, screen } from '@testing-library/react'
import { ContactsInterface } from './Contacts.interface'
import Contacts from './Contacts'
import { ContactsMock } from './Contacts.mock'

/// TODO: fix test based upon interface
const testID = "Contacts-" + Math.floor(Math.random()*90000) + 10000

describe("Contacts", () => {

    it("Can render Contacts", () => {
        render(<Contacts testID={ testID } { ...ContactsMock } />)
        const defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})