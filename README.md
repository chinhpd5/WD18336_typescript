# WD18336_typescript

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
