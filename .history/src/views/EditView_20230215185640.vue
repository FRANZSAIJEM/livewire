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
                    <form>
                        <div class="mb-3">
                        <label for="name" class="col-form-label">Name: </label>
                        <input v-model="newNameInput" type="text" name="" id="" class="form-control p-2" placeholder="Name">
                        </div>


                        <div class="mb-3">
                        <label for="year" class="col-form-label">Year: </label>
                        <select v-model="newYearInput" name="" id="year" class="form-select">
                        <option value="BSIT - 1">BSIT - 1</option>
                        <option value="BSIT - 2">BSIT - 2</option>
                        <option value="BSIT - 3">BSIT - 3</option>
                        <option value="BSIT - 4">BSIT - 4</option>
                        </select>
                        </div>

                        <div class="mb-3">
                        <label for="attendance" class="col-form-label">Attendance: </label>
                        <select v-model="newAttendanceInput" name="" id="attendance" class="form-select" typeof="text">
                        <option value="Present">Present</option>
                        <option value="Absent">Absent</option>
                        <option value="Late">Late</option>
                        </select>
                    </div>
                  
                    </form> 
                </div>
                <div class="card-footer">
                    <button type="button" class="btn btn-primary" @click="updateTask() || updateTask2()"> <i class="fa fa-save"></i> Save changes</button>

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

const router1 = useRouter()
const router2 = useRouter()


const getAttendanceID = defineProps(['id'])

onMounted(async()=>{
    let attendanceID = getAttendanceID.id

    let docRef = doc(db, "attendance", attendanceID)
    let docSnap = await getDoc(docRef)

    newNameInput.value = docSnap.data().name
    newYearInput.value = docSnap.data().year
    newAttendanceInput.value = docSnap.data().attendance

})

onMounted(async()=>{
    let attendanceID = getAttendanceID.id

    let docRef = doc(db, "attendance2", attendanceID)
    let docSnap = await getDoc(docRef)

    newNameInput.value = docSnap.data().name
    newYearInput.value = docSnap.data().year
    newAttendanceInput.value = docSnap.data().attendance

})

const newNameInput = ref('')
const newYearInput = ref('')
const newAttendanceInput = ref('')
const attendanceID = getAttendanceID.id


const updateTask = () => {
    updateDoc(doc(db, 'attendance', attendanceID), {
        name: newNameInput.value,
        year: newYearInput.value,
        attendance: newAttendanceInput.value,    
    })

}

const updateTask2 = () => {
    updateDoc(doc(db, 'attendance2', attendanceID), {
        name: newNameInput.value,
        year: newYearInput.value,
        attendance: newAttendanceInput.value,    
    })

}







</script>