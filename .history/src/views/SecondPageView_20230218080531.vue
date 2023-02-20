<template>
    <div class="body">
      <div class="d-inline-flex m-1">
  
        <RouterLink to="/" class="btn btn-success m-1 p-3"> <i class="fa fa-arrow-left"></i> </RouterLink>
        <RouterLink to="/second" class="btn btn-success m-1 p-3"> <i class=" fa fa-arrow-right"></i> </RouterLink>
  
      </div>
     
      <div class="content mt-5">
      
  
        
        <h1 class="bg-secondary p-3 text-center text-white">Cast Officers</h1>
       
          <form action="">
            <div class="input-group mb-5 shadow-lg">
            <!-- <input v-model="newNameInput" type="text" name="" id="" class="form-control p-2" placeholder="Name" required>
     
              <select v-model="newYearInput" name="" id="" class="form-select" required>
                <option value="BSIT - 1">BSIT - 1</option>
                <option value="BSIT - 2">BSIT - 2</option>
                <option value="BSIT - 3">BSIT - 3</option>
                <option value="BSIT - 4">BSIT - 4</option>
              </select>


              <select v-model="newAttendanceInput" name="" id="" class="form-select" typeof="text" required>
                <option value="Present">Present</option>
                <option value="Absent">Absent</option>
                <option value="Late">Late</option>
              </select>

              <button @click="addAttendance()" class="btn btn-success"><i class="fa fa-person"></i> Add</button> -->
            
            <div class="float-start">
              <label for="" class="form-label p-2">
              <h3>President:</h3>
            </label>
            </div>

            <div class="ms-lg-auto">
              <button class="btn btn-primary">Add</button>
            </div>
          
            </div>
          </form>
     
  
   
      <div v-for="attendance in attendances" :key="attendance.attendances" class="text-center">
        <div class="card-body">
          <div class="row">
            <table class="table table-striped table-bordered shadow-sm">
              <thead>
                <tr class="bg-secondary text-white">
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
                   Action
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
                        <button class="btn btn-success"><i class="fa fa-edit"></i> Edit</button>
                      </RouterLink> 
  
                      <button class="btn btn-danger m-2 edit-button" data-bs-toggle="modal" data-bs-target="#exampleModal"> <i class="fa fa-remove"></i> Delete</button> 
            
                  </td>
                </tr>
              </tbody>
              
            </table>
           
          </div>
          
        </div>
       
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Delete Student</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <h1>Are you sure you want to delete this student?</h1>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-warning" data-bs-dismiss="modal"> <i class="fa fa-cancel"></i> Cancel</button>
                      <button @click="removeAttendance(attendance.id)" class="btn btn-danger m-2" data-bs-dismiss="modal"> <i class="fa fa-remove"></i> Yes</button>
                    </div>
                  </div>
                </div>
              </div> 
  
  
              <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="editModalLabel">Delete Student</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
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
                    <div class="modal-footer">
                      <button type="button" class="btn btn-warning" data-bs-dismiss="modal"> <i class="fa fa-cancel"></i> Cancel</button>
                      <button @click="updateTask()" class="btn btn-danger m-2" data-bs-dismiss="modal"> <i class="fa fa-remove"></i> Yes</button>
                    </div>
                  </div>
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
  import { useRouter } from 'vue-router'
  
  
  
  onMounted(async()=>{
    const q = (collection(db, "attendance2"));
  
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
  
      await addDoc(collection(db,"attendance2"),{
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
    deleteDoc(doc(db,"attendance2",id));
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