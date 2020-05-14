export interface IDocumentationItemPopover extends IDocumentationLayoutPopover {
  removeItem: Function
}

export interface IDocumentationLayoutPopover {
  children: JSX.Element
  insertIntoDoc: Function
  setReference: Function
}

export interface IDocumentationItens {
  item: JSX.Element
  key: string
}
