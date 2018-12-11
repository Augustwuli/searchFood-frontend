<template>
  <div class="recommend">
        <p class="recommend-title">- 为你推荐 -</p>
        <div class="recommend-list">
          <div class="recommend-block" v-for="(item,index) in recommend_list" :key="index">
            <img :src="item.url">
            <div class="recommend-info">
                <p class="info-title">{{item.title}}</p>
                <div class="info-data">
                  <div><img src="../assets/star.png"><span>{{item.star}}</span></div>
                  <div><img src="../assets/read.png"><span>{{item.read}}</span></div>
                  <div><img src="../assets/comment.png"><span>{{item.comment}}</span></div>
                </div>
            </div>
          </div>
        </div>
    </div>
</template>