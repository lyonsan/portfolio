<template>
  <div id="output" class="output">
    <div class="output-title">
      <h1>Output</h1>
    </div>
    <div class="output-contents">
      <div class="output-content">
        <a href="http://18.176.46.136/">StudyReport</a>
        <p>仲間と学習報告をすること、学習メモを体系的に取ることができます</p>
      </div>
      <div class="output-content">
        <a href="https://miro-self-portfolio.netlify.app/#/">Miro's portfolio</a>
        <p>自己紹介と自分のスキル・ポートフォリオをまとめた当サイトです</p>
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

.output {
  padding-top: 30vh;
  height: 70vh;
  width: 100vw;
  background-color: black;
}


.output-title {
  width: 25%;
  margin: 0 auto;
}

.output-title>h1 {
  text-align: center;
  color: white;
  font-family: 'Oswald';
  font-size: 40px;
  border-bottom: 2px solid #fff;
  padding-bottom: 1vh;
  margin-bottom: 9vh;
}


.output-contents {
  margin: 0 auto;
  width: 70%;
  display: flex;
  justify-content: space-around;
}

.output-content {
  padding: 3vw;
}

a {
  text-align: center;
  color: white;
  font-family: 'Oswald';
  font-size: 25px;
}

p {
  text-align: center;
  color: white;
  font-family: 'Oswald';
  font-size: 15px;
}

</style>
