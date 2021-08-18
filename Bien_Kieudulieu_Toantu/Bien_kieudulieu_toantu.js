//Bài 1
let vatly;

let hoahoc;
let sinhhoc;
  vatly = prompt("Điểm Vật Lý");
  hoahoc = prompt('Hóa Học');
  sinhhoc = prompt('Sinh Học');


  vatly = parseFloat(vatly);
  hoahoc = parseFloat(hoahoc);
  sinhhoc = parseFloat(sinhhoc);
let sum = vatly + hoahoc + sinhhoc;
let TB = sum/3;
document.write("Điểm Tổng : " + sum+"điểm");
document.write("<br>");
document.write("Điểm Trung Bình : " + TB +"điểm");
document.write("<br>");
document.write("<br>");



//Bài 2
let DoC;
DoC = prompt("Nhập nhiệt độ(độ C)");
DoC = parseFloat(DoC);
let DoF=(9 * DoC)/5 + 32;
document.write("Độ F:" + DoF);
document.write("<br>");
document.write("<br>");

//Bài 3
let r;
r = prompt("Nhập bán kính hình tròn");
r = parseFloat(r);
let Dientich= (r**2) *3.14;
document.write("Diện tích hình tròn :" + Dientich);
document.write("<br>");
document.write("<br>");


//Bài 4
let Chuvi=(2 * r) * 3.14;
document.write("Chu vi hình tròn :" + Chuvi);



