import Head from "next/head"
import Header from "./Header";

const Layout = ({children, page}:any) => {
    console.log(page);
    return(
        <div>
            <Head>
                <title> Guitar LA - {page}</title>
                <meta name="description" content=" Website to buy guitars"/>
            </Head>
            <Header/>
            {children}
        </div>
    )
}

export default Layout