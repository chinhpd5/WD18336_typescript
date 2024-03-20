import { useForm } from "react-hook-form";

type PropAdd={}
type Input={
    fisrtName: string,
    lastName: string,
    age: number,
    email: string,
    gender: string
}

function UserAdd(prop: PropAdd){

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Input>()

    console.log(errors);

    const onSubmit =(data: Input) => {

    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* first name */}
            <div className="mb-3">
                <label  className="form-label">First name</label>
                <input 
                    type="text" 
                    className="form-control" 
                    {...register(
                        "fisrtName", 
                        {
                            required:"cần nhập first name",
                            minLength:{
                                value: 5,
                                message: "Cần nhập tối thiểu 5 kí tự"
                            }
                        })} />
                {errors.fisrtName && <div style={{color: "red"}}>{errors.fisrtName?.message}</div>} 
            </div>
            {/* last Name */}
            <div className="mb-3">
                <label  className="form-label">Last Name</label>
                <input 
                    type="text" 
                    className="form-control"
                    {...register("lastName",{
                        required: "Không được để trống",
                        maxLength: {
                            value: 20,
                            message: "Tối đa 20 kí tự"
                        }
                    })} />
                {errors.lastName && <div style={{color: "red"}}>{errors.lastName?.message}</div>}
            </div>
            {/* age */}
            <div className="mb-3">
                <label  className="form-label">Age</label>
                <input type="text" className="form-control" 
                    {...register("age",{
                        min:{
                            value: 1,
                            message: "Ít nhất là 1 tuổi"
                        },
                        max:{
                            value: 100,
                            message: "nhiều nhất 100"
                        },
                        pattern: {
                            value: /^\d+$/,
                            message: "chỉ được nhập số",
                        },
                    })} />
            {errors.age && <div style={{color: "red"}}>{errors.age?.message}</div>}

            </div>
            {/* giới tính */}
            <div className="mb-3">
                <label  className="form-label">Gender</label>
                <input type="text" className="form-control" />
            </div>
            {/* email */}
            <div className="mb-3">
                <label  className="form-label">Email</label>
                <input type="text" className="form-control" 
                    {...register("email",{
                        pattern: {
                            value: /^\S+@\S+\.\S+$/,
                            message: "sai định dạng email",
                        },
                    })}
                />
                {errors.email && <div style={{color: "red"}}>{errors.email?.message}</div>}

            </div>
          
           
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default UserAdd;