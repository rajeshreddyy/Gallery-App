// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {thumbnailAltText, isActive, id, displayThisImg, src} = props
  console.log(props)
  const activeThumbnailClass = isActive ? 'active' : ''
  const onClickImg = () => {
    displayThisImg(id)
  }

  return (
    <li>
      <button type="button" onClick={onClickImg} id={id} className="button ">
        <img
          alt={thumbnailAltText}
          src={src}
          className={`thumbnail-img ${activeThumbnailClass}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
