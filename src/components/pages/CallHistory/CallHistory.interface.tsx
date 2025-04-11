import React from 'react'

/// TODO: Adapt interface
export interface CallHistoryInterface {
    props?: any,  /// refactor to appropriate (destructured) props
    style?: React.CSSProperties | any,
    type?: string,
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl',
    testID?: string,
}
