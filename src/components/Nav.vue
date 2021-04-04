<template>
  <ul>
    <li><a href="#top" class="nav-button">Top</a></li>
    <li><a href="#profile" class="nav-button">Profile</a></li>
    <li><a href="#skill" class="nav-button">Skill</a></li>
    <li><a href="#output" class="nav-button">Output</a></li>
    <li><a href="#contact" class="nav-button">Contact</a></li>
  </ul>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  display: flex;
  align-items: center;
  padding-top: 5px;
}

li {
  list-style: none;
  padding-right: 3vw;
}

a {
  font-size: 30px;
  font-family: 'Oswald';
  text-decoration: none;
  color: black;
  font-weight: bold;
}

@media (max-width: 1024px) {
  a {
    font-size: 25px;
  }
}

@media (max-width: 600px) {
  a {
    font-size: 15px;
  }
}


</style>
