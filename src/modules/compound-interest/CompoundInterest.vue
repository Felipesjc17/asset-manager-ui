<template>
  <div class="compound-interest">
    <header class="d-flex justify-content-around mb-3" variant="secundary">
      <h4>{{ $t('compoundInterest.title') }}</h4>
    </header>
    <BAccordion free class="mb-3">
      <BAccordionItem :title="$t('compoundInterest.filters.title')" visible>
        <filter-compound-interest :form="form" @simulate="onSubmit" @reset-form="onReset" />
      </BAccordionItem>
    </BAccordion>
    <BAccordion free>
      <BAccordionItem
        :title="$t('compoundInterest.chart.title')"
        class="h-100"
        :visible="dataChart"
      >
        <chart-compound-interest :data="dataChart" />
      </BAccordionItem>
      <BAccordionItem :title="$t('compoundInterest.table.title')" :visible="dataTable">
        <table-compound-interest :data="dataTable" />
      </BAccordionItem>
    </BAccordion>
  </div>
</template>

<script lang="ts" src="./CompoundInterest.ts" />
