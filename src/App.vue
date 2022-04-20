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

    <div class="row">
        <div class="col m2">
            <div class="card card-small" style="position: sticky">
                <div class="card-content">
                    <RouterLink to="/">Home</RouterLink> <br />
                    <RouterLink to="/colors">Colors</RouterLink> <br />
                    <RouterLink to="/typography">Typography</RouterLink> <br />
                    <RouterLink to="/grid">Grid</RouterLink> <br />
                    <RouterLink to="/buttons">Buttons</RouterLink> <br />
                    <RouterLink to="/cards">Cards</RouterLink> <br />
                    <RouterLink to="/accordions">Accordions</RouterLink> <br />
                </div>
            </div>
        </div>
        <div class="col m10">
            <RouterView />
        </div>
    </div>
</template>
