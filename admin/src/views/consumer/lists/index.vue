<template>
    <div>
        <el-card class="!border-none" shadow="never">
            <el-form ref="formRef" class="mb-[-16px]" :model="queryParams" :inline="true">
                <!-- <el-form-item label="用户信息">
                    <el-input class="w-[280px]" v-model="queryParams.keyword" placeholder="用户编号/昵称/手机号码" clearable
                        @keyup.enter="resetPage" />
                </el-form-item>
                <el-form-item label="注册时间">
                    <daterange-picker v-model:startTime="queryParams.startTime" v-model:endTime="queryParams.endTime" />
                </el-form-item>
                <el-form-item label="注册来源">
                    <el-select class="w-[280px]" v-model="queryParams.channel">
                        <el-option v-for="(item, key) in ClientMap" :key="key" :label="item" :value="key" />
                    </el-select>
                </el-form-item> -->
                <el-form-item label="用户账号">
                    <el-input v-model="queryParams.username" class="w-[280px]" clearable @keyup.enter="resetPage" />
                </el-form-item>
                <el-form-item label="用户名称">
                    <el-input v-model="queryParams.nickname" class="w-[280px]" clearable @keyup.enter="resetPage" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="resetPage">查询</el-button>
                    <el-button @click="resetParams">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <el-card class="!border-none mt-4" shadow="never">
            <el-table size="large" v-loading="pager.loading" :data="pager.lists">
                <el-table-column label="序号" width="60">
                    <template #default="scope">
                        {{ scope.$index + 1 }}
                    </template>
                </el-table-column>
                <!-- <el-table-column label="用户编号" prop="sn" min-width="120" /> -->
                <el-table-column label="头像" min-width="100">
                    <template #default="{ row }">
                        <el-avatar :src="row.avatar" :size="50" />
                    </template>
                </el-table-column>
                <el-table-column label="昵称" prop="nickname" min-width="100" />
                <el-table-column label="账号" prop="username" min-width="120" />
                <el-table-column label="手机号码" prop="mobile" min-width="100" />
                <el-table-column label="性别" prop="sex" min-width="100">
                    <template #default="{ row }">
                        <span v-if="row.sex === 1">男</span>
                        <span v-else-if="row.sex === 2">女</span>
                        <span v-else>未知</span>
                    </template>
                </el-table-column>
                <el-table-column label="注册来源" prop="channel" min-width="100">
                    <template #default="{ row }">
                        <span v-if="row.channel === 1">微信小程序</span>
                        <span v-else-if="row.channel === 2">手机H5</span>
                        <span v-else-if="row.channel === 3">电脑PC</span>
                        <span v-else>其他</span>
                    </template>
                </el-table-column>
                <el-table-column label="注册时间" prop="updateTime" min-width="120" />
                <el-table-column label="最后登录时间" prop="lastLoginTime" min-width="120" />
                <!-- <el-table-column label="操作" width="120" fixed="right">
                    <template #default="{ row }">
                        <el-button v-perms="['user:detail']" type="primary" link>
                            <router-link :to="{
                path: getRoutePath('user:detail'),
                query: {
                    id: row.id
                }
            }">
                                详情
                            </router-link>
                        </el-button>
                    </template>
                </el-table-column> -->
            </el-table>
            <div class="flex justify-end mt-4">
                <pagination v-model="pager" @change="getLists" />
            </div>
        </el-card>
    </div>
</template>
<script lang="ts" setup name="consumerLists">
import { usePaging } from '@/hooks/usePaging'
import { getRoutePath } from '@/router'
import { getUserList } from '@/api/consumer'
import { ClientMap } from '@/enums/appEnums'
const queryParams = reactive({
    username: '',
    nickname: '',
    role: 2,
})

const { pager, getLists, resetPage, resetParams } = usePaging({
    fetchFun: getUserList,
    params: queryParams
})
onActivated(() => {
    getLists()
})

getLists()
</script>
