import React, {Component} from 'react';

export default class GalleryHero extends Component {
  render() {

    const { page } = this.props;

    // const bkgdImg = {
    //   backgroundImage: 'url(' + image + ')',
    // }


    let HeroClassName = `GalleryHero GalleryHero--${page}`

    return (
        <div className={HeroClassName}>
        </div>
    )
  }
}

// style={bkgdImg}>