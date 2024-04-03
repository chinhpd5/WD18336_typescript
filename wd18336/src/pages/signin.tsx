import { Link } from "react-router-dom"



function Signin(){
    
    return(
        <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
            <div className="border border-2 border-primary rounded p-3" style={{width: '600px'}}>
                <div className="d-flex justify-content-between m-3">
                    <Link className="text-decoration-none link-primary fs-5" to="/">Trang chủ</Link>
                    <Link className="text-decoration-none fw-semibold fs-5 btn btn-outline-primary" to="/signup">Đăng kí</Link>
                </div>
                <h2 className="text-center">Đăng nhập</h2>
                <form className="p-5" style={{height:'auto'}}>

                    <div className="mb-3">
                        <label htmlFor="Email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="Email"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="Password"/>
                    </div>
                    
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary btn-lg">Đăng nhập</button>
                    </div>
                </form>
                
            </div>
        </div>
    )
}

export default Signin