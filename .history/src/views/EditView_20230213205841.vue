<template>
{{ attendance.id }}
<h1></h1>
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