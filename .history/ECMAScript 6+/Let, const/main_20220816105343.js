// 1. Let, const

// 1. Var - Let, const: scope, hoisting
// 2. Const-  var, let : Assignment
/**
    * Giống:
        - Cả 3 đều dùng để khai báo biến, gán giá trị cho nó

    * Khác: Phạm vi
        - Var:
            + Trong hay ngoài block đều call được nó
        - const:
            + Chỉ call được khi trong block được khai báo
        - let:
            +
 */

// Code block: if else, loop, {}, ...
{
    const course = 'Javascript';
}
console.log(course);