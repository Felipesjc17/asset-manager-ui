<template>
  <div class="compound-interest">
    <header class="d-flex justify-content-around">
      <h4>{{ $t('compoundInterest.title') }}</h4>
    </header>
    <filter-compound-interest
      class="mb-3"
      :form="form"
      @simulate="onSubmit"
      @reset-form="onReset"
    />
    <table-compound-interest :data="data" />
    <BCard class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </BCard>
  </div>
</template>

<script lang="ts" src="./CompoundInterest.ts" />
