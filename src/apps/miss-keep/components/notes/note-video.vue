<template>
<div ref="note" class="note-video open-note" :style="{'background-color': info.color}">
    <input type="text" v-if="edit" placeholder="Please enter a new URL" v-model="url">
    <iframe v-else :width="width" :height="height" :src="info.url">
    </iframe>
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
        <button @click="startEditOrSave" :title="editSave">
            <font-awesome-icon icon="edit" :class="srcImgEdit" />
        </button>
        <button @click="$emit('close')" title="close">
            <font-awesome-icon icon="window-close" />
        </button>
        <button @click.stop="pin" title="pin">
            <font-awesome-icon icon="map-pin" />
        </button>
        <button @click="$emit('remove')" title="remove">
            <font-awesome-icon icon="trash" />
        </button>
    </div>
</div>
</template>

<script>
import {
    noteService
} from '../../../../services/miss-keep/notes.service.js';

export default {
    props: {
        info: Object,
        id: String
    },
    computed: {
        srcImgEdit() {
            if (this.edit) return 'fa-save'
            return 'fa-edit'
        },
        editSave() {
            if (this.edit) return 'Save'
            return 'Edit'
        }
    },
    data() {
        return {
            width: 420,
            height: 315,
            edit: false,
            url: '',
            colorOpen: false
        }
    },
    mounted() {
        this.width = this.$refs.note.offsetWidth;
        this.height = this.width * 9 / 16;
    },
    methods: {
        startEditOrSave() {
            if (this.edit) {
                noteService.saveNote({
                    id: this.id,
                    url: this.url
                })
            }
            this.edit = !this.edit

        },
        colorSet(color) {
            if (typeof color === 'string') {
                noteService.setColor(this.id, color)
            }
            this.colorOpen = !this.colorOpen
        },
        pin() {
            noteService.setPin(this.id)
        }
    },
    created() {
        document.body.classList.add('open-modal')
    },
    destroyed() {
        document.body.classList.remove('open-modal')
    },
}
</script>

<style>

</style>
