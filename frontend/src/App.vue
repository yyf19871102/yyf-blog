<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'app',
    mounted:function(){
      document.body.setAttribute('class', 'skin-blue sidebar-mini wysihtml5-supported');
    },
    created() {},
  }
</script>
<style>
  .content-wrapper {
    min-height: 900px;
  }
  .ivu-table {
    font-size: 14px;
  }
  .alert {
    margin-bottom: 10px;
  }
  .table-container {
    padding: 5px;
  }
  
  .btn {
    margin-bottom: 5px;
  }
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity 3s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
  }
  .page {
    float: right;
    margin-top: 10px;
  }
  .confirm-body {
    text-align: center;
    font-size: 20px;
  }
  .tree-hover:hover{
    cursor: pointer;
  }
  .tree-container{
    font-size: 14px;
    margin: 5px;
  }
  .tree-ul li ul {
    padding: 0 0 0 10px;
  }
  .tree-checkbox{
    margin-left: 6px;
    margin-right: 6px;
  }
  
  .mini-button {
    display: inline-block;
    border-radius: 2px;
    color: white;
    font-size: 12px;
    padding: 2px 10px 2px 5px;
    cursor: pointer;
  }
  .add {
    background-color: #00a65a;
  }
  .remove {
    background-color: #dd4b39;
  }
  .update {
    background-color: #00A6C7;
  }
  .view {
    background-color: #f4f4f4;
    border:1px solid #ddd;
    color: #444;
  }
  .tree-nodename{
    cursor: pointer;
  }
  .line {
    border: 0;
    
    height: 1px;
    
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
  }
  .forbidden {
    cursor: not-allowed;
  }
  .not-data {
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 16px;
    
    text-align: center;
    border-style: solid;
    border-width: 1px;
    border-color: #f9f9f9;
  }
  .table-no {
    width: 30px;
    text-align: center;
  }
</style>
