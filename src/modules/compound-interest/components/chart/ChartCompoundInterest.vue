<template>
  <BCard class="w-100 mb-3" :style="{ height: '400px' }">
    <Line :data="dataChart" :options="options" ref="chart" />
  </BCard>
</template>

<script lang="ts" src="./ChartCompoundInterest.ts" />
