<template>
<div class="note-img open-note" :style="{'background-color': info.color}">

    <input type="text" placeholder="Edit the URL of image" v-model="url" v-if="edit">
    <img v-else :src="info.url">
    <input type="text" v-if="edit" placeholder="Edit the title" v-model="infoCopy.title">
    <h3 v-else>{{info.title}}</h3>
    <textarea v-if="edit" placeholder="Edit the text" v-model="infoCopy.txt" cols="31"></textarea>

    <p v-else>{{info.txt}}</p>
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
        <button @click.stop="colorSet" v-else>
            <font-awesome-icon icon="paint-brush" />
        </button>

        <button class="edit" @click="startEditOrSave" :title="editSave">
            <font-awesome-icon icon="edit" :class="srcImgEdit" />
        </button>
        <button class="close" @click="$emit('close')" title="close">
            <font-awesome-icon icon="window-close" />
        </button>
        <button @click.stop="pin" title="pin">
            <font-awesome-icon icon="map-pin" />
        </button>
        <button class="remove" @click="$emit('remove')" title="remove">
            <font-awesome-icon icon="trash" />
        </button>
    </div>
</div>
</template>

<script>
import {noteService} from '../../../../services/miss-keep/notes.service.js';

export default {
    props: {
        info: Object,
        id:String
    },
    data() {
        return {
            infoCopy:null,
            url:'',
            edit:false,
            colorOpen:false
        }
    },
    created() {
        document.body.classList.add('open-modal')
        this.infoCopy = JSON.parse(JSON.stringify(this.info))
    },
    computed: {
        srcImgEdit(){
            if(this.edit) return 'fa-save'
            return 'fa-edit'
        },
        editSave(){
            if(this.edit) return 'Save'
            return 'Edit'
        }
    },
    methods: {
        startEditOrSave(){
            if(this.edit){
                this.infoCopy.url = this.url
                noteService.saveNote({id:this.id,info:this.infoCopy})
            }
            this.edit =!this.edit
        },
        colorSet(color){
            if(typeof color === 'string'){
                noteService.setColor(this.id, color)
            }
            this.colorOpen = !this.colorOpen
        },
        pin(){
            noteService.setPin(this.id)
        }
    },
    destroyed() {
        document.body.classList.remove('open-modal')
    },
}
</script>

<style>

</style>
