<template>
  <div id="output" class="output">
    <div class="output-title">
      <h1>Output</h1>
    </div>
    <h3 class="output-subtitle">Original</h3>
    <div class="output-contents">
      
      <div class="output-content">
        <img src="../assets/studyreport.jpeg" class="output-image">
        <a href="http://18.176.46.136/" target="_blank" rel="noopener noreferrer">StudyReport</a>
        <p>仲間との学習報告、メモ、記事投稿という学習に必要なアウトプットをアプリ一つで行うことができます。</p>
      </div>
      <div class="output-content">
        <img src="../assets/portfolio.jpeg" class="output-image">
        <a href="https://miro-self-portfolio.netlify.app/#/" target="_blank" rel="noopener noreferrer">Yajima's portfolio</a>
        <p>自己紹介と自分のスキル・ポートフォリオをまとめた当サイトです。</p>
      </div>
    </div>

    <h3 class="output-subtitle">Study</h3>
    <div class="output-contents">
      <div class="output-content">
        <a href="https://github.com/lyonsan/chat-app" target="_blank" rel="noopener noreferrer">ChatApp(GitHubリポジトリ)</a>
        <p>チャットルームを作成し、ユーザー同士でチャットができる機能をもつアプリケーションです。(カリキュラム内作成)</p>
      </div>
      <div class="output-content">
        <a href="https://furima-31506.herokuapp.com/" target="_blank" rel="noopener noreferrer">furima</a>
        <p>フリーマーケットのコピーサイトです。(スクール卒業課題で作成)</p>
      </div>
      <div class="output-content">
        <a>react-redux-crud-application</a>
        <p>Udemyの講座内ハンズオンで作成したToDoアプリケーションです。</p>
        <a class="output-link" href="https://www.udemy.com/course/react-application-development/" target="_blank" rel="noopener noreferrer">Udemy教材はこちら</a>
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
  padding: 8vh 0 6vh 0;
  width: 100vw;
  background-color: #333333;
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

.output-image {
  height: 300px;
  width: 300px;
  margin: 15px auto;
}

.output-subtitle {
  font-size: 30px;
  color: white;
  font-family: 'Oswald';
}

.output-content {
  padding: 3vw;
  width: 30%;
  min-width: 300px;
  display: flex;
  flex-direction: column;
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

.output-link {
  font-size: 12px;
}

@media (max-width: 1024px) {
  .output-title>h1 {
    font-size: 30px;
  }

  a {
    font-size:20px;
  }

  p {
    font-size: 12px;
  }

  .output-contents {
    display: flex;
    flex-direction: column;
    margin-bottom: 15vh;
  }

  .output-content {
    margin: 0 auto;
  }
}

@media (max-width: 600px) {
  .output-title>h1 {
    font-size: 20px;
  }

  .output-subtitle {
    font-size: 18px;
  }

  a {
    font-size:15px;
  }
}

</style>
