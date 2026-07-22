import * as THREE from 'three';
import { displayCoords } from './gui.js'; 

export function setupRaycaster(camera, scene, canvas) {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const mouseDownPos = new THREE.Vector2();

    canvas.addEventListener('mousedown', (event) => {
        mouseDownPos.x = event.clientX;
        mouseDownPos.y = event.clientY;
    });

    canvas.addEventListener('mouseup', (event) => {
        const mouseUpPos = new THREE.Vector2(event.clientX, event.clientY);
        if (mouseDownPos.distanceTo(mouseUpPos) > 0) {
            return; // It's a drag, not a click
        }

        const rect = canvas.getBoundingClientRect();
        // 1. Normalize mouse coordinates
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        // 2. Cast the ray
        raycaster.setFromCamera(mouse, camera);

        // 3. Check intersections
        const intersects = raycaster.intersectObjects(scene.children, true);

        if (intersects.length > 0) {
            const closestHit = intersects[0];
            const hitPoint = closestHit.point;

            // 4. Update lil-gui coordinates
            displayCoords.x = Number(hitPoint.x.toFixed(2));
            displayCoords.y = Number(hitPoint.y.toFixed(2));
            displayCoords.z = Number(hitPoint.z.toFixed(2));
        }
    });
}