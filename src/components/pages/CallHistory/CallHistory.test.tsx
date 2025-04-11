import { render, screen } from '@testing-library/react'
import { CallHistoryInterface } from './CallHistory.interface'
import CallHistory from './CallHistory'
import { CallHistoryMock } from './CallHistory.mock'

/// TODO: fix test based upon interface
const testID = "CallHistory-" + Math.floor(Math.random()*90000) + 10000

describe("CallHistory", () => {

    it("Can render CallHistory", () => {
        render(<CallHistory testID={ testID } { ...CallHistoryMock } />)
        const defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})