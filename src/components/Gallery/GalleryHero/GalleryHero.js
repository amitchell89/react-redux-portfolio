import React, {Component} from 'react';

export default class GalleryHero extends Component {
  render() {

    const { page } = this.props;

    let HeroClassName = `GalleryHero GalleryHero--${page}`

    return (
        <div className={HeroClassName}>
        </div>
    )
  }
}
