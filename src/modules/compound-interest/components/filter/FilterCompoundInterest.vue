<template>
  <BCard lg="5" class="filters mt-3">
    <BForm @submit="onSubmit" @reset="onReset" v-if="show">
      <BRow class="mb-2 b-row">
        <BCol lg="2">
          <BFormGroup
            id="input-group-1"
            :label="$t('compoundInterest.filters.periodMonths')"
            label-for="input-1"
          >
            <BInputGroup size="sm" :prepend="$t('compoundInterest.filters.coin')" append=".00">
              <BFormInput
                id="input-1"
                v-model="form.periodMonths"
                type="number"
                placeholder="0"
                required
                min="0"
              />
            </BInputGroup>
          </BFormGroup>
        </BCol>
        <BCol lg="2">
          <BFormGroup
            id="input-group-2"
            :label="$t('compoundInterest.filters.initialValue')"
            label-for="input-1"
          >
            <BInputGroup size="sm" :prepend="$t('compoundInterest.filters.coin')" append=".00">
              <BFormInput
                id="input-1"
                v-model="form.initialValue"
                type="number"
                placeholder="0"
                required
                min="0"
              />
            </BInputGroup>
          </BFormGroup>
        </BCol>
        <BCol lg="2" class="b-column">
          <BFormGroup
            id="group-input-monthly-contribution"
            :label="$t('compoundInterest.filters.monthlyContribution')"
            label-for="input-monthly-contribution"
          >
            <BInputGroup size="sm" :prepend="$t('compoundInterest.filters.coin')" append=".00">
              <BFormInput
                id="input-monthly-contribution"
                v-model="form.monthlyContribution"
                type="number"
                placeholder="0"
                required
                min="0"
              />
            </BInputGroup>
          </BFormGroup>
        </BCol>
        <BCol lg="3" class="d-flex align-items-end b-column">
          <BFormGroup id="input-group-4">
            <BFormCheckbox size="sm" v-model="form.correctContributionInflation" switch>
              <label>{{ $t('compoundInterest.filters.correctContributionInflation') }}</label>
            </BFormCheckbox>
          </BFormGroup>
        </BCol>
        <BCol lg="2" class="b-column">
          <BFormGroup
            id="group-input-desired-income"
            :label="$t('compoundInterest.filters.desiredIncome')"
            label-for="input-desired-income"
          >
            <BInputGroup size="sm" :prepend="$t('compoundInterest.filters.coin')" append=".00">
              <BFormInput
                id="input-desired-income"
                v-model="form.desiredIncome"
                type="number"
                placeholder="0"
                required
                min="0"
              />
            </BInputGroup>
          </BFormGroup>
        </BCol>
      </BRow>
      <BRow class="mb-2 b-row">
        <BCol lg="2" class="b-column">
          <BFormGroup
            id="group-input-yield"
            :label="$t('compoundInterest.filters.yield')"
            label-for="input-yield"
          >
            <BInputGroup size="sm" :prepend="$t('compoundInterest.filters.coin')" append=".00">
              <BFormInput
                id="input-yield"
                v-model="form.yield.value"
                type="number"
                placeholder="0"
                required
                min="0"
              />
            </BInputGroup>
          </BFormGroup>
        </BCol>
        <BCol lg="2" class="d-flex align-items-end b-column">
          <BFormRadioGroup
            size="sm"
            button-variant="outline-secondary"
            v-model="form.yield.period"
            :options="optionsPeriod"
            name="radios-btn-yield"
            buttons
          />
        </BCol>
        <BCol lg="2" class="b-column">
          <BFormGroup
            id="group-input-administration"
            :label="$t('compoundInterest.filters.administration')"
            label-for="input-administration"
          >
            <BInputGroup size="sm" :prepend="$t('compoundInterest.filters.coin')" append=".00">
              <BFormInput
                id="input-administration"
                v-model="form.administration.value"
                type="number"
                placeholder="0"
                min="0"
              />
            </BInputGroup>
          </BFormGroup>
        </BCol>
        <BCol lg="2" class="d-flex align-items-end b-column">
          <BFormRadioGroup
            size="sm"
            button-variant="outline-secondary"
            v-model="form.administration.period"
            :options="optionsPeriod"
            name="radios-btn-administration"
            buttons
          />
        </BCol>
        <BCol lg="2" class="b-column">
          <BFormGroup
            id="group-input-inflation"
            :label="$t('compoundInterest.filters.inflation')"
            label-for="input-inflation"
          >
            <BInputGroup size="sm" :prepend="$t('compoundInterest.filters.coin')" append=".00">
              <BFormInput
                id="input-inflation"
                v-model="form.inflation.value"
                type="number"
                placeholder="0"
                min="0"
              />
            </BInputGroup>
          </BFormGroup>
        </BCol>
        <BCol lg="2" class="d-flex align-items-end b-column">
          <BFormRadioGroup
            size="sm"
            button-variant="outline-secondary"
            v-model="form.inflation.period"
            :options="optionsPeriod"
            name="radios-btn-inflation"
            buttons
          />
        </BCol>
      </BRow>
      <BButton size="sm" type="submit" variant="outline-secondary">{{
        $t('compoundInterest.filters.simulate')
      }}</BButton>
      <BButton size="sm" class="m-3" type="reset" variant="outline-danger">{{
        $t('compoundInterest.filters.reset')
      }}</BButton>
    </BForm>
  </BCard>
</template>
<script lang="ts" src="./FilterCompoundInterest.ts" />
