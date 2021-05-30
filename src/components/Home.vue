<template>
    <div class="home">
        <main>
            <section class="landing">
                <div class="landing-content">
                    <p class="designation">Frontend Developer <strong>+</strong> UI/UX Designer</p>
                    <h1 class="name">ani</h1>
                    <p class="landing-text">
                        I <strong>create</strong> value using <strong>design</strong> and modern <br> <strong>web </strong> technologies.
                    </p>
                </div>
            </section>
            <section class="skills">
                <div class="section-content flex-j">
                    <div class="flex-left">
                        <p class="section-desc">
                            <strong>Sheer curiousity</strong> was the reason I became a Software developer. I wanted to understand
                             the technology that allows me send emails from my mobile to anyone in the world. 
                            In satisfying my curiousity, I have learnt to design and develop product, projects and ideas using
                        </p>
                        <p class="stack-list">
                            Javascript . React . Redux . Vue.js . Vuex . HTML . CSS . Graphql . Restful APIs 
                            . Git . Progressive Web Apps . Responsive Designs . Figma . Adobe XD ...
                        </p>
                        <p class="section-desc">
                            <strong>Beyond Tech</strong>, I enjoy playing my guitar, discovering new sounds, body/mind exercises and mentoring. <br> <br>
                            
                        </p>
                    </div>
                    <div class="flex-right">
                        <h2 class="section-title">
                            skills <br>	and <br> interests
                        </h2>
                    </div>
                </div>
            </section>
            <section class="projects">
                <div class="section-content">
                    <h2 class="section-title">
                        some <br> previous <br> work
                    </h2>
                    <p class="section-desc">
                        <br>
                        <strong>In the past three years</strong>, I have built over thirteen applications, working in the finance industry, with diversifications
                        in Insurance, Fintech, Health, Retail, Education and Community groups. These applications/projects have helped me understand better, the
                        concepts of product ideation until deployment. They have also broadened my experience in tech stack principles and usage, user-focused designs, design thinking, 
                        product design and management, software efficiency and security. Some of my work include:
                    </p>
                    <div class="projects-container">
                        <div class="project flex-j">
                            <a href="https://sterlingonlineaccount.sterling.ng/#/" target="blank">
                                <div class="project-image-background bg-one">
                                    <div class="sterling-online"></div>
                            </div>
                            </a>
                            <div class="project-text">
                                <h4 class="project-title">Sterling Online Account Opening</h4>
                                <p class="project-desc">This is the online web account opening platform of Sterling Bank Plc. 
                                    Prospective customers can open fully functional bank accounts and upload their documents from their comfort places.</p>
                            </div>
                        </div>
                        <div class="project flex-j">
                            <div class="project-text">
                                <h4 class="project-title">TrybeOne</h4>
                                <p class="project-desc">TrybeOne aims to create an intersection between pop culture and finance.
                                    Young people can onboard, open accounts, earn money, invest and learn within the TrybeOne community.
                                </p>
                            </div>
                            <a href="https://trybeone.ng" target="blank">
                                <div class="project-image-background bg-two">
                                    <div class="trybeone"></div>
                                </div>
                            </a>
                        </div>
                        <div class="project flex-j">
                            <a href="https://mizala.co/#/" target="blank">
                                <div class="project-image-background bg-three">
                                    <div class="mizala"></div>
                                </div>
                            </a>
                            <div class="project-text">
                                <h4 class="project-title">Mizala</h4>
                                <p class="project-desc">Want to insure your car with flexible payment options? Mizala helps you achieve that.
                                    Customers can sign up, login, buy weekly or monthly or yearly plan, view their dashboard and payment history and also cancel their plan.
                                </p>
                            </div>
                        </div>
                        <div class="project flex-j">
                            <div class="project-text">
                                <h4 class="project-title">Pencils</h4>
                                <p class="project-desc">Pencils is design concept for a luxury pencil company. 
                                    It basically displays images of the pencils design and allow customer join a waiting list to pre-order them. </p>
                            </div>
                            <a href="https://pencils-creed.netlify.app" target="blank">
                                <div class="project-image-background bg-four">
                                    <div class="pencils"></div>
                                </div>
                            </a>
                        </div>
                        
                        <div class="project flex-j">
                            <a href="https://jemma.netlify.app/" target="blank">
                                <div class="project-image-background bg-five">
                                    <div class="jemma"></div>
                                </div>
                            </a>
                            <div class="project-text">
                                <h4 class="project-title">Jemma</h4>
                                <p class="project-desc">I was thinking a way to solve the issues surrounding getting decent apartments in Lagos. 
                                    I want to help people get very good apartments and save the time spent in checking bad
                                    spaces. This design represents the first step in achieving that.</p>
                            </div>
                        </div>
                        <div class="project flex-j">
                            <div class="project-text">
                                <h4 class="project-title">Pop up Editor</h4>
                                <p class="project-desc">This is a design for a Pop up template editor. The goal is to allow
                                    people customize popups, generate a script and embeded in any project.</p>
                            </div>
                            <a href="https://popuptemplate.netlify.app/#/" target="blank">
                                <div class="project-image-background bg-six">
                                    <div class="popedit"></div>
                                </div>
                            </a>
                        </div>
                        <div class="project flex-j">
                            <a href="https://dribbble.com/Anigray" target="blank">
                                <div class="project-image-background bg-seven">
                                    <div class="dribbble"></div>
                                </div>
                            </a>
                            <div class="project-text">
                                <h4 class="project-title">My Dribbble</h4>
                                <p class="project-desc">Here, you will find some
                                    designs of previous projects not listed here. Others are design ideas or projects I am exploring.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <footer>
            <div class="section-content">
            
            </div>
        </footer>
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
.landing{
    background: url(../assets/images/portbg.svg) no-repeat;
    background-position: center right;
    background-size: cover;
    height: 100vh;
    width: 100%;
}
.landing-content{
    width: 80%;
    margin: 0 auto;
    padding-top: 30px;
    max-width: 1300px;
}
.designation{
    font-size: 16px;
    font-weight: 600;
    color: #574C52;
    text-transform: uppercase;
    letter-spacing: 5px;
    margin-bottom: 15vh;
    font-weight: 700;
}
.name{
    font-family: 'Playfair Display', serif;
    font-size: 20rem;
    color: #131B23;
    line-height: 1;
    letter-spacing: -10px;
}
.landing-text{
    font-weight: 500;
    font-size: 24px;
    color: #574C52
}
strong{
    color: #D1345B
}
.skills{
    background: #E6EFEF;
}
.section-content{
    width: 80%;
    margin: 0 auto;
    padding: 100px 0;
    max-width: 1300px;
}
.flex-j{
    display: flex;
    justify-content: space-between;
}
.section-title{
    font-family: 'Playfair Display', serif;
    font-size: 7rem;
    color: #131B23;
    letter-spacing: -10px;
    line-height: 1;
}
.flex-left{
    margin-right: 50px;
}
.section-desc{
    width: 70%;
    line-height: 1.5;
    font-size: 20px;
    color: #574C52;
    text-align: justify;
}
.stack-list{
    line-height: 1.5;
    font-size: 24px;
    font-weight: 600;
    margin: 30px 0;
    color: #588B8B;
}
.skills .section-desc, .skills .stack-list{
    width: 80%;
    text-align: justify;
}
.projects{
    background: #fff;
}
.projects-container{
    margin: 100px auto 0;
    width: 80%;
}
.project{
    align-items: center;
    margin: 150px 0
}
.project a{
    flex: 2;
}
.project-image-background {
    padding: 25px;
    flex: 2;
    height: 370px;
    cursor: pointer;
}
.bg-one{
    background: rgb(194, 128, 148);
}
.sterling-online{
    background: url(../assets/images/sterlingonline.png) no-repeat;
    background-position: center;
    background-size: contain;
    height: 100%;
    width: 100%;
}
.bg-two{
    background: #588B8B;
}
.trybeone{
    background: url(../assets/images/trybeone.png) no-repeat;
    background-position: center;
    background-size: contain;
    height: 100%;
    width: 100%;
}
.bg-three{
    background: #7F5E85;
}
.mizala{
    background: url(../assets/images/mizala.png) no-repeat;
    background-position: center;
    background-size: contain;
    height: 100%;
    width: 100%;
}
.bg-four{
    background: #D0DDD9;
}
.pencils{
    background: url(../assets/images/pencils.png) no-repeat;
    background-position: center;
    background-size: contain;
    height: 100%;
    width: 100%;
}
.bg-five{
    background: rgb(194, 144, 146);
}
.jemma{
    background: url(../assets/images/jemma.png) no-repeat;
    background-position: center;
    background-size: contain;
    height: 100%;
    width: 100%;
}
.bg-six{
    background: rgb(90, 82, 134);
}
.popedit{
    background: url(../assets/images/popedit.png) no-repeat;
    background-position: center;
    background-size: contain;
    height: 100%;
    width: 100%;
}
.bg-seven{
    background: #ddd;
}
.dribbble{
    background: url(../assets/images/dribbble.png) no-repeat;
    background-position: center;
    background-size: contain;
    height: 100%;
    width: 100%;
}
.project-text{
    flex: 1;
    background: rgb(245, 249, 252);
    padding: 25px;
    height: 100%;
}
.project-title{
    margin-bottom: 10px;
    font-size: 18px;
    letter-spacing: 0.4px;
    color: #574C52;
    font-weight: 600;
}
.project-desc{
    line-height: 1.5;
    color: #574C52;
    text-align: justify;
}
footer{
    background: #ECE9EB;

}
@media only screen and (max-width: 900px) {
.designation{
    font-size: 13px;
    letter-spacing: 3px;
    margin-bottom: 15vh;
}
.name{
    font-size: 12rem;
}
.landing-text{
    font-size: 20px;
}
.landing-text br{
    display: none
}
.section-content{
    padding: 70px 0;
}
.skills .flex-j{
    display: flex;
    justify-content: space-between;
    flex-direction: column-reverse;
}
.section-title{
    font-size: 3rem;
    letter-spacing: -4px;
    line-height: 1;
}
.flex-left{
    margin-right: 0px;
}
.section-desc{
    width: 100%;
    color: #574C52;
    margin-top: 20px
}
.stack-list{
    font-size: 24px;
}
.skills .section-desc, .skills .stack-list{
    width: 100%;
    text-align: justify;
}
.skills .stack-list{
    text-align: left;
}
.projects .flex-j{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}
.projects-container{
    margin: 100px auto 0;
    width: 100%;
}
.project{
    align-items: center;
    margin: 50px 0
}
.project a{
    flex: 2;
}
.project-image-background {
    padding: 20px;
    height: 180px;
    width: 300px;
}
.project-text{
    padding: 15px;
    width: 100%;
}
.project-title{
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 600;
}




}
</style>
