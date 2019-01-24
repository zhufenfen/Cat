<template>
  <div class="discover">
    <div class="big">
      <div class="lefts">
        <div class="left" @click="$router.push('/details')">
          <div class="up">
            <img src="../../../../static/communityImg/img-fx-1@2x.png" alt>
          </div>
          <div class="bot">
            <p>
              <span class="one">捕获一只小可爱</span>
              <span class="two">
                <img src="../../../../static/communityImg/icon-xin-3@2x.png" alt>
              </span>
              <span class="thr">56</span>
            </p>
            <div>
              <div class="img"></div>
              <span class="last">樱花味女孩</span>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="up">
            <img src="../../../../static/communityImg/img-fx-3@2x.png" alt>
          </div>
          <div class="bot">
            <p>
              <span class="one">小短腿</span>
              <span class="two">
                <img src="../../../../static/communityImg/icon-xin-3@2x.png" alt>
              </span>
              <span class="thr">369</span>
            </p>
            <div>
              <div class="img"></div>
              <span class="last">西芹百合</span>
            </div>
          </div>
        </div>
      </div>
      <div class="rights">
        <div class="right">
          <div class="up">
            <img src="../../../../static/communityImg/img-fx-2@2x.png" alt>
          </div>
          <div class="bot">
            <p>
              <span class="one">小短腿</span>
              <span class="two">
                <img src="../../../../static/communityImg/icon-xin-3@2x.png" alt>
              </span>
              <span class="thr">369</span>
            </p>
            <div>
              <div class="img"></div>
              <span class="last">西芹百合</span>
            </div>
          </div>
        </div>
        <div class="left">
          <div class="up">
            <img src="../../../../static/communityImg/img-fx-4@2x.png" alt>
          </div>
          <div class="bot">
            <p>
              <span class="one">捕获一只小可爱</span>
              <span class="two">
                <img src="../../../../static/communityImg/icon-xin-3@2x.png" alt>
              </span>
              <span class="thr">56</span>
            </p>
            <div>
              <div class="img"></div>
              <span class="last">樱花味女孩</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="big">
      <div class="lefts">
        <div class="left">
          <div class="up">
            <img src="../../../../static/communityImg/img-fx-5@2x.png" alt>
          </div>
          <div class="bot">
            <p>
              <span class="one">捕获一只小可爱</span>
              <span class="two">
                <img src="../../../../static/communityImg/icon-xin-3@2x.png" alt>
              </span>
              <span class="thr">56</span>
            </p>
            <div>
              <div class="img"></div>
              <span class="last">樱花味女孩</span>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="up">
            <img src="../../../../static/communityImg/img-fx-6@2x.png" alt>
          </div>
          <div class="bot">
            <p>
              <span class="one">小短腿</span>
              <span class="two">
                <img src="../../../../static/communityImg/icon-xin-3@2x.png" alt>
              </span>
              <span class="thr">369</span>
            </p>
            <div>
              <div class="img"></div>
              <span class="last">西芹百合</span>
            </div>
          </div>
        </div>
      </div>
      <div class="rights">
        <div class="right">
          <div class="up">
            <img src="../../../../static/communityImg/img-fx-6@2x.png" alt>
          </div>
          <div class="bot">
            <p>
              <span class="one">小短腿</span>
              <span class="two">
                <img src="../../../../static/communityImg/icon-xin-3@2x.png" alt>
              </span>
              <span class="thr">369</span>
            </p>
            <div>
              <div class="img"></div>
              <span class="last">西芹百合</span>
            </div>
          </div>
        </div>
        <div class="left">
          <div class="up">
            <img src="../../../../static/communityImg/img-fx-4@2x.png" alt>
          </div>
          <div class="bot">
            <p>
              <span class="one">捕获一只小可爱</span>
              <span class="two">
                <img src="../../../../static/communityImg/icon-xin-3@2x.png" alt>
              </span>
              <span class="thr">56</span>
            </p>
            <div>
              <div class="img"></div>
              <span class="last">樱花味女孩</span>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
