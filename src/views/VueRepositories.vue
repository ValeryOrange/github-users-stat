<script setup lang="ts">
    import Table from '@/components/Table.vue';
    import UserForm from '@/components/UserForm.vue';
    import useMainStore from '@/store/index';

    const store = useMainStore();
    const inputPlaceholder = 'Input substring to find a repo';
    const buttonText = 'Search';

    /**
     * Request and render only 20 first repost, but there might be different
     * solutions:
     * 1. paging
     * 2. button to download more results
     * 3. filtration results
     * 4. add another input to dynamically set the amount of requested
     *    repos
     */
    function requestRepos(substr: string) {
        store.searchRepos(substr);
    }
</script>

<template>
    <div
        v-if="store.token"
        class="repos-table"
    >
        <h2>{{store.repositoryTableHeader}}</h2>
        <user-form
            :errorMessage="store.errorMessage"
            :inputPlaceholder="inputPlaceholder"
            :buttonText="buttonText"
            @userInputSubmit="requestRepos"
        />
        <Table
            title="First 20 Repositories"
            :cellsData="store.repos"
            :columnSettings="store.repositoryColumns"
        />
    </div>
</template>

<style scoped>
    .repos-table {
        margin-left: var(--regular-margin)
    }
</style>
