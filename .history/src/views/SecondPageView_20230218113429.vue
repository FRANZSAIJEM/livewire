<template>
    <div class="body">
      <div class="d-inline-flex m-1">
  
        <RouterLink to="/" class="btn btn-success m-1 p-3"> <i class="fa fa-arrow-left"></i> &nbsp; Cast Attendance </RouterLink>
        <div class="btn btn-success m-1 p-3">Cast Officers </div>
  
      </div>
     
      <div class="content mt-5">
      
  
        
        <h1 class="bg-secondary p-3 text-center text-white">Cast Officers</h1>
       
        <div>
          <button @click="showForm = !showForm" class="btn btn-primary mt-3 mb-3">
            <i class="fa fa-eye"></i> {{ showForm ? 'Hide Form' : 'Show Form' }}
          </button>
         
          <transition name="slide">
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
          </transition>
        </div>


       

            

            <br> <br> <br>
   
   
      <div v-for="officer in officers" :key="officer.officers" class="text-center">
        
        <div class="card-body">
          
          <div class="row d-inline">

            <div class="float-start">
              <input type="text" name="" id="" style="margin-right: 1000px; font-size: 25px; border" class="mb-3 p-3 w-100 text-center border-0" value="2nd Semester AY 2022-2023">
              <h2 class="d-flex bg-secondary shadow-lg p-2 mb-2 rounded-3 text-white">President: <nav class="float-end ms-lg-auto">{{ officer.pres }}</nav>  </h2>
              <h2 class="d-flex bg-secondary shadow-lg p-2 mb-2 rounded-3 text-white">Vice President: <nav class="float-end ms-lg-auto">{{ officer.vice }}</nav>  </h2>
              <h2 class="d-flex bg-secondary shadow-lg p-2 mb-2 rounded-3 text-white">Secretary: <nav class="float-end ms-lg-auto">{{ officer.sec }}</nav>  </h2>
              <h2 class="d-flex bg-secondary shadow-lg p-2 mb-2 rounded-3 text-white">Treasurer: <nav class="float-end ms-lg-auto">{{ officer.tres }}</nav>  </h2>
              <h2 class="d-flex bg-secondary shadow-lg p-2 mb-2 rounded-3 text-white">P.I.O: <nav class="float-end ms-lg-auto">{{ officer.pio }}</nav>  </h2>
              <h2 class="d-flex bg-secondary shadow-lg p-2 mb-2 rounded-3 text-white">Muse: <nav class="float-end ms-lg-auto">{{ officer.muse }}</nav>  </h2>
              <h2 class="d-flex bg-secondary shadow-lg p-2 mb-2 rounded-3 text-white">Prince: <nav class="float-end ms-lg-auto">{{ officer.prince }}</nav>  </h2>
              
            </div>


           
          </div>
          <RouterLink :to="{ name: 'editOfficer', params: { id: officer.id }}" class="text-secondary" id="edit"> 
                        <button class="btn btn-success"><i class="fa fa-edit"></i> Edit</button>
                      </RouterLink> 
                        <button class="btn btn-danger m-2 edit-button" data-bs-toggle="modal" data-bs-target="#exampleModal"> <i class="fa fa-remove"></i> Delete</button> 
           
        </div>
       
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Delete Officers</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <h1>Are you sure you want to delete this current Officers?</h1>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-warning" data-bs-dismiss="modal"> <i class="fa fa-cancel"></i> Cancel</button>
                      <button @click="removeOfficer(officer.id)" class="btn btn-danger m-2" data-bs-dismiss="modal"> <i class="fa fa-remove"></i> Yes</button>
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
  
  
  const showForm = ref(false);

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
  const newSecInput = ref('Acejoy Macabahugbugan')
  const newTresInput = ref('Shinny Rose Busbus')
  const newPioInput = ref('Francis Michael Mejias')
  const newMuseInput = ref('Apple Jane Caminus')
  const newPrinceInput = ref('Christian Sacedon')
  
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

      showForm = ref(false);

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