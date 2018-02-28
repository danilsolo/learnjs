<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="utf-8">
    <title>Тег SELECT</title>
    <link
  </head>

  <body>
    <img id="img" src="" alt="">
  

    <div>
      <select id='sel' name="num" form="data">
        <option value="1">x1</option>
        <option value="2">x2</option>
        <option value="3">x3</option>
        <option value="4">x4</option>
      </select>
      <select id='sel2' name="num" form="data">
        <option value="1">x1</option>
        <option value="2">x2</option>
        <option value="3">x3</option>
        <option value="4">x4</option>
      </select>
    </div>

    <input type="text" id="inp">
    <input type="text" id="inp2">
    <p id="par"></p>

    <script>
      var xhr = new XMLHttpRequest();
      const endpoint = 'https://api.bitfinex.com/v2/tickers?symbols=tBTCUSD,tETHUSD,tXRPUSD,tBCHUSD,tLTCUSD,tNEOUSD,tXLMUSD,tDASHUSD,tXMRUSD,tADAUSD,tTRXUSD,tIOTAUSD,tDOGEUSD,tXEMUSD,tEOSUSD,tETCUSD,tUSDTUSD,tBTGUSD,tZECUSD,tXVGUSD'
      xhr.open('GET', endpoint, false);
      xhr.send();
      console.log(xhr.responseText)
    </script>
  </body>
</html>



