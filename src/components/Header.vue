<template>
  <div class="header">
    <div class="header-title">
      <h2>Yajima's portfolio</h2>
    </div>
    <div class="header-content">
      <Nav></Nav>
    </div>
  </div>
</template>

<script>
import Nav from './Nav.vue'
export default {
  name: 'Header',
  components: {
    Nav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.header {
  position: fixed;
  top:0;
  z-index: 10;
  background-color: white;
  width: 100vw;
  display: flex;
  justify-content: space-between;
}

.header-title {
  padding-left: 3vw;
}

h2 {
  color: black;
  font-family: 'Oswald';
  font-size: 30px;
}

@media (max-width: 1024px) {
  h2 {
    padding-top: 5px;
    font-size: 25px;
  }
}

@media (max-width: 600px) {
  h2 {
    padding-top: 10px;
    font-size: 15px;
  }
}

</style>
