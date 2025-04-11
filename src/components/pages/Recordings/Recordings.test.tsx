import { render, screen } from '@testing-library/react'
import { RecordingsInterface } from './Recordings.interface'
import Recordings from './Recordings'
import { RecordingsMock } from './Recordings.mock'

/// TODO: fix test based upon interface
const testID = "Recordings-" + Math.floor(Math.random()*90000) + 10000

describe("Recordings", () => {

    it("Can render Recordings", () => {
        render(<Recordings testID={ testID } { ...RecordingsMock } />)
        const defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})