body,
html {
  font-family: MicrosoftYaHei;
}
.discover {
  width: 100%;
  height: 100vh;
  padding-top: 0.2rem;
  flex-wrap: wrap;
  overflow-y: auto;
  .big {
    width: 100%;
    display: flex;
    justify-content: space-around;
    .lefts {
      width: 3.36rem;

      .left {
        width: 3.36rem;
        height: 4.86rem;
        float: left;
        margin-bottom: 0.2rem;
        .up {
          width: 100%;
          height: 3.4rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .bot {
          width: 3.37rem;
          height: 1.46rem;
          background: #fff;
          border-radius: 0 0 12px 12px;
          p {
            width: 100%;
            display: flex;
            justify-content: flex-left;
            font-size: 0.18rem;
            padding-top: 0.2rem;
            padding-bottom: 0.15rem;
            .one {
              display: inline-block;
              margin-left: 0.2rem;
            }
            .two {
              width: 0.18rem;
              height: 0.16rem;
              margin-left: 1.22rem;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .thr {
              width: 0.33rem;
              color: #ff9797;
              margin-left: 0.1rem;
            }
          }
          div {
            width: 100%;
            display: flex;
            justify-content: flex-left;
            .img {
              width: 0.64rem;
              height: 0.64rem;
              border-radius: 50%;
              background: greenyellow;
              display: inline-block;
              margin-left: 0.2rem;
            }
            .last {
              display: inline-block;
              font-size: 0.14rem;
              height: 0.64rem;
              line-height: 0.64rem;
              margin-left: 0.2rem;
              letter-spacing: 0.04rem;
            }
          }
        }
      }
      .right {
        width: 3.36rem;
        height: 3.4rem;
        float: left;
        margin-bottom: 0.2rem;
        .up {
          width: 100%;
          height: 2.2rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .bot {
          width: 3.37rem;
          height: 1.2rem;
          background: #fff;
          border-radius: 0 0 12px 12px;
          p {
            width: 100%;
            display: flex;
            justify-content: flex-left;
            font-size: 0.18rem;
            line-height: 0.5rem;
            .one {
              display: inline-block;
              margin-left: 0.2rem;
            }
            .two {
              width: 0.18rem;
              height: 0.16rem;
              margin-left: 1.9rem;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .thr {
              width: 0.33rem;
              // height: 0.20rem;
              color: #ff9797;
              margin-left: 0.1rem;
            }
          }
          div {
            width: 100%;
            display: flex;
            justify-content: flex-left;
            .img {
              width: 0.64rem;
              height: 0.64rem;
              border-radius: 50%;
              background: magenta;
              display: inline-block;
              margin-left: 0.2rem;
            }
            .last {
              display: inline-block;
              font-size: 0.14rem;
              height: 0.64rem;
              line-height: 0.64rem;
              margin-left: 0.2rem;
              letter-spacing: 0.04rem;
            }
          }
        }
      }
    }
    .rights {
      width: 3.36rem;
      .left {
        width: 3.36rem;
        height: 4.86rem;
        float: left;
        margin-bottom: 0.2rem;
        .up {
          width: 100%;
          height: 3.4rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        /**/
        .bot {
          width: 3.37rem;
          height: 1.46rem;
          background: #fff;
          border-radius: 0 0 12px 12px;
          p {
            width: 100%;
            display: flex;
            justify-content: flex-left;
            font-size: 0.18rem;
            padding-top: 0.2rem;
            padding-bottom: 0.15rem;
            .one {
              display: inline-block;
              margin-left: 0.2rem;
            }
            .two {
              width: 0.18rem;
              height: 0.16rem;
              margin-left: 1.22rem;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .thr {
              width: 0.33rem;
              color: #ff9797;
              margin-left: 0.1rem;
            }
          }
          div {
            width: 100%;
            display: flex;
            justify-content: flex-left;
            .img {
              width: 0.64rem;
              height: 0.64rem;
              border-radius: 50%;
              background: greenyellow;
              display: inline-block;
              margin-left: 0.2rem;
            }
            .last {
              display: inline-block;
              font-size: 0.14rem;
              height: 0.64rem;
              line-height: 0.64rem;
              margin-left: 0.2rem;
              letter-spacing: 0.04rem;
            }
          }
        }
      }
      .right {
        width: 3.36rem;
        height: 3.4rem;
        float: left;
        // margin-left: 0.25rem;
        margin-bottom: 0.2rem;
        .up {
          width: 100%;
          height: 2.2rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .bot {
          width: 3.37rem;
          height: 1.2rem;
          background: #fff;
          border-radius: 0 0 12px 12px;
          p {
            width: 100%;
            display: flex;
            justify-content: flex-left;
            font-size: 0.18rem;
            line-height: 0.5rem;
            .one {
              display: inline-block;
              margin-left: 0.2rem;
            }
            .two {
              width: 0.18rem;
              height: 0.16rem;
              margin-left: 1.9rem;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .thr {
              width: 0.33rem;
              // height: 0.20rem;
              color: #ff9797;
              margin-left: 0.1rem;
            }
          }
          div {
            width: 100%;
            display: flex;
            justify-content: flex-left;
            .img {
              width: 0.64rem;
              height: 0.64rem;
              border-radius: 50%;
              background: magenta;
              display: inline-block;
              margin-left: 0.2rem;
            }
            .last {
              display: inline-block;
              font-size: 0.14rem;
              height: 0.64rem;
              line-height: 0.64rem;
              margin-left: 0.2rem;
              letter-spacing: 0.04rem;
            }
          }
        }
      }
    }
  }
}
</style>