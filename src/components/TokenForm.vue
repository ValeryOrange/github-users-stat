<script setup lang="ts">
    import useMainStore from '@/store/index';
    const props = defineProps({
        errorMessage: String,
    });
    const store = useMainStore();
    let userToken: string = '';
    /**
     * For better performance in a real project it would reasonable
     * to handle button clicks with throttle
     */
    function setToken(e: Event) {
        e.preventDefault();
        store.setToken(this.userToken);
    }
    export {};
</script>

<template>
    <div class="user-block">
        <span
            v-if="errorMessage"
            class="error-message"
        >{{errorMessage}}</span>
        <form class="user-form">
            <input 
                class="user-input"
                v-model="userToken"
                placeholder="Input your GitHub PAT for Users and Repos"
            />
            <button class="user-button" type="submit" @click="setToken">Set My PAT</button>
        </form>
    </div>
</template>

<style scoped>
    .error-message {
        position: absolute;
        top: 0;
        left: 20px;
        color: var(--vt-c-red);
    }

    .user-form {
        display: flex;
        flex-direction: column;
        margin: var(--regular-margin) auto;
        padding: var(--regular-padding);
    }

    .user-input, .user-button {
        box-sizing: border-box;
        max-width: 100%;
        width: 400px;
        padding: var(--small-padding);
        height: 40px;
    }

    .user-button {
        margin-top: var(--regular-margin);
    }

    @media (min-width: 1024px) {
        .user-form {
            flex-direction: row;
        }

        .user-input {
            display: inline-block;
        }

        .user-button {
            width: auto;
            margin-top: 0;
            margin-left: var(--regular-margin);
        }
    }
</style>