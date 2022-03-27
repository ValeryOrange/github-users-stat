<script setup lang="ts">
    import Table from '@/components/Table.vue';
    import useMainStore from '@/store/index';

    const store = useMainStore();
</script>

<template>
    <Table title="Vue Repositories"/>
</template>
