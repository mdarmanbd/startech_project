<script setup>


defineProps([
        'userProfile'
])

</script>

<template>
    <h1>profile page</h1>
    <p>{{ userProfile.firstName }}</p>
    <p>{{ lastName.lastName }}</p>
</template>

<style scoped>


</style>