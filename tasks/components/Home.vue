<template>
    <div class="p-4">
        <h2>Task Module 3</h2>
        <div>Props {{ name }}</div>
    </div>
</template>

<script>
export default {
    name: "TaskHome",
    props: {
        name: {
            type: String,
            required: true
        }
    }
}
</script>
