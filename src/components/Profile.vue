<template>
  <div id="profile" class="profile">
    <div class="profile-contents">
      <div class="profile-title">
        <h1>Profile</h1>
      </div>
      <div class="profile-content-wrapper">
        <div class="profile-content">
          <h2>関心のあること</h2>
          <div class="profile-content-text">
            <p>モノ/情報へのアクセシビリティ・生活の利便性</p>
          </div>
        </div>
        <div class="profile-content">
          <h2>関心があるワケ</h2>
          <div class="profile-content-text">
            <p>地方活性への関心から、地方での生活水準の向上に貢献したい(仕事・暮らし)</p>
            <p>自分が面倒くさがり・・</p>
          </div>
        </div>
        <div class="profile-content">
          <h2>これからやっていきたいこと</h2>
          <div class="profile-content-text">
            <p>どこにいても自分のやりたいこと、欲しい物を手に入れられるツールを作りたい</p>
          </div>
        </div>
        <div class="profile-content">
          <h2>自分が今するべきこと</h2>
          <div class="profile-content-text">
            <p>プロダクトを生み出すスキル、実際に生み出している方々との交流</p>
          </div>
        </div>
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
  width: 100vw;
  background-color: #333333;
  padding: 15vh 0;
}

.profile-title {
  width: 30%;
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
  display: flex;
  flex-direction: column;
}

h2 {
  text-align: center;
  color: white;
  font-family: 'Oswald';
  font-size: 25px;
}

.profile-content-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.profile-content {
  width: 80%;
  margin: 0 auto;
}

.profile-content-text {
  color: white;
}

@media (max-width: 1024px) {
  .profile-title>h1 {
    font-size: 30px;
  }


  .profile-content>h2 {
    font-size: 24px;
  }
}

@media (max-width: 600px) {
  .profile-title>h1 {
    font-size: 20px;
  }

  .profile-content>h2 {
    font-size: 18px;
  }

  p {
    font-size: 12px;
  }

}

</style>
