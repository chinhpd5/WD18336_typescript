import { Link } from "react-router-dom";
import IUser from "../../interfaces/IUser";

type PropList ={
    data: IUser[],
    onDelete: (id: string)=> void
}

function UserList({data,onDelete}: PropList){
    return (
        <table className="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Họ và tên</th>
                <th scope="col">Tuổi</th>
                <th scope="col">Giới tính</th>
                <th scope="col">Email</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map(user=>{
                        return(
                            <tr key={user.id}>
                                <th scope="row">{user.id}</th>
                                <td>{user.fisrtName} {user.lastName}</td>
                                <td>{user.age}</td>
                                <td>{user.gender}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link className="btn btn-warning" to={`/user/edit/${user.id}`}>Sửa</Link>
                                    <button className="btn btn-danger" onClick={()=>{onDelete(user.id!)}}>Xóa</button>
                                </td>
                            </tr>
                        )
                    })
                }

            </tbody>
        </table>
    )
}

export default UserList;