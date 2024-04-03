import { Link, Outlet } from "react-router-dom";


function WebsiteLayout(){
    return(
        <>
            <header>
                
            <nav className="navbar navbar-expand-lg bg-success navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" >Trang chủ</Link>
                    <div className="navbar-collapse d-flex justify-content-between" id="navbarNav">
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

                        <ul className="navbar-nav me-3">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Đăng kí</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Đăng nhập</Link>
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