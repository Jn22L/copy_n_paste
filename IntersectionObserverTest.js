<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .circle {
        margin: 0 auto;
        width: 100px;
        height: 100px;
        border: 15px solid rgb(163, 151, 198);
        border-radius: 50%;
      }
      .wrapper {
        margin: 0 auto;
        padding: 30px;
        max-width: 1170px;
      }
      div {
        height: 200px;
        width: 200px;
        border-radius: 10%;
        background-color: bisque;
        border: 2.5px solid tomato;
        transition: all 0.5s ease-in-out;
        transform: scale(1.5);
        opacity: 0;
      }
      .visible {
        transform: scale(1);
        opacity: 1;
      }
    </style>
  </head>
  <body>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
    <div class="circle"></div>
    <script>
      // 예제1 : 원이 반이상 나타날때, log 출력
      const circle = document.querySelector(".circle");
      const observer = new IntersectionObserver(
        (items) => {
          items.forEach((item) => {
            if (item.isIntersecting) {
              console.log(item.target, "is visible!");
            }
          });
        },
        {
          threshold: 0.5,
        }
      );
      observer.observe(circle);

      // 예제2 : 스크롤시 화면에 보이는 div 표시
      const squares = document.querySelectorAll("div");
      const observer2 = new IntersectionObserver(
        (squares) => {
          squares.forEach((square) => {
            if (square.isIntersecting) {
              square.target.classList.add("visible");
            } else {
              square.target.classList.remove("visible");
            }
          });
        },
        {
          threshold: 0.5,
        }
      );
      squares.forEach((square) => observer2.observe(square));
    </script>
  </body>
</html>
