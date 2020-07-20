<template>
    <span class="star-review">
        <img class="star" :src="starSrc[inx-1]" @click="setStar(inx)" v-for="inx in 5" :key="inx">
    </span>
</template>

<script>
import yellowStar from '@/assets/img/yellow-star.png';
import blackStar from '@/assets/img/black-star.png';
export default {
    props:{
        live:Boolean,
        rate:Number
    },
    data() {
        return {
            insideRate:0
        }
    },
    created() {
        this.insideRate = this.rate
    },
    computed: {
        starSrc(){
            const res = [];
            for (let i = 0; i < this.insideRate; i++) {
                res.push(yellowStar)
            }
            for (let i = this.insideRate; i < 6; i++) {
                res.push(blackStar)
            }
            return res;
        }
    },
    methods: {
        setStar(num){
            if(!this.live) return;
            this.insideRate = num
            this.$emit('setStar',num)
        }
    },
}
</script>

<style>

</style>