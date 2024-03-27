<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <div class="navbar nav-sticky">
        <h3 class="nav-title">
            <img src="@/assets/dragon.svg " class="nav-icon" /> Flyght CSS
        </h3>
        <span class="nav-menu-right">
            <a
                href="https://github.com/Donahuec/flyght-css"
                role="link"
                class="teal darken-3 link-button nav-button"
                >Github</a
            >
        </span>
    </div>
    <a class="to-top link-button teal darken-3" href="#">To Top</a>

    <div class="main-body">
        <div class="side-nav">
            <RouterLink to="/">Home</RouterLink> <br />
            <RouterLink to="/colors">Colors</RouterLink> <br />
            <RouterLink to="/typography">Typography</RouterLink> <br />
            <RouterLink to="/grid">Grid</RouterLink> <br />
            <RouterLink to="/buttons">Buttons</RouterLink> <br />
            <RouterLink to="/cards">Cards</RouterLink> <br />
            <RouterLink to="/accordions">Accordions</RouterLink> <br />
        </div>
        <main class="main-content">
            <RouterView />
        </main>
    </div>
</template>

<style>
.main-content {
    flex: 1 1 auto;
    overflow-y: auto;
}

.main-body {
    display: flex;
    flex-direction: row;
    height: 100%;
    overflow: hidden;
}

.side-nav {
    height: 100%;
    flex: 0 0 15%;
    box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.2);
    padding: 15px 20px 0 20px;
}
</style>
