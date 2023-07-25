import Layout from '@/Layout'
import { useEffect, useState } from 'react'
import loadData, { GraphData } from './lib/loadData'

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
    <Layout className={['text-center', 'justify-center']}>
      {data ? 'Loaded' : 'Loading...'}
    </Layout>
  )
}

export default App
