export const items = [
  {
    id: "id1",
    title: "¿Cómo usar CSS?",
    img: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*G-4Z_ZSVVdA0BNuZYNnKsw.png",
    description: [
      "El código CSS para ambas aplicaciones es exactamente el mismo, pero hay diferencias en el lugar donde se encuentran. Con eso en mente, como vemos en la imágen la estructura de archivos de ambas aplicaciones.",
      "Verás que sus estructuras también son casi idénticas. La única diferencia aquí es que la aplicación React tiene tres archivos CSS, mientras que la aplicación Vue no tiene ninguno. La razón de esto es que, en create-react-app, un componente React tendrá un archivo de acompañamiento para guardar sus estilos, mientras que Vue CLI adopta un enfoque que abarca todo, donde los estilos se declaran dentro del archivo de componente real."
    ],
    vueCode: `
<style scoped>
button {
  margin-top: 20px;
}
</style>
    `,
    reactCode: `
import "../styles/component.css"
    `,
  },
  {
    id: "id2",
    title: "¿Cómo mutamos los datos?",
    img: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*mwDfvph3P7KcFwxDzXylHg.png",
    description: [
      "Pero primero, ¿qué queremos decir con “mutar los datos”?",
      "Suena un poco técnico ¿no? Básicamente solo significa cambiar los datos que hemos almacenado. Entonces, si quisiéramos cambiar el valor del nombre de una persona de John a Mark, estaríamos “mutando los datos”.",
      "Así que aquí es donde radica una diferencia clave entre React y Vue. Mientras que Vue esencialmente crea un objeto de datos, donde los datos se pueden actualizar libremente, React crea un objeto de estado, donde se requiere un poco más de trabajo para realizar las actualizaciones. Ahora React implementa el trabajo extra por una buena razón, y nos ocuparemos de eso en un momento."
    ],
    vueCode: `
<h1>{{ message }}</h1>
<button @click="updateMessage">Cambiar Mensaje</button>

export default {
  data() {
    return {
      message: 'Hola desde Vue!'
    }
  },
  methods: {
    updateMessage() {
      this.message = 'Mensaje actualizado en Vue';
    }
  }
}
    `,
    reactCode: `
import { useState } from 'react';

const [message, setMessage] = useState('Hola desde React!');

function updateMessage() {
  setMessage('Mensaje actualizado en React');
}

<h1>{message}</h1>
<button onClick={updateMessage}>Cambiar Mensaje</button>
    `,
  },
  {
    id: "id3",
    title: "¿Cómo se ven los componentes?",
    img: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*Yhz5oeUEcGPWXiTwkk7LwA.png",
    description: [
      "Aquí damos un vistazo rápido a cómo se ven los componentes típicos de Vue y React",
      "En última instancia, ambos logran lo mismo, y no hay nada que decir que no puede seguir adelante y estructurar su CSS de manera diferente en React o Vue. Realmente se trata de preferencias personales: escucharás mucha discusión de la comunidad de desarrolladores sobre cómo debería estructurarse el CSS. Por ahora, solo seguiremos la estructura establecida en ambas CLI."
    ],
  },
  {
    id: "id4",
    title: "Similitudes y características comunes",
    description: [
      "Vue se creó tomando React como inspiración. Por lo tanto, se pueden encontrar algunas similitudes como las siguientes:"
    ],
    list: [
      "Compatibilidad con aplicaciones web progresivas (PWA)",
      "Uso del DOM virtual",
      "Componentes de vista componibles y reactivos",
      "Código JavaScript",
      "Centrarse en una biblioteca central, con bibliotecas asociadas que cubren la red y la gestión del estado universal",
      "Capacidad de integración con cualquier aplicación web actual"
    ],
  },
  {
    id: "id5",
    title: "Código completo",
    vueCode: `
<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="updateMessage">Cambiar Mensaje</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hola desde Vue!'
    }
  },
  methods: {
    updateMessage() {
      this.message = 'Mensaje actualizado en Vue';
    }
  }
}
</script>

<style scoped>
button {
  margin-top: 20px;
}
</style>
    `,
  },
  {
    id: "id6",
    title: "Código completo",
    reactCode: `
import "../styles/component.css"
import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('Hola desde React!');

  function updateMessage() {
    setMessage('Mensaje actualizado en React');
  }

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={updateMessage}>Cambiar Mensaje</button>
    </div>
  );
}

export default App;
    `,
  },
]