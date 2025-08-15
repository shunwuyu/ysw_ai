import {
    ref,
    onMounted,
    onUnmounted
} from 'vue';

export function useMouse() {
    const x = ref(0);
    const y = ref(0);

    const updateMousePosition = (event) => {
        x.value = event.clientX;
        y.value = event.clientY;
    }

    onMounted(() => {
        // console.log('组件挂载了');
        window.addEventListener('mousemove', updateMousePosition);
    })
    
    onUnmounted(() => {
        window.removeEventListener('mousemove', updateMousePosition)
    })

    return {
        x, 
        y
    }
}