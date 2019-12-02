

function createImage(name) {
    if (name.match(/\.jpeg$/)) {
        return new JpegImage(name)
    } if (name.match(/\.gif$/)) {
        return new GifImage(name)
    } if (name.match(/\.png$/)) {
        return new PngImage(name)
    }
    throw new Exception('Unsupported format')
}

