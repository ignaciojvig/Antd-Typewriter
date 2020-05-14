import uniqid from 'uniqid'
import React from 'react'

import {
  AlignLeftOutlined,
  AlignCenterOutlined,
  AlignRightOutlined,
  DeleteOutlined,
} from '@ant-design/icons'

export const generateContent = (
  type: string,
  insertIntoDoc: Function,
  setReference: Function,
  setVisible?: Function
) => {
  if (setVisible) {
    setVisible(false)
  }

  const uniqueId = uniqid()

  let newContent

  switch (type) {
    case 'h1':
      newContent = (
        <input
          type="text"
          ref={(el) => {
            setReference(el)
          }}
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0)',
            border: '0',
            marginTop: '0',
            marginBottom: '0.5em',
            color: 'rgba(0, 0, 0, 0.85)',
            fontWeight: 500,
            fontSize: '1.5em',
            marginBlockStart: '0.83em',
            marginBlockEnd: '0.83em',
          }}
        />
      )
      break

    case 'h3':
      newContent = (
        <input
          type="text"
          ref={(el) => {
            setReference(el)
          }}
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0)',
            border: '0',
            marginTop: '0',
            marginBottom: '0.5em',
            color: 'rgba(0, 0, 0, 0.85)',
            fontWeight: 500,
            fontSize: '1.17em',
            marginBlockStart: '0.83em',
            marginBlockEnd: '0.83em',
          }}
        />
      )
      break

    default:
      return
  }

  insertIntoDoc({
    item: newContent,
    key: uniqueId,
  })
}

export const generatePopoverOptions = (
  area: string,
  insertIntoDoc: Function,
  setReference: Function,
  setVisible?: Function
) => {
  switch (area) {
    case 'layout':
      return (
        <div>
          <span
            className="docItem"
            onClick={() => generateContent('h1', insertIntoDoc, setReference)}
          >
            H<sub>1</sub>
          </span>

          <span
            className="docItem"
            onClick={() => generateContent('h3', insertIntoDoc, setReference)}
          >
            H<sub>3</sub>
          </span>
        </div>
      )
    case 'item':
      return (
        <div>
          <span
            className="docItem"
            onClick={() =>
              generateContent('h1', insertIntoDoc, setReference, setVisible)
            }
          >
            H<sub>1</sub>
          </span>

          <span
            className="docItem"
            onClick={() =>
              generateContent('h3', insertIntoDoc, setReference, setVisible)
            }
          >
            H<sub>3</sub>
          </span>

          <AlignLeftOutlined className="docItem" />

          <AlignCenterOutlined className="docItem" />

          <AlignRightOutlined className="docItem" />

          <DeleteOutlined className="docItem" />
        </div>
      )
    default:
      break
  }
}
