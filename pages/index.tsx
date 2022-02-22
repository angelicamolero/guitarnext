import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'


const Home: NextPage = () => {
  return (
      <Layout
      page='Home'
      >
      <h1>from home</h1>
      </Layout>
  )
}

export default Home
