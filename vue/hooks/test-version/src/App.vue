<script setup>
import { useMouse } from './hooks/useMouse.js'
import { useTodos } from './hooks/useTodos.js'
// mvvm 响应式， 数据绑定，状态管理，生命周期， hooks
// 页面上晃来晃去，显示鼠标的x, y 坐标
// 三明治
const {x, y} = useMouse();
const { 
  title, 
  todos, 
  addTodo, 
  clear, 
  active, 
  all, 
  allDone 
} = useTodos()

</script>

<template>
  <div>
  <!-- 数据绑定 -->
  {{x}}  {{y}}

    <div>
      <!-- v-model 双向绑定指令  -->
       <!-- vue 事件绑定 @ 修饰符 enter  -->
      <input type="text" v-model="title" @keydown.enter="addTodo">
      <!-- v-if  vue指令 true 显示 -->
      <button v-if="active < all" @click="clear">清理</button>
      <ul v-if="todos.length">
        <!-- v-for 循环指令 -->
        <li v-for="todo in todos">
          <input type="checkbox" v-model="todo.done" />
          <span>{{todo.title}}</span>
        </li>
      </ul>
      <div v-else>暂无数据</div>
      <div>
        全选
        <input type="checkbox" v-model="allDone" />
        <span>{{ active }} / {{all}} </span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
