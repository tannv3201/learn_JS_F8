// 1. Let, const

// 1. Var - Let, const: scope, hoisting
// 2. Const-  var, let : Assignment
/**
    * Giống:
        - Cả 3 đều dùng để khai báo biến, gán giá trị cho nó

    * Khác: 
        Phạm vi
            - Var:
                + Trong hay ngoài block đều call được nó (truy cập ngoài scope của nó)
            - const:
                + Chỉ call được khi trong block được khai báo
            - let:
                + Chỉ call được khi trong block được khai báo
        Hoisting
            - Var: Nhấc định nghĩa biến lên trên đầu nên có thể call trước khi defined một biến.
        Assignment
            - var/let: Nhận giá trị mới nhất được gán
            - const: chỉ nhận một giá trị duy nhất được gán (không được sử dụng toán tử gán lần thứ 2)

 */

// Code block: if else, loop, {}, ...
{
    const course = 'Javascript';
}
console.log(course);