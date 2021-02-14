<template>
    <div class="navbar">
        <nav>
            <div class="navlist">
                <div class="logo">
                    <p></p>
                </div>
                <!-- <ul>
                    <li>About</li>
                    <li>Works</li>
                    <li>Contact</li>
                </ul> -->

            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data () {
        return {
          
        }
    }
}
</script>

<style scoped>
nav{
    width: 100%
}
.navlist{
    width: 85%;
    margin: 0 auto;
    padding: 20px 0;
    display: flex;
    align-items: center;
}
.logo p{
    background: url(../assets/images/logo.svg)no-repeat;
    background-size: contain;
    width: 50px;
    height: 50px;
}
</style>
