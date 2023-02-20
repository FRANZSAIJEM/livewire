<style>
.container{
    justify-content: center;
    display: grid;
}
</style>
<template>
    <div class="container">
        <div class="content">
            <div class="card">
                <div class="card-header">
                    <h1>Edit Attendance</h1>
                </div>

                <div class="card-body">

                </div>
                <div class="card-footer">

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



const getAttendanceID = defineProps(['id'])

onMounted(async()=>{
    const attendanceID = getAttendanceID.id

    const docRef = doc(db, "attendance", attendanceID)
    const docSnap = await getDoc(docRef)

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

</script>