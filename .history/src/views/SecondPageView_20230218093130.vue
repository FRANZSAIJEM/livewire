<template>
    <div class="body">
      <div class="d-inline-flex m-1">
  
        <RouterLink to="/" class="btn btn-success m-1 p-3"> <i class="fa fa-arrow-left"></i> &nbsp; Cast Attendance </RouterLink>
      <RouterLink to="/second" class="btn btn-success m-1 p-3">Cast Officers </RouterLink>
  
      </div>
     
      <div class="content mt-5">
      
  
        
        <h1 class="bg-secondary p-3 text-center text-white">Cast Officers</h1>
       


        <form action="">

          
        </form>
            <div class="input-group mb-2 shadow-lg">
              <label for="" class=""><h3 class="mt-3 m-2">President:</h3></label>
              <input v-model="newPresInput" type="text" name="" id="" class="form-control p-2 m-3" placeholder="Name" required>
             
            </div>

            <div class="input-group mb-2 shadow-lg">
              <label for="" class=""><h3 class="mt-3 m-2">Vice President:</h3></label>
              <input v-model="newViceInput" type="text" name="" id="" class="form-control p-2 m-3" placeholder="Name">
              
            </div>

            <div class="input-group mb-2 shadow-lg">
              <label for="" class=""><h3 class="mt-3 m-2">Secretary:</h3></label>
              <input v-model="newSecInput" type="text" name="" id="" class="form-control p-2 m-3" placeholder="Name">
              
            </div>

            <div class="input-group mb-2 shadow-lg">
              <label for="" class=""><h3 class="mt-3 m-2">Treasurer:</h3></label>
              <input v-model="newTresInput" type="text" name="" id="" class="form-control p-2 m-3" placeholder="Name">
              
            </div>

            <div class="input-group mb-2 shadow-lg">
              <label for="" class=""><h3 class="mt-3 m-2">P.I.O:</h3></label>
              <input v-model="newPioInput" type="text" name="" id="" class="form-control p-2 m-3" placeholder="Name">
              
            </div>

            <div class="input-group mb-2 shadow-lg">
              <label for="" class=""><h3 class="mt-3 m-2">Muse:</h3></label>
              <input v-model="newMuseInput" type="text" name="" id="" class="form-control p-2 m-3" placeholder="Name">
              
            </div>

            <div class="input-group mb-2 shadow-lg">
              <label for="" class=""><h3 class="mt-3 m-2">Prince:</h3></label>
              <input v-model="newPrinceInput" type="text" name="" id="" class="form-control p-2 m-3" placeholder="Name">
              
            </div>
            
            <button @click="addOfficer()" class="btn btn-success float-end p-3"><i class="fa fa-person"></i> Add</button>

            <br> <br> <br>
   
   
      <div v-for="officer in officers" :key="officer.officers" class="text-center">
        <div class="card-body">
          <div class="row">
            <table class="table table-striped table-bordered shadow-sm">
              <thead>
                <tr class="bg-secondary text-white">
                  <th>
                   President
                  </th>
                  <th>
                   Vice President
                  </th>
                  <th>
                   Secretary
                  </th>
                  <th>
                   Treasurer
                  </th>
                  <th>
                   P.I.O
                  </th>
                  <th>
                   Muse
                  </th>
                  <th>
                   Prince
                  </th>
                  <th>
                   Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {{ officer.pres }}
                  </td>
                  <td>
                    {{ officer.vice }}
                  </td>
                  <td>
                    {{ officer.sec }}
                  </td>
                  <td>
                    {{ officer.tres }}
                  </td>
                  <td>
                    {{ officer.pio }}
                  </td>
                  <td>
                    {{ officer.muse }}
                  </td>
                  <td>
                    {{ officer.prince }}
                  </td>
                 
                  <td>
                   
                    <RouterLink :to="{ name: 'edit', params: { id: officer.id }}" class="text-secondary" id="edit"> 
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
                      <button @click="removeOfficer(officer.id)" class="btn btn-danger m-2" data-bs-dismiss="modal"> <i class="fa fa-remove"></i> Yes</button>
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
    const q = (collection(db, "officers"));
  
    onSnapshot(q,(querySnapshot)=> {
  
  
      const officersTmp = []
  
  
    querySnapshot.forEach((doc) => {
  
      const officer = {
        id: doc.id,
        pres: doc.data().pres,
        vice: doc.data().vice,
        sec: doc.data().sec,
        tres: doc.data().tres,
        pio: doc.data().pio,
        muse: doc.data().muse,
        prince: doc.data().prince,
        completed: doc.data().completed
      }
  
      officersTmp.push(officer)
    });
    officers.value = officersTmp
    })
  })
  
  
  
  
  
  const newPresInput = ref('Angela Lenteria')
  const newViceInput = ref('Bruce Unabia')
  const newSecInput = ref('Acejoy Villarmia')
  const newTresInput = ref('Shinny Rose Busbus')
  const newPioInput = ref('Francis Michael Mejias')
  const newMuseInput = ref('Apple Jane Caminus')
  const newPrinceInput = ref('Christian Sancedon')
  
  const officers = ref([])
  const id = ref(1)
  
  
  
  
  const addOfficer = async () => {
    if (newPresInput.value != '' && newViceInput.value != '' && newSecInput.value != '' && newTresInput.value != '' && newPioInput.value != '' && newMuseInput.value != '' && newPrinceInput.value !=''){
  
      await addDoc(collection(db,"officers"),{
        pres: newPresInput.value,
        vice: newViceInput.value,
        sec: newSecInput.value,
        tres: newTresInput.value,
        pio: newPioInput.value,
        muse: newMuseInput.value,
        prince: newPrinceInput.value,

        completed: false
      })
      newPresInput.value = ''  
      newViceInput.value = ''  
      newSecInput.value = ''  
      newTresInput.value = ''  
      newPioInput.value = ''  
      newMuseInput.value = ''  
      newPrinceInput.value = ''  

  
    }
  }
  
  
  
  const removeOfficer = (id) => {
    deleteDoc(doc(db,"officers",id));
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