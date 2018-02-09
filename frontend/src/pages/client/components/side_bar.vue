<template>
  <div class="box">
    <div class="box-body">
      <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
          <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
              </span>
        </div>
      </form>
      <hr>
      <strong><i class="fa fa-pencil margin-r-5"></i> 归档</strong>
      
      <ul class="text-muted side-item">
        <li>2018-11-12</li>
        <li>2018-11-12</li>
      </ul>
      
      <hr>
      
      <strong><i class="fa fa-tags margin-r-5"></i> 标签</strong>
      
      <p class="side-item">
        <span class="label tag">UI Design</span>
        <span class="label tag">bbbbbbbbbbbbbb</span>
        <span class="label tag">aaaaaaaaaaaaaa</span>
      </p>
    </div>
  </div>
</template>
<script>
</script>
<style>
  .btn {
    margin-bottom: 0px;
  }

  .skin-blue .sidebar-form input[type="text"], .skin-blue .sidebar-form .btn {
    background-color: white;
  }
  
  .side-item {
    margin-left: 10px;
    margin-top: 5px;
  }
  
  .tag {
    background-color: #5bc0de;
    margin-bottom: 5px;
  }
  
  .label {
    display: inline-block;
    padding: 6px;
  }
</style>
