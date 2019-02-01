<template>
   <div id="app-header" style="max-width:100% !important" class="grid-container border-bottom">
       <div id="top-header" class="grid-100 tablet-grid-100 container padding-top-38">
            <div class="grid-33 tablet-grid-55   padding-top-17 ">
               
            </div>
            <div class="grid-33 center hide-under-tabel" >
                 <img src="@/assets/images/unis-co.png"  alt="logo" class="unis-logo" />
            </div>
            <div class="grid-33  center tablet-grid-45  position-right" >
                  <div  class="drop-down right " ref="box"  @mouseover="showUserDropdownList" @mouseleave="hideUserDropdownList">
                    <div>
                        <div class="circle">
                            <span  class="circle-font">{{userInfo.username? userInfo.username[0] : ""}}</span> 
                        </div>
                        <div class="pull-down loginname-font" >Hi, {{userInfo.username}}</div>
                        <div class="pull-down">
                        <i class="fa fa-caret-down" ></i>
                        </div>
                    </div>
                    <div class="drop-down-view padding-top-38" v-show="isShowUserDropdownList">
                        <ul>
                            <li>Inbox<b>(2)</b></li>
                        </ul>
                        <div class="padding-top-20"><span><a @click="signOut">Sign Out </a></span></div>
                    </div>
                </div>
             </div>
       </div>
   </div>
</template>
<style lang="scss" src="./app-header.scss"/>
