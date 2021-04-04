<template>
  <div id="top" class="top">
    <div class="top-content">
      <h1>Yajima's</h1>
      <h1>portfolio</h1>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Top'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.top {
  padding-top: 30vh;
  height: 50vh;
  width: 100vw;
  background-image: url(../assets/ld-01.jpeg);
  background-size: cover;
}

.top-content {
  width: 50%;
  margin: 0 auto;
}

h1 {
  text-align: center;
  color: black;
  font-family: 'Oswald';
  font-size: 50px;
}


</style>
