<template>
  <div>
    <v-card class="mx-auto overflow-hidden" height="600">
      <v-app-bar dark>
        <v-app-bar-nav-icon
          @click="drawer = true"
          class="d-md-none"
        ></v-app-bar-nav-icon>

        <v-avatar>
          <img src="../assets/Alessandra.jpg" size="128" alt="Alessandra Ramos" />
        </v-avatar>
        <v-toolbar-title>Alessandra Ramos</v-toolbar-title>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense>
          <v-list-item-group v-model="group" active-class="text--accent-4">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Account</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>