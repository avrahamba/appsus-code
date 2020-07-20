<template>
      <section class="keep-app">
        <div class="add-note-container">
            <add-note></add-note>
        </div>
    <div class="cards-container pined">
        <div class="card-outside" v-for="(note, inx) in notesPreviewPined" :key="inx">
            <component 
            v-if="notes"
            :key="inx" 
            :is="note.type" 
            :info="note.info"
            :id="note.id"
            @remove="removeNote(note.id)"
            @click.native="openNote(note.id)"
            ></component>
        </div>
    </div>
    <div class="cards-container Unpined">
        <div class="card-outside" v-for="(note, inx) in notesPreviewUnpined" :key="inx">
            <component 
            v-if="notes"
           :key="inx" 
            :is="note.type" 
            :info="note.info"
            :id="note.id"
            @remove="removeNote(note.id)"
            @click.native="openNote(note.id)"
            ></component>
        </div>
    </div>
        <component 
        v-if="activeNote"
        :is="activeNote.type" 
        :info="activeNote.info"
        :id="activeNote.id"
        @remove="removeActiveNote(activeNote.id)"
        @close="closeActiveNote"
        ></component>
    </section>
</template>

<script>
import {noteService} from '../../../services/miss-keep/notes.service.js';
import noteText from '../components/notes/note-text';
import noteImg from '../components/notes/note-img';
import noteTodos from '../components/notes/note-todos';
import noteVideo from '../components/notes/note-video';
import noteTextPreview from '../components/preview/note-text-preview';
import noteImgPreview from '../components/preview/note-img-preview';
import noteTodosPreview from '../components/preview/note-todos-preview';
import noteVideoPreview from '../components/preview/note-video-preview';
import addNote from '../components/add-note/add-note';
import {eventBus, EVENT_CLOSE_MODAL} from '../../../services/event-bus.service.js';

export default {
    data() {
        return {
            notes: null,
            activeNote: null
        }
    },
    created() {
        noteService.getNotes()
        .then(notes=>this.notes=notes)
        eventBus.$on(EVENT_CLOSE_MODAL,this.closeActiveNote)
    },
    methods: {
        removeNote(noteId){
            noteService.removeNote(noteId)
        },
        openNote(id){
            noteService.getNoteById(id)
                .then((note)=>this.activeNote = note)
        },
        closeActiveNote(){
            this.activeNote=null
        },
        removeActiveNote(id){
            this.activeNote = null
            this.removeNote(id);

        }
    },
    computed: {
        notesPreviewPined(){
            if(!this.notes)return[]
            return this.notes
            .map(
            (note)=>{
                let newNote = JSON.parse(JSON.stringify(note))
                newNote.type += 'Preview'; 
                return newNote
            }).filter(note=>note.info.pined)
        },
        notesPreviewUnpined(){
            if(!this.notes)return[]
            return this.notes
            .map(
            (note)=>{
                let newNote = JSON.parse(JSON.stringify(note))
                newNote.type += 'Preview'; 
                return newNote
            }).filter(note=>!note.info.pined)
        }
    },
    components:{
        noteText,
        noteImg,
        noteTodos,
        noteVideo,
        noteTextPreview,
        noteImgPreview,
        noteTodosPreview,
        noteVideoPreview,
        addNote
    }
}
</script>

<style>

</style>