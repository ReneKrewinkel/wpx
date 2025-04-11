import React from 'react'

export interface SearchInputInterface {
    handler?: (value: string) => void,
    value?: string,
    testID?: string,
}
