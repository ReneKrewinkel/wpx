import { render, screen } from '@testing-library/react'
import { SearchBarInterface } from './SearchBar.interface'
import SearchBar from './SearchBar'
import { SearchBarMock } from './SearchBar.mock'

/// TODO: fix test based upon interface
const testID = "SearchBar-" + Math.floor(Math.random()*90000) + 10000

describe("SearchBar", () => {

    it("Can render SearchBar", () => {
        render(<SearchBar testID={ testID } { ...SearchBarMock } />)
        const defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})