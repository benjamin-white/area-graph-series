type Typeface = {
  familyName: string
  weights: string[]
}

export type Fonts = Typeface[]

const Inter: Typeface = {
  familyName: 'Inter',
  weights: ['300', '400', '600'],
}

const fonts: Fonts = [Inter]

export default fonts
