<script setup lang="ts">
import 'v-calendar/dist/style.css';
import { ref } from 'vue';
import UiParentCard from '@/Components/shared/UiParentCard.vue';
import FullCalendar from './FullCalender.vue';
import FullLayout from "@/Layouts/full/FullLayout.vue";

const date = ref(new Date());
const timezone = ref('');

const range = ref();
</script>
<template>
    <FullLayout>
        <v-row>
            <v-col cols="12" >
                <UiParentCard title="Full Calender">
                    <FullCalendar/>
                </UiParentCard>
            </v-col>
            <v-col cols="12" lg="4" sm="12">
                <UiParentCard title="Calendar with Date">
                    <v-date-picker is-expanded v-model="date"  class="bg-surface"/>
                </UiParentCard>
            </v-col>
            <v-col cols="12" lg="4" sm="12">
                <UiParentCard title="Calendar with Min Date">
                    <v-date-picker is-expanded v-model="date" :min-date="new Date()" class="bg-surface" />
                </UiParentCard>
            </v-col>
            <v-col cols="12" lg="4" sm="12">
                <UiParentCard title="Calendar with Max Date">
                    <v-date-picker is-expanded v-model="date" :max-date="new Date()" class="bg-surface" />
                </UiParentCard>
            </v-col>

            <v-col cols="12" lg="6" sm="12">
                <UiParentCard title="Calendar Date & Time">
                    <div>
                        <div class="flex mb-2">
                            <label class="text-gray-600 font-medium"
                            ><input class="mr-1" type="radio" value="" v-model="timezone" />Local</label
                            >
                            <label class="text-gray-600 font-medium ml-3"
                            ><input class="mr-1" type="radio" value="utc" v-model="timezone" />UTC</label
                            >
                        </div>
                        <v-date-picker v-model="date" mode="dateTime" :timezone="timezone" class="bg-surface" />
                    </div>
                </UiParentCard>
            </v-col>
            <v-col cols="12" lg="6" sm="12">
                <UiParentCard title="Calendar Date Range">
                    <v-date-picker v-model="range" is-range class="bg-surface" />
                </UiParentCard>
            </v-col>
            <v-col cols="12" lg="12" sm="12">
                <UiParentCard title="Calendar Month Steps">
                    <v-date-picker v-model="date" :rows="2" :step="1" class="bg-surface" />
                </UiParentCard>
            </v-col>
        </v-row>
    </FullLayout>
</template>
