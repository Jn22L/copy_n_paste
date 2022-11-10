// #123 -> <span>#123</span>  ... and reverse 

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
  <script>
    var original = "Mary had a #little #lamb";
    var _new = original.replace(/#(\S*)/g, "<span>#$1</span>");
    var _ori = _new.replace(/<span>#(\S*)<\/span>/g, "#$1");
    console.log(original);
    console.log(_new);
    console.log(_ori);
  </script>
</html>
