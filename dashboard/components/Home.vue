<template>
    <div class="p-4">
        <h2>Dashboard Module</h2>
        <div>NEW CHANGE {{name}}</div>
        <p>Base URL: {{ $dashboardConfig.baseURL }}</p>
        <p>Token: {{ $dashboardConfig.token }}</p>
        <p>API Endpoint: {{ $dashboardConfig.api }}</p>
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
