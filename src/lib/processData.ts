import { range } from 'radash'
import { AreaGraphProps } from '@/AreaGraph/types'
import { PopulationData } from './loadData'

const TEN_MILLION = 10_000_000

const toTenMillionInterval = (num: number, roundTo: 'floor' | 'ceil') =>
  Math[roundTo](num / TEN_MILLION) * TEN_MILLION

const addPerThousandCommas = (num: number) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

const processData = (
  rawData: PopulationData,
): Omit<AreaGraphProps, 'config'> => ({
  labels: {
    x: rawData.countries.map((country) => country.name),
    y: [
      ...range(
        toTenMillionInterval(rawData.populationMin, 'floor'),
        toTenMillionInterval(rawData.populationMax, 'ceil'),
        addPerThousandCommas,
        10_000_000,
      ),
    ],
    z: [...range(rawData.yearMin, rawData.yearMax, (i) => i.toString(), 5)],
  },
  data: rawData.countries.map((entry) => [
    [rawData.yearMin, rawData.populationMin],
    ...(entry.data.map(({ year, population }) => [year, population]) as Vec2[]),
    [rawData.yearMax, rawData.populationMin],
  ]),
  axesRange: {
    x: { min: rawData.yearMin, max: rawData.yearMax },
    y: { min: rawData.populationMin, max: rawData.populationMax },
  },
})

export default processData
