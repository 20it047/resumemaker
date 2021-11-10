let flag=1;

function addExperienceFields(){

    let months1=["--SELECT START MONTH--","January","February","March","April","May","June","July","September","October","November","December"];
    let years1=["--SELECT START YEAR",2014,2015,2016,2017,2018,2019,2020,2021];
    let months2=["--SELECT END MONTH--","January","February","March","April","May","June","July","September","October","November","December"];
    let years2=["--SELECT END YEAR",2014,2015,2016,2017,2018,2019,2020,2021];

    let br=document.createElement('br');
    let hr=document.createElement('hr');

    let newNode1=document.createElement('input');
    newNode1.classList.add("form","margin");
    newNode1.setAttribute("id","company_" +flag);
    newNode1.setAttribute("placeholder","Enter the Name of the Company");

    let newNode2=document.createElement('input');
    newNode2.classList.add("form","margin");
    newNode2.setAttribute("id","title_" +flag);
    newNode2.setAttribute("placeholder","Enter Your Job Title");

    let newNode3=document.createElement('select');
    newNode3.setAttribute("id","jstart_month_" +flag);
    newNode3.classList.add("margin");
    for(let i=0;i<months1.length;i++){
        let option=document.createElement("option");
        option.value=months1[i];
        option.text=months1[i];
        newNode3.appendChild(option);
    }

    let newNode4=document.createElement('select');
    newNode4.setAttribute("id","jstart_year_" +flag);
    newNode4.classList.add("margin");
    for(let i=0;i<years1.length;i++){
        let option=document.createElement("option");
        option.value=years1[i];
        option.text=years1[i];
        newNode4.appendChild(option);
    }

    let newNode5=document.createElement('select');
    newNode5.setAttribute("id","jend_month_" +flag);
    newNode5.classList.add("margin");
    for(let i=0;i<months2.length;i++){
        let option=document.createElement("option");
        option.value=months2[i];
        option.text=months2[i];
        newNode5.appendChild(option);
    }

    let newNode6=document.createElement('select');
    newNode6.setAttribute("id","jend_year_" +flag);
    newNode6.classList.add("margin");
    for(let i=0;i<years2.length;i++){
        let option=document.createElement("option");
        option.value=years2[i];
        option.text=years2[i];
        newNode6.appendChild(option);
    }

    let newNode7=document.createElement('textarea');
    newNode7.classList.add("form");
    newNode7.setAttribute("id","jdescription_" +flag);
    newNode7.setAttribute("placeholder","Enter Your Job Description");
    newNode7.setAttribute("rows",3);

    let instruction=document.getElementById("instruction");
    let addButton=document.getElementById("add");

    instruction.insertBefore(br,addButton);
    instruction.insertBefore(hr,addButton);
    instruction.insertBefore(newNode1,addButton);
    instruction.insertBefore(newNode2,addButton);
    instruction.insertBefore(newNode7,addButton);
    instruction.insertBefore(br,addButton);
    instruction.insertBefore(newNode3,addButton);
    instruction.insertBefore(newNode4,addButton);
    instruction.insertBefore(newNode5,addButton);
    instruction.insertBefore(newNode6,addButton);
    instruction.insertBefore(br,addButton);

    flag++;
    
}

function passvalue(){
    let comdetails1 = document.getElementById("company_0").value;
    localStorage.setItem("comvalue1",comdetails1);

    let roledetails1 = document.getElementById("title_0").value;
    localStorage.setItem("rolevalue1",roledetails1);

    let jobdisdetails1 = document.getElementById("jdescription_0").value;
    localStorage.setItem("jobdisvalue1",jobdisdetails1);


    let jsmonth1 = document.getElementById("jstart_month_0").value;
    localStorage.setItem("jsmonthvalue1",jsmonth1);

    let jsyear1 = document.getElementById("jstart_year_0").value;
    localStorage.setItem("jsyearvalue1",jsyear1);
    
    let jemonth1 = document.getElementById("jend_month_0").value;
    localStorage.setItem("jemonthvalue1",jemonth1);

    let jeyear1 = document.getElementById("jend_year_0").value;
    localStorage.setItem("jeyearvalue1",jeyear1);

    //2

    let comdetails2 = document.getElementById("company_1").value;
    localStorage.setItem("comvalue2",comdetails2);

    let roledetails2 = document.getElementById("title_1").value;
    localStorage.setItem("rolevalue2",roledetails2);

    let jobdisdetails2 = document.getElementById("jdescription_1").value;
    localStorage.setItem("jobdisvalue2",jobdisdetails2);


    let jsmonth2 = document.getElementById("jstart_month_1").value;
    localStorage.setItem("jsmonthvalue2",jsmonth2);

    let jsyear2 = document.getElementById("jstart_year_1").value;
    localStorage.setItem("jsyearvalue2",jsyear2);
    
    let jemonth2 = document.getElementById("jend_month_1").value;
    localStorage.setItem("jemonthvalue2",jemonth2);

    let jeyear2 = document.getElementById("jend_year_1").value;
    localStorage.setItem("jeyearvalue2",jeyear2);

    //3

    

    let roledetails3 = document.getElementById("title_2").value;
    localStorage.setItem("rolevalue3",roledetails3);

    let jobdisdetails3 = document.getElementById("jdescription_2").value;
    localStorage.setItem("jobdisvalue3",jobdisdetails3);


    let jsmonth3 = document.getElementById("jstart_month_2").value;
    localStorage.setItem("jsmonthvalue3",jsmonth3);

    let jsyear3 = document.getElementById("jstart_year_2").value;
    localStorage.setItem("jsyearvalue3",jsyear3);
    
    let jemonth3 = document.getElementById("jend_month_2").value;
    localStorage.setItem("jemonthvalue3",jemonth3);

    let jeyear3 = document.getElementById("jend_year_2").value;
    localStorage.setItem("jeyearvalue3",jeyear3);

    let comdetails3 = document.getElementById("company_2").value;
    localStorage.setItem("comvalue3",comdetails3);

    location.reload();




}