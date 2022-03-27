<script setup lang="ts">
    import { ColumnSetting } from '@/types';
    const props = defineProps<{
        title: string,
        columnSettings: ColumnSetting[],
        cellsData: ColumnSetting[],
    }>();
</script>

<template>
    <table class="table" v-if="cellsData.length">
        <caption class="table-caption">{{ title }}</caption>
        <tr class="table-row">
            <th
                v-for="(item, index) in columnSettings"
                :key="index + Date.now() * Math.random()"
                :data-type="item.type"
                class="table-header-cell"
            >
                {{item.value}}
            </th>
        </tr>
        <tr
            v-for="(cellData, index) in cellsData"
            :key="index + Date.now() * Math.random()"
            class="table-row"
        >
            <td
                v-for="(repoInfo, index) in cellData"
                :key="index + Date.now() * Math.random()"
                class="table-cell"
            >
                <a
                    v-if="repoInfo.type === 'url'"
                    :href="repoInfo.value"
                    class="cell-link"
                >
                    {{repoInfo.value}}
                </a>
                <span
                    v-else
                    class="cell-value"
                >
                    {{repoInfo.value}}
                </span>
            </td>
            {{cellData.value}}
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

    .table-cell {
        word-wrap: break-word;
    }
</style>
