import React, { useState } from 'react'
import { Popover } from 'antd'

import { IDocumentationLayoutPopover } from '../../../common/types'

import './DocumentationLayoutPopover.scss'
import { generatePopoverOptions } from '../DocumentationCommons/DocumentationCommons'

export const DocumentationLayoutPopover: React.FC<IDocumentationLayoutPopover> = ({
  children,
  setReference,
  insertIntoDoc,
}: IDocumentationLayoutPopover) => {
  const setGeneratedId = useState('')[1]

  return (
    <Popover
      overlayClassName="layoutPopover"
      arrowPointAtCenter
      visible
      trigger="click"
      content={generatePopoverOptions(
        'layout',
        setGeneratedId,
        insertIntoDoc,
        setReference
      )}
    >
      {children}
    </Popover>
  )
}
