<template>
  <div class="card vertical gap pad">
    <h2>Código de react</h2>
    <small>
      <pre>
        <code>
import "../styles/app.css"
import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('Hola desde React!');

  function updateMessage() {
    setMessage('Mensaje actualizado en React');
  }

  return (
    &lt;div&gt;
      &lt;h1&gt;{message}&lt;/h1&gt;
      &lt;button onClick={updateMessage}&gt;Cambiar Mensaje&lt;/button&gt;
    &lt;/div &gt;
  );
}

export default App;
        </code>
      </pre>
    </small>
  </div>
</template>

<script>
export default {
  name: "CardReactCode"
}
</script>