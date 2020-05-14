import React, { useState } from 'react'
import { Popover } from 'antd'

import { IDocumentationItemPopover } from '../../../common/types'
import { generatePopoverOptions } from '../DocumentationCommons/DocumentationCommons'

import './DocumentationItemPopover.scss'

export const DocumentationItemPopover: React.FC<IDocumentationItemPopover> = ({
  children,
  setReference,
  insertIntoDoc,
}: IDocumentationItemPopover) => {
  const [visible, setVisible] = useState(false)
  const setGeneratedId = useState('')[1]

  const handleVisibleChange = (newVisibleState: boolean) => {
    setVisible(newVisibleState)
  }

  return (
    <Popover
      overlayClassName="documentationPopover"
      visible={visible}
      onVisibleChange={handleVisibleChange}
      trigger="click"
      content={generatePopoverOptions(
        'item',
        setGeneratedId,
        insertIntoDoc,
        setReference,
        setVisible
      )}
    >
      {children}
    </Popover>
  )
}
