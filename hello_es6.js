<!DOCTYPE html>
<html>
<body>

<h2>ES6 Destructuring & 역따옴표 사용연습</h2>

<p id="demo"></p>

<script>

const today = new Date(); // Tue May 21 2019 22:19:42 GMT+0900 (한국 표준시)
const formattedDate = today.toISOString().substring(0, 10); // "2019-05-21"
const [year, month, day] = formattedDate.split('-');
  
document.getElementById("demo").innerHTML = `${year}/${month}/${day}`;

</script>

</body>
</html>
