import { render, screen } from '@testing-library/react'
import { NavigationInterface } from './Navigation.interface'
import Navigation from './Navigation'
import { NavigationMock } from './Navigation.mock'

/// TODO: fix test based upon interface
const testID = "Navigation-" + Math.floor(Math.random()*90000) + 10000

describe("Navigation", () => {

    it("Can render Navigation", () => {
        render(<Navigation testID={ testID } { ...NavigationMock } />)
        const defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})