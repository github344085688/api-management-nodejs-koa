<template>

  <el-select v-model="selectValue"
             :filterable="filterable"
             :clearable="clearable"
             ref="input"
             no-match-text="No Data"
             placeholder="Select"
             :remote-method="remoteSearchMethod"
             @change="selectChange">
    <el-option
      v-for="item in options"
      :key="item"
      :label="item"
      :value="item">
    </el-option>
  </el-select>

</template>
<style lang="scss" src="./element-select.scss">
