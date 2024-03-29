import { Link, Outlet } from "react-router-dom";


function WebsiteLayout(){

    return(
        <>
            <header>
                
            <nav className="navbar navbar-expand-lg bg-success navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" >Trang chủ</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/product">Sản phẩm</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/contact">Liên hệ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/cart">Giỏ hàng</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>

            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                Footer
            </footer>
        </>
    )
}

export default WebsiteLayout;