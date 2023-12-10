<template>
  <v-row>
    <v-col cols="12">
      <v-row>
        <!-- Sales overview -->
        <v-col cols="12" lg="8">
          <AdminComponentsDashboardSalesOverview />
        </v-col>
        <!-- Yearly Breakup / Monthly Earnings -->
        <v-col cols="12" lg="4">
          <div class="mb-6">
            <AdminComponentsDashboardMonthlyEarnings />
          </div>
          <div>
            <AdminComponentsDashboardYearlyBreakup />
          </div>
        </v-col>
        <!-- Recent transaction -->
        <v-col cols="12" lg="4">
          <AdminComponentsDashboardRecentTransaction />
        </v-col>
        <!-- Product performence -->
        <v-col cols="12" lg="8">
          <AdminComponentsDashboardProductPerformance />
        </v-col>
      </v-row>
    </v-col>
    <v-col class="text-center mt-2">
      <p class="text-muted">Page in dev</p>
    </v-col>
  </v-row>
</template>
<script setup>
definePageMeta({
  layout: 'admin'
})
</script>
