import { render, screen } from '@testing-library/react'
import { QueueInterface } from './Queue.interface'
import Queue from './Queue'
import { QueueMock } from './Queue.mock'

/// TODO: fix test based upon interface
const testID = "Queue-" + Math.floor(Math.random()*90000) + 10000

describe("Queue", () => {

    it("Can render Queue", () => {
        render(<Queue testID={ testID } { ...QueueMock } />)
        const defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})