<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12" sm="6" md="3">
                <v-card class="mx-auto" outlined>
                    <v-card-text class="text-center">
                        <div class="text-h6 font-weight-light mb-2">TRANSACTIONS</div>
                        <div class="text-h4 font-weight-bold">{{ totalTransactions }}</div>
                        <div class="text-subtitle-2">
                            <span class="text--secondary">{{ last7DaysTransactions }}</span>
                            <span>LAST 7 DAYS</span>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="3">
                <v-card class="mx-auto" outlined>
                    <v-card-text class="text-center">
                        <div class="text-h6 font-weight-light mb-2">KGS</div>
                        <div class="text-h4 font-weight-bold">{{ totalKgs }}</div>
                        <div class="text-subtitle-2">
                            <span class="text--secondary">{{ last7DaysKgs }}</span>
                            <span>LAST 7 DAYS</span>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="3">
                <v-card class="mx-auto" outlined>
                    <v-card-text class="text-center">
                        <div class="text-h6 font-weight-light mb-2">USERS</div>
                        <div class="text-h4 font-weight-bold">{{ totalUsers }}</div>
                        <div class="text-subtitle-2">
                            <span class="text--secondary">{{ last7DaysUsers }}</span>
                            <span>LAST 7 DAYS</span>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="3">
                <v-card class="mx-auto" outlined>
                    <v-card-text class="text-center">
                        <div class="text-h6 font-weight-light mb-2">FAILED TRANS.</div>
                        <div class="text-h4 font-weight-bold">{{ failedTransactions }}</div>
                        <div class="text-subtitle-2">
                            <span class="text--secondary">{{ failedTransactionsPercentage }}%</span>
                            <span>LAST 7 DAYS</span>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            totalTransactions: 69000,
            last7DaysTransactions: 350,
            totalKgs: '170,000.00',
            last7DaysKgs: 3000,
            totalUsers: 17000,
            last7DaysUsers: 50,
            failedTransactions: 5,
            failedTransactionsPercentage: 2,
        };
    },
};
</script>

<style scoped>
.text--secondary {
    color: rgba(0, 0, 0, 0.6);
}
</style>
