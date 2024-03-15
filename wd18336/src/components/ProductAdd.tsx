import { SubmitHandler, useForm } from "react-hook-form";
import IProduct from "../interfaces/IProduct";
import { useNavigate } from "react-router-dom";

type PropAdd={
    onAdd: (data: IProduct)=>void
}
type Input ={
    name: string,
    price: number
}

function ProductAdd(prop: PropAdd){
    const navigate = useNavigate();

    const {
        register,
        handleSubmit
    } = useForm<Input>();

    const submit: SubmitHandler<Input> = (data: IProduct) => {
        prop.onAdd(data);
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