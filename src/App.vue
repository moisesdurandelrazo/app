<template>
  <v-card>
    <v-layout>
      <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

      <v-app-bar
        color="primary"
        prominent
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>My files</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn variant="text" icon="mdi-magnify"></v-btn>

        <v-btn variant="text" icon="mdi-filter"></v-btn>

        <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        location="bottom"
        temporary
      >
        <v-list>

          <v-list-item :to="{path: '/'}">
            <v-list-item-action>
              <v-icon>mdi-{{ icons[0] }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item :to="{path: '/articulos'}">
            <v-list-item-action>
              <v-icon>mdi-{{ icons[1] }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Articulos</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item :to="{path: '/contacto'}">
            <v-list-item-action>
              <v-icon>mdi-{{ icons[2] }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Contacto</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          </v-list>
      </v-navigation-drawer>

      <v-main style="height: 800px;">
        <HomeApp></HomeApp>
        <v-card-text>
          The navigation drawer will appear from the bottom on smaller size screens.
        </v-card-text>
      </v-main>
    </v-layout>
  </v-card>
</template>
<script>
  export default {
    name: 'App',
    data: () => ({
      icons: ['home', 'shopping', 'email'],
      drawer: false,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>