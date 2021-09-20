<template>
  <v-app>
    <v-app-bar app color="light-green" accent-3>
      <div class="mr-2">
        <span class="display-2 font-weight-bold mb-3 text-center white--text"
          >Fresh Food</span
        >
      </div>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-btn href="inicio.vue" target="_blank" text>
        <span class="mr-2 text-left white--text">inicio</span>
        <v-icon light>home</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
    </v-app-bar>
    <li class="nav-item">
      <router-link class="nav-link" to="/RegistrarProducto"
        >View Students</router-link
      >
    </li>
    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
    <v-main>
      <inicio />
    </v-main>
  </v-app>
</template>

<script>
import Inicio from "./components/Inicio";

export default {
  name: "App",

  components: {
    Inicio,
  },

  data: () => ({
    //
  }),
};
</script>
<!--
<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>open_in_new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import Inicio from "./components/Inicio";

export default {
  name: "App",

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
-->
