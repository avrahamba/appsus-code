
<template>
    <div class="note-video-preview card" :style="{'background-color': info.color}">
        <div ref="video">
            <iframe :width="width" :height="height"
                :src="info.url">
            </iframe> 
        </div>
        <div class="btns">
            <template v-if="colorOpen">
            <button @click.stop="colorSet('#ffd299')">
                <font-awesome-icon icon="tint" :style="{color: '#f8981d'}" />
            </button>
            <button @click.stop="colorSet('#e1f2fb')">
                <font-awesome-icon icon="tint" :style="{color: 'blue'}" />
            </button>
            <button @click.stop="colorSet('#f0e1fb')">
                <font-awesome-icon icon="tint" :style="{color: '#a438f2'}" />
            </button>
            <button @click.stop="colorSet('#c6f2c9')">
                <font-awesome-icon icon="tint" :style="{color: 'green'}" />
            </button>
            <button @click.stop="colorSet('#f2c6c6')">
                <font-awesome-icon icon="tint" :style="{color: 'red'}" />
            </button>
            </template>  
            <button @click.stop="colorSet" v-else >
            <font-awesome-icon icon="paint-brush"/>
            </button>
            <button @click.stop="pin" title="pin">
                <font-awesome-icon icon="map-pin" :style="{color: info.pined?'red':''}" />
            </button>
            <button @click.stop="$emit('remove')" title="remove">
                <font-awesome-icon icon="trash" />
            </button>
        </div>
    </div>
</template>

<script>
import {noteService} from '../../../../services/miss-keep/notes.service.js';

export default {
    props:{
        info: Object,
        id: String
    },
    data() {
        return {
            width:420,
            height:315,
            colorOpen:false
        }
    },
    mounted() {
        this.width = this.$refs.video.offsetWidth;
        this.height = this.width * 9 / 16; 
    },
    methods: {
        colorSet(color){
            if(typeof color === 'string'){
                noteService.setColor(this.id, color)
            }
            this.colorOpen = !this.colorOpen
        },
        pin(){
            if(!this.info.pined){
                window.scroll({
                    top: 100,
                    left: 100,
                    behavior: 'smooth'
                });
            }
            noteService.setPin(this.id)
        }
    },

}
</script>

<style>

</style>