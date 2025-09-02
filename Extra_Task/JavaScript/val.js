function reg_form(str) {
    // username
    if (str.uname.value == "") {
        document.getElementById('msg1').innerHTML = "Please enter some value in user name";
        str.uname.focus();
        return false;
    }
    if (!str.uname.value.match(/^[a-zA-Z]{1,}$/)) {
        document.getElementById('msg1').innerHTML = "Please enter character";
        str.uname.focus();
        return false;
    }

    // password
    if (str.pass.value == "") {
        document.getElementById('msg1').innerHTML = "Please enter some value in Password";
        str.pass.focus();
        return false;
    }
    if (str.pass.value.length < 8) {
        document.getElementById('msg1').innerHTML = "Please enter minimum 8 digit length";
        str.pass.focus();
        return false;
    }

    // email
    if (str.email.value == "") {
        document.getElementById('msg1').innerHTML = "Please enter some value in email";
        str.email.focus();
        return false;
    }
    if (!str.email.value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/)) {
        document.getElementById('msg1').innerHTML = "Please enter Correct email is";
        str.email.focus();
        return false;
    }

    //gender
    var gen_arr= document.getElementsByName('gender');
    if(gen_arr[0].checked == true){

    }
    else if (gen_arr[1].checked == true){

    }
    else{
        document.getElementById('msg1').innerHTML="please select gender";
        return false;
    }

    // multi chesked
    var chk_arr = document.getElementsByName('chk');
    if (chk_arr[0].checked == true) {

    }
    else if (chk_arr[1].checked == true) {

    }
     else if (chk_arr[2].checked == true) {

    }
     else if (chk_arr[3].checked == true) {

    }
    else {
        document.getElementById('msg1').innerHTML = "please select any one hobby";
        return false;
    }
    
    // country
    if(str.country.value=="")
    {
         document.getElementById('msg1').innerHTML = "Please select any one country";
        str.country.focus();
        return false;
    }

      // country
    if(str.address.value=="")
    {
         document.getElementById('msg1').innerHTML = "Please some value in address";
        str.address.focus();
        return false;
    }

      // Photo
    if(str.photo.value=="")
    {
         document.getElementById('msg1').innerHTML = "Please upload your photo";
        str.photo.focus();
        return false;
    }
    var image= document.getElementById('photo');
    var img_size_mb=parseFloat(image.files[0].size / (1024 * 1024 )).toFixed(2);
    if(img_size_mb > 0.5){
        document.getElementById('msg1').innerHTML="Plaese select image size less than 500 kb";
        str.photo.focus();
        return false;
    }

    
      // Photo
    if(str.resume.value=="")
    {
         document.getElementById('msg1').innerHTML = "Please upload your resume";
        str.resume.focus();
        return false;
    }
    var resume= document.getElementById('resume');
    var resume_size_mb=parseFloat(resume.files[0].size / (1024 * 1024 )).toFixed(2);
    if(resume_size_mb > 0.5){
        document.getElementById('msg1').innerHTML="Plaese select resume size less than 500 kb";
        str.resume.focus();
        return false;
    }

    function check(file){
        var filename=file.value;
        var ext=filename.substring(filename.lastIndexOf('.')+1);
        if(ext=="jpg" || ext=="png" || ext=="jpeg" ||  ext=="gif" ||  ext=="JPG" ||  ext=="JPEG" ){
            document.getElementById('msg1').innerHTML="";
            document.getElementById('submit').disabled=false;

        }
        else{
             document.getElementById('msg1').innerHTML="please upload only jpg,jpeg file";
            document.getElementById('submit').disabled=true;
                
        }
    }

    function check1(file){
        var filename=file.value;
        var ext=filename.substring(filename.lastIndexOf('.')+1);
        if(ext=="pdf" || ext=="PDF"  ){
            document.getElementById('msg1').innerHTML="";
            document.getElementById('submit').disabled=false;

        }
        else{
             document.getElementById('msg1').innerHTML="please upload only jpg,jpeg file";
            document.getElementById('submit').disabled=true;
        }
    }
}