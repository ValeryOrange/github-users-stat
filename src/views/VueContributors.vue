<script setup lang="ts">
    import Table from '@/components/Table.vue';
    import UserForm from '@/components/UserForm.vue';
    import useMainStore from '@/store/index';

    const store = useMainStore();
    const inputPlaceholder = 'Input repo name to find users';
    const buttonText = 'Search';
</script>

<template>
    <div
        v-if="store.token"
        class="users-table"
    >
        <h2>{{store.usersTableHeader}}</h2>
        <user-form
            :errorMessage="store.errorMessage"
            :inputPlaceholder="inputPlaceholder"
            :buttonText="buttonText"
        />
        <Table
            title="First 20 Users"
            :cellsData="store.users"
            :columnSettings="store.usersColumns"
        />
    </div>
</template>

