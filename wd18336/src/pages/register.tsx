import { Link } from "react-router-dom"



function Regiter(){

    return(
        <>
        <div className=" d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
            <div className="border border-2 border-primary rounded p-3" style={{width: '600px'}}>
                <div className="d-flex justify-content-between m-3">
                    <Link className="text-decoration-none link-primary fs-5" to="/">Trang chủ</Link>
                    <Link className="text-decoration-none fw-semibold fs-5 btn btn-outline-primary" to="/signin">Đăng nhập</Link>
                </div>
                <h2 className="text-center">Đăng kí</h2>
                <form className="p-5" style={{height:'auto'}} >
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="Name" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="Email" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="Password" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="PasswordConfirm" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="PasswordConfirm" />
                    </div>
                    
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary btn-lg">Đăng kí</button>
                    </div>
                </form>
                
            </div>
        </div>
        
        </>
    )
}

export default Regiter