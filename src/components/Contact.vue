<template>
  <div id="contact" class="contact">
    <div class="contact-title">
      <h1>Contact</h1>
    </div>
    <div class="contact-contents">
      <div class="contact-content">
        <a href="https://twitter.com/miro_prog_">Twitter</a>
      </div>
      <div class="contact-content">
        <a href="https://github.com/lyonsan">GitHub</a>
      </div>
      <div class="contact-content">
        <a href="https://qiita.com/lyonsan">Qiita</a>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Contact'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.contact {
  padding-top: 20vh;
  height: 80vh;
  width: 100vw;
  background-color: white;
}

.contact-title {
  width: 50%;
  margin: 0 auto;
}

.contact-title>h1 {
  text-align: center;
  color: black;
  font-family: 'Oswald';
  font-size: 40px;
  border-bottom: 2px solid #000000;
  padding-bottom: 1vh;
  margin-bottom: 9vh;
}

.contact-contents {
  margin: 0 auto;
  width: 50%;
  display: flex;
  justify-content: space-around;
}

a {
  text-align: center;
  color: black;
  font-size: 25px;
  text-decoration: none;
}

</style>
