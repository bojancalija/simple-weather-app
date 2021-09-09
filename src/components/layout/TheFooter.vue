<template>
    
    <div class="footer">
        <p>Last updated on {{ date }}</p>
    </div>

</template>

<script>
export default {
    props: [ 'date' ]
}
</script>

<style scoped>

.footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 20px;
    background-color: #1a73e8;
    color: white;
    font-size: 12px;
    opacity: 0.8;
}

.footer p {
    margin-right: 10px;
}

</style>