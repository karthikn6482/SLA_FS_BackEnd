import Item from "./Item"

export default function ItemList({ items, onDelete }) {
  return (
    <>
      {items.map(item => (
        <Item key={item} item={item} onDelete={onDelete} />
      ))}
    </>
  )
}
