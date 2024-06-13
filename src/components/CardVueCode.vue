<template>
  <div class="card vertical gap pad">
    <h2>Código de vue</h2>
    <small>
      <pre>
        <code>
&lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;{{ `\{\{message\}\}` }}&lt;/h1&gt;
    &lt;button @click="updateMessage"&gt;Cambiar Mensaje&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
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
&lt;/script&gt;

&lt;style scoped&gt;
button {
  margin-top: 20px;
}
&lt;/style&gt;
        </code>
      </pre>
    </small>
  </div>
</template>

<script>
export default {
  name: "CardVueCode"
}
</script>