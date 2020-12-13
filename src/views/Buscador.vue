<template>
  <v-container>
    <v-row>
        <v-col cols="12" sm="12" md="3">
          <h2>Buscador</h2> <br>
          <v-text-field
            outlined
            label="Ciudad origen"
            append-outer-icon="edit_location"
          >
          </v-text-field>
          <v-text-field
            outlined
            label="Ciudad destino"
            append-outer-icon="pin_drop"
          ></v-text-field>
          <v-dialog
            ref="dialog"
            v-model="modal"
            :return-value.sync="date"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                outlined
                v-model="date"
                label="Fecha de salida"
                append-outer-icon="date_range"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              scrollable
            >
              <v-spacer></v-spacer>
              <v-btn
                text
                color="primary"
                @click="modal = false"
              >
                cerrar
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.dialog.save(date)"
              >
                listo
              </v-btn>
            </v-date-picker>
          </v-dialog>
          <v-dialog
            ref="dialog"
            v-model="modal"
            :return-value.sync="date"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
              outlined
                v-model="date"
                label="Fecha de retorno"
                append-outer-icon="date_range"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              scrollable
            >
              <v-spacer></v-spacer>
              <v-btn
                text
                color="primary"
                @click="modal = false"
              >
                Cerrar
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.dialog.save(date)"
              >
                Listo
              </v-btn>
            </v-date-picker>
          </v-dialog>
          <div class="text-center" >
            <router-link to="/about" class="v-btn v-btn--rounded theme--dark elevation-6 v-size--x-large primary">Buscar
              <v-icon
                right
                dark
              >
                search
              </v-icon></router-link>
            
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="9">
            <Cards></Cards>
        </v-col>
    </v-row>
    
  </v-container>
  
</template>

<script>
import Cards from '@/components/buscador/Cards.vue';
export default {
  components: {
    Cards
  },
  data: () => ({
      date: new Date().toISOString().substr(0, 10),
      modal: false,
     
  }),

}
</script>

<style>

</style>
