import Head from "next/head"
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, page, product }: any) => {

    return (
        <div>
            <Head>
                <title> Guitar LA - {page}</title>
                <meta name="description" content=" Website to buy guitars" />
            </Head>
            <Header
                product={product} />
            {children}
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    product: ''
}

export default Layout