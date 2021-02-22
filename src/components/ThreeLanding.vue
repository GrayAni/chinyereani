<template>
    <div class="threelanding">
        <!-- <h2>three js</h2> -->
    </div>
</template>
<script>

export default {
    name: 'ThreeLanding',
    created () {
        this.RenderLineJs()
    },
    methods: {
        renderThreeJs() {
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

            const renderer = new THREE.WebGLRenderer();
            renderer.setClearColor("#ffffff")
            renderer.setSize( window.innerWidth, window.innerHeight );
            document.body.appendChild( renderer.domElement );
            window.addEventListener('resize', () => {
                renderer.setSize(window.innerWidth, window.innerHeight)
                camera.aspect = window.innerWidth / window.innerHeight;

                camera.updateProjectionMatrix()
            })

            const geometry = new THREE.BoxGeometry(2, 2, 2);
            const material = new THREE.MeshBasicMaterial( { color: 0xE0B4B4 } );

            // const texture = new THREE.TextureLoader().load('wood.jpeg')
            // const material = new THREE.MeshBasicMaterial( { map: texture } );

            const cube = new THREE.Mesh( geometry, material );
            scene.add( cube );


            // const geometry = new THREE.SphereGeometry(1, 10, 10);
            //const material = new THREE.MeshLambertMaterial( { color: 0xE0B4B4 } );
            //const mesh = new THREE.Mesh( geometry, material );
            // scene.add( mesh );

            // const light = new THREE.PointLight(0xFFFFFF, 1, 500)
            // light.position.set(10,0,25)
            //scene.add(light)

            camera.position.z = 5;

            const animate = function () {
                requestAnimationFrame( animate );

                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;

                // mesh.rotation.x += 0.01;
                // mesh.rotation.y += 0.01;

                renderer.render( scene, camera );
            };

            animate();
        },
        RenderLineJs() {
            const renderer = new THREE.WebGLRenderer();
            renderer.setSize( window.innerWidth, window.innerHeight );
            document.body.appendChild( renderer.domElement );

            const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
            camera.position.set( 0, 0, 100 );
            camera.lookAt( 0, 0, 0 );

            const scene = new THREE.Scene();

            const material = new THREE.LineBasicMaterial( { color: 0xE0B4B4 } );
            const points = [];
            points.push( new THREE.Vector3( - 10, 0, 0 ) );
            points.push( new THREE.Vector3( 0, 10, 0 ) );
            points.push( new THREE.Vector3( 10, 0, 0 ) );
            // points.push( new THREE.Vector3( 0, 0, 10 ) );
            // points.push( new THREE.Vector3( -10, 0, 10 ) );
            // points.push( new THREE.Vector3( -10, -10, 10 ) );

            const geometry = new THREE.BufferGeometry().setFromPoints( points );
            const line = new THREE.Line( geometry, material );

            scene.add( line );
            renderer.render( scene, camera );
        }
    }
}
</script>
<style scoped>
canvas {
    display: block;
}
</style>