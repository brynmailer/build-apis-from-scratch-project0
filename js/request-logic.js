function getContentType (filename) {
  const extension = filename.match(/.*\.([^\.]*)$/)[1]

  // using the ternary operator
  return extension === 'html'
    ? 'text/html'
    : extension === 'css'
      ? 'text/css'
      : extension === 'jpeg'
        ? 'image/jpeg'
        : extension === 'jpg'
          ? 'image/jpeg'
          : 'text/plain'

  // using standard conditional statement form
  /*
  if (extension === 'html') {
    return 'text/html'
  } else if (extension === 'css') {
    return 'text/css'
  } else if (extension === 'jpeg') {
    return 'image/jpeg'
  } else if (extension === 'jpg') {
    return 'image/jpeg'
  } else {
    return 'text/plain'
  }
  */
}
