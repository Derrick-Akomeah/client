import Meta from './Meta'
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({children}) =>{
    return(
        <div>
            <Meta />
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
        </div>
    )
}

export default Layout