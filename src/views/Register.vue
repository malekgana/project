<template>
    <section class="section section-shaped section-lg my-0">
       <img src="img/ill/Etranger form.svg" class="img">
       <br>
         <br>  <br>  <br>  <br>  <br>  <br>  <br>  <br>  <br>  <br>
          <div class="container pt-lg-md">
             <div class="col-lg-5">
                <card type="secondary" shadow
                     header-classes="bg-white pb-5"
                     bod="border-0">
                    <template>
                       <div class="text-muted text-center mb-3">
                           <small>s'inscrire en tant que étranger</small>
                        </div>
                        </template>
                        <template>
                            <div class="text-center text-muted mb-4">
                            </div>
                            <form  id="App" role="form" @submit ="checkForm"
                            method="post">

                              <p v-if="errors.length">
                              <b>Veuillez corriger les erreurs!</b>
                                <ul>
                             <li v-for="error in errors" :key="error">{{ error }}</li>
                                </ul>
                                </p>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Nom"
                                            addon-left-icon="ni ni-hat-3" v-model="name">
                                </base-input>
                                 <base-input alternative
                                            class="mb-3"
                                            placeholder="Prenom"
                                            addon-left-icon="ni ni-hat-3" v-model="lastname">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Email"
                                            addon-left-icon="ni ni-email-83" v-model="email">
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            placeholder="Mot de passe"
                                            addon-left-icon="ni ni-lock-circle-open" v-model="password">
                                </base-input>
                                  <base-input placeholder="Pays">
                                    <select class="form-control form-control-lg">
                                    <option value=""> Sousse</option>
                                    <option value="">Tunis</option>
                                    <option value=""> Mahdia</option>
                                    <option value=""> Sfax</option>
                                  </select> 
                                </base-input>   
                 
                        <small class="text-uppercase font-weight-bold">Sexe</small>
                      
                        <base-radio name="radio6" class="mb-3" v-model="radio.radio1">
                        homme
                       </base-radio>
                      <base-radio name="radio5" class="mb-3" v-model="radio.radio1">
                        femme
                    </base-radio>
                  
                        <small class="text-uppercase font-weight-bold">Etat Civil</small>
                        
                        <base-radio name="radio0" class="mb-3" v-model="radio.radio1">
                        Celibataire
                       </base-radio>
                    <base-radio name="radio1" class="mb-3" v-model="radio.radio1">
                        Marié
                    </base-radio>
                      <base-radio name="radio2" class="mb-3" v-model="radio.radio1">
                      Divorcé
                       </base-radio>
                         <base-radio name="radio3" class="mb-3" v-model="radio.radio1">
                        Autre
                       </base-radio>

                       
                        <small class="text-uppercase font-weight-bold">Statut</small>

                          <base-input placeholder="Statut">
                                    <select class="form-control form-control-lg">
                                    <option value=""> Etudiant</option>
                                    <option value=""> ..</option>
                                    <option value="">..</option>
                                    <option value=""> ..</option>
                                  </select> 
                                </base-input> 
                     <div class="mb-3">
                        <small class="text-uppercase font-weight-bold">Date de naissance</small>
                        </div>
                        <base-input alternative
                                            type="date"
                                            placeholder="date de naissance"
                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input>
                                
                              <!--  <div class="text-muted font-italic">
                                    <small>password strength:
                                        <span class="text-success font-weight-700">strong</span>
                                    </small>
                                </div>
                                -->
                                <base-checkbox>
                                    <span>je confirme
                                        <a href="#">Privacy Policy</a>
                                    </span>
                                </base-checkbox>
                                <div class="text-center">
                                <input type="submit" class="btn"  value="envoyer">
                                </div>
                           
                                  <div class="col-lg-3 col-sm-6 mt-4 mt-md-0">
                    <!-- Radio buttons -->
                                  </div>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
    </section>
</template>
<script>
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'
import BaseNav from "@/components/BaseNav";
import CloseButton from "@/components/CloseButton";
//import Tabs from "./components/Tabs/Tabs.vue";
//import TabPane from "./components/Tabs/TabPane.vue";
//import Modals from "./components/JavascriptComponents/Modals.vue";
const Tooltips = () => import("./components/JavascriptComponents/Tooltips");
const DatePickers = () => import("./components/JavascriptComponents/DatePickers");
import Images from "./components/JavascriptComponents/Images";
//import TabsSection from "./components/JavascriptComponents/TabsSection";
//import ProgressSection from "./components/JavascriptComponents/ProgressPagination";
import Typography from "./components/JavascriptComponents/Typography";

export default {
    name: 'App',
    components: {
    BaseNav,
    CloseButton,
    DatePickers,
    Images,
  },
  data() {
    
    return {
      errors: [],
      name: null,
      lastname: null,
      email: null,
      password:null,

      checkboxes: {
        unchecked: false,
        checked: true,
        uncheckedDisabled: false,
        checkedDisabled: true
     
      },

      radio: {
        radio1: "radio1",
        radio2: "radio3"
      },
      switches: {
        off: false,
        on: true
      },
      sliders: {
        slider1: 0,
        slider2: [150, 400]
      },
  
    };
  
  },
   methods: {
    checkForm: function(e) {

      // Clear errors
      this.errors = [];

      // Check if the surname is not empty and length <= 50
      if (!this.name || this.name.length > 5)
      {
        this.errors.push("Le nom ne peut pas être vide et doit avoir au minimum 5 caractères !");
      }

      // Check if the firstname is not empty and length <= 50
      if (!this.lastname || this.lastname.length > 5)
      {
        this.errors.push("Le prénom ne peut pas être vide et doit avoir au minimum 5 caractères!");
      }

      // Check if the email is not empty and match the email pattern
      var re = /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/;
      if (!this.email || !re.test(this.email))
      {
        this.errors.push("L'email ne peut pas être vide et doit être un e-mail valide!");
      }

      if (!this.errors.length)
      {
        return true;
      }
      e.preventDefault();
    }
  }
}
</script>
<style>
.col-lg-5{
  margin-left: 60%;
  margin-top:-65%;
  height: 40%;
}
.img{
   margin-top:-5%;
   margin-right:90%;
   margin-left:10%;
   width:50%;
   }
.btn{
     background: linear-gradient( #FD749B,#ACA5FF);
   }
.card-body{
     width:100%;
   }
 </style>

