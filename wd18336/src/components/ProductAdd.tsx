import { SubmitHandler, useForm } from "react-hook-form";
import IProduct from "../interfaces/IProduct";
import { useNavigate } from "react-router-dom";
// kiểu dữ liệu của prop
type PropAdd={
    onAdd: (data: IProduct)=>void
}
// khai báo các type của form 
type Input ={
    name: string,
    price: number
}

function ProductAdd(prop: PropAdd){
    const navigate = useNavigate();

    const {
        register,// gán key dữ liệu cho form
        handleSubmit, // xử lý dữ liệu khi submit form
    } = useForm<Input>();

    // hàm submit(arrow function) được gọi khi submit form
    const submit: SubmitHandler<Input> = (data: IProduct) => {
        // data nhận là dữ liệu người dùng nhập vào form
        // onAdd để trả data về app.tsx
        prop.onAdd(data);
        // useNavigate để link trang về danh sách sản phẩm
        navigate('/product')
    }

    return(
        <>
            <form onSubmit={handleSubmit(submit)}>
                <label htmlFor="">Tên sản phẩm</label>
                <input type="text" {...register("name")} />

                <label htmlFor="">Giá</label>
                <input type="number" {...register("price")}/>
                
                <button type="submit">Gửi</button>

            </form>
        </>
    )
}

export default ProductAdd;