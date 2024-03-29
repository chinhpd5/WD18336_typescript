﻿# WD18336_typescript
## Hướng dẫn chạy project
- Mở 1 cmd chạy project : `npm run dev`
- Mở thêm 1 cmd chạy json-server: `npx json-server --watch db.json` 

## Cài đặt typescript `npm i typescript --save`

## Tạo project sử dụng vite
Document Vite: https://vitejs.dev/

- `npm create vite@latest`
- Làm theo hướng dẫn 
    + Tên project
    + React
    + Type script
- cd vào project
- Cài đặt thư viện: `npm i`
- `npm run dev`

# c2 
- `npm create vite@latest ten-project -- --template react-ts`


## useState
- Dùng để thay đổi trạng thái trong 1 function component
- setState là thay thế state bằng giá trị mới
- Component sẽ được render khi setState
- Chỉ khởi tạo được lần đầu tiên
- setState có thể truyền callback
- Khởi tạo có thể truyền callback nhưng phải có giá trị return

## useEffect
1. useEffect(callback)
- Gọi callback sau khi khi component render vào DOM
- Gọi callback mỗi khi khi component re-render
2. useEffect(callback,[])
- Chỉ gọi một lần sau khi component render vào DOM
3.useEffect(callback,[deps])
- Callback được gọi lại khi deps thay đổi
----
- Callback luôn được gọi sau khi component render

## cài đặt json-server
- npm i json-server -g
- tạo 1 file db.json bên ngoài src
- Chạy json-server --watch db.json

## Router
- `npm i react-router-dom`

## useForm 
- Cài đặt `npm i react-hook-form`
- Sử dụng :
+ `const {register, handleSubmit, formState: { errors },[reset]} = useForm()`
- Validate: `formState: { errors }` 
+ `{ required: true}` hoặc `{ required: "message"}`
+ min/maxLength (String):
    ```
    minLength : {
        value: number,
        message: "mesage"
    }
    ```
+ min/max (Number):
    ```
    min : {
        value: number,
        message: "mesage"
    }
    ```
+ patern:
    ```
    pattern: {
        value: /^\S+@\S+\.\S+$/,
        message: "This input is not email.",
    },
    ```
    or
    ```
    pattern: {
        value: /^\d+$/,
        message: "This input is number only.",
    },
    ```


## useNavigate
- Khởi tạo: `const navigate = useNavigate();`
- Sử dụng: `navigate("url");`

## useParams
- Sử dụng `const { id } = useParams();`




