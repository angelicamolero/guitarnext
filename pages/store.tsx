import Layout from '../components/Layout'
import PLP from '../components/PLP';

const Store = (result: any) => {

    return (
        <Layout page="store">
            <main className='contenedor'>
                <h1 className='heading'> Our Collection</h1>
                <PLP
                    guitars={result} />
            </main>
        </Layout>
    )
}

export async function getServerSideProps() {
    const url = `${process.env.API_URL}/guitars`
    const response = await fetch(url)
    const result = await response.json()

    return {
        props: {
            result
        }
    }
}

export default Store