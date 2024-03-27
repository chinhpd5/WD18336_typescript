import { useForm } from "react-hook-form";
import IProduct from "../../interfaces/IProduct";
import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext, UPDATE_PRODUCT } from "../../context/ProductProvider";

type PropEdit ={
    // onEdit: (id: string, data: IProduct) => void
}
// khai báo các type của form 
type Input ={
    name: string,
    price: number
}


function ProductEdit(props: PropEdit){
    const {dispatchProduct} = useContext(ProductContext)
    const {id} = useParams();
    const navigate = useNavigate();
    const {
        register,// gán key dữ liệu cho form
        handleSubmit, // xử lý dữ liệu khi submit form
        reset // gán giá trị cho register
    } = useForm<Input>();

    useEffect(()=>{
        fetch(`http://localhost:3000/product/${id}`)
            .then(data=>{
                return data.json();
            })
            .then(data=>{
                reset(data)
            })
    },[])

    function handleUpdate(id: string, data: IProduct){
        fetch(`http://localhost:3000/product/${id}`,{
          method: "PUT",
          headers: {
            "Content-Type" : "Application/json"
          },
          body: JSON.stringify(data)
        })
        .then(data=>{
          return data.json();
        })
        .then(data=>{
          dispatchProduct({type: UPDATE_PRODUCT, payload: data})
        })
        .catch(()=>{
          console.log("lỗi khi sửa dữ liệu");
          
        })
      }

    const submit = (data: Input) => {
        // props.onEdit(id!, data);
        handleUpdate(id!,data)
        navigate('/product');
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

export default ProductEdit;