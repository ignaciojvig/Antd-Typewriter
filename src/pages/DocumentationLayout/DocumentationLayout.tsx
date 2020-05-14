import React, { useState, MutableRefObject, useEffect, useRef } from 'react'
import { Col, Row } from 'antd'

import { IDocumentationItens } from '../../common/types'
import { DocumentationItemPopover } from '../../components/Documentation/DocumentationItemPopover/DocumentationItemPopover'
import { DocumentationLayoutPopover } from '../../components/Documentation/DocumentationLayoutPopover/DocumentationLayoutPopover'

export const DocumentationLayout = () => {
  const [content, setContent] = useState<IDocumentationItens[]>([])
  const refList = useRef<any>([])

  const insertContent = (generatedContent: IDocumentationItens) => {
    const contentCopy = [...content]
    contentCopy.push(generatedContent)

    setContent(contentCopy)
  }

  const appendRef = (element: MutableRefObject<any>) => {
    refList.current[content.length] = element
  }

  useEffect(() => {
    refList.current[content.length - 1]?.focus()
  }, [refList, content.length])

  const removeItem = (key: string) => {
    let contentCopy = [...content]
    contentCopy = contentCopy.filter((x) => x.key !== key)
    setContent(contentCopy)
  }

  const renderContent = () => {
    return content.map((x) => (
      <Row key={x.key}>
        <Col>
          <DocumentationItemPopover
            setReference={appendRef}
            removeItem={removeItem}
            insertIntoDoc={insertContent}
          >
            {x.item}
          </DocumentationItemPopover>
        </Col>
      </Row>
    ))
  }

  return (
    <DocumentationLayoutPopover
      setReference={appendRef}
      insertIntoDoc={insertContent}
    >
      <div
        style={{
          width: '100vw',
          height: '80vh',
          marginTop: '1em',
          paddingLeft: '1em',
          paddingRight: '1em',
        }}
      >
        {renderContent()}
      </div>
    </DocumentationLayoutPopover>
  )
}
