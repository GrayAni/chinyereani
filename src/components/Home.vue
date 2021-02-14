<template>
    <div class="home">
        <main>
            <div class="black-overlay">
            </div>
            <div class="white-overlay">
                  <navbar/>
                  <sociallinks/>
                  <section class="landing">
                      <div class="frame left-frame">

                      </div>
                      <div class="landing-content">
                          <div class="landing-image">

                          </div>
                          <div class="intro-text">
                              <h1 class="bold-text">Hello there!</h1>
                              <p class="desc-text">
                                  As someone who is passionate about Software, I have been committed to designing and developing useful application bla bla
                              </p>
                              <button class="primary-button">View my work</button>
                              <div class="name-pad">
                                  <p class="avatar"></p>
                                  <div class="name">
                                      <h4>Chinyere Ani</h4>
                                      <p>Frontend Developer, UI/UX Designer</p>

                                  </div>
                              </div>
                          </div>
                      </div>

                      <div class="frame right-frame">

                      </div>

                  </section>
                  <section class="about">
                      <div class="section-content"
                      data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in" data-aos-duration="500">
                          <h1 class="section-text">About <span>Me</span></h1>
                          <p class="section-body-text">
                              Sheer curiousity was the reason I became a Software Developer.
                          </p>
                          <p class="section-body-text">
                              I found myself constantly intrigued by how things worked. How I could type a
                              message on my phone and my friend, three continents away,
                              receives it, or, how I use my bank app in transfering money to my mother?
                          </p>
                          <p class="section-body-text">
                              I was intrigued and decided to indulge in learning and today, I can build web frontend using: 
                          </p>
                          <div class="stacks-container">
                              <div class="stack">
                                  <p class="stack-logo html-logo">

                                  </p>
                                  <p class="stack-name">
                                      HTML
                                  </p>
                              </div>

                              <div class="stack">
                                  <p class="stack-logo css-logo">

                                  </p>
                                  <p class="stack-name">
                                      CSS
                                  </p>
                              </div>

                              <div class="stack">
                                  <p class="stack-logo javascript-logo">

                                  </p>
                                  <p class="stack-name">
                                      JAVASCRIPT
                                  </p>
                              </div>

                              <div class="stack">
                                  <p class="stack-logo vuejs-logo">

                                  </p>
                                  <p class="stack-name">
                                      VUE JS
                                  </p>
                              </div>

                              <div class="stack">
                                  <p class="stack-logo react-logo">

                                  </p>
                                  <p class="stack-name">
                                      REACT JS
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div class="section-image">

                      </div>

                  </section>

            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data () {
        return {
          
        }
    }
}
</script>

<style scoped>
.black-overlay{
    background: hsl(45, 70%, 70%);
    height: 100vh;
    width: 100%;
    animation: slide-right 1000ms ease-in-out
}
.white-overlay{
    background: #fff;
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    animation: slide-left 1000ms ease-in-out

}
@keyframes slide-right {
    0%{
        transform: translateX(-100vw)
    }
    100%{
        transform: translateX(100vw);
        opacity: 0;
    }
}
@keyframes slide-left {
    0%{
        transform: translateX(100vw);
        opacity: 0;
    }
    50%{
      opacity: 0;
    }
    100%{
        transform: translateX(0);
        opacity: 1;
        
    }
}

.landing{
    width: 85%;
    margin: 0 auto ;
    display: flex;
    padding: 5vh 0 10vh;
}
.frame{
    border-top: 10px solid #333;
    border-left: 10px solid #333;
    width: 100px;
    height: 75vh;
    flex: 1;
}
.right-frame{
    transform: rotate(180deg);
}
.landing-content{
    flex: 8;
    padding: 50px 0
}
.landing-content{
    display: flex;
    align-items: center;
}
.landing-image{
    background: url(../assets/images/shadow.jpeg)no-repeat;
    background-size: contain;
    flex: 0.7;
    height: 65vh;
    margin-right: 50px;
}
.bold-text{
    font-size: 4rem;
    color: #333;
    width: max-content;
    letter-spacing: 1px;
}
.desc-text{
    color: #555;
    line-height: 1.5;
    width: 450px;
    font-size: 17px;
}
.avatar{
    background: url(../assets/images/avatar.svg)no-repeat;
    background-size: contain;
    width: 50px;
    height: 50px;
    margin-right: 10px;
}
.name-pad{
    display: flex;
    align-items: center;
    position: relative;
    bottom: -23vh;
    right: -45%;
    float: right;
}
.name h4{
    color: #555;
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 3px;
}
.name p{
    color: #999;
    font-size: 15px;
    letter-spacing: 0.1px;
    font-weight: bold;
    margin-bottom: 3px;
}



.about{
    height: 100vh;
    background-size: cover;
    display: flex;
    align-items: center;
    
}
.section-content{
    padding: 100px 0;
    padding-left: 7.5%;
    /* width: 85%; */
    margin: 0 auto;
    flex: 1;
    margin-right: 100px;
}
.section-image{
    background: url(../assets/images/workstation.jpeg)no-repeat;
    background-size: cover;
    flex: 1;
    height: 100vh;
}
.section-text{
    font-size: 3rem;
    color: #333;
    width: max-content;
    letter-spacing: 3px;
    margin-bottom: 30px;
}
.section-text span{
    color: hsl(45, 70%, 50%)
}
.section-body-text{
    color: #555;
    line-height: 1.5;
    font-size: 16px;
    margin-bottom: 15px;
}
.stacks-container{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.stack{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.stack-name{
  font-weight: 600;
  color: hsl(210, 10%, 50%);
  letter-spacing: 0.5px;
  font-size: 14px;
}
.stack-logo{
    margin-right: 10px;
    width: 30px;
    height: 30px;
}
.html-logo{
    background: url(../assets/images/html.svg)no-repeat;
    background-size: contain;
    width: 30px;
    height: 30px;
}
.css-logo{
    background: url(../assets/images/css.svg)no-repeat;
    background-size: contain;
    width: 30px;
    height: 30px;
}
.javascript-logo{
    background: url(../assets/images/javascript.png)no-repeat;
    background-size: contain;
    width: 30px;
    height: 30px;
}
.vuejs-logo{
    background: url(../assets/images/vuejs.png)no-repeat;
    background-size: contain;
    width: 30px;
    height: 30px;
}
.react-logo{
    background: url(../assets/images/react.svg)no-repeat;
    background-size: contain;
    width: 30px;
    height: 30px;
}
</style>
