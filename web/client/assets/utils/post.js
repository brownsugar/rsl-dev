const postUtils = {
  getFeaturedImage: (embedded, max = false) => {
    if (embedded && embedded['wp:featuredmedia']) {
      const media = embedded['wp:featuredmedia'][0]
      if (media) {
        const sizes = media.media_details.sizes
        const image = sizes.large && !max ? sizes.large : sizes.full
        if (image) {
          return image.source_url
        }
      }
    }
    return false
  }
}

export default postUtils
