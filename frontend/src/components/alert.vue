<template>
  <div class="alert" :class="clas">
    <h4><i class="icon fa " :class="icon"></i> {{title}}</h4>
    {{message}}
  </div>
</template>
<script>
  import SYS_VAR from '../config/system'
  export default {
  	props: ['type', 'message'],
    data(){
      return {
      	title : '',
        clas  : {},
        icon  : {}
      }
    },
    mounted(){
      switch(this.type) {
        case SYS_VAR.NOTIFY_TYPE.SUCCESS  : this.icon['fa-check'] = true; this.clas['alert-success'] = true; this.title = '操作成功'; break;
        case SYS_VAR.NOTIFY_TYPE.FAIL     : this.icon['fa-times'] = true; this.clas['alert-danger'] = true; this.title = '操作失败'; break;
        case SYS_VAR.NOTIFY_TYPE.WARN     : this.icon['fa-warning'] = true; this.clas['alert-warning'] = true; this.title = '警告'; break;
        default : break;
      }
    },
  }
</script>
<style scoped>
  .alert {
    width: 300px;
    position: fixed;
    z-index: 10000;
    top: 50px;
    right: 0px;
  }
</style>
