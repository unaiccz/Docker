# Docker
- Imagen que monta un **api** en node que conecta con un container de **mongo**

  <br>
  <hr>
  <div>
  <button onclick="copyToClipboard()">Copiar</button>
  <pre>
    <code id="codeBlock">
docker-compose up
docker-compose down
    </code>
  </pre>
</div>

<script>
  function copyToClipboard() {
    var copyText = document.getElementById("codeBlock").innerText;
    navigator.clipboard.writeText(copyText).then(function() {
      alert("Texto copiado al portapapeles");
    }, function(err) {
      console.error("Error al copiar el texto: ", err);
    });
  }
</script>

