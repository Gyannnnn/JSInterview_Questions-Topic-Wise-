let user = {
  userName: "Gyanranjan Patra",
  rc1:()=>{
    console.log(this.userName)
  },
  rc2(){
    console.log(this.userName)
  }
}


user.rc1();
user.rc2(); 