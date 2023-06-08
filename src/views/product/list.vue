<template>
    产品列表
    &nbsp;
    <el-row :gutter="20">
        <el-col :span="6">
            <el-form :model="form" label-width="120px">
                <el-form-item label="搜索">
                    <el-input v-model="input2" class="w-50 m-2" placeholder="Please Input" :suffix-icon="Search" />
                </el-form-item>
            </el-form>

        </el-col>
        <el-col :span="6">
            <div class="grid-content ep-bg-purple" />
        </el-col>
        <el-col :span="6">
            <div class="grid-content ep-bg-purple" />
        </el-col>
        <el-col :span="6">
            <div class="grid-content ep-bg-purple" />
        </el-col>
    </el-row>
    &nbsp;
    <el-row :gutter="20">
        <el-col :span="20">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column fixed prop="date" label="Date" width="150" />
                <el-table-column prop="name" label="Name" width="120" />
                <el-table-column prop="state" label="State" width="120" />
                <el-table-column prop="city" label="City" width="120" />
                <el-table-column prop="address" label="Address" width="600" />
                <el-table-column prop="zip" label="Zip" width="120" />
                <el-table-column fixed="right" label="Operations" width="120">
                    <template #default>
                        <el-button link type="primary" size="small" @click="handleClick">Detail</el-button>
                        <el-button link type="primary" size="small">Edit</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-col>
    </el-row>
</template>
  
<script lang="ts" setup>
const handleClick = () => {
    console.log('click')
}

const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office',
    },
]
</script>
  