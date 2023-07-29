import Layout from '@/Layout'
import { useEffect, useState } from 'react'
import loadData from './lib/loadData'
import AreaGraph from '@/AreaGraph'
import type { GraphData } from '@/AreaGraph/types'

const App = () => {
  const [data, setData] = useState<GraphData | null>(null)

  useEffect(() => {
    const load = async () => {
      const data = await loadData('populations.csv')
      setData(data)
    }

    void load()
  }, [])

  return (
    <Layout>{data !== null ? <AreaGraph data={data} /> : 'Loading...'}</Layout>
  )
}

export default App
