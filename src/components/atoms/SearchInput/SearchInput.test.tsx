import { render, screen } from '@testing-library/react'
import { SearchInputInterface } from './SearchInput.interface'
import SearchInput from './SearchInput'
import { SearchInputMock } from './SearchInput.mock'

/// TODO: fix test based upon interface
const testID = "SearchInput-" + Math.floor(Math.random()*90000) + 10000

describe("SearchInput", () => {

    it("Can render SearchInput", () => {
        render(<SearchInput testID={ testID } { ...SearchInputMock } />)
        const defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})