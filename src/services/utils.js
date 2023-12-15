export const humanDate = date => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  return new Date(date).toLocaleDateString('en-US', options)
}
