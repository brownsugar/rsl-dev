<template>
  <section class="hosts py-16">
    <section-title
      text="轉播陣容"
    />
    <v-row class="mt-n4">
      <v-col
        cols="12"
        xl="10"
      >
        <v-row>
          <v-col
            v-for="(host, i) in hosts"
            :key="i"
            class="mt-8"
            cols="12"
            md="6"
          >
            <sub-title
              :text="host.title"
            />
            <v-card
              class="mt-4"
              shaped
            >
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    lg="4"
                  >
                    <v-sheet
                      class="overflow-hidden"
                      shaped
                    >
                      <v-img
                        class="ml-auto mr-auto ml-md-0"
                        aspect-ratio="1"
                        :src="require(`~/assets/images/kart15th/host/${host.avatar}`)"
                        :alt="host.name"
                      />
                    </v-sheet>
                  </v-col>
                  <v-col
                    class="d-flex align-center pt-2 pt-lg-3 pb-4 pb-lg-3"
                    cols="12"
                    lg="8"
                  >
                    <h3 class="text-h3 text-lg-h2 font-weight-bold">
                      {{ host.name }}
                    </h3>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import SectionTitle from '~/components/kart15th/common/section-title'
import SubTitle from '~/components/kart15th/common/sub-title'
import hosts from '~/data/kart15th/hosts'

export default {
  name: 'Hosts',
  components: {
    SectionTitle,
    SubTitle
  },
  data: () => ({
    hosts
  })
}
</script>
