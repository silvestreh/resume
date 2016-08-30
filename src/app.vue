<template>
    <div class="wrapper">
        <menu></menu>
        <router-view :is="view"></router-view>
    </div>
</template>

<style lang="scss" src="./stylesheets/main.scss"></style>

<script>
import menu from 'components/menu';

export default {
    components: {
        menu,
    },
};
</script>
