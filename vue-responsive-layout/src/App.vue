<template>
  <div id="app" class="container">
    <header id="header">
      <ul class="container flex-row-between-center">
        <li>导航一</li>
        <li>导航二</li>
        <li>导航三</li>
        <li>导航五</li>
        <li>导航六</li>
      </ul>
    </header>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  min-height: 100vh;
  margin: auto;
  padding-top: 66px;
  overflow: hidden;
}

#header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 66px;
  background: #fff;
}
</style>
