 //validate username is empty or not
            function validateusername(){
                uname = document.getElementById("uname").value;
                if (uname.trim().length == 0) {
                    document.getElementById("unameerr").innerHTML = "username is manditory";
                    return false;
                } else {
                    document.getElementById("unameerr").innerHTML = "";
                }
            }
            function validatepassword(){
                pass = document.getElementById("pass").value;
                if (pass.trim().length == 0) {
                    document.getElementById("passerr").innerHTML = "password is manditory";
                    return false;
                } else {
                    document.getElementById("passerr").innerHTML = "";
                    return true;
                }
            }

        
            function validatedata(){
                flag1=validateusername();
                flag2=validatepassword();
                if(flag1==flag2){
                    return true;
                }else{
                    return false;
                }
            }