import React, { Fragment } from 'react'

import { DocumentationLayout } from './DocumentationLayout/DocumentationLayout'

export const Home: React.FC = () => {
  return (
    <Fragment>
      <h1>Redux + TypeScript</h1>
      <DocumentationLayout />
    </Fragment>
  )
}
