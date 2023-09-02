function DuckListCard({ duck, handleDisplay }) {
  return (
    <img onClick={() => handleDisplay(duck)} src={duck.img_url} alt={duck.name} />
  )
}

export default DuckListCard

