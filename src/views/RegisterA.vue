<template>
    <section class="section section-shaped section-lg my-0">
       <img src="img/ill/authentification.svg" class="img1">
          <div class="container pt-lg-md">
             <div class="col-lg-5">
                <card type="secondary" shadow
                     header-classes="bg-white pb-5"
                     bod="border-0">
                    <template>
                       <div class="text-muted text-center mb-3">
                           <small>s'inscrire en tant que Association</small>
                        </div>
                        </template>
                        <template>
                            <div class="text-center text-muted mb-4">
                            </div>
                            <form role="form">
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Nom et logo Association "
                                            addon-left-icon="ni ni-hat-3" v-bind="name">
                                </base-input>
                                <div>
                              <input type="file" @change="onfileselected">
                                </div>
                                 <base-input alternative
                                            class="mb-3"
                                            placeholder="Nom responsable"
                                            addon-left-icon="ni ni-hat-3" v-bind="name">
                                </base-input>
                                 <base-input alternative
                                    
                                            class="mb-3"
                                            placeholder="tel"
                                            addon-left-icon="ni ni-hat-3" >
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Email"
                                            addon-left-icon="ni ni-email-83">
                                </base-input>
                                  <base-input placeholder="adresse">
                                    <select class="form-control form-control-lg">
                                    <option value=""> Sousse</option>
                                    <option value="">Tunis</option>
                                    <option value=""> Mahdia</option>
                                    <option value=""> Sfax</option>
                                  </select> 
                                </base-input>   
                        <div class="mb-3">
                        <base-input alternative
                                            type="date"
                                            placeholder="date de creation"
                                            >
                                </base-input>
                       
                                    <base-input alternative
                                            placeholder="Patente"
                                            >
                                </base-input>
                                 <base-input alternative
                                            placeholder="Jort"
                                           >
                                </base-input>
                              <!--  <div class="text-muted font-italic">
                                    <small>password strength:
                                        <span class="text-success font-weight-700">strong</span>
                                    </small>
                                </div>
                                -->
                                  <base-input alternative
                                             type="password"
                                            placeholder="Mot de passe"
                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input>
                                  <base-input alternative
                                             type="password"
                                            placeholder=" confirmer Mot de passe"
                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input>
                                 </div>
                          
                                <base-checkbox>
                                    <span>je confirme
                                        <a href="#">Privacy Policy</a>
                                    </span>
                                </base-checkbox>
                                <br>
                                <div class="text-center">
                                    <base-button type="primary" class="btn">connecter</base-button>
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
 
  components: {
    BaseNav,
    CloseButton,
    DatePickers,
    Images,
  },
  data() {
    return {
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
      }
  
    };


  }
};
</script>
<style>
.col-lg-5{
  margin-left: 60%;
  margin-top:-65%;
  height: 40%;
}
.img1{
   margin-top:-10%;
   margin-right:60%;
   margin-left: 10%;
   }
.btn{
     background: linear-gradient( #7566 ,#FF4445);
   }
.card-body{
     width:100%;
   }
.upload{
    background: linear-gradient( #7566 ,#FF4445);
}  
 </style>
