<template>
    <div class="p-4">
        <DashboardTopBar />
    </div>
</template>

<script>
export default {
    name: "DashboardHome",
    props: {
        name: {
            type: String,
            required: true
        }
    }
}
</script>
