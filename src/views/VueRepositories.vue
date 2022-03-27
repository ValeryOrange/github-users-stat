<script setup lang="ts">
    import Table from '@/components/Table.vue';
    import UserForm from '@/components/UserForm.vue';
    import useMainStore from '@/store/index';

    const store = useMainStore();
    const inputPlaceholder = 'Input substring to find a repo';
    const buttonText = 'Search'
</script>

<template>
    <div
        v-if="store.token"
        class="repos-table"
    >
        <h2>Search for GitHub repositories</h2>
        <user-form
            :errorMessage="store.errorMessage"
            :inputPlaceholder="inputPlaceholder"
            :buttonText="buttonText"
            @userInputSubmit="requestRepos"
        />
        <Table title="Vue Repositories"/>
    </div>
</template>

<style scoped>
    .repos-table {
        margin-left: var(--regular-margin)
    }
</style>
