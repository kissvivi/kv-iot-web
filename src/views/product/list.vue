<template>
    <div class="device-management">
      <div class="card">
        <div class="card-header">
          <h2>设备列表</h2>
          <el-button type="primary" @click="showAddDeviceDialog = true">添加设备</el-button>
        </div>
        <el-table :data="devices" style="width: 100%" stripe>
          <el-table-column type="index" label="序号" width="80"></el-table-column>
          <el-table-column prop="name" label="设备名称" width="150"></el-table-column>
          <el-table-column prop="device_no" label="设备编号" width="150"></el-table-column>
          <el-table-column prop="desc" label="设备描述"></el-table-column>
          <el-table-column prop="last_time" label="最后在线时间" width="180"></el-table-column>
          <el-table-column prop="sub_device" label="是否子设备" width="120">
            <template slot-scope="{ row }">
              {{ row.sub_device ? '是' : '否' }}
            </template>
          </el-table-column>
          <el-table-column label="操作" width="180">
            <template slot-scope="{ row }">
              <el-button type="text" @click="editDevice(row)">编辑</el-button>
              <el-button type="text" @click="deleteDevice(row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
  
      <el-dialog v-model="showAddDeviceDialog" title="添加设备" @close="cancelAddDevice">
        <el-form ref="deviceForm" :model="newDevice" :rules="deviceFormRules" label-width="100px" style="max-width: 400px; margin: 0 auto;">
          <el-form-item label="设备名称" prop="name">
            <el-input v-model="newDevice.name"></el-input>
          </el-form-item>
          <el-form-item label="设备编号" prop="device_no">
            <el-input v-model="newDevice.device_no"></el-input>
          </el-form-item>
          <el-form-item label="设备描述" prop="desc">
            <el-input v-model="newDevice.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="confirmAddDevice">确定</el-button>
            <el-button @click="cancelAddDevice">取消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
  
      <el-dialog v-model="showEditDeviceDialog" title="编辑设备" @close="cancelEditDevice">
        <el-form ref="editDeviceForm" :model="editDeviceData" :rules="deviceFormRules" label-width="100px" style="max-width: 400px; margin: 0 auto;">
          <el-form-item label="设备名称" prop="name">
            <el-input v-model="editDeviceData.name"></el-input>
          </el-form-item>
          <el-form-item label="设备编号" prop="device_no">
            <el-input v-model="editDeviceData.device_no"></el-input>
          </el-form-item>
          <el-form-item label="设备描述" prop="desc">
            <el-input v-model="editDeviceData.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="confirmEditDevice">确定</el-button>
            <el-button @click="cancelEditDevice">取消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { IDeviceApiParams, ResType } from './types';
  
  export default defineComponent({
    name: 'DeviceManagement',
    data() {
      return {
        devices: [] as IDeviceApiParams[],
        showAddDeviceDialog: false,
        newDevice: {} as IDeviceApiParams,
        deviceFormRules: {
          name: [{ required: true, message: '请输入设备名称', trigger: 'blur' }],
          device_no: [{ required: true, message: '请输入设备编号', trigger: 'blur' }],
          desc: [{ required: true, message: '请输入设备描述', trigger: 'blur' }]
        },
        showEditDeviceDialog: false,
        editDeviceData: {} as IDeviceApiParams,
        editDeviceId: 0
      };
    },
    mounted() {
      this.getAllDevices();
    },
    methods: {
      async getAllDevices() {
        try {
          const response: ResType<IDeviceApiParams[]> = await deviceApi.getAllDevice();
          if (response.code === 0) {
            this.devices = response.data || [];
          } else {
            console.error('获取设备列表失败:', response.msg);
          }
        } catch (error) {
          console.error('获取设备列表异常:', error);
        }
      },
      addDevice() {
        this.showAddDeviceDialog = true;
      },
      async confirmAddDevice() {
        try {
          await deviceApi.createDevice(this.newDevice);
          this.cancelAddDevice();
          this.getAllDevices();
        } catch (error) {
          console.error('添加设备失败:', error);
        }
      },
      cancelAddDevice() {
        this.showAddDeviceDialog = false;
        this.resetAddDeviceForm();
      },
      resetAddDeviceForm() {
        this.$refs.deviceForm.resetFields();
        this.newDevice = {} as IDeviceApiParams;
      },
      editDevice(device: IDeviceApiParams) {
        this.editDeviceId = device.ID;
        this.editDeviceData = { ...device };
        this.showEditDeviceDialog = true;
      },
      async confirmEditDevice() {
        try {
          await deviceApi.updateDevice(this.editDeviceId, this.editDeviceData);
          this.cancelEditDevice();
          this.getAllDevices();
        } catch (error) {
          console.error('编辑设备失败:', error);
        }
      },
      cancelEditDevice() {
        this.showEditDeviceDialog = false;
        this.resetEditDeviceForm();
      },
      resetEditDeviceForm() {
        this.$refs.editDeviceForm.resetFields();
        this.editDeviceData = {} as IDeviceApiParams;
        this.editDeviceId = 0;
      },
      async deleteDevice(device: IDeviceApiParams) {
        try {
          await deviceApi.deleteDevice(device.ID);
          this.getAllDevices();
        } catch (error) {
          console.error('删除设备失败:', error);
        }
      }
    }
  });
  </script>
  
  <style scoped>
  .device-management {
    padding: 20px;
  }
  .card {
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    padding: 20px;
  }
  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  </style>
  