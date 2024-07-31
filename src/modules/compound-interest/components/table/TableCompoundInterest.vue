<template>
  <BCard class="card-table">
    <BTableSimple responsive>
      <BThead variant="secondary">
        <BTr>
          <BTh class="text-end">{{ $t(`${translationPath}.month`) }}</BTh>
          <BTh class="text-end">{{ $t(`${translationPath}.initialValue`) }}</BTh>
          <BTh class="text-end">{{ $t(`${translationPath}.yield`) }}</BTh>
          <BTh class="text-end">{{ $t(`${translationPath}.desiredIncome`) }}</BTh>
          <BTh class="text-end">{{ $t(`${translationPath}.administration`) }}</BTh>
          <BTh class="text-end">{{ $t(`${translationPath}.inflation`) }}</BTh>
          <BTh class="text-end">{{ $t(`${translationPath}.monthlyContribution`) }}</BTh>
          <BTh class="text-end">{{ $t(`${translationPath}.finalValue`) }}</BTh>
        </BTr>
      </BThead>
      <BTbody>
        <BTr v-for="(item, index) in data.simulatedData" :key="index">
          <BTd class="text-end">{{ index + 1 }}</BTd>
          <BTd class="text-end">{{ item.initialValue }}</BTd>
          <BTd class="text-end">{{ item.yield }}</BTd>
          <BTd class="text-end">{{ item.desiredIncome }}</BTd>
          <BTd class="text-end">{{ item.administration }}</BTd>
          <BTd class="text-end">{{ item.inflation }}</BTd>
          <BTd class="text-end">{{ item.contribution }}</BTd>
          <BTd class="text-end">{{ item.finalValue }}</BTd>
        </BTr>
      </BTbody>
      <BTfoot>
        <BTr variant="secondary">
          <BTh class="text-end">{{ $t(`${translationPath}.totalMonth`) }}</BTh>
          <BTh class="text-end">{{ $t(`${translationPath}.totalYears`) }}</BTh>
          <BTh class="text-end">{{ $t(`${translationPath}.accumulatedIncome`) }}</BTh>
          <BTh class="text-end">{{ $t(`${translationPath}.accumulatedDesiredIncome`) }}</BTh>
          <BTh class="text-end">{{ $t(`${translationPath}.accumulatedAdministration`) }}</BTh>
          <BTh class="text-end">{{ $t(`${translationPath}.accumulatedInflation`) }}</BTh>
          <BTh class="text-end">{{ $t(`${translationPath}.accumulatedMonthlyContribution`) }}</BTh>
          <BTh class="text-end">{{ $t(`${translationPath}.accumulatedTotal`) }}</BTh>
        </BTr>
        <BTr variant="light">
          <BTd class="text-end">{{ data.simulatedDataFinal.totalMonth }}</BTd>
          <BTd class="text-end">{{ data.simulatedDataFinal.totalYears }}</BTd>
          <BTd class="text-end">{{ data.simulatedDataFinal.accumulatedIncome }}</BTd>
          <BTd class="text-end">{{ data.simulatedDataFinal.accumulatedDesiredIncome }}</BTd>
          <BTd class="text-end">{{ data.simulatedDataFinal.accumulatedAdministration }}</BTd>
          <BTd class="text-end">{{ data.simulatedDataFinal.accumulatedInflation }}</BTd>
          <BTd class="text-end">{{ data.simulatedDataFinal.accumulatedMonthlyContribution }}</BTd>
          <BTd class="text-end">{{ data.simulatedDataFinal.accumulatedTotal }}</BTd>
        </BTr>
      </BTfoot>
    </BTableSimple>
  </BCard>
</template>

<script lang="ts" src="./TableCompoundInterest.ts" />
