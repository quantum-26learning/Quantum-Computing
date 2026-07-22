import * as THREE from 'three';

export default class GlassWall {
    constructor() {
        this.group = new THREE.Group();
        this.group.position.set(-4, -7, -9);

        this.buildGlassWall();
    }

    buildGlassWall() {

        // Glass geometry
        const glass = new THREE.Mesh(
            new THREE.BoxGeometry(55, 55, 0.4),
            new THREE.MeshPhysicalMaterial({
                color: 0xffffff,
                transmission: 1,
                transparent: true,
                roughness: 0,
                metalness: 0,
                thickness: 0.5,
                ior: 1.5,
                envMapIntensity: 2,
                side: THREE.DoubleSide
            })
        );
        this.group.add(glass);

        // Frame
        
    }

    getGroup() {
        return this.group;
    }
}