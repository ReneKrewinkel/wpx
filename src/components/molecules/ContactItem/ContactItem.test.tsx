import { render, screen } from '@testing-library/react'
import { ContactItemInterface } from './ContactItem.interface'
import ContactItem from './ContactItem'
import { ContactItemMock } from './ContactItem.mock'

/// TODO: fix test based upon interface
const testID = "ContactItem-" + Math.floor(Math.random()*90000) + 10000

describe("ContactItem", () => {

    it("Can render ContactItem", () => {
        render(<ContactItem testID={ testID } { ...ContactItemMock } />)
        const defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})