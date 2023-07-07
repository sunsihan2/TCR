import React from 'react'

export const VisibilityWrapper = (Wrapped) => {
  return ({visible, ...props}) => {
    if(!visible){
        return null
    }
    return <Wrapped {...props} />
  }
}
