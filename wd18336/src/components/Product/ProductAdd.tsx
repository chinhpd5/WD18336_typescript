import { SubmitHandler, useForm } from "react-hook-form";
import IProduct from "../../interfaces/IProduct";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ADD_PRODUCT, ProductContext } from "../../context/ProductProvider";
// kiểu dữ liệu của prop
type PropAdd={
    // onAdd: (data: IProduct)=>void
}
// khai báo các type của form 
type Input ={
    name: string,
    price: number
}

function ProductAdd(prop: PropAdd){
    const navigate = useNavigate();
    const {dispatchProduct} = useContext(ProductContext)

    const {
        register,// gán key dữ liệu cho form
        handleSubmit, // xử lý dữ liệu khi submit form
    } = useForm<Input>();

    function handleAdd(data: IProduct){
        // data là dữ liệu nhận được khi form submit gửi từ ProductAdd
        fetch(`http://localhost:3000/product/`,{
          method: 'POST', 
          headers:{
            'Content-Type':'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(res=>{
          // res là dữ liệu sản phẩm nhận lại sau khi thêm thành công (có id của sản phẩm)
          return res.json();
        })
        .then((newData)=>{
          // thêm product mới vào cuối mảng
          // setProduct([...product,newData])
          dispatchProduct({type: ADD_PRODUCT,payload: newData})
        })
        .catch(()=>{
          console.log("có lỗi");
          
        })
        
    }

    // hàm submit(arrow function) được gọi khi submit form
    const submit: SubmitHandler<Input> = (data: IProduct) => {
        // data nhận là dữ liệu người dùng nhập vào form
        // onAdd để trả data về app.tsx
        // prop.onAdd(data);
        handleAdd(data)

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