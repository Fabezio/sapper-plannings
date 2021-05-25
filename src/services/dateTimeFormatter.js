const litteralOptions = {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric'
}
const numericOptions = {
  // weekday: 'short',
  day: 'numeric',
  month: 'numeric',
  year: 'numeric'
}

export const numericFormatter = Intl.DateTimeFormat('fr', numericOptions)
export const litteralFormatter = Intl.DateTimeFormat('fr', litteralOptions)
