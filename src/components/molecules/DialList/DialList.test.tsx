import { render, screen } from '@testing-library/react'
import { DialListInterface } from './DialList.interface'
import DialList from './DialList'
import { DialListMock } from './DialList.mock'

/// TODO: fix test based upon interface
const testID = "DialList-" + Math.floor(Math.random()*90000) + 10000

describe("DialList", () => {

    it("Can render DialList", () => {
        render(<DialList testID={ testID } { ...DialListMock } />)
        const defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})