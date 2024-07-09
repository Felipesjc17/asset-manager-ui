<template>
  <nav>
    <BNavbar toggleable="sm" variant="secondary" v-b-color-mode="'dark'">
      <BNavbarToggle target="nav-text-collapse" />

      <BCollapse id="nav-text-collapse" is-nav>
        <BNavbarNav>
          <BNavItem tag="h1" href="/"> Home </BNavItem>
          <BNavItem href="/compound-interest">
            {{ $t('menu.simulator') }}
          </BNavItem>
        </BNavbarNav>
      </BCollapse>
    </BNavbar>
  </nav>
  <div class="py-4 px-4">
    <router-view />
  </div>
</template>

<script lang="ts" src="./App.ts" />
