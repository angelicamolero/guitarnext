
import Image from 'next/image'
import Layout from '../components/Layout'
import PLP from '../components/PLP'
import Course from '../components/Course'
import BlogList from '../components/BlogList'

const Home = (result: any) => {

  return (
    <Layout
      page='Home'
      product={result.result[2]}
    >
      <main className='contenedor'>
        <h1 className='heading'>Our Collection</h1>
        <PLP
          guitars={result} />
      </main>
      <Course
        course={result.curso} />
      <section className='contenedor'>
        <BlogList
          blogList={result.blog} />
      </section>
    </Layout>
  )
}

export async function getServerSideProps() {

  const urlGuitarras = `${process.env.API_URL}/guitars`
  const urlCursos = `${process.env.API_URL}/cursos`
  const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`

  const [resProduct, resCourses, resBlog] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
    fetch(urlBlog)
  ])

  const [result, curso, blog] = await Promise.all([
    resProduct.json(),
    resCourses.json(),
    resBlog.json()
  ])

  return {
    props: {
      result,
      curso,
      blog
    }
  }
}

export default Home
