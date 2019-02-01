<template>
  <div id="api-management">
    <div class="row grid-100 tablet-grid-100 container simple-landing">

    </div>
    <div class="grid-100 tablet-grid-100 container margin-top-30">
      <div class="grid-30 tablet-grid-30 container">
        <label class="grid-20 input-label text-right margin-left-30 line-height-35" >{{searchInfo.company}}</label>
        <element-select class="grid-50" :options="companies" @selectChange="onselectChange"
                        v-model="searchInfo.company"></element-select>
      </div>
      <div class="grid-30 tablet-grid-30 container">
        <label class="grid-20 input-label text-right line-height-35">{{searchInfo.system}}:</label>
        <element-select class="grid-50" :filterable="true" :clearable="true" :options="systems"
                        v-model="searchInfo.system"></element-select>


      </div>
      <div class="grid-30 tablet-grid-30 container">
        <label class=" grid-20 input-label text-right line-height-35">{{searchInfo.page}}:</label>
        <element-select class="grid-50" :filterable="true" :clearable="true" :options="pages"
                        v-model="searchInfo.page"></element-select>

      </div>
      <div class="grid-10 tablet-grid-10 container">
        <button type="button" style="background-color: #f7b020;">Proceed</button>
      </div>
    </div>
    <div class="grid-100 tablet-grid-100 margin-top-80" v-loading="loading">
      <table class="table-client management">
        <thead>
        <tr>
          <th>Field Name</th>
          <th>Type</th>
          <th class="min-width-130">Mapped Name</th>
          <th>Description</th>
          <th>Required For TMS</th>
          <th>Required For WMS</th>
          <th>Required For OSS</th>
          <th>Is Displayed</th>
          <th>TAB Sequence</th>
          <th>Is Active</th>
          <th class="min-width-250">Note</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(fieldDef, key,index) in receiptFields" :key="key">
          <td>{{key}}</td>
          <td class="type-field">{{fieldDef.type}} {{fieldDef.enum ? fieldDef.enum : ''}}</td>
          <td><input type="text"></td>
          <td>{{fieldDef.description}}</td>
          <td>
            <div class="flex">
              <input type="checkbox" :id="'TMS'+index">
              <label :for="'TMS'+index" class="checkbox"></label>
            </div>
          </td>
          <td>
            <div class="flex">
              <input type="checkbox" :id="'WMS'+index">
              <label :for="'WMS'+index" class="checkbox"></label>
            </div>
          </td>
          <td>
            <div class="flex">
              <input type="checkbox" :id="'OSS'+index">
              <label :for="'OSS'+index" class="checkbox"></label>
            </div>
          </td>
          <td>
            <div class="flex">
              <input type="checkbox" :id="'display'+index">
              <label :for="'display'+index" class="checkbox"></label>
            </div>
          </td>
          <td>
            <element-select :filterable="true" :clearable="true" :options="sequences"
                            v-model="searchInfo.companyId"></element-select>

          </td>
          <td>
            <div class="flex">
              <input type="checkbox" :id="'active'+index">
              <label :for="'active'+index" class="checkbox"></label>
            </div>
          </td>

          <td><input type="text"></td>
        </tr>

        </tbody>
      </table>
    </div>
    <div class="grid-100 tablet-grid-100 container margin-top-30" v-show="!loading">
      <div class="grid-90 tablet-grid-90 ">
        &nbsp;
      </div>
      <div class="grid-10 tablet-grid-20 margin-bottom-35">
        <button type="button" style="background-color:#ef775c;">Confirm Change</button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" src="./api-management.scss">


