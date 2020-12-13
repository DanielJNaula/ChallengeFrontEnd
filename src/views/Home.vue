<template>
  <v-container >
    <div style="height: 60px;"></div>
    <v-row>
    <v-col sm="12">
      <v-hover
        v-slot="{ hover }"
        open-delay="200"
      >
        <v-card
          :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
          class="mx-auto"
          max-width="100%"
          align-center
        >
          <v-card-text class="font-weight-medium mt-12 text-center subtitle-1">
            Challenge Front-end Buscador
          </v-card-text>
          <v-card-text>
            <v-row >
              <v-col cols="12" lg="10" >
                <v-row >
                  <v-col cols="12" sm="6" md="3" >
                    <v-text-field
                      outlined
                      label="Ciudad origen"
                      prepend-icon="edit_location"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="3">
                    <v-text-field
                    outlined
                    label="Ciudad destino"
                    prepend-icon="pin_drop"
                  ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="3">
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
                          prepend-icon="date_range"
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
                  </v-col>
                  <v-col cols="12" sm="6" md="3">
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
                          prepend-icon="date_range"
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
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12" lg="2" >
                
                <div class="text-center" >
                  <router-link to="/buscador" class="v-btn v-btn--rounded theme--dark elevation-6 v-size--x-large primary">Buscar
                    <v-icon
                      right
                      dark
                    >
                      search
                    </v-icon></router-link>
                  
                </div>
              </v-col>
            </v-row>
          </v-card-text>
         
        </v-card>
      </v-hover>
    </v-col>

    
  </v-row>
  </v-container>

</template>

<script>
// @ is an alias to /src


export default {
    data: () => ({
      date: new Date().toISOString().substr(0, 10),
      modal: false,
     
    }),
  }
</script>

<style scoped>
  .v-card.on-hover.theme--dark{
    background-color: rgba(#FFF, 0.8)
  }
  
  .v-card__text{
    color: #000
  }
    
</style>

