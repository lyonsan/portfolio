<template>
  <div id="app">
    <Header></Header>
    <Top></Top>
    <Profile></Profile>
    <Skill></Skill>
    <Output></Output>
    <Contact></Contact>
  </div>
</template>

<script>
import 'normalize.css'
import Header from './components/Header.vue'
import Top from './components/Top.vue'
import Profile from './components/Profile.vue'
import Skill from './components/Skill.vue'
import Output from './components/Output.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'App',
  components: {
    Header,
    Top,
    Profile,
    Skill,
    Output,
    Contact
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oswald&family=Roboto&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial,'Roboto','Oswald', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
