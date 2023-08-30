<template>
    <div class="w-full h-full max-w-5xl rounded-3xl hover:scale-[1.01] shadow hover:-translate-y-1 relative transition-all duration-300">
        <div class="w-full h-full brightness-95 rounded-3xl ">
            <slot name="bg"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
};
</script>