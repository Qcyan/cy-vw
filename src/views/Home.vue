<template>
  <div class="mod_nav">
    <nav class="mod_nav_list">
      <a href="#" class="mod_nav_list_item">
        			<span class="mod_nav_list_item_logo">
        				<img src="http://jdc.jd.com/img/80">
        			</span>
        <p class="mod_nav_list_item_name">导航入口</p>
      </a>
      <a href="#" class="mod_nav_list_item">
        			<span class="mod_nav_list_item_logo">
        				<img src="http://jdc.jd.com/img/80">
        			</span>
        <p class="mod_nav_list_item_name">导航入口</p>
      </a>
      <a href="#" class="mod_nav_list_item">
        			<span class="mod_nav_list_item_logo">
        				<img src="http://jdc.jd.com/img/80">
        			</span>
        <p class="mod_nav_list_item_name">导航入口</p>
      </a>
      <a href="#" class="mod_nav_list_item">
        			<span class="mod_nav_list_item_logo">
        				<img src="http://jdc.jd.com/img/80">
        			</span>
        <p class="mod_nav_list_item_name">导航入口</p>
      </a>
      <a href="#" class="mod_nav_list_item">
        			<span class="mod_nav_list_item_logo">
        				<img src="http://jdc.jd.com/img/80">
        			</span>
        <p class="mod_nav_list_item_name">导航入口</p>
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'home',

}
</script>


<style lang="scss" scoped>
  .mod_nav {
    background-color: #fff;
    &_list {
      display: flex;
      padding: vw(15) vw(10) vw(10); // 内间距
      &_item {
        flex: 1;
        text-align: center;
        font-size: vw(18); // 字体大小
        &_logo {
          display: block;
          margin: 0 auto;
          width: vw(40); // 宽度
          height: vw(40); //高度
          img {
            display: block;
            margin: 0 auto;
            max-width: 100%;
          }
        }
        &_name {
          margin-top: vw(2);
        }
      }
    }
  }
</style>
