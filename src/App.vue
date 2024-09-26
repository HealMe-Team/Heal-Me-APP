<template>
  <div id="app">

    <Header />
    <Toolbar />
    <router-view /> <!-- Aquí se mostrarán los componentes de las rutas -->
    <Main />
    <Footer />

  </div>
</template>

<script>
import Header from './components/Header/Header.component.vue';
import Toolbar from './components/Toolbar/Toolbar.component.vue';
import Main from './layouts/MainLayout.component.vue';
import Footer from './components/Footer/Footer.component.vue';

export default {
  components: {
    Header,
    Toolbar,
    Main,
    Footer
  }
}
</script>
