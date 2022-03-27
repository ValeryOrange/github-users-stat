<script setup lang="ts">
    defineProps<{
        title: string
    }>();
</script>

<template>
    <table class="table">
        <caption class="table-caption">{{ title }}</caption>
        <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
        </tr>
        <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
        </tr>
        <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
        </tr>
    </table>
</template>

<style scoped>
    .table {
        margin: 0 auto
    }

    .table-caption {
        font-weight: 700;
    }
</style>
