<template>
  <div id="skill" class="skill">
    <div class="skill-contents">
      <div class="skill-title">
        <h1>Skill</h1>
      </div>
      <div class="skill-content">
        <h3>ポートフォリオ制作経験</h3>
        <p>HTML/CSS/Ruby/Ruby on Rails/JavaScript/Vue.js/jQuery/AWS/Docker/CircleCI</p>
      </div>
      <div class="skill-content">
        <h3>学習経験</h3>
        <p>React/PHP/Python</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Skill'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.skill {
  padding-top: 20vh;
  height: 60vh;
  width: 100vw;
}


.skill-title {
  width: 50%;
  margin: 0 auto;
}

.skill-title>h1 {
  text-align: center;
  color: black;
  font-family: 'Oswald';
  font-size: 40px;
  border-bottom: 2px solid #000000;
  padding-bottom: 1vh;
  margin-bottom: 9vh;
}


.skill-contents {
  margin: 0 auto;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

h3 {
  text-align: center;
  color: black;
  font-family: 'Oswald';
  font-size: 25px;
}

p {
  text-align: center;
  color: black;
  font-family: 'Oswald';
  font-size: 15px;
}

@media (max-width: 1024px) {
  .skill-title>h1 {
    font-size: 30px;
  }
  h3 {
    font-size: 20px;
  }

  p {
    font-size: 12px;
  }
}

@media (max-width: 600px) {
  .skill-title>h1 {
    font-size: 20px;
  }
  h3 {
    font-size: 15px;
  }

  p {
    font-size: 8px;
  }
}

</style>
