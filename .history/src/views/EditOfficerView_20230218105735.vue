<style>
.container{
    justify-content: center;
    display: grid;
}
.content{
    width: 1000px;
}
</style>
<template>
    <div class="container">
        <div class="content">
            <div class="card mt-5">
                <div class="card-header bg-secondary shadow-lg">
                    <h1 class="text-white">Edit Student</h1>
                </div>

                <div class="card-body">
                    <div v-show="showForm">
              <button @click="addOfficer()" class="btn btn-success float-end p-3" style="margin-top: -65px;"><i class="fa fa-person"></i> Add</button>
          <div class="input-group mb-2 shadow-lg">
              <label for="" class=""><h4 class="mt-3 m-2">President:</h4></label>
              <input v-model="newPresInput" type="text" name="" id="" class="form-control p-2 m-3" placeholder="Name" required>
             
            </div>

            <div class="input-group mb-2 shadow-lg">
              <label for="" class=""><h4 class="mt-3 m-2">Vice President:</h4></label>
              <input v-model="newViceInput" type="text" name="" id="" class="form-control p-2 m-3" placeholder="Name">
              
            </div>

            <div class="input-group mb-2 shadow-lg">
              <label for="" class=""><h4 class="mt-3 m-2">Secretary:</h4></label>
              <input v-model="newSecInput" type="text" name="" id="" class="form-control p-2 m-3" placeholder="Name">
              
            </div>

            <div class="input-group mb-2 shadow-lg">
              <label for="" class=""><h4 class="mt-3 m-2">Treasurer:</h4></label>
              <input v-model="newTresInput" type="text" name="" id="" class="form-control p-2 m-3" placeholder="Name">
              
            </div>

            <div class="input-group mb-2 shadow-lg">
              <label for="" class=""><h4 class="mt-3 m-2">P.I.O:</h4></label>
              <input v-model="newPioInput" type="text" name="" id="" class="form-control p-2 m-3" placeholder="Name">
              
            </div>

            <div class="input-group mb-2 shadow-lg">
              <label for="" class=""><h4 class="mt-3 m-2">Muse:</h4></label>
              <input v-model="newMuseInput" type="text" name="" id="" class="form-control p-2 m-3" placeholder="Name">
              
            </div>

            <div class="input-group mb-2 shadow-lg">
              <label for="" class=""><h4 class="mt-3 m-2">Prince:</h4></label>
              <input v-model="newPrinceInput" type="text" name="" id="" class="form-control p-2 m-3" placeholder="Name">
              
            </div>
            
       



          </div>
                </div>
                <div class="card-footer">
                    <button type="button" class="btn btn-primary" @click="updateAttend()"> <i class="fa fa-save"></i> Save changes</button>

                </div>
            </div>
        </div>
       
    </div>
</template>




<script setup>

import { ref, onMounted, watch } from 'vue'
import { db } from '../firebase/index.js'
import { doc, getDoc, updateDoc, deleteDoc  } from 'firebase/firestore'
import { RouterLink, RouterView } from 'vue-router'
import { useRouter } from 'vue-router'

const router = useRouter()



const getOfficerID = defineProps(['id'])

onMounted(async()=>{
    let officerID = getOfficerID.id

    let docRef = doc(db, "officer", attendanceID)
    let docSnap = await getDoc(docRef)

    newPresInput.value = docSnap.data().pres
    newViceInput.value = docSnap.data().vice
    newSecInput.value = docSnap.data().sec
    newTresInput.value = docSnap.data().tres
    newPioInput.value = docSnap.data().pio
    newMuseInput.value = docSnap.data().muse
    newPrinceInput.value = docSnap.data().prince


})


const newPresInput = ref('')
const newViceInput = ref('')
const newInput = ref('')
const newPresInput = ref('')
const newPresInput = ref('')
const newPresInput = ref('')
const newPresInput = ref('')



const attendanceID = getAttendanceID.id


const updateAttend = () => {
    
    updateDoc(doc(db, 'attendance', attendanceID), {
        name: newNameInput.value,
        year: newYearInput.value,
        attendance: newAttendanceInput.value,    


    })

    updateDoc(doc(db, 'attendance2', attendanceID), {
        name: newNameInput.value,
        year: newYearInput.value,
        attendance: newAttendanceInput.value,    
   
    })

    router.go(-1)
}


</script>