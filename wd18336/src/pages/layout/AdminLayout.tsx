import { Outlet } from "react-router-dom";


function AdminLayout(){

    return(
        <>
            <header>
                Header Admin
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                Footer admin
            </footer>
        </>
    )
}

export default AdminLayout;