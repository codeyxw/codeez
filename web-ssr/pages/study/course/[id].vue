<template>
    <div class="section">
        <div class="yx-container">
            <div class="main">
                <h2>「小白」荣耀Magic7全系测评：标准/Pro全堆满？</h2>
                <div class="video-info">
                    <div class="i-tabler-brand-youtube text-xl"></div> <span>1573</span>
                </div>
                <video ref="codeezplayer" class="video-js mt-4" controls preload="auto"
                    poster="//vjs.zencdn.net/v/oceans.png">
                    <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
                    </source>
                    <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm">
                    </source>
                    <source src="//vjs.zencdn.net/v/oceans.ogv" type="video/ogg">
                    </source>
                    <p class="vjs-no-js">
                        To view this video please enable JavaScript, and consider upgrading to a
                        web browser that
                        <a href="https://videojs.com/html5-video-support/" target="_blank">
                            supports HTML5 video
                        </a>
                    </p>
                </video>
                <div class="operate">
                    <div class="flex">
                        <div class="flex flex-items-center mr-6">
                            <div class="i-tabler-thumb-up text-xl"></div>
                            <span>12</span>
                        </div>
                        <div class="flex flex-items-center mr-6">
                            <div class="i-tabler-message text-xl"></div>
                            <span>22</span>
                        </div>
                        <div class="flex flex-items-center mr-6">
                            <div class="i-tabler-star text-xl"></div>
                            <span>2</span>
                        </div>
                        <div class="flex flex-items-center mr-6">
                            <div class="i-tabler-share-3 text-xl"></div>
                            <span>22</span>
                        </div>
                    </div>
                </div>
                <div class="introduction">简介</div>
                <div class="comment">评论</div>
            </div>
            <div class="aside">
                <div class="author">
                    <img src="/avatar.png" alt="">
                    <div class="author-info">
                        <div class="name">你的大坝</div>
                        <div class="desc">一点点的描述</div>
                        <div>
                            <button class="follow-btn">关注</button>
                            <button class="mess-btn">私信</button>
                        </div>
                    </div>
                </div>
                    <div class="catalog">
                        <div class="title">目录</div>
                        <ul class="list">
                            <li>第一季</li>
                            <li>第二季</li>
                            <li>第三季</li>
                        </ul>
                    </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

let player
let codeezplayer = ref(null)

onMounted(() => {
    player = videojs(codeezplayer.value, {
        width: '848',
        height: '477'
    }, function onPlayerReady() {
        videojs.log('Your player is ready!');
    })
})
onBeforeUnmount(() => {
    if (player) {
        player.dispose()
    }
})
</script>
<style lang="scss" scoped>
.section {
    padding-top: 80px;

    .yx-container {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;

        .main {
            width: 860px;
            background-color: #fff;
            h2 {
                font-size: 20px;
            }
            .video-info {
                margin-top: 8px;
                display: flex;
                align-items: center;
                padding-left: 10px;
                color: #ccc;
            }
            .introduction {
                margin-top: 20px;
            }
            .operate {
                margin-top: 12px;
                color: #ccc;
            }
            .comment {
                margin-top: 12px;
            }
        }
        .aside {
            width: 320px;
            .author {
                display: flex;
                align-items: center;
                img {
                    width: 56px;
                    height: 56px;
                    border-radius: 50%;
                    margin-right: 8px;
                }
                .author-info{
                    .name {

                    }
                    .desc{
                        margin-top: 6px;
                        font-size: 14px;
                        color: #ccc;
                    }
                    .follow-btn, .mess-btn{
                        margin-top: 8px;
                        font-size: 12px;
                        width: 80px;
                        height: 28px;
                        padding: 6px 12px;
                        box-sizing: border-box;
                    }
                    .follow-btn{
                        background-color: #0889ce;
                        color: #fff;
                        border: none;
                        margin-right: 8px;
                    }
                    .mess-btn{
                        border: 1px solid #0889ce;
                        background-color: #fff;
                        color: hsl(201, 93%, 42%);
                    }
                }
            }
            .catalog {
                padding: 12px;
                margin-top: 18px;
                background-color: #f0f0f0;
                box-sizing: border-box;
                .title {
                    font-size: 16px;
                    border-bottom: 1px solid #ccc;
                    padding-bottom: 12px;
                }
                ul{
                    margin-top: 12px;
                }
            }
        }
    }
}
</style>
