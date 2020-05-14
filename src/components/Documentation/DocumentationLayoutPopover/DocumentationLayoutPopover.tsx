import React from 'react'
import { Popover } from 'antd'

import { IDocumentationLayoutPopover } from '../../../common/types'

import './DocumentationLayoutPopover.scss'
import { generatePopoverOptions } from '../shared/sharedFunctions'

export const DocumentationLayoutPopover: React.FC<IDocumentationLayoutPopover> = ({
  children,
  setReference,
  insertIntoDoc,
}: IDocumentationLayoutPopover) => {
  return (
    <Popover
      overlayClassName="layoutPopover"
      arrowPointAtCenter
      visible
      trigger="click"
      content={generatePopoverOptions('layout', insertIntoDoc, setReference)}
    >
      {children}
    </Popover>
  )
}
