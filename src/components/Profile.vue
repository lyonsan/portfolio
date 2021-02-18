<template>
  <div id="profile" class="profile">
    <div class="profile-contents">
      <div class="profile-title">
        <h1>Profile</h1>
      </div>
      <div class="profile-content">
        <h3>ハンドルネーム：miro</h3>
      </div>
      <div class="profile-content">
        <h3>学習していること：VueでのSPAアプリケーションの作成方法を学習しています。</h3>
      </div>
      <div class="profile-content">
        <h3>年齢：26歳</h3>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Profile'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.profile {
  padding-top: 20vh;
  height: 80vh;
  width: 100vw;
  background-color: black;
}

.profile-title {
  width: 50%;
  margin: 0 auto;
}

.profile-title>h1 {
  text-align: center;
  color: white;
  font-family: 'Oswald';
  font-size: 40px;
  border-bottom: 2px solid #fff;
  padding-bottom: 1vh;
  margin-bottom: 9vh;
}

.profile-contents {
  margin: 0 auto;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

h3 {
  text-align: center;
  color: white;
  font-family: 'Oswald';
  font-size: 25px;
}

</style>
