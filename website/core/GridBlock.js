const React = require('react');
const CoreGridBlock = require('docusaurus/lib/core/GridBlock');
const classNames = require('classNames');

class GridBlock extends CoreGridBlock {
  renderBlock(origBlock) {
    const blockDefaults = {
      imageAlign: 'left',
    };

    const block = {
      ...blockDefaults,
      ...origBlock,
    };

    const blockClasses = classNames('blockElement', this.props.className, {
      alignCenter: this.props.align === 'center',
      alignRight: this.props.align === 'right',
      fourByGridBlock: this.props.layout === 'fourColumn',
      imageAlignSide:
        block.image &&
        (block.imageAlign === 'left' || block.imageAlign === 'right'),
      imageAlignTop: block.image && block.imageAlign === 'top',
      imageAlignRight: block.image && block.imageAlign === 'right',
      imageAlignBottom: block.image && block.imageAlign === 'bottom',
      imageAlignLeft: block.image && block.imageAlign === 'left',
      threeByGridBlock: this.props.layout === 'threeColumn',
      twoByGridBlock: this.props.layout === 'twoColumn',
    });

    const topLeftImage =
      (block.imageAlign === 'top' || block.imageAlign === 'left') &&
      this.renderBlockImage(block.image, block.imageLink, block.imageAlt);

    const bottomRightImage =
      (block.imageAlign === 'bottom' || block.imageAlign === 'right') &&
      this.renderBlockImage(block.image, block.imageLink, block.imageAlt);

    return (
      <div className={blockClasses} key={block.title}>
        {topLeftImage}
        <div className="blockContent">
          {block.title}
          {block.content}
        </div>
        {bottomRightImage}
      </div>
    );
  }

  renderBlockImage(image, imageLink, ...other) {
    console.log(image);
    if (typeof image === 'string')
      return CoreGridBlock.prototype.renderBlockImage.call(
        this,
        image,
        imageLink,
        ...other
      );
    if (!image) {
      return null;
    }

    return (
      <div className="blockImage">
        {imageLink ? <a href={imageLink}>{image}</a> : image}
      </div>
    );
  }
}

module.exports = GridBlock;
