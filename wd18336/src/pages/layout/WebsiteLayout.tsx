import { useState } from "react";
import { Link, Outlet } from "react-router-dom";


function WebsiteLayout(){

    const [user,setUser]= useState(sessionStorage.getItem('user'));

    function Logout(){
        localStorage.removeItem('token');
        sessionStorage.removeItem('user');
        setUser('');
    }

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
                            {
                                user ?
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/">xin chào {user}</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link onClick={Logout} className="nav-link active" aria-current="page" to="/">Đăng xuất</Link>
                                    </li>
                                </>
                                :
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/signup">Đăng kí</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/signin">Đăng nhập</Link>
                                    </li>
                                </>
                            }
                            
                           
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