<template>
            <form>
                      <div class="mb-3">
                        <label for="name" class="col-form-label">Name: </label>
                        <input type="text" class="form-control" id="name"> 
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

    name.value = docSnap.data().name
    year.value = docSnap.data().year
    attendance.value = docSnap.data().attendance

})

const name = ref('')
const year = ref('')
const attendance = ref('')
const attendanceID = getAttendanceID.id



const updateTask = () => {
    updateDoc(doc(db, 'attendance', attendanceID), {
        name: name.value,
        year: year.value,
        attendance: attendance.value,
    
    })
}

</script>