<template>
  <div class="compound-interest">
    <header class="d-flex justify-content-around" variant="secundary">
      <h4>{{ $t('compoundInterest.title') }}</h4>
    </header>
    <filter-compound-interest
      class="mb-3"
      :form="form"
      @simulate="onSubmit"
      @reset-form="onReset"
    />
    <chart-compound-interest />
    <table-compound-interest :data="data" />
  </div>
</template>

<script lang="ts" src="./CompoundInterest.ts" />
