<template>

</template>


<script se>


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