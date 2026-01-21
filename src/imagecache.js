const cache = new Set()

export function cacheImages(srcArray) {
  srcArray.forEach(src => {
    if (!cache.has(src)) {
      const img = new Image()
      img.src = src
      cache.add(src)
    }
  })
}
