<template>
  <div class="body">
         
           
    <div class="content">
      <h1 class="bg-secondary p-3 text-center text-white">Cast Attendance</h1>
      <div class="input-group mb-5 shadow-lg">

      <input v-model="newNameInput" type="text" name="" id="" class="form-control p-2" placeholder="Name">

   
      <select v-model="newYearInput" name="" id="" class="form-select">
        <option value="BSIT - 1">BSIT - 1</option>
        <option value="BSIT - 2">BSIT - 2</option>
        <option value="BSIT - 3">BSIT - 3</option>
        <option value="BSIT - 4">BSIT - 4</option>
      </select>


      <select v-model="newAttendanceInput" name="" id="" class="form-select" typeof="text">
        <option value="Present">Present</option>
        <option value="Absent">Absent</option>
        <option value="Late">Late</option>
      </select>

      <button @click="addAttendance()" class="btn btn-success">&check; Add</button>
    </div>
 
    <div v-for="attendance in attendances" :key="attendance.attendances" class="text-center">
      <div class="card-body">
        <div class="row">
          <table class="table table-bordered shadow-sm">
            <thead>
              <tr>
                <th>
                 Name
                </th>
                <th>
                 Year
                </th>
                <th>
                 Attendance
                </th>
                <th>
                 Remove
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {{ attendance.name }}
                </td>
                <td>
                  {{ attendance.year }} 
                </td>
                <td>
                  {{ attendance.attendance }} 
                </td>
                <td>
                 
                  <RouterLink :to="{ name: 'edit', params: { id: attendance.id }}" class="text-secondary" id="edit"> 
                      <button class="btn btn-success">Edit</button>
                    </RouterLink> 
                    <button class="btn btn-danger m-2 edit-button" data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button> 
          
                </td>
              </tr>
            </tbody>
            
          </table>

        </div>
      </div>
    </div>
    </div>
 
  </div>

</template>
<script setup>
import {ref, onMounted} from 'vue'
import {db} from '../firebase/index.js'
import {addDoc, collection, onSnapshot,deleteDoc, doc, updateDoc} from "firebase/firestore";
import { RouterLink, RouterView } from 'vue-router'



onMounted(async()=>{
  const q = (collection(db, "attendance"));

  onSnapshot(q,(querySnapshot)=> {


    const attendancesTmp = []


  querySnapshot.forEach((doc) => {

    const attendance = {
      id: doc.id,
      name: doc.data().name,
      year: doc.data().year,
      attendance: doc.data().attendance,
      completed: doc.data().completed
    }

    attendancesTmp.push(attendance)
  });
  attendances.value = attendancesTmp
  })
})





const newNameInput = ref('')
const newYearInput = ref('BSIT - 1')
const newAttendanceInput = ref('Present')

const attendances = ref([])
const id = ref(1)








const addAttendance = async () => {
  if (newNameInput.value != '' && newYearInput.value != '' && newAttendanceInput.value != ''){

    await addDoc(collection(db,"attendance"),{
      name:newNameInput.value,
      year: newYearInput.value,
      attendance: newAttendanceInput.value,
      completed: false
    })
    newNameInput.value = ''  
    newYearInput.value = 'BSIT - 1'  
    newAttendanceInput.value = 'Present'
  }
}



const removeAttendance = (id) => {
  deleteDoc(doc(db,"attendance",id));
}




</script>

<style>
.content{
  width: 1000px;
}
.body{
  display: grid;
  place-items: center;
}
.line-through{
  text-decoration: line-through;
}
</style> 