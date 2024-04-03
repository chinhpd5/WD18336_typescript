import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"

type Input ={
    name: string,
    email: string,
    password: string,
    confirmPassword: string
}

function Regiter(){

    const {
        register,
        handleSubmit,
        formState: {errors},
        watch
    }= useForm<Input>();

    function onSubmit(data: Input){

    }

    return(
        <>
        <div className=" d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
            <div className="border border-2 border-primary rounded p-3" style={{width: '600px'}}>
                <div className="d-flex justify-content-between m-3">
                    <Link className="text-decoration-none link-primary fs-5" to="/">Trang chủ</Link>
                    <Link className="text-decoration-none fw-semibold fs-5 btn btn-outline-primary" to="/signin">Đăng nhập</Link>
                </div>
                <h2 className="text-center">Đăng kí</h2>
                <form className="p-5" style={{height:'auto'}} onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">Name</label>
                        <input {...register("name",{
                            required: "Cần nhập họ và tên"
                        })} 
                            type="text" className="form-control" id="Name" />
                        {errors.name && <span style={{color: "red"}}>{errors.name.message}</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Email" className="form-label">Email</label>
                        <input {...register("email",{
                            required :"Cần nhập email",
                            pattern :{
                                value: /^\S+@\S+\.\S+$/,
                                message : "Không đúng định dạng email"
                            }
                        })} type="email" className="form-control" id="Email" />
                        {errors.email && <span style={{color: "red"}}>{errors.email.message}</span>}

                    </div>

                    <div className="mb-3">
                        <label htmlFor="Password" className="form-label">Password</label>
                        <input {...register("password",{
                            required: "Cần nhập password",
                            minLength: {
                                value: 6,
                                message : "Cần tối thiểu 6 kí tự"
                            }
                        })} type="password" className="form-control" id="Password" />
                        {errors.password && <span style={{color: "red"}}>{errors.password.message}</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="PasswordConfirm" className="form-label">Confirm Password</label>
                        <input {...register("confirmPassword",{
                            required: "Cần nhập lại mật khẩu",
                            validate: (value)=>{
                                if(value != watch('password'))
                                    return 'Không trùng mật khẩu'
                            }
                        })} type="password" className="form-control" id="PasswordConfirm" />
                        {errors.confirmPassword && <span style={{color: "red"}}>{errors.confirmPassword.message}</span>}
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