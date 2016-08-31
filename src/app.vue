<template>
    <div class="wrapper">
        <router-view :is="view" transition="reveal" transition-mode="in-out"></router-view>
        <menu v-ref:menu></menu>
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
