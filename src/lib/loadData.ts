import { readCSV } from 'danfojs'
import europeanCountries from '../config/european-countries'

export type PopulationData = {
  yearMin: number
  yearMax: number
  populationMin: number
  populationMax: number
  countries: {
    name: string
    data: { year: number; population: number }[]
  }[]
}

const DEBUG = false
const { log } = console

const loadData = async (fileName: string) => {
  const df = await readCSV(`${window.location.origin}/${fileName}`)

  df.rename(
    { 'Country Name': 'country', Year: 'year', Count: 'count' },
    { inplace: true },
  )

  if (DEBUG) {
    log('Auto-detected column types:')
    df.ctypes.print()
    log('DataFrame head:')
    df.head().print()
  }

  df.addColumn(
    'european',
    df
      .column('country')
      .map((name: string) => (europeanCountries.includes(name) ? true : null)),
    { inplace: true },
  )

  df.dropNa({ axis: 1, inplace: true })
  df.drop({ columns: ['european'], inplace: true })

  if (DEBUG) {
    log('DataFrame head post country name filtering:')
    df.head().print()
    log('DataFrame shape:')
    log(df.shape)
  }

  const grp = df.groupby(['country'])

  if (DEBUG) {
    log('Grouped by `country` column')
    log(grp.colDict)
  }

  const data: PopulationData = {
    yearMin: Math.min(...(df.column('year').values as number[])),
    yearMax: Math.max(...(df.column('year').values as number[])),
    populationMin: Math.min(...(df.column('count').values as number[])),
    populationMax: Math.max(...(df.column('count').values as number[])),
    countries: Object.entries(grp.colDict).map(([key, value]) => ({
      name: key,
      data: (value as { year: number[] }).year.map((year, index) => ({
        year,
        population: (value as { count: number[] }).count[index],
      })),
    })),
  }

  if (DEBUG) {
    log('Final prepared data:')
    log(data)
  }

  return data
}

export default loadData
