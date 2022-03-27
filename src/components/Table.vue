<script setup lang="ts">
    defineProps<{
        title: string
    }>();
</script>

<template>
    <table class="table">
        <caption class="table-caption">{{ title }}</caption>
        <tr class="table-row">
            <th class="table-header-cell">Company</th>
            <th class="table-header-cell">Contact</th>
            <th class="table-header-cell">Country</th>
        </tr>
        <tr class="table-row">
            <td class="table-cell">Alfreds Futterkiste</td>
            <td class="table-cell">Maria Anders</td>
            <td class="table-cell">Germany</td>
        </tr>
        <tr class="table-row">
            <td class="table-cell">Centro comercial Moctezuma</td>
            <td class="table-cell">Francisco Chang</td>
            <td class="table-cell">Mexico</td>
        </tr>
        <tr class="table-row">
            <td class="table-cell">Alfreds Futterkiste</td>
            <td class="table-cell">Maria Anders</td>
            <td class="table-cell">Germany</td>
        </tr>
        <tr class="table-row">
            <td class="table-cell">Centro comercial Moctezuma</td>
            <td class="table-cell">Francisco Chang</td>
            <td class="table-cell">Mexico</td>
        </tr>
        <tr class="table-row">
            <td class="table-cell">Alfreds Futterkiste</td>
            <td class="table-cell">Maria Anders</td>
            <td class="table-cell">Germany</td>
        </tr>
        <tr class="table-row">
            <td class="table-cell">Centro comercial Moctezuma</td>
            <td class="table-cell">Francisco Chang</td>
            <td class="table-cell">Mexico</td>
        </tr>
    </table>
</template>

<style scoped>
    .table {
        margin: 0 auto;
    }

    .table-caption {
        font-weight: var(--font-weight-bold);
    }

    .table, .table-header-cell, .table-cell {
        border: 1px solid var(--color-border);
        border-collapse: collapse;
    }

    .table-header-cell, .table-cell {
        padding: var(--small-padding);
    }

    .table-row:nth-child(even) {
        background-color: var(--vt-c-green-lighter);
    }

    .table-row:first-of-type {
        background-color: var(--vt-c-green-light);
    }
</style>
