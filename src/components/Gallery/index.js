import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import ThumbnailItem from '../ThumbnailItem/index'
import './index.css'

const imagesList = [
  {
    id: uuidv4(),
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-thumbnail-img.png',
    imageAltText: 'nature mountain with pond',
    thumbnailAltText: 'nature mountain with pond thumbnail',
  },
  {
    id: uuidv4(),
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-sunset-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-sunset-thumbnail-img.png',
    imageAltText: 'nature sunset',
    thumbnailAltText: 'nature sunset thumbnail',
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-thumbnail-img.png',
    imageAltText: 'nature mountain with ocean',
    thumbnailAltText: 'nature mountain with ocean thumbnail',
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-thumbnail-img.png',
    imageAltText: 'nature mountain with forest',
    thumbnailAltText: 'nature mountain with forest thumbnail',
  },
  {
    id: uuidv4(),
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-leaves-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-leaves-thumbnail-img.png',
    imageAltText: 'nature leaves',
    thumbnailAltText: 'nature leaves thumbnail',
  },
  {
    id: uuidv4(),
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-tree-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-tree-thumbnail-img.png',
    imageAltText: 'nature tree',
    thumbnailAltText: 'nature tree thumbnail',
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-waterfall-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-waterfall-thumbnail-img.png',
    imageAltText: 'nature waterfall',
    thumbnailAltText: 'nature waterfall thumbnail',
  },
  {
    id: uuidv4(),
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-river-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-river-thumbnail-img.png',
    imageAltText: 'nature river',
    thumbnailAltText: 'nature river thumbnail',
  },
]

// Write your code here.
class Gallery extends Component {
  state = {
    alt: imagesList[0].imageAltText,
    displayedImg: imagesList[0].imageUrl,
    isActive: false,
  }

  activeThumbnail = id => {
    imagesList.map(eachImg => {
      if (id === eachImg.id) {
        this.setState({
          isActive: true,
        })
      }
      return eachImg
    })
  }

  displayThisImg = id => {
    imagesList.map(eachImg => {
      if (id === eachImg.id) {
        this.setState({
          displayedImg: eachImg.imageUrl,
          alt: eachImg.imageAltText,
          isActive: true,
        })
      }
      return eachImg
    })
  }

  render() {
    const {alt, displayedImg, isActive} = this.state

    return (
      <div className="bg-container">
        <img alt={alt} src={displayedImg} className="img-displayed" />
        <h1 className="heading">Nature Photography</h1>
        <p className="paragraph">Nature Photography by Rahul</p>
        <ul className="thumbnails-container">
          {imagesList.map(eachImg => (
            <ThumbnailItem
              thumbnailAltText={eachImg.thumbnailAltText}
              isActive={isActive}
              id={eachImg.id}
              displayThisImg={this.displayThisImg}
              src={eachImg.thumbnailUrl}
              activeThumbnail={this.activeThumbnail}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Gallery
