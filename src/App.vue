<template>
  <div>
    <BNavbar toggleable="sm" variant="secondary" v-b-color-mode="'dark'">
      <BNavbarToggle target="nav-text-collapse" />
      <RouterLink to="/">
        <BNavbarBrand>
          {{ $t('menu.assetManager') }}
        </BNavbarBrand>
      </RouterLink>

      <BCollapse id="nav-text-collapse" is-nav>
        <BNavbarNav>
          <RouterLink to="compound-interest">
            <BNavText>
              {{ $t('menu.simulator') }}
            </BNavText>
          </RouterLink>
        </BNavbarNav>
      </BCollapse>
    </BNavbar>
  </div>
  <div>
    <router-view />
  </div>
</template>

<script lang="ts" src="./App.ts" />
