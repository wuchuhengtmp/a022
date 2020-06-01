<template>
  <v-app style="background-color: #384256">
    <top-bar></top-bar>
    <v-content>
      <HelloWorld/>
    </v-content>
    <bottom-bar></bottom-bar>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import '@/assets/icons.css'
import TopBar from './views/TopBar'
import BottomBar from './views/BottomBar'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TopBar,
    BottomBar
  },
  data: () => ({
      bottomNav: 'recent',
  }),
};
</script>
