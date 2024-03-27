<script setup>
</script>

<template>
    <div class="container">
        <h1 class="text-center">Flyght CSS</h1>
        <p class="text-center">
            <RouterLink to="/buttons" class="link-button teal darken-3">
                Buttons
            </RouterLink>
            <RouterLink to="/colors" class="link-button teal darken-3">
                Colors
            </RouterLink>
            <RouterLink to="/typography" class="link-button teal darken-3">
                Typography
            </RouterLink>
            <RouterLink to="/cards" class="link-button teal darken-3">
                Cards
            </RouterLink>
            <a href="#dropdown" class="link-button teal darken-3"> Dropdown </a>
            <RouterLink to="/accordions" class="link-button teal darken-3">
                Accordions
            </RouterLink>
            <a href="#misc" class="link-button teal darken-3">
                Miscellaneous
            </a>
            <RouterLink to="/grid" class="link-button teal darken-3">
                Grid
            </RouterLink>
        </p>
        <hr />

        <hr />
        <section id="dropdown">
            <h2 class="text-center jump-to">Dropdown</h2>
            <div class="dropdown">
                <button class="primary dropdown-button">Dropdown</button>
                <div class="dropdown-content">
                    <a href="# ">Link 1</a>
                    <a href="# ">Link 2</a>
                    <a href="# ">Link 3</a>
                </div>
            </div>
        </section>
        <hr />
        <section id="misc">
            <h2 class="text-center jump-to">Miscellaneous</h2>
            <hr />
            <hr class="hr-full" />
        </section>
        <hr />
    </div>
    <br /><br /><br /><br /><br /><br /><br /><br />
</template>
