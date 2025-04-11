import { render, screen } from '@testing-library/react'
import { DialPadInterface } from './DialPad.interface'
import DialPad from './DialPad'
import { DialPadMock } from './DialPad.mock'

/// TODO: fix test based upon interface
const testID = "DialPad-" + Math.floor(Math.random()*90000) + 10000

describe("DialPad", () => {

    it("Can render DialPad", () => {
        render(<DialPad testID={ testID } { ...DialPadMock } />)
        const defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